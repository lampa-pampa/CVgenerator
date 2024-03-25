import config from "../../config.js"
import MainWindow from "../../script/main_window.js"
import MainWindowUi from "../../script/main_window_ui.js"
import MainWindowNodeCreator from "../../script/main_window_node_creator.js"

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
        new MainWindowNodeCreator(),
        config.main_window.content
    )
    main_window.enable_all_focusable_nodes()
}