class SessionStorageManager
{
    static read(key)
    {
        return JSON.parse(sessionStorage.getItem(key))
    }

    static save(key, value)
    {
        sessionStorage.setItem(key, JSON.stringify(value))
    }

    static remove(key)
    {
        sessionStorage.removeItem(key)
    }
}

export default SessionStorageManager