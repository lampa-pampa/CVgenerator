class AdditionalInfoSubwindow
{
    constructor(ui, kwargs)
    {
        this._ui = ui
        this._values = kwargs.values
        kwargs.next_button_refresher(true)
        this._ui.create_window(this._values.info, this._update_value.bind(this))
    }

    _update_value(value)
    {
        this._values.info = value
    }
}

export default AdditionalInfoSubwindow