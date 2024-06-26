import {route, match, has_key} from "../../../script/helpers.js"
import config from "../../../config.js"
import Form from "./form.js"
import SubwindowFactory from "./subwindow/factory.js"
import FormUi from "./form_ui.js"
import MainUi from "../../../script/main_ui.js"
import SessionStorageManager from "../../../script/session_storage_manager.js"

main()

function main()
{
    const profession_code = SessionStorageManager.read(
        config.storage_keys.profession_code
    )
    if(!has_key(config.profession_code_to_name, profession_code))
    {
        route(config.subpage_paths.home)
        return
    }

    const form_values = get_form_values()
    
    new Form(
        new MainUi(
            config.main_ui.section_class_names,
            config.main_ui.focusable_class_name,
            config.main_ui.content,
        ),
        new FormUi(
            config.window.form.ui.section_class_names,
            config.window.form.ui.content,
        ),
        new SubwindowFactory(
            config.window.form.subwindow,
            get_code_names(
                profession_code,
                config.profession_code_to_skill_codes,
                config.skill_code_to_name,
            ),
            get_code_names(
                profession_code,
                config.profession_code_to_interest_codes,
                config.interest_code_to_name,
            ),
            config.theme_code_to_name,
            config.layout_code_to_name,
        ),
        config.window.form.subwindow_codes,
        config.subwindow_code_to_name,
        profession_code,
        form_values,
        config.window.form.default_values,
        config.storage_keys.form_values,
        config.storage_keys.profession_code,
        config.subpage_paths.ganerator,
    )
    SessionStorageManager.remove(config.storage_keys.profession_code)
    SessionStorageManager.remove(config.storage_keys.form_values)
}

function get_form_values()
{
    const storage_values = SessionStorageManager.read(config.storage_keys.form_values)
    if(match(storage_values, config.window.form.default_values))
        return storage_values
    return config.window.form.default_values
}

function get_code_names(key, key_to_codes, code_to_names)
{
    if(!has_key(key_to_codes, key))
        key = config.custom_profession_code
    return key_to_codes[key].map((code) => code_to_names[code])
}