<template>
  <view class="info-main">
    <view class="info-item">
      <view class="item-title">车牌种类</view>
      <view
        @click="toCarType"
        class="content"
      >
        <input
          :value="optionText"
          type="text"
          disabled
          placeholder="请选择车牌种类"
          placeholder-class="placeholder-class"
        >
        <image
          class='arrow-right'
          mode='widthFix'
          src=''
        ></image>
      </view>
    </view>

    <view class="info-item">
      <view class="item-title">车牌号码</view>
      <view class="content">
        <view @click="choosePro">
          <text>{{proName}}</text>
          <image
            class='arrow-down'
            src=""
          ></image>
        </view>

        <input
          class='input-class'
          v-model="vehicle"
          @input="checkUpcase"
          type="text"
          maxlength="7"
          placeholder="请输入车牌号码"
          placeholder-class="placeholder-class"
        >
        <image
          v-if="vehicle"
          @click="clearInput('vehicle')"
          mode='widthFix'
          class="clear"
          src=""
        ></image>
      </view>
    </view>

    <view class="info-item">
      <view class="item-title">联系电话</view>
      <view class="content">
        <input
          v-model="phone"
          @input="phone = onlyNo(phone)"
          maxlength="11"
          :disabled="onlyRead"
          type="number"
          placeholder="请输入手机号码"
          placeholder-class="placeholder-class"
        >

        <image
          v-if="phone"
          @click="clearInput('phone')"
          class="clear"
          mode='widthFix'
          src=""
        ></image>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      proName: "桂",
      proNameTmp: "桂",
      optionText: "",
      phone: "",
      carType: {}, // 号牌种类{item, code}
      vehicle: "", // 车牌号

      vehicleShow: false, // 清空input
      phoneShow: false, // 清空手机输入
      onlyRead: false, // input禁用
    }
  },
  methods: {
    validate() {
      let self = this;
      let plateNumRegNewEng = /^([A-Z]{1}(([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))/;
      let plateNumReg = /^([A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1})$/;
      console.log(
        self.vehicle.length == 7 && !plateNumRegNewEng.test(self.vehicle),
        self.vehicle.length == 6 && !plateNumReg.test(self.vehicle)
      );
      let cellPhoneReg = 11 && /^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/;
      if (
        self.optionText === "" ||
        self.optionText === undefined ||
        self.optionText === null
      ) {
        uni.showToast({
          title: "请选择号牌种类",
          icon: "none",
          duration: 2000,
          mask: true
        });

        return false;
      }
      if (
        !(
          (self.vehicle.length == 7 && !plateNumRegNewEng.test(self.vehicle)) ||
          (self.vehicle.length == 6 && !plateNumReg.test(self.vehicle))
        )
      ) {
        uni.showToast({
          title: "请输入正确的车牌号码",
          icon: "none",
          duration: 2000,
          mask: true
        });

        return false;
      }
      if (!cellPhoneReg.test(self.phone)) {
        uni.showToast({
          title: "请输入正确的手机号码",
          icon: "none",
          duration: 2000,
          mask: true
        });

        return false;
      }
      return true;
    },
    checkUpcase(e) {
      let plate = e.detail.value;
      console.log(e.detail.value);
      plate = plate
        .replace(/[\u4E00-\u9FA5]/g, "")
        .toUpperCase()
        .trim();
      console.log(e.detail.value);
      console.log("checkUpcase", plate);
      setTimeout(() => {
        this.vehicle = plate;
      }, 10);
      return plate;
    },
    clearInput(val) {
      console.log("clearIn");
      this[val] = "";
    },
    onlyNo(val) {
      return val.replace(/[^\d]/g, "");
    }
  }
}
</script>
