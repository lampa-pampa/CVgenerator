import route from "../../../script/router.js"
import SessionStorageManager from "../../../script/session_storage_manager.js"

class GeneratorWindow
{
    constructor(main_ui, ui, home_subpage_path, form_subpage_path)
    {
        this._main_ui = main_ui
        this._ui = ui
        this._main_ui.create_window()
        this._ui.create_window()
        this._main_ui.enable_all_focusable_nodes()
    }
}

export default GeneratorWindow