<style></style>

<template>
  <div class="mainContainer">
    <div class="title">
      <img src="/ret.png" @click="this.$router.push({ path: '/enterpriseDetail',query:{id: this.$route.query['id']}})" style="width: 36px;height: 36px;margin-right: 1.19vw;cursor: pointer;" />
      <span>深圳能源ESG详情</span>
    </div>
    <div class="detailContainer">
      <div class="leftBox">
        <div class="detailView">
          <div style="height: 10.8%; display: flex; margin-bottom: 2rem">
            <img class="iconBox" src="/icon_brief.png" />
            <span class="iconText">发行单位</span>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column">
            <div style="display: flex">
              <div style="display: flex; flex-direction: column">
                <span style="white-space: nowrap" class="briefText">债券名称</span>
                <span
                  style="
                    font-size: 1.6rem;
                    font-family: source-han-sans-simplified-c, sans-serif;
                    white-space: nowrap;
                  "
                >{{showData.bond_name}}</span>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  padding-left: 3rem;
                "
              >
                <span style="white-space: nowrap" class="briefText">代码</span>
                <span
                  style="
                    font-size: 1.6rem;
                    font-family: source-han-sans-simplified-c, sans-serif;
                    white-space: nowrap;
                  "
                >{{showData.bond_code}}</span>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; padding-top: 1rem">
              <span style="white-space: nowrap" class="briefText">到期日</span>
              <span
                style="
                  font-size: 1.6rem;
                  font-family: source-han-sans-simplified-c, sans-serif;
                  white-space: nowrap;
                "
              >{{showData.due_date}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="rightBox">
        <div style="height: 2.5rem; display: flex">
          <div
            id="0"
            class="tabItem"
            :class="tabIndex == 0 ? 'tabItemActive' : ''"
            v-on:click="handleClick"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="25.503999999999905"
              height="24.06933331250002"
              viewBox="0 0 25.503999999999905 24.06933331250002"
              fill="none"
            >
              <path
                id="分组 1"
                fill-rule="evenodd"
                transform="translate(5.81756864903582e-14 -1.5898393712632242e-13)  rotate(0 12.752 12.03466665625)"
                opacity="1"
                d="M1.07 24.07L24.44 24.07C25.02 24.07 25.5 23.59 25.5 23C25.5 22.42 25.02 21.94 24.44 21.94L23.24 21.94L23.24 11.32C23.24 9.87 22.31 8.6 20.93 8.16L16.27 6.68L16.27 3.09C16.27 1.39 14.88 0 13.17 0L5.78 0C4.07 0 2.69 1.39 2.69 3.09L2.69 21.94L1.07 21.94C0.48 21.94 0 22.42 0 23C0 23.59 0.48 24.07 1.07 24.07Z M14.1413 21.9333L14.1413 3.09333C14.1413 2.56333 13.7113 2.13333 13.1813 2.13333L5.78133 2.13333C5.25133 2.13333 4.82133 2.56333 4.82133 3.09333L4.82133 21.9333L14.1413 21.9333Z M16.2667 21.9427L21.1067 21.9427L21.1067 11.3327C21.1067 10.8027 20.7767 10.3527 20.2867 10.1927L16.2667 8.92267L16.2667 21.9327L16.2667 21.9427Z "
              />
            </svg>
            发行单位ESG
          </div>
          <div
            id="1"
            class="tabItem"
            :class="tabIndex == 1 ? 'tabItemActive' : ''"
            v-on:click="handleClick"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="27.864271656568235"
              height="27.952467221956795"
              viewBox="0 0 27.864271656568235 27.952467221956795"
              fill="none"
            >
              <path
                id="分组 1"
                fill-rule="evenodd"
                transform="translate(-4.014566457044566e-13 3.375077994860476e-14)  rotate(0 13.932135828284313 13.976233610978488)"
                opacity="1"
                d="M10.9199 26.676C10.8499 27.096 11.1199 27.496 11.5399 27.576C12.3499 27.726 13.1699 27.796 13.9799 27.796C16.3699 27.796 18.7099 27.156 20.7699 25.946C23.9699 24.116 26.2899 21.086 27.2399 17.536C28.1899 13.996 27.6899 10.236 25.8499 7.06595C25.0099 5.60595 23.8999 4.30595 22.5899 3.24595C22.2499 3.00595 21.7899 3.06595 21.5299 3.38595C21.2699 3.70595 21.3099 4.17595 21.6199 4.44595C22.7799 5.39595 23.7599 6.54595 24.5099 7.84595C26.1399 10.656 26.5899 13.996 25.7499 17.126C24.9099 20.286 22.8399 22.976 19.9999 24.606L19.9899 24.606C17.5299 26.056 14.6299 26.576 11.8199 26.056C11.3999 25.976 10.9999 26.256 10.9199 26.676Z M4.40541 23.9456C4.54541 24.0756 4.73541 24.1556 4.93541 24.1556L4.93541 24.1556C5.25541 24.1556 5.53541 23.9656 5.65541 23.6656C5.77541 23.3656 5.69541 23.0356 5.46541 22.8156C4.57541 21.9856 3.88541 21.1056 3.36541 20.1156C1.72541 17.3056 1.27541 13.9556 2.11541 10.8056C2.96541 7.64555 5.03541 4.95555 7.86541 3.33555C9.91541 2.15555 12.2554 1.59555 14.6054 1.71555C14.8854 1.73555 15.1454 1.59555 15.2954 1.36555C15.4454 1.13555 15.4554 0.835555 15.3354 0.595555C15.2054 0.345555 14.9554 0.185555 14.6854 0.175555C12.0254 0.0355548 9.39541 0.665555 7.09541 1.99555C3.90541 3.82555 1.57541 6.85555 0.625406 10.4056C-0.324594 13.9356 0.175406 17.6956 2.00541 20.8556C2.60541 21.9856 3.39541 22.9956 4.40541 23.9456Z M19.9148 24.479C17.4848 25.909 14.6248 26.409 11.8548 25.899C11.6048 25.859 11.3548 25.909 11.1548 26.049C10.9548 26.189 10.8148 26.409 10.7748 26.649C10.7248 26.889 10.7748 27.139 10.9148 27.339C11.0548 27.549 11.2748 27.679 11.5148 27.729C12.3348 27.879 13.1548 27.949 13.9748 27.949C16.3948 27.949 18.7648 27.299 20.8548 26.079C24.0748 24.229 26.4348 21.169 27.3848 17.569C28.3448 13.999 27.8448 10.189 25.9848 6.98904C25.0948 5.46904 24.0148 4.19904 22.6848 3.12904C22.2848 2.83904 21.7248 2.90904 21.4148 3.28904C21.1048 3.67904 21.1548 4.23904 21.5148 4.56904C22.6648 5.49904 23.6348 6.63904 24.3748 7.91904C25.9848 10.699 26.4248 13.999 25.5948 17.089C24.7648 20.209 22.7248 22.869 19.9248 24.469L19.9148 24.479Z M11.7942 26.2009C11.7542 26.2009 11.7242 26.1909 11.6842 26.2009C11.3842 26.1909 11.1242 26.4109 11.0742 26.7009C11.0242 26.9509 11.1342 27.2009 11.3442 27.3309C11.4142 27.3809 11.4942 27.4109 11.5742 27.4209C14.7042 28.0009 17.9442 27.4309 20.6942 25.8109C23.8542 24.0009 26.1542 21.0109 27.0942 17.4909C28.0342 14.0009 27.5342 10.2709 25.7142 7.14093C24.8842 5.70093 23.7842 4.41093 22.4942 3.36093C22.2242 3.16093 21.8442 3.21093 21.6342 3.47093C21.4242 3.73093 21.4642 4.11093 21.7142 4.33093C22.8942 5.28093 23.8842 6.45093 24.6442 7.77093C26.2942 10.6109 26.7442 13.9909 25.8942 17.1709C25.0442 20.3709 22.9442 23.0909 20.0742 24.7409L20.0742 24.7409C17.5842 26.2109 14.6442 26.7309 11.7942 26.2009Z M5.57 22.7C4.69 21.88 4.02 21.01 3.51 20.05C1.88 17.27 1.43 13.96 2.27 10.85C3.1 7.73 5.14 5.07 7.95 3.47C9.96 2.3 12.27 1.75 14.6 1.87C15.1 1.88 15.51 1.49 15.53 0.99C15.56 0.49 15.18 0.06 14.69 0.02C12.01 -0.12 9.34 0.52 7.02 1.86C3.79 3.71 1.43 6.77 0.47 10.37C-0.48 13.93 0.02 17.74 1.87 20.93C2.48 22.08 3.27 23.1 4.3 24.06C4.47 24.22 4.7 24.31 4.93 24.31C5.06 24.31 5.19 24.28 5.31 24.23C5.66 24.08 5.88 23.73 5.86 23.35C5.85 23.1 5.75 22.87 5.57 22.7Z M3.23028 20.1916C2.39028 18.7516 1.85028 17.1616 1.64028 15.5116C1.44028 13.9216 1.55028 12.3116 1.97028 10.7716C2.82028 7.57158 4.92028 4.84158 7.79028 3.20158C9.86028 2.01158 12.2303 1.44158 14.6103 1.56158C14.9403 1.56158 15.2103 1.30158 15.2303 0.971578C15.2403 0.651578 15.0003 0.361578 14.6703 0.331578C14.4403 0.321578 14.2203 0.311578 13.9903 0.311578L13.9903 0.311578C11.5703 0.311578 9.23028 0.931578 7.17028 2.12158C4.01028 3.93158 1.71028 6.93158 0.770279 10.4516C-0.159721 13.9316 0.330279 17.6516 2.14028 20.7816L2.15028 20.7816C2.73028 21.9016 3.51028 22.8916 4.51028 23.8316C4.69028 24.0016 4.96028 24.0516 5.19028 23.9516C5.42028 23.8416 5.56028 23.6116 5.55028 23.3616C5.55028 23.1916 5.48028 23.0416 5.36028 22.9316C4.45028 22.0816 3.76028 21.1916 3.23028 20.1916Z M14.5195 11.3631C14.8795 11.0131 14.9395 10.4131 14.5795 10.0631L11.9195 7.22307C11.5695 6.86307 10.9695 6.80307 10.6195 7.16307C10.2595 7.51307 10.1995 8.10307 10.5595 8.46307L13.2195 11.3031C13.5795 11.6631 14.1095 11.6631 14.5195 11.3631Z M13.1136 11.4063L13.1136 11.4163C13.3136 11.6163 13.5936 11.7363 13.8836 11.7363L13.8836 11.7363C14.1436 11.7263 14.4036 11.6463 14.6136 11.4863L14.6236 11.4863L14.6336 11.4763C15.0736 11.0363 15.0936 10.3563 14.6936 9.9563L12.0336 7.1163L12.0336 7.1063C11.5936 6.6763 10.9136 6.6463 10.5136 7.0563C10.0736 7.4863 10.0436 8.1663 10.4436 8.5663L13.1136 11.4063Z M14.4263 11.2493C14.7263 10.9393 14.7463 10.4493 14.4763 10.1693L14.4663 10.1693L11.8063 7.3293C11.4963 7.0193 11.0063 6.9893 10.7263 7.2693C10.4163 7.5793 10.3863 8.0793 10.6663 8.3493L10.6663 8.3593L13.3363 11.1993C13.6163 11.4793 14.0563 11.4993 14.4263 11.2493Z M13.283 11.3689C13.633 11.7189 14.223 11.7189 14.583 11.3689L17.423 8.69892C17.783 8.34892 17.783 7.80892 17.483 7.45892C17.133 7.09892 16.533 7.03892 16.183 7.39892L13.343 10.0589C12.983 10.4189 12.923 11.0089 13.283 11.3689Z M17.5976 7.34316C17.1576 6.91316 16.4776 6.88316 16.0776 7.28316L13.2376 9.95316L13.2276 9.95316C13.0276 10.1532 12.9076 10.4232 12.8876 10.7032C12.8676 10.9932 12.9676 11.2732 13.1676 11.4732C13.3776 11.6732 13.6476 11.7832 13.9276 11.7832C14.2176 11.7832 14.4876 11.6732 14.6876 11.4732L17.5276 8.81316L17.5376 8.81316C17.9276 8.42316 17.9576 7.78316 17.6076 7.36316L17.5976 7.34316Z M13.3866 11.2556C13.5366 11.3956 13.7266 11.4756 13.9366 11.4756C14.1366 11.4756 14.3266 11.3956 14.4766 11.2556L14.4766 11.2556L17.3166 8.58557C17.5966 8.31557 17.6166 7.86557 17.3666 7.56557C17.0566 7.25557 16.5666 7.23557 16.2866 7.50557L16.2866 7.51557L13.4466 10.1756C13.3066 10.3256 13.2166 10.5156 13.1966 10.7256C13.1866 10.9156 13.2566 11.1156 13.3866 11.2556Z M26.6054 4.44066L26.6054 4.38066C26.7154 3.91066 26.3654 3.43066 25.8854 3.31066L21.8654 2.54066L21.8654 2.54066C21.3954 2.43066 20.9154 2.78066 20.7954 3.25066L20.7954 3.31066C20.6754 3.79066 21.0354 4.26066 21.5054 4.38066L25.5354 5.15066C26.0054 5.27066 26.4854 4.91066 26.6054 4.44066Z M25.5141 5.23917C25.5841 5.25917 25.6541 5.26917 25.7241 5.26917C25.9141 5.25917 26.0941 5.19917 26.2541 5.08917C26.4741 4.93917 26.6241 4.71917 26.6941 4.45917L26.6941 4.44917L26.6941 4.38917C26.7541 4.13917 26.6941 3.88917 26.5441 3.65917C26.3941 3.44917 26.1641 3.28917 25.9141 3.21917L21.8841 2.44917C21.3841 2.32917 20.8441 2.68917 20.7141 3.22917L20.7041 3.23917L20.7041 3.29917C20.6541 3.55917 20.7041 3.81917 20.8541 4.02917C21.0041 4.24917 21.2341 4.40917 21.4841 4.46917L25.5141 5.23917Z M26.5104 4.36454L26.5104 4.35454C26.5604 4.15454 26.5104 3.93454 26.3904 3.76454C26.2704 3.58454 26.0804 3.45454 25.8704 3.40454L21.8404 2.63454C21.4404 2.53454 21.0104 2.82454 20.8904 3.26454L20.8904 3.32454L20.8904 3.33454C20.8404 3.54454 20.8804 3.75454 21.0104 3.92454C21.1304 4.10454 21.3204 4.23454 21.5304 4.28454L25.5604 5.05454C25.7604 5.10454 25.9804 5.06454 26.1504 4.94454C26.3204 4.81454 26.4504 4.63454 26.5104 4.42454L26.5104 4.36454Z M1.32051 23.9157L5.35051 24.6857C5.82051 24.8057 6.30051 24.4457 6.41051 23.9757L6.41051 23.9157C6.53051 23.4357 6.18051 22.9657 5.70051 22.8457L1.68051 22.0757L1.68051 22.0757C1.21051 21.9557 0.670512 22.3157 0.610512 22.7857L0.610512 22.8457C0.490513 23.3257 0.850513 23.7957 1.32051 23.9157Z M0.518571 22.7748L0.518571 22.8348C0.408571 23.3348 0.758571 23.8648 1.29857 24.0048L5.32857 24.7748C5.39857 24.7948 5.46857 24.7948 5.52857 24.7948L5.52857 24.7948C5.96857 24.7948 6.38857 24.4648 6.50857 23.9948L6.50857 23.9848L6.50857 23.9248C6.56857 23.6748 6.50857 23.4148 6.35857 23.1948C6.20857 22.9748 5.97857 22.8248 5.72857 22.7548L1.69857 21.9848C1.42857 21.9248 1.14857 21.9848 0.928571 22.1448C0.708571 22.2848 0.558571 22.5148 0.518571 22.7748Z M6.32487 23.9599L6.32487 23.8999L6.32487 23.8899C6.37487 23.6899 6.33487 23.4699 6.20487 23.2999C6.08487 23.1199 5.89487 22.9899 5.68487 22.9399L1.65487 22.1699C1.44487 22.1199 1.21487 22.1699 1.03487 22.2999C0.864867 22.4099 0.744867 22.5899 0.704867 22.7899L0.704867 22.8599L0.704867 22.8699C0.604867 23.2699 0.894867 23.7099 1.34487 23.8199L1.34487 23.8199L5.37487 24.5899C5.77487 24.6899 6.20487 24.3999 6.32487 23.9599Z M9.61178 11.4227C9.14178 11.4227 8.78178 11.7827 8.78178 12.2527L8.78178 12.4327C8.78178 12.9027 9.14178 13.2627 9.61178 13.2627L18.3118 13.2627L18.3118 13.2627C18.7918 13.2627 19.1418 12.9027 19.1418 12.4327L19.1418 12.2527C19.1418 11.7827 18.7918 11.4227 18.3118 11.4227L9.61178 11.4227Z M8.62746 12.4286C8.61746 12.6886 8.72746 12.9486 8.90746 13.1286C9.09746 13.3186 9.34746 13.4186 9.60746 13.4086L18.3175 13.4086L18.3175 13.4186C18.8775 13.4186 19.2975 12.9886 19.2975 12.4286L19.2975 12.2486C19.2975 11.6886 18.8775 11.2686 18.3175 11.2686L9.60746 11.2686C9.04746 11.2686 8.62746 11.6886 8.62746 12.2486L8.62746 12.4286Z M9.12782 11.7675C8.99782 11.8975 8.92782 12.0675 8.93782 12.2475L8.93782 12.4275C8.93782 12.8175 9.21782 13.1075 9.60782 13.1075L18.3178 13.1075C18.4978 13.1075 18.6678 13.0375 18.7978 12.9175C18.9278 12.7875 18.9978 12.6075 18.9878 12.4275L18.9878 12.2475C18.9978 12.0675 18.9278 11.8975 18.7978 11.7675C18.6678 11.6375 18.4978 11.5675 18.3178 11.5775L9.60782 11.5775L9.60782 11.5775C9.42782 11.5675 9.25782 11.6375 9.12782 11.7675Z M14.1141 20.5423C14.5841 20.5423 14.9441 20.1823 14.9441 19.7123L14.9441 13.0823C14.9441 12.6123 14.5841 12.2523 14.1141 12.2523L13.9341 12.2523C13.4641 12.2523 13.1041 12.6023 13.1041 13.0823L13.1041 19.6523L13.1041 19.6523C13.1041 20.1023 13.4341 20.4823 13.8741 20.5423L14.1141 20.5423Z M15.1001 19.7071L15.1001 13.0771C15.1001 12.5171 14.6701 12.0971 14.1101 12.0971L13.9301 12.0971C13.3701 12.0971 12.9501 12.5171 12.9501 13.0771L12.9501 19.6471C12.9501 20.1771 13.3401 20.6171 13.8501 20.6971L14.1101 20.6971C14.6701 20.6971 15.1001 20.2671 15.1001 19.7071Z M14.1079 12.4071L13.9279 12.4071C13.7479 12.3971 13.5779 12.4671 13.4479 12.5971C13.3179 12.7271 13.2479 12.8971 13.2579 13.0771L13.2579 19.6471C13.2579 20.0171 13.5279 20.3271 13.8879 20.3871L13.8879 20.3871L14.1079 20.3871C14.2879 20.3871 14.4679 20.3271 14.5979 20.1971C14.7279 20.0671 14.7879 19.8871 14.7879 19.7071L14.7879 13.0771C14.7879 12.8971 14.7179 12.7271 14.5979 12.5971C14.4679 12.4671 14.2879 12.3971 14.1079 12.4071Z M18.3118 17.3973C18.7918 17.3973 19.1418 17.0473 19.1418 16.5773L19.1418 16.3973C19.1418 15.9273 18.7918 15.5673 18.3118 15.5673L9.61178 15.5673C9.14178 15.5673 8.78178 15.9173 8.78178 16.3973L8.78178 16.5773C8.78178 17.0473 9.14178 17.3973 9.61178 17.3973L18.3118 17.3973L18.3118 17.3973Z M8.62749 16.392L8.62749 16.572C8.61749 16.832 8.72749 17.092 8.90749 17.272C9.09749 17.462 9.34749 17.562 9.60749 17.552L18.3175 17.552L18.3175 17.562C18.8775 17.562 19.2975 17.132 19.2975 16.572L19.2975 16.392C19.2975 15.832 18.8775 15.412 18.3175 15.412L9.60749 15.412C9.04749 15.412 8.62749 15.832 8.62749 16.392Z M9.60778 15.721L9.60778 15.721C9.42778 15.711 9.25778 15.781 9.12778 15.911C8.99778 16.041 8.92778 16.221 8.93778 16.401L8.93778 16.571C8.93778 16.961 9.21778 17.251 9.60778 17.251L18.3178 17.251C18.4978 17.251 18.6678 17.181 18.7978 17.061C18.9278 16.931 18.9978 16.751 18.9878 16.571L18.9878 16.391C18.9978 16.211 18.9278 16.041 18.7978 15.911C18.6678 15.781 18.4978 15.711 18.3178 15.721L9.60778 15.721Z "
              />
            </svg>
            所得款用途
          </div>
          <div
            id="2"
            class="tabItem"
            :class="tabIndex == 2 ? 'tabItemActive' : ''"
            v-on:click="handleClick"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="29.333333312500145"
              viewBox="0 0 24 29.333333312500145"
              fill="none"
            >
              <path
                id="分组 1"
                fill-rule="evenodd"
                transform="translate(0 7.105427357601002e-14)  rotate(0 12 14.666666656250001)"
                opacity="1"
                d="M5.03667 21.4933L11.9967 26.1333L18.9567 21.4933C20.4467 20.5033 21.3367 18.8333 21.3367 17.0533L21.3367 4.80333L11.9967 2.73333L2.66667 4.80333L2.66667 17.0533C2.66667 18.8333 3.55667 20.5033 5.03667 21.4933Z M12 29.33L20.44 23.71C22.66 22.22 24 19.73 24 17.05L24 3.74C24 3.11 23.57 2.57 22.96 2.43L12 0L1.04 2.43C0.43 2.57 0 3.11 0 3.74L0 17.05C0 19.73 1.34 22.22 3.56 23.71L12 29.33Z M8.83 14.3667L8.08 18.7267L12 16.6667L15.92 18.7267L15.17 14.3667L18.34 11.2767L13.96 10.6367L12 6.66667L10.04 10.6367L5.66 11.2767L8.83 14.3667Z "
              />
            </svg>
            发行主体信用评级
          </div>
        </div>
        <div class="tabviewContainer">
          <div
            id="WaterPoloBox"
            style="
              position: relative;
              width: 80%;
              height: 80%;
              justify-content: center;
              align-items: center;
              margin: auto;
            "
          >
            <div id="WaterPolo"></div>
            <div
              @click="this.$router.push({path:'/enterpriseDetail',query:{id:this.$route.query['id']}})"
              style="
                position: absolute;
                right: 0px;
                bottom: 0px;
                width: 96px;
                height: 36px;
                color: rgba(0, 99, 247, 1);
                font-size: 24px;
                cursor: pointer;
              "
            >
              更多信息
            </div>
          </div>
          <div
            v-if="tabIndex === 1"
            style="
              position: relative;
              width: 80%;
              height: 80%;
              justify-content: center;
              align-items: center;
              margin: auto;
            "
          >
            <div class="esg_val">
              <div class="e_val">{{e}}</div>
              <div class="s_val">{{s}}</div>
              <div class="g_val">{{g}}</div>
              <div class="val">{{a}}</div>
            </div>
            <div
              style="
                position: absolute;
                right: 0px;
                bottom: 0px;
                width: 144px;
                height: 36px;
                color: rgba(0, 99, 247, 1);
                font-size: 20px;
              "
            >
              <el-link target="_blank" :href="url" style="font-size: 20px;">点击下载文件</el-link>
            </div>
          </div>
          <div
            v-else-if="tabIndex === 2"
            style="
              width: 80%;
              height: 80%;
              justify-content: center;
              align-items: center;
              margin: auto;
            "
          >
            <div class="credit">
              <img
                src="/Bond2.png"
                alt=""
                style="width: 120px; height: 152px; margin-right: 80px"
              />
              <div
                style="color: rgba(0, 182, 103, 1); font-size: 240px; margin: 0"
              >
                {{ this.credit }}
              </div>
              <div
                style="
                  position: absolute;
                  right: 0px;
                  bottom: 0px;
                  height: 36px;
                  color: rgba(0, 99, 247, 1);
                  font-size: 24px;
                "
              >
                评级机构：{{showData.rating_agencies}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import * as echarts from "echarts";
import "echarts-liquidfill";
let urls = {
  'HK01109':'https://yuhuison-1259460701.cos.ap-chengdu.myqcloud.com/bondfiles/2009年华润股份有限公司公司债券募集说明书.pdf',
  'HK00960':'https://yuhuison-1259460701.cos.ap-chengdu.myqcloud.com/bondfiles/2017年重庆龙湖企业拓展有限公司绿色债券(第二期)募集说明书.pdf',
  'SH600196':'https://yuhuison-1259460701.cos.ap-chengdu.myqcloud.com/bondfiles/上海复星高科技(集团)有限公司2021年度第一期中期票据募集说明书.pdf',
  'HK00813':'https://yuhuison-1259460701.cos.ap-chengdu.myqcloud.com/bondfiles/上海世茂股份有限公司2021年度第二期中期票据募集说明书.pdf',
  'HK03900':'https://yuhuison-1259460701.cos.ap-chengdu.myqcloud.com/bondfiles/绿城房地产集团有限公司2022年度第一期中期票据募集说明书.pdf',
  'SH601318':'https://yuhuison-1259460701.cos.ap-chengdu.myqcloud.com/bondfiles/2017年中国平安财产保险股份有限公司资本补充债券募集说明书.pdf',
}
export default {
  setup() {},
  data() {
    return {
      tabIndex: 0,
      esg: 50,
      e: 5,
      s: 6,
      g: 8,
      a: 2,
      credit: "A+",
      url:'http://yuhuison-1259460701.cos.ap-chengdu.myqcloud.com/bondfiles/2009年华润股份有限公司公司债券募集说明书.pdf',
      showData: {

      }
    };
  },
  mounted() {
    axios.get('http://139.159.241.200:8066/%5Ebond/?format=json&bondcode=' + this.$route.query['code']).then((res) => {
      this.$data.showData = res.data[0];
      this.esg = res.data[0]['ESG'];
      this.credit = res.data[0]['rank'];
      this.e = res.data[0]['hjjx'];
      this.s = res.data[0]['sszr'];
      this.g = res.data[0]['zzgl'];
      this.url = urls[this.$route.query['id']];
      this.a = ((parseFloat(this.e) + parseFloat(this.s) + parseFloat(this.g))/3).toFixed(1);
      document.getElementById('WaterPolo').setAttribute('_echarts_instance_', '')
      this.draw();
    });

  },
  methods: {
    draw() {
      let option = {
        title: {
          // 标题
          text: "ESG",
          textStyle: {
            // 标题的样式
            color: "#1dc87d", // 字体颜色
            fontFamily: "Microsoft YaHei", // 字体
            fontSize: '2rem',
            fontWeight: "400",
            align: "center", // 文字的水平方式
            baseline: "middle",
            position: "inside",
            verticalAlign: "middle", // 文字的垂直方式
          },
          left: "center", // 定位
          top: "20%",
        },
        series: [
          {
            type: "liquidFill",
            radius: "95%",
            waveAnimation: true,
            data: [
              {
                value: this.esg / 12,
                direction: "left",
                itemStyle: {
                  normal: {
                    color: "#1dc87d",
                  },
                },
              },
            ],
            outline: {
              // show: true , //是否显示轮廓 布尔值
              borderDistance: 1, // 外部轮廓与图表的距离 数字
              itemStyle: {
                borderColor: "#1dc87d", // 边框的颜色
                borderWidth: 3, // 边框的宽度
                // shadowBlur: 5 , //外部轮廓的阴影范围 一旦设置了内外都有阴影
                // shadowColor: '#000' //外部轮廓的阴影颜色
              },
            },
            itemStyle: {
              opacity: 0.9, // 波浪的透明度
              shadowBlur: 0, // 波浪的阴影范围
            },
            backgroundStyle: {
              color: "#fff", // 图表的背景颜色
            },
            label: {
              // 数据展示样式
              show: true,
              formatter: "" + this.esg,
              color: "#000",
              insideColor: "#fff",
              fontSize: '4rem',
              fontWeight: 400,
              align: "center",
              baseline: "middle",
              position: "inside",
            },
          },
        ],
      };
      var myChart = echarts.init(document.getElementById("WaterPolo"));
      myChart.setOption(option);
    },
    handleClick(index) {
      console.log(index.target.id);
      if (index.target.id && index.target.id != "") {
        this.$data.tabIndex = index.target.id - "0";
      }
      if(this.$data.tabIndex == 0){
        document.getElementById('WaterPoloBox').style.display = 'block';
      }else{
        document.getElementById('WaterPoloBox').style.display = 'none';
      }
      
    },
  },
};
</script>
<style scoped>
.credit {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  width: 100%;
  height: 100%;
}
.esg_val {
  position: relative;
  margin: auto;
  width: 80%;
  height: 100%;
  background-image: url(/Bond1.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.val {
  position: absolute;
  left: 46.5%;
  top: 46%;
  width: 22px;
  height: 53px;
  color: rgba(93, 109, 121, 1);
  font-size: 30px;
}
.e_val {
  position: absolute;
  left: 47%;
  top: 7%;
  width: 22px;
  height: 53px;
  color: rgba(93, 109, 121, 1);
  font-size: 30px;
}
.s_val {
  position: absolute;
  left: 12%;
  top: 68%;
  width: 22px;
  height: 53px;
  color: rgba(93, 109, 121, 1);
  font-size: 30px;
}
.g_val {
  position: absolute;
  left: 86%;
  top: 71%;
  width: 22px;
  height: 53px;
  color: rgba(93, 109, 121, 1);
  font-size: 30px;
}
#WaterPolo {
  width: 100%;
  height: 100%;
}
.tabviewContainer {
  display: flex;
  flex: 1;
  border-radius: 0px 0px 1.5rem 1.5rem;
  background-color: #fff;
}
.tabItem {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(93, 109, 121, 1);
  cursor: pointer;
}
.tabItem svg {
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
  fill: rgba(93, 109, 121, 1);
}
.tabItemActive {
  border-radius: 1.5rem 1.5rem 0px 0px;
  background-color: #fff;
  color: rgba(0, 165, 189, 1);
}
.tabItemActive svg {
  fill: rgba(0, 165, 189, 1);
}

.rightBox {
  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.briefText {
  font-family: source-han-sans-simplified-c, sans-serif;
  font-size: 0.8rem;
  color: rgba(93, 109, 121, 1);
}
.iconText {
  padding-top: 3px;
  font-size: 1rem;
  padding-left: 0.625rem;
  font-family: source-han-sans-simplified-c, sans-serif;
}
.mainContainer {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  flex: 1;
  max-height: 100%;
  background-color: rgba(0, 165, 189, 0.05);
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
}
.iconBox {
  width: auto;
  height: 1.5rem;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 6px 10px rgba(0, 165, 189, 0.2);
  border-radius: 6px;
  padding: 5px 5px 5px 5px;
}
.title {
  margin-left: 2rem;
  padding-top: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: rgba(0, 165, 189, 1);
  letter-spacing: 2px;
  font-size: 24px;
  font-family: source-han-sans-simplified-c, sans-serif;
  display: flex;
  align-items: center;
}

.detailContainer {
  flex: 1;
  margin-left: 2rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  display: flex;
}
.leftBox {
  max-width: 32.8%;
  display: flex;
  flex-direction: column;
}
.detailView {
  border-radius: 24px;
  background-color: #fff;
  width: 100%;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  height: 38%;
}
.scoreView {
  height: 50%;
  border-radius: 24px;
  background-color: #fff;
  width: 100%;
  margin-top: 1.2rem;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
}
</style>
