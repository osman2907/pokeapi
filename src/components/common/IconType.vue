<template>
  <div>
    <img :src="src" style="width: 20px" />
  </div>
</template>

<script setup>
import IconsType from '@/utils/types.js'
import { computed } from 'vue';

const props = defineProps({
  type: String,
});

const src = computed(() => IconsType[props.type])
</script>