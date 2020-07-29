// 자바스크립트 작성

// 스무스 스크롤링

$("#main-navi a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100, // 위치( -100을 한 이유 : 다 내려가면 안 보일 수도 있어서)
      },
      800 //속도
    );
  }
});

//스티키 네브바 백그라운드 변경
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    $("nav#main-navi a, #main-navi .logo a span").css("color", "black");
    $("#main-navi, nav#main-navi a").css("background", "white");
    this.document.querySelector("#main-navi").style.opacity = 0.8;
  } else {
    this.document.querySelector("#main-navi").style.opacity = 1.0;
    $("nav#main-navi a, #main-navi .logo a span").css("color", "white");
    $("#main-navi, nav#main-navi a").css("background", "");
  }
});
