var config = require("../../config/config");


module.exports = {

    //
    // Ces fonction prend un objet Specie comprenant les données d'une espèce et l'ajoute en base
    //

    addNewSpecieToDatabase: function (specieData) {

        config.sayHello(specieData);

        swal("Good job!", "L'espèce " + specieData.Speciename + " a été ajoutée à votre Zoo", "success")


    }



};



