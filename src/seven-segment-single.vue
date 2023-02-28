<style lang="less">
.seven-segment-display {
  display: inline-block;
  position: relative;
  span {
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 1.5em;
    font-size: 1em;
    color: rgba(0,0,0,0);
    overflow: hidden;
  }
  svg {
    height: 1em;
  }
  path{
    fill: currentColor;
    opacity: .1;
    transition: .5s ease-out;
  }
  &[data-num="0"] path[n*="0"],
  &[data-num="1"] path[n*="1"],
  &[data-num="2"] path[n*="2"],
  &[data-num="3"] path[n*="3"],
  &[data-num="4"] path[n*="4"],
  &[data-num="5"] path[n*="5"],
  &[data-num="6"] path[n*="6"],
  &[data-num="7"] path[n*="7"],
  &[data-num="8"] path[n*="8"],
  &[data-num="9"] path[n*="9"] {
    opacity: 1;
  }
}
</style>
<!-- <template>
  <div :class="rootClass" :data-num="formattedNum">
      <span v-if="!disableSelect">{{ formattedNum === 'NaN' ? '' : formattedNum }}</span>
      <svg viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg">
          <path pins="0" n="02356789" d="M 9.545 0 L 8.727 2.182 L 2.209 2.182 L 0.027 1.364 Q 0.274 0.376 1.191 0.059 A 2.369 2.369 0 0 1 1.391 0 L 9.545 0 Z"/>
          <path pins="1" n="01234789" d="M 10.909 9.545 L 9.273 7.909 L 9.273 2.182 L 10.091 0 Q 11.078 0.247 11.395 1.164 A 2.369 2.369 0 0 1 11.455 1.364 L 11.455 9 L 10.909 9.545 Z"/>
          <path pins="2" n="013456789" d="M 9.273 11.727 L 10.909 10.091 L 11.455 10.636 L 11.455 18.273 Q 11.208 19.26 10.291 19.577 A 2.369 2.369 0 0 1 10.091 19.636 L 9.273 17.455 L 9.273 11.727 Z"/>
          <path pins="3" n="0235689" d="M 8.727 17.455 L 9.545 19.636 L 1.364 19.636 Q 0.376 19.39 0.059 18.473 A 2.369 2.369 0 0 1 0 18.273 L 2.182 17.455 L 8.727 17.455 Z"/>
          <path pins="4" n="0268" d="M 2.182 16.909 L 0 17.727 L 0 10.636 L 0.545 10.091 L 2.182 11.727 L 2.182 16.909 Z"/>
          <path pins="5" n="045689" d="M 0 1.909 L 2.182 2.727 L 2.182 7.909 L 0.545 9.545 L 0 9 L 0 1.909 Z"/>
          <path pins="6" n="2345689" d="M 2.182 8.727 L 9.273 8.727 L 10.364 9.818 L 9.273 10.909 L 2.182 10.909 L 1.091 9.818 L 2.182 8.727 Z"/>
      </svg>
  </div>
</template> -->
<script lang="ts">
import { h, ref, watch, defineComponent } from 'vue';
import { formatSingleDigit, rootClass } from './utils'
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
    const formattedNum = ref('')
    watch(
      () => props.value,
      function(value: string | number | undefined) {
        formattedNum.value = formatSingleDigit(value || 0)
      },
      {
        immediate: true,
      }
    )
    return () => {
      const numForSelect = props.disableSelect ? null : h('span', {}, formattedNum.value === 'NaN' ? '' : formattedNum.value)
      return h('div', {
        class: rootClass,
        'data-num': formattedNum.value,
      }, [
        numForSelect,
        h('svg', {
          viewBox: '0 0 15 20',
          xmlns: 'http://www.w3.org/2000/svg',
          innerHTML: `<path pins="0" n="02356789" d="M 9.545 0 L 8.727 2.182 L 2.209 2.182 L 0.027 1.364 Q 0.274 0.376 1.191 0.059 A 2.369 2.369 0 0 1 1.391 0 L 9.545 0 Z"/>
          <path pins="1" n="01234789" d="M 10.909 9.545 L 9.273 7.909 L 9.273 2.182 L 10.091 0 Q 11.078 0.247 11.395 1.164 A 2.369 2.369 0 0 1 11.455 1.364 L 11.455 9 L 10.909 9.545 Z"/>
          <path pins="2" n="013456789" d="M 9.273 11.727 L 10.909 10.091 L 11.455 10.636 L 11.455 18.273 Q 11.208 19.26 10.291 19.577 A 2.369 2.369 0 0 1 10.091 19.636 L 9.273 17.455 L 9.273 11.727 Z"/>
          <path pins="3" n="0235689" d="M 8.727 17.455 L 9.545 19.636 L 1.364 19.636 Q 0.376 19.39 0.059 18.473 A 2.369 2.369 0 0 1 0 18.273 L 2.182 17.455 L 8.727 17.455 Z"/>
          <path pins="4" n="0268" d="M 2.182 16.909 L 0 17.727 L 0 10.636 L 0.545 10.091 L 2.182 11.727 L 2.182 16.909 Z"/>
          <path pins="5" n="045689" d="M 0 1.909 L 2.182 2.727 L 2.182 7.909 L 0.545 9.545 L 0 9 L 0 1.909 Z"/>
          <path pins="6" n="2345689" d="M 2.182 8.727 L 9.273 8.727 L 10.364 9.818 L 9.273 10.909 L 2.182 10.909 L 1.091 9.818 L 2.182 8.727 Z"/>`
        })
      ])
    }
  },
})


</script>