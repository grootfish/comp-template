<template>
  <div :class="classes">
    Hello! {{name}} 
    <span v-html="msg"></span>
    <br>
    {{description}}
  </div>
</template>
<script>
{{#if_equal type 'lego'}}
  import schema from './schema';
{{/if_equal}}
const prefixCls = "{{type}}-{{name}}";

export default {
  name: "{{type}}-{{name}}",
  components: {},
  // 组件props
  props: {
    msg:String
  },
  // 组件 state
  data() {
    return {};
  },
  computed: {
    classes() {
      return [`${prefixCls}`];
    }
  },
  mounted() {}
};
</script>
