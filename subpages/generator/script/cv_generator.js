import { UiNode } from "../../../script/ui_node.js"

class CvGenerator
{
    generate(values)
    {
        return new UiNode({
            tag: "div",
            text_content: values["2"].name + " " + values["2"].surname,
            attributes: {
                style: "color: black;"
            }
        })
    }
}

export default CvGenerator