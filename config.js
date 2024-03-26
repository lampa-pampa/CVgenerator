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
            icon: "icon.ico",
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

    window: {
        router: {
            content: {
                loading_text: "Loading…",
            },
        },

        main: {
            content: {
                head: {
                    title: "Generator",
                    icon_path: paths.get("images", "icon"),
                },
                header: {
                    baner_path: paths.get("images", "baner"),
                    nav_links: {
                        "Home": paths.get("subpages", "home"),
                    },
                },
                footer: {
                    text: "Author: Marek Kandulski",
                },
            },
            ui: {
                section_class_names: {
                    header: "main-header",
                    footer: "main-footer",
                },
                focusable_class_name: "focusable",
            },
        },

        home: {
            custom_profession_code: "0",
            profession_codes: [
                "1",
                "2",
                "3",
            ],
            content: {
                header: {
                    text: "Choose your profession",
                },
                content: {
                    button: {
                        text: "CREATE",
                        title_prefix: "Create CV for ",
                    },
                },
                footer: {
                    text: "Can't find your profession?",
                    link: {
                        text: "create CV without template",
                    },
                },
            },
            ui: {
                section_class_names: {
                    header: "window-header",
                    content: "window-content",
                    footer: "window-footer",
                },
            },
        },

        form: {
            ui: {
                section_class_names: {
                    header: "window-header",
                    footer: "window-footer",
                },
            },
            subwindow: {
                name: {
                    content: {
                        text: "example text",
                    },
                    ui: {
                        section_class_names: {
                            content: "window-content",
                        },
                    },
                },
            },
            subwindow_codes: [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
            ],
        },
    },

    subwindow_code_to_name: {
        "1": "Name & Surname",
        "2": "Contact",
        "3": "Experience",
        "4": "Education",
        "5": "About you",
        "6": "Skills",
        "7": "Interests",
        "8": "Additional Info",
        "9": "Clause",
        "10": "Theme",
        "11": "Generate & Download",
    },

    skill_code_to_name: {
        "1": "skill 1",
        "2": "skill 2",
        "3": "skill 3",
    },

    interest_code_to_name: {
        "1": "interest 1",
        "2": "interest 2",
        "3": "interest 3",
    },

    profession_code_to_name: {
        "0": "custom",
        "1": "Profession 1",
        "2": "Profession 2",
        "3": "Profession 3",
    },
    
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