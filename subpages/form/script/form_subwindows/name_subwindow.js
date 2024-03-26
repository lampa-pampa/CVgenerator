class NameSubwindow
{
    constructor(ui)
    {
        this._ui = ui
        this._ui.create_window()
    }

    reset()
    {
        
    }

    data_is_valid()
    {
        return true
    }

    get_data()
    {
        return {
            example_value: "hello",
        }
    }
}

export default NameSubwindow