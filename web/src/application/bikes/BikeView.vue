<script setup lang="ts">
import { batteryLevel } from './Bike.formatters'
import { Bike } from '@/application/bikes/Bike'

defineProps<{
  bike: Bike
}>()
</script>
<template>{{ bike.name }} {{ batteryLevel(bike) }}</template>
