// import { defineStore } from 'pinia';
// import { Auth } from 'aws-amplify';

// export const useAuthStore = defineStore('auth', {
//   state: () => ({
//     user: null,
//     errorMessage: '',
//   }),
//   actions: {
//     async login(email, password) {
//       try {
//         const user = await Auth.signIn(email, password);
//         this.user = user;
//         this.errorMessage = '';
//       } catch (error) {
//         this.user = null;
//         this.errorMessage = 'Login failed: ' + error.message;
//       }
//     },
//     async logout() {
//       try {
//         await Auth.signOut();
//         this.user = null;
//       } catch (error) {
//         console.error('Logout failed', error);
//       }
//     },
//     async checkAuth() {
//       try {
//         const user = await Auth.currentAuthenticatedUser();
//         this.user = user;
//       } catch {
//         this.user = null;
//       }
//     },
//   },
// });
