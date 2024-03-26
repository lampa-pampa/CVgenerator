import UiNode from "../../../script/ui_node.js"

class FormUi
{
    constructor(section_class_names, content)
    {
        this._section_class_names = section_class_names
        this._content = content
        this._previous_button = null
        this._next_button = null
        this._subwindow_title_display = null
        this._progress_bar = null
    }

    create_window(kwargs)
    {
        this._create_header()
        this._create_subwindow_display(kwargs)
        this._create_footer()
    }

    _create_header()
    {
        this._subwindow_title_display = this._create_subwindow_title_display()
        UiNode.get_by_class(this._section_class_names.header).draw_nodes([
            this._subwindow_title_display
        ])
    }

    _create_subwindow_title_display()
    {
        return new UiNode("h2", {
            className: "window-title",
        })
    }

    _create_subwindow_display(kwargs)
    {
        UiNode.get_by_class(
            this._section_class_names.subwindow_display).draw_nodes([
                new UiNode("ul", {
                    className: "window-list",
                    tabIndex: -1,
                }),
                this._create_buttons_container(kwargs),
        ])
    }

    _create_buttons_container(kwargs)
    {
        this._previous_button = this._create_previous_button(
            kwargs.previous_button_click_handler
        )
        this._next_button = this._create_next_button(
            kwargs.next_button_click_handler
        )
        return new UiNode("div", {
            className: "form-buttons-container shadow",
        }, [
            this._previous_button,
            this._next_button,
        ])
    }

    _create_previous_button(handler)
    {
        return new UiNode("button", {
            className: "button center-content animated-button previous border focusable",
            title: this._content.buttons.previous.title
        }, [
            new UiNode("span", {
                textContent: this._content.buttons.previous.text
            })
        ], {
            "click": handler
        })
    }

    _create_next_button(handler)
    {
        return new UiNode("button", {
            className: "button center-content animated-button next border focusable",
            title: this._content.buttons.next.title
        }, [
            new UiNode("span", {
                textContent: this._content.buttons.next.text
            })
        ], {
            "click": handler
        })
    }

    _create_footer()
    {
        this._progress_bar = this._create_progress_bar()
        UiNode.get_by_class(this._section_class_names.footer).draw_nodes(
            this._progress_bar
        )
    }

    _create_progress_bar()
    {
        return new UiNode("div", {
            className: "form-progress-bar max-height",
        })
    }

    set_subwindow_title(step_number, title)
    {
        this._subwindow_title_display.set_attributes({
            textContent: this._create_full_subwindow_title(step_number, title),
        })
    }

    _create_full_subwindow_title(step_number, title)
    {
        return this._content.step_number.prefix + step_number.toString()
            + this._content.step_number.suffix + title
    }

    set_progress_bar_value(percentage_progress)
    {
        this._progress_bar.set_attributes({
            style: `width: ${percentage_progress}%;`
        })
    }
}

export default FormUi