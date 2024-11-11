const onInputRegist = () => {
    if (isDisabled.value) return false;
    isDisabled.value = true;
    inputModified.value = true;
  
    // Emit an event to the parent
    emit('input-modified', inputModified.value);
  
    props.setData.unshift({
      base: {
        syobun_date_henko: props.setData[props.setData.length - 1].base.syobun_date_henko,
        memo_henko: props.setData[props.setData.length - 1].base.memo_henko,
        henko_count: Number(nuwCount.value) + 1,
        henko_count_limit: 999,
      },
    });
  };

  

  <FormsRequestChange
  ref="changeFormRef"
  v-if="change_details"
  :setData="change_details"
  @input-modified="handleInputModified"
/>


const handleInputModified = (modified) => {
  inputModified.value = modified;
};

const setSaveData = async () => {
  const json = utils.copyArray({
    kihon: basic_details.value,
    henkou: change_details.value ? change_details.value[0] : null,
    kanryou: completion_details.value || null,
    teiki: regular_details.value ? regular_details.value[0] : null,
    bikou: note_details.value || null,
  });

  await saveDataToServer(json);

  if (inputModified.value) {
    changeFormRef.value.isDisabled = false;
    inputModified.value = false; // Reset after saving
  }
};
