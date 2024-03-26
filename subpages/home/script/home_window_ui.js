import UiNode from "../../../script/ui_node.js"

class HomeWindowUi {
    constructor(section_class_names)
    {
        this._section_class_names = section_class_names
    }

    create_header(content)
    {
        UiNode.get_by_class(this._section_class_names.header).draw_nodes(
            new UiNode("h2", {
                textContent: content.text,
                className: "window-title",
            })
        )
    }

    create_list(kwargs)
    {
        UiNode.get_by_class(this._section_class_names.content).draw_nodes(
            new UiNode("ul", {
                tabIndex: "-1",
                className: "window-list max-height",
            }, 
                this._create_list_elements(kwargs)
            )
        )
    }

    _create_list_elements(kwargs)
    {
        const elements = new Array()
        for(const profession_code of kwargs.profession_codes)
            elements.push(
                this._create_list_element({
                    profession_code: profession_code,
                    profession_name: kwargs.profession_code_to_name[
                        profession_code
                    ],
                    content: kwargs.content,
                    handler: kwargs.handler,
                })
            )
        return elements                   
    }

    _create_list_element(kwargs)
    {
        return new UiNode("li", {}, [
            new UiNode("span", {
                textContent: kwargs.profession_name
            }, []),
            new UiNode("button", {
                className: "button max-height center-content animated-button next border focusable",
                title: kwargs.content.button.title_prefix + kwargs.profession_name
            }, [
                new UiNode("span", {
                    textContent: kwargs.content.button.text
                }, [])
            ], {
                click: () => kwargs.handler(kwargs.profession_code)
            })
        ])
    }

    create_footer(kwargs)
    {
        UiNode.get_by_class(this._section_class_names.footer).draw_nodes(
            new UiNode("span", {}, [
                new UiNode("span", {
                    textContent: kwargs.content.text,
                }),
                new UiNode("span", {
                    className: "link focusable",
                    tabIndex: "0",
                    textContent: kwargs.content.link.text,
                }, [], {
                    click: kwargs.handler
                }),
            ]),
        )
    }
}

export default HomeWindowUi