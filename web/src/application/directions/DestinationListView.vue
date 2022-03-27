<script setup lang="ts">
import { Destination } from './Destination'
import DestinationView from './DestinationView.vue'

defineProps<{
  destinations: Destination[]
  onDestinationSelected: (destination: Destination) => void
  selectedDestination: Destination | null
}>()
</script>

<template>
  <ul>
    <li
      v-for="destination in destinations"
      :key="destination.identifier"
      :class="{
        active: destination.identifier === selectedDestination?.identifier,
      }"
      @click="() => onDestinationSelected(destination)"
    >
      <DestinationView :destination="destination" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import '../../assets/styles/colors';
ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  > li {
    padding: 0;
    margin: 0 10px 0 10px;
    cursor: pointer;
    list-style: none;
    flex-grow: 1;
    min-width: 50px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > li.active {
    border-bottom: 2px solid $accent;
    color: $accent;
    font-weight: bold;
  }
}
</style>
