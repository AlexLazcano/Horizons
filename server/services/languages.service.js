const db = require('./db')

const getLanguages = async () => {
    try{
        const rows = db.query('SELECT * FROM languages')
        return !rows ? [] : rows
    }
    catch (err){
        console.error(err)
    }
}

const createLanguage = async language => {
    try {
        const {LanguageCode, Name} = language
        const res = await db.query(
            'INSERT INTO languages (LanguageCode, Name) VALUES (?, ?)',
            [LanguageCode, Name]
        )

        return {
            message: res.affectedRows ? 'Language Created' : 'Language Creation Failed'
        }
    }
    catch (err){
        console.error(err)
    }
}

module.exports = {
    getLanguages,
    createLanguage
}