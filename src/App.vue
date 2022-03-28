
<template>
  <ConfigProvider>
    <router-view />
  </ConfigProvider>
</template>
<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';
console.log('my config env: ', import.meta.env);
</script>
