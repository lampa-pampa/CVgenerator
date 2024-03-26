class UiNode
{
    static get_by_class(cls)
    {
        const ui_node = new UiNode()
        ui_node._dom = document.getElementsByClassName(cls)[0]
        return ui_node
    }

    static get_head()
    {
        const ui_node = new UiNode()
        ui_node._dom = document.head
        return ui_node
    }

    constructor(tag_name, attributes = {}, child_nodes = [], listeners = {})
    {
        if(tag_name)
        {
            this._dom = document.createElement(tag_name)
            this.set_attributes(attributes)
            this.append_nodes(child_nodes)
            this.add_listeners(listeners)
        }
    }

    draw_nodes(nodes)
    {
        this.clear()
        this.append_nodes(nodes)
    }

    append_nodes(nodes)
    {
        if(nodes?.[Symbol.iterator])
            nodes.forEach(node => this._dom.appendChild(node._dom));
        else
            this._dom.appendChild(nodes._dom)
    }

    clear()
    {
        while(this._dom.firstChild)
            this._dom.firstChild.remove()
    }

    set_attributes(attributes)
    {
        for(const attribute in attributes)
        {
            if(attribute === "title")
                this._dom.setAttribute("data-title", attributes[attribute])
            else
                this._dom[attribute] = attributes[attribute]
        }
    }

    add_listeners(listeners)
    {
        for(const listener_name in listeners)
            this._dom.addEventListener(listener_name, listeners[listener_name])
    }
}

export default UiNode