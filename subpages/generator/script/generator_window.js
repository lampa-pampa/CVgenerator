import {route} from "../../../script/helpers.js"
import SessionStorageManager from "../../../script/session_storage_manager.js"

class GeneratorWindow
{
    constructor(
        main_ui,
        ui,
        profession_code,
        form_values,
        form_values_storage_key,
        profession_code_storage_key,
        home_subpage_path,
        form_subpage_path
    ){
        this._main_ui = main_ui
        this._ui = ui
        this._profession_code = profession_code
        this._form_values = form_values
        this._form_values_storage_key = form_values_storage_key
        this._profession_code_storage_key = profession_code_storage_key
        this._home_subpage_path = home_subpage_path
        this._form_subpage_path = form_subpage_path
        
        this._main_ui.create_window()
        this._ui.create_window({
            edit: () => this._handle_edit_button_click(),
            create: () => this._handle_create_button_click(),
            download: () => this._handle_download_button_click(),
        })
        this._main_ui.enable_all_focusable_nodes()
    }

    _handle_edit_button_click()
    {
        SessionStorageManager.save(this._form_values_storage_key, this._form_values)
        SessionStorageManager.save(this._profession_code_storage_key, this._profession_code)
        route(this._form_subpage_path)
    }

    _handle_create_button_click()
    {
        route(this._home_subpage_path)
    }

    _handle_download_button_click()
    {
        console.log("download")
    }
}

export default GeneratorWindow