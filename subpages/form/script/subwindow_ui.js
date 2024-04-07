class SubwindowUi
{
    #content_class_name
    #content
    #input_node_creator

    constructor(content_class_name, content, input_node_creator)
    {
        this.#content_class_name = content_class_name
        this.#content = content
        this.#input_node_creator = input_node_creator
    }

    create_window(values, value_updater)
    {
        UiNode.get_by_class(this.#content_class_name).draw_nodes(
            this.#input_node_creator(values, this.#content, value_updater)
        )
    }
}

export default SubwindowUi