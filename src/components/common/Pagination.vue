<template>
  <div class="d-flex justify-content-between justify-content-sm-center">
    <div class="pe-2">
      <button
        class="btn btn-primary"
        v-if="props.pagination.previous"
        @click="previous()"
      >
        Anterior
      </button>
    </div>
    <div class="ps-2">
      <button
        class="btn btn-primary"
        v-if="props.pagination.next"
        @click="next()"
      >
        Siguiente
      </button>
    </div>
  </div>
  <div class="text-white text-center mt-2">
    Mostrando página <strong>{{ page }}</strong> de <strong>{{ totalPage }}</strong>
  </div>
</template>

<script setup>
const emit = defineEmits(["navigatePage"]);

const props = defineProps({
  pagination: Object,
  page: Number,
  totalPage: Number,
});

const next = () => {
  emit("navigatePage", props.pagination.next);
};

const previous = () => {
  emit("navigatePage", props.pagination.previous);
};
</script>
