import {UiNode, UiNodeNs} from "../../../script/ui_node.js"

class SubwindowNodeCreators
{
    one_to_one(input_node_creator, values, content, value_updater)
    {
        const input_nodes = new Array()
        for(const [key, value] of values)
            input_nodes.push(
                input_node_creator(
                    content[key],
                    value,
                    (value) => value_updater(key, value)
                )
            )
        return input_nodes
    }

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

    static create_labeled_input(label, attributes, input_listener)
    {
        return new UiNode("li", "", {
            class: "space-between"
        }, [
            new UiNode("label", label),
            new UiNode("input", "", {
                class: "text-field border focusable",    
                ...attributes,
            }, [], {
                input: (e) => input_listener(e.target.value?.trim())
            })
        ])
    }
    
    static create_multiline_message(message)
    {
        return new UiNode("li", "", {}, [
            new UiNode("pre", message)
        ])
    }
    
    static create_multiline_input(text_content, attributes, input_listener)
    {
        return new UiNode("li", "", {}, [
            new UiNode("textarea", text_content, {
                class: "text-field border focusable",
                spellcheck: false,
                ...attributes,
            }, [], {
                input: (e) => input_listener(e.target.value?.trim())
            })
        ])
    }

    static create_radio_buttons(kwargs)
    {
        const radio_buttons = new Array()
        for(const [key, value] of Object.entries(kwargs.buttons))
            radio_buttons.push(
                SubwindowNodeCreators.create_labeled_checkbox({
                    label: value,
                    attributes: {
                        type: "radio",
                        name: "radio-button",
                        ...(key === kwargs.cur_value) ? {checked: ""} : null,
                    },
                    ...kwargs.checkbox,
                    input_listener: (e) => {
                        if(e.target.checked)
                            kwargs.value_updater(key)
                    },
                })
            )
        return radio_buttons
    }

    static create_labeled_checkbox(kwargs)
    {
        return new UiNode("li", "", {}, [
            new UiNode("label", "", {
                class: "custom-checkbox-label",
            }, [
                new UiNode("input", "", {
                    class: "checkbox",
                    ...kwargs.attributes,
                }, [], {
                    "change": kwargs.input_listener
                }),
                new UiNode("span", "", {
                    class: "custom-checkbox max-height border focusable square",
                    tabindex: 0,
                    "data-title": kwargs.title,
                }, [
                    new UiNode("span", "", {}, [
                        SubwindowNodeCreators.create_icon(kwargs.svg)
                    ]),
                ]),
                new UiNode("span", kwargs.label)
            ]),
        ])
    }

    static create_icon(kwargs)
    {
        return new UiNodeNs("svg", "", {
            class: "icon",
            viewBox: kwargs.view_box,
            toolBox: kwargs.view_box,
        }, [
            new UiNodeNs("path", "", {
                d: kwargs.path
            })
        ])
    }
}


export default SubwindowNodeCreators