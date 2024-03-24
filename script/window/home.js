class HomeWindow
{
    constructor(ui, node_creator, content, professions)
    {
        this._ui = ui
        this._node_creator = node_creator
        this._content = content
        this._professions = professions
        this._create_header()
        this._create_content()
        this._create_footer()
        this._ui.enable_all_focusable_nodes()
    }

    _create_header()
    {
        this._ui.draw_header(
            this._node_creator.create_header(
                this._content.header
            )
        )
    }

    _create_content()
    {
        this._ui.draw_content(
            this._node_creator.create_content(
                this._professions,
                this._content.content,
                this._handle_profession_button_click,
            )
        )
    }

    _create_footer()
    {
        this._ui.draw_footer(
            this._node_creator.create_footer(
                this._content.footer,
                this._handle_profession_button_click
            )
        )
    }

    _handle_profession_button_click()
    {
        sessionStorage.setItem("profession", JSON.stringify(this.profession))
        document.location.pathname = this.form_path
    }
}

export default HomeWindow