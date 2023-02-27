window.onload = function () {
  let txt = document.getElementById("text");
  let msg = document.getElementById("message");
  msg.style.visibility = "hidden";

  txt.innerText = 10;
  setTimeout(function () {
    txt.innerText = 9;
    setTimeout(function () {
      txt.innerText = 8;
      setTimeout(function () {
        txt.innerText = 7;
        setTimeout(function () {
          txt.innerText = 6;
          setTimeout(function () {
            txt.innerText = 5;
            setTimeout(function () {
              txt.innerText = 4;
              setTimeout(function () {
                txt.innerText = 3;
                setTimeout(function () {
                  txt.innerText = 2;
                  setTimeout(function () {
                    txt.innerText = 1;
                    setTimeout(function () {
                      msg.style.visibility = "visible";
                      txt.style.visibility = "hidden";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};
