
<template>
  <ConfigProvider :locale="zhCN">
    <router-view />
  </ConfigProvider>
</template>
<script setup lang="ts">
console.log('my config env: ', import.meta.env);
</script>
