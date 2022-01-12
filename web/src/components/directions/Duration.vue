<template>
  <div class="duration-container">
    <div class="icon">
      <font-awesome-icon :icon="icon"/>
    </div>
    <div class="text" :class="{active: isActive}">
      {{ formatDuration(durationInSeconds) }}
    </div>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    durationInSeconds: {
      type: Number,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    formatDuration: function (durationInseconds: number): string {
      const minutes = Math.ceil(durationInseconds / 60)

      if (minutes < 60) {
        return `${minutes} Minute`
      }

      const hours = Math.floor(minutes / 60)
      const minutesOfHour = minutes % 60

      return `${hours} Stund u ${minutesOfHour} Minute`
    }
  },
}
</script>

<style scoped>
.duration-container {
  border: 1px solid #AAA;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  padding: 20px;
}

.text {
  text-align: center;
  padding: 5px;
}

.active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
