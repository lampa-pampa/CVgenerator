import config_dict from "../../config.js"
import ConfigReader from "../../script/config_reader.js"
import HomeWindow from "../../script/window/home.js"
import HomeNodeCreator from "../../script/window/home_node_creator.js"
import WindowUiImpl from "../../script/window/window_ui_impl.js"


let window = null
_main()

function _main()
{
    const config = ConfigReader.read(config_dict)
    window = new HomeWindow(
        new WindowUiImpl(
            config.window.ui.section_class_names,
            config.window.ui.focusable_class_name,
        ),
        new HomeNodeCreator(),
        config.window.content.home,
        Object.keys(config.professions),
    )
}