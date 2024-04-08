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
        
        this.#ui.create_window(this.#values, this.#update_value.bind(this))
        this.#next_button_refresher()
    }

    #update_value(value_name, value, method_name = "")
    {
        if(method_name === "add")
            this.#values[value_name].push(value)
        else if(method_name === "remove")
            this.#values[value_name].splice(this.#values[value_name].indexOf(value))
        else
            this.#values[value_name] = value
        this.#next_button_refresher()
    }
}

export default Subwindow