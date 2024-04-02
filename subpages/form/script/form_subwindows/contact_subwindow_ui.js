import {UiNode} from "../../../../script/ui_node.js"

class ContactSubwindowUi
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
                this._content.text_fields.email.label,
                {
                    value: values.email,
                    maxlength: this._content.text_fields.email.max_length,
                    type: "email",
                },
                {
                    input: (e) => value_updater("email", e.target.value),    
                }
            ),
            this._input_node_creator(
                this._content.text_fields.phone.label,
                {
                    value: values.phone,
                    maxlength: this._content.text_fields.phone.max_length,
                    type: "tel",
                },
                {
                    input: (e) => value_updater("phone", e.target.value),    
                }
            ),
        ])
    }
}

export default ContactSubwindowUi