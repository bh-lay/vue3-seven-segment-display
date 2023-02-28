<style lang="less">
  body {
    background: #e5ebf5;
  }
  .pad {
    width: 550px;
    margin: 100px auto 100px;
    padding: 60px 30px 280px;
    border-radius: 14px;
    background: #e7e6e4;
    box-shadow: 1px 1px 2px #fff inset, -1px -1px 1px #888 inset,
      1px 1px 2px rgba(0, 0, 0, 0.8), 10px 10px 40px rgba(0, 0, 0, 0.15);
  }
  .screen {
    margin-bottom: 20px;
    padding: 0.3em 0.5em;
    line-height: 0;
    border-radius: 4px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5) inset;
    & > * {
      vertical-align: top;
    }
  }
  .screen-1 {
    background: #90b34d;
    font-size: 46px;
    color: #172136;
  }
  .screen-2 {
    background: #2c2c35;
    font-size: 70px;
    color: #f7fcfc;
    & > span{
      display: inline-block;
      height: 70px;
      line-height: 70px;
    }
  }
  .pure-screen {
    color: #47536b;
    font-size: 100px
  }
</style>

<template>
  <div class="pad">
    <div class="screen screen-1">
      <SevenSegmentDisplay value="0123456789" />
    </div>
    <div class="screen screen-2">
      <SevenSegmentDisplay :value="hours" />
      <span>∶</span>
      <SevenSegmentDisplay :value="minutes" />
      <span>∶</span>
      <SevenSegmentDisplay :value="seconds" />
    </div>
    <div class="pure-screen">
      <SevenSegmentDisplay :value="1024" :disable-select="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SevenSegmentDisplay from '../seven-segment-display.vue'

function leftPad(num: number) {
  return (num < 10 ? '0' : '') + num
}
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')
setInterval(() => {
  const date = new Date()
  hours.value = leftPad(date.getHours())
  minutes.value = leftPad(date.getMinutes())
  seconds.value = leftPad(date.getSeconds())
}, 200)
</script>

