<template>
    <v-container>
      <v-menu
        v-model="isOpen"
        :activator="`#menu-${id}`"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
      >
        <template v-slot:activator="{ props }">
          <v-text-field
            v-bind="props"
            :id="`menu-${id}`"
            :label="label"
            v-model="internalDateValue"
            placeholder="YYYY-MM-DD"
            :append-inner-icon="mdiCalendarBlank"
            @click:append="() => isOpen = true"
            class="date_picker_input"
            :rules="isValidate ? date_empty_rules : []"
            :disabled="disable ?? false"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="internalDateValue"
          @input="() => (isOpen = false)"
        ></v-date-picker>
      </v-menu>
    </v-container>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits, watch } from 'vue';
  import { mdiCalendarBlank } from '@mdi/js';
  import { date_empty_rules } from '@/utils/validate.js';
  
  const props = defineProps({
    modelValue: String,
    id: {
      type: String,
      default: 'date-picker'
    },
    disable: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Select a Date'
    }
  });
  
  const emit = defineEmits(['update:modelValue']);
  const isOpen = ref(false);
  const internalDateValue = ref(props.modelValue || '');
  
  watch(
    () => props.modelValue,
    (newValue) => {
      internalDateValue.value = newValue || '';
    }
  );
  
  watch(internalDateValue, (newValue) => {
    emit('update:modelValue', newValue);
  });
  </script>
  

  