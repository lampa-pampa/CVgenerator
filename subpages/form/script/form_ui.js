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
        return new UiNode("h2", {}, {
            class: "window-title",
        })
    }
    
    _create_reset_button_container(click_handler)
    {
        return new UiNode("div", {}, {
            class: "reset-button-container square center-content max-height",
        }, [
            this._create_reset_button(click_handler)
        ])
    }

    _create_reset_button(click_handler)
    {
        return new UiNode("button", {}, {
            class: "button spin-icon focusable square",
            "data-title": this._content.buttons.reset.title,
        }, [
            new UiNodeNs("svg", {}, {
                class: "icon",
                viewBox: this._content.buttons.reset.icon.view_box,
                toolBox: this._content.buttons.reset.icon.view_box,
            }, [
                new UiNodeNs("path", {}, {
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
                new UiNode("ul", {}, {
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
        return new UiNode("div", {}, {
            class: "form-buttons-container shadow",
        }, [
            this._previous_button,
            this._next_button,
        ])
    }

    _create_previous_button(click_handler)
    {
        return new UiNode("button", {}, {
            class: "button center-content animated-button previous border focusable",
            "data-title": this._content.buttons.previous.title,
        }, [
            new UiNode("span", {
                textContent: this._content.buttons.previous.text
            })
        ], {
            click: click_handler
        })
    }

    _create_next_button(click_handler)
    {
        return new UiNode("button", {}, {
            class: "button center-content animated-button next border focusable",
            "data-title": this._content.buttons.next.title
        }, [
            new UiNode("span", {
                textContent: this._content.buttons.next.text
            })
        ], {
            click: click_handler
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
        return new UiNode("div", {}, {
            class: "form-progress-bar max-height",
        })
    }

    set_subwindow_title(step_number, title)
    {
        this._subwindow_title_display.set_properties({
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
        this._progress_bar.set_properties({
            style: `width: ${percentage_progress}%;`
        })
    }
}

export default FormUi