<template>
  <div>
    <div class="row">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="col-12 col-sm-6 col-lg-4 col-xl-3"
      >
        <CardPokemon
          :pokemon="item.data"
          v-if="item.data"
          @verDetalles="datosModal($event)"
        />
      </div>
    </div>
    <Modal :pokemon="pokemon"/>
  </div>
</template>

<script setup>
import CardPokemon from "./CardPokemon.vue";
import Modal from "./Modal.vue";
import { ref } from "vue";
const props = defineProps({
  list: Array,
});

const pokemon = ref({});

const datosModal = (datosPokemon) => {
  pokemon.value = datosPokemon
};
</script>
