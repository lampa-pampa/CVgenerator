import {UiNode} from "../../../script/ui_node.js"

class HomeWindowUi {
    #section_class_names
    #content

    constructor(section_class_names, content)
    {
        this.#section_class_names = section_class_names
        this.#content = content
    }

    create_window(kwargs)
    {
        this.#setup_title()
        this.#create_list_elements({
            profession_codes: kwargs.profession_codes,
            profession_code_to_name: kwargs.profession_code_to_name,
            handler: kwargs.handler,
        })
        this.#setup_footer(
            () => kwargs.handler(kwargs.custom_profession_code)
        )
    }

    #setup_title()
    {
        UiNode.get_by_class(this.#section_class_names.title).set_text_content(
            this.#content.title
        )
    }

    #create_list_elements(kwargs)
    {
        const elements = new Array()
        for(const profession_code of kwargs.profession_codes)
            elements.push(
                this.#create_list_element(
                    kwargs.profession_code_to_name[profession_code],
                    () => kwargs.handler(profession_code),
                )
            )
        UiNode.get_by_class(this.#section_class_names.list).draw_nodes(elements)                
    }

    #create_list_element(profession_name, handler)
    {
        return new UiNode("li", "", {}, [
            new UiNode("span", profession_name),
            this.#create_list_element_button(profession_name, handler)
        ])
    }

    #create_list_element_button(profession_name, handler)
    {
        return new UiNode("button", "", {
            class: "button max-height center-content animated-button next border focusable",
            "data-title": this.#content.button.title_prefix
                + profession_name
        }, [
            new UiNode("span", this.#content.button.text)
        ], {
            click: handler
        })
    }

    #setup_footer(handler)
    {
        UiNode.get_by_class(this.#section_class_names.footer.label).set_text_content(
            this.#content.footer.label
        )
        const link = UiNode.get_by_class(this.#section_class_names.footer.link)
        link.set_text_content(this.#content.footer.link)
        link.add_listeners({
            click: handler
        })
    }
}

export default HomeWindowUi