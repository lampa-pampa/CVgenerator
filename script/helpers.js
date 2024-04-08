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

function has_key(object, key)
{
    return Object.keys(object).includes(key)
}

function remove_element(array, element)
{
    array.splice(array.indexOf(element), 1)
}

function is_enabled(node)
{
    return node.getAttribute("data-disabled") !== "true"
}

function get_parent(node, layer = 1)
{
    for(let i = 0; i < layer; ++i)
        node = node.parentNode
    return node
}

export {route, make_copy, match, has_key, remove_element, is_enabled, get_parent}