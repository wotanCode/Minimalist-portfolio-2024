<script setup lang="ts">
import { ref } from "vue";

interface CounterProps {
  initialValue: number;
}

const props = defineProps<CounterProps>();

const count = ref(props.initialValue);

function increment() {
  count.value++;
}
</script>

<template>
  <button
    class="flex items-center rounded-lg border-2 border-primary/40 p-1 text-xl text-primary/90"
    @click="increment"
  >
    pedrocoins: {{ count }}
  </button>
</template>
