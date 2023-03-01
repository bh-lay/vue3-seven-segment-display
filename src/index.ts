import type { App, Plugin } from 'vue'
import _SevenSegmentDisplay from './seven-segment-display.vue'
import _SevenSegmentSingle from './seven-segment-single.vue'

export const SevenSegmentDisplay = _SevenSegmentDisplay
export const SevenSegmetSingle = _SevenSegmentSingle

export default {
  install(app: App,  ...options: any[]): any {
    console.log('options', options)
    app.component('SevenSegmentDisplay', _SevenSegmentDisplay)
    app.component('SevenSegmentSingle', _SevenSegmentSingle)
  }
} as Plugin

