class Form
{
    constructor(
        main_ui,
        ui,
        window_factory,
        subwindow_codes,
        subwindow_code_to_name,
    ){
        this._main_ui = main_ui
        this._ui = ui
        this._window_factory = window_factory
        this._subwindow_codes = subwindow_codes
        this._subwindow_code_to_name = subwindow_code_to_name
        this._main_ui.create_window()
        this._ui.create_window({
            reset: this._handle_reset_button_click,
            previous_button: this._handle_previous_button_click,
            next_button: this._handle_next_button_click,
        })

        this._subwindow = null
        this._cur_window_code_index = 0
        this._open_subwindow(0)
    }

    _open_subwindow(code_index)
    {
        this._subwindow = this._window_factory.create(
            this._subwindow_codes[code_index]
        )
        this._cur_window_code_index = code_index
        this._update_subwindow_title()
        this._update_progress_bar()
        this._main_ui.enable_all_focusable_nodes()
    }

    _update_subwindow_title()
    {
        this._ui.set_subwindow_title(
            this._cur_window_code_index + 1,
            this._subwindow_code_to_name[
                this._subwindow_codes[this._cur_window_code_index]
            ])
    }

    _update_progress_bar()
    {
        this._ui.set_progress_bar_value(
            this._compute_progress_bar_percentage_progress()
        )
    }

    _compute_progress_bar_percentage_progress()
    {
        return (this._cur_window_code_index + 1)
            / this._subwindow_codes.length
            * 100
    }

    _handle_reset_button_click()
    {

    }

    _handle_previous_button_click()
    {

    }

    _handle_next_button_click()
    {

    }
}

export default Form