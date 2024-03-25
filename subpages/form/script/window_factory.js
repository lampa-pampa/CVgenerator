import NameWindow from "./form_windows/name_window.js"
import NameWindowUi from "./form_windows/name_window_ui.js"

class WindowFactory
{
    constructor(kwargs)
    {
        this.window_code_to_creator = {
            "1": () => {
                return new NameWindow(
                    new NameWindowUi(
                        kwargs.section_class_names
                    ),
                    kwargs.windows_content.name
                )
            },
            "2": () => {
                return new NameWindow(
                    new NameWindowUi(
                        kwargs.section_class_names
                    ),
                    kwargs.windows_content.name
                )
            },
            "3": () => {
                return new NameWindow(
                    new NameWindowUi(
                        kwargs.section_class_names
                    ),
                    kwargs.windows_content.name
                )
            },
            "4": () => {
                return new NameWindow(
                    new NameWindowUi(
                        kwargs.section_class_names
                    ),
                    kwargs.windows_content.name
                )
            },
            "5": () => {
                return new NameWindow(
                    new NameWindowUi(
                        kwargs.section_class_names
                    ),
                    kwargs.windows_content.name
                )
            },
            "6": () => {
                return new NameWindow(
                    new NameWindowUi(
                        kwargs.section_class_names
                    ),
                    kwargs.windows_content.name
                )
            },
            "7": () => {
                return new NameWindow(
                    new NameWindowUi(
                        kwargs.section_class_names
                    ),
                    kwargs.windows_content.name
                )
            },
            "8": () => {
                return new NameWindow(
                    new NameWindowUi(
                        kwargs.section_class_names
                    ),
                    kwargs.windows_content.name
                )
            },
            "9": () => {
                return new NameWindow(
                    new NameWindowUi(
                        kwargs.section_class_names
                    ),
                    kwargs.windows_content.name
                )
            },
        }
    }

    create(window_code)
    {
        return this.window_code_to_creator[window_code]()
    }
}

export default WindowFactory