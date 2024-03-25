class Form
{
    constructor(ui, window_factory, window_codes, hint_codes)
    {
        this._ui = ui
        this._window_factory = window_factory
        this._window_codes = window_codes
        this._hint_codes = hint_codes

        this._window = null
        this._cur_window_code_index = 0
        this._open_window(0)
    }

    _open_window(code_index)
    {
        this._window = this._window_factory.create(
            this._window_codes[code_index]
        )
        this._cur_window_code_index = code_index
    }
}

export default Form