import NameSubwindow from "./form_subwindows/name_subwindow.js"
import NameSubwindowUi from "./form_subwindows/name_subwindow_ui.js"

class FormSubwindowFactory
{
    constructor(kwargs)
    {
        this._kwargs = kwargs
        this.window_code_to_creator = {
            "1": (kwargs) => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        this._kwargs.subwindows.name.ui.content_class_name,
                        this._kwargs.subwindows.name.ui.content,
                    ),
                    kwargs,
                )
            },
            "2": (kwargs) => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        this._kwargs.subwindows.name.ui.content_class_name,
                        this._kwargs.subwindows.name.ui.content,
                    ),
                    kwargs,
                )
            },
            "3": (kwargs) => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        this._kwargs.subwindows.name.ui.content_class_name,
                        this._kwargs.subwindows.name.ui.content,
                    ),
                    kwargs,
                )
            },
            "4": (kwargs) => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        this._kwargs.subwindows.name.ui.content_class_name,
                        this._kwargs.subwindows.name.ui.content,
                    ),
                    kwargs,
                )
            },
            "5": (kwargs) => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        this._kwargs.subwindows.name.ui.content_class_name,
                        this._kwargs.subwindows.name.ui.content,
                    ),
                    kwargs,
                )
            },
            "6": (kwargs) => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        this._kwargs.subwindows.name.ui.content_class_name,
                        this._kwargs.subwindows.name.ui.content,
                    ),
                    kwargs,
                )
            },
            "7": (kwargs) => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        this._kwargs.subwindows.name.ui.content_class_name,
                        this._kwargs.subwindows.name.ui.content,
                    ),
                    kwargs,
                )
            },
            "8": (kwargs) => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        this._kwargs.subwindows.name.ui.content_class_name,
                        this._kwargs.subwindows.name.ui.content,
                    ),
                    kwargs,
                )
            },
            "9": (kwargs) => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        this._kwargs.subwindows.name.ui.content_class_name,
                        this._kwargs.subwindows.name.ui.content,
                    ),
                    kwargs,
                )
            },
            "10": (kwargs) => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        this._kwargs.subwindows.name.ui.content_class_name,
                        this._kwargs.subwindows.name.ui.content,
                    ),
                    kwargs,
                )
            },
            "11": (kwargs) => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        this._kwargs.subwindows.name.ui.content_class_name,
                        this._kwargs.subwindows.name.ui.content,
                    ),
                    kwargs,
                )
            },
        }
    }

    create(window_code, kwargs)
    {
        return this.window_code_to_creator[window_code](kwargs)
    }
}

export default FormSubwindowFactory