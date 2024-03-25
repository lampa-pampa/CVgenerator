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
        ),
        config.home_window_content,
        Object.keys(config.professions),
    )
    new MainWindow(
        new MainWindowUi(
            config.main_window.ui.section_class_names,
            config.main_window.ui.focusable_class_name
        ),
        config.main_window.content
    ).enable_all_focusable_nodes()
}