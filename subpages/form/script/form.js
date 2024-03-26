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
            reset: () => this._handle_reset_button_click(),
            previous_button: () => this._handle_previous_button_click(),
            next_button: () => this._handle_next_button_click(),
        })
        this.data = new Object()

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
        this._update_buttons()
        this._update_progress_bar()
        this._main_ui.enable_all_focusable_nodes()
    }

    _update_subwindow_title()
    {
        this._ui.set_subwindow_title(
            this._cur_window_code_index + 1,
            this._subwindow_code_to_name[this._get_cur_subwindow_code()]
        )
    }

    _update_buttons()
    {
        this._ui.set_previous_button_state(this._cur_window_code_index == 0)
        this._ui.set_next_button_text_content_and_title(
            this._cur_window_code_index == this._compute_last_subwindow_index()
        )
    }

    _update_progress_bar()
    {
        this._ui.set_progress_bar_value(
            this._cur_window_code_index,
            this._compute_last_subwindow_index(),
        )
    }

    _handle_reset_button_click()
    {
        this._subwindow.reset()
    }

    _handle_previous_button_click()
    {
        this._save_subwindow_data()
        if(this._cur_window_code_index > 0)
            this._open_subwindow(--this._cur_window_code_index)
    }

    _handle_next_button_click()
    {
        if(this._cur_window_code_index < this._compute_last_subwindow_index())
        {
            this._save_subwindow_data()
            this._open_subwindow(++this._cur_window_code_index)
        }
        else
        {
            this._generate_cv()
        }
    }

    _get_cur_subwindow_code()
    {
        return this._subwindow_codes[this._cur_window_code_index]
    }

    _compute_last_subwindow_index()
    {
        return this._subwindow_codes.length - 1
    }

    _save_subwindow_data()
    {
        this.data[this._get_cur_subwindow_code()] = this._subwindow.get_data()
    }

    _generate_cv()
    {

    }
}

export default Form