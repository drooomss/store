<template>
<div class="why-choose-section bg-black">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-sm">
						<h1 class="section-title text-light py-2" style="font-weight: 700;">Por que Elegirnos</h1>

						<div class="row my-5">
							<div class="col-sm">
								<div class="feature">
									<div class="icon">
										<img src="../img/truck.svg" alt="Image" class="imf-fluid truk wrap">
									</div>
									<h3 class="text-light">Envio <span class="maicolor">Rapido</span></h3>
									<p class="text-light">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div class="col-6 col-md-6 col-sm-12">
								<div class="feature">
									<div class="icon">
										<img src="../img/bag.svg" alt="Image" class="imf-fluid truk">
									</div>
									<h3 class="text-light">Fácil de <span class="maicolor">Comprar</span></h3>
									<p class="text-light">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div class="col-6 col-md-6 pt-4 col-sm-12">
								<div class="feature">
									<div class="icon">
										<img src="../img/support.svg" alt="Image" class="imf-fluid truk">
									</div>
									<h3 class="text-light">Soporte<span class="maicolor"> 24/7</span></h3>
									<p class="text-light">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div class="col-6 col-md-6 pt-4 col-sm-12">
								<div class="feature">
									<div class="icon">
										<img src="../img/return.svg" alt="Image" class="imf-fluid truk shield">
									</div>
									<h3 class="text-light">Proveedor de <span class="maicolor">Confianza</span></h3>
									<p class="text-light">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

						</div>
					</div>

					<div class="col-lg-5 ">
						<div class="img-wrap pt-4 ">
							<img src="../img/niña.png" alt="Image" class="img-fluid fotointro">
						</div>
					</div>

				</div>
			</div>
		</div>
</template>

<script>
export default {
  name: "servicio",
};
</script>
<style>

.shield{
    width: auto;
    margin-bottom: 10px;
    margin-left: 5px;
    height: 35px;
}
.fotointro{
    border-radius: 50px;

}
.truk{
    filter: invert(1);
}
.img-wrap{
    display: flex;
    flex-wrap: wrap;


}
.maicolor{
    color: #3dda4a;
}
/* @media (max-width: 768px) {
  .servicio-fila {
    width: 100% !important;
    text-align: center;
  }
}
@media (max-width: 576px) {
  .icon-wrap {
    flex-wrap: wrap;
    justify-content: center !important;
  }
} */
</style>
