export const registerErrorHandler = (passwordRepeat, password, email, fullName, setError) => {
    if (password === "" || passwordRepeat === "" || email === "" || fullName === "") {
        setError("Please fill in the fields!")
        return true
    }

    if (password.length < 3 || passwordRepeat.length < 3) {
        setError("Password must be 4 or more symbols")
        return true
    }

    if (password !== passwordRepeat) {
        setError("Passwords are not the same!")
        return true
    }

    if (fullName.length < 2) {
        setError("Name must be 3 or more symbols")
        return true
    }

    return false
}