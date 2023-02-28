<template>
  <SevenSegmentSingle
    v-for="(num, index) in numList"
    :key="index"
    :value="num"
    :disable-select="disableSelect"
  />
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import SevenSegmentSingle from './seven-segment-single.vue'
import { formatNumbersToSingleDigitList } from './utils'
const props = defineProps({
  value: {
    type: [String, Number],
    default: undefined
  },
  disableSelect: {
    type: Boolean,
    default: false,
  }
})
const numList = ref(['0'])
watch(
  () => props.value,
  function(value: string | number | undefined) {
    numList.value = formatNumbersToSingleDigitList(value)
  },
  {
    immediate: true,
  }
)

</script>