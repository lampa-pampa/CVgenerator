import UiNode from "./ui_node.js"

class UiNodeNs extends UiNode
{
    _create_element(tag_name)
    {
        return document.createElementNS(
            "http://www.w3.org/2000/svg", tag_name
        )
    }
}

export default UiNodeNs