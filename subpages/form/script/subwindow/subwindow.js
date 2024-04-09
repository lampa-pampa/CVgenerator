import {remove_element} from "../../../../script/helpers.js"

class Subwindow
{
    #ui
    #values
    #next_button_refresher
    
    constructor(ui, values_validator, values, next_button_refresher)
    {
        this.#ui = ui
        this.#values = values
        this.#next_button_refresher = () => {
            next_button_refresher(values_validator(Object.values(this.#values)))
        }
        
        this.#ui.create_window(this.#get_values.bind(this), this.#update_value.bind(this))
        this.#next_button_refresher()
    }

    #get_values()
    {
        return this.#values
    }

    #update_value(value_name, value, method_name = "set")
    {
        if(method_name === "add")
            this.#values[value_name].push(value)
        else if(method_name === "remove")
            remove_element(this.#values[value_name], value)
        else if(method_name === "set")
            this.#values[value_name] = value
        this.#next_button_refresher()
    }
}

export default Subwindow