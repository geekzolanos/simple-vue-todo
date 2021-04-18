<template>
  <div class="welcome">
    <h1>¡Bienvenido/a!</h1>
    <p>Utilize la barra lateral para interactuar con el listado de tareas. Sus tareas seran almacenadas localmente de forma automatica.</p>
    <img class="welcome--logo" src="/img/todo-icon.svg" alt="Todo Banner" />
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .welcome {
        position: relative;
        box-sizing: border-box;
        background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
        padding: 0 4rem;
        padding-top: 64px;
        height: 100%;
    }

    .welcome p {      
        text-align: justify;
    }

    .welcome--logo {
        position: absolute;
        height: 196px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
</style>