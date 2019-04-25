<template>
  <div id="app">
     <img class="greet" src="https://sitecdn.zcy.gov.cn/zcy-front-other-upload/cab6279591fc585bac108ae5b7402294.gif" alt="">
    <{{type}}-{{name}} />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less">
/* 引入confront */
@import "https://cdn.zcy.gov.cn/zcy-font/front-business-icon.css";
@import "../src/style/theme.less";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 40px;
  .greet{
    width:60%;
    margin: 0 auto;
  }
}
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

*:before,
*:after {
  box-sizing: border-box;
}

body {
  font-family: @font-family;
  font-size: @font-size-small;
  line-height: @line-height-base;
  color: @text-color;
  background-color: @body-background;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, form, fieldset, legend, input, textarea, p, blockquote, th, td, hr, button, article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  margin: 0;
  padding: 0;
}

button, input, select, textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

input::-ms-clear, input::-ms-reveal {
  display: none;
}

a {
  color: @link-color;
  background: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color @transition-time ease;

  &:hover {
      color: @link-hover-color;
  }

  &:active {
      color: @link-active-color;
  }

  &:active,
  &:hover {
      outline: 0;
      text-decoration: none;
  }

  &[disabled] {
      color: #ccc;
      cursor: @cursor-disabled;
      pointer-events: none;
  }
}

code,
kbd,
pre,
samp {
  font-family: @code-family;
}

ul,li{
  list-style: none;
}
</style>
