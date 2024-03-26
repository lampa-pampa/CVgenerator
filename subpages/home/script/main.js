import config from "../../../config.js"
import HomeWindow from "./home_window.js"
import HomeWindowUi from "./home_window_ui.js"
import MainUi from "../../../script/main_ui.js"

_main()

function _main()
{
    new HomeWindow(
        new HomeWindowUi(
            config.window.home.ui.section_class_names,
        ), {
            content: config.window.home.content,
            custom_profession_code: config.window.home.custom_profession_code,
            profession_codes: config.window.home.profession_codes,
            profession_code_to_name: config.profession_code_to_name,
            profession_code_storage_key: config.storage_keys.profession_code,
            form_page_path: config.form_page_path,
        }
    )
    let main_ui = new MainUi(
        config.main_ui.section_class_names,
        config.main_ui.focusable_class_name,
        config.main_ui.content,
    )
    main_ui.create_window()
    main_ui.enable_all_focusable_nodes()
}