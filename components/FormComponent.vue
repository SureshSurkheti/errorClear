<template>
    <v-form ref="formRef" @submit.prevent="handleSave">
      <v-text-field
        v-model="formData.name"
        label="Name"
        :rules="[v => !!v || 'Name is required']"
        required
      ></v-text-field>
      <v-text-field
        v-model="formData.email"
        label="Email"
        :rules="[v => !!v || 'Email is required']"
        required
      ></v-text-field>
      <v-btn type="submit" class="mt-2">Save</v-btn>
    </v-form>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  const emit = defineEmits(['formSaved']);
  const formData = ref({
    name: '',
    email: ''
  });
  
  const formRef = ref(null);
  
  const handleSave = () => {
    if (formRef.value.validate()) {
      emit('formSaved');
    }
  };
  </script>
  
  <style scoped>
  /* Add any specific styles here */
  </style>
  