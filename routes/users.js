var express = require('express');
var router = express.Router();

/* GET FAKE users listing. */
router.get('/', function(req, res, next) {
  res.send([
    {
      "id": "5c2219437b64577e1ea31382",
      "name": "Cathy Lyons",
      "email": "cathylyons@terrasys.com"
    },
    { 
      "id": "5c22194395d3b881c6078909",
      "name": "Gilda Cochran",
      "email": "gildacochran@terrasys.com"
    },
    {
      "id": "5c22194338be8f7d7c281473",
      "name": "Albert Combs",
      "email": "albertcombs@terrasys.com"
    },
    {
      "id": "5c221943e9915f46817133d4",
      "name": "Jeanine Buckley",
      "email": "jeaninebuckley@terrasys.com"
    }
  ]);
});

module.exports = router;
