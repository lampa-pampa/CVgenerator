import config from "../../../config.js"
import HomeWindow from "./home_window.js"
import HomeWindowUi from "./home_window_ui.js"
import MainWindow from "../../../script/main_window.js"
import MainWindowUi from "../../../script/main_window_ui.js"

_main()

function _main()
{
    new HomeWindow(
        new HomeWindowUi(
            config.window.home.ui.section_class_names,
        ), {
            content: config.window.home.content,
            custom_profession_code: config.custom_profession_code,
            profession_code_to_name: config.profession_code_to_name,
            profession_code_storage_key: config.storage_keys.profession_code,
            form_page_path: config.form_page_path,
        }
    )
    new MainWindow(
        new MainWindowUi(
            config.window.main.ui.section_class_names,
            config.window.main.ui.focusable_class_name,
        ),
        config.window.main.content,
    ).enable_all_focusable_nodes()
}