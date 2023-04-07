<template>
  <div>
    <div class="row">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2"
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
