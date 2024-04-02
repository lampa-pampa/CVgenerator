class GenerateSubwindow
{
    constructor(ui, kwargs)
    {
        this._ui = ui
        kwargs.next_button_refresher(true)
        this._ui.create_window()
    }
}

export default GenerateSubwindow