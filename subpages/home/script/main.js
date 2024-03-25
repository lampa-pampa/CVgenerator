import config from "../../../config.js"
import MainWindow from "../../../script/main_window.js"
import MainWindowUi from "../../../script/main_window_ui.js"
import HomeWindowUi from "./home_window_ui.js"
import HomeWindow from "./home_window.js"


_main()

function _main()
{
    new HomeWindow(
        new HomeWindowUi(
            config.window_ui.section_class_names,
        ), {
            content: config.home_window_content,
            custom_profession_code: config.custom_profession_code,
            code_to_profession_name: config.code_to_profession_name,
            profession_code_storage_key: config.storage_keys.profession_code,
            form_page_path: config.form_page_path,
        }
    )
    new MainWindow(
        new MainWindowUi(
            config.main_window_ui.section_class_names,
            config.main_window_ui.focusable_class_name,
        ),
        config.main_window_content,
    ).enable_all_focusable_nodes()
}