import {UiNode} from "../../../script/ui_node.js"

class CvGenerator
{
    #profile_image_size
    #content
    #theme_code_to_colors
    #layout_code_to_node_creators

    constructor(profile_image_size, theme_code_to_colors, content)
    {
        this.#profile_image_size = profile_image_size
        this.#theme_code_to_colors = theme_code_to_colors
        this.#content = content
        this.#layout_code_to_node_creators = {
            "1": {
                header: this.#create_header_section,
                content: this.#create_content_section,
                footer: this.#create_footer_section,
                text_list: this.#create_text_list_node,
                date_list: this.#create_date_list_node,
                text_area: this.#create_text_area_node,
            },
            "2": {
                header: this.#create_header_section,
                content: this.#create_content_section,
                footer: this.#create_footer_section,
                text_list: this.#create_text_list_node,
                date_list: this.#create_date_list_node,
                text_area: this.#create_text_area_node,
            },
        }
    }

    #create_header_section(image, title)
    {
        return new UiNode({
            tag: "section",
            attributes: {
                class: "cv-header",
            },
            child_nodes: [
                new UiNode({
                    tag: "div",
                    attributes: {
                        class: "cv-header-image-box",
                    },
                    child_nodes: [
                        image,
                    ],
                }),
                new UiNode({
                    tag: "div",
                    attributes: {
                        class: "cv-header-title-box",
                    },
                    child_nodes: [
                        title,
                    ],
                }),
            ],
        })
    }

    #create_content_section(
        contact,
        education,
        experience,
        about_me,
        skills,
        interests,
        additional_info,
    ){
        return new UiNode({
            tag: "section",
            attributes: {
                class: "cv-content"
            },
            child_nodes: [
                new UiNode({
                    tag: "div",
                    attributes: {
                        class: "cv-content-left"
                    },
                    child_nodes: [
                        contact,
                        skills,
                        interests,
                    ].filter(elem => elem),
                }),
                new UiNode({
                    tag: "div",
                    attributes: {
                        class: "cv-content-right"
                    },
                    child_nodes: [
                        education,
                        experience,
                        about_me,
                        additional_info,
                    ].filter(elem => elem),
                }),
            ],
        })
    }

    #create_text_list_node(title, elements)
    {
        if(elements.length == 0)
            return null
        const child_nodes = new Array()
        for(const element_content of elements)
            child_nodes.push(
                new UiNode({
                    tag: "li",
                    text_content: element_content,
                })
            )
        return new UiNode({
            tag: "section",
            attributes: {
                class: "cv-text-list"
            },
            child_nodes: [
                new UiNode({
                    tag: "h3",
                    text_content: title,
                }),
                new UiNode({
                    tag: "ul",
                    child_nodes: child_nodes,
                }),
            ],
        })
    }

    #create_date_list_node(title, separators, elements)
    {
        if(elements.length == 0)
            return null
        const child_nodes = new Array()
        for(const element_content of elements)
            child_nodes.push(
                new UiNode({
                    tag: "li",
                    child_nodes: [
                        new UiNode({
                            tag: "pre",
                            text_content: element_content[0]
                                + separators.date
                                + element_content[1]
                                + separators.text
                                + element_content[2],
                        }),
                    ],
                })
            )
        return new UiNode({
            tag: "section",
            attributes: {
                class: "cv-date-list"
            },
            child_nodes: [
                new UiNode({
                    tag: "h3",
                    text_content: title,
                }),
                new UiNode({
                    tag: "ul",
                    child_nodes: child_nodes,
                }),
            ],
        })
    }
    
    #create_text_area_node(title, text)
    {
        if(!text)
            return null
        return new UiNode({
            tag: "section",
            attributes: {
                class: "cv-text-area"
            },
            child_nodes: [
                new UiNode({
                    tag: "h3",
                    text_content: title,
                }),
                new UiNode({
                    tag: "pre",
                    text_content: text,
                }),
            ],
        })
    }

    #create_footer_section(clause)
    {
        return new UiNode({
            tag: "section",
            attributes: {
                class: "cv-footer",
            },
            child_nodes: [
                clause
            ],
        })
    }

    #create_image_node(src)
    {
        return new UiNode({
            tag: "img",
            attributes: {
                src: src,
                style: `
                    width: ${this.#profile_image_size.width + this.#profile_image_size.unit};
                    height: ${this.#profile_image_size.height + this.#profile_image_size.unit};
                `
            },
        })
    }

    #create_name_and_surname_node(name, surname, job_position)
    {
        return new UiNode({
            tag: "div",
            child_nodes: [
                new UiNode({
                    tag: "div",
                    text_content: `${name} ${surname}`,
                }),
                new UiNode({
                    tag: "div",
                    text_content: job_position,
                })
            ],
        })
    }

    #create_contact_node(content)
    {
        const child_nodes = new Array()
        if(content.email)
            child_nodes.push(
                new UiNode({
                    tag: "li",
                    text_content: this.#content.contact.labels.email,
                    child_nodes: [
                        new UiNode({
                            tag: "a",
                            text_content: content.email,
                            attributes: {
                                href: `mailto: ${content.email}`,
                            },
                        }),
                    ],
                })
            )
        if(content.phone)
            child_nodes.push(
                new UiNode({
                    tag: "li",
                    child_nodes: [
                        new UiNode({
                            tag: "pre",
                            text_content: this.#content.contact.labels.phone
                                + content.phone
                        })
                    ]
                })
            )
        if(content.socials)
            child_nodes.push(
                new UiNode({
                    tag: "li",
                    text_content: this.#content.contact.labels.socials,
                    child_nodes: [
                        new UiNode({
                            tag: "a",
                            text_content: content.socials,
                            attributes: {
                                href: content.socials,
                            },
                        }),
                    ],
                }),
            )
            
        return new UiNode({
            tag: "section",
            child_nodes: [
                new UiNode({
                    tag: "ul",
                    child_nodes: child_nodes,
                }),
            ],
        })
    }

    #create_clause_node(content)
    {
        return new UiNode({
            tag: "div",
            text_content: this.#content.clause.prefix
                + content.company_name
                + this.#content.clause.suffix,
        })
    }

    generate(values)
    {
        const node_creators = this.#layout_code_to_node_creators[
            values["12"].layout_code
        ]
        return new UiNode({
            tag: "div",
            attributes: {
                class: "cv"
            },
            child_nodes: [
                node_creators.header(
                    this.#create_image_node(values["1"].image),
                    this.#create_name_and_surname_node(
                        values["2"].name,
                        values["2"].surname,
                        values["2"].job_position,
                    ),
                ),
                node_creators.content(
                    this.#create_contact_node(values["3"]),
                    node_creators.date_list(
                        this.#content.subsection_titles.education,
                        this.#content.date_list.separators,
                        values["4"].education,
                    ),
                    node_creators.date_list(
                        this.#content.subsection_titles.experience,
                        this.#content.date_list.separators,
                        values["5"].experience,
                    ),
                    node_creators.text_area(
                        this.#content.subsection_titles.about_me,
                        values["6"].about_me,
                    ),
                    node_creators.text_list(
                        this.#content.subsection_titles.skills,
                        values["7"].skills,
                    ),
                    node_creators.text_list(
                        this.#content.subsection_titles.interests,
                        values["8"].interests,
                    ),
                    node_creators.text_area(
                        this.#content.subsection_titles.additional_info,
                        values["9"].additional_info,
                    ),
                ),
                node_creators.footer(
                    this.#create_clause_node(values["10"]),          
                ),
            ],
        })
    }
}

export default CvGenerator