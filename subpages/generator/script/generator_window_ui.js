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
        this.#animate_progress_bar()
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
        )
        this.#set_button_value(
            this.#edit_button,
            this.#content.buttons.edit.text,
        )
        this.#set_button_value(
            this.#create_button,
            this.#content.buttons.create.text,
        )
    }

    #set_button_value(button, text_content)
    {
        button.draw_nodes(new UiNode({
            tag: "span",
            text_content: text_content,
        }))
    }

    #animate_progress_bar()
    {
        UiNode.get_by_class(this.#section_class_names.progress_bar).set_attributes({
            style: `width: 100%;`
        })
        this.#animate_progress_bar_state(0)
    }

    #set_progress_bar_state(state)
    {
        UiNode.get_by_class(this.#section_class_names.progress_bar_state).set_text_content(
            state
        )
    }

    async #animate_progress_bar_state(value)
    {
        if(value < 100)
        {
            this.#set_progress_bar_state(
                this.#content.progress_bar_state.prefix
                    + value + this.#content.progress_bar_state.suffix
            )
            await new Promise((resolve) => setTimeout(resolve, 10))
            this.#animate_progress_bar_state(value + 5)
        }
        else
        {
            this.#set_progress_bar_state(
                this.#content.progress_bar_state.completed
            )
        }
    }
}

export default GeneratorWindowUi