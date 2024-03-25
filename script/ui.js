class Ui
{
    static new_node(tag_name, attributes = {}, child_nodes = [], listeners = {})
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

    static draw_nodes_in(child, container_cls)
    {
        const container = document.getElementsByClassName(container_cls)[0]
        this.clear_node(container)
        if(child?.[Symbol.iterator])
            child.forEach(node => container.appendChild(node));
        else
            container.appendChild(child)
    }

    static draw_nodes_in_head(child)
    {
        if(child?.[Symbol.iterator])
            child.forEach(node => document.head.appendChild(node));
        else
            document.head.appendChild(child)
    }

    static clear_node(node)
    {
        while(node.firstChild)
            node.firstChild.remove()
    }
}

export default Ui