class LayoutSubwindow
{
    constructor(ui, kwargs)
    {
        this._ui = ui
        this._values = kwargs.values
        this._next_button_refresher = kwargs.next_button_refresher
        this._ui.create_window(this._values.layout_code, this._update_value.bind(this))
        this._next_button_refresher(this._value_is_valid())
    }

    _update_value(value)
    {
        this._values.layout_code = value
        this._next_button_refresher(this._value_is_valid())
    }

    _value_is_valid()
    {
        return this._values.layout_code
    }
}

export default LayoutSubwindow