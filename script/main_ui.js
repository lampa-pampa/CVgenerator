import {is_enabled, route} from "./helpers.js"
import {UiNode} from "./ui_node.js"

class MainUi
{
    #section_class_names
    #focusable_class_name
    #content

    constructor(section_class_names, focusable_class_name, content)
    {
        this.#section_class_names = section_class_names
        this.#focusable_class_name = focusable_class_name
        this.#content = content
    }

    create_window()
    {
        this.#create_head()
        this.#create_header()
        this.#create_footer()
    }

    #create_head()
    {
        UiNode.get_head().append_nodes(
            new UiNode({
                tag: "title",
                text_content: this.#content.title,
            }),
            new UiNode({
                tag: "link",
                attributes: {
                    rel: "shortcut icon",
                    href: this.#content.icon_path,
                    type: "icon",
                },
            }),
        )
    }

    #create_header()
    {
        this.#setup_baner(this.#content.baner_path)
        this.#create_nav_links(this.#content.nav_links)
    }

    #setup_baner(path)
    {
        UiNode.get_by_class(this.#section_class_names.baner).set_attributes({
            src: path,
        })
    }

    #create_nav_links(nav_links)
    {
        const links = new Array()
        for(const link_text in nav_links)
            links.push(this.#create_nav_link({
                text: link_text,
                href: nav_links[link_text],
            }))
        UiNode.get_by_class(this.#section_class_names.nav_list).draw_nodes(
            ...links
        )
    }

    #create_nav_link(content)
    {
        return new UiNode({
            tag: "li",
            child_nodes: [
                new UiNode({
                    tag: "span",
                    text_content: content.text,
                    attributes: {
                        class: "link",
                        tabindex: "0",
                    },
                    listeners: {
                        click: () => route(content.href)
                    },
                }),
            ],
        })
    }

    #create_footer()
    {
        UiNode.get_by_class(this.#section_class_names.footer).set_text_content(
            this.#content.footer
        )
    }

    enable_all_focusable_nodes()
    {
        for(const node of document.getElementsByClassName(
            this.#focusable_class_name
        )){
            if(node.tagName !== "TEXTAREA")
            {
                node.removeEventListener("keydown", this.handle_keydown)
                node.addEventListener("keydown", this.handle_keydown)
            }
        }
    }

    handle_keydown(e)
    {
        if(e.key === "Enter")
        {
            e.preventDefault()
            if(is_enabled(this))
                this.click()
        }
    }
}

export default MainUi