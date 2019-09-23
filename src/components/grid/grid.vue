<template>
  <div class="mytable" id="mytable">
    <button @click="sendUrl()">axios</button>
  <Row>
  <Col span="12">
  <input type="file" id="file0">
  <Button type="info" @click="fun(0)">确定</Button>
  </Col>
  <Col span="12">
  <input type="file" id="file1">
  <Button type="info" @click="fun(1)">确定</Button>
  </Col>
  </Row>
    <Row>
      <Col span="8">
      <Card style="height:390px">
        <div style="text-align:center">
          <video id="video0" :src="videoSrc0" muted controls width="100%" height="360px">video</video>
        </div>
      </Card>
      </Col>
      <Col span="4">
      <Row>
      <cartablea></cartablea>
      </Row>
      <Row>
      <Col
      span="12">
      <Button type="info" @click="distinguish(0)">识别</Button>
      </Col>
      <Col
      span="12">
      <Button type="success" @click="adopt(0)">通过</Button>
      </Col>
      </Row>
      </Col>
      <Col span="8">
      <Card style="height: 390px">
        <div style="text-align:center">
           <video id="video1" :src="videoSrc1" muted controls width="100%" height="360px">video</video>
        </div>
      </Card>
      </Col>
      <Col span="4">
      <Row>
      <cartableb></cartableb>
      </Row>
      <Row>
      <Col
      span="12">
      <Button type="info" @click="distinguish(1)">识别</Button>
      </Col>
      <Col
      span="12">
      <Button type="success" @click="adopt(1)">通过</Button>
      </Col>
      </Row>
      </Col>
    </Row>
    <br />
    <Row>
  <Col span="12">
  <input type="file" id="file2">
  <Button type="info" @click="fun(2)">确定</Button>
  </Col>
  <Col span="12">
  <input type="file" id="file3">
  <Button type="info" @click="fun(3)">确定</Button>
  </Col>
  </Row>
    <Row>
      <Col span="8">
      <Card style="height: 390px">
        <div style="text-align:center">
           <video id="video2" :src="videoSrc2" muted controls width="100%" height="360px">video</video>
        </div>
      </Card>
      </Col>
      <Col span="4">
      <Row>
      <cartablec></cartablec>
      </Row>
      <Row>
      <Col
      span="12">
      <Button type="info" @click="distinguish(2)">识别</Button>
      </Col>
      <Col
      span="12">
      <Button type="success" @click="adopt(2)">通过</Button>
      </Col>
      </Row>
      </Col>
      <Col span="8">
      <Card style="height: 390px">
        <div style="text-align:center">
           <video id="video3" :src="videoSrc3" muted controls width="100%" height="360px">video</video>
        </div>
      </Card>
      </Col>
      <Col span="4">
      <Row>
      <cartabled></cartabled>
      </Row>
      <Row>
      <Col
      span="12">
      <Button type="info" @click="distinguish(3)">识别</Button>
      </Col>
      <Col
      span="12">
      <Button type="success" @click="adopt(3)">通过</Button>
      </Col>
      </Row>
      </Col>
    </Row>
    <div>
    <canvas id="canvas" width="524" height="368" display="none" style="display:none">
    </canvas>
  </div>
  </div>
</template>
<script charset="utf-8">
import cartablea from '@/components/table/tablea'
import cartableb from '@/components/table/tableb'
import cartablec from '@/components/table/tablec'
import cartabled from '@/components/table/tabled'
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'imgcv',
      'getUserInfo'
    ]),
    adopt(index) {
      if(index === 0){
        var video = document.getElementById('video0');
      }
      if(index === 1){
        var video = document.getElementById('video1');
      }
      if(index === 2){
        var video = document.getElementById('video2');
      }
      if(index === 3){
        var video = document.getElementById('video3');
      }
      video.play()
    },

    toImage(index) {
      if(index === 0){
        var video = document.getElementById('video0');
      }
      if(index === 1){
        var video = document.getElementById('video1');
      }
      if(index === 2){
        var video = document.getElementById('video2');
      }
      if(index === 3){
        var video = document.getElementById('video3');
      }
      var canvas = document.getElementById('canvas');
      console.log('视频尺寸：'+video.style.width+'*'+video.style.height);
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      console.log(canvas.width);
      console.log(canvas.height);
      var ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0,canvas.width,canvas.height);
      var base64 = canvas.toDataURL('images/png');
       //upload(base64)
    },
    sendUrl () {
      var video = document.getElementById('video0');
      var canvas = document.getElementById('canvas');
      console.log('视频尺寸：'+video.style.width+'*'+video.style.height);
      canvas.width = video.videoWidth/2;
      canvas.height = video.videoHeight/2;
      console.log("dsssd")
      console.log(video.videoWidth)
      console.log(canvas.width);
      console.log(canvas.height);
      var ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0,video.videoWidth,video.videoHeight,0,0,video.videoWidth/2,video.videoHeight/2);
      
      
       
      var base64 = canvas.toDataURL('images/png');
