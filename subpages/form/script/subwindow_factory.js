import Subwindow from "./subwindow.js"
import SubwindowUi from "./subwindow_ui.js"
import SubwindowNodeCreators from "./subwindow_node_creators.js"
import SubwindowValuesValidators from "./subwindow_values_validators.js"

class SubwindowFactory
{
    #content_class_name
    #code_to_content
    #code_to_node_creator
    #code_to_values_validator

    constructor(
        subwindow,
        skill_codes,
        interest_codes,
        skill_code_to_name,
        interest_code_to_name,
        theme_code_to_name,
        layout_code_to_name,
    ){
        this.#content_class_name = subwindow.content_class_name
        this.#code_to_content = subwindow.code_to_content
        
        this.#code_to_node_creator = {
            "1": null,
            "2": SubwindowNodeCreators.text_field,
            "3": SubwindowNodeCreators.text_field,
            "4": null,
            "5": null,
            "6": null,
            "7": SubwindowNodeCreators.text_area,
            "8": null,
            "9": null,
            "10": SubwindowNodeCreators.text_area,
            "11": SubwindowNodeCreators.text_field,
            "12": SubwindowNodeCreators.radio_buttons.bind({
                buttons: theme_code_to_name
            }),
            "13": SubwindowNodeCreators.radio_buttons.bind({
                buttons: layout_code_to_name
            }),
            "14": SubwindowNodeCreators.message,
        }

        this.#code_to_values_validator = {
            "1": null,
            "2": SubwindowValuesValidators.all,
            "3": SubwindowValuesValidators.at_least_one,
            "4": null,
            "5": null,
            "6": null,
            "7": SubwindowValuesValidators.optional,
            "8": null,
            "9": null,
            "10": SubwindowValuesValidators.optional,
            "11": SubwindowValuesValidators.all,
            "12": SubwindowValuesValidators.all,
            "13": SubwindowValuesValidators.all,
            "14": SubwindowValuesValidators.optional,
        }
    }

    create(code, ...args)
    {
        return new Subwindow(
            new SubwindowUi(
                this.#content_class_name,
                this.#code_to_content[code],
                this.#code_to_node_creator[code]
            ),
            this.#code_to_values_validator[code],
            ...args,
        )
    }
}

export default SubwindowFactory