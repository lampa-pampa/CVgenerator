import NameSubWindow from "./form_subwindows/name_subwindow.js"
import NameSubWindowUi from "./form_subwindows/name_subwindow_ui.js"

class FormSubWindowFactory
{
    constructor(kwargs)
    {
        this.window_code_to_creator = {
            "1": () => {
                return new NameSubWindow(
                    new NameSubWindowUi(
                        kwargs.section_class_names
                    ), {
                        content: kwargs.windows_content.name
                    }
                )
            },
            "2": () => {
                return new NameSubWindow(
                    new NameSubWindowUi(
                        kwargs.section_class_names
                    ), {
                        content: kwargs.windows_content.name
                    }
                )
            },
            "3": () => {
                return new NameSubWindow(
                    new NameSubWindowUi(
                        kwargs.section_class_names
                    ), {
                        content: kwargs.windows_content.name
                    }
                )
            },
            "4": () => {
                return new NameSubWindow(
                    new NameSubWindowUi(
                        kwargs.section_class_names
                    ), {
                        content: kwargs.windows_content.name
                    }
                )
            },
            "5": () => {
                return new NameSubWindow(
                    new NameSubWindowUi(
                        kwargs.section_class_names
                    ), {
                        content: kwargs.windows_content.name
                    }
                )
            },
            "6": () => {
                return new NameSubWindow(
                    new NameSubWindowUi(
                        kwargs.section_class_names
                    ), {
                        content: kwargs.windows_content.name
                    }
                )
            },
            "7": () => {
                return new NameSubWindow(
                    new NameSubWindowUi(
                        kwargs.section_class_names
                    ), {
                        content: kwargs.windows_content.name
                    }
                )
            },
            "8": () => {
                return new NameSubWindow(
                    new NameSubWindowUi(
                        kwargs.section_class_names
                    ), {
                        content: kwargs.windows_content.name
                    }
                )
            },
            "9": () => {
                return new NameSubWindow(
                    new NameSubWindowUi(
                        kwargs.section_class_names
                    ), {
                        content: kwargs.windows_content.name
                    }
                )
            },
            "10": () => {
                return new NameSubWindow(
                    new NameSubWindowUi(
                        kwargs.section_class_names
                    ), {
                        content: kwargs.windows_content.name
                    }
                )
            },
            "11": () => {
                return new NameSubWindow(
                    new NameSubWindowUi(
                        kwargs.section_class_names
                    ), {
                        content: kwargs.windows_content.name
                    }
                )
            },
        }
    }

    create(window_code)
    {
        return this.window_code_to_creator[window_code]()
    }
}

export default FormSubWindowFactory