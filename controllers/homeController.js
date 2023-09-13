import db from '../models/index'

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

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,

}