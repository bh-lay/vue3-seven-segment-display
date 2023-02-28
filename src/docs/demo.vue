<style lang="less">
  .screen {
    margin-bottom: 20px;
    padding: 0.4em 0.6em;
    line-height: 0;
    border-radius: 8px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5) inset;
    & > * {
      vertical-align: top;
    }
  }
  .custom-text{
    display: inline-block;
    height: 1em;
    line-height: 1em;
    vertical-align: top;
  }
</style>

<template>
  <div class="screen" style="background: #2c2c35; text-align: center; font-size: 60px; color: #f7fcfc;">
    <SevenSegmentDisplay :value="hours" />
    <span class="custom-text">∶</span>
    <SevenSegmentDisplay :value="minutes" />
    <span class="custom-text">∶</span>
    <SevenSegmentDisplay :value="seconds" />
    <div style="padding-top:1em;font-size: 0.4em; color:#8f96a3">
      <SevenSegmentDisplay :value="year" />
      <span class="custom-text">/</span>
      <SevenSegmentDisplay :value="date" />
      <span class="custom-text">/</span>
      <SevenSegmentDisplay :value="month" />
    </div>
  </div>
  <div class="screen" style="background: #90b34d; font-size: 26px; color: #172136;">
    <SevenSegmentDisplay value="0123456789" :disable-select="true"  />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SevenSegmentDisplay from '../seven-segment-display.vue'

function leftPad(num: number) {
  return (num < 10 ? '0' : '') + num
}
const year = ref('0000')
const month = ref('0000')
const date = ref('00')
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')
setInterval(() => {
  const now = new Date()
  year.value = leftPad(now.getFullYear())
  month.value = leftPad(now.getMonth() + 1)
  date.value = leftPad(now.getDate())
  hours.value = leftPad(now.getHours())
  minutes.value = leftPad(now.getMinutes())
  seconds.value = leftPad(now.getSeconds())
}, 200)
</script>

