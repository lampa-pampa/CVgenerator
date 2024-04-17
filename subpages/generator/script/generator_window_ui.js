import {UiNode} from "../../../script/ui_node.js"
import {set_button_state} from "../../../script/helpers.js"

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

    create_window(click_handlers, cv_node)
    {
        this.#setup_title()
        this.#setup_buttons(click_handlers)
        this.#setup_cv_preview(cv_node)
    }

    #setup_cv_preview(cv_node)
    {
        UiNode.get_by_class(
            this.#section_class_names.cv_preview
        ).draw_nodes(cv_node)
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
        set_button_state(
            this.#edit_button,
            true
        )
        set_button_state(
            this.#create_button,
            true
        )
    }

    #set_button_value(button, text_content)
    {
        button.draw_nodes(new UiNode({
            tag: "span",
            text_content: text_content,
        }))
    }

    async animate_progress_bar()
    {
        set_button_state(this.#download_button, false)
        UiNode.get_by_class(this.#section_class_names.progress_bar).remove_attributes(
            "style"
        )
        document.body.offsetWidth
        UiNode.get_by_class(this.#section_class_names.progress_bar).set_attributes({
            style: `animation-name: loading`
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
            set_button_state(this.#download_button, true)
        }
    }
}

export default GeneratorWindowUi