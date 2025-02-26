<template>
  <div class="flex flex-col gap-1">
    <div class="relative">
      <input
        class="base-input border border-gray-400 w-full rounded-md outline-none block focus:border-blue-400 text-lg py-1.5 px-2.5"
        :type="convertedType"
        :maxLength="maxLength"
        :value="modelValue"
        @input="handleChange"
        @blur="handleBlur"
      />
      <button
        v-if="type === 'password'"
        @click="handleShowPass"
        class="absolute w top-1/2 right-2.5 -translate-y-1/2 cursor-pointer hover:bg-gray-100 px-1"
      >
        <img :src="showPass ? ShowIcon : HideIcon" alt="" class="w-4 h-4" />
      </button>
    </div>
    <div v-if="error" class="text-[red] text-[11px]">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, type InputTypeHTMLAttribute } from 'vue';
import ShowIcon from '../../assets/icons/eye.svg';
import HideIcon from '../../assets/icons/eye-off.svg';

interface IProps {
  type?: InputTypeHTMLAttribute;
  maxLength?: string;
  modelValue?: string;
  errorMessage?: string;
  error?: boolean;
}

interface IEmits {
  (e: 'update:modelValue', data: string): void;
  (e: 'blur'): void;
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'text',
});

const emit = defineEmits<IEmits>();

const showPass = ref(false);

const convertedType = computed(() =>
  props.type === 'password' ? (showPass.value ? 'text' : props.type) : props.type
);

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

const handleShowPass = () => (showPass.value = !showPass.value);

const handleBlur = () => emit('blur');
</script>

<style scoped></style>
