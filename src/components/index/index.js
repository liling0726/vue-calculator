import CalItem from '../item/index.vue'
import CalShow from '../show/index.vue'
import calData from '../../data/calculator'
export default {
  name: 'calculator',
  components: {
    CalItem,
    CalShow
  },
  data: () => {
    return {
      title: '计算器demo',
      calData,
      showData: ''
    }
  },
  methods: {
    calculatorClick (itemData, e) {
      if (itemData.isOpera) {
        switch (itemData.value) {
          case 'AC': //清空数据
            this.showData = ''
            this.expressionData = ''
            break
          case '+/-'://正负数转换
            this.showData = -this.showData
            this.expressionData = this.showData
            break
          case '%'://百分号
            this.showData = parseFloat(this.showData) / 100
            this.expressionData = this.showData
            break
          case '=':
            if (!this.isOpera || !this.hasMoreNumber) return
            this.showData = eval(this.expressionData)
            this.expressionData = ''
            this.isOpera = false
            this.hasMoreNumber = false
            break
          default://加减乘除
            this.showData += itemData.name
            this.expressionData += itemData.value
            this.isOpera = true//已经进行了操作符
            break
        }
        return
      }
      //等号之后在进行输入操作的时候置空
      if (!this.expressionData) {
        this.showData = ''
      }
      if (this.isOpera) {
        this.hasMoreNumber = true
      }
      this.showData += itemData.name
      this.expressionData += itemData.value

    }
  },
  created() {
    this.expressionData = ''
  }
}
