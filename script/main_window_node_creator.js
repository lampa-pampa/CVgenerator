import new_node from "./node_creator.js"
import route from "./router.js"

class MainWindowNodeCreator
{
    create_header(content)
    {
        return [
            this._create_baner(content.baner_path),
            this._create_nav(content.nav)
        ]
    }

    _create_baner(path)
    {
        return new_node("img", {
            src: path,
            className: "baner",
        })
    }

    _create_nav(content)
    {
        return new_node("nav", {}, [
            new_node("ul", {
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
        return new_node("li", {
            className: "max-height center-content",
        }, [
            new_node("span", {
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
        return new_node("span", {
            textContent: content.text
        })
    }
}

export default MainWindowNodeCreator