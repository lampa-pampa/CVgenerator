import UiNode from "../../../../script/ui_node.js"

class NameSubwindowUi
{
    constructor(content_class_name, content)
    {
        this._content_class_name = content_class_name
        this._content = content
    }

    create_window()
    {
        UiNode.get_by_class(this._content_class_name).draw_nodes(
            new UiNode("span", this._content.text)
        )
    }
}

export default NameSubwindowUi