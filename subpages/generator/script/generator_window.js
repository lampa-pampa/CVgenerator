import {route} from "../../../script/helpers.js"
import SessionStorageManager from "../../../script/session_storage_manager.js"

class GeneratorWindow
{
    #main_ui
    #ui
    #profession_code
    #form_values
    #form_values_storage_key
    #profession_code_storage_key
    #home_subpage_path
    #form_subpage_path

    constructor(
        main_ui,
        ui,
        profession_code,
        form_values,
        cv_node,
        form_values_storage_key,
        profession_code_storage_key,
        home_subpage_path,
        form_subpage_path
    ){
        this.#main_ui = main_ui
        this.#ui = ui
        this.#profession_code = profession_code
        this.#form_values = form_values
        this.#form_values_storage_key = form_values_storage_key
        this.#profession_code_storage_key = profession_code_storage_key
        this.#home_subpage_path = home_subpage_path
        this.#form_subpage_path = form_subpage_path
        
        this.#main_ui.create_window()
        this.#ui.create_window(
            {
                edit: () => this.#handle_edit_button_click(),
                create: () => this.#handle_create_button_click(),
                download: () => this.#handle_download_button_click(),
            },
            cv_node,
        )
        this.#main_ui.enable_all_focusable_nodes()
    }

    #handle_edit_button_click()
    {
        SessionStorageManager.save(this.#form_values_storage_key, this.#form_values)
        SessionStorageManager.save(this.#profession_code_storage_key, this.#profession_code)
        route(this.#form_subpage_path)
    }

    #handle_create_button_click()
    {
        route(this.#home_subpage_path)
    }

    #handle_download_button_click()
    {
        this.#ui.download_cv()
    }
}

export default GeneratorWindow