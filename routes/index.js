const router = require('express').Router();
const controller = require('../controllers/pages');

// console.log("SHRIRAM");

// const {
//     enquiryValidator,
//  } = require("../validators/demo-registration");

// index page
router.get('/', controller.home);

// for about us page
router.get('/about-us', controller.aboutUs);

// for contact us page
router.get('/contact-us', controller.contactUs);

// for careers page
router.get('/careers', controller.careers);


//privacy policy page
router.get('/privacy-policy', controller.privacyPolicy);



router.get('*', (req, res) => {
    console.log("nmnf")
    res.status(404).render('pages/under-construction', {
        url: ''
    });
});

// export routes
module.exports = router;
