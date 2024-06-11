
// const { validationResult, body } = require("express-validator");


// for home index 
exports.home = async (req, res, next) => {

  res.render('pages/index', {
  });
} // end of home index

//for about us
exports.aboutUs = async (req, res, next) => {

  res.render('pages/about-us', {
  });
} // end of  about us

//for contact us
exports.contactUs = async (req, res, next) => {

  res.render('pages/contact-us', {
  });
} // end of  contact us

// careers page
exports.careers = async (req, res, next) => {
  res.render('pages/careers', {
  });
}

//privacy policy page
exports.privacyPolicy = async (req, res, next) => {
  res.render('pages/privacy-policy', {
  });
}

