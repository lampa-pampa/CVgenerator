import config from "../../../config.js"
import MainWindow from "../../../script/main_window.js"
import MainWindowUi from "../../../script/main_window_ui.js"
import Form from "./form.js"
import FormUi from "./form_ui.js"
import WindowFactory from "./window_factory.js"

let main_window = null
let form_controller = null
_main()

function _main()
{
    main_window = new MainWindow(
        new MainWindowUi(
            config.main_window.ui.section_class_names,
            config.main_window.ui.focusable_class_name
        ),
        config.main_window.content
    )
    form_controller = new Form(
        new FormUi(),
        new WindowFactory(
            config.form_windows_content
        ),
        config.form_window_names,
        config.professions["Profession 1"]
    )
    main_window.enable_all_focusable_nodes()
}