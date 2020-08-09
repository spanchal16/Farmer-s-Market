

module.exports.routes = {

  '/': { view: 'pages/homepage' },
  "GET /": "AuthenticationController.backHome",


  '/registerUser': {view: 'pages/registerUser'},


  "POST /twofactor": "AuthenticationController.twofactorQuestion",
  "GET /twofactor": "AuthenticationController.twofactorQuestion",
  "POST /authenticateAnswer": "AuthenticationController.authenticateAnswer",

  "GET /userHome": "AuthenticationController.goHome",

  "GET /searchProduct": "OrderingController.goSearch",
  "POST /searchProduct": "OrderingController.searchProduct",

};
