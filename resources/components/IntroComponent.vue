<template>
  <!-- Start Product Section -->
  <div class="product-section fondo ">
			<div class="container">
				<div class="row">

					<!-- Start Column 1 -->
					<div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 class="mb-4 section-title text-light" style="font-weight: 700;">Escoge la calidad que quieres vender.</h2>
						<p class="mb-4 text-light mt-3">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
						<button class="boton mt-3"><a href="/productos" style="text-decoration: none; color: inherit;">Explora</a></button>
					</div>
					<!-- End Column 1 -->

					<!-- Start Column 2 -->
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="cart.html">
							<img src="../img/celeste.png" class="img-fluid product-thumbnail">
							<h3 class="product-title text-light">Sport Celeste</h3>
							<strong class="product-price text-light">$550</strong>

							<span class="icon-cross">
								<img src="../img/cross.svg" class="img-fluid">
							</span>
						</a>
					</div>
					<!-- End Column 2 -->

					<!-- Start Column 3 -->
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="cart.html">
							<img src="../img/amarillo.png" class="img-fluid product-thumbnail">
							<h3 class="product-title text-light"> Sport Amarillo</h3>
							<strong class="product-price text-light">$300</strong>

							<span class="icon-cross">
								<img src="../img/cross.svg" class="img-fluid">
							</span>
						</a>
					</div>
					<!-- End Column 3 -->

					<!-- Start Column 4 -->
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="cart.html">
							<img src="../img/rojo.png" class="img-fluid product-thumbnail">
							<h3 class="product-title text-light">Junior Rojo</h3>
							<strong class="product-price text-light">$150</strong>

							<span class="icon-cross">
								<img src="../img/cross.svg" class="img-fluid">
							</span>
						</a>
					</div>
					<!-- End Column 4 -->

				</div>
			</div>
		</div>
		<!-- End Product Section -->
</template>

<script>
    export default {
        name: 'intro'
    }
</script>
<style scoped>
.fondo{
    background: black;
}
.boton{
    font-weight: 600;
    padding: 12px 30px;
    border-radius: 30px;
    color: #000000;
    background: #3dda4a ;
    border-color: black ;

}
.boton:hover{
    color: white;
}

.section-title {
  color: #2f2f2f; }

.product-section {
  padding: 7rem 0; }
  .product-section .product-item {
    text-align: center;
    text-decoration: none;
    display: block;
    position: relative;
    padding-bottom: 50px;
    cursor: pointer; }
    .product-section .product-item .product-thumbnail {
      margin-bottom: 30px;
      position: relative;
      top: 0;
      -webkit-transition: .3s all ease;
      -o-transition: .3s all ease;
      transition: .3s all ease; }
    .product-section .product-item h3 {
      font-weight: 600;
      font-size: 16px; }
    .product-section .product-item strong {
      font-weight: 800 !important;
      font-size: 18px !important; }
    .product-section .product-item h3, .product-section .product-item strong {
      color: #2f2f2f;
      text-decoration: none; }
    .product-section .product-item .icon-cross {
      position: absolute;
      width: 35px;
      height: 35px;
      display: inline-block;
      background: #2f2f2f;
      bottom: 15px;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      margin-bottom: -17.5px;
      border-radius: 50%;
      opacity: 0;
      visibility: hidden;
      -webkit-transition: .3s all ease;
      -o-transition: .3s all ease;
      transition: .3s all ease; }
      .product-section .product-item .icon-cross img {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%); }
    .product-section .product-item:before {
      bottom: 0;
      left: 0;
      right: 0;
      position: absolute;
      content: "";
      background: #fbfbfb;
      height: 0%;
      z-index: -1;
      border-radius: 10px;
      -webkit-transition: .3s all ease;
      -o-transition: .3s all ease;
      transition: .3s all ease; }
    .product-section .product-item:hover .product-thumbnail {
      top: -25px; }
    .product-section .product-item:hover .icon-cross {
      bottom: 0;
      opacity: 4;
      visibility: visible; }
    .product-section .product-item:hover:before {
      height: 70%; }

</style>
