import Subwindow from "./subwindow.js"
import SubwindowUi from "./subwindow_ui.js"
import SubwindowNodeCreators from "./node_creators.js"
import SubwindowValuesValidators from "./values_validators.js"

class SubwindowFactory
{
    #content_class_name
    #code_to_content
    #code_to_creator_properties

    constructor(
        subwindow,
        skills,
        interests,
        theme_code_to_name,
        layout_code_to_name,
    ){
        this.#content_class_name = subwindow.content_class_name
        this.#code_to_content = subwindow.code_to_content
        
        this.#code_to_creator_properties = {
            "1": {
                node_creator: null,
                values_validator: null,
            },
            "2": {
                node_creator: SubwindowNodeCreators.labeled_text_field,
                values_validator: SubwindowValuesValidators.all,
            },
            "3": {
                node_creator: SubwindowNodeCreators.labeled_text_field,
                values_validator: SubwindowValuesValidators.at_least_one,
            },
            "4": {
                node_creator: null,
                values_validator: null,
            },
            "5": {
                node_creator: null,
                values_validator: null,
            },
            "6": {
                node_creator: null,
                values_validator: null,
            },
            "7": {
                node_creator: SubwindowNodeCreators.text_area,
                values_validator: SubwindowValuesValidators.optional,
            },
            "8": {
                node_creator: SubwindowNodeCreators.checkbox_buttons.bind({
                    values: skills,
                }),
                values_validator: SubwindowValuesValidators.optional,
            },
            "9": {
                node_creator: SubwindowNodeCreators.checkbox_buttons.bind({
                    values: interests,
                }),
                values_validator: SubwindowValuesValidators.optional,
            },
            "10": {
                node_creator: SubwindowNodeCreators.text_area,
                values_validator: SubwindowValuesValidators.optional,
            },
            "11": {
                node_creator: SubwindowNodeCreators.labeled_text_field,
                values_validator: SubwindowValuesValidators.all,
            },
            "12": {
                node_creator: SubwindowNodeCreators.radio_buttons.bind({
                    buttons: theme_code_to_name
                }),
                values_validator: SubwindowValuesValidators.all,
            },
            "13": {
                node_creator: SubwindowNodeCreators.radio_buttons.bind({
                    buttons: layout_code_to_name
                }),
                values_validator: SubwindowValuesValidators.all,
            },
            "14": {
                node_creator: SubwindowNodeCreators.message,
                values_validator: SubwindowValuesValidators.optional,
            },
        }
    }

    create(code, ...args)
    {
        const creator_properties = this.#code_to_creator_properties[code]
        return new Subwindow(
            new SubwindowUi(
                this.#content_class_name,
                this.#code_to_content[code],
                creator_properties.node_creator,
            ),
            creator_properties.values_validator,
            ...args,
        )
    }
}

export default SubwindowFactory