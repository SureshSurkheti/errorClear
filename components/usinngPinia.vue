#stores/useAppStore.js 

import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
  state: () => ({
    inputModified: false, // State to track input changes
    isDisabled: false,    // State to manage the button's disabled status
  }),
  actions: {
    setInputModified(value) {
      this.inputModified = value;
    },
    setIsDisabled(value) {
      this.isDisabled = value;
    },
  },
});


#plugins/pinia.js 

import { createPinia } from 'pinia';

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
});


#change.vue 

import { useAppStore } from '@/stores/useAppStore';
import { ref, onMounted } from 'vue';

export default {
  setup(props) {
    const appStore = useAppStore();
    const isDisabled = ref(false);

    onMounted(() => {
      if (props.setData[0].base.henko_count_limit <= props.setData[0].base.henko_count) {
        appStore.setIsDisabled(true);
      }
    });

    const onInputRegist = () => {
      if (appStore.isDisabled) return false;
      appStore.setIsDisabled(true);
      appStore.setInputModified(true);

      props.setData.unshift({
        base: {
          syobun_date_henko: props.setData[props.setData.length - 1].base.syobun_date_henko,
          memo_henko: props.setData[props.setData.length - 1].base.memo_henko,
          henko_count: Number(nuwCount.value) + 1,
          henko_count_limit: 999,
        },
      });
    };

    return {
      onInputRegist,
      appStore,
    };
  },
};



##in the parent component

import { useAppStore } from '@/stores/useAppStore';

export default {
  setup() {
    const appStore = useAppStore();

    const setSaveData = async () => {
      const json = {
        kihon: basic_details.value,
        henkou: change_details.value ? change_details.value[0] : null,
        kanryou: completion_details.value || null,
        teiki: regular_details.value ? regular_details.value[0] : null,
        bikou: note_details.value || null,
      };

      await saveDataToServer(json);

      // Reset button state after saving
      if (appStore.inputModified) {
        appStore.setIsDisabled(false);
        appStore.setInputModified(false);
      }
    };

    return {
      setSaveData,
      appStore,
    };
  },
};


#directly use of the appStore in the template 

<v-btn
  @click="onInputRegist"
  variant="flat"
  color="info"
  class="mr-2"
  :disabled="appStore.isDisabled"
>
  手入力
</v-btn>

<v-btn
  variant="flat"
  color="success"
  type="submit"
  :disabled="useAuth.getAuthEdit"
  @click="setSaveData"
>
  保存
</v-btn>

