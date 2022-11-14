export const handleErrors = (password, email, setError) => {
    if (password === "" || email === ""){
        setError("Please fill in the fields!")
        return true
    }

    if (password.length < 3) {
        setError("Password must be more than 3 symbols")
        return true
    }

    if (password.length > 16) {
        setError("Password must be less than 16 symbols")
        return true
    }

    return false
}