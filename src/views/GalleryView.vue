<template>
  <div id="section-gallery">
    <h1>Galería</h1>
    <ListPokemon :list="list" />
    <paginationComponent
      :pagination="pagination"
      @navigatePage="listar($event)"
      :page="page"
      :totalPage="totalPage"
    />
    <LoadingComponent v-if="loading" />
  </div>
</template>
<script setup>
import { onMounted, ref, computed } from "vue";
import axios from "axios";
import ListPokemon from "@/components/sections/gallery/ListPokemon.vue";
import LoadingComponent from "@/components/common/Loading.vue";
import paginationComponent from "@/components/common/Pagination.vue";
import { propsToAttrMap } from "@vue/shared";

const list = ref([]);
const pagination = ref({
  count: 0,
  next: null,
  previous: null,
});
const page = ref(null);
const loading = ref(false);

onMounted(() => {
  listar();
});

const totalPage = computed(() => Math.round(pagination.value.count / 12))

const listar = (url) => {
  url = url || "https://pokeapi.co/api/v2/pokemon/?limit=12";
  let [ruta, query] = url.split("?");
  let params = new URLSearchParams(query);
  page.value = (params.get("offset") || 0) / 12 + 1;
  loading.value = true;
  axios.get(url).then((resp) => {
    list.value = resp.data.results;
    pagination.value = resp.data;
    buscar().then(() => {
      loading.value = false;
    });
  });
};

const buscar = async () => {
  const peticiones = [];
  list.value.map((item, index) => {
    peticiones.push(
      axios.get(item.url).then((resp) => {
        item.data = resp.data;
      })
    );
  });

  return await Promise.all(peticiones);
};
</script>
