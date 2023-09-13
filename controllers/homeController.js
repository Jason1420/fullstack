import db from '../models/index'
import CRUDService from '../services/CRUDService';
const getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error);
    }
}

const getAboutPage = (req, res) => {
    return res.render('test/aboutPage.ejs')
}

const getCRUD = (req, res) => {
    return res.render('crud.ejs')
}
const postCRUD = async (req, res) => {
    const message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('post crud from server')
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD
}