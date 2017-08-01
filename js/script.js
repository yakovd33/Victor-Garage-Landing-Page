
// Switch clients
$.each($("#clients-togglers .client-toggle"), function () {
    $(this).click(function () {
        $(this).parent().find(".client-toggle").removeClass("active");
        $(this).addClass("active");
        $(this).closest("#clients").find(".client").hide();
        $(".client.active").removeClass("active")
        $(".client[data-client='" + $(this).data('client') + "']").addClass("active").show('fast');
    });
});

setInterval(function () {
    $("#phone-contact-btn i").animateCss("shake");
}, 3000);

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});