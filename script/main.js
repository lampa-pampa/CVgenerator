import config_dict from "../config.js"
import ConfigReader from "./config_reader.js"
import HomeWindow from "./window/home.js"
import HomeNodeCreator from "./window/home_node_creator.js"
import WindowUiImpl from "./window/window_ui_impl.js"


let window = null
_main()

function _main()
{
    const config = ConfigReader.read(config_dict)
    window = new HomeWindow(
        new WindowUiImpl(
            config.window_ui.section_class_names,
            config.window_ui.focusable_class_name,
        ),
        new HomeNodeCreator(),
        config.window_contents.home,
        Object.keys(config.professions),
    )
}