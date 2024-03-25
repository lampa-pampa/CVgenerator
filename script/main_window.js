class MainWindow
{
    constructor(ui, node_creator, content)
    {
        this._ui = ui
        this._node_creator = node_creator
        this._content = content
        this._create_window()
    }

    _create_window()
    {
        this._create_header()
        this._create_footer()
    }

    _create_header()
    {
        this._ui.draw_header(
            this._node_creator.create_header(
                this._content.header
            )
        )
    }

    _create_footer()
    {
        this._ui.draw_footer(
            this._node_creator.create_footer(
                this._content.footer
            )
        )
    }

    enable_all_focusable_nodes()
    {
        this._ui.enable_all_focusable_nodes()
    }
}

export default MainWindow