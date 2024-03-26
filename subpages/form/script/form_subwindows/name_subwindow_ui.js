import UiNode from "../../../../script/ui_node.js"

class NameSubwindowUi
{
    constructor(section_class_names)
    {
        this._section_class_names = section_class_names
    }

    create_content(content)
    {
        UiNode.get_by_class(this._section_class_names.content).draw_nodes(
            new UiNode("span", {
                textContent: content.text
            })
        )
    }
}

export default NameSubwindowUi