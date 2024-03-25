import Ui from "./ui.js"
import route from "./router.js"

class MainWindowUi
{
    constructor(section_class_names, focusable_class_name)
    {
        this._section_class_names = section_class_names
        this._focusable_class_name = focusable_class_name
    }

    create_header(content)
    {
        Ui.draw_nodes_in([
                this._create_baner(content.baner_path),
                this._create_nav(content.nav),
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

    _create_nav(content)
    {
        return Ui.new_node("nav", {}, [
            Ui.new_node("ul", {
                tabIndex: "-1",
                className: "max-height"
            }, 
                this._create_nav_links(content)
            )
        ])
    }

    _create_nav_links(content)
    {
        const links = new Array()
        for(const nav_link of content)
            links.push(this._create_nav_link(nav_link))
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