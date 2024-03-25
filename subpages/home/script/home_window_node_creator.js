import new_node from "../../../script/node_creator.js"

class HomeNodeCreator
{
    create_header(content)
    {
        return new_node("h2", {
            textContent: content.text,
            className: "window-title",
        })
    }

    create_content(professions, content, handler)
    {
        return new_node("ul", {
            tabIndex: "-1",
            className: "window-list max-height",
        }, 
            this._create_list_elements(professions, content, handler)
        )
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
        return new_node("li", {}, [
            new_node("span", {
                textContent: profession
            }, []),
            new_node("button", {
                className: "button max-height center-content animated-button next border focusable",
                title: content.list_element.button.title_prefix + profession
            }, [
                new_node("span", {
                    textContent: content.list_element.button.text
                }, [])
            ], {
                click: handler.bind({
                    profession: profession,
                    form_path: content.list_element.button.form_path
                })
            })
        ])
    }

    create_footer(content, handler)
    {
        return new_node("span", {}, [
            new_node("span", {
                textContent: content.text,
            }),
            new_node("span", {
                className: "link focusable",
                tabIndex: "0",
                textContent: content.link.text,
            }, [], {
                click: handler.bind({
                    profession: content.link.profession,
                    form_path: content.link.form_path,
                })
            }),
        ])
    }
}

export default HomeNodeCreator