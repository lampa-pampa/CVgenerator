class MainWindow
{
    constructor(ui, content)
    {
        this._ui = ui
        this._content = content
        this._create_window()
    }

    _create_window()
    {
        this._ui.create_head(this._content.head)
        this._ui.create_header(this._content.header)
        this._ui.create_footer(this._content.footer)
    }

    enable_all_focusable_nodes()
    {
        this._ui.enable_all_focusable_nodes()
    }
}

export default MainWindow