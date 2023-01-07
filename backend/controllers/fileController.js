export const fileController = (req, res) => {
    try {
        if (req.file) {
            res.json(req.file)
        }
    } catch (err) {
        res.status(500).json({
            message: "upload image error!"
        })
    }
}