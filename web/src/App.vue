<script setup lang="ts">
import { useMap, useMapKey } from '@/application/directions/MapView.behaviour'
import { provide } from 'vue'

provide(useMapKey, useMap)
</script>

<template>
  <router-view />
</template>

<style lang="scss">
@import 'assets/styles/global.scss';
</style>
