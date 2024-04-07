import {route, make_copy} from "../../../script/helpers.js"
import SessionStorageManager from "../../../script/session_storage_manager.js"

class Form
{
    constructor(
        main_ui,
        ui,
        subwindow_factory,
        subwindow_codes,
        subwindow_code_to_name,
        profession_code,
        values,
        default_values,
        values_storage_key,
        profession_code_storage_key,
        generator_subpage_path,
    ){
        this._main_ui = main_ui
        this._ui = ui
        this._subwindow_factory = subwindow_factory
        this._subwindow_codes = subwindow_codes
        this._subwindow_code_to_name = subwindow_code_to_name
        this._profession_code = profession_code
        this._values = make_copy(values)
        this._default_values = default_values
        this._values_storage_key = values_storage_key
        this._profession_code_storage_key = profession_code_storage_key
        this._generator_subpage_path = generator_subpage_path
        
        this._main_ui.create_window()
        this._ui.create_window({
            reset: () => this._handle_reset_button_click(),
            previous: () => this._handle_previous_button_click(),
            next: () => this._handle_next_button_click(),
        })
        this._cur_subwindow_code_index = 0
        this._cur_subwindow_code = 0
        this._subwindow = null
        this._open_subwindow(0)
    }

    _open_subwindow(code_index)
    {
        this._cur_subwindow_code_index = code_index
        this._cur_subwindow_code = this._subwindow_codes[code_index]
        this._update_subwindow_title()
        this._update_buttons()
        this._update_progress_bar()
        this._subwindow = this._subwindow_factory.create(
            this._cur_subwindow_code,
            this._values[this._cur_subwindow_code],
            (state) => this._ui.set_next_button_state(state),
        )
        this._main_ui.enable_all_focusable_nodes()
    }

    _update_subwindow_title()
    {
        this._ui.set_subwindow_title(
            this._cur_subwindow_code_index + 1,
            this._subwindow_code_to_name[this._cur_subwindow_code]
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
        this._values = make_copy(this._default_values)
        this._open_subwindow(0)
    }

    _handle_previous_button_click()
    {
        if(this._cur_subwindow_code_index > 0)
            this._open_subwindow(--this._cur_subwindow_code_index)
    }

    _handle_next_button_click()
    {
        if(this._cur_subwindow_code_index < this._compute_last_subwindow_index())
            this._open_subwindow(++this._cur_subwindow_code_index)
        else
            this._generate_cv()
    }

    _compute_last_subwindow_index()
    {
        return this._subwindow_codes.length - 1
    }

    _generate_cv()
    {
        SessionStorageManager.save(this._values_storage_key, this._values)
        SessionStorageManager.save(
            this._profession_code_storage_key, this._profession_code
        )
        route(this._generator_subpage_path)
    }
}

export default Form