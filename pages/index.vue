<!-- <template>
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  </template>
  
  <script setup>
  import LoginForm from '../components/LoginForm.vue';
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style> -->

  <template>
    <v-container>
      <DatePickerComponent v-model="dateValue" />
      <v-btn @click="handleSearch" class="mt-2">Search</v-btn>
      <v-btn @click="handleClear" class="mt-2 ml-2">Clear</v-btn>
  
      <v-alert v-if="showError" type="error" class="mt-2">
        {{ date_empty_rules[0](dateValue) }}
      </v-alert>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import DatePickerComponent from '@/components/DatePickerComponent.vue';
  import { date_empty_rules } from '@/utils/validate.js';
  
  const dateValue = ref('');
  const showError = ref(false);
  
  const handleSearch = () => {
    if (!dateValue.value) {
      showError.value = true;
    } else {
      showError.value = false;
      // Additional search logic can go here
    }
  };
  
  const handleClear = () => {
    dateValue.value = ''; // Reset the date input field
    showError.value = false; // Clear the validation error message
  };
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  
  
  
  
  
  <!-- <script setup>
  import LoginForm from '../components/LoginForm.vue';
  </script> -->
  
  <!-- <style scoped>
  </style>
   -->