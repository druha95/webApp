/**
 * Created by test on 04.02.15.
 */
$(document).ready(function() {

    createCounter();
    $('#number').on('change', createCounter)
    
});

    function createCounter() {
        $('.counter').html("");   
        var number = $('#number').val();
        var tmp = "";
        for(var i=0; i<number.length; i++) {
            tmp +='<span class="item">' + number[i] + '</span>';
        }

        $(".counter").append(tmp);
    }