// récupération config

var config = require("../../config/config");

// Init dataBase

function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};

// init zoo Id


        let userData = JSON.parse(localStorage.getItem('user'))
        console.log('initialisation de l api', userData.zooName)
        
    
        //let userData = {}
        //console('init de l api en attente')


   

module.exports = {

    addNewSpecieToDatabase: function (specieData) {

        firebase.database().ref( userData.zooName + '/species/' + specieData.SpecieName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000))).set({
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
            SpecieFood: specieData.SpecieFood,
            SpeciePhotoProfil: specieData.SpeciePhotoProfil,
            SpeciePhoto1: specieData.SpeciePhoto1,
            SpeciePhoto2: specieData.SpeciePhoto2,
            SpeciePhoto3: specieData.SpeciePhoto3,
            SpeciePhoto4: specieData.SpeciePhoto4,
            SpecieCreatedBy: userData.userId,
            SpecieCreationDate: Date.now()
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

        firebase.database().ref(userData.zooName + '/species/' + specieData.SpecieId).update({
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
            SpecieFood: specieData.SpecieFood,
            SpecieLifeExpectancy: specieData.SpecieLifeExpectancy,
            SpeciePhotoProfil: specieData.SpeciePhotoProfil,
            SpeciePhoto1: specieData.SpeciePhoto1,
            SpeciePhoto2: specieData.SpeciePhoto2,
            SpeciePhoto3: specieData.SpeciePhoto3,
            SpeciePhoto4: specieData.SpeciePhoto4,
            SpecieLastModificationBy: userData.userId,
            SpecieLastEditDate: Date.now()
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

        firebase.database().ref(userData.zooName + '/species/' + animalData.animalSpecieId + '/animals/' + animalData.animalName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000))).set({
            animalSpecieId: animalData.animalSpecieId,
            animalSpecie: animalData.animalSpecie,
            animalId: animalData.animalName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000)),
            animalName: animalData.animalName,
            animalDescription: animalData.animalDescription,
            animalLifeExpectancy: animalData.animalLifeExpectancy,
            animalPhotoProfil: animalData.animalPhotoProfil,
            animalCreatedBy: userData.userId,
            animalCreationDate: Date.now()

        },
        );

        firebase.database().ref(userData.zooName + '/animals/' + animalData.animalSpecieId + animalData.animalName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000))).set({
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

        firebase.database().ref(userData.zooName + '/species/' + animalData.animalSpecieId + '/' + animalData.animalId).update({
            animalSpecieId: animalData.animalSpecieId,
            animalSpecie: animalData.animalSpecie,
            animalId: animalData.animalId,
            animalName: animalData.animalName,
            animalDescription: animalData.animalDescription,
            animalLifeExpectancy: animalData.animalLifeExpectancy,
            animalPhotoProfil: animalData.animalPhotoProfil,
            animalLastModificationBy: userData.userId,
            animalLastEditDate: Date.now()

        },
        );

        firebase.database().ref(userData.zooName + '/animals/' + animalData.animalSpecieId + animalData.animalId).update({
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

        firebase.database().ref(userData.zooName + '/services/' + serviceData.serviceName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000))).set({

            serviceId: serviceData.serviceName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000)),
            serviceName: serviceData.serviceName,
            serviceDescription: serviceData.serviceDescription,
            servicePhotoProfil: serviceData.servicePhotoProfil,
            

        },
        );

        firebase.database().ref(userData.zooName + '/services/' + serviceData.serviceName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000))).set({

            serviceId: serviceData.serviceName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000)),
            serviceName: serviceData.serviceName,
            servicePhotoProfil: serviceData.servicePhotoProfil,
            
        },
        );

        swal({
            title: "Good job!",
            text: "Le service " + serviceData.serviceName + " a été ajoutée à votre Zoo",
            type: "success",
            showCancelButton: false
        }, function () {
            // Redirect the user
            window.location.href = 'http://localhost:3000/Dashboard';
        })


    },

    editNewServiceToDatabase: function (serviceData) {

        console.log(serviceData.serviceId)

        firebase.database().ref(userData.zooName + '/services/' + serviceData.serviceId).update({

            serviceId: serviceData.serviceId,
            serviceName: serviceData.serviceName,
            serviceDescription: serviceData.serviceDescription,
            servicePhotoProfil: serviceData.servicePhotoProfil,

        },
        );

        firebase.database().ref(userData.zooName + '/services/' + serviceData.serviceName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000))).set({
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


    addNewAnimationToDatabase: function (animationData) {

        firebase.database().ref(userData.zooName + '/animations/' + animationData.animationName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000))).set({

            animationId: animationData.animationName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000)),
            animationName: animationData.animationName,
            animationDescription: animationData.animationDescription,
            animationPhotoProfil: animationData.animationPhotoProfil,

        },
        );

        firebase.database().ref(userData.zooName + '/animations/' + animationData.animationName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000))).set({

            animationId: animationData.animationName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000)),
            animationName: animationData.animationName,
            animationPhotoProfil: animationData.animationPhotoProfil,
        },
        );

        swal({
            title: "Good job!",
            text: "Le animation " + animationData.animationName + " a été ajoutée à votre Zoo",
            type: "success",
            showCancelButton: false
        }, function () {
            // Redirect the user
            window.location.href = 'http://localhost:3000/Dashboard';
        })


    },

    editNewAnimationToDatabase: function (animationData) {

        console.log(animationData.animationId)

        firebase.database().ref(userData.zooName + '/animations/' + animationData.animationId).update({

            animationId: animationData.animationId,
            animationName: animationData.animationName,
            animationDescription: animationData.animationDescription,
            animationPhotoProfil: animationData.animationPhotoProfil,

        },
        );

        firebase.database().ref(userData.zooName + '/animations/' + animationData.animationName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000))).set({
            animationSpecie: animationData.animationSpecie,
            animationName: animationData.animationName,
            animationPhotoProfil: animationData.animationPhotoProfil,
        },
        );

        swal({
            title: "Good job!",
            text: "L'espèce " + animationData.animationName + " a été correctement éditée",
            type: "success",
            showCancelButton: false
        }, function () {
            // Redirect the user
            window.location.href = 'http://localhost:3000/SpeciesList';
        })


    },


    //
    // Gestion des listes Nouritures 
    //


    updateFoodDataBase: function (foodListSubmited) {

        let newList = []


        var query = firebase.database().ref(userData.zooName + '/Lists/FoodList').orderByKey();
        query.once("value")
            .then(function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var childData = childSnapshot.val();
                    newList.push(childData);

                });
            })

            .then(function () {
                // Promesse tenue

                foodListSubmited.forEach(FoodItem => {
                    console.log('Le mot à tester est', FoodItem)
                    console.log('La liste est', newList)
                    
                   
                    if (FoodItem.customOption === true) {
                        console.log('c est du custom')

                        newList.push(FoodItem.SpecieFood)
                    } else {
                        if (newList.indexOf(FoodItem) === -1) {
                            console.log(FoodItem + ' PAS présent dans la liste')

                            newList.push(FoodItem)

                        } else {
                            console.log(FoodItem + ' Présent dans la liste')
                        }
                    }

                })
            })

            .then(function () {
                // Promesse tenue
                console.log('apres traitement', newList)
                let FoodList = newList
                firebase.database().ref(userData.zooName + '/Lists/').set({
                    FoodList,
                })
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
