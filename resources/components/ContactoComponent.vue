<template>
  <div class="untree_co-section bg-black">
    <div class="container  w-75">
      <div class="block">
        <div class="row justify-content-center">
            <div class="text-center p-5">
                <h1 class="fs-1 text-light">Envianos Un Mensaje</h1>
            </div>
          <div class="col-md-8 col-lg-8 pb-4">
            <form>
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <label class="text-light" for="fname">Nombre</label>
                    <input type="text" class="form-control" id="fname" placeholder="Sebastian"/>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label class="text-light" for="lname">Apellido</label>
                    <input type="text" class="form-control" id="lname" placeholder="Pardo"/>
                  </div>
                </div>
              </div>
              <div class="form-group mt-3">
                <label class="text-light" for="email">Correo Electronico</label>
                <input type="email" class="form-control" id="email" placeholder="ejemplo@gmail.com"/>
              </div>

              <div class="form-group mb-5 mt-3">
                <label class="text-light" for="message">Mensaje</label>
                <textarea
                  name=""
                  class="form-control"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Escribenos tu mensaje nos pondremos de inmediato en contacto contigo"
                ></textarea>
              </div>

              <button
                type="submit"
                class="botoncito"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contacto",
};
</script>

<style scoped>
.botoncito{
    padding: 15px;
    align-content: center;
    justify-content: center;
    width: 100%;
    font-size: 18;
    border-radius: 30px;
    background: #3dda4a;
    color: white;
}
.botoncito:hover{
    color: black;
}
.untree_co-section {
  padding-top	: 4rem 0;
}
.border {
  height: 550px;
}
</style>
