<template>
  <div class="nearby_box">
    <baidu-map
      class="bm-view"
      ak="u7G2TDa7t4msVkVrHWPDf0Mkw8GjY2m1"
      :center="center"
      :zoom="zoom"
      @ready="handler"
    >
      <bm-marker
        :position="{lng: center.lng, lat: center.lat}"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
      >
        <bm-label
          content="我爱杭州"
          :labelStyle="{color: 'red', fontSize : '14px'}"
          :offset="{width: -35, height: 30}"
        />
      </bm-marker>
    </baidu-map>
    <!-- 附近 -->
    <div class="nearby_main">
      <div class="media_box">
        <div class="media_title">附近好友</div>
        <van-cell-group>
          <van-cell>
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">
                雾计算产品经理
                <van-icon name="medel-o" />
              </div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <van-icon name="location-o" class="location" />
              <span class="range">300米以内</span>
            </div>
            <van-button icon="comment-o" type="info" size="small">发消息</van-button>
          </van-cell>
          <van-cell>
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">
                雾计算产品经理
                <van-icon name="medel-o" />
              </div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <van-icon name="location-o" class="location" />
              <span class="range">300米以内</span>
            </div>
            <van-button icon="comment-o" type="info" size="small">发消息</van-button>
          </van-cell>
        </van-cell-group>
        <div class="more_box">
          <van-icon name="add-o" />
          <span>查看更多</span>
        </div>
      </div>
      <div class="media_box">
        <div class="media_title">附近的人</div>
        <van-cell-group>
          <van-cell>
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">
                雾计算产品经理
                <van-icon name="medel-o" />
              </div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <div class="label_box">
                <van-tag round type="primary">3个共同好友</van-tag>
                <van-tag round type="primary">同行</van-tag>
              </div>
              <van-icon name="location-o" class="location" />
              <span class="range">300米以内</span>
            </div>
            <van-button icon="comment-o" type="info" size="small">发消息</van-button>
          </van-cell>
          <van-cell>
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">
                雾计算产品经理
                <van-icon name="medel-o" />
              </div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <div class="label_box">
                <van-tag round type="primary">3个共同好友</van-tag>
                <van-tag round type="primary">同行</van-tag>
              </div>
              <van-icon name="location-o" class="location" />
              <span class="range">300米以内</span>
            </div>
            <van-button icon="comment-o" type="info" size="small">发消息</van-button>
          </van-cell>
        </van-cell-group>
        <div class="more_box">
          <van-icon name="add-o" />
          <span>查看更多</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
export default {
  components: {
    BaiduMap
  },
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3
    };
  },
  created() {
    this.getCurrentPosition();
  },
  methods: {
    handler({ BMap, map }) {
      // console.log(BMap, map);
      // this.center.lng = 120.169395;
      // this.center.lat = 30.192765;
      // this.zoom = 15;
      let _this = this;
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function(r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            // var mk = new BMap.Marker(r.point);
            // map.addOverlay(mk);
            // map.panTo(r.point);
            // alert("您的位置：" + r.point.lng + "," + r.point.lat);
           
            _this.center.lng = r.point.lng;
            _this.center.lat = r.point.lat;
            _this.zoom = 15;
          } else {
            alert("failed" + this.getStatus());
          }
        },
        { enableHighAccuracy: true }
      );
    },
    /**
     *
     */
    getCurrentPosition() {
      // console.log(navigator)
      navigator.geolocation.getCurrentPosition(function(position) {
        // var logi = position.coords.longitude;
        // var lati = position.coords.latitude;
        console.log(position);
        // console.log(lati)
      });
    }
  }
};
</script>

<style lang="less" scoped>
.nearby_box {
  .bm-view {
    width: 100%;
    height: 200px;
  }
  .nearby_main {
    width: 100%;
    height: calc(100vh - 263px);
    .media_box {
      border-bottom: 4px solid #f5f5f5;
      .media_title {
        font-size: 14px;
        color: #666;
        margin-top: 16px;
        position: relative;
        padding-left: 20px;
        &::before {
          content: "";
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(102, 146, 255, 1);
          position: absolute;
          top: 8px;
          left: 10px;
        }
      }
      .van-cell-group {
        .van-cell {
          font-size: 16px;
          color: #333;
          padding: 10px 30px 10px 78px;
          .van-cell__title {
            position: relative;
            .position {
              font-size: 10px;
              color: #999;
              .van-icon {
                color: #85cb35;
                position: relative;
                top: 2px;
                left: 4px;
              }
            }
            .avator {
              position: absolute;
              top: 4px;
              left: -60px;
            }
            .van-tag {
              padding: 2px 4px;
              background: rgba(102, 146, 255, 0.1);
              border-radius: 4px;
              color: #6692ff;
              margin-right: 8px;
            }
            .location {
              font-size: 12px;
              color: #6692ff;
            }
            .range {
              font-size: 12px;
              color: #666;
            }
          }
          .van-button {
            top: 20px;
            border-radius: 4px;
          }
        }
      }
      .more_box {
        text-align: center;
        .van-icon {
          color: #6692ff;
          font-size: 16px;
          top: 2px;
        }
        span {
          font-size: 14px;
          color: #666;
          margin-left: 4px;
        }
      }
    }
  }
}
</style>