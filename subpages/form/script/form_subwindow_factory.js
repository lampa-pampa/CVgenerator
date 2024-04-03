import AboutYouSubwindow from "./form_subwindows/about_you_subwindow.js"
import AboutYouSubwindowUi from "./form_subwindows/about_you_subwindow_ui.js"
import AdditionalInfoSubwindow from "./form_subwindows/additional_info_subwindow.js"
import AdditionalInfoSubwindowUi from "./form_subwindows/additional_info_subwindow_ui.js"
import ContactSubwindow from "./form_subwindows/contact_subwindow.js"
import ContactSubwindowUi from "./form_subwindows/contact_subwindow_ui.js"
import GenerateSubwindow from "./form_subwindows/generate_subwindow.js"
import GenerateSubwindowUi from "./form_subwindows/generate_subwindow_ui.js"
import NameSubwindow from "./form_subwindows/name_subwindow.js"
import NameSubwindowUi from "./form_subwindows/name_subwindow_ui.js"
import SubwindowNodeCreator from "./subwindow_node_creator.js"

class FormSubwindowFactory
{
    constructor(kwargs)
    {
        this._kwargs = kwargs
        this.window_code_to_creator = {
            "1": (kwargs) => {
                
            },
            "2": (kwargs) => {
                return new NameSubwindow(
                    new NameSubwindowUi(
                        this._kwargs.subwindow.content_class_name,
                        this._kwargs.subwindow.uis.name.content,
                        SubwindowNodeCreator.create_labeled_input,
                    ),
                    kwargs,
                )
            },
            "3": (kwargs) => {
                return new ContactSubwindow(
                    new ContactSubwindowUi(
                        this._kwargs.subwindow.content_class_name,
                        this._kwargs.subwindow.uis.contact.content,
                        SubwindowNodeCreator.create_labeled_input,
                    ),
                    kwargs,
                )
            },
            "4": (kwargs) => {
                
            },
            "5": (kwargs) => {
                
            },
            "6": (kwargs) => {
                
            },
            "7": (kwargs) => {
                return new AboutYouSubwindow(
                    new AboutYouSubwindowUi(
                        this._kwargs.subwindow.content_class_name,
                        this._kwargs.subwindow.uis.about_you.content,
                        SubwindowNodeCreator.create_multiline_input,
                    ),
                    kwargs,
                )
            },
            "8": (kwargs) => {
                
            },
            "9": (kwargs) => {
                
            },
            "10": (kwargs) => {
                return new AdditionalInfoSubwindow(
                    new AdditionalInfoSubwindowUi(
                        this._kwargs.subwindow.content_class_name,
                        this._kwargs.subwindow.uis.additional_info.content,
                        SubwindowNodeCreator.create_multiline_input,
                    ),
                    kwargs,
                )
            },
            "11": (kwargs) => {
                
            },
            "12": (kwargs) => {
                
            },
            "13": (kwargs) => {
                return new GenerateSubwindow(
                    new GenerateSubwindowUi(
                        this._kwargs.subwindow.content_class_name,
                        this._kwargs.subwindow.uis.generate.content,
                        SubwindowNodeCreator.create_multiline_message,
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