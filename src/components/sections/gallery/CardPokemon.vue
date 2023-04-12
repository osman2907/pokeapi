<template>
  <div class="card-pokemon card mb-3">
    <div class="row g-0">
      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <img
          :src="props.pokemon.sprites.other.dream_world.front_default"
          class="img-fluid rounded-start front"
          :alt="props.pokemon.name"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body d-flex flex-column">
          <div>
            <h5 class="card-title text-capitalize">{{ props.pokemon.name }}</h5>
            <div class="title-small">Tipo(s)</div>
            <div class="list-small mb-2">
              <div
                v-for="(tipo, index) in props.pokemon.types"
                :key="index"
                class="d-flex justify-content-between align-items-center"
              >
                <div class="text-capitalize">{{ tipo.type.name }}</div>
                <div><IconType :type="tipo.type.name" /></div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button
              class="btn btn-secondary w-100"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="verDetalles"
            >
              Ver Detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconType from "../../common/IconType.vue";
const props = defineProps({
  pokemon: Object,
});

const emit = defineEmits(["verDetalles"]);

const verDetalles = () => {
  emit("verDetalles", props.pokemon);
}

</script>
