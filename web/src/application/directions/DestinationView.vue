<script setup lang="ts">
import { Destination } from './Destination'

defineProps<{
  destination: Destination
}>()
</script>
<template>
  {{ destination.name }}
</template>
