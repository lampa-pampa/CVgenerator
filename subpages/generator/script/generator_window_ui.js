import {UiNode} from "../../../script/ui_node.js"

class GeneratorWindowUi {
    #section_class_names
    #content
    #download_button
    #edit_button
    #create_button
    
    constructor(section_class_names, content)
    {
        this.#section_class_names = section_class_names
        this.#content = content
        this.#download_button = UiNode.get_by_class(
            this.#section_class_names.buttons.download
        )
        this.#edit_button = UiNode.get_by_class(
            this.#section_class_names.buttons.edit
        )
        this.#create_button = UiNode.get_by_class(
            this.#section_class_names.buttons.create
        )
    }

    create_window(click_handlers)
    {
        this.#setup_title()
        this.#setup_buttons(click_handlers)
    }

    #setup_title()
    {
        UiNode.get_by_class(this.#section_class_names.title).set_text_content(
            this.#content.title
        )
    }

    #setup_buttons(click_handlers)
    {
        this.#download_button.add_listeners({
            click: click_handlers.download
        })
        this.#edit_button.add_listeners({
            click: click_handlers.edit
        })
        this.#create_button.add_listeners({
            click: click_handlers.create
        })
        this.#set_button_value(
            this.#download_button,
            this.#content.buttons.download.text,
            this.#content.buttons.download.title,
        )
        this.#set_button_value(
            this.#edit_button,
            this.#content.buttons.edit.text,
            this.#content.buttons.edit.title,
        )
        this.#set_button_value(
            this.#create_button,
            this.#content.buttons.create.text,
            this.#content.buttons.create.title,
        )
    }

    #set_button_value(button, text_content, title)
    {
        button.draw_nodes(new UiNode("span", text_content))
        button.set_attributes({
            "data-title": title
        })
    }
}

export default GeneratorWindowUi