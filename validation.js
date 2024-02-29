let uname = document.getElementById("name");
let phone = document.getElementById("phone");
let pass = document.getElementById("pass");
let cpass = document.getElementById("cpass");
let email = document.getElementById("email");
let fn = false;
let fe = false;
let fp = false;
let fpw = false;
let fpc = false;

console.log(uname);
uname.addEventListener("input", function () {
  let username = uname.value;
  validate_name(username);
});
phone.addEventListener("input", function () {
  let pno = phone.value;
  validate_ph(pno);
});
pass.addEventListener("input", function () {
  validate_pass(pass.value);
});
cpass.addEventListener("input", function () {
  validate_check(cpass.value);
});
email.addEventListener("input", function () {
  validate_email(email.value);
});

function validate_name(u_name) {
  if (u_name == " ") {
    document.getElementById("name").style.borderColor = "none";
  } else if (/^[a-z]+$/i.test(u_name) == false) {
    document.getElementById("name").style.borderColor = "red";
    fn = false;
  } else {
    document.getElementById("name").style.borderColor = "green";
    fn = true;
  }
  tick("namec", fn);
}
function validate_ph(phone_no) {
  console.log(phone_no);
  if (phone_no.length != 10 || !/^[0-9]+$/i.test(phone_no)) {
    phone.style.borderColor = "red";
    fp = false;
  } else {
    phone.style.borderColor = "green";
    fp = true;
  }
  tick("phonec", fp);
}
function validate_pass(password) {
  let flag_n = false;
  let flag_s = false;
  let flag_u = false;
  let flag_l = false;

  if (password.length < 8 || !/^[a-zA-Z0-9!@#$&*]+$/i.test(password)) {
    pass.style.borderColor = "red";
    fpw = false;
  } else {
    for (var i = 0; i < password.length; i++) {
      if (/[a-z]/.test(password.charAt(i))) {
        flag_l = true;
      } else if (/[A-Z]/.test(password.charAt(i))) {
        flag_u = true;
      } else if (/[0-9]/.test(password.charAt(i))) {
        flag_n = true;
      } else {
        flag_s = true;
      }

      if (flag_l && flag_n && flag_s && flag_u) {
        pass.style.borderColor = "green";
        fpw = true;
      }
    }
  }
  tick("passwordc", fpw);
}
function validate_check(check) {
  if (pass.value === check && check != "") {
    cpass.style.borderColor = "green";
    fpc = true;
  } else {
    cpass.style.borderColor = "red";
    fpc = false;
  }
  tick("passwordcc", fpc);
}
function validate_email(mail) {
  console.log(mail);
  if (/^([a-zA-Z0-9_.]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$/.test(mail)) {
    email.style.borderColor = "green";
    fe = true;
  } else {
    email.style.borderColor = "red";
    fe = false;
  }
  tick("emailc", fe);
}
function reset() {
  uname.value = "";
  phone.value = "";
  email.value = "";
  cpass.value = "";
  pass.value = "";
}
function sub_mit() {
  console.log("yes");
  if (fe && fpw && fpc && fn && fp) {
    alert("Submitted");
  } else {
    alert("Not submitted");
  }
}
function tick(place, flag) {
  if (flag) {
    document.getElementById(place).innerHTML = "<img src='icons8-done-24.png'>";
  } else {
    document.getElementById(place).innerHTML =
      "<img src='icons8-wrong-48.png'>";
  }
}
