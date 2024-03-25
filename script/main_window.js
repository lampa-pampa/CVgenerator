class MainWindow
{
    constructor(ui, content)
    {
        this._ui = ui
        this._create_window(content)
    }

    _create_window(content)
    {
        this._ui.create_head(content.head)
        this._ui.create_header(content.header)
        this._ui.create_footer(content.footer)
    }

    enable_all_focusable_nodes()
    {
        this._ui.enable_all_focusable_nodes()
    }
}

export default MainWindow