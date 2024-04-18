import {UiNode} from "../../../../script/ui_node.js"

class SubwindowUi
{
    #content_class_name
    #content
    #input_nodes_creator

    constructor(content_class_name, content, input_nodes_creator)
    {
        this.#content_class_name = content_class_name
        this.#content = content
        this.#input_nodes_creator = input_nodes_creator
    }

    create_window(values_getter, value_updater)
    {
        UiNode.get_by_class(this.#content_class_name).draw_nodes(
            ...this.#create_input_nodes(values_getter, this.#content, value_updater)
        )
    }

    #create_input_nodes(values_getter, content, value_updater)
    {
        const input_nodes = new Array()
        for(const key of Object.keys(values_getter()))
            input_nodes.push(
                this.#input_nodes_creator(
                    content[key],
                    () => values_getter()[key],
                    (...args) => value_updater(key, ...args)
                )
            )
        return input_nodes
    }
}

export default SubwindowUi