　　　　// 如果图片需要formData格式,就自己组装一下,主要看后台需要什么参数
/*
      var width = video.videoWidth;
     var height = video.videoHeight;
      var scale = width / height;
      var width1 = 720;
      var height1 = parseInt(width1 / scale);
      //var canvas = $("#cans");
      canvas.width = width1;
      canvas.height = height1;*/
      //var ctx = canvas.getContext('2d');
      //ctx.drawImage(video,0,0,width,height,0,0,width1,height1);
        //var cropStr = canvas.toDataURL("image/jpeg",0.7)

　　　    const formData = new FormData()
        //console.log(base64.length)
　　　　 formData.append('base64', base64)
　　　　 formData.append('userId', 123)
　　　　 formData.append('pathName', 'pdf')
       // this.$options.methods.imgCompress(base64,{quality: 0.2})
　　/*　　this.$axios({
　　　　　　url: '/api/helloworld',
　　　　　　method: 'post',
　　　　　　data: base64
   
　　　　}).then(res => {
　　　　　　if (res.code && res.data) {

　　　　　　}
　　　　})*/
        this.imgcv(base64,'A')
　　},
  imgCompress(path,obj){   //path是指上传的图片，obj是压缩的品质，越低越模糊
            let _this = this  //这里的this 是把vue的实例对象指向改变为_this 
            var img = new Image();
            img.src = path.src;
            img.onload = function(){
                var that = this;  //这里的this 是把img的对象指向改变为that 
                // 默认按比例压缩
                var w = that.width,
                    h = that.height,
                    scale = w / h;
                w = obj.width || w;
                h = obj.height || (w / scale);
                var quality = 0.7;  // 默认图片质量为0.7
                //生成canvas
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                // 创建属性节点
                var anw = document.createAttribute("width");
                anw.nodeValue = w;
                var anh = document.createAttribute("height");
                anh.nodeValue = h;
                canvas.setAttributeNode(anw);
                canvas.setAttributeNode(anh);
                ctx.drawImage(that, 0, 0, w, h);
                // 图像质量
                if(obj.quality && obj.quality <= 1 && obj.quality > 0){
                    quality = obj.quality;
                }
                // quality值越小，所绘制出的图像越模糊
                var base64 = canvas.toDataURL('image/jpeg', quality);
                
                // 回调函数返回base64的值
               /* var urlFile = _this.convertBase64UrlToBlob(base64)  //这个地方的处理是为了把压缩的base64转化为对象，获得压缩后图片的大小size，方便对压缩后的图片再次进行判断；
                console.log(urlFile)
                if(urlFile.size/1024 > 1025){
                    _this.$msgbox("图片过大，请重新上传图片")
                }else{
                    _this.partitionBase = base64.split(",")[1]
                    _this.imgType ="."+urlFile.type.split("/")[1]
                }*/
            }
        },

//将base64码转化为file（Blob）
        //此处函数对压缩后的base64经过处理返回{size: "", type: ""} 
        convertBase64UrlToBlob(urlData){
            var arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], {type:mime});
        },
    fun(index) {
      if(index===0){
        var file = document.getElementById('file0').files[0]
        var url = URL.createObjectURL(file)
        this.videoSrc0=url
      }
      if(index===1){
       var file = document.getElementById('file1').files[0]
        var url = URL.createObjectURL(file)
        this.videoSrc1=url
      }
      if(index===2){
        var file = document.getElementById('file2').files[0]
        var url = URL.createObjectURL(file)
        this.videoSrc2=url
      }
      if(index===3){
        var file = document.getElementById('file3').files[0]
        var url = URL.createObjectURL(file)
        this.videoSrc3=url
      }
    },
    distinguish(index) {
      if(index===0){
        let myVideo = document.getElementById("video0");
        myVideo.pause()
        this.$options.methods.toImage(index)

      }
      if(index===1){
        let myVideo = document.getElementById("video1");
        myVideo.pause()
        this.$options.methods.toImage(index)
      }
      if(index===2){
        let myVideo = document.getElementById("video2");
        myVideo.pause()
        this.$options.methods.toImage(index)
      }
      if(index===3){
        let myVideo = document.getElementById("video3");
        myVideo.pause()
        this.$options.methods.toImage(index)
      }
    },
    getdata() {
      var m = document.getElementById("mytable")
      alert(m)

      /* this.$axios.get('/test').then(function (response) {
        console.log(response)
      })
        .catch(function (error) {
          console.log(error)
        })*/
    }
    },
    components: {
      cartablea,
      cartableb,
      cartablec,
      cartabled
    },
  data() {
    return {
    src:'',
    htmlUrl: '',
    videoSrc0:'',
    videoSrc1:'',
    videoSrc2:'',
    videoSrc3:'',
    }
  },
  mounted() {
    this.$nextTick(() => {
    })
  },
  watch: {
    '$route'() {
      //this.$destroy('VideoPlayer')
    }
  }
}
</script>
<style scoped>
.mytable /deep/ .ivu-table {
  font-size: 21px;
}
</style>
