const paths = {
    subpages: {
        dir: "subpages/",
        paths: {
            home: "home",
            form: "form",
            generator: "generator",
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
    subpage_paths: {
        home: paths.get("subpages", "home"),
        form: paths.get("subpages", "form"),
        ganerator: paths.get("subpages", "generator"),
    },

    main_ui: {
        section_class_names: {
            header: "main-header",
            baner: "main-baner",
            nav_list: "main-nav-list",
            footer: "main-footer",
        },
        focusable_class_name: "focusable",
        content: {
            title: "Generator",
            icon_path: paths.get("images", "icon"),
            baner_path: paths.get("images", "baner"),
            nav_links: {
                "Home": paths.get("subpages", "home"),
            },
            footer: "Author: Marek Kandulski",
        },
    },

    router_ui: {
        content: {
            text: "Loading…",
        },
    },

    window: {
        router: {
            ui: {
                content_class_name: "loading-text",
                content: {
                    loading_text: "Loading…"
                },
            },
        },
        home: {
            custom_profession_code: "0",
            profession_codes: [
                "1",
                "2",
                "3",
            ],
            ui: {
                section_class_names: {
                    title: "window-title",
                    list: "window-list",
                    footer: {
                        label: "window-footer-label",
                        link: "window-footer-link",
                    }
                },
                content: {
                    title: "Choose your profession",
                    button: {
                        text: "CREATE",
                        title_prefix: "Create CV for ",
                    },
                    footer: {
                        label: "Can't find your profession?",
                        link: "create CV without template",
                    },
                },
            },
        },

        form: {
            subwindow_codes: [
                // "1",
                "2",
                "3",
                // "4",
                // "5",
                // "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
            ],
            default_values: {
                "1": {
                    image: ""
                },
                "2": {
                    name: "",
                    surname: "",
                },
                "3": {
                    email: "",
                    phone: "",
                },
                "4": {
                    experience: [],
                },
                "5": {
                    education: [],
                },
                "6": {
                    languages: [],
                },
                "7": {
                    about: "",
                },
                "8": {
                    skill_codes: [],
                },
                "9": {
                    interest_codes: [],
                },
                "10": {
                    info: "",
                },
                "11": {
                    company_name: "",
                },
                "12": {
                    theme_code: "",
                },
                "13": {
                    layout_code: "",
                },
                "14": {
                    message: "",
                }
            },
            ui: {
                section_class_names: {
                    title: "window-title",
                    reset_button: "reset-button",
                    subwindow_display: "window-content",
                    buttons: {
                        previous: "previous-button",
                        next: "next-button",
                    },
                    progress_bar: "progress-bar",
                    progress_bar_state: "progress-bar-state",
                },
                content: {
                    step_number: {
                        prefix: "Step ",
                        suffix: " | ",
                    },
                    buttons: {
                        previous: {
                            text: "PREVIOUS STEP",
                            title: "Go to the previous step",
                        },
                        next: {
                            text: "NEXT STEP",
                            title: "Go to the next step",
                        },
                        reset: {
                            title: "Reset",
                            svg: {
                                view_box: "0 0 24 24",
                                path: "M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"
                            }
                        },
                        submit: {
                            text: "GENERATE",
                            title: "Generate your CV",
                        }
                    },
                    progress_bar_state: {
                        separator: " / ",
                        completed: "Completed!",
                    },
                },
            },
            subwindow: {
                content_class_name: "window-list",
                code_to_content: {
                    "2": {
                        name: {
                            label: "Name:",
                            max_length: 32,
                        },
                        surname: {
                            label: "Surname:",
                            max_length: 32,
                        },
                    },
                    "3": {
                        email: {
                            label: "Email:",
                            max_length: 32,
                        },
                        phone: {
                            label: "Phone number:",
                            max_length: 32,
                        },
                    },
                    "7": {
                        about: {
                            placeholder: "Write something about you… (optional)",
                            max_length: 256,
                        },
                    },
                    "8": {
                        skill_codes: {
                            svg: {
                                view_box: "0 0 24 24",
                                path: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                            },
                        },
                    },
                    "9": {
                        interest_codes: {
                            svg: {
                                view_box: "0 0 24 24",
                                path: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                            },
                        },
                    },
                    "10": {
                        info: {
                            placeholder: "Write some extra info here… (optional)",
                            max_length: 256,
                        },
                    },
                    "11": {
                        company_name: {
                            label: "Company Name:",
                            max_length: 32,
                        },
                    },
                    "12": {
                        theme_code: {
                            svg: {
                                view_box: "0 0 24 24",
                                path: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                            },
                        },
                    },
                    "13": {
                        layout_code: {
                            svg: {
                                view_box: "0 0 24 24",
                                path: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                            },
                        },
                    },
                    "14": {
                        message: "Yay!\nClick the GENERATE button to finish.",
                    },
                },
            },
        },
        generator: {
            ui: {
                section_class_names: {
                    title: "window-title",
                    buttons: {
                        download: "download-button",
                        edit: "edit-button",
                        create: "create-button",
                    },
                    progress_bar: "progress-bar",
                    progress_bar_state: "progress-bar-state",
                },
                content: {
                    title: "Download your CV",
                    buttons: {
                        download: {
                            text: "DOWNLOAD",
                            title: "Download your CV",
                        },
                        edit: {
                            text: "EDIT",
                            title: "Back to edit",
                        },
                        create: {
                            text: "CREATE NEW",
                            title: "Create another CV",
                        },
                    },
                    progress_bar_state: {
                        prefix: "Generating your CV - ",
                        suffix: "% done…",
                        completed: "Completed!",
                    },
                },
            }
        },
    },

    subwindow_code_to_name: {
        "1": "Image",
        "2": "Name & Surname",
        "3": "Contact",
        "4": "Experience",
        "5": "Education",
        "6": "Languages",
        "7": "About you",
        "8": "Skills",
        "9": "Interests",
        "10": "Additional Info",
        "11": "Company Name",
        "12": "Theme",
        "13": "Layout",
        "14": "Generate",
    },

    theme_code_to_name: {
        "1": "theme 1",
        "2": "theme 2",
        "3": "theme 3",
    },

    layout_code_to_name: {
        "1": "layout 1",
        "2": "layout 2",
        "3": "layout 3",
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
        form_values: "form_values"
    },
}

export default config