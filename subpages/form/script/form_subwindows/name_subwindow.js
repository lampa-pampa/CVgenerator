class NameSubwindow
{
    constructor(ui, kwargs)
    {
        this._ui = ui
        this._values = kwargs.values
        this._next_button_refresher = kwargs.next_button_refresher
        this._ui.create_window(this._values, this._update_value.bind(this))
        this._next_button_refresher(this._values_are_valid())
    }

    get_values()
    {
        return this._values
    }

    _update_value(value_name, value)
    {
        this._values[value_name] = value
        this._next_button_refresher(this._values_are_valid())
    }

    _values_are_valid()
    {
        for(const value of Object.values(this._values))
        {
            if(!value.trim())
                return false
        }
        return true
    }
}

export default NameSubwindow