import {route} from "../../../script/helpers.js"
import SessionStorageManager from "../../../script/session_storage_manager.js"

class HomeWindow
{
    #main_ui
    #ui

    constructor(
        main_ui,
        ui,
        profession_codes,
        custom_profession_code,
        profession_code_to_name,
        profession_code_storage_key,
        form_subpage_path
    ){
        this.#main_ui = main_ui
        this.#ui = ui
        this.#main_ui.create_window()
        this.#ui.create_window(
            profession_codes,
            custom_profession_code,
            profession_code_to_name,
            (profession_code) => {
                this.#handle_profession_button_click(
                    profession_code_storage_key,
                    profession_code,
                    form_subpage_path
                )
            }
        )
        this.#main_ui.enable_all_focusable_nodes()
    }

    #handle_profession_button_click(storage_key, profession_code, form_path)
    {
        SessionStorageManager.save(storage_key, profession_code)
        route(form_path)
    }
}

export default HomeWindow