const subpages_dir = "subpages"
const subpages_paths = {
    home: "home",
    form: "form"
}

function create_subpage_path(subpage)
{
    return `/${subpages_dir}/${subpages_paths[subpage]}/`
}

const config = { 
    router: {
        home_page_path: create_subpage_path("home"),
    },
    main_window: {
        ui: {
            section_class_names: {
                header: "main-header",
                footer: "main-footer",
            },
            focusable_class_name: "focusable"
        },
        content: {
            header: {
                baner_path: "../../img/baner.png",
                nav: [
                    {
                        text: "Home",
                        href: create_subpage_path("home")
                    }
                ]
            },
            footer: {
                text: "Author: Marek Kandulski"
            },
        },
    },
    window_ui: {
        section_class_names: {
            header: "window-header",
            content: "window-content",
            footer: "window-footer",
        },
    },
    window_contents: {
        home: {
            header: {
                text: "Choose your profession",
            },
            content: {
                list_element: {
                    button: {
                        text: "CREATE",
                        title_prefix: "Create CV for ",
                        form_path: create_subpage_path("form"),
                    },
                }
            },
            footer: {
                text: "Can't find your profession?",
                link: {
                    text: "create CV without template",
                    profession: "custom",
                    form_path: create_subpage_path("form"),
                },
            },
        },
    },
    skills: {
        1: "skill 1",
        2: "skill 2",
        3: "skill 3",
    },
    interests: {
        1: "interest 1",
        2: "interest 2",
        3: "interest 3",
    },
    professions: {
        "Profession 1": {
            possible_skills: [
                1,
                2
            ],
            possible_interests: [
                1,
                2
            ],
        },
        "Profession 2": {
            possible_skills: [
                1,
                2
            ],
            possible_interests: [
                1,
                2
            ],
        },
        "Profession 3": {
            possible_skills: [
                1,
                2
            ],
            possible_interests: [
                1,
                2
            ],
        },
        "Profession 4": {
            possible_skills: [
                1,
                2
            ],
            possible_interests: [
                1,
                2
            ],
        },
        "Profession 5": {
            possible_skills: [
                1,
                2
            ],
            possible_interests: [
                1,
                2
            ],
        },
        "Profession 6": {
            possible_skills: [
                1,
                2
            ],
            possible_interests: [
                1,
                2
            ],
        },
        "Profession 7": {
            possible_skills: [
                1,
                2
            ],
            possible_interests: [
                1,
                2
            ],
        },
        "Profession 8": {
            possible_skills: [
                1,
                2
            ],
            possible_interests: [
                1,
                2
            ],
        },
    },

    
}

export default config