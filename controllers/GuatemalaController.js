
const GuatemalaSchema = require('../models/GuatemalaModel');


  const getProyectos = (req, res) => {
    GuatemalaSchema.find().then((data) => {
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

    const fecha = new Date();
    const {codigo, nombreProyecto, monto} = req.body;

    const newProyecto = new GuatemalaSchema({codigo, nombreProyecto, monto, fecha});

    newProyecto.save().then((data) => {
      res.status(201).json({
        "Created" : "Julio Vladimir Aviles Platero  25-0842-2017",
        ok: true,
        data
      });
    }
    ).catch((err) => {
      res.status(400).json({
        "Created" : "Julio Vladimir Aviles Platero  25-0842-2017",
        ok: false,
        err
      });
    }
    );
  }



  module.exports = {
    getProyectos,
    postProyeto
}