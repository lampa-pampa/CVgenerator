import Ui from "../../../script/ui.js"

class HomeWindowUi {
    constructor(section_class_names)
    {
        this._section_class_names = section_class_names
    }

    create_header(content)
    {
        Ui.draw_nodes_in(
            Ui.new_node("h2", {
                textContent: content.text,
                className: "window-title",
            }),
        this._section_class_names.header)
    }

    create_content(kwargs)
    {
        Ui.draw_nodes_in(
            Ui.new_node("ul", {
                tabIndex: "-1",
                className: "window-list max-height",
            }, 
                this._create_list_elements(kwargs)
            ),
        this._section_class_names.content)
    }

    _create_list_elements(kwargs)
    {
        const elements = new Array()
        for(const profession_code of kwargs.content.profession_codes)
            elements.push(
                this._create_list_element({
                    profession_code: profession_code,
                    profession_name: kwargs.code_to_profession_name[
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
        return Ui.new_node("li", {}, [
            Ui.new_node("span", {
                textContent: kwargs.profession_name
            }, []),
            Ui.new_node("button", {
                className: "button max-height center-content animated-button next border focusable",
                title: kwargs.content.list_element.button.title_prefix + kwargs.profession_name
            }, [
                Ui.new_node("span", {
                    textContent: kwargs.content.list_element.button.text
                }, [])
            ], {
                click: () => kwargs.handler(kwargs.profession_code)
            })
        ])
    }

    create_footer(kwargs)
    {
            Ui.draw_nodes_in(Ui.new_node("span", {}, [
                Ui.new_node("span", {
                    textContent: kwargs.content.text,
                }),
                Ui.new_node("span", {
                    className: "link focusable",
                    tabIndex: "0",
                    textContent: kwargs.content.link.text,
                }, [], {
                    click: kwargs.handler
                }),
            ]),
        this._section_class_names.footer)
    }
}

export default HomeWindowUi