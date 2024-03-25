import config from "../../../config.js"
import Form from "./form.js"
import FormUi from "./form_ui.js"
import FormWindowFactory from "./form_window_factory.js"
import MainWindow from "../../../script/main_window.js"
import MainWindowUi from "../../../script/main_window_ui.js"
import route from "../../../script/router.js"
import SessionStorageManager from "../../../script/session_storage_manager.js"

let main_window = null
let form_controller = null
_main()

function _main()
{
    const profession_code = SessionStorageManager.read(
        config.storage_keys.profession_code
    )
    if(!_profession_code_exist(profession_code))
        route(config.home_page_path)

    main_window = new MainWindow(
        new MainWindowUi(
            config.main_window_ui.section_class_names,
            config.main_window_ui.focusable_class_name,
        ),
        config.main_window_content,
    )
    form_controller = new Form(
        new FormUi(
            config.form_ui.section_class_names,
        ),
        new FormWindowFactory({
            windows_content: config.form_windows_content,
            section_class_names: config.window_ui.section_class_names,
        }),
        config.form_window_codes,
        config.code_to_form_window_name,
        {
            skills: config.profession_code_to_skill_codes[profession_code],
            interests: config.profession_code_to_interest_codes[profession_code],
        },
        config.code_to_skill_name,
        config.code_to_interest_name,
    )
    main_window.enable_all_focusable_nodes()
}

function _profession_code_exist(profession_code)
{
    return Object.keys(config.code_to_profession_name)
        .includes(profession_code)
}