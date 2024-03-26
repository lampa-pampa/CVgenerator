class NameSubwindow
{
    constructor(ui, kwargs)
    {
        this._ui = ui
        this._create_window(kwargs)
    }

    _create_window(kwargs)
    {
        this._ui.create_content(kwargs.content)
    }
}

export default NameSubwindow