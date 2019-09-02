<template>
  <div>
    <div v-for="(item) in this.currentPictures.pictures" :key="item.id" class="main">
      <div>
        <img :src="item.url"/>
        <div class="checkbox">
          <el-checkbox v-model="item.choosed" @change="clickCheckbox()" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["pictures", "value"],
  data() {
    return {
      currentValue: this.value,
      currentPictures: this.pictures
    };
  },
  methods: {
    clickCheckbox() {
      let a = this.currentPictures.pictures;
      this.$emit("input", a);
    }
  },
  mounted() {

  }
};
</script>

<style scoped>
.main{
    display: inline-block;
    margin:10px;
}
.checkbox{
    position: relative;
    top:-120px;
    left:-45px;
    z-index: 1;
}
img{
    width:117px;
    height:117px;
}
</style>