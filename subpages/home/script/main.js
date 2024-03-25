import config from "../../../config.js"
import MainWindow from "../../../script/main_window.js"
import MainWindowNodeCreator from "../../../script/main_window_node_creator.js"
import MainWindowUi from "../../../script/main_window_ui.js"
import WindowUi from "../../../script/window_ui.js"
import HomeWindow from "./home_window.js"
import HomeNodeCreator from "./home_window_node_creator.js"


let main_window = null
let window = null
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
    window = new HomeWindow(
        new WindowUi(
            config.window_ui.section_class_names,
        ),
        new HomeNodeCreator(),
        config.window_contents.home,
        Object.keys(config.professions),
    )
    main_window.enable_all_focusable_nodes()
}