import {UiNode} from "../../../../script/ui_node.js"

class NameSubwindowUi
{
    constructor(content_class_name, content, input_node_creator)
    {
        this._content_class_name = content_class_name
        this._content = content
        this._input_node_creator = input_node_creator
    }

    create_window(values, value_updater)
    {
        UiNode.get_by_class(this._content_class_name).draw_nodes([
            this._input_node_creator(
                this._content.text_fields.name.label,
                {
                    value: values.name,
                    maxlength: this._content.text_fields.name.max_length,
                },
                (value) => value_updater("name", value)
            ),
            this._input_node_creator(
                this._content.text_fields.surname.label,
                {
                    value: values.surname,
                    maxlength: this._content.text_fields.surname.max_length,
                },
                (value) => value_updater("surname", value)
            ),
        ])
    }
}

export default NameSubwindowUi