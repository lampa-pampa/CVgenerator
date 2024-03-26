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
        this._preload_image(this._content.icon_path)
        UiNode.get_head().append_nodes([
            new UiNode("title", {
                textContent: this._content.title    
            }),
            new UiNode("link", {}, {
                rel: "shortcut icon",
                href: this._content.icon_path,
                type: "icon",
            }),
        ])
    }

    _create_header()
    {
        UiNode.get_by_class(this._section_class_names.header).draw_nodes([
            this._create_baner(this._content.baner_path),
            this._create_nav(this._content.nav_links),
        ])
    }

    _create_baner(path)
    {
        this._preload_image(path)
        return new UiNode("img", {}, {
            src: path,
            class: "baner",
        })
    }

    _preload_image(path)
    {
        const img = new Image()
        img.src = path
    }

    _create_nav(nav_links)
    {
        return new UiNode("nav", {}, {}, [
            new UiNode("ul", {}, {
                tabindex: "-1",
                class: "max-height"
            },
                this._create_nav_links(nav_links)
            )
        ])
    }

    _create_nav_links(nav_links)
    {
        const links = new Array()
        for(const link_text in nav_links)
            links.push(this._create_nav_link({
                text: link_text,
                href: nav_links[link_text],
            }))
        return links
    }

    _create_nav_link(content)
    {
        return new UiNode("li", {}, {
            class: "max-height center-content",
        }, [
            new UiNode("span", {
                textContent: content.text,
            }, {
                class: "link focusable",
                tabindex: "0",
            }, [], {
                click: () => route(content.href)
            })
        ])
    }

    _create_footer()
    {
        UiNode.get_by_class(this._section_class_names.footer).draw_nodes(
            new UiNode("span", {
                textContent: this._content.footer
            })
        )
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
}

export default MainUi