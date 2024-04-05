import {UiNode, UiNodeNs} from "../../../script/ui_node.js"

class SubwindowNodeCreator
{
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

    // <label class="custom-checkbox-label">
    //     <input class="checkbox" type="checkbox">
    //     <span tabindex="0" class="custom-checkbox max-height border focusable square" data-title="check">
    //         <span>
    //             <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" toolBox="0 0 24 24">
    //                 <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
    //             </svg>
    //         </span>
    //     </span>
    //     <span>option 1</span>
    // </label>
                    
    static get_checked(checked)
    {
        if(checked)
            return {checked: ""}
        return ""
    }

    static create_radio_buttons(kwargs)
    {
        const radio_buttons = new Array()
        for(const [key, value] of Object.entries(kwargs.buttons))
            radio_buttons.push(
                SubwindowNodeCreator.create_labeled_checkbox({
                    label: value,
                    attributes: {
                        type: "radio",
                        name: "radio-button",
                        ...SubwindowNodeCreator.get_checked(key === kwargs.cur_value),
                    },
                    ...kwargs.checkbox,
                    input_listener: (e) => {if(e.target.checked) kwargs.value_updater(key)},
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
                        SubwindowNodeCreator.create_icon(kwargs.svg)
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


export default SubwindowNodeCreator