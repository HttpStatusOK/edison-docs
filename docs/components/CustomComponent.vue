<template>
  <div class="ui-button">
    <el-button @click="redirectToBuyPage" text round bg>立即購買 $DUNDUN</el-button>
    <el-button @click="redirectToDEXTool" text round bg>DEXTool</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToBuyPage() {
      window.open('https://pancakeswap.finance/swap?outputCurrency=0xB1C2f46c457d3F977b0199d3818CdE19b02CE213');
    },
    redirectToDEXTool() {
      window.open('https://dex.guru/token/bsc/0xb1c2f46c457d3f977b0199d3818cde19b02ce213' + new Date().getTime());
    }
  }
}
</script>

<style>
/* 你可以在這裡添加一些 CSS 樣式 */
</style>