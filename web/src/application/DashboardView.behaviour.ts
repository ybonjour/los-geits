import { onMounted, ref, Ref } from 'vue'
import { Destination } from '@/application/directions/Destination'
import { fetchDestinations } from '@/application/directions/DirectionsAPI'

interface DashboardContract {
  destinations: Ref<Destination[]>
  selectedDestination: Ref<Destination | null>
  selectDestination: (destination: Destination) => void
}
export const useDashboard = (): DashboardContract => {
  const destinations = ref<Destination[]>([])
  onMounted(async () => {
    destinations.value = await fetchDestinations()
  })

  const selectedDestination = ref<Destination | null>(null)
  const selectDestination = (destination: Destination) => {
    selectedDestination.value = destination
  }

  return {
    destinations,
    selectedDestination,
    selectDestination,
  }
}
