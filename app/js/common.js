$(function() {
    $(".toId").mPageScroll2id();


    var date = new Date();
    var date_mili = date.getTime();
    date_mili += 15 * 60 * 1000;
    var newDate = new Date(date_mili);
    var dd = newDate.getDate();
    var mm = newDate.getMonth()+1;
    var yyyy = newDate.getFullYear();
    var hh = newDate.getHours();
    var min = newDate.getMinutes();
    var ss = newDate.getSeconds();
    $(".countdown")
        .countdown(yyyy + "/" + mm + "/" + dd + " " + hh + ":" + min + ":" + ss , function(event) {
            // var days = event.strftime('%D');
            // var hours = event.strftime('%H');
            var minutes = event.strftime('%M');
            var seconds = event.strftime('%S');
            $(this).find('.countdown-minutes').text(minutes);
            $(this).find('.countdown-seconds').text(seconds);
        });



    // var bg = document.getElementById('counter');
    // var ctx = ctx = bg.getContext('2d');
    // var imd = null;
    // var circ = Math.PI * 2;
    // var quart = Math.PI / 2;
    //
    // ctx.beginPath();
    // ctx.strokeStyle = '#99CC33';
    // ctx.lineCap = 'square';
    // ctx.closePath();
    // ctx.fill();
    // ctx.lineWidth = 10.0;
    //
    // imd = ctx.getImageData(0, 0, 240, 240);
    //
    // var draw = function(current) {
    //     ctx.putImageData(imd, 0, 0);
    //     ctx.beginPath();
    //     ctx.arc(120, 120, 40, -(quart), ((circ) * current) - quart, false);
    //     ctx.stroke();
    // };
    // draw(50 / 100);
});
