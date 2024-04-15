import {set_button_state} from "../../../script/helpers.js"
import {UiNode, UiNodeNs} from "../../../script/ui_node.js"

class FormUi
{
    #section_class_names
    #content
    #previous_button
    #next_button

    constructor(section_class_names, content)
    {
        this.#section_class_names = section_class_names
        this.#content = content
        this.#previous_button = UiNode.get_by_class(
            this.#section_class_names.buttons.previous
        )
        this.#next_button = UiNode.get_by_class(
            this.#section_class_names.buttons.next
        )
    }

    create_window(click_handlers)
    {
        this.#setup_reset_button(click_handlers.reset)
        this.#setup_buttons(click_handlers)
    }

    #setup_reset_button(handler)
    {
        const reset_button = UiNode.get_by_class(
            this.#section_class_names.reset_button
        )
        reset_button.set_attributes({
            "data-title": this.#content.buttons.reset.title
        })
        reset_button.add_listeners({
            click: handler
        })
        reset_button.draw_nodes(this.#create_reset_button_icon())
    }

    #create_reset_button_icon()
    {
        return new UiNodeNs({
            tag: "svg",
            attributes: {
                class: "icon",
                viewBox: this.#content.buttons.reset.svg.view_box,
                toolBox: this.#content.buttons.reset.svg.view_box,
            },
            child_nodes: [
                new UiNodeNs({
                    tag: "path",
                    attributes: {
                        d: this.#content.buttons.reset.svg.path,
                    },
                })
            ]
        })
    }

    set_subwindow_title(step_number, title)
    {
        UiNode.get_by_class(this.#section_class_names.title).set_text_content(
            this.#create_full_subwindow_title(step_number, title),
        )
    }

    #create_full_subwindow_title(step_number, title)
    {
        return this.#content.step_number.prefix + step_number.toString()
            + this.#content.step_number.suffix + title
    }

    set_previous_button_state(enabled)
    {
        set_button_state(
            this.#previous_button,
            enabled
        )
    }

    set_next_button_state(enabled)
    {
        set_button_state(
            this.#next_button,
            enabled
        )
    }

    #setup_buttons(click_handlers)
    {
        this.#previous_button.add_listeners({
            click: click_handlers.previous
        })
        this.#next_button.add_listeners({
            click: click_handlers.next
        })
        this.#set_button_value(
            this.#previous_button,
            this.#content.buttons.previous.text,
            this.#content.buttons.previous.title,
        )
        this.#set_button_value(
            this.#next_button,
            this.#content.buttons.next.text,
            this.#content.buttons.next.title,
        )
    }

    #set_button_value(button, text_content, title)
    {
        button.draw_nodes(new UiNode({
            tag: "span",
            text_content: text_content,
        }))
        button.set_attributes({
            "data-title": title
        })
    }

    set_next_button_value(change_to_submit)
    {
        if(change_to_submit)
            this.#set_button_value(
                this.#next_button,
                this.#content.buttons.submit.text,
                this.#content.buttons.submit.title,
            )
        else    
            this.#set_button_value(
                this.#next_button,
                this.#content.buttons.next.text,
                this.#content.buttons.next.title,
            )
    }

    set_progress_bar_value(cur_step_index, steps_quantity)
    {
        UiNode.get_by_class(this.#section_class_names.progress_bar).set_attributes({
            style: `width: ${cur_step_index / steps_quantity * 100}%;`
        })
        UiNode.get_by_class(this.#section_class_names.progress_bar_state).set_text_content(
            this.#create_progress_bar_state(cur_step_index, steps_quantity)
        )
    }

    #create_progress_bar_state(cur_step_index, steps_quantity)
    {
        if(cur_step_index == steps_quantity)
            return this.#content.progress_bar_state.completed
        return cur_step_index
            + this.#content.progress_bar_state.separator
            + steps_quantity
    }
}

export default FormUi