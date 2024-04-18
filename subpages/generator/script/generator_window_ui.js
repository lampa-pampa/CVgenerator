import {UiNode} from "../../../script/ui_node.js"
import {set_button_state} from "../../../script/helpers.js"

class GeneratorWindowUi {
    #section_class_names
    #content
    #download_button
    #edit_button
    #create_button
    #cv
    
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
        this.#setup_html2pdf_script()
        this.#setup_title()
        this.#setup_buttons(click_handlers)
        this.#cv = cv_node
        this.#setup_cv_preview()
    }

    #setup_html2pdf_script()
    {
        UiNode.get_head().append_nodes(
            new UiNode({
                tag: "script",
                attributes: {
                    type: "application/javascript",
                    src: this.#content.html2pdf.script_src,
                },
            })
        )
    }

    #setup_cv_preview()
    {
        UiNode.get_by_class(
            this.#section_class_names.cv_preview
        ).draw_nodes(this.#cv)
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

    async #animate_progress_bar()
    {
        set_button_state(this.#download_button, false)
        this.#set_progress_bar_state(
            this.#content.progress_bar_state.preparing
        )
        UiNode.get_by_class(this.#section_class_names.progress_bar).remove_attributes(
            "style"
        )
        document.body.offsetWidth
        UiNode.get_by_class(this.#section_class_names.progress_bar).set_attributes({
            style: `animation-duration: ${this.#content.download_animation_duration}ms; animation-name: loading;`
        })

        await new Promise((resolve) => setTimeout(resolve, 2000))
        set_button_state(this.#download_button, true)
        this.#set_progress_bar_state(
            this.#content.progress_bar_state.completed
        )
    }

    #set_progress_bar_state(state)
    {
        UiNode.get_by_class(this.#section_class_names.progress_bar_state).set_text_content(
            state
        )
    }

    download_cv()
    {
        this.#animate_progress_bar()
        html2pdf(this.#cv.get_dom(), {
            filename: this.#content.html2pdf.file_name,
            image: {
                type: this.#content.html2pdf.image_extension
            },
            html2canvas: {
                scale: this.#content.html2pdf.pixel_ratio,
                imageTimeout: this.#content.download_animation_duration,
            },
        })
    }
}

export default GeneratorWindowUi