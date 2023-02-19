<script setup>
import { RouterLink, useRoute } from "vue-router";
import { computed } from "@vue/reactivity";

const props = defineProps({
  items: Array,
});

const route = useRoute();
const routeName = computed(() => route.name)
</script>

<template>
  <nav class="navbar navbar-dark navbar-expand-md bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Pokémon</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end text-bg-dark"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Pokémon</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item" v-for="(item, index) in items" :key="index">
              <RouterLink
                :to="item.route"
                class="nav-link"
                aria-current="page"
                >{{ item.label }}</RouterLink
              >
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
