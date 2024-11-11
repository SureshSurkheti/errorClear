<!-- <template>
    <div>
      <form @submit.prevent="onSubmit">
        <div>
          <label for="email">Email</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div v-if="errorMessage">{{ errorMessage }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Auth } from 'aws-amplify';
  
  const email = ref('');
  const password = ref('');
  const errorMessage = ref('');
  
  const onSubmit = async () => {
    try {
      const user = await Auth.signIn(email.value, password.value);
      console.log('Login successful', user);
      errorMessage.value = '';
    } catch (error) {
      console.error('Login failed', error);
      errorMessage.value = 'Login failed: ' + error.message;
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style> -->
  

  <!-- <template>
    <div>
      <form @submit.prevent="onSubmit">
        <div>
          <label for="email">Email</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div v-if="authStore.errorMessage">{{ authStore.errorMessage }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/auth';
  
  const authStore = useAuthStore();
  const email = ref('');
  const password = ref('');
  
  const onSubmit = () => {
    authStore.login(email.value, password.value);
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
   -->