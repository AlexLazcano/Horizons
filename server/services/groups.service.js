const db = require('../services/db')

const getGroups = async () => {
    try{
        const rows = db.query('SELECT * FROM horizons.groups')
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
            'INSERT INTO horizons.groups (Name) VALUES (?)',
            [Name]
        )

        return {
            message: result.affectedRows ? 'Group Created' : 'Group creation failed'
        }
    }
    catch (err){
        console.error(err)
    }
}

const deleteGroup = async id => {
    try {
      const result = await db.query('DELETE FROM horizons.groups WHERE GID = ?', [id])
      return {
        message: result.affectedRows ? 'Group deleted' : 'Group not deleted'
      }
    } catch (error) {
      console.log(error)
    }
  }
  const updateGroup = async (id, group) => {
    try {
      const { Name } = group
      const result = await db.query(
        'UPDATE horizons.groups SET Name = ? WHERE GID = ?',
        [Name, id]
      )
      return {
        message: result.affectedRows ? 'Group updated' : 'Group not updated',
        status: result.affectedRows ? 200 : 400
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  const getGIDs = async () => {
    try {
      const rows = db.query('SELECT GID FROM horizons.groups')
      return !rows ? [] : rows
    } catch (error) {
      console.log(error)
    }
  }

module.exports = {
    getGroups,
    createGroup,
    deleteGroup,
    updateGroup,
    getGIDs
} 