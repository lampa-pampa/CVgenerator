class Form
{
    constructor(ui, window_factory, window_names, hints)
    {
        this._ui = ui
        this._window_factory = window_factory
        this._window_names = window_names
        this._hints = hints

        this._window = null
        this._cur_window_name_index = 0
        this._open_window(0)
    }

    _open_window(name_index)
    {
        this._window = this._window_factory.create(
            this._window_names[name_index]
        )
        this._cur_window_name_index = name_index
    }
}

export default Form