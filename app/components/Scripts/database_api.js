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
      
        

module.exports = {

    addNewSpecieToDatabase: function (specieData) {

    
        let collection = (userData.zooName + '-species');
        let document = specieData.SpecieName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000))
        let specieId = document
      
        if(specieData.SpeciePhotoProfil === ''){
            specieData.SpeciePhotoProfil = 'http://thedroideffect.com/wp-content/themes/thedroideffect/images/missing-image-640x360.png'
        }

        // ********************
        // Ajout dans firebase 
        // ********************

        firebase.firestore()
             .collection(collection)
             .doc(document)
             .set({
                 SpecieId: specieId,
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
                 SpecieCreationDate: Date() 
             })
             
             .then(function () {
                 swal({
                     title: "Good job!",
                     text: "L'espèce " + specieData.SpecieName + " a été ajoutée à votre Zoo",
                     type: "success",
                     showCancelButton: false
                 }, function () {
                     // Redirect the user
                     window.location.href = 'http://localhost:3000/SpeciesList';
                 })
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });


    },

    editNewSpecieToDatabase: function (specieData) {

        console.log(specieData.SpecieId)

        // ********************
        // Ajout dans firebase 
        // ********************

        let collection = (userData.zooName + '-species');
        let document = specieData.SpecieId

        firebase.firestore()
            .collection(collection)
            .doc(document)
            .update({
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
                SpecieLastEditDate: Date()
            })

            .then(function () {
                swal({
                    title: "Good job!",
                    text: "L'espèce " + specieData.SpecieName + " a été correctement éditée",
                    type: "success",
                    showCancelButton: false
                }, function () {
                    // Redirect the user
                    window.location.href = 'http://localhost:3000/SpeciesList';
                })
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });


    },

    addNewAnimalToDatabase: function (animalData) {

        // ********************
        // Ajout dans firebase 
        // ********************

        let collection = (userData.zooName + '-animals');
        let document = animalData.animalName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000))
        let specieId = document


        firebase.firestore()
            .collection(collection)
            .doc(document)
            .set({
                animalSpecieId: animalData.animalSpecieId,
                animalSpecie: animalData.animalSpecie,
                animalId: specieId,
                animalName: animalData.animalName,
                animalDescription: animalData.animalDescription,
                animalLifeExpectancy: animalData.animalLifeExpectancy,
                animalPhotoProfil: animalData.animalPhotoProfil,
                animalCreatedBy: userData.userId,
                animalCreationDate: Date()
            })

            .then(function () {
                swal({
                    title: "Good job!",
                    text: "L'espèce " + animalData.animalName + " a été ajoutée à votre Zoo",
                    type: "success",
                    showCancelButton: false
                }, function () {
                    // Redirect the user
                    window.location.href = 'http://localhost:3000/SpeciesList';
                })
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });

    },

    editNewAnimalToDatabase: function (animalData) {

        let collection = (userData.zooName + '-animals');
        let document = animalData.animalName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000))
        let specieId = document


        firebase.firestore()
            .collection(collection)
            .doc(document)
            .update({
                animalSpecieId: animalData.animalSpecieId,
                animalSpecie: animalData.animalSpecie,
                animalId: specieId,
                animalName: animalData.animalName,
                animalDescription: animalData.animalDescription,
                animalLifeExpectancy: animalData.animalLifeExpectancy,
                animalPhotoProfil: animalData.animalPhotoProfil,
                animalLastModificationBy: userData.userId,
                animalLastEditDate: Date()
            })

            .then(function () {
                swal({
                    title: "Good job!",
                    text: "L'espèce " + animalData.animalName + " a été correctement éditée",
                    type: "success",
                    showCancelButton: false
                }, function () {
                    // Redirect the user
                    window.location.href = 'http://localhost:3000/SpeciesList';
                })
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });

    },

    addNewServiceToDatabase: function (serviceData) {

        let collection = (userData.zooName + '-services');
        let document = serviceData.serviceName.toUpperCase().replace(/ /g, "") + (Math.floor(Date.now() / 1000))
        let serviceId = document


        firebase.firestore()
            .collection(collection)
            .doc(document)
            .set({
                serviceId: serviceId,
                serviceName: serviceData.serviceName,
                serviceDescription: serviceData.serviceDescription,
                servicePhotoProfil: serviceData.servicePhotoProfil,
                serviceOpeningTime: serviceData.serviceOpeningTime,
                serviceClosingTime: serviceData.serviceClosingTime,
                serviceCreatedBy: userData.userId,
                serviceCreationDate: Date()
            })

            .then(function () {
                swal({
                    title: "Good job!",
                    text: "Le service " + serviceData.serviceName + " a été ajoutée à votre Zoo",
                    type: "success",
                    showCancelButton: false
                }, function () {
                    // Redirect the user
                    window.location.href = 'http://localhost:3000/Dashboard';
                })
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    },

    editNewServiceToDatabase: function (serviceData) {

        let collection = (userData.zooName + '-services');
        let document = serviceData.serviceId
        let serviceId = document


        firebase.firestore()
            .collection(collection)
            .doc(document)
            .update({
                serviceId: serviceId,
                serviceName: serviceData.serviceName,
                serviceDescription: serviceData.serviceDescription,
                servicePhotoProfil: serviceData.servicePhotoProfil,
                serviceOpeningTime: serviceData.serviceOpeningTime,
                serviceClosingTime: serviceData.serviceClosingTime,
                serviceLastModificationBy: userData.userId,
                serviceLastEditDate: Date()
            })

            .then(function () {
                swal({
                    title: "Good job!",
                    text: "Le service " + serviceData.serviceName + " a été ajoutée à votre Zoo",
                    type: "success",
                    showCancelButton: false
                }, function () {
                    // Redirect the user
                    window.location.href = 'http://localhost:3000/Dashboard';
                })
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
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
