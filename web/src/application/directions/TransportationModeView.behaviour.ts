import { TransportationMode } from './TransportationMode'
import { Destination } from './Destination'
import { ref, Ref } from 'vue'

export interface TransportationModeViewProperties {
  transportationMode: TransportationMode
  destination: Destination
  collapsed: boolean
}

interface TransportationModeViewContract {
  collapsed: Ref<boolean>
  toggleCollapse: () => void
}

export const useTransportationMode = (
  properties: TransportationModeViewProperties
): TransportationModeViewContract => {
  const collapsed = ref(properties.collapsed)
  const toggleCollapse = () => {
    collapsed.value = !collapsed.value
  }
  return {
    collapsed,
    toggleCollapse,
  }
}
