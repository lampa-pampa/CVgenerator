import UiNode from "../../../script/ui_node.js"

class HomeWindowUi {
    constructor(section_class_names, content)
    {
        this._section_class_names = section_class_names
        this._content = content
    }

    create_window(kwargs)
    {
        this._create_header()
        this._create_list({
            profession_codes: kwargs.profession_codes,
            profession_code_to_name: kwargs.profession_code_to_name,
            handler: kwargs.handler,
        })
        this._create_footer(
            () => kwargs.handler(kwargs.custom_profession_code)
        )
    }

    _create_header()
    {
        UiNode.get_by_class(this._section_class_names.header).draw_nodes(
            new UiNode("h2", {
                textContent: this._content.header.text,
                className: "window-title",
            })
        )
    }

    _create_list(kwargs)
    {
        UiNode.get_by_class(this._section_class_names.list).draw_nodes(
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
                title: this._content.list.button.title_prefix
                    + kwargs.profession_name
            }, [
                new UiNode("span", {
                    textContent: this._content.list.button.text
                }, [])
            ], {
                click: () => kwargs.handler(kwargs.profession_code)
            })
        ])
    }

    _create_footer(handler)
    {
        UiNode.get_by_class(this._section_class_names.footer).draw_nodes(
            new UiNode("span", {}, [
                new UiNode("span", {
                    textContent: this._content.footer.text,
                }),
                new UiNode("span", {
                    className: "link focusable",
                    tabIndex: "0",
                    textContent: this._content.footer.link.text,
                }, [], {
                    click: handler
                }),
            ]),
        )
    }
}

export default HomeWindowUi