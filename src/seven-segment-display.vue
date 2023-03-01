<script lang="ts">
import { ref, h, watch, defineComponent } from 'vue';
import SevenSegmentSingle from './seven-segment-single.vue'
import { formatNumbersToSingleDigitList } from './utils'
export default defineComponent({
  props: {
    value: {
      type: [String, Number],
      default: undefined
    },
    disableSelect: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, context) {
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
    return () => {
      return numList.value.map((num, index) => {
        return h(
          SevenSegmentSingle,
          {
            key: index,
            value: num,
            disableSelect: props.disableSelect
          }
        )
      })
    }
  }
})

</script>