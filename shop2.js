function ShopButton1() {
  var m = document.getElementById("ShopBtn1");
  var btn2 = document.getElementById("ShopBtn2");
  var btn3 = document.getElementById("ShopBtn3");
  var btn4 = document.getElementById("ShopBtn4");
  if (m.style.display === "none" || btn2.disabled == false || btn3.disabled == false || btn4.disabled == false)  {
    m.style.display = "block";
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
  } else {
    m.style.display = "none";
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
  }
}

function ShopButton2() {
  var f = document.getElementById("ShopBtn2");
  var btn1 = document.getElementById("ShopBtn1");
  var btn3 = document.getElementById("ShopBtn3");
  var btn4 = document.getElementById("ShopBtn4");
  if (f.style.display === "none" || btn1.disabled == false || btn3.disabled == false || btn4.disabled == false)  {
    f.style.display = "block";
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
  } else {
    f.style.display = "none";
    btn1.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
  }
}

function ShopButton3() {
  var r = document.getElementById("ShopBtn3");
  var btn1 = document.getElementById("ShopBtn1");
  var btn2 = document.getElementById("ShopBtn2");
  var btn4 = document.getElementById("ShopBtn4");
  if (r.style.display === "none" || btn1.disabled == false || btn2.disabled == false || btn4.disabled == false)  {
    r.style.display = "block";
    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
  } else {
    r.style.display = "none";
    btn1.disabled = false;
    btn2.disabled = false;
    btn4.disabled = false;
  }
}

function ShopButton4() {
  var o = document.getElementById("ShopBtn4");
  var btn1 = document.getElementById("ShopBtn1");
  var btn2 = document.getElementById("ShopBtn2");
  var btn3 = document.getElementById("ShopBtn3");
  if (o.style.display === "none" || btn1.disabled == false || btn2.disabled == false || btn3.disabled == false)  {
    o.style.display = "block";
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
  } else {
    o.style.display = "none";
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
  }
}
