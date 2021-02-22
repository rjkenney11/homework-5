$(document).ready(function () {
    var keys = Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++) {
        var value = localStorage.getItem(keys[i]);
        var temp = $("#" + keys[i]).find("textarea")
        temp.val(value);
    }
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        console.log(this);
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    });

    $("#currentDay").text(moment().format("LLL"));
    function timeFrame() {
        var currentHour = moment().hour();

        $(".time-block").each(function () {
            var hour = $(this).attr("id");
            var colorHour = hour.substring(5, hour.length);
            var colorHourInt = parseInt(colorHour)
            var currentHourInt = parseInt(currentHour);
            console.log(currentHour, colorHourInt)
            if (parseInt(colorHourInt) < parseInt(currentHourInt)) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (parseInt(colorHourInt) > parseInt(currentHourInt)) {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
            else if (parseInt(colorHourInt) === parseInt(currentHourInt)) {
                $(this).addClass("present");
                $(this).removeClass("future");
                $(this).removeClass("past");
            }
        })

    };
    timeFrame();

});