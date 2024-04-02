import {UiNode} from "../../../../script/ui_node.js"

class AdditionalInfoSubwindowUi
{
    constructor(content_class_name, content, input_node_creator)
    {
        this._content_class_name = content_class_name
        this._content = content
        this._input_node_creator = input_node_creator
    }

    create_window(value, value_updater)
    {
        UiNode.get_by_class(this._content_class_name).draw_nodes([
            this._input_node_creator(
                value,
                {
                    placeholder: this._content.text_area.placeholder,
                    maxlength: this._content.text_area.max_length,
                },
                value_updater
            ),
        ])
    }
}

export default AdditionalInfoSubwindowUi