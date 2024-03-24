class WindowUiImpl {
    constructor(section_class_names, focusable_class_name)
    {
        this._section_class_names = section_class_names
        this._focusable_class_name = focusable_class_name
    }
    
    draw_header(child)
    {
        this._draw_nodes_in(child, this._section_class_names.header)
    }

    draw_content(child)
    {
        this._draw_nodes_in(child, this._section_class_names.content)
    }

    draw_footer(child)
    {
        this._draw_nodes_in(child, this._section_class_names.footer)
    }

    enable_all_focusable_nodes()
    {
        for(const node of document.getElementsByClassName(
            this._focusable_class_name
        )){
            node.addEventListener("keydown", (e) => {
                if(e.key === "Enter") {
                    e.target.click()
                    e.preventDefault()
                }
            })
        }
    }

    _draw_nodes_in(child, container_cls)
    {
        const container = document.getElementsByClassName(container_cls)[0]
        this._clear(container)
        if(child?.[Symbol.iterator])
        {
            for(const node of child)
                container.appendChild(node)
        }
        else
        {
            container.appendChild(child)
        }
    }

    _clear(node)
    {
        while(node.firstChild)
            node.firstChild.remove()
    }
}

export default WindowUiImpl