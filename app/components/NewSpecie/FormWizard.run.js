export default () => {
    if (!$.fn.validate || !$.fn.steps) return;

    // FORM EXAMPLE
    var form = $("#example-form");
    form.validate({
        errorPlacement: function errorPlacement(error, element) { element.before(error); },
        rules: {
            confirm: {
                equalTo: "#password"
            }
        }
    });
    form.children("div").steps({
        headerTag: "h4",
        bodyTag: "fieldset",
        transitionEffect: "slideLeft",
        onStepChanging: function (event, currentIndex, newIndex) {
            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinishing: function (event, currentIndex) {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function (event, currentIndex) {


            // Submit form

            let newSpecieName = $("input[name=SpecieName]").val();
            let newSpecieLatinName = $("input[name=SpecieLatinName]").val();
            let newSpecieEnglishName = $("input[name=SpecieEnglishName]").val();

            let newSpecieClass = $("input[name=SpecieClass]").val();
            let newSpecieOrder = $("input[name=SpecieOrder]").val();
            let newSpecieFamilly = $("input[name=SpecieFamilly]").val();

            //$("input[name=SpecieIUCNClassification]").val();
            //$("input:text[name=SpecieThreat]").val();

            let newSpecieGestation = $("input[name=SpecieGestation]").val();
            let newSpecieWeight = $("input[name=SpecieWeight]").val();
            let newSpecieLifeExpectancy = $("input[name=SpecieLifeExpectancy]").val();

            let newSpecieProfilePicture = $("input[name=SpecieProfilePicture]").val();
            let newSpeciePict1 = $("input[name=SpeciePict1]").val();
            let newSpeciePict2 = $("input[name=SpeciePict2]").val();

            let newSpecieDiet = $("input[name=SpecieDiet]").val();
            let newSpecieOrigin = $("input[name=SpecieOrigin]").val();


            let newSpecie = {
                SpecieName: newSpecieName,
                SpecieLatinName: newSpecieLatinName,
                SpecieEnglishName: newSpecieEnglishName,

                SpecieClass: newSpecieClass,
                SpecieOrder: newSpecieOrder,
                SpecieFamilly: newSpecieFamilly,

                SpecieProfilePicture: newSpecieProfilePicture,
                SpeciePict1: newSpeciePict1,
                newSpeciePict2: newSpeciePict2,

                SpecieGestation: newSpecieGestation,
                SpecieWeight: newSpecieWeight,
                SpecieLifeExpectancy: newSpecieLifeExpectancy,

                SpecieOrigin: newSpecieOrigin,
                SpecieDiet: newSpecieDiet,
                SpecieOrigin: newSpecieOrigin,
            }

            console.log(newSpecie)

            function sendNewSpecie() {
                const urlWithKey = 'http://localhost:8080/species/Beauval/' ;
                fetch(urlWithKey, {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({ newSpecie })
                }).then(response => {
                    if (response.ok) {
                        swal("Good job!", "L'espèce " + newSpecieName + " a été ajoutée à votre Zoo", "success")
                        return response.json();
                    }
                    throw new Error('Request failed!');
                }, networkError => console.log(networkError.message)
                );
            };

            sendNewSpecie();

        }
    });

    // VERTICAL
    // -----------------------------------

    $("#example-vertical").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        stepsOrientation: "vertical"
    });
}
