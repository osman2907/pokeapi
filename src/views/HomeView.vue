<script setup></script>

<template>
  <section id="section-home">
    <h1 class="text-center pt-3">Ejercicio Práctico de Vue</h1>
    <div
      class="d-block d-xl-flex align-items-start justify-content-between home-info"
    >
      <div class="container-info info-develop">
        <h3 class="text-center">Información del desarrollador</h3>
        <div class="info">Desarrollado por Osman Pérez</div>
        <div class="info d-flex align-items-center pt-2">
          <div>
            <img src="@/assets/img/logoGmail.png" />
          </div>
          <div class="ps-2">osman2907@gmail.com</div>
        </div>
        <div class="info d-flex align-items-center pt-3">
          <div>
            <img src="@/assets/img/logoLinked.png" />
          </div>
          <div class="ps-2">
            <a href="https://www.linkedin.com/in/osman2907/" target="_blank"
              >www.linkedin.com/in/osman2907/
            </a>
          </div>
        </div>
        <div class="info d-flex align-items-center pt-3">
          <div>
            <img src="@/assets/img/logoPortfolio.png" />
          </div>
          <div class="ps-2">
            <a href="https://osman2907.gitlab.io/portfolio/" target="_blank"
              >osman2907.gitlab.io/portfolio/
            </a>
          </div>
        </div>
      </div>
      <div class="container-info info-project mt-3 mt-xl-0">
        <h3 class="text-center">Información del Proyecto</h3>
        <div class="info d-flex align-items-center pt-2">
          <div>
            <img src="@/assets/img/logoVue.png" />
          </div>
          <div class="ps-2">
            <a href="https://vuejs.org/" target="_blank">VueJs</a>
          </div>
        </div>
        <div class="info d-flex align-items-center pt-3">
          <div>
            <img src="@/assets/img/logoGithub.png" />
          </div>
          <div class="ps-2">
            <a href="https://github.com/osman2907/pokeapi" target="_blank">
              github.com/osman2907/pokeapi
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
