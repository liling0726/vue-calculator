export default {
  props: ['itemData'],
  methods: {
    itemClick: () => {
      console.log(props.itemData)
    }
  }
}
