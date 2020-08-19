const managment = (Teacher, Students, Guardains) => {
    const students = async (req, res) => {
        
        res.json('Welcome to the management Dashboard')
    }

    return {
        students
    }
}

module.exports = managment