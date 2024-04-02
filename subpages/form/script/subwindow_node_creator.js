import {UiNode} from "../../../script/ui_node.js"

function create_labeled_input(label, args, listeners)
{
    return new UiNode("li", "", {
        class: "space-between"
    }, [
        new UiNode("label", label),
        new UiNode("input", "", {
            class: "text-field border focusable",    
            ...args,
        }, [], listeners)
    ])
}

function create_multiline_message(message)
{
    return new UiNode("li", "", {}, [
        new UiNode("pre", message)
    ])
}

export {create_labeled_input, create_multiline_message}