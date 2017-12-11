var config = require("../../config/config");


module.exports = {

//
// Ces fonction prend un objet Specie comprenant les données d'une espèce et l'ajoute en base
//

    addNewSpecieToDatabase: function (specieData) {

        firebase.database().ref('zooTest/species/' + specieData.SpecieName).set({
                specieData
            },
        );

        //swal({
        //    title: "Good job!",
        //    text: "L'espèce " + specieData.SpecieName + " a été ajoutée à votre Zoo",
        //    type: "success",
        //    showCancelButton: false
        //}, function () {
            // Redirect the user
        //   window.location.href = 'http://localhost:3000/SpeciesList';
        //}) 


    },

//
// Ces fonction prend un objet Specie comprenant les données d'une espèce et l'ajoute en base
//

    readSpecieFromDatabase: function (specieName) {

        var ref = firebase.database().ref('zooTest/species/');

        ref.on("value", function (snapshot) {
            console.log(snapshot.val());
        }, function (error) {
            console.log("Error: " + error.code);
        });

    }
};
