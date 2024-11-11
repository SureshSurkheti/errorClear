<template>
    <v-container>
      <v-btn @click="addForm" :disabled="!canAddForm" class="mb-4">Add Form</v-btn>
      <div v-for="(form, index) in forms" :key="index" class="mb-4">
        <FormComponent @formSaved="handleFormSaved" />
      </div>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import FormComponent from '@/components/FormComponent.vue';
  
  const forms = ref([]);
  const canAddForm = ref(true);
  
  const addForm = () => {
    canAddForm.value = false;
    forms.value.push({});
  };
  
  const handleFormSaved = () => {
    canAddForm.value = true;
  };
  </script>
  
  <style scoped>
  /* Add any specific styles here */
  </style>
  