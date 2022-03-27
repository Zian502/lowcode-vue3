<template>
  <a-layout class="basicLayout-wrap">
    <a-layout>
      <a-layout class="basicLayout-content">
        <!-- content -->
        <a-layout-content>
          <!-- router-view -->
          <template v-if="routeMeta.hiddenWrap">
            <router-view v-slot="{ Component }">
              <component :is="Component" />
            </router-view>
          </template>
          <a-card v-else>
            <router-view v-slot="{ Component }">
              <component :is="Component" />
            </router-view>
          </a-card>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
  const router = useRouter();
  const routeMeta = computed(() => router.currentRoute.value.meta);
</script>
<style lang="less" scoped>
  .basicLayout-wrap {
    height: 100vh;
    overflow: hidden;
    .basicLayout-content {
      height: calc(100vh - 80px);
      overflow-y: auto;
      margin: 0;
      padding: 24px;
      background: '#F0F1F4';
    }
  }
</style>
