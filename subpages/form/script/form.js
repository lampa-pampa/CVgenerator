class Form
{
    constructor(
        main_window,
        ui,
        window_factory,
        subwindow_codes,
        code_to_subwindow_name,
    ){
        this._main_window = main_window
        this._ui = ui
        this._window_factory = window_factory
        this._subwindow_codes = subwindow_codes
        this._code_to_subwindow_name = code_to_subwindow_name
        this._create_window()

        this._subwindow = null
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
        this._subwindow = this._window_factory.create(
            this._subwindow_codes[code_index]
        )
        this._cur_window_code_index = code_index
        this._update_progress_bar()
        this._main_window.enable_all_focusable_nodes()
    }

    _update_progress_bar()
    {
        this._ui.update_progress_bar(
            this._compute_progress_bar_percentage_progress()
        )
    }

    _compute_progress_bar_percentage_progress()
    {
        return (this._cur_window_code_index + 1)
            / this._subwindow_codes.length
            * 100
    }
}

export default Form