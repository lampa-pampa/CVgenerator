class Subwindow
{
    #ui
    #values
    #next_button_refresher
    #values_validator
    
    constructor(ui, values_validator, values, next_button_refresher)
    {
        this.#ui = ui
        this.#values_validator = values_validator
        this.#values = values
        this.#next_button_refresher = next_button_refresher
        
        this.#ui.create_window(this.#values, this.#update_value.bind(this))
        this.#next_button_refresher(this.#values_validator(this.#values))
    }

    #update_value(value_name, value)
    {
        this.#values[value_name] = value
        this.#next_button_refresher(this.#values_validator(this.#values))
    }
}

export default Subwindow