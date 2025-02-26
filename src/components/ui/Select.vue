<template>
  <div class="relative h-max" v-click-outside="handleClickOutside">
    <div
      :class="`relative rounded-md duration-200 border px-2.5 py-1.5 text-lg cursor-pointer min-h-[42px] ${isOpen ? 'border-blue-400' : 'border-gray-400'}`"
      @click="handleToggle"
    >
      {{ modelValue }}
      <img
        src="../../assets/icons/arrow-down.svg"
        alt=""
        :class="`absolute right-3 top-1/2 -translate-y-1/2 w-3 duration-200 ${isOpen ? 'rotate-180' : ''}`"
      />
    </div>
    <div
      :class="`absolute w-full top-[calc(100%_+_8px)] left-0 rounded-md border overflow-hidden cursor-pointer duration-200 ${isOpen ? 'border-gray-400' : 'border-transparent'} bg-white z-[4] shadow-md`"
      :style="{
        height: listHeight,
      }"
    >
      <div
        v-for="(item, idx) in options"
        :key="idx"
        :class="`px-2 py-1 duration-200 hover:bg-blue-50 ${modelValue === item.value ? 'bg-blue-100' : ''}`"
        @click="handleSelect(item)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { ISelectOption } from '../../types/select';

interface IProps {
  modelValue?: string;
  options: ISelectOption[];
}

interface IEmits {
  (e: 'update:modelValue', data: string): void;
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();

const isOpen = ref(false);

const listHeight = computed(() => (isOpen.value ? `${32 * props.options.length}px` : '0px'));

const handleToggle = () => {
  isOpen.value = !isOpen.value;
};

const handleSelect = (data: ISelectOption) => {
  handleToggle();
  emit('update:modelValue', data.value);
};

const handleClickOutside = () => {
  isOpen.value = false;
};
</script>

<style scoped></style>
