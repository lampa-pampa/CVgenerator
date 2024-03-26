import UiNode from "../../../../script/ui_node.js"

class NameSubwindowUi
{
    constructor(content_class_name)
    {
        this._content_class_name = content_class_name
    }

    create_content(content)
    {
        UiNode.get_by_class(this._content_class_name).draw_nodes(
            new UiNode("span", {
                textContent: content.text
            })
        )
    }
}

export default NameSubwindowUi