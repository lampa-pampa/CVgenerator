import route from "../../../script/router.js"
import SessionStorageManager from "../../../script/session_storage_manager.js"

class HomeWindow
{
    constructor(main_ui, ui, kwargs)
    {
        this._main_ui = main_ui
        this._ui = ui
        this._main_ui.create_window()
        this._ui.create_window({
            profession_codes: kwargs.profession_codes,
            custom_profession_code: kwargs.custom_profession_code,
            profession_code_to_name: kwargs.profession_code_to_name,
            handler: (profession_code) => {
                this._handle_profession_button_click(
                    kwargs.profession_code_storage_key,
                    profession_code,
                    kwargs.form_path
                )
            }
        })
        this._main_ui.enable_all_focusable_nodes()
    }

    _handle_profession_button_click(storage_key, profession_code, form_path)
    {
        SessionStorageManager.save(storage_key, profession_code)
        route(form_path)
    }
}

export default HomeWindow