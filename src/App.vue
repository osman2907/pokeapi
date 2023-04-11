<script setup>
import { computed } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/common/Navbar.vue";

document.title = "Pokeapi con Vue3"

const itemsMenu = computed(() => [
  { route: "/", label: "Home" },
  { route: "/gallery", label: "Galería" },
  { route: "/about", label: "Resumen" },
]);
</script>

<template>
  <main>
    <Navbar :items="itemsMenu" />
    <section class="content">
      <RouterView />
    </section>
  </main>
</template>

<style scoped></style>
