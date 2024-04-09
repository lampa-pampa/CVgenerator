import {get_parent, is_enabled} from "../../../../script/helpers.js"
import {UiNode, UiNodeNs} from "../../../../script/ui_node.js"

class SubwindowNodeCreators
{
    static labeled_text_field(content, value_getter, value_updater)
    {
        return new UiNode({
            tag: "li",
            attributes: {
                class: "space-between window-list-element"
            },
            child_nodes: [
                new UiNode({
                    tag: "label",
                    text_content: content.label,
                }),
                SubwindowNodeCreators.#create_text_field(
                    content.text_field,
                    value_getter(),
                    {
                        input: function(e) {
                            value_updater(this.value?.trim())
                        }
                    },
                )
            ],
        })
    }

    static #create_text_field(content, value, listeners)
    {
        return new UiNode({
            tag: "input",
            attributes: {
                class: "text-field border focusable max-height",    
                value: value,
                maxlength: content.max_length,
            },
            listeners,
        })
    }

    static text_area(content, value_getter, value_updater)
    {
        return new UiNode({
            tag: "li",
            attributes: {
                class: "window-list-element"
            },
            child_nodes: [
                new UiNode({
                    tag: "textarea",
                    text_content: value_getter(),
                    attributes: {
                        class: "text-field border focusable",
                        spellcheck: false,
                        placeholder: content.placeholder,
                        maxlength: content.max_length,
                    },
                    listeners: {
                        input: function() {
                            value_updater(this.value?.trim())
                        }
                    },
                }),
            ],
        })
    }
    
    static message(text_content)
    {
        return new UiNode({
            tag: "li",
            attributes: {
                class: "window-list-element"
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
            child_nodes: [
                new UiNode({
                    tag: "ul",
                    child_nodes: radio_buttons,
                }),
            ],
        })
    }

    static checkbox_buttons(content, value_getter, value_updater)
    {
        return new UiNode({
            tag: "li",
            child_nodes: [
                new UiNode({
                    tag: "ul",
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

    static #create_add_checkbox_section(value_getter, content, value_updater)
    {
        const add_button = SubwindowNodeCreators.#create_button(
            content.buttons.add,
            false,
        )
        const text_field = SubwindowNodeCreators.#create_add_checkbox_text_field(
            value_getter,
            content.text_field,
            add_button,
        )
        add_button.add_listeners({
            click: function(e) {
                const text_field_node = text_field.get_dom()
                value_updater(text_field_node.value.trim(), "add")
                get_parent(this, 2).insertBefore(
                    SubwindowNodeCreators.#create_extra_checkbox(
                        text_field_node.value.trim(),
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
                class: "custom-checkbox-label window-list-element",        
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
                class: "window-list-element custom-checkbox-label",
            },
            child_nodes: [
                SubwindowNodeCreators.#create_checkbox(
                    content.checkbox,
                    false,
                    true,
                    false,
                ),
                new UiNode({
                    tag: "span",
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

    static #create_add_checkbox_text_field(value_getter, content, add_button)
    {
        return SubwindowNodeCreators.#create_text_field(
            content,
            "",
            {
                input: function(e) {
                    const enabled = this.value
                        && !value_getter().includes(this.value.trim())
                    add_button.set_attributes({
                        "data-disabled": !enabled,
                        tabindex: (enabled) ? 0 : -1,
                    })
                },
                keydown: function(e) {
                    const button = add_button.get_dom()
                    if(e.key === "Enter" && is_enabled(button))
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
                            tag: "span",
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
            tag: "span",
            child_nodes: [
                new UiNode({
                    tag: "input",
                    attributes: {
                        class: "checkbox",
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
                        class: "custom-checkbox max-height border focusable square",
                        tabindex: (enabled) ? 0 : -1,
                        "data-disabled": !enabled,
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
                class: "button max-height border focusable square",
                "data-title": content.title,
                "data-disabled": !enabled,
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
                class: "icon",
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
}


export default SubwindowNodeCreators