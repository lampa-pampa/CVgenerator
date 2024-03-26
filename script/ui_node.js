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

    constructor(
        tag_name,
        text_content = "",
        attributes = {},
        child_nodes = [],
        listeners = {}
    ){
        if(tag_name)
        {
            this._dom = this._create_element(tag_name)
            this.set_text_content(text_content)
            this.set_attributes(attributes)
            this.append_nodes(child_nodes)
            this.add_listeners(listeners)
        }
    }

    _create_element(tag_name)
    {
        return document.createElement(tag_name)
    }

    set_attributes(attributes)
    {
        for(const attribute in attributes)
            this._dom.setAttribute(attribute, attributes[attribute])
    }

    set_text_content(text)
    {
        this._dom.textContent = text
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
    
    add_listeners(listeners)
    {
        for(const listener_name in listeners)
        this._dom.addEventListener(listener_name, listeners[listener_name])
    }

    clear()
    {
        while(this._dom.firstChild)
            this._dom.firstChild.remove()
    }
}

export default UiNode