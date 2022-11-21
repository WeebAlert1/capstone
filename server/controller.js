require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    createShow: (req, res) => {
        const {id, name, imageURL} = req.body;
        houses.push({
            id,
            name,
            imageURL,
            id: globalId,
        });
        globalId++;
        res.status(200).send(houses);
    }
}