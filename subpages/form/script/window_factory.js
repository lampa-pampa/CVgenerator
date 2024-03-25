import NameWindow from "./form_windows/name_window.js"
import NameWindowUi from "./form_windows/name_window_ui.js"

class WindowFactory
{
    constructor(window_contents)
    {
        this.windows = {
            "name": () => {
                return new NameWindow(
                    new NameWindowUi(),
                    window_contents.name
                )
            },
            "contact": () => {
                return new NameWindow(
                    new NameWindowUi(),
                    window_contents.name
                )
            },
            "experience": () => {
                return new NameWindow(
                    new NameWindowUi(),
                    window_contents.name
                )
            },
            "education": () => {
                return new NameWindow(
                    new NameWindowUi(),
                    window_contents.name
                )
            },
            "about me": () => {
                return new NameWindow(
                    new NameWindowUi(),
                    window_contents.name
                )
            },
            "skills": () => {
                return new NameWindow(
                    new NameWindowUi(),
                    window_contents.name
                )
            },
            "interests": () => {
                return new NameWindow(
                    new NameWindowUi(),
                    window_contents.name
                )
            },
            "additional info": () => {
                return new NameWindow(
                    new NameWindowUi(),
                    window_contents.name
                )
            },
            "download": () => {
                return new NameWindow(
                    new NameWindowUi(),
                    window_contents.name
                )
            },
        }
    }

    create(window_name)
    {
        return this.windows[window_name]()
    }
}

export default WindowFactory