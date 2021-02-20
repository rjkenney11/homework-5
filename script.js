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
    };
    timeFrame();
});