function route(path_name)
{
    document.location.pathname = path_name
}

function make_copy(object)
{
    return JSON.parse(JSON.stringify(object))
}

export {route, make_copy}