import {run_animation, set_button_state} from "../../../script/helpers.js"
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
        )
        this.#set_button_value(
            this.#next_button,
            this.#content.buttons.next.text,
        )
    }

    #set_button_value(button, text_content)
    {
        button.draw_nodes(new UiNode({
            tag: "span",
            text_content: text_content,
        }))
    }

    set_next_button_value(change_to_submit)
    {
        if(change_to_submit)
            this.#set_button_value(
                this.#next_button,
                this.#content.buttons.submit.text,
            )
        else    
            this.#set_button_value(
                this.#next_button,
                this.#content.buttons.next.text,
            )
    }

    set_progress_bar_value(cur_step_index, steps_quantity)
    {
        UiNode.get_by_class(this.#section_class_names.progress_bar).set_attributes({
            style: `
                width: ${cur_step_index / steps_quantity * 100}%;
                transition: width ${this.#content.progress_bar.width_transition_duration}ms;    
            `
        })
        UiNode.get_by_class(this.#section_class_names.progress_bar_state).set_text_content(
            cur_step_index
                + this.#content.progress_bar.state.separator
                + steps_quantity
        )
    }

    animate_previous_step()
    {
        run_animation(
            UiNode.get_by_class(this.#section_class_names.subwindow_list),
            this.#content.animations.previous_step.name,
            this.#content.animations.previous_step.duration,
        )
    }

    animate_next_step()
    {
        run_animation(
            UiNode.get_by_class(this.#section_class_names.subwindow_list),
            this.#content.animations.next_step.name,
            this.#content.animations.next_step.duration,
        )
    }
}

export default FormUi