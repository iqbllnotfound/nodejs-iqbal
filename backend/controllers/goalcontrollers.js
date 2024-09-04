const getGoals = (req,res) => {
    res.status (200). json ({
        massage: "Get Goals"
    })
}
const setGoals = (req,res) => {
    console.log(req)
    res.status (200). json ({
        massage: "Set Goals"
    })
}
const updateGoals = (req,res) => {
    res.status (200). json ({
        massage: `Update Goal ${req.params.id}`
    })
}
const deleteGoals = (req,res) => {
    res.status (200). json ({
        massage: `Delete Goal ${req.params.id}`
    })
}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}