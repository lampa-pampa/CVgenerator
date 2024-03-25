function new_node(tag_name, attributes = {}, child_nodes = [], listeners = {})
{
    const node = document.createElement(tag_name)
    for(const attribute in attributes)
    {
        if(attribute == "title")
            node.setAttribute("data-title", attributes[attribute])
        else
            node[attribute] = attributes[attribute]
    }
    for(const child of child_nodes)
        node.appendChild(child)
    for(const listener_name in listeners)
        node.addEventListener(listener_name, listeners[listener_name])
    return node
}

export default new_node