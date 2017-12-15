// récupération config

var config = require("../../config/config");

// Init dataBase


module.exports = {

    addNewSpecieToDatabase: function (specieData) {

<<<<<<< HEAD
        firebase.database().ref('zooTest/species/').push({
=======
        firebase.database().ref('zooTest/species/' + specieData.SpecieName.toUpperCase().replace(/ /g, "")).set({
            id: specieData.SpecieName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000)), 
>>>>>>> develop
            specieName: specieData.SpecieName,
            SpecieLatinName: specieData.SpecieLatinName,
            SpecieEnglishName: specieData.SpecieEnglishName,
            SpecieClass: specieData.SpecieClass,
            SpecieOrder: specieData.SpecieOrder,
            SpecieFamilly: specieData.SpecieFamilly,
            SpecieIUCNClassification: specieData.SpecieIUCNClassification,
            SpecieDescription: specieData.SpecieDescription,
            SpecieGestation: specieData.SpecieGestation,
            SpecieWeight: specieData.SpecieWeight,
            SpecieLifeExpectancy: specieData.SpecieLifeExpectancy,
            SpeciePhotoProfil: specieData.SpeciePhotoProfil,
            SpeciePhoto1: specieData.SpeciePhoto1,
            SpeciePhoto2: specieData.SpeciePhoto2,
            SpeciePhoto3: specieData.SpeciePhoto3,
            SpeciePhoto4: specieData.SpeciePhoto4,
            },
        );
        
        swal({
            title: "Good job!",
            text: "L'espèce " + specieData.SpecieName + " a été ajoutée à votre Zoo",
            type: "success",
            showCancelButton: false
        }, function () {
            // Redirect the user
           window.location.href = 'http://localhost:3000/SpeciesList';
        }) 


    },
    

//
// Ces fonction prend un objet Specie comprenant les données d'une espèce et l'ajoute en base
//
    testStateUpdate: function () {
        let data = 1;
         
        this.setState({
                speciesList: data.data
            });
    },

    
};
