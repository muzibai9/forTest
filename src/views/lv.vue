<template>
  <div>
    <div>
      <div  style="display:inline-block">
      <el-checkbox @change="allChoosed()"></el-checkbox>
      </div>
      <p  style="display:inline-block">当前选中的为{{value}}</p>
    </div>
    <PictureSelect :pictures="{pictures}" @input="handleDo"></PictureSelect>
    <router-view></router-view>
  </div>
</template>
<script>
import PictureSelect from "./child.vue";

export default {
  components: {
    PictureSelect
  },
  data() {
    return {
      value: 0,
      choosed: false,
      pictures: [
        {
          id: "1",
          choosed: false,
          name: "foo",
          url:
            "https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"
        },
        {
          id: "2",
          name: "foo",
          choosed: false,
          url:
            "https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"
        },
        {
          id: "3",
          name: "foo",
          choosed: false,
          url:
            "https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"
        }
      ]
    };
  },
  methods: {
    handleDo(ii) {
      const a = [];
      ii.forEach(item => {
        if (item.choosed) {
          a.push(item.id);
        }
      });
      this.value = a.length;
    },
    allChoosed(){
      this.pictures.forEach(item => {
        item.choosed = !item.choosed;
      })
      this.choosed = !this.choosed
      if (this.choosed){
        this.value = this.pictures.length
      }else{
        this.value = 0
      }
    }
  }
};
</script>

