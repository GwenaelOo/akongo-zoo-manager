// récupération config

var config = require("../../config/config");

// Init dataBase


module.exports = {

    addNewSpecieToDatabase: function (specieData) {

        firebase.database().ref('zooTest/species/' + specieData.SpecieName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000))).set({
            SpecieId: specieData.SpecieName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000)), 
            SpecieName: specieData.SpecieName,
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

    editNewSpecieToDatabase: function (specieData) {

        console.log(specieData.SpecieId)

        firebase.database().ref('zooTest/species/' + specieData.SpecieId).update({
            SpecieId: specieData.SpecieId,
            SpecieName: specieData.SpecieName,
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
            text: "L'espèce " + specieData.SpecieName + " a été correctement éditée",
            type: "success",
            showCancelButton: false
        }, function () {
            // Redirect the user
            window.location.href = 'http://localhost:3000/SpeciesList';
        })


    },

    addNewAnimalToDatabase: function (animalData) {

        firebase.database().ref('zooTest/species/' + animalData.animalSpecieId + '/animals/' + animalData.animalName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000))).set({
            animalSpecieId: animalData.animalSpecieId,
            animalSpecie: animalData.animalSpecie,
            animalId: animalData.animalName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000)),
            animalName: animalData.animalName,
            animalDescription: animalData.animalDescription,
            animalLifeExpectancy: animalData.animalLifeExpectancy,
            animalPhotoProfil: animalData.animalPhotoProfil,

        },
        );

        firebase.database().ref('zooTest/animals/' + animalData.animalSpecieId + animalData.animalName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000))).set({
            animalSpecie: animalData.animalSpecie,
            animalId: animalData.animalName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000)),
            animalName: animalData.animalName,
            animalPhotoProfil: animalData.animalPhotoProfil,  
             },
        );

        swal({
            title: "Good job!",
            text: "L'animal " + animalData.animalName + " a été ajoutée à votre Zoo",
            type: "success",
            showCancelButton: false
        }, function () {
            // Redirect the user
            window.location.href = 'http://localhost:3000/Dashboard';
        })


    },

    editNewAnimalToDatabase: function (animalData) {

        console.log(animalData.animalId)

        firebase.database().ref('zooTest/species/' + animalData.animalSpecieId  + '/' +  animalData.animalId).update({
            animalSpecieId: animalData.animalSpecieId,
            animalSpecie: animalData.animalSpecie,
            animalId: animalData.animalId,
            animalName: animalData.animalName,
            animalDescription: animalData.animalDescription,
            animalLifeExpectancy: animalData.animalLifeExpectancy,
            animalPhotoProfil: animalData.animalPhotoProfil,
            
        },
        );

        firebase.database().ref('zooTest/animals/' + animalData.animalSpecieId + animalData.animalId).update({
            animalSpecie: animalData.animalSpecie,
            animalName: animalData.animalName,
            animalPhotoProfil: animalData.animalPhotoProfil,
        },
        );

        swal({
            title: "Good job!",
            text: "L'espèce " + animalData.animalName + " a été correctement éditée",
            type: "success",
            showCancelButton: false
        }, function () {
            // Redirect the user
            window.location.href = 'http://localhost:3000/SpeciesList';
        })


    },

    addNewServiceToDatabase: function (serviceData) {

        firebase.database().ref('zooTest/species/' + serviceData.serviceName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000))).set({
           
            serviceId: serviceData.serviceName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000)),
            serviceName: serviceData.serviceName,
            serviceDescription: serviceData.serviceDescription,
            servicePhotoProfil: serviceData.servicePhotoProfil,

        },
        );

        firebase.database().ref('zooTest/services/' + serviceData.serviceName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000))).set({
         
            serviceId: serviceData.serviceName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000)),
            serviceName: serviceData.serviceName,
            servicePhotoProfil: serviceData.servicePhotoProfil,
        },
        );

        swal({
            title: "Good job!",
            text: "L'service " + serviceData.serviceName + " a été ajoutée à votre Zoo",
            type: "success",
            showCancelButton: false
        }, function () {
            // Redirect the user
            window.location.href = 'http://localhost:3000/Dashboard';
        })


    },

    editNewServiceToDatabase: function (serviceData) {

        console.log(serviceData.serviceId)

        firebase.database().ref('zooTest/services/' + serviceData.serviceId).update({
           
            serviceId: serviceData.serviceId,
            serviceName: serviceData.serviceName,
            serviceDescription: serviceData.serviceDescription,
            servicePhotoProfil: serviceData.servicePhotoProfil,

        },
        );

        firebase.database().ref('zooTest/services/' + serviceData.serviceName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000))).set({
            serviceSpecie: serviceData.serviceSpecie,
            serviceName: serviceData.serviceName,
            servicePhotoProfil: serviceData.servicePhotoProfil,
        },
        );

        swal({
            title: "Good job!",
            text: "L'espèce " + serviceData.serviceName + " a été correctement éditée",
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
