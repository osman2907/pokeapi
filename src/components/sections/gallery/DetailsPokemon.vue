<template>
  <div id="detail-pokemon">
    <div>
      <div class="col-12 bg-secondary text-white p-2 title">Fotos</div>
      <div class="col-12 bg-light content pb-3 mb-3">
        <div class="row">
          <div class="col-4 text-center" v-for="[index, img] in fotos" :key="index">
            <div><img :src="img" :alt="index" /></div>
            <div>{{ index }}</div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="col-12 bg-secondary text-white p-2 title">Habilidades</div>
      <div class="col-12 bg-light content p-3">
        <ul class="list-group">
          <li class="list-group-item text-capitalize" v-for="item in pokemon.abilities" :key="item.ability.name">
            {{ item.ability.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  pokemon: Object,
});

const fotos = computed(() =>
  Object.entries(props?.pokemon?.sprites || {}).filter(
    (item) => item[1] !== null && typeof item[1] === 'string'
  )
);
</script>
