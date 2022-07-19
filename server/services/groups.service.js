const db = require('../services/db')

const getGroups = async () => {
    try{
        const rows = db.query('SELECT * FROM groups')
        return !rows ? [] : rows
    }
    catch (err){
        console.error(err)
    }
}

const createGroup = async group => {
    try {
        console.log('creating group', group)


        const {Name} = group
        const result = await db.query(
            'INSERT INTO groups (Name) VALUES (?)',
            [Name]
        )

        return {
            message: result.affectedRows ? 'group Created' : 'group creation failed'
        }
    }
    catch (err){
        console.error(err)
    }
}


module.exports = {
    getGroups,
    createGroup
} 