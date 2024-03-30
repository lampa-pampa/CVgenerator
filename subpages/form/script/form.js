class Form
{
    constructor(
        main_ui,
        ui,
        subwindow_factory,
        subwindow_codes,
        subwindow_code_to_name,
    ){
        this._main_ui = main_ui
        this._ui = ui
        this._subwindow_factory = subwindow_factory
        this._subwindow_codes = subwindow_codes
        this._subwindow_code_to_name = subwindow_code_to_name
        this._main_ui.create_window()
        this._ui.create_window({
            reset: () => this._handle_reset_button_click(),
            previous: () => this._handle_previous_button_click(),
            next: () => this._handle_next_button_click(),
        })
        this._values = {
            "1": {
                name: "",
                surname: "",
            },
            "2": {
                name: "",
                surname: "",
            },
            "3": {
                name: "",
                surname: "",
            },
            "4": {
                name: "",
                surname: "",
            },
            "5": {
                name: "",
                surname: "",
            },
            "6": {
                name: "",
                surname: "",
            },
            "7": {
                name: "",
                surname: "",
            },
            "8": {
                name: "",
                surname: "",
            },
            "9": {
                name: "",
                surname: "",
            },

            "10": {
                name: "",
                surname: "",
            },
            "11": {
                name: "",
                surname: "",
            },
        }

        this._subwindow = null
        this._cur_subwindow_code_index = 0
        this._open_subwindow(0)
    }

    _open_subwindow(code_index)
    {
        this._cur_subwindow_code_index = code_index
        const cur_subwindow_code = this._subwindow_codes[code_index]
        this._update_subwindow_title()
        this._update_buttons()
        this._update_progress_bar()
        this._subwindow = this._subwindow_factory.create(
            cur_subwindow_code,
            {
                values: this._values[cur_subwindow_code],
                next_button_refresher: (state) => {
                    this._ui.set_next_button_state(state)
                },
            }
        )
        this._main_ui.enable_all_focusable_nodes()
    }

    _update_subwindow_title()
    {
        this._ui.set_subwindow_title(
            this._cur_subwindow_code_index + 1,
            this._subwindow_code_to_name[this._get_cur_subwindow_code()]
        )
    }

    _update_buttons()
    {
        this._ui.set_previous_button_state(this._cur_subwindow_code_index > 0)
        this._ui.set_next_button_value(
            this._cur_subwindow_code_index == this._compute_last_subwindow_index()
        )
    }

    _update_progress_bar()
    {
        this._ui.set_progress_bar_value(
            this._cur_subwindow_code_index,
            this._compute_last_subwindow_index(),
        )
    }

    _handle_reset_button_click()
    {
        this._subwindow.reset()
    }

    _handle_previous_button_click()
    {
        this._save_subwindow_values()
        if(this._cur_subwindow_code_index > 0)
            this._open_subwindow(--this._cur_subwindow_code_index)
    }

    _handle_next_button_click()
    {
        if(this._cur_subwindow_code_index < this._compute_last_subwindow_index())
            this._open_next_window()
        else
            this._generate_cv()
    }

    _open_next_window()
    {
        this._save_subwindow_values()
        this._open_subwindow(++this._cur_subwindow_code_index)
    }

    _get_cur_subwindow_code()
    {
        return this._subwindow_codes[this._cur_subwindow_code_index]
    }

    _compute_last_subwindow_index()
    {
        return this._subwindow_codes.length - 1
    }

    _save_subwindow_values()
    {
        this._values[this._get_cur_subwindow_code()] = this._subwindow.get_values()
    }

    _generate_cv()
    {
        console.log("GENERATE CV")
        console.log(this._values)
    }
}

export default Form