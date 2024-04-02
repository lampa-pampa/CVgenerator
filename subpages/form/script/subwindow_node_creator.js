import {UiNode} from "../../../script/ui_node.js"

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
}


export default SubwindowNodeCreator