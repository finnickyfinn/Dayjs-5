var currentDate = dayjs();
$('#currentDay').text(currentDate.format('dddd MMM D, YYYY'));


var currentTime = dayjs().hour()



$(document).ready(function() {  

    function getData() {
        $("#hour-9 .description").val(localStorage.getItem("hour-9"));
        $("#hour-10 .description").val(localStorage.getItem("hour-10"));
        $("#hour-11 .description").val(localStorage.getItem("hour-11"));
        $("#hour-12 .description").val(localStorage.getItem("hour-12"));
        $("#hour-13 .description").val(localStorage.getItem("hour-13"));
        $("#hour-14 .description").val(localStorage.getItem("hour-14"));
        $("#hour-15 .description").val(localStorage.getItem("hour-15"));
        $("#hour-16 .description").val(localStorage.getItem("hour-16"));
        $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    
    }

    getData()





function updateTime() {
    var currentTime = dayjs().hour();
    $(".time-block").each(function() {
        var blockTime = parseInt($(this).attr("time"));

        if (blockTime < currentTime){
            $(this).addClass("past");
        } else if (blockTime === currentTime) {
            $(this).addClass("present");   
        } else if (blockTime > currentTime) {
            $(this).addClass("future");
        }
        });



}

setInterval(updateTime, 3000);

    
updateTime();


$(".saveBtn").on("click", function() {
    
        var text = $(this).siblings(".description").val();
        var hour = $(this).parent().attr("id");
    
        localStorage.setItem(hour, text);
    });

});






