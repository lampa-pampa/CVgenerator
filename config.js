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
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
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
                    about: "",
                },
                "7": {
                    skills: [],
                },
                "8": {
                    interests: [],
                },
                "9": {
                    info: "",
                },
                "10": {
                    company_name: "",
                },
                "11": {
                    theme_code: "",
                },
                "12": {
                    layout_code: "",
                },
                "13": {
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
                            text_field: {
                                max_length: 32,
                            },
                        },
                        surname: {
                            label: "Surname:",
                            text_field: {
                                max_length: 32,
                            },
                        },
                    },
                    "3": {
                        email: {
                            label: "Email:",
                            text_field: {
                                max_length: 32,
                            },
                        },
                        phone: {
                            label: "Phone number:",
                            text_field: {
                                max_length: 32,
                            },
                        },
                    },
                    "6": {
                        about: {
                            placeholder: "Write something about you… (optional)",
                            max_length: 256,
                        },
                    },
                    "7": {
                        skills: {
                            checkbox: {
                                svg: {
                                    view_box: "0 0 24 24",
                                    path: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                                },
                            },
                            text_field: {
                                max_length: 32,
                            },
                            buttons: {
                                add: {
                                    title: "add",
                                    svg: {
                                        view_box: "0 0 24 24",
                                        path: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                                    },
                                },
                                remove: {
                                    title: "remove",
                                    svg: {
                                        view_box: "0 0 24 24",
                                        path: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                                    },
                                },
                            },
                        },
                    },
                    "8": {
                        interests: {
                            checkbox: {
                                svg: {
                                    view_box: "0 0 24 24",
                                    path: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                                },
                            },
                            text_field: {
                                max_length: 32,
                            },
                            buttons: {
                                add: {
                                    title: "add",
                                    svg: {
                                        view_box: "0 0 24 24",
                                        path: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                                    },
                                },
                                remove: {
                                    title: "remove",
                                    svg: {
                                        view_box: "0 0 24 24",
                                        path: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                                    },
                                },
                            },
                        },
                    },
                    "9": {
                        info: {
                            placeholder: "Write some extra info here… (optional)",
                            max_length: 256,
                        },
                    },
                    "10": {
                        company_name: {
                            label: "Company Name:",
                            text_field: {
                                max_length: 32,
                            },
                        },
                    },
                    "11": {
                        theme_code: {
                            svg: {
                                view_box: "0 0 24 24",
                                path: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                            },
                        },
                    },
                    "12": {
                        layout_code: {
                            svg: {
                                view_box: "0 0 24 24",
                                path: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                            },
                        },
                    },
                    "13": {
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
        "6": "About you",
        "7": "Skills",
        "8": "Interests",
        "9": "Additional Info",
        "10": "Company Name",
        "11": "Theme",
        "12": "Layout",
        "13": "Generate",
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
        "4": "skill 4",
    },

    interest_code_to_name: {
        "1": "interest 1",
        "2": "interest 2",
        "3": "interest 3",
        "4": "interest 4",
    },

    profession_code_to_name: {
        "0": "custom",
        "1": "Profession 1",
        "2": "Profession 2",
        "3": "Profession 3",
    },
    
    profession_code_to_skill_codes: {
        "0": [1],
        "1": [1, 2, 3, 4],
        "2": [2, 3, 4],
        "3": [3, 4],
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