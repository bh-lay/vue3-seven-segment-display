<style lang="less">
  html,body {
    margin: 0;
    padding: 0;
  }
  .banner {
    padding: 60px 20px 160px;
    background: #e5ebf5;
    border-bottom: 1px solid #d4dbe8;
    .link {
      text-align: center;
      font-size: 14px;
    }
  }
  .banner-inner {
    width: 100%;
    max-width: 420px;
    margin: auto;
  }
  .docs {
    width: 800px;
    margin: -130px auto 200px;
    border-radius: 10px;
    background: #22252a;
    color: #e2e4e9;
    font-size: 14px;
    & > div {
      padding: 2em 3em 10em;
    }
    h1 {
      font-size: 3.5em
    }
    a {
      color: #709966
    }
    table {
      border: none;
      border-collapse: collapse;
      th, td {
        border-bottom: 1px solid #363c45;
        padding: 0.5em 1em;
      }
      th {
        text-align: left;
        font-size: 16px;
      }
      td:nth-child(1) {
        white-space: nowrap;
        color: #ffc66d
      }
      td:nth-child(3),
      td:nth-child(4) {
        white-space: nowrap;
      }
    }
  }
</style>

<template>
  <div class="banner">
    <div class="banner-inner">
      <Demo />
    </div>
    <div class="link">
      <strong>Github: </strong><a href="https://github.com/bh-lay/vue3-seven-segment-display">vue3-seven-segment-display</a>
    </div>
  </div>

  <div class="docs">
    <div v-html="html" v-highlight></div>
  </div>
</template>

<script setup lang="ts">
import Demo from './demo.vue'
import { marked } from 'marked'

import readme from '../../README.md?raw'

const html = marked(readme)
</script>

