import route from "../../../script/router.js"
import SessionStorageManager from "../../../script/session_storage_manager.js"

class HomeWindow
{
    constructor(ui, kwargs)
    {
        this._ui = ui
        this._create_window(kwargs)
        this._clear_form_data(kwargs.profession_code_storage_key)
    }

    _create_window(kwargs)
    {
        this._ui.create_header(kwargs.content.header)
        this._ui.create_content({
            profession_code_to_name: kwargs.profession_code_to_name,
            content: kwargs.content.content,
            handler: (profession_code) => this._handle_profession_button_click(
                kwargs.profession_code_storage_key,
                profession_code,
                kwargs.form_page_path,
            )
        })
        this._ui.create_footer({
            content: kwargs.content.footer,
            handler: () => this._handle_profession_button_click(
                kwargs.profession_code_storage_key,
                kwargs.custom_profession_code,
                kwargs.form_page_path,
            )
        })
    }

    _handle_profession_button_click(storage_key, profession_code, path)
    {
        SessionStorageManager.save(storage_key, profession_code)
        route(path)
    }

    _clear_form_data(storage_key)
    {
        SessionStorageManager.remove(storage_key)
    }
}

export default HomeWindow