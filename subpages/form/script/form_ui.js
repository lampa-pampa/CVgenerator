import {UiNode, UiNodeNs} from "../../../script/ui_node.js"

class FormUi
{
    constructor(section_class_names, content)
    {
        this._section_class_names = section_class_names
        this._content = content
        this._previous_button = UiNode.get_by_class(
            this._section_class_names.buttons.previous
        )
        this._next_button = UiNode.get_by_class(
            this._section_class_names.buttons.next
        )
    }

    create_window(click_handlers)
    {
        this._setup_reset_button(click_handlers.reset)
        this._setup_buttons(click_handlers)
    }

    _setup_reset_button(handler)
    {
        const reset_button = UiNode.get_by_class(
            this._section_class_names.reset_button
        )
        reset_button.set_attributes({
            "data-title": this._content.buttons.reset.title
        })
        reset_button.add_listeners({
            click: handler
        })
        reset_button.draw_nodes(this._create_reset_button_icon())
    }

    _create_reset_button_icon()
    {
        return new UiNodeNs("svg", "", {
            class: "icon",
            viewBox: this._content.buttons.reset.svg.view_box,
            toolBox: this._content.buttons.reset.svg.view_box,
        }, [
            new UiNodeNs("path", "", {
                d: this._content.buttons.reset.svg.path,
            })
        ])
    }

    set_subwindow_title(step_number, title)
    {
        UiNode.get_by_class(this._section_class_names.title).set_text_content(
            this._create_full_subwindow_title(step_number, title),
        )
    }

    _create_full_subwindow_title(step_number, title)
    {
        return this._content.step_number.prefix + step_number.toString()
            + this._content.step_number.suffix + title
    }

    set_previous_button_state(enabled)
    {
        this._set_button_state(
            this._previous_button,
            enabled
        )
    }

    set_next_button_state(enabled)
    {
        this._set_button_state(
            this._next_button,
            enabled
        )
    }

    _setup_buttons(click_handlers)
    {
        this._previous_button.add_listeners({
            click: click_handlers.previous
        })
        this._next_button.add_listeners({
            click: click_handlers.next
        })
        this._set_button_value(
            this._previous_button,
            this._content.buttons.previous.text,
            this._content.buttons.previous.title,
        )
        this._set_button_value(
            this._next_button,
            this._content.buttons.next.text,
            this._content.buttons.next.title,
        )
    }

    _set_button_value(button, text_content, title)
    {
        button.draw_nodes(new UiNode("span", text_content))
        button.set_attributes({
            "data-title": title
        })
    }

    _set_button_state(button, enabled)
    {
        button.set_attributes({
            "data-disabled": !enabled,
            tabindex: enabled ? 0 : -1,
        })
    }

    set_next_button_value(change_to_submit)
    {
        if(change_to_submit)
            this._set_button_value(
                this._next_button,
                this._content.buttons.submit.text,
                this._content.buttons.submit.title,
            )
        else    
            this._set_button_value(
                this._next_button,
                this._content.buttons.next.text,
                this._content.buttons.next.title,
            )
    }

    set_progress_bar_value(cur_step_index, steps_quantity)
    {
        UiNode.get_by_class(this._section_class_names.progress_bar).set_attributes({
            style: `width: ${cur_step_index / steps_quantity * 100}%;`
        })
        UiNode.get_by_class(this._section_class_names.progress_bar_state).set_text_content(
            this._create_progress_bar_state(cur_step_index, steps_quantity)
        )
    }

    _create_progress_bar_state(cur_step_index, steps_quantity)
    {
        if(cur_step_index == steps_quantity)
            return this._content.progress_bar_state.completed
        return cur_step_index
            + this._content.progress_bar_state.separator
            + steps_quantity
    }
}

export default FormUi