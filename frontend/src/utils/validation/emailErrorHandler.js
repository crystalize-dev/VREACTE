export const emailErrorHandler = (email, setError) => {
    if (email === "") {
        setError("Fill in the filed!")
        return true
    }

    return false
}