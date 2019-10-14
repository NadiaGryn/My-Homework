$(".mini-picture").on("click", function(event) {
    $(this).addClass('active-sldr').siblings().removeClass('active-sldr');
    const index = $(this).index();
    changeInfo(index);
})
$(".slider-arrow").on("click", function() {
if ($(this).hasClass("prev")) {
    const activeIndex = $(".active-sldr").index()
    const previousActiveIndex = activeIndex == 0 ? 3 : activeIndex-1;
    console.log(previousActiveIndex);
    $(`.mini-picture:eq(${previousActiveIndex})`).addClass("active-sldr").siblings().removeClass("active-sldr")
    changeInfo(previousActiveIndex);
}
if ($(this).hasClass("next")) {
    const activeIndex = $(".active-sldr").index()
    const nextActiveIndex = activeIndex == 3 ? 0 : activeIndex+1;
    console.log(nextActiveIndex);
    $(`.mini-picture:eq(${nextActiveIndex})`).addClass("active-sldr").siblings().removeClass("active-sldr")
    changeInfo(nextActiveIndex);
}
})

function changeInfo(index) {
$('.persons-slider-index').eq(index)
    .fadeIn(1000)
    .siblings()
    .hide();
}
