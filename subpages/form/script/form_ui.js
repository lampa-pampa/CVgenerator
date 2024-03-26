import UiNode from "../../../script/ui_node.js"
import UiNodeNs from "../../../script/ui_node_ns.js"

class FormUi
{
    constructor(section_class_names, content)
    {
        this._section_class_names = section_class_names
        this._content = content
        this._previous_button = null
        this._next_button = null
        this._subwindow_title_display = null
        this._progress_bar_state_display = null
        this._progress_bar = null
    }

    create_window(click_handlers)
    {
        this._create_header(click_handlers.reset)
        this._create_subwindow_display(click_handlers)
        this._create_footer()
    }

    _create_header(reset_button_click_handler)
    {
        this._subwindow_title_display = this._create_subwindow_title_display()
        UiNode.get_by_class(this._section_class_names.header).draw_nodes([
            this._subwindow_title_display,
            this._create_reset_button_container(reset_button_click_handler),
        ])
    }
    
    _create_subwindow_title_display()
    {
        return new UiNode("h2", "", {
            class: "window-title",
        })
    }
    
    _create_reset_button_container(click_handler)
    {
        return new UiNode("div", "", {
            class: "reset-button-container square center-content max-height",
        }, [
            this._create_reset_button(click_handler)
        ])
    }

    _create_reset_button(click_handler)
    {
        return new UiNode("button", "", {
            class: "button spin-icon focusable square",
            "data-title": this._content.buttons.reset.title,
        }, [
            new UiNodeNs("svg", "", {
                class: "icon",
                viewBox: this._content.buttons.reset.icon.view_box,
                toolBox: this._content.buttons.reset.icon.view_box,
            }, [
                new UiNodeNs("path", "", {
                    d: this._content.buttons.reset.icon.path,
                })
            ])
        ], {
            "click": click_handler
        })
    }

    _create_subwindow_display(click_handlers)
    {
        UiNode.get_by_class(
            this._section_class_names.subwindow_display).draw_nodes([
                new UiNode("ul", "", {
                    class: "window-list",
                    tabindex: -1,
                }),
                this._create_buttons_container(click_handlers),
        ])
    }

    _create_buttons_container(click_handlers)
    {
        this._previous_button = this._create_previous_button(
            click_handlers.previous_button
        )
        this._next_button = this._create_next_button(
            click_handlers.next_button
        )
        return new UiNode("div", "", {
            class: "form-buttons-container shadow",
        }, [
            this._previous_button,
            this._next_button,
        ])
    }

    _create_previous_button(click_handler)
    {
        return new UiNode("button", "", {
            class: "button center-content animated-button previous border focusable",
            "data-title": this._content.buttons.previous.title,
        }, [
            new UiNode("span", this._content.buttons.previous.text)
        ], {
            click: click_handler
        })
    }

    _create_next_button(click_handler)
    {
        return new UiNode("button", "", {
            class: "button center-content animated-button next border focusable",
            "data-title": this._content.buttons.next.title
        }, [
            new UiNode("span", this._content.buttons.next.text)
        ], {
            click: click_handler
        })
    }

    _create_footer()
    {
        this._progress_bar = this._create_progress_bar()
        this._progress_bar_state_display = this._create_progress_bar_state_display()
        UiNode.get_by_class(this._section_class_names.footer).draw_nodes([
            this._progress_bar,
            this._progress_bar_state_display,            
        ])
    }

    _create_progress_bar_state_display()
    {
        return new UiNode("span", "", {
            class: "form-progress-bar-state-display center-content",
        })
    }

    _create_progress_bar()
    {
        return new UiNode("div", "", {
            class: "form-progress-bar max-height",
        })
    }

    set_subwindow_title(step_number, title)
    {
        this._subwindow_title_display.set_text_content(
            this._create_full_subwindow_title(step_number, title),
        )
    }

    _create_full_subwindow_title(step_number, title)
    {
        return this._content.step_number.prefix + step_number.toString()
            + this._content.step_number.suffix + title
    }

    set_previous_button_state(disable)
    {
        this._previous_button.set_attributes({
            "data-disabled": disable,
            tabindex: disable ? -1 : 0,
        })
    }

    set_next_button_text_content_and_title(change_to_submit)
    {
        if(change_to_submit)
            this._set_next_button_text_content_and_title(
                this._content.buttons.submit.text,
                this._content.buttons.submit.title,
            )
        else
            this._set_next_button_text_content_and_title(
                this._content.buttons.next.text,
                this._content.buttons.next.title,
            )
    }

    _set_next_button_text_content_and_title(text_content, title)
    {
        this._next_button.draw_nodes(new UiNode("span", text_content))
        this._next_button.set_attributes({
            "data-title": title
        })
    }

    set_progress_bar_value(cur_step_index, steps_quantity)
    {
        this._progress_bar.set_attributes({
            style: `width: ${cur_step_index / steps_quantity * 100}%;`
        })
        this._progress_bar_state_display.set_text_content(
            this._create_progress_bar_state(cur_step_index, steps_quantity)
        )
    }

    _create_progress_bar_state(cur_step_index, steps_quantity)
    {
        if(cur_step_index == steps_quantity)
            return this._content.progress_bar_state.completed
        return cur_step_index.toString()
            + this._content.progress_bar_state.separator
            + steps_quantity + this._content.progress_bar_state.suffix
    }
}

export default FormUi