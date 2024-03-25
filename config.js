const paths = {
    subpages: {
        dir: "subpages/",
        paths: {
            home: "home",
            form: "form",
        },
    },
    images: {
        dir: "../../img/",
        paths: {
            icon: "icon.png",
            baner: "baner.png",
        },
    },
    get(dir_name, path_name)
    {
        return this[dir_name].dir + this[dir_name].paths[path_name]
    }
}

const config = { 
    home_page_path: paths.get("subpages", "home"),
    form_page_path: paths.get("subpages", "form"),

    main_window_content: {
        head: {
            title: "Generator",
            icon_path: paths.get("images", "icon"),
        },
        header: {
            baner_path: paths.get("images", "baner"),
            nav_links: {
                "Home": paths.get("subpages", "home")
            }
        },
        footer: {
            text: "Author: Marek Kandulski"
        },
    },

    main_window_ui: {
        section_class_names: {
            header: "main-header",
            footer: "main-footer",
        },
        focusable_class_name: "focusable"
    },

    home_window_content: {
        header: {
            text: "Choose your profession",
        },
        content: {
            profession_codes: [
                "1",
                "2",
                "3",
            ],
            list_element: {
                button: {
                    text: "CREATE",
                    title_prefix: "Create CV for ",
                },
            }
        },
        footer: {
            text: "Can't find your profession?",
            link: {
                text: "create CV without template",
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

    form_windows_content: {
        name: {
            header: {
                title: "Name and Surname"
            },
            content: {

            },
        },
    },

    form_ui: {
        section_class_names: {
            header: "window-header",
            footer: "window-footer",
        }
    },

    form_window_codes: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
    ],

    code_to_form_window_name: {
        "1": "name",
        "2": "contact",
        "3": "experience",
        "4": "education",
        "5": "about me",
        "6": "skills",
        "7": "interests",
        "8": "additional info",
        "9": "download"
    },

    code_to_skill_name: {
        "1": "skill 1",
        "2": "skill 2",
        "3": "skill 3",
    },

    code_to_interest_name: {
        "1": "interest 1",
        "2": "interest 2",
        "3": "interest 3",
    },

    code_to_profession_name: {
        "0": "custom",
        "1": "Profession 1",
        "2": "Profession 2",
        "3": "Profession 3",
    },

    custom_profession_code: "0",
    
    profession_code_to_skill_codes: {
        "0": [1, 2, 3],
        "1": [1, 2, 3],
        "2": [1, 2, 3],
        "3": [1, 2, 3],
    },

    profession_code_to_interest_codes: {
        "0": [1, 2, 3],
        "1": [1, 2, 3],
        "2": [1, 2, 3],
        "3": [1, 2, 3],
    },

    storage_keys: {
        profession_code: "profession_code",
    },
}

export default config