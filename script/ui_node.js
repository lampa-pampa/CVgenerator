class UiNode
{
    #dom

    static reflow()
    {
        document.body.offsetWidth
    }

    static get_by_class(class_name)
    {
        const ui_node = new UiNode()
        ui_node.#dom = document.getElementsByClassName(class_name)[0]
        return ui_node
    }

    static get_head()
    {
        const ui_node = new UiNode()
        ui_node.#dom = document.head
        return ui_node
    }

    constructor(kwargs)
    {
        if(kwargs)
        {
            this.#dom = this._create_element(kwargs.tag ?? "span")
            this.set_text_content(kwargs.text_content ?? "")
            this.set_attributes(kwargs.attributes ?? {})
            if(kwargs.child_nodes)
                this.append_nodes(...kwargs.child_nodes)
            this.add_listeners(kwargs.listeners ?? {})
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

    remove_attributes(...attributes)
    {
        for(const attribute_name of attributes)
            this.#dom.removeAttribute(attribute_name)
    }

    get_dom()
    {
        return this.#dom
    }

    set_text_content(text)
    {
        this.#dom.textContent = text
    }

    draw_nodes(...nodes)
    {
        this.clear()
        this.append_nodes(...nodes)
    }

    append_nodes(...nodes)
    {
        for(const child of nodes)
            this.#dom.appendChild(child.#dom)
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