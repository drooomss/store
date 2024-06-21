<template>
  <div class="mapa">
    <div class="container">
      <div class="row">
        <div class="col-sm contenedor">
          <h1 class="primer text-center text-light">
            📍 Ubicación en Santiago
          </h1>
          <p class="segundo text-light text-center">
            Encuentranos en Santiago Centro Obispo Manuel Umaña Salinas #47,
            frente el Registro Civil
          </p>
        </div>
        <div class="col">
          <img src="../img/dirsantiago.png" alt="" class="img-fluid maps" />
        </div>
      </div>
    </div>
  </div>
  <div class="mapa">
    <div class="container">
      <div class="row">
        <div class="col-sm contenedor mb-5">
          <img src="../img/ubiquique.png" alt="" class="img-fluid maps" width="900px"/>
        </div>

          <div class="col contenedor">
            <h1 class="primer text-center text-light mx-auto">
              📍 Ubicación en Iquique
            </h1>
            <p class="segundo text-light text-center mx-auto">
              Encuentranos en Santiago Centro Obispo Manuel Umaña Salinas #47,
              frente el Registro Civil
            </p>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mapa",
};
</script>
<style scoped>
.primer {
  font-weight: 900;
  align-items: center;
  justify-content: center;
}
.segundo {
  font-weight: 600;
  text-align: center;
  height: auto;
  padding-top: 30px;
}
.maps {
  padding: px;
  border-radius: 40px;
}
.mapa {
  background: black;
  padding: 4rem;
}
.contenedor {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.col{
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
