$(document).ready(function () {
    function toggleButtonColor(button) {
        $(button).toggleClass("card__button--green card__button--red");
    }

    $("#toggleButton").click(function () {
        toggleButtonColor(this);
    });
});
