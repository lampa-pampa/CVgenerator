class Ui
{
    static draw_nodes_in(child, container_cls)
    {
        const container = document.getElementsByClassName(container_cls)[0]
        this.clear_node(container)
        if(child?.[Symbol.iterator])
            child.forEach(node => container.appendChild(node));
        else
            container.appendChild(child)
    }

    static clear_node(node)
    {
        while(node.firstChild)
            node.firstChild.remove()
    }
}

export default Ui