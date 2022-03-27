<script setup lang="ts">
import {
  TransportationMode,
  TransportationModeType,
} from './TransportationMode'
import TransportationModeTitleView from './TransportationModeTitleView.vue'
import MapView from './MapView.vue'
import AllBikeStationsView from '@/application/bikes/AllStationsView.vue'
import AllPublicTransportStationsView from '@/application/publicTransport/AllStationsView.vue'
import { useTransportationMode } from './TransportationModeView.behaviour'
import { Destination } from './Destination'

const properties = defineProps<{
  transportationMode: TransportationMode
  destination: Destination
  collapsed: boolean
}>()

const { collapsed, toggleCollapse } = useTransportationMode(properties)
</script>
<template>
  <div class="card">
    <div class="title" @click="toggleCollapse">
      <TransportationModeTitleView :transportation-mode="transportationMode" />
    </div>
    <div v-if="!collapsed" class="details">
      <MapView
        :destination="destination"
        :transportation-mode-type="transportationMode.type"
      />
      <AllBikeStationsView
        v-if="transportationMode.type === TransportationModeType.BICYCLING"
      />
      <AllPublicTransportStationsView
        v-if="transportationMode.type === TransportationModeType.TRANSIT"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/styles/colors';
.card {
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  background-color: $white;
  border-radius: 12px;
  > * {
    padding: 24px;
  }

  > .title {
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer;
  }
  > .details {
    border-top: 1px solid $primary;
  }
}
</style>
