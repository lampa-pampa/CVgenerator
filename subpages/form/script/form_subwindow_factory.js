import ContactSubwindow from "./form_subwindows/contact_subwindow.js"
import ContactSubwindowUi from "./form_subwindows/contact_subwindow_ui.js"
import GenerateSubwindow from "./form_subwindows/generate_subwindow.js"
import GenerateSubwindowUi from "./form_subwindows/generate_subwindow_ui.js"
import NameSubwindow from "./form_subwindows/name_subwindow.js"
import NameSubwindowUi from "./form_subwindows/name_subwindow_ui.js"
import {create_labeled_input, create_multiline_message} from "./subwindow_node_creator.js"

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
                        create_labeled_input,
                    ),
                    kwargs,
                )
            },
            "2": (kwargs) => {
                return new ContactSubwindow(
                    new ContactSubwindowUi(
                        this._kwargs.subwindows.contact.ui.content_class_name,
                        this._kwargs.subwindows.contact.ui.content,
                        create_labeled_input,
                    ),
                    kwargs,
                )
            },
            "3": (kwargs) => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        this._kwargs.subwindows.name.ui.content_class_name,
                        this._kwargs.subwindows.name.ui.content,
                        create_labeled_input,
                    ),
                    kwargs,
                )
            },
            "4": (kwargs) => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        this._kwargs.subwindows.name.ui.content_class_name,
                        this._kwargs.subwindows.name.ui.content,
                        create_labeled_input,
                    ),
                    kwargs,
                )
            },
            "5": (kwargs) => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        this._kwargs.subwindows.name.ui.content_class_name,
                        this._kwargs.subwindows.name.ui.content,
                        create_labeled_input,
                    ),
                    kwargs,
                )
            },
            "6": (kwargs) => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        this._kwargs.subwindows.name.ui.content_class_name,
                        this._kwargs.subwindows.name.ui.content,
                        create_labeled_input,
                    ),
                    kwargs,
                )
            },
            "7": (kwargs) => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        this._kwargs.subwindows.name.ui.content_class_name,
                        this._kwargs.subwindows.name.ui.content,
                        create_labeled_input,
                    ),
                    kwargs,
                )
            },
            "8": (kwargs) => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        this._kwargs.subwindows.name.ui.content_class_name,
                        this._kwargs.subwindows.name.ui.content,
                        create_labeled_input,
                    ),
                    kwargs,
                )
            },
            "9": (kwargs) => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        this._kwargs.subwindows.name.ui.content_class_name,
                        this._kwargs.subwindows.name.ui.content,
                        create_labeled_input,
                    ),
                    kwargs,
                )
            },
            "10": (kwargs) => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        this._kwargs.subwindows.name.ui.content_class_name,
                        this._kwargs.subwindows.name.ui.content,
                        create_labeled_input,
                    ),
                    kwargs,
                )
            },
            "11": (kwargs) => {
                return new GenerateSubwindow(
                    new GenerateSubwindowUi(
                        this._kwargs.subwindows.generate.ui.content_class_name,
                        this._kwargs.subwindows.generate.ui.content,
                        create_multiline_message,
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