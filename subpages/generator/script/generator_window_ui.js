import {UiNode} from "../../../script/ui_node.js"

class GeneratorWindowUi {
    constructor(section_class_names, content)
    {
        this._section_class_names = section_class_names
        this._content = content
        this._download_button = UiNode.get_by_class(
            this._section_class_names.buttons.download
        )
        this._edit_button = UiNode.get_by_class(
            this._section_class_names.buttons.edit
        )
        this._create_button = UiNode.get_by_class(
            this._section_class_names.buttons.create
        )
    }

    create_window(click_handlers)
    {
        this._setup_title()
        this._setup_buttons(click_handlers)
    }

    _setup_title()
    {
        UiNode.get_by_class(this._section_class_names.title).set_text_content(
            this._content.title
        )
    }

    _setup_buttons(click_handlers)
    {
        this._download_button.add_listeners({
            click: click_handlers.download
        })
        this._edit_button.add_listeners({
            click: click_handlers.edit
        })
        this._create_button.add_listeners({
            click: click_handlers.create
        })
        this._set_button_value(
            this._download_button,
            this._content.buttons.download.text,
            this._content.buttons.download.title,
        )
        this._set_button_value(
            this._edit_button,
            this._content.buttons.edit.text,
            this._content.buttons.edit.title,
        )
        this._set_button_value(
            this._create_button,
            this._content.buttons.create.text,
            this._content.buttons.create.title,
        )
    }

    _set_button_value(button, text_content, title)
    {
        button.draw_nodes(new UiNode("span", text_content))
        button.set_attributes({
            "data-title": title
        })
    }
}

export default GeneratorWindowUi