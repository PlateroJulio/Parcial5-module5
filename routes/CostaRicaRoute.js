//express route file
const {Router} = require('express');
const router = Router();
const {getProyectos, postProyeto} = require('../controllers/CostaRicaController');


router.get("/", getProyectos);
router.post("/", postProyeto);




module.exports = router;