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
        return new UiNode({
            tag: "img",
            attributes: {
                src: content.image,
                style: "width: 150px; height: 200px;"
            },
        })
    }

    #create_name_and_surname_section(content)
    {
        return new UiNode({
            tag: "pre",
            text_content: `${content.name} ${content.surname} ${content.job_position}`,
        })
    }

    #create_contact_section(content)
    {
        return new UiNode({
            tag: "div",
            child_nodes: [
                new UiNode({
                    tag: "pre",
                    text_content: `${content.email} ${content.phone}`,
                }),
                new UiNode({
                    tag: "a",
                    text_content: content.socials,
                    attributes: {
                        href: content.socials,
                    },
                }),
            ],
        })
    }
    
    #create_education_section(content)
    {
        return new UiNode({
            tag: "pre",
            text_content: content.education.join("\n"),
        })
    }

    #create_experience_section(content)
    {
        return new UiNode({
            tag: "pre",
            text_content: content.experience.join("\n"),
        })
    }

    #create_about_me_section(content)
    {
        return new UiNode({
            tag: "pre",
            text_content: content.about,
        })
    }

    #create_skills_section(content)
    {
        return new UiNode({
            tag: "pre",
            text_content: content.skills.join("\n"),
        })
    }

    #create_interests_section(content)
    {
        return new UiNode({
            tag: "pre",
            text_content: content.interests.join("\n"),
        })
    }

    #create_additional_info_section(content)
    {
        return new UiNode({
            tag: "pre",
            text_content: content.info,
        })
    }

    #create_clause_section(content)
    {
        return new UiNode({
            tag: "pre",
            text_content: content.company_name,
        })
    }

    generate(values)
    {
        return new UiNode({
            tag: "div",
            attributes: {
                class: "cv"
            },
            child_nodes: [
                this.#create_image_section(values["1"]),
                this.#create_name_and_surname_section(values["2"]),
                this.#create_contact_section(values["3"]),
                this.#create_education_section(values["4"]),
                this.#create_experience_section(values["5"]),
                this.#create_about_me_section(values["6"]),
                this.#create_skills_section(values["7"]),
                this.#create_interests_section(values["8"]),
                this.#create_additional_info_section(values["9"]),
                this.#create_clause_section(values["10"]),                
            ],
        })
    }
}

export default CvGenerator