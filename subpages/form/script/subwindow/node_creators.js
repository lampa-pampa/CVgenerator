import {get_parent, is_enabled, set_button_state} from "../../../../script/helpers.js"
import {UiNode, UiNodeNs} from "../../../../script/ui_node.js"

class SubwindowNodeCreators
{
    static labeled_text_field(content, value_getter, value_updater)
    {
        const input = SubwindowNodeCreators.#create_text_field(
            content.text_field,
            value_getter(),
            value_updater,
        )
        const labeled_text_field = new UiNode({
            tag: "li",
            attributes: {
                class: "window-list-element labeled-text-input"
            },
            child_nodes: [
                new UiNode({
                    tag: "label",
                    child_nodes: [
                        new UiNode({
                            tag: "pre",
                            text_content: content.label,
                        }),
                        input,  
                    ]
                })
            ],
        })
        labeled_text_field.get_text_input = () => input.get_text_input()
        return labeled_text_field
    }

    static #create_text_field(content, value, value_updater, extra_listeners)
    {
        const input = new UiNode({
            tag: "div",
            attributes: {
                "data-error-message": content.error_message,
            },
            child_nodes: [
                new UiNode({
                    tag: "input",
                    attributes: {
                        type: "text",
                        value: value,
                        maxlength: content.max_length,
                    },
                    listeners: {
                        input: function() {
                            const re = RegExp(`^(${content.format})$`, "u")
                            if(re.test(this.value))
                            {
                                value_updater(this.value)
                                this.parentNode.classList.remove("error")
                            }
                            else
                            {
                                value_updater("")
                                if(this.value.length > 0)
                                    this.parentNode.classList.add("error")
                                else
                                    this.parentNode.classList.remove("error")
                            }
                        },
                        ...extra_listeners,
                    },
                })
            ],
        })
        input.get_text_input = function() {
            return this.get_dom().childNodes[0]
        }
        return input
    }

    static text_area(content, value_getter, value_updater)
    {
        return new UiNode({
            tag: "li",
            attributes: {
                class: "window-list-element text-area"
            },
            child_nodes: [
                new UiNode({
                    tag: "textarea",
                    text_content: value_getter(),
                    attributes: {
                        spellcheck: false,
                        placeholder: content.placeholder,
                        maxlength: content.max_length,
                    },
                    listeners: {
                        input: function() {
                            value_updater(this.value)
                        }
                    },
                }),
            ],
        })
    }

    static duration_and_place_list(content, value_getter, value_updater)
    {
        return new UiNode({
            tag: "ul",
            attributes: {
                tabindex: -1,
            },
            child_nodes: [
                ...SubwindowNodeCreators.#create_duration_and_place_list(
                    value_getter(),
                    content.list_element,
                    value_updater
                ),
                SubwindowNodeCreators.#create_add_duration_and_place_section(
                    content,
                    value_getter,
                    value_updater,
                ),
            ],
        })
    }

    static #create_add_duration_and_place_section(content, value_getter, value_updater)
    {
        const value_pack = ["", "", ""]
        
        const add_button = SubwindowNodeCreators.#create_button(
            content.add_section.button,
            false,
            function() {
                const value = [...value_pack]
                value_updater(value, "add")
                get_parent(this, 4).insertBefore(
                    SubwindowNodeCreators.#create_duration_and_place_element(
                        value,
                        content.list_element,
                        value_updater,
                    ).get_dom(),
                    get_parent(this, 3)
                )
                for(const labeled_text_field of labeled_text_fields)
                {
                    const dom = labeled_text_field.get_text_input()
                    dom.value = ""
                    dom.dispatchEvent(new Event("input"))
                }
                const list = get_parent(this, 5)
                list.scrollTo(0, list.scrollHeight);
            },
        )
        
        const labeled_text_fields = [
            SubwindowNodeCreators.labeled_text_field(
                content.add_section.text_fields.from,
                () => "",
                (value) => update_value_pack(
                    value_getter().length < content.max_quantity,
                    value_pack,
                    0,
                    value
                )
            ),
            SubwindowNodeCreators.labeled_text_field(
                content.add_section.text_fields.to,
                () => "",
                (value) => update_value_pack(
                    value_getter().length < content.max_quantity,
                    value_pack,
                    1,
                    value
                )
            ),
            SubwindowNodeCreators.labeled_text_field(
                content.add_section.text_fields.place,
                () => "",
                (value) => update_value_pack(
                    value_getter().length < content.max_quantity,
                    value_pack,
                    2,
                    value
                )
            ),
        ]

        function value_pack_is_valid(pack)
        {
            for(const element of pack)
            {
                if(!element?.length > 0)
                    return false
            }
            return true
        }

        function update_value_pack(can_add_new_element, value_pack2, index, value)
        {
            value_pack[index] = value
            const enabled = value_pack_is_valid(value_pack)
                && can_add_new_element
            set_button_state(add_button, enabled)
        }

        return new UiNode({
            tag: "li",
            attributes: {
                class: "window-list-element add-duration-and-place-section",
            },
            child_nodes: [
                new UiNode({
                    tag: "ul",
                    attributes: {
                        tabindex: -1,
                    },
                    child_nodes: [
                        ...labeled_text_fields,
                        new UiNode({
                            tag: "div",
                            attributes: {
                                class: "add-button-container"
                            },
                            child_nodes: [
                                add_button,
                            ],
                        }),
                    ],
                })
            ]
        })
    }

    static #create_duration_and_place_list(values, content, value_updater)
    {
        const elements = new Array()
        for(const value of values)
        {
            elements.push(
                SubwindowNodeCreators.#create_duration_and_place_element(
                    value,
                    content,
                    value_updater
                )
            )
        }
        return elements
    }

    static #create_duration_and_place_element(value, content, value_updater)
    {
        return new UiNode({
            tag: "li",
            attributes: {
                class: "window-list-element duration-and-place-element",
            },
            child_nodes: [
                new UiNode({
                    tag: "pre",
                    text_content: value[0]
                        + content.duration_separator + value[1] + "\n"
                        + content.place_prefix + value[2] 
                }),
                SubwindowNodeCreators.#create_button(
                    content.button,
                    true,
                    function() {
                        value_updater(value, "remove")
                        this.parentNode.remove()
                    },
                )
            ],
        })
    }
    
    static message(text_content)
    {
        return new UiNode({
            tag: "li",
            attributes: {
                class: "window-list-element message"
            },
            child_nodes: [
                new UiNode({
                    tag: "pre",
                    text_content: text_content,
                }),
            ],
        })
    }

    static radio_buttons(content, value_getter, value_updater)
    {
        const radio_buttons = new Array()
        for(const [key, label] of Object.entries(this.buttons))
            radio_buttons.push(
                SubwindowNodeCreators.#create_labeled_checkbox(
                    SubwindowNodeCreators.#create_checkbox(
                        content,
                        true,
                        key === value_getter(),
                        true,
                        function () {
                            if(this.checked)
                                value_updater(key)
                        },
                    ),
                    label,
                )
            )
        return new UiNode({
            tag: "li",
            attributes: {
                class: "window-list-element radio-buttons"
            },
            child_nodes: [
                new UiNode({
                    tag: "ul",
                    attributes: {
                        tabindex: -1,
                    },
                    child_nodes: radio_buttons,
                }),
            ],
        })
    }

    static checkbox_buttons(content, value_getter, value_updater)
    {
        return new UiNode({
            tag: "li",
            attributes: {
                class: "window-list-element checkbox-buttons"
            },
            child_nodes: [
                new UiNode({
                    tag: "ul",
                    attributes: {
                        tabindex: -1,
                    },
                    child_nodes: [
                        ...SubwindowNodeCreators.#create_checkbox_buttons(
                            this.values,
                            content.checkbox,
                            value_getter(),
                            value_updater,
                        ),
                        ...SubwindowNodeCreators.#create_extra_checkboxes(
                            value_getter().filter(((value) => !this.values.includes(value))),
                            content,
                            value_updater,
                        ),
                        SubwindowNodeCreators.#create_add_checkbox_section(
                            this.values,
                            value_getter,
                            content,
                            value_updater,
                        ),
                    ],
                }),
            ],
        })
    }

    static #create_checkbox_buttons(values, content, value, value_updater)
    {
        const checkbox_buttons = new Array()
        for(const cur_value of values)
        {
            checkbox_buttons.push(
                SubwindowNodeCreators.#create_labeled_checkbox(
                    SubwindowNodeCreators.#create_checkbox(
                        content,
                        false,
                        value.includes(cur_value),
                        true,
                        function() {
                            value_updater(
                                cur_value, (this.checked) ? "add" : "remove"
                            )
                        },
                    ),
                    cur_value,
                )
            )
        }
        return checkbox_buttons
    }

    static #create_extra_checkboxes(values, content, value_updater)
    {
        const extra_checkboxes = new Array()
        for(const value of values)
        {
            extra_checkboxes.push(
                SubwindowNodeCreators.#create_extra_checkbox(
                    value,
                    content,
                    value_updater,
                )
            )
        }
        return extra_checkboxes
    }

    static #create_add_checkbox_section(default_values, value_getter, content, value_updater)
    {
        const add_button = SubwindowNodeCreators.#create_button(
            content.buttons.add,
            false,
        )
        const text_field = SubwindowNodeCreators.#create_add_checkbox_text_field(
            default_values,
            value_getter,
            content,
            add_button,
        )
        add_button.add_listeners({
            click: function(e) {
                const text_field_node = text_field.get_text_input()
                value_updater(text_field_node.value, "add")
                get_parent(this, 2).insertBefore(
                    SubwindowNodeCreators.#create_extra_checkbox(
                        text_field_node.value,
                        content,
                        value_updater,
                    ).get_dom(),
                    get_parent(this),
                )
                text_field_node.value = ""
                text_field_node.dispatchEvent(new Event("input"))
                const list = get_parent(this, 4)
                list.scrollTo(0, list.scrollHeight);
            }
        })
        return new UiNode({
            tag: "li",
            attributes: {
                class: "window-list-element checkbox-with-button",        
            },
            child_nodes: [
                SubwindowNodeCreators.#create_checkbox(
                    content.checkbox,
                    false,
                    true,
                    false,
                ),
                text_field,
                add_button,
            ],
        })
    }

    static #create_extra_checkbox(value, content, value_updater)
    {
        return new UiNode({
            tag: "li",
            attributes: {
                class: "window-list-element checkbox-with-button extra",
            },
            child_nodes: [
                SubwindowNodeCreators.#create_checkbox(
                    content.checkbox,
                    false,
                    true,
                    false,
                ),
                new UiNode({
                    tag: "pre",
                    text_content: value
                }),
                SubwindowNodeCreators.#create_button(
                    content.buttons.remove,
                    true,
                    function(e) {
                        value_updater(value, "remove"),
                        this.parentNode.remove()
                    }
                )
            ],
        })
    }

    static #create_add_checkbox_text_field(default_values, value_getter, content, add_button)
    {
        return SubwindowNodeCreators.#create_text_field(
            content.text_field,
            "",
            function(value) {
                const enabled = value
                    && !value_getter().includes(value)
                    && !default_values.includes(value)
                    && value_getter().filter(
                        (value) => !default_values.includes(value)
                    ).length < content.max_quantity
                set_button_state(add_button, enabled)
            },
            {
                keydown: function(e) {
                    const button = add_button.get_dom()
                    if(value_getter().filter(
                        (value) => !default_values.includes(value)
                    ).length >= content.max_quantity)
                        e.preventDefault()
                    else if(e.key === "Enter" && is_enabled(button))
                        button.click()
                }
            },
        )
    }

    static #create_labeled_checkbox(checkbox, label)
    {
        return new UiNode({
            tag: "li",
            attributes: {
                class: "window-list-element"    
            },
            child_nodes: [
                new UiNode({
                    tag: "label",
                    attributes: {
                        class: "custom-checkbox-label",      
                    },
                    child_nodes: [
                        checkbox,
                        new UiNode({
                            tag: "pre",
                            text_content: label,
                        }),
                    ],
                }),
            ],
        })
    }

    static #create_checkbox(
        content,
        radio,
        checked,
        enabled,
        value_updater
    ){
        return new UiNode({
            tag: "div",
            attributes: {
                class: "focusable",
            },
            child_nodes: [
                new UiNode({
                    tag: "input",
                    attributes: {
                        class: "hidden checkbox",
                        ...(!enabled) ? {disabled: ""} : null,
                        ...(radio)
                            ? {type: "radio", name: "radio-button"}
                            : {type: "checkbox"},
                        ...(checked) ? {checked: ""} : null,
                    },
                    listeners: {
                        change: value_updater
                    },
                }),
                new UiNode({
                    tag: "div",
                    attributes: {
                        class: "custom-checkbox",
                        tabindex: (enabled) ? 0 : -1,
                        ...(!enabled) ? {disabled: ""} : null,
                    },
                    child_nodes: [
                        new UiNode({
                            tag: "span",
                            child_nodes: [
                                SubwindowNodeCreators.#create_icon(content.svg)
                            ],
                        })
                    ],
                }),
            ],
        })
    }

    static #create_button(content, enabled, click_handler)
    {
        return new UiNode({
            tag: "button",
            attributes: {
                class: "square-button",
                "data-title": content.title,
                ...(!enabled) ? {disabled: ""} : null,
                tabindex: (enabled) ? 0 : -1,
            },
            child_nodes: [
                SubwindowNodeCreators.#create_icon(content.svg)
            ],
            listeners: {
                click: click_handler
            }
        })
    }

    static #create_icon(content)
    {
        return new UiNodeNs({
            tag: "svg",
            attributes: {
                viewBox: content.view_box,
                toolBox: content.view_box,
            },
            child_nodes: [
                new UiNodeNs({
                    tag: "path",
                    attributes: {
                        d: content.path
                    },
                }),
            ],
        })
    }

    static image(content, value_getter, value_updater)
    {
        const file_reader = new FileReader()
        file_reader.addEventListener("load", function() {
            value_updater(file_reader.result)
        })
        const image_preview = new UiNode({
            tag: "img",
            attributes: {
                draggable: false,
                src: value_getter(),
            },
        })
        const image_input = new UiNode({
            tag: "input",
            attributes: {
                class: "hidden",
                type: "file",
                accept: content.extensions,
            },
            listeners: {
                change: function() {
                    const image = this.files[0]
                    if(image)
                    {
                        image_preview.set_attributes({
                            src: URL.createObjectURL(image),
                        })
                        file_reader.readAsDataURL(image)
                    }
                }
            },
        })
        return new UiNode({
            tag: "li",
            attributes: {
                class: "window-list-element image-input"
            },
            child_nodes: [
                new UiNode({
                    tag: "pre",
                    text_content: content.label
                        + content.size.width
                        + content.size.separator
                        + content.size.height
                        + content.size.unit,
                }),
                new UiNode({
                    tag: "button",
                    child_nodes: [
                        SubwindowNodeCreators.#create_icon(content.svg),
                        image_preview,
                    ],
                    attributes: {
                        "data-title": content.title,
                        style: `
                            width: ${content.size.width + content.size.unit};
                            height: ${content.size.height + content.size.unit};
                        `
                    },
                    listeners: {
                        click: function() {
                            image_input.get_dom().click()
                        }
                    },
                }),
            ],
        })
    }
}


export default SubwindowNodeCreators