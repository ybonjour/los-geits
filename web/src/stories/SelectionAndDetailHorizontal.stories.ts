import SelectionAndDetailHorizontal from '../components/layouts/SelectionAndDetailHorizontal.vue'

export default {
  title: 'Layouts/SelectionAndDetailHorizontal',
  component: SelectionAndDetailHorizontal
}

const Template = (args: object) => ({
  components: {SelectionAndDetailHorizontal},
  setup() {
    return {...args}
  },
  template: `
    <selection-and-detail-horizontal>
      <template v-slot:selection>Selection</template>
      <template v-slot:detail>Detail</template>
    </selection-and-detail-horizontal>`
})

export const Default = Template.bind({})
