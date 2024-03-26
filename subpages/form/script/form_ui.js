import UiNode from "../../../script/ui_node.js"

class FormUi
{
    constructor(section_class_names, content)
    {
        this._section_class_names = section_class_names
        this._content = content
        this._subwindow_title_display = null
        this._progress_bar = null
    }

    create_window()
    {
        this._create_header()
        this._create_subwindow_display()
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

    _create_subwindow_display()
    {
        UiNode.get_by_class(
            this._section_class_names.subwindow_display).draw_nodes([
                new UiNode("ul", {
                    className: "window-list",
                    tabIndex: -1,
                }),
        ])
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