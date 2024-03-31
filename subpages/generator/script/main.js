import config from "../../../config.js"
import GeneratorWindow from "./generator_window.js"
import GeneratorWindowUi from "./generator_window_ui.js"
import MainUi from "../../../script/main_ui.js"
import SessionStorageManager from "../../../script/session_storage_manager.js"

_main()

function _main()
{
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
        config.subpage_paths.form,
        config.subpage_paths.home,
    )
    SessionStorageManager.remove(config.storage_keys.form_values)
}