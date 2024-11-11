import { ref, onMounted, watch } from 'vue';

const isDisabled = ref(false);
const inputModified = ref(false);

onMounted(() => {
  const currentCount = props.setData[0].base.henko_count;
  nuwCount.value = currentCount;
  if (props.setData[0].base.henko_count_limit <= currentCount) {
    isDisabled.value = true;
  }
});

const onInputRegist = () => {
  if (isDisabled.value) return false;
  isDisabled.value = true;
  inputModified.value = true;

  props.setData.unshift({
    base: {
      syobun_date_henko: props.setData[props.setData.length - 1].base.syobun_date_henko,
      memo_henko: props.setData[props.setData.length - 1].base.memo_henko,
      henko_count: Number(nuwCount.value) + 1,
      henko_count_limit: 999,
    },
  });
};





watch(() => props.setData, (newVal) => {
  // Reactivate the button if data is changed and saved
  if (newVal[0].base.henko_count > nuwCount.value) {
    isDisabled.value = false;
    inputModified.value = false;
  }
});


#inside the save button
const setSaveData = async () => {
  const json = utils.copyArray({
    kihon: basic_details.value,
    henkou: change_details.value ? change_details.value[0] : null,
    kanryou: completion_details.value || null,
    teiki: regular_details.value ? regular_details.value[0] : null,
    bikou: note_details.value || null,
  });

  // Assuming an API call or save logic
  await saveDataToServer(json);

  // Reset the button state after successful save
  if (inputModified.value) {
    changeFormRef.value.isDisabled = false;
  }
};
