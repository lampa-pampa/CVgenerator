import config from "../../../config.js"
import Form from "./form.js"
import FormUi from "./form_ui.js"
import FormSubwindowFactory from "./form_subwindow_factory.js"
import MainUi from "../../../script/main_ui.js"
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
        route(config.subpage_paths.home)

    const form_values = _get_form_values()

    form = new Form(
        new MainUi(
            config.main_ui.section_class_names,
            config.main_ui.focusable_class_name,
            config.main_ui.content,
        ),
        new FormUi(
            config.window.form.ui.section_class_names,
            config.window.form.ui.content,
        ),
        new FormSubwindowFactory({
            subwindows: config.window.form.subwindow,
            skill_codes: config.profession_code_to_skill_codes[profession_code],
            interest_codes: config.profession_code_to_interest_codes[profession_code],
            skill_code_to_name: config.skill_code_to_name,
            interest_code_to_name: config.interest_code_to_name,
        }),
        config.window.form.subwindow_codes,
        config.subwindow_code_to_name,
        config.storage_keys.form_values,
        form_values,
        config.window.form.default_values,
        config.subpage_paths.ganerator,
    )
    SessionStorageManager.remove(config.storage_keys.profession_code)
    SessionStorageManager.remove(config.storage_keys.form_values)
}

function _profession_code_exist(profession_code)
{
    return Object.keys(config.profession_code_to_name)
        .includes(profession_code)
}

function _get_form_values()
{
    const storage_values = SessionStorageManager.read(
        config.storage_keys.form_values
    )
    if(_validate_form_values(storage_values))
        return storage_values
    return config.window.form.default_values
}

function _validate_form_values(values)
{
    if(values)
        return true
    return false
}