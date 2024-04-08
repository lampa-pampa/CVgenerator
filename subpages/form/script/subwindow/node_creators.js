import {UiNode, UiNodeNs} from "../../../../script/ui_node.js"

class SubwindowNodeCreators
{
    static text_field(content, value, value_updater)
    {
        return new UiNode("li", "", {
            class: "space-between"
        }, [
            new UiNode("label", content.label),
            new UiNode("input", "", {
                class: "text-field border focusable",    
                value: value,
                maxlength: content.max_length,
            }, [], {
                input: (e) => value_updater(e.target.value?.trim())
            })
        ])
    }

    static text_area(content, value, value_updater)
    {
        return new UiNode("li", "", {}, [
            new UiNode("textarea", value, {
                class: "text-field border focusable",
                spellcheck: false,
                placeholder: content.placeholder,
                maxlength: content.max_length,
            }, [], {
                input: (e) => value_updater(e.target.value?.trim())
            })
        ])
    }
    
    static message(content)
    {
        return new UiNode("li", "", {}, [
            new UiNode("pre", content)
        ])
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
        return new UiNode("li", "", {}, [
            new UiNode("ul", "", {}, radio_buttons)
        ])
    }

    static #create_checkbox(label, attributes, content, value_updater)
    {
        return new UiNode("li", "", {}, [
            new UiNode("label", "", {
                class: "custom-checkbox-label",
            }, [
                new UiNode("input", "", {
                    class: "checkbox",
                    ...attributes,
                }, [], {
                    change: value_updater
                }),
                new UiNode("span", "", {
                    class: "custom-checkbox max-height border focusable square",
                    tabindex: 0,
                    "data-title": content.title,
                }, [
                    new UiNode("span", "", {}, [
                        SubwindowNodeCreators.#create_icon(content.svg)
                    ]),
                ]),
                new UiNode("span", label)
            ]),
        ])
    }

    static #create_icon(content)
    {
        return new UiNodeNs("svg", "", {
            class: "icon",
            viewBox: content.view_box,
            toolBox: content.view_box,
        }, [
            new UiNodeNs("path", "", {
                d: content.path
            })
        ])
    }
}


export default SubwindowNodeCreators