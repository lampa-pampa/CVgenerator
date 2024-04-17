import {route, make_copy} from "../../../script/helpers.js"
import SessionStorageManager from "../../../script/session_storage_manager.js"

class Form
{
    #main_ui
    #ui
    #subwindow_factory
    #subwindow_codes
    #subwindow_code_to_name
    #profession_code
    #values
    #default_values
    #values_storage_key
    #profession_code_storage_key
    #generator_subpage_path
    #cur_subwindow_code_index
    #cur_subwindow_code

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
        this.#main_ui = main_ui
        this.#ui = ui
        this.#subwindow_factory = subwindow_factory
        this.#subwindow_codes = subwindow_codes
        this.#subwindow_code_to_name = subwindow_code_to_name
        this.#profession_code = profession_code
        this.#values = make_copy(values)
        this.#default_values = default_values
        this.#values_storage_key = values_storage_key
        this.#profession_code_storage_key = profession_code_storage_key
        this.#generator_subpage_path = generator_subpage_path
        this.#cur_subwindow_code_index = 0
        this.#cur_subwindow_code = 0
        
        this.#main_ui.create_window()
        this.#ui.create_window({
            reset: () => this.#handle_reset_button_click(),
            previous: () => this.#handle_previous_button_click(),
            next: () => this.#handle_next_button_click(),
        })
        this.#open_subwindow(0)
    }

    #open_subwindow(code_index)
    {
        this.#cur_subwindow_code_index = code_index
        this.#cur_subwindow_code = this.#subwindow_codes[code_index]
        this.#update_subwindow_title()
        this.#update_buttons()
        this.#update_progress_bar()
        this.#subwindow_factory.create(
            this.#cur_subwindow_code,
            this.#values[this.#cur_subwindow_code],
            (state) => this.#ui.set_next_button_state(state),
        )
        this.#main_ui.enable_all_focusable_nodes()
    }

    #update_subwindow_title()
    {
        this.#ui.set_subwindow_title(
            this.#cur_subwindow_code_index + 1,
            this.#subwindow_code_to_name[this.#cur_subwindow_code]
        )
    }

    #update_buttons()
    {
        this.#ui.set_previous_button_state(this.#cur_subwindow_code_index > 0)
        this.#ui.set_next_button_value(
            this.#cur_subwindow_code_index == this.#compute_last_subwindow_index()
        )
    }

    #update_progress_bar()
    {
        this.#ui.set_progress_bar_value(
            this.#cur_subwindow_code_index + 1,
            this.#subwindow_codes.length,
        )
    }

    #handle_reset_button_click()
    {
        this.#values = make_copy(this.#default_values)
        this.#open_subwindow(0)
    }

    #handle_previous_button_click()
    {
        if(this.#cur_subwindow_code_index > 0)
            this.#open_subwindow(--this.#cur_subwindow_code_index)
    }

    #handle_next_button_click()
    {
        if(this.#cur_subwindow_code_index < this.#compute_last_subwindow_index())
            this.#open_subwindow(++this.#cur_subwindow_code_index)
        else
            this.#generate_cv()
    }

    #compute_last_subwindow_index()
    {
        return this.#subwindow_codes.length - 1
    }

    #generate_cv()
    {
        SessionStorageManager.save(this.#values_storage_key, this.#values)
        SessionStorageManager.save(
            this.#profession_code_storage_key, this.#profession_code
        )
        route(this.#generator_subpage_path)
    }
}

export default Form