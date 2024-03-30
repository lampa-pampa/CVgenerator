import route from "./router.js"
import UiNode from "./ui_node.js"

class MainUi
{
    constructor(section_class_names, focusable_class_name, content)
    {
        this._section_class_names = section_class_names
        this._focusable_class_name = focusable_class_name
        this._content = content
    }

    create_window()
    {
        this._create_head()
        this._create_header()
        this._create_footer()
    }

    _create_head()
    {
        UiNode.get_head().append_nodes([
            new UiNode("title", this._content.title),
            new UiNode("link", "", {
                rel: "shortcut icon",
                href: this._content.icon_path,
                type: "icon",
            }),
        ])
    }

    _create_header()
    {
        this._setup_baner(this._content.baner_path)
        this._create_nav_links(this._content.nav_links)
    }

    _setup_baner(path)
    {
        UiNode.get_by_class(this._section_class_names.baner).set_attributes({
            src: path,
        })
    }

    _create_nav_links(nav_links)
    {
        const links = new Array()
        for(const link_text in nav_links)
            links.push(this._create_nav_link({
                text: link_text,
                href: nav_links[link_text],
            }))
        UiNode.get_by_class(this._section_class_names.nav_list).draw_nodes(
            links
        )
    }

    _create_nav_link(content)
    {
        return new UiNode("li", "", {
            class: "max-height center-content",
        }, [
            new UiNode("span", content.text, {
                class: "link focusable",
                tabindex: "0",
            }, [], {
                click: () => route(content.href)
            })
        ])
    }

    _create_footer()
    {
        UiNode.get_by_class(this._section_class_names.footer).set_text_content(
            this._content.footer
        )
    }

    enable_all_focusable_nodes()
    {
        for(const node of document.getElementsByClassName(
            this._focusable_class_name
        )){
            node.removeEventListener("keydown", this.handle_keydown)
            node.addEventListener("keydown", this.handle_keydown)
        }
    }

    handle_keydown(e)
    {
        if(e.key === "Enter") {
            e.target.click()
            e.preventDefault()
        }
    }
}

export default MainUi