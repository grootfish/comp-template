<template>
    <div :class="classes">
        Hello! {{name}} <br/>
        {{description}}
    </div>
</template>
<script>


const prefixCls = '{{type}}-{{name}}'

export default {
  name: '{{type}}-{{name}}',
  components: {},
  // 组件props
  props: {
    
  },
  // 组件 state
  data () {
    return {
     
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`
      ]
    }
  },
  mounted () {

  }
}
</script>
