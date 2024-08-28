const getGoals = (req,res) => {
    res.status (200). json ({
        massage: "Get Goals"
    })
}
const setGoals = (req,res) => {
    res.status (200). json ({
        massage: "Set Goals"
    })
}

module.exports = {
    getGoals,
    setGoals
}