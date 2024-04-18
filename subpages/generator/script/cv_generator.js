import {UiNode} from "../../../script/ui_node.js"

class CvGenerator
{
    #theme_code_to_colors
    #layout_code_to_section_creators

    constructor(theme_code_to_colors)
    {
        this.#theme_code_to_colors = theme_code_to_colors
        this.#layout_code_to_section_creators = {
            "1": {

            },
            "2": {

            },
            "3": {

            },
        }
    }

    #create_image_section(content)
    {

    }

    #create_name_and_surname_section(content, profession_name)
    {

    }

    #create_contact_section(content)
    {

    }
    
    #create_education_section(content)
    {

    }

    #create_experience_section(content)
    {

    }

    #create_about_me_section(content)
    {

    }

    #create_skills_section(content)
    {

    }

    #create_interests_section(content)
    {
        
    }

    #create_additional_info_section(content)
    {

    }

    #create_clause_section(content)
    {

    }

    generate(values, profession_name)
    {
        return new UiNode({
            tag: "div",
            attributes: {
                style: "color: black; width: 100%;"
            },
            child_nodes: [
                new UiNode({
                    tag: "img",
                    attributes: {
                        src: values["1"].image,
                        style: "width: 150px; height: 200px;"
                    },
                }),
                new UiNode({
                    tag: "pre",
                    text_content: `${values["2"].name} ${values["2"].surname} ${profession_name}`,
                }),
                new UiNode({
                    tag: "pre",
                    text_content: `${values["3"].email} ${values["3"].phone}`,
                }),
                new UiNode({
                    tag: "a",
                    text_content: values["3"].socials,
                    attributes: {
                        href: values["3"].socials,
                    },
                }),
                new UiNode({
                    tag: "pre",
                    text_content: values["4"].education.join("\n"),
                }),
                new UiNode({
                    tag: "pre",
                    text_content: values["5"].experience.join("\n"),
                }),
                new UiNode({
                    tag: "pre",
                    text_content: values["6"].about,
                }),
                new UiNode({
                    tag: "pre",
                    text_content: values["7"].skills.join("\n"),
                }),
                new UiNode({
                    tag: "pre",
                    text_content: values["8"].interests.join("\n"),
                }),
                new UiNode({
                    tag: "pre",
                    text_content: values["9"].info,
                }),
                new UiNode({
                    tag: "pre",
                    text_content: values["10"].company_name,
                }),
                new UiNode({
                    tag: "pre",
                    text_content: values["11"].theme_code,
                }),
                new UiNode({
                    tag: "pre",
                    text_content: values["12"].layout_code,
                }),
            ],
        })
    }
}

export default CvGenerator