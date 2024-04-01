import {UiNode} from "../../../../script/ui_node.js"

class NameSubwindowUi
{
    constructor(content_class_name, content)
    {
        this._content_class_name = content_class_name
        this._content = content
        this._text_fields = null
    }

    create_window(values, value_updater)
    {
        UiNode.get_by_class(this._content_class_name).draw_nodes([
            this._create_list_element(
                this._content.labels.name,
                this._create_text_field(
                    values.name,
                    (value) => value_updater("name", value),
                ),
            ),
            this._create_list_element(
                this._content.labels.surname,
                this._create_text_field(
                    values.surname,
                    (value) => value_updater("surname", value)
                ),
            ),
        ])
    }
    
    _create_text_field(value, value_updater)
    {
        return new UiNode("input", "", {
            class: "text-field border focusable",
            type: "text",
            value: value,
        }, [], {
            "input": (e) => value_updater(e.target.value),
        })
    }

    _create_list_element(label, text_field)
    {
        return new UiNode("li", "", {
            class: "space-between",
        }, [
            new UiNode("span", label),
            text_field,
        ])
    }
}

export default NameSubwindowUi