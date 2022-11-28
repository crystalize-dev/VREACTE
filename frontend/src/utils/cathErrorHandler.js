export const catchErrorsHandler = (err, setError) => {
    if (err.response) {
        setError(err.response.data.message)

        return
    }

    setError(err.message)
}