import Subwindow from "./subwindow.js"
import SubwindowUi from "./subwindow_ui.js"
import SubwindowNodeCreators from "./subwindow_node_creators.js"
import SubwindowValuesValidators from "./subwindow_values_validators.js"

class SubwindowFactory
{
    constructor(kwargs)
    {
        this._kwargs = kwargs
        this.window_code_to_creator = {
            "1": (kwargs) => {
                
            },
            "2": (...args) => {
                return new Subwindow(
                    new SubwindowUi(
                        this._kwargs.subwindow.content_class_name,
                        this._kwargs.subwindow.content.name,
                        SubwindowNodeCreators.text_field
                    ),
                    SubwindowValuesValidators.all,
                    ...args,
                )
            },
            "3": (...args) => {
                return new Subwindow(
                    new SubwindowUi(
                        this._kwargs.subwindow.content_class_name,
                        this._kwargs.subwindow.content.contact,
                        SubwindowNodeCreators.text_field
                    ),
                    SubwindowValuesValidators.at_least_one,
                    ...args,
                )
            },
            "4": (kwargs) => {
                
            },
            "5": (kwargs) => {
                
            },
            "6": (kwargs) => {
                
            },
            "7": (...args) => {
                return new Subwindow(
                    new SubwindowUi(
                        this._kwargs.subwindow.content_class_name,
                        this._kwargs.subwindow.content.about_you,
                        SubwindowNodeCreators.text_area
                    ),
                    SubwindowValuesValidators.optional,
                    ...args,
                )
            },
            "8": (kwargs) => {
                
            },
            "9": (kwargs) => {
                
            },
            "10": (...args) => {
                return new Subwindow(
                    new SubwindowUi(
                        this._kwargs.subwindow.content_class_name,
                        this._kwargs.subwindow.content.additional_info,
                        SubwindowNodeCreators.text_area
                    ),
                    SubwindowValuesValidators.optional,
                    ...args,
                )
            },
            "11": (...args) => {
                return new Subwindow(
                    new SubwindowUi(
                        this._kwargs.subwindow.content_class_name,
                        this._kwargs.subwindow.content.company_name,
                        SubwindowNodeCreators.text_field
                    ),
                    SubwindowValuesValidators.all,
                    ...args,
                )
            },
            "12": (...args) => {
                return new Subwindow(
                    new SubwindowUi(
                        this._kwargs.subwindow.content_class_name,
                        this._kwargs.subwindow.content.theme,
                        SubwindowNodeCreators.radio_buttons.bind({
                            buttons: this._kwargs.theme_code_to_name
                        }),
                    ),
                    SubwindowValuesValidators.at_least_one,
                    ...args,
                )
            },
            "13": (...args) => {
                return new Subwindow(
                    new SubwindowUi(
                        this._kwargs.subwindow.content_class_name,
                        this._kwargs.subwindow.content.layout,
                        SubwindowNodeCreators.radio_buttons.bind({
                            buttons: this._kwargs.layout_code_to_name
                        })
                    ),
                    SubwindowValuesValidators.at_least_one,
                    ...args,
                )
            },
            "14": (...args) => {
                return new Subwindow(
                    new SubwindowUi(
                        this._kwargs.subwindow.content_class_name,
                        this._kwargs.subwindow.content.generate,
                        SubwindowNodeCreators.message
                    ),
                    SubwindowValuesValidators.optional,
                    ...args,
                )
            },
        }
    }

    create(window_code, ...args)
    {
        return this.window_code_to_creator[window_code](...args)
    }
}

export default SubwindowFactory