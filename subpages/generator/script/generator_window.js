import {route} from "../../../script/helpers.js"
import SessionStorageManager from "../../../script/session_storage_manager.js"

class GeneratorWindow
{
    constructor(main_ui, ui, form_values, home_subpage_path, form_subpage_path)
    {
        this._main_ui = main_ui
        this._ui = ui
        this._form_values = form_values
        this._home_subpage_path = home_subpage_path
        this._form_subpage_path = form_subpage_path

        this._main_ui.create_window()
        this._ui.create_window()
        this._main_ui.enable_all_focusable_nodes()
    }
}

export default GeneratorWindow