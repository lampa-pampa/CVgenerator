import {UiNode} from "../../../../script/ui_node.js"

class ThemeSubwindowUi
{
    constructor(
        content_class_name,
        content,
        layout_code_to_name,
        input_node_creator
    ){
        this._content_class_name = content_class_name
        this._content = content
        this._input_node_creator = input_node_creator
        this._layout_code_to_name = layout_code_to_name
    }

    create_window(value, value_updater)
    {
        UiNode.get_by_class(this._content_class_name).draw_nodes(
            this._input_node_creator({
                buttons: this._layout_code_to_name,
                cur_value: value,
                checkbox: {
                    title: this._content.checkbox.title,
                    svg: {
                        view_box: this._content.checkbox.svg.view_box,
                        path: this._content.checkbox.svg.path,
                    },
                },
                value_updater: value_updater,
            })
        )
    }
}

export default ThemeSubwindowUi