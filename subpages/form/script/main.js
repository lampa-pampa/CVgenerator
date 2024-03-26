import config from "../../../config.js"
import Form from "./form.js"
import FormUi from "./form_ui.js"
import FormSubwindowFactory from "./form_subwindow_factory.js"
import MainWindow from "../../../script/main_window.js"
import MainWindowUi from "../../../script/main_window_ui.js"
import route from "../../../script/router.js"
import SessionStorageManager from "../../../script/session_storage_manager.js"

let form = null
_main()

function _main()
{
    const profession_code = SessionStorageManager.read(
        config.storage_keys.profession_code
    )
    if(!_profession_code_exist(profession_code))
        route(config.home_page_path)

    form = new Form(
        new MainWindow(
            new MainWindowUi(
                config.window.main.ui.section_class_names,
                config.window.main.ui.focusable_class_name,
            ),
            config.window.main.content,
        ),
        new FormUi(
            config.window.form.ui.section_class_names,
        ),
        new FormSubwindowFactory({
            subwindows: config.window.form.subwindows,
            skill_codes: config.profession_code_to_skill_codes[
                profession_code
            ],
            interest_codes: config.profession_code_to_interest_codes[
                profession_code
            ],
            skill_code_to_name: config.skill_code_to_name,
            interest_code_to_name: config.interest_code_to_name,
        }),
        config.window.form.subwindow_codes,
        config.subwindow_code_to_name,
    )
}

function _profession_code_exist(profession_code)
{
    return Object.keys(config.profession_code_to_name)
        .includes(profession_code)
}