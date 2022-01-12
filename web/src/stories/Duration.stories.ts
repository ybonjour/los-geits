import Duration from '../components/directions/Duration.vue'

export default {
  title: 'Directions/Duration',
  component: Duration,
};

const Template = (args: object) => ({
  components: { Duration },
  setup() {
    console.log('args', args);
    return { ...args };
  },
  template: '<duration duration-in-seconds="600" icon="walking" :isActive="isActive" />',
});

export const Active = Template.bind({})
// @ts-ignore
Active.args = {
  isActive: true
}

export const Inactive = Template.bind({})
// @ts-ignore
Inactive.args = {
  isActive: false
}
