class SubwindowValuesValidators
{
    static optional()
    {
        return true
    }

    static at_least_one(values)
    {
        for(const value of values)
        {
            if(value)
                return true
        }
        return false
    }

    static all(values)
    {
        for(const value of values)
        {
            if(!value)
                return false
        }
        return true
    }
}

export default SubwindowValuesValidators