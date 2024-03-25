import route from "../../../script/router.js"

class HomeWindow
{
    constructor(ui, content, professions)
    {
        this._ui = ui
        this._content = content
        this._professions = professions
        this._create_window()
        this._clear_form_data()
    }

    _create_window()
    {
        this._ui.create_header(this._content.header)
        this._ui.create_content(
            this._professions,
                this._content.content,
                this._handle_profession_button_click,
        )
        this._ui.create_footer(
            this._content.footer,
            this._handle_profession_button_click,
        )
    }

    _handle_profession_button_click(profession, path)
    {
        sessionStorage.setItem("profession", JSON.stringify(profession))
        route(path)
    }

    _clear_form_data()
    {
        sessionStorage.removeItem("profession")
    }
}

export default HomeWindow