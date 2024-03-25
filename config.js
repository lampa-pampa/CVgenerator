const subpages = {
    dir: "subpages/",
    paths: {
        home: "home",
        form: "form",
    }
}
const images = {
    dir: "../../img/",
    paths: {
        icon: "icon.png",
        baner: "baner.png",
    }
}

function create_path(dir, path_name)
{
    return dir.dir + dir.paths[path_name]
}

const config = { 
    router: {
        home_page_path: create_path(subpages, "home"),
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
            head: {
                title: "Generator",
                icon_path: create_path(images, "icon"),
            },
            header: {
                baner_path: create_path(images, "baner"),
                nav: [{
                    text: "Home",
                    href: create_path(subpages, "home")
                }]
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

    home_window_content: {
        header: {
            text: "Choose your profession",
        },
        content: {
            list_element: {
                button: {
                    text: "CREATE",
                    title_prefix: "Create CV for ",
                    form_path: create_path(subpages, "form"),
                },
            }
        },
        footer: {
            text: "Can't find your profession?",
            link: {
                text: "create CV without template",
                profession: "custom",
                form_path: create_path(subpages, "form"),
            },
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

    form_window_names: [
        "name",
        "contact",
        "experience",
        "education",
        "about me",
        "skills",
        "interests",
        "additional info",
        "download",
    ],

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
            hints: {
                skills: [
                    1,
                    2
                ],
                interests: [
                    1,
                    2
                ],
            }
        },
        "Profession 2": {
            hints: {
                skills: [
                    1,
                    2
                ],
                interests: [
                    1,
                    2
                ],
            }
        },
        "Profession 3": {
            hints: {
                skills: [
                    1,
                    2
                ],
                interests: [
                    1,
                    2
                ],
            }
        },
    },

    
}

export default config