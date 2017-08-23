<template>
  <div class="fileUploadWrapper" :class="hasImg === true ? '':'border'">
      <img src="" alt="" id="img" class="el-icon-plus avatar-uploader-icon avatar"/>
      <input type="file" prop="hasImg" class="fileUpload" accept="image/png,image/jpg,image/jpeg" @change="change($event)">
  </div>
</template>

<script>
export default {
  data () {
    return {
        hasImg: false
    }
  },
  methods : {
    change( event ) {
        let image = document.getElementById('img'); //预览对象
        this.clip(event , {
          resultObj : image,
          aspectRatio : 1,
          compressRaTio : 10 //调整压缩比例 10代表90% 20代表80% ......
        })
        this.hasImg = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fileUploadWrapper{
    position: relative;
    overflow: hidden;
    width: 200px;
    height: 200px;
    line-height: 200px; 
    margin: 50px auto 0px auto; 
  }
  .fileUploadWrapper.border{
    border: 1px dashed #666666;   
  }
  .fileUploadWrapper .fileUpload{
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    width:100%;
    margin-top: 0px;
    opacity: 0;
  }
  .avatar-uploader{
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 60px;
    color: #8c939d;
    text-align: center;
  }
  .avatar {
    width: 100%;
    height: 100%;
    line-height: 200px;
    display: block;
  }
</style>
