/**
 * Created by test on 04.02.15.
 */
$(document).ready(function(){

    


    createModelList();


    $('.cars').on('change', createModelList);
    $('#result').on('click', showResult);


    $('.start-button').on('click', function(){
        $("#distance").val("");
        hide($(".result"));
        show($('.start'));
    });
    $("#distance").on('focus', function() {
        $("#distance").removeClass("error");
    });




    

});

var models = {
        audi: ["A1","A2","A3","A4","A6","Q3","Q7"],
        ford: ["Focus", "Fiesta", "Mondeo", "Kuga"],
        skoda: ["Fabia", "Octavia", "Rapid", "Yeti"]
    };



function createModelList() {
       var modelsList =  $(".models");

       modelsList.html("");
       var fragm = "";
       models[$('.cars').val().toLowerCase()].forEach(function(item) {
           fragm += '"<option value=" ' + item + '"> ' +  item + ' </option>';
       });

        modelsList.append(fragm);
    }

    function showResult() {
        var text = $('.text'),
            distance = +$("#distance").val();

        if(distance<=0 || (parseInt(distance)-distance) != 0){
            $("#distance").val("").addClass("error");
            return false;
        }

        hide($(".start"));
        show($('.result'));
        text.html("");

        var tmp = "Вибраний виробник: " + $(".cars").val() + ", модель: " + $(".models").val() + ", з пробігом " + distance;
        text.html(tmp);

    }

    function hide(elem) {
            elem.css("display", "none");
    }

    function show(elem) {
            elem.css("display", "block");
    }








