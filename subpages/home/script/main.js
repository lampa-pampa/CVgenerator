import config from "../../../config.js"
import MainWindow from "../../../script/main_window.js"
import MainWindowUi from "../../../script/main_window_ui.js"
import HomeWindowUi from "./home_window_ui.js"
import HomeWindow from "./home_window.js"


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
        config.main_window.content
    )
    window = new HomeWindow(
        new HomeWindowUi(
            config.window_ui.section_class_names,
        ),
        config.window_contents.home,
        Object.keys(config.professions),
    )
    main_window.enable_all_focusable_nodes()
}