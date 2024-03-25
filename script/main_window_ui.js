import Ui from "./ui.js"

class MainWindowUi
{
    constructor(section_class_names, focusable_class_name)
    {
        this._section_class_names = section_class_names
        this._focusable_class_name = focusable_class_name
    }
    
    draw_header(child)
    {
        Ui.draw_nodes_in(child, this._section_class_names.header)
    }

    draw_footer(child)
    {
        Ui.draw_nodes_in(child, this._section_class_names.footer)
    }

    enable_all_focusable_nodes()
    {
        for(const node of document.getElementsByClassName(
            this._focusable_class_name
        )){
            node.addEventListener("keydown", (e) => {
                if(e.key === "Enter") {
                    e.target.click()
                    e.preventDefault()
                }
            })
        }
    }
}

export default MainWindowUi