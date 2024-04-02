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

    _update_value(value_name, value)
    {
        this._values[value_name] = value
        this._next_button_refresher(this._values_are_valid())
    }

    _values_are_valid()
    {
        for(const value of Object.values(this._values))
        {
            if(!value)
                return false
        }
        return true
    }
}

export default NameSubwindow