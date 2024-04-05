class CompanyNameSubwindow
{
    constructor(ui, kwargs)
    {
        this._ui = ui
        this._values = kwargs.values
        this._next_button_refresher = kwargs.next_button_refresher
        this._ui.create_window(this._values.company_name, this._update_value.bind(this))
        this._next_button_refresher(this._value_is_valid())
    }

    _update_value(value)
    {
        this._values.company_name = value
        this._next_button_refresher(this._value_is_valid())

    }

    _value_is_valid()
    {
        return this._values.company_name
    }
}

export default CompanyNameSubwindow