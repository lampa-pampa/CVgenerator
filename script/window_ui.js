import Ui from "./ui.js"

class WindowUi {
    constructor(section_class_names)
    {
        this._section_class_names = section_class_names
    }
    
    draw_header(child)
    {
        Ui.draw_nodes_in(child, this._section_class_names.header)
    }

    draw_content(child)
    {
        Ui.draw_nodes_in(child, this._section_class_names.content)
    }

    draw_footer(child)
    {
        Ui.draw_nodes_in(child, this._section_class_names.footer)
    }
}

export default WindowUi