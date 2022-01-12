import SelectionAndDetailVertical from '../components/layouts/SelectionAndDetailVertical.vue'

export default {
  title: 'Layouts/SelectionAndDetailVertical',
  component: SelectionAndDetailVertical
}

const Template = (args: object) => ({
  components: {SelectionAndDetailVertical},
  setup() {
    return {...args}
  },
  template: `
    <selection-and-detail-vertical>
      <template v-slot:selection>Selection</template>
      <template v-slot:detail>Detail</template>
    </selection-and-detail-vertical>`
})

export const Default = Template.bind({})
