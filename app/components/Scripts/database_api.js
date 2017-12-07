module.exports = {

    //
    // Ces fonction prend un objet Specie comprenant les données d'une espèce et l'ajoute en base
    //

    addNewSpecieToDatabase: function (specieData) {
        const urlWithKey = 'http://localhost:8080/species/Beauval/';
        fetch(urlWithKey, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ specieData })
        }).then(response => {
            if (response.ok) {
                swal("Good job!", "L'espèce " + specieData.name + " a été ajoutée à votre Zoo", "success")
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => console.log(networkError.message)
            );
    }
};



