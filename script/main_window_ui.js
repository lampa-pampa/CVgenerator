import route from "./router.js"
import UiNode from "./ui_node.js"

class MainWindowUi
{
    constructor(section_class_names, focusable_class_name)
    {
        this._section_class_names = section_class_names
        this._focusable_class_name = focusable_class_name
    }

    create_head(content)
    {
        this._preload_image(content.icon_path)
        UiNode.get_head().append_nodes([
            new UiNode("title", {
                textContent: content.title    
            }),
            new UiNode("link", {
                rel: "shortcut icon",
                href: content.icon_path,
                type: "icon",
            }),
        ])
    }

    create_header(content)
    {
        UiNode.get_by_class(this._section_class_names.header).draw_nodes([
            this._create_baner(content.baner_path),
            this._create_nav(content.nav_links),
        ])
    }

    _create_baner(path)
    {
        this._preload_image(path)
        return new UiNode("img", {
            src: path,
            className: "baner",
        })
    }

    _preload_image(path)
    {
        const img = new Image()
        img.src = path
    }

    _create_nav(nav_links)
    {
        return new UiNode("nav", {}, [
            new UiNode("ul", {
                tabIndex: "-1",
                className: "max-height"
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
        return new UiNode("li", {
            className: "max-height center-content",
        }, [
            new UiNode("span", {
                className: "link focusable",
                tabIndex: "0",
                textContent: content.text,
            }, [], {
                click: () => route(content.href)
            })
        ])
    }

    create_footer(content)
    {
        UiNode.get_by_class(this._section_class_names.footer).draw_nodes(
            new UiNode("span", {
                textContent: content.text
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

export default MainWindowUi