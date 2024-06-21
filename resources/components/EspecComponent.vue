

<template>

  <div class="especs bg-black ">
    <div class="container-fluid">
      <div class="row ">
        <div class="col-sm zoom-container ">
            <img
            src="../img/amarillo.png"
            alt=""
            class="imagen img-fluid p-5 pb-5"
          />

        </div>

        <div class="col-sm columna2" >
          <h2 class="titulo text-center mt-5 mx-auto text-light">Sport Amarillo 25kg</h2>
          <p class="parrafo  text-light text-center">
            Precio: <span class="fw-bold fs-3 mx-auto text-light">$550.000</span>
          </p>
          <p class="fw-bold text-light" style="padding-left: 30px; ">Descripcion</p>
          <p class=""></p>
          <ul class="">
            <li class="text-light"><strong class="text-light">Peso Total:</strong> 25 kg</li>
            <li class="text-light">
              <strong class="text-light">Contenido:</strong> Zapatillas surtidas en tallas mixtas
            </li>
            <li class="text-light">
              <strong class="text-light">Variedad de Estilos:</strong> Deportivas, casuales y más
            </li>
            <li class="text-light">
              <strong class="text-light">Calidad Garantizada:</strong> Materiales duraderos y
              cómodos
            </li>
            <li class="text-light">
              <strong class="text-light">Ideal para:</strong> Tiendas de ropa, negocios de calzado,
              y revendedores
            </li>
          </ul>

          <button class="botoncito mx-auto"><a href="" style="text-decoration: none; color: inherit;">Comprar</a></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "spec",
  mounted() {
  axios.get('/api/productos')
    .then(response => {
      this.productos = response.data;
    })
    .catch(error => {
      console.error("There was an error fetching the products!", error);
    });
}

};
</script>
<style scoped>
.botoncito{
    padding: 10px;
    font-size: 20px;
    margin-top: 50px;
    width: 100%;
    border-radius: 10px;
    background: #3dda4a;
    color: white;
    transition: transform 0.7s ease;

}

.botoncito:hover {
    color:black;
    transform: scale(1.1);
}
.cont-img{
    height: auto;


}
.zoom-container {
  overflow: hidden;
  display: inline-block; /* Para que el contenedor se ajuste al tamaño de la imagen */
}

.zoom-container img {
  transition: transform 0.3s ease; /* Transición suave */
}

.zoom-container:hover img {
  transform: scale(1.1); /* Ajusta el valor para mayor o menor zoom */
}
.titulo {
  font-weight: 800;
  font-size: 50px;
}
.parrafo {

  border-radius: 30px;
  font-weight: 600;
  font-size: 30px;
  margin-top: 40px;
  padding: 40px;
  transition: transform 0.8s ease;

}
.parrafo:hover{
    transition: transform 0.8s ease;
    transform: scale(1.1);
    color: green;

}
.especs {
  padding: 3rem;
  height: auto;
}
.columna2 {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.columna1 {
  height: 100%;
}
.imagen{
    height: 100%;
    width: 100%;
    margin: auto;
    margin-bottom: 0px;
}
.columna2{
    margin-top: 100px;
}
</style>
