<template>
  <footer class="footer-section bg-black fixed-bot">
    <div class="container relative">
      <div class="row g-5 mb-5">
        <div class="col-lg-12 text-center">
          <div class="mb-4 footer-logo-wrap">
            <a href="#" class="footer-logo text-light"><img src="../img/logo.png" width="300" style="margin-bottom: 10px;" alt=""></a>
          </div>
          <p class="mb-4 text-light">
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique. Pellentesque habitant
          </p>

          <ul class="list-unstyled custom-social">
            <li>
              <a href="#"><span class="fa fa-brands fa-facebook-f"></span></a>
            </li>
            <li>
              <a href="#"><span class="fa fa-brands fa-twitter"></span></a>
            </li>
            <li>
              <a href="#"><span class="fa fa-brands fa-instagram"></span></a>
            </li>
            <li>
              <a href="#"><span class="fa fa-brands fa-linkedin"></span></a>
            </li>
          </ul>
        </div>


      </div>
    </div>
  </footer>

  <div class="border-top copyright text-center bg-black">
    <p class="mb-2 p-3 text-light">
      Copyright &copy; {{ currentYear }}. Todos los Derechos Reservados. &mdash;
      Designed with love ❤️ by <a href="">Byte_Dude</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "pie",
};
</script>

<style scooped>
.centrado {
  align-items: center;
  justify-content: center;
  text-align: center;
}
.footer-section {
  padding: 70px 0;
  background: #ffffff;
}
.footer-section .relative {
  position: relative;
}
.footer-section a {
  text-decoration: none;
  color: #2f2f2f;
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.footer-section a:hover {
  color: rgba(47, 47, 47, 0.5);
}
.footer-section .subscription-form {
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
  margin-top: 100px;
}
@media (min-width: 992px) {
  .footer-section .subscription-form {
    margin-top: 0px;
    margin-bottom: 80px;
  }
}
.footer-section .subscription-form h3 {
  font-size: 18px;
  font-weight: 500;
  color: #3b5d50;
}
.footer-section .subscription-form .form-control {
  height: 50px;
  border-radius: 10px;
  font-family: "Inter", sans-serif;
}
.footer-section .subscription-form .form-control:active,
.footer-section .subscription-form .form-control:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-color: #3b5d50;
  -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
}
.footer-section .subscription-form .form-control::-webkit-input-placeholder {
  font-size: 14px;
}
.footer-section .subscription-form .form-control::-moz-placeholder {
  font-size: 14px;
}
.footer-section .subscription-form .form-control:-ms-input-placeholder {
  font-size: 14px;
}
.footer-section .subscription-form .form-control:-moz-placeholder {
  font-size: 14px;
}
.footer-section .subscription-form .btn {
  border-radius: 10px !important;
}
.footer-section .sofa-img {
  position: absolute;
  top: -200px;
  z-index: 1;
  right: 0;
}
.footer-section .sofa-img img {
  max-width: 380px;
}
.footer-section .links-wrap {
  margin-top: 0px;
}
@media (min-width: 992px) {
  .footer-section .links-wrap {
    margin-top: 54px;
  }
}
.footer-section .links-wrap ul li {
  margin-bottom: 10px;
}
.footer-section .footer-logo-wrap .footer-logo {
  font-size: 32px;
  font-weight: 500;
  text-decoration: none;
  color: #3b5d50;
}
.footer-section .custom-social li {
  margin: 2px;
  display: inline-block;
}
.footer-section .custom-social li a {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  display: inline-block;
  background: #dce5e4;
  color: #3b5d50;
  border-radius: 50%;
}
.footer-section .custom-social li a:hover {
  background: #3b5d50;
  color: #ffffff;
}
.footer-section .border-top {
  border-color: #7cdd55;
}
.footer-section .border-top.copyright {
  font-size: 14px !important;
}
</style>
