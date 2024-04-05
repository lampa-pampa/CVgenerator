class ThemeSubwindow
{
    constructor(ui, kwargs)
    {
        this._ui = ui
        this._values = kwargs.values
        this._next_button_refresher = kwargs.next_button_refresher
        this._ui.create_window(this._values.theme_code, this._update_value.bind(this))
        this._next_button_refresher(this._value_is_valid())
    }

    _update_value(value)
    {
        this._values.theme_code = value
    }

    _value_is_valid()
    {
        return this._values.theme_code
    }
}

export default ThemeSubwindow