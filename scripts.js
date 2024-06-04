var loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", loginCheck);

function loginCheck() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if(username === "" || password === ""){
    alert("請完整輸入帳號或密碼");
    return false;
  }
  else{
    alert("登入成功");
    window.location.href = "introduce.html";
  }
}
