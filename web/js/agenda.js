$(document).ready(function() {

    $('.calendar').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    })


    // 	var hours = $(".calendar__hour");

    // 	$('.calendar__hour').addEventListener('click',function () {
    // 		console.log(hello);
    // 	})

    // console.log(hours);


    var hours = document.getElementsByClassName('calendar__hour');
  
    // for (var i = Things.length - 1; i >= 0; i--) {
    // 	Things[i]
    // }


    $(hours).click(function() {


        for (var i = hours.length - 1; i >= 0; i--) {
            var hour = hours[i]
                                 console.log(hour[i]);;

        }

    });


});















// AJOUTER LA CLASSE ACTIVE A L'HEURE SELECTIONNEE