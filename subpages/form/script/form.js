class Form
{
    constructor(
        ui,
        window_factory,
        subwindow_codes,
        code_to_subwindow_name,
        hint_codes,
        code_to_skill_name,
        code_to_interests_name,
    ){
        this._ui = ui
        this._window_factory = window_factory
        this._subwindow_codes = subwindow_codes
        this._code_to_subwindow_name = code_to_subwindow_name
        this._hint_codes = hint_codes
        this._code_to_skill_name = code_to_skill_name
        this._code_to_interests_name = code_to_interests_name
        this._create_window()

        this._window = null
        this._cur_window_code_index = 0
        this._open_subwindow(0)
    }

    _create_window()
    {
        this._ui.create_header()
        this._ui.create_footer()
    }

    _open_subwindow(code_index)
    {
        this._window = this._window_factory.create(
            this._subwindow_codes[code_index]
        )
        this._cur_window_code_index = code_index
        this._update_progress_bar()
        
    }

    _update_progress_bar()
    {
        this._ui.update_progress_bar(
            (this._cur_window_code_index + 1) / this._subwindow_codes.length
            * 100
        )
    }
}

export default Form