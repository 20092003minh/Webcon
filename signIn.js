const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const submit=document.getElementById("submit");
signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});
// kiểm tra định dạng email
const kiemTraEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function xacnhan(event) {
  event.preventDefault();
  var giatriemail = document.getElementById("username").value.trim();
  var giatrimatkhau = document.getElementById("matkhau").value.trim();
  

  if (giatriemail == "" || !kiemTraEmail(giatriemail) || giatrimatkhau == "" || giatrimatkhau.length < 8) {
    alert("Tài khoản hoặc mật khẩu chưa chính xác!");
  } 
  else{
    alert("Đăng nhập thành công!");
    window.location.href="Thanhketqua.html";
  }
  
}

function loi(id, message) {
  document.getElementById(id).innerHTML = message;
}

// kiểm tra các trường nhập của đăng ký
function xacnhandangky(event) {
  event.preventDefault();
  var giatriemaildangky = document.getElementById("emaildangky").value.trim();
  var giatritendangky = document.getElementById("tendangky").value.trim();
  var giatrimatkhaudangky = document
    .getElementById("matkhaudangky")
    .value.trim();
  var giatrimatkhaudangkynhaplai = document
    .getElementById("matkhaudangkynhaplai")
    .value.trim();

  var emaildangky = document.getElementById("emaildangky");
  var tendangky = document.getElementById("tendangky");
  var matkhaudangky = document.getElementById("matkhaudangky");
  var matkhaudangkynhaplai = document.getElementById("matkhaudangkynhaplai");

  if (giatriemaildangky == "") {
    emaildangky.style.border = "1px solid #ff8471";
    loidangky("loi_emaildangky", "Email không được bỏ trống");
  } else if (!kiemTraEmail(giatriemaildangky)) {
    emaildangky.style.border = "1px solid #ff8471";
    loidangky("loi_emaildangky", "Email sai");
  } else {
    emaildangky.style.border = "1px solid #7b5be4";
    loidangky("loi_emaildangky", "");
  }

  if (giatritendangky == "") {
    tendangky.style.border = "1px solid #ff8471";
    loidangky("loi_tendangky", "Tên không được bỏ trống");
  } else {
    tendangky.style.border = "1px solid #7b5be4";
    loidangky("loi_tendangky", "");
  }

  if (giatrimatkhaudangky == "") {
    matkhaudangky.style.border = "1px solid #ff8471";
    loidangky("loi_mat_khaudangky", "Mật khẩu không được bỏ trống");
  } else if (giatrimatkhaudangky.length < 8) {
    matkhaudangky.style.border = "1px solid #ff8471";
    loidangky("loi_mat_khaudangky", "Mật khẩu phải nhiều hơn 8 kí tự");
  } else {
    matkhaudangky.style.border = "1px solid #7b5be4";
    loidangky("loi_mat_khaudangky", "");
  }

  if (giatrimatkhaudangkynhaplai == "") {
    matkhaudangkynhaplai.style.border = "1px solid #ff8471";
    loidangky("loi_mat_khaudangkynhaplai", "Mật khẩu không được bỏ trống");
  } else if (giatrimatkhaudangkynhaplai.length < 8) {
    matkhaudangkynhaplai.style.border = "1px solid #ff8471";
    loidangky("loi_mat_khaudangkynhaplai", "Mật khẩu phải nhiều hơn 8 kí tự");
  } else {
    matkhaudangkynhaplai.style.border = "1px solid #7b5be4";
    loidangky("loi_mat_khaudangkynhaplai", "");
  }
  console.log("btn dang ký")

  if (
    giatriemaildangky == "" ||
    giatrimatkhaudangky == "" ||
    !kiemTraEmail(giatriemaildangky) ||
    giatrimatkhaudangky.length < 8 ||
    giatritendangky == "" ||
    giatrimatkhaudangkynhaplai == "" ||
    giatrimatkhaudangkynhaplai.length < 8
  ) {
    event.preventDefault();
    console.log("dang ky khong thanh cong");
  } else {
    window.location.href = "index.html";
    return;
  }

}

