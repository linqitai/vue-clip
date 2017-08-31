<template>
  <croppa v-model="croppa">
  </croppa>
</template>

<script>
import 'vue-croppa/dist/vue-croppa.css'
import Vue from 'vue'
import Croppa from 'vue-croppa'

Vue.use(Croppa)
export default {
  data() {
    return {
      croppa: {}
    }
  },
  methods: {
    uploadCroppedImage() {
      this.myCroppa.generateBlob((blob) => {
        // write code to upload the cropped image file (a file is a blob)
      }, 'image/jpeg', 0.8) // 80% compressed jpeg file
      $.alert('generateBlob')
    },
    upload() {
      if (!this.croppa.hasImage()) {
        $.alert('no image to upload')
        return
      }
      this.croppa.generateBlob((blob) => {
        var fd = new FormData()
        fd.append('file', blob)
        fd.append('other', 'blahblahblah')
        $.ajax({
          url: 'http://www.xxx.com/api/upload',
          data: fd,
          type: 'POST',
          processData: false,
          contentType: false,
          success: function (data) {
            alert(data)
          }
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fileUploadWrapper {
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 200px;
  line-height: 200px;
  margin: 50px auto 0px auto;
}

.fileUploadWrapper.border {
  border: 1px dashed #666666;
}

.fileUploadWrapper .fileUpload {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  margin-top: 0px;
  opacity: 0;
}

.avatar-uploader {
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
