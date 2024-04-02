import config from "../../../config.js"
import GeneratorWindow from "./generator_window.js"
import GeneratorWindowUi from "./generator_window_ui.js"
import MainUi from "../../../script/main_ui.js"
import SessionStorageManager from "../../../script/session_storage_manager.js"
import {route, match, has_key} from "../../../script/helpers.js"

_main()

function _main()
{
    const form_values = SessionStorageManager.read(config.storage_keys.form_values)
    const profession_code = SessionStorageManager.read(config.storage_keys.profession_code)

    if(!match(form_values, config.window.form.default_values)
        || !has_key(config.profession_code_to_name, profession_code)
    )
        route(config.subpage_paths.home)
    
    new GeneratorWindow(
        new MainUi(
            config.main_ui.section_class_names,
            config.main_ui.focusable_class_name,
            config.main_ui.content,
        ),
        new GeneratorWindowUi(
            config.window.generator.ui.section_class_names,
            config.window.generator.ui.content,
        ),
        profession_code,
        form_values,
        config.storage_keys.form_values,
        config.storage_keys.profession_code,
        config.subpage_paths.home,
        config.subpage_paths.form,
    )
    SessionStorageManager.remove(config.storage_keys.profession_code)
    SessionStorageManager.remove(config.storage_keys.form_values)
}