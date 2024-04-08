import {UiNode, UiNodeNs} from "../../../../script/ui_node.js"

class SubwindowNodeCreators
{
    static labeled_text_field(content, value, value_updater)
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
                    value,
                    {
                        input: (e) => value_updater(e.target.value?.trim())
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
                class: "text-field border focusable",    
                value: value,
                maxlength: content.max_length,
            },
            listeners,
        })
    }

    static text_area(content, value, value_updater)
    {
        return new UiNode({
            tag: "li",
            attributes: {
                class: "window-list-element"
            },
            child_nodes: [
                new UiNode({
                    tag: "textarea",
                    text_content: value,
                    attributes: {
                        class: "text-field border focusable",
                        spellcheck: false,
                        placeholder: content.placeholder,
                        maxlength: content.max_length,
                    },
                    listeners: {
                        input: (e) => value_updater(e.target.value?.trim())
                    },
                }),
            ],
        })
    }
    
    static message(content)
    {
        return new UiNode({
            tag: "li",
            attributes: {
                class: "window-list-element"
            },
            child_nodes: [
                new UiNode({
                    tag: "pre",
                    text_content: content,
                }),
            ],
        })
    }

    static radio_buttons(content, value, value_updater)
    {
        const radio_buttons = new Array()
        for(const [key, label] of Object.entries(this.buttons))
            radio_buttons.push(
                SubwindowNodeCreators.#create_labeled_checkbox(
                    SubwindowNodeCreators.#create_checkbox(
                        content,
                        true,
                        key === value,
                        true,
                        (e) => {
                            if(e.target.checked)
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

    static checkbox_buttons(content, value, value_updater)
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
                            value,
                            value_updater,
                        ),
                        SubwindowNodeCreators.#create_add_checkbox_section(
                            this.values,
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
                        (e) => {
                            if(e.target.checked)
                                value_updater(cur_value, "add")
                            else
                                value_updater(cur_value, "remove")
                        },
                    ),
                    cur_value,
                )
            )
        }
        return checkbox_buttons
    }

    static #create_add_checkbox_section(values, content, value_updater)
    {
        const add_button = SubwindowNodeCreators.#create_button(
            content.add_button,
            false,
            () => console.log("add"),
        )
        const text_field = SubwindowNodeCreators.#create_add_checkbox_text_field(
            values,
            content.text_field,
            add_button,
        )
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
                        SubwindowNodeCreators.#create_checkbox(
                            content.checkbox,
                            false,
                            true,
                            false,
                        ),
                        text_field,
                        add_button,
                    ],
                }),
            ],
        })
    }

    static #create_add_checkbox_text_field(values, content, add_button)
    {
        return SubwindowNodeCreators.#create_text_field(
            content,
            "",
            {
                input: (e) => {
                    const enabled = e.target.value
                        && !values.includes(e.target.value.trim())
                    add_button.set_attributes({
                        "data-disabled": !enabled,
                        tabindex: (enabled) ? 0 : -1,
                    })
                },
                keydown: (e) => {
                    const button = add_button.get_dom()
                    if(e.key === "Enter"
                        && button.getAttribute("data-disabled") !== "true")
                    {
                        button.click()
                        e.target.focus()
                    }
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