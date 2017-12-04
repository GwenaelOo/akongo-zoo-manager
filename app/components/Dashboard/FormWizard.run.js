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

            let newSpecieDiet = $("input[name=SpecieDiet]").val();
            let newSpecieOrigin = $("input[name=SpecieOrigin]").val();




            let newSpecieObject = {
                SpecieName: newSpecieName,
                SpecieLatinName: newSpecieLatinName,
                SpecieEnglishName: newSpecieEnglishName,

                SpecieClass: newSpecieClass,
                SpecieOrder: newSpecieOrder,
                SpecieFamilly: newSpecieFamilly,

                SpecieGestation: newSpecieGestation,
                SpecieWeight: newSpecieWeight,
                SpecieLifeExpectancy: newSpecieLifeExpectancy,

                SpecieOrigin: newSpecieOrigin,
                SpecieDiet: newSpecieDiet,
                SpecieOrigin: newSpecieOrigin,
            }




            console.log(newSpecieName);
            console.log(newSpecieLatinName);
            console.log(newSpecieEnglishName);

            console.log(newSpecieClass);
            console.log(newSpecieOrder);
            console.log(newSpecieFamilly);

            console.log(newSpecieGestation);
            console.log(newSpecieWeight);
            console.log(newSpecieLifeExpectancy);

            console.log(newSpecieOrigin);
            console.log(newSpecieDiet);


            console.log(newSpecieObject)

         

            function sendNewSpecie() {
             
                $.ajax({
                    url: "/send_save",
                    type: "POST",
                    dataType: "json",
                    data: newSpecieObject,
                    contentType: "application/json",
                    cache: false,
                    timeout: 5000,
                    complete: function () {
                        //called when complete
                        console.log('process complete');
                    },

                    success: function (data) {
                        console.log(data);
                        console.log('process sucess');
                    },

                    error: function () {
                        console.log('process error');
                    },
                });
    
            }

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
