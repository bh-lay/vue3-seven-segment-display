import type { App } from 'vue'
import _SevenSegmentDisplay from './seven-segment-display.vue'

const SevenSegmentDisplay = Object.assign(_SevenSegmentDisplay, {
  install: (app: App) => {
    app.component('seven-segment-display', _SevenSegmentDisplay)
  }
})

export default SevenSegmentDisplay
