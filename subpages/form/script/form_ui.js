import UiNode from "../../../script/ui_node.js"

class FormUi
{
    constructor(section_class_names)
    {
        this._section_class_names = section_class_names
        this._progress_bar = null
    }

    create_header()
    {
        UiNode.get_by_class(this._section_class_names.header).draw_nodes(
            new UiNode("span", {
                textContent: "example text"
            })
        )
    }

    create_footer()
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

    update_progress_bar(percentage_progress)
    {
        this._progress_bar.set_attributes({
            style: `width: ${percentage_progress}%;`
        })
    }
}

export default FormUi