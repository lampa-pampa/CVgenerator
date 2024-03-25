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

    create_content(professions, content, handler)
    {
        Ui.draw_nodes_in(
            Ui.new_node("ul", {
                tabIndex: "-1",
                className: "window-list max-height",
            }, 
                this._create_list_elements(professions, content, handler)
            ),
        this._section_class_names.content)
    }

    _create_list_elements(professions, content, handler)
    {
        const elements = new Array()
        for(const profession of professions)
            elements.push(
                this._create_list_element(profession, content, handler)
            )
        return elements                   
    }

    _create_list_element(profession, content, handler)
    {
        return Ui.new_node("li", {}, [
            Ui.new_node("span", {
                textContent: profession
            }, []),
            Ui.new_node("button", {
                className: "button max-height center-content animated-button next border focusable",
                title: content.list_element.button.title_prefix + profession
            }, [
                Ui.new_node("span", {
                    textContent: content.list_element.button.text
                }, [])
            ], {
                click: () => handler(
                    profession,
                    content.list_element.button.form_path
                )
            })
        ])
    }

    create_footer(content, handler)
    {
            Ui.draw_nodes_in(Ui.new_node("span", {}, [
                Ui.new_node("span", {
                    textContent: content.text,
                }),
                Ui.new_node("span", {
                    className: "link focusable",
                    tabIndex: "0",
                    textContent: content.link.text,
                }, [], {
                    click: () => handler(
                        content.link.profession,
                        content.link.form_path,
                    )
                }),
            ]),
        this._section_class_names.footer)
    }
}

export default HomeWindowUi