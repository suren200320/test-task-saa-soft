<template>
  <button :class="className" @click="handleClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

interface IProps {
  class?: string;
}

interface IEmits {
  (e: 'click', event: MouseEvent): void;
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();

const className = twMerge(
  'border border-gray-400 rounded-md outline-none duration-200 block hover:bg-gray-100 text-lg py-1.5 px-2.5 cursor-pointer active:scale-95',
  props.class
);

const handleClick = (e: MouseEvent) => emit('click', e);
</script>

<style scoped></style>
