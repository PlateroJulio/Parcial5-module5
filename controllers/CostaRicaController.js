const CostaRicaSchema = require('../models/CostaRicaModel');

  const getProyectos = (req, res) => {
    CostaRicaSchema.find().then((data) => {
      res.status(200).json({
        "Created" : "Julio Vladimir Aviles Platero  25-0842-2017",
        ok: true,
        data
      });
    }).catch((err) => {
      res.status(400).json({
        "Created" : "Julio Vladimir Aviles Platero  25-0842-2017",
        ok: false,
        err
      });
    });   
  }

  const postProyeto = (req, res) => {

    const FechaCierre = new Date();
    const {codigo, nombreProyecto, paisEjecuta,  } = req.body;

    const newProyecto = new CostaRicaSchema({codigo, nombreProyecto, paisEjecuta, FechaCierre});

    newProyecto.save().then((data) => {
      res.status(201).json({
        "Created" : "Julio Vladimir Aviles Platero  25-0842-2017",
        ok: true,
        data
      });
    }).catch((err) => {
      res.status(400).json({
        "Created" : "Julio Vladimir Aviles Platero  25-0842-2017",
        ok: false,
        err
      });
    });
  }

  module.exports = {
    getProyectos,
    postProyeto
}