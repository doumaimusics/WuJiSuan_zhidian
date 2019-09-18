<template>
  <div class="btn-wrap">
    <div class="upload-cont">
        <div class="addImg" v-for="(item, index) in imageUrls" :key="index">
            <img :src="item.url" v-if="item.type == 1" @click="previewImage(index)">
            <img :src="item.url + '?vframe/jpg/offset/1'" v-else>
            <i class="iconfont iconbofang" v-if="item.type != 1"></i>
            <van-icon class="close" name="close" @click="del(index)" />
        </div>
        <!-- <div class="addImg" v-if="video">
            <video :src="video" loop poster preload="metadata" ref="myVideo" width="100%" height="100%"></video>
        </div> -->
        <el-upload
          class="avatar-uploader"
          action="http://upload.qiniup.com/"
          :data="qiniuForm"
          :accept="'image/*'"
          :show-file-list="false"
          :on-success="uploadSuccess"
          :on-error="uploadError"
          :before-upload="beforeUpload">
            <div class="uploading">
              <i class="iconfont iconpaizhao photo"></i>
              <div class="type">上传图片</div>
            </div>
        </el-upload>
        <el-upload
          class="avatar-uploader"
          action="http://upload.qiniup.com/"
          :data="qiniuForm"
          :accept="'video/*'"
          :show-file-list="false"
          :on-success="uploadSuccess"
          :on-error="uploadError"
          :before-upload="beforeUpload">
            <div class="uploading">
              <i class="iconfont iconpaizhao photo"></i>
              <div class="type">上传视频</div>
            </div>
        </el-upload>
    </div>
    
  </div>
</template>
<script>
import { getQiNiuToken } from '@/config/qiniu'
import { Toast, ImagePreview } from 'vant'
import { filter } from 'minimatch';
import {qiniuUploadFormDomain} from '@/common/utils';
export default {
  name: 'uploading',
  // props: {
  //   type: Number //1图片上传 2视频上传
  // },
  data() {
    return {
      imageUrls:[],
      qiniuForm:{
        key: '',
        token: '',
        domain:qiniuUploadFormDomain//七牛云上传的域地址,类型为String
      },
      instance_before: '',//接收图片预览路径
    };
  },
  mounted () {
    this.getQiNiuToken();//获取token
    this.qiniuForm.key =  new Date().getTime() + "" + Math.floor(Math.random() * 1000)
  },
  methods: {
    //上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传
    beforeUpload(file){
      const isLt2M = file.size / 10240 / 10240 < 20;
      const video = file.type.split('/')
      if(video[0] == 'image'){
        if(this.imageUrls.length >= 3 && !this.imageUrls.filter(obj => obj.type == 2).length){
          this.$toast.fail('上传失败')
          return false
        }else if(this.imageUrls.length >= 3 && this.imageUrls.filter(obj => obj.type == 1).length == 2){
          this.$toast.fail('上传失败')
          return false
        }
      }else if(video[0] == 'video'){
        if(this.imageUrls.filter(obj => obj.type == 1).length >= 3){
          this.$toast.fail('上传失败')
          return false
        }
      }
      
      let size = ''
      for(let item of this.imageUrls){
        size = size + item.size
        if(size / 10240 / 10240 > 20) return false;
      }
      if (!isLt2M) {
        this.$toast.fail('上传附件大小不能超过20MB!')
      }
      return isLt2M;
    },
    //文件上传成功时的钩子
    uploadSuccess(res, file){
      // console.log(res,file)
    //   this.$previewRefresh();//如果图片是异步生成的，在图片数据更新后调用
      let imageUrl = this.qiniuForm.domain + "/" + res.key
      this.qiniuForm.key =  new Date().getTime() + "" + Math.floor(Math.random() * 1000)
      const video = file.raw.type.split('/')
      // console.log(file.size, 'file')
      if(video[0] == 'image'){
        this.imageUrls.push({
          url: imageUrl,
          size: file.size,
          type: 1,
        })
        // this.$emit('getUploadSuccessUrl', imageUrl, 1)//上传成功后传给父组件
      }else if(video[0] == 'video'){
        if(this.imageUrls.filter(obj => obj.type == 2).length){
          this.imageUrls.forEach(obj => {
            if(obj.type == 2){
              obj.url = imageUrl
              obj.size = file.size
            }
          })
        }else{
          this.imageUrls.push({
            url: imageUrl,
            size: file.size,
            type: 2,
          })
        }
        
        // this.$emit('getUploadSuccessUrl', imageUrl, 2)//上传成功后传给父组件
      }else{
        // this.$emit('getUploadSuccessUrl', '上传失败', 3)//上传成功后传给父组件
        Toast({
          message: '上传失败',
          duration: '2000'
        })
      }
      

      this.$emit('getUploadSuccessUrl', this.imageUrls)
      // console.log(this.imageUrls,'this.imageUrls')
    },
    //文件上传失败时的钩子
    uploadError(){
    //   this.$message.error('上传图片失败');
    },
    // //删除图片
    // deleteImg(item,index){
    //   this.imageUrls.splice(index,1);
    //   this.$emit('getUploadSuccessUrl',this.imageUrls)//删除图片后重新传给父组件
    // },
    /**
     * 删除图片视频
     * @param idx 下标
     */
    del(idx){
        this.imageUrls.splice(idx, 1)
        this.$emit('getUploadSuccessUrl', this.imageUrls)
    },
    // 预览图片
    previewImage (index) {
        let arr = []
        for(let item of this.imageUrls){
          if(item.type == 1){
            arr.push(item.url)
          }
        }
        this.instance_before = ImagePreview({
            images: arr,
            startPosition: index,
            onClose () {
                // 监听关闭事件
                arr = []
            }
        })
    },
    //获取token
    getQiNiuToken(){
      getQiNiuToken().then(res => {
        if(res.data.status == 10000){
          this.qiniuForm.token = res.data.data
        }
      })
    },
  },

};
</script>
<style lang='less' scoped>
.btn-wrap{
  .tip{
    font-size: 12px;
    color: #999;
    line-height: 17px;
    position: relative;
    top: 6px;
  }
  .upload-cont {
        padding: 18px 0 4px 0;
        text-align: left;
        display: flex;
        flex-wrap: wrap;
        
        .addImg,.avatar-uploader{
            width: 90px;
            height: 90px;
            margin-bottom: 20px;
            margin-right: 12px;
            background: @pageBg-color;
            border-radius: 4px;
            position: relative;
            img {width:100%;height: 100%;display: block;}
            .close {
                font-size: 18px;
                position: absolute;
                right: -4px;
                top: -4px;
                color: #FF5736;
            }
            .iconbofang {
                font-size: 20px;
                left: calc( 45px - 10px );
                top: calc( 45px - 10px );
                position: absolute;
                color: @gray-color;
            }
        }
        .van-uploader {
            width: 90px;
            height: 90px;
            line-height: 90px;
            border: 1px solid #EDEDED;
            border-radius: 4px;
            margin-bottom: 20px;
            margin-right: 20px;
            text-align: center;
            .van-icon {
                color:@gray-color;
            }
        }
    }

  .uploading{
    width: 90px;
    height: 90px;
    border-radius: 4px;
    border: 1px solid #EDEDED;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;
    .type {
      font-size: 12px;
      color: #999;
    }
  }
  .photo{
    color:@gray-color;
    font-size: 23px;
  }
}
</style>