import {UiNode, UiNodeNs} from "../../../../script/ui_node.js"

class SubwindowNodeCreators
{
    static text_field(content, value, value_updater)
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
                new UiNode({
                    tag: "input",
                    attributes: {
                        class: "text-field border focusable",    
                        value: value,
                        maxlength: content.max_length,
                    },
                    listeners: {
                        input: (e) => value_updater(e.target.value?.trim())
                    },
                }),
            ],
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
                SubwindowNodeCreators.#create_checkbox(
                    label,
                    {
                        type: "radio",
                        name: "radio-button",
                        ...(key === value) ? {checked: ""} : null,
                    },
                    content,
                    (e) => {
                        if(e.target.checked)
                            value_updater(key)
                    },
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
        const checkbox_buttons = new Array()
        for(const code of this.codes)
            checkbox_buttons.push(
                SubwindowNodeCreators.#create_checkbox(
                    this.code_to_name[code],
                    {
                        type: "checkbox",
                        ...(value.includes(code)) ? {checked: ""} : null,
                    },
                    content,
                    (e) => {
                        if(e.target.checked)
                            value_updater(code, "add")
                        else
                            value_updater(code, "remove")
                    },
                )
            )
        return new UiNode({
            tag: "li",
            child_nodes: [
                new UiNode({
                    tag: "ul",
                    child_nodes: checkbox_buttons,
                }),
            ],
        })
    }

    static #create_checkbox(label, attributes, content, value_updater)
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
                        new UiNode({
                            tag: "input",
                            attributes: {
                                class: "checkbox",
                                ...attributes,
                            },
                            listeners: {
                                change: value_updater
                            },
                        }),
                        new UiNode({
                            tag: "span",
                            attributes: {
                                class: "custom-checkbox max-height border focusable square",
                                tabindex: 0,
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
                        new UiNode({
                            tag: "span",
                            text_content: label,
                        }),
                    ],
                }),
            ],
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