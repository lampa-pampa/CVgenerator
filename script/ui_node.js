class UiNode
{
    #dom

    static get_by_class(cls)
    {
        const ui_node = new UiNode()
        ui_node.#dom = document.getElementsByClassName(cls)[0]
        return ui_node
    }

    static get_head()
    {
        const ui_node = new UiNode()
        ui_node.#dom = document.head
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
            this.#dom = this._create_element(tag_name)
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
            this.#dom.setAttribute(attribute, attributes[attribute])
    }

    get(property_name)
    {
        return this.#dom[property_name]
    }

    set(property_name, value)
    {
        this.#dom[property_name] = value
    }

    set_text_content(text)
    {
        this.#dom.textContent = text
    }

    draw_nodes(nodes)
    {
        this.clear()
        this.append_nodes(nodes)
    }

    append_nodes(nodes)
    {
        if(nodes?.[Symbol.iterator])
            nodes.forEach(node => this.#dom.appendChild(node.#dom));
        else
            this.#dom.appendChild(nodes.#dom)
    }
    
    add_listeners(listeners)
    {
        for(const listener_name in listeners)
        this.#dom.addEventListener(listener_name, listeners[listener_name])
    }

    clear()
    {
        while(this.#dom.firstChild)
            this.#dom.firstChild.remove()
    }
}

class UiNodeNs extends UiNode
{
    _create_element(tag_name)
    {
        return document.createElementNS(
            "http://www.w3.org/2000/svg", tag_name
        )
    }
}

export {UiNode, UiNodeNs}