<template>
  <div class="card-pokemon card mb-3">
    <div class="row g-0">
      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <img
          :src="props.pokemon.sprites.front_default"
          class="img-fluid rounded-start"
          :alt="props.pokemon.name"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body d-flex flex-column">
          <div>
            <h5 class="card-title">{{ props.pokemon.name }}</h5>
            <ul class="list-group mb-2">
              <li
                v-for="(tipo, index) in props.pokemon.types"
                :key="index"
                class="list-group-item"
              >
                {{ tipo.type.name }}
              </li>
            </ul>
          </div>
          <div class="d-flex justify-content-end">
            <button class="btn btn-secondary">Ver Detalles</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  pokemon: Object,
});
</script>
