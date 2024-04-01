function route(path_name)
{
    document.location.pathname = path_name
}

function make_copy(object)
{
    return JSON.parse(JSON.stringify(object))
}

function match(object, pattern)
{
    if(!object)
        return false
    for(const [key, value] of Object.entries(pattern))
    {
        if(typeof(value) === "object" && !match(object[key], value)
            || typeof(value) !== typeof(object[key])
        )
            return false
    }
    return true
}

export {route, make_copy, match}