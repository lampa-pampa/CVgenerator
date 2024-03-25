import Ui from "./ui.js"
import route from "./router.js"

class MainWindowUi
{
    constructor(section_class_names, focusable_class_name)
    {
        this._section_class_names = section_class_names
        this._focusable_class_name = focusable_class_name
    }

    create_head(content)
    {
        Ui.draw_nodes_in_head([
            Ui.new_node("title", {
                textContent: content.title    
            }),
            Ui.new_node("link", {
                rel: "shortcut icon",
                href: content.icon_path,
                type: "icon",
            }),
        ])
    }

    create_header(content)
    {
        Ui.draw_nodes_in([
                this._create_baner(content.baner_path),
                this._create_nav(content.nav_links),
            ],
        this._section_class_names.header)
    }

    _create_baner(path)
    {
        return Ui.new_node("img", {
            src: path,
            className: "baner",
        })
    }

    _create_nav(nav_links)
    {
        return Ui.new_node("nav", {}, [
            Ui.new_node("ul", {
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
        return Ui.new_node("li", {
            className: "max-height center-content",
        }, [
            Ui.new_node("span", {
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
        Ui.draw_nodes_in(
            Ui.new_node("span", {
                textContent: content.text
            }),
        this._section_class_names.footer)
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