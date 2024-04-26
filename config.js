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
    cv: {
        theme_code_to_colors: {
            "1": [

            ],
            "2": [

            ],
        },
        profile_image: {
            width: 150,
            height: 200,
            unit: "px",
        },
        content: {
            contact: {
                labels: {
                    email: "Email: ",
                    phone: "Phone: ",
                    socials: "Socials: ",
                }
            },
            date_list: {
                separators: {
                    date: " - ",
                    text: "\n",
                },
            },
            subsection_titles: {
                education: "Education",
                experience: "Experience",
                about_me: "About me",
                skills: "Skills",
                interests: "Interests",
                additional_info: "Additional info",
            },
            clause: {
                prefix: "I hereby give consent for my personal data to be processed by ",
                suffix: " for the purpose of conducting recruitment for the position for which I am applying.",
            },
        },
    },
    subpage_paths: {
        home: paths.get("subpages", "home"),
        form: paths.get("subpages", "form"),
        ganerator: paths.get("subpages", "generator"),
    },

    main_ui: {
        section_class_names: {
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

    window: {
        router: {
            ui: {
                content_class_name: "window-footer-label",
                content: {
                    loading_text: "Loading…"
                },
            },
        },
        home: {
            profession_codes: [
                "1",
                "2",
                "3",
                "4",
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
                    job_position: "",
                },
                "3": {
                    email: "",
                    phone: "",
                    socials: "",
                },
                "4": {
                    education: [],
                },
                "5": {
                    experience: [],
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
                    subwindow_list: "window-list",
                    buttons: {
                        previous: "previous-button",
                        next: "next-button",
                    },
                    progress_bar: "window-progress-bar",
                    progress_bar_state: "window-progress-bar-state",
                },
                content: {
                    step_number: {
                        prefix: "Step ",
                        suffix: " | ",
                    },
                    animations: {
                        previous_step: {
                            duration: 300,
                            name: "previous-step",
                        },
                        next_step: {
                            duration: 300,
                            name: "next-step",
                        },
                    },
                    buttons: {
                        previous: {
                            text: "PREVIOUS STEP",
                        },
                        next: {
                            text: "NEXT STEP",
                        },
                        submit: {
                            text: "GENERATE",
                        },
                        reset: {
                            title: "Reset",
                            svg: {
                                view_box: "0 0 24 24",
                                path: "M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"
                            }
                        },
                    },
                    progress_bar: {
                        width_transition_duration: 300,
                        state: {
                            separator: " / ",
                        },
                    }
                },
            },
            subwindow: {
                content_class_name: "window-list",
                code_to_content: {
                    "1": {
                        image: {
                            label: "Upload your profile image…\npreferred size is ",
                            title: "Click to upload",
                            extensions: ".gif, .jpg, .jpeg, .png",
                            size: {
                                separator: " × ",
                                width: 150,
                                height: 200,
                                unit: "px",
                            },
                            svg: {
                                view_box: "0 0 24 24",
                                path: "M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z"
                            },
                        },
                    },
                    "2": {
                        name: {
                            label: "Name:",
                            text_field: {
                                max_length: 32,
                                format: "[\\p{L}]+( [\\p{L}]+)*",
                                error_message: "Use only letters and spaces",
                            },
                        },
                        surname: {
                            label: "Surname:",
                            text_field: {
                                max_length: 32,
                                format: "[\\p{L}]+( [\\p{L}]+)*",
                                error_message: "Use only letters and spaces",
                            },
                        },
                        job_position: {
                            label: "Job position:",
                            text_field: {
                                max_length: 32,
                                format: "[^\\s]+( [^\\s]+)*",
                                error_message: "Use any chars and spaces",
                            },
                        },
                    },
                    "3": {
                        email: {
                            label: "Email:",
                            text_field: {
                                max_length: 32,
                                format: "[\\w\\-\\.]+@[\\w\\-\\.]+\\.[\\w\\-\\.]+",
                                error_message: "Insert email",
                            },
                        },
                        phone: {
                            label: "Phone number:",
                            text_field: {
                                max_length: 32,
                                format: "(\\d{9}|\\+?\\d{10,}|(\\+\\d+ )?(\\d{3} ){2}\\d{3}|(\\+\\d+-)?(\\d{3}-){2}\\d{3})",
                                error_message: "Insert phone number",
                            },
                        },
                        socials: {
                            label: "Socials (link):",
                            text_field: {
                                max_length: 32,
                                format: "https?://[^\\s\\.]+\\.[^\\s]+",
                                error_message: "Insert link (starting with http:// or https://)",
                            },
                        },
                    },
                    "4": {
                        education: {
                            list_element: {
                                duration_separator: " - ",
                                place_prefix: "University: ",
                                button: {
                                    title: "remove",
                                    svg: {
                                        view_box: "0 0 24 24",
                                        path: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                                    },
                                },
                            },
                            add_section: {
                                text_fields: {
                                    from: {
                                        label: "Since:",
                                        text_field: {
                                            max_length: 32,
                                            format: "[12]\\d{3}",
                                            error_message: "Insert year",
                                        },
                                    },
                                    to: {
                                        label: "To:",
                                        text_field: {
                                            max_length: 32,
                                            format: "[12]\\d{3}",
                                            error_message: "Insert year",
                                        },
                                    },
                                    place: {
                                        label: "University name:",
                                        text_field: {
                                            max_length: 32,
                                            format: "[\\p{L}\\d]+( [\\p{L}\\d]+)*",
                                            error_message: "Use only letters, digits and spaces",
                                        },
                                    },
                                },
                                button: {
                                    title: "add",
                                    svg: {
                                        view_box: "0 0 24 24",
                                        path: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                                    },
                                },
                            },
                            max_quantity: 5,
                        },
                    },
                    "5": {
                        experience: {
                            list_element: {
                                duration_separator: " - ",
                                place_prefix: "Company: ",
                                button: {
                                    title: "remove",
                                    svg: {
                                        view_box: "0 0 24 24",
                                        path: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                                    },
                                },
                            },
                            add_section: {
                                text_fields: {
                                    from: {
                                        label: "Since:",
                                        text_field: {
                                            max_length: 32,
                                            format: "[12]\\d{3}",
                                            error_message: "Insert year",
                                        },
                                    },
                                    to: {
                                        label: "To:",
                                        text_field: {
                                            max_length: 32,
                                            format: "[12]\\d{3}",
                                            error_message: "Insert year",
                                        },
                                    },
                                    place: {
                                        label: "Company name:",
                                        text_field: {
                                            max_length: 32,
                                            format: "[^\\s]+( [^\\s]+)*",
                                            error_message: "Use any chars and spaces",
                                        },
                                    },
                                },
                                button: {
                                    title: "add",
                                    svg: {
                                        view_box: "0 0 24 24",
                                        path: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                                    },
                                },
                            },
                            max_quantity: 5,
                        },
                    },
                    "6": {
                        about: {
                            placeholder: "Write something about you…",
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
                                format: "[^\\s]+( [^\\s]+)*",
                                error_message: "Use any chars and spaces",
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
                            max_quantity: 5,
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
                                format: "[^\\s]+( [^\\s]+)*",
                                error_message: "Use any chars and spaces",
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
                            max_quantity: 5,
                        },
                    },
                    "9": {
                        info: {
                            placeholder: "Write some extra info here…",
                            max_length: 256,
                        },
                    },
                    "10": {
                        company_name: {
                            label: "Company Name:",
                            text_field: {
                                max_length: 32,
                                format: "[^\\s]+( [^\\s]+)*",
                                error_message: "Use any chars and spaces",
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
                    cv_preview: "cv-preview",
                    progress_bar: "window-progress-bar",
                    progress_bar_state: "window-progress-bar-state",
                },
                content: {
                    title: "Download your CV",
                    buttons: {
                        download: {
                            text: "DOWNLOAD",
                        },
                        edit: {
                            text: "EDIT",
                        },
                        create: {
                            text: "CREATE NEW",
                        },
                    },
                    progress_bar_state: {
                        preparing: "Preparing download…",
                        completed: "Downloading started!",
                    },
                    download_animation: {
                        duration: 1000,
                        name: "loading",
                    },
                    html2pdf: {
                        script_src: "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",
                        file_name: "cv.pdf",
                        image_extension: "jpeg",
                        pixel_ratio: 4,
                    }
                },
            }
        },
    },

    subwindow_code_to_name: {
        "1": "Image",
        "2": "Name & Surname",
        "3": "Contact",
        "4": "Education",
        "5": "Experience",
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
        "1": "Light theme",
        "2": "Dark theme",
    },

    layout_code_to_name: {
        "1": "Rectangle boxes layout",
        "2": "List layout",
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

    custom_profession_code: "0",

    profession_code_to_name: {
        "0": "custom",
        "1": "C++ Programmer",
        "2": "Python Programmer",
        "3": "JS Programmer",
        "4": "Rust Programmer",
    },
    
    profession_code_to_skill_codes: {
        "0": ["1"],
        "1": ["1", "2", "3", "4"],
        "2": ["2", "3", "4"],
        "3": ["3", "4"],
    },

    profession_code_to_interest_codes: {
        "0": ["1", "2", "3"],
        "1": ["1", "2", "3"],
        "2": ["1", "2", "3"],
        "3": ["1", "2", "3"],
    },

    storage_keys: {
        profession_code: "profession_code",
        form_values: "form_values"
    },
}

export default config