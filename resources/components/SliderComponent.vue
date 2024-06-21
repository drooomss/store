<template>
  <div class="hero">
				<div class="container">
					<div class="row justify-content-between ">
						<div class="col-sm" >
							<div class="intro-excerpt">
								<h1>Venta por Mayor <span clsas="d-block">Ropa, Zapatillas y accesorios</span></h1>
								<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a href="/productos" class="btn btn-secondary me-2">Comprar</a><a href="#" class="btn btn-white-outline">Explora</a></p>
							</div>
						</div>
						<div class="col-sm">
							<div class="hero-img-wrap">
								<img src="../img/portada1.png" class="img-fluid imagen">
							</div>
						</div>
					</div>
				</div>
			</div>
</template>
<script>
    export default {
        name: 'slider'
    }
</script>

<style scooped>
.imagen{
    width: 600px;
    height: auto;
    margin-left: 30px;
}
    .hero {
  background: #000000;
  padding: calc(4rem - 30px) 0 0rem 0; }
  @media (min-width: 768px) {
    .hero {
      padding: calc(4rem - 30px) 0 4rem 0; } }
  @media (min-width: 992px) {
    .hero {
      padding: calc(8rem - 30px) 0 8rem 0; } }
  .hero .intro-excerpt {
    position: relative;
    z-index: 4; }
    @media (min-width: 992px) {
      .hero .intro-excerpt {
        max-width: 450px; } }
  .hero h1 {
    font-weight: 900;
    color: #ffffff;
    margin-bottom: 30px; }
    @media (min-width: 1400px) {
      .hero h1 {
        font-size: 54px; } }
  .hero p {
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 30px; }

  .hero .hero-img-wrap {
    position: relative; }
    .hero .hero-img-wrap img {
      position: relative;
      top: 0px;
      right: 0px;
      z-index: 2;
      max-width: 980px;
      padding-left: 100px;
      left: -20px; }
      @media (min-width: 768px) {
        .hero .hero-img-wrap img {
          right: 0px;
          left: -100px; } }
      @media (min-width: 992px) {
        .hero .hero-img-wrap img {
          left: 0px;
          top: -80px;
          position: absolute;
          right: -50px; } }
      @media (min-width: 1200px) {
        .hero .hero-img-wrap img {
          left: 0px;
          top: -80px;
          right: -100px; } }
    .hero .hero-img-wrap:after {
      content: "";
      position: absolute;
      width: 255px;
      height: 217px;
      background-image: url("../images/dots-light.svg");
      background-size: contain;
      background-repeat: no-repeat;
      right: -100px;
      top: -0px; }
      @media (min-width: 1200px) {
        .hero .hero-img-wrap:after {
          top: -40px; } }

.btn {
  font-weight: 600 io !important;
  padding: 12px 30px !important;
  border-radius: 30px !important;
  color: #ffffff ;
  background: #2f2f2f ;
  border-color: #2f2f2f ;  }
  .btn:hover {
    color: #ffffff;
    background: #267634;
    border-color: #ffffff; }
  .btn:active, .btn:focus {
    outline: none !important;
    -webkit-box-shadow: none;
    box-shadow: none; }
  .btn.btn-primary {
    background: #ffffff;
    border-color: #ffffff; }
    .btn.btn-primary:hover {
      background: #314d43;
      border-color: #314d43; }
  .btn.btn-secondary {
    color: #2f2f2f;
    background: #3dda4a;
    border-color: #3dda4a;
    font-weight: 600;
}

    .btn.btn-secondary:hover {
      background: #3dda4a;
      border-color: #3dda4a; }
  .btn.btn-white-outline {
    background: transparent;
    border-width: 2px;
    border-color: rgba(255, 255, 255, 0.3);
    color: white;
}

    .btn.btn-white-outline:hover {
      border-color: white;
      color: #ffffff; }

</style>
