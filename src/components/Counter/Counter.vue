<script setup lang="ts">
import { ref } from 'vue';

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
  <button class="flex items-center text-xl text-primary/90 rounded-lg border-2 p-1 border-primary/40"
    @click="increment">
    pedrocoins: {{ count }}
  </button>
</template>
