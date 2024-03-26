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
            new UiNode("h2", this._content.title, {
                class: "window-title",
            })
        )
    }

    _create_list(kwargs)
    {
        UiNode.get_by_class(this._section_class_names.list).draw_nodes(
            new UiNode("ul", "", {
                class: "window-list max-height",
                tabindex: "-1",
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
                this._create_list_element(
                    kwargs.profession_code_to_name[profession_code],
                    () => kwargs.handler(profession_code),
                )
            )
        return elements                   
    }

    _create_list_element(profession_name, handler)
    {
        return new UiNode("li", "", {}, [
            new UiNode("span", profession_name),
            this._create_list_element_button(profession_name, handler)
        ])
    }

    _create_list_element_button(profession_name, handler)
    {
        return new UiNode("button", "", {
            class: "button max-height center-content animated-button next border focusable",
            "data-title": this._content.button.title_prefix
                + profession_name
        }, [
            new UiNode("span", this._content.button.text)
        ], {
            click: handler
        })
    }

    _create_footer(handler)
    {
        UiNode.get_by_class(this._section_class_names.footer).draw_nodes(
            new UiNode("span", "", {}, [
                new UiNode("span", this._content.footer.text),
                new UiNode("span", this._content.footer.link_text, {
                    class: "link focusable",
                    tabindex: "0",
                }, [], {
                    click: handler
                }),
            ]),
        )
    }
}

export default HomeWindowUi