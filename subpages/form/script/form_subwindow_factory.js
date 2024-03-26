import NameSubwindow from "./form_subwindows/name_subwindow.js"
import NameSubwindowUi from "./form_subwindows/name_subwindow_ui.js"

class FormSubwindowFactory
{
    constructor(form_subwindows)
    {
        this.window_code_to_creator = {
            "1": () => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        form_subwindows.name.ui.section_class_names
                    ), {
                        content: form_subwindows.name.content
                    }
                )
            },
            "2": () => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        form_subwindows.name.ui.section_class_names
                    ), {
                        content: form_subwindows.name.content
                    }
                )
            },
            "3": () => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        form_subwindows.name.ui.section_class_names
                    ), {
                        content: form_subwindows.name.content
                    }
                )
            },
            "4": () => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        form_subwindows.name.ui.section_class_names
                    ), {
                        content: form_subwindows.name.content
                    }
                )
            },
            "5": () => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        form_subwindows.name.ui.section_class_names
                    ), {
                        content: form_subwindows.name.content
                    }
                )
            },
            "6": () => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        form_subwindows.name.ui.section_class_names
                    ), {
                        content: form_subwindows.name.content
                    }
                )
            },
            "7": () => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        form_subwindows.name.ui.section_class_names
                    ), {
                        content: form_subwindows.name.content
                    }
                )
            },
            "8": () => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        form_subwindows.name.ui.section_class_names
                    ), {
                        content: form_subwindows.name.content
                    }
                )
            },
            "9": () => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        form_subwindows.name.ui.section_class_names
                    ), {
                        content: form_subwindows.name.content
                    }
                )
            },
            "10": () => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        form_subwindows.name.ui.section_class_names
                    ), {
                        content: form_subwindows.name.content
                    }
                )
            },
            "11": () => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        form_subwindows.name.ui.section_class_names
                    ), {
                        content: form_subwindows.name.content
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

export default FormSubwindowFactory