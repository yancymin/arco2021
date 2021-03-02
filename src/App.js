import { useState, useEffect } from "react";
import "@arco-design/web-react/dist/css/arco.css";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import logo from "../src/assets/logo.svg";
import {
  Carousel,
  Skeleton,
  Button,
  Rate,
  Slider,
  Switch,
  Badge,
} from "@arco-design/web-react";
import {
  IconSubscribeAdd,
  IconSubscribe,
  IconSubscribed,
  IconCommon,
  IconUser,
} from "@arco-design/web-react/icon";
import heroBanner1 from "../src/assets/hero-banner-1.png";
import heroBanner2 from "../src/assets/hero-banner-2.png";
import heroBanner3 from "../src/assets/hero-banner-3.png";
import floatIcon1 from "../src/assets/logo_ArcoMaterial_w.svg";
import floatIcon2 from "../src/assets/logo_ArcoPro_w.svg";
import floatIcon3 from "../src/assets/logo_ChartSpace_w.svg";
import floatIcon4 from "../src/assets/logo_DesignLab_w.svg";
import picNavBar from "../src/assets/navbar.svg";
import picNavBar_1 from "../src/assets/navbar-item-1.svg";
import picNavBar_2 from "../src/assets/navbar-item-2.svg";
import picNavBar_3 from "../src/assets/navbar-item-3.svg";
import picNavBar_4_1 from "../src/assets/navbar-item-4-1.png";
import picNavBar_4_2 from "../src/assets/navbar-item-4-2.png";
import picNavBar_4_3 from "../src/assets/navbar-item-4-3.png";
import picNavBar_4_4 from "../src/assets/navbar-item-4-4.png";

import prArcoPro_b from "../src/assets/panel/logo_ArcoPro_blue.svg";
import prArcoPro from "../src/assets/panel/logo_ArcoPro.svg";
import prDesignLab_b from "../src/assets/panel/logo_DesignLab_blue.svg";
import prDesignLab from "../src/assets/panel/logo_DesignLab.svg";
import prArcoMaterial_b from "../src/assets/panel/logo_ArcoMaterial_blue.svg";
import prArcoMaterial from "../src/assets/panel/logo_ArcoMaterial.svg";
import prChartSpace_b from "../src/assets/panel/logo_ChartSpace_blue.svg";
import prChartSpace from "../src/assets/panel/logo_ChartSpace.svg";
import prFontMall_b from "../src/assets/panel/logo_FontMall_blue.svg";
import prFontMall from "../src/assets/panel/logo_FontMall.svg";
import prBrandStore_b from "../src/assets/panel/logo_BrandStore_blue.svg";
import prBrandStore from "../src/assets/panel/logo_BrandStore.svg";
// import vid_1 from "../src/assets/v-1.mov";
// import vid_2 from "../src/assets/v-2.mov";
// import vid_3 from "../src/assets/v-3.mov";
// import vid_4 from "../src/assets/v-4.mov";
// import vid_5 from "../src/assets/v-5.mov";
// import vid_6 from "../src/assets/v-6.mov";
import Parallax from "parallax-js";
import { gsap, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(MotionPathPlugin);

const imageSrc = [heroBanner1, heroBanner2, heroBanner3];
const GlobalStyle = createGlobalStyle`
  ${reset}
  `;

const logoData = [
  {
    logo: prArcoPro,
    logoB: prArcoPro_b,
    title: "ArcoPro",
    des: "中后台最佳实践",
  },
  {
    logo: prDesignLab,
    logoB: prDesignLab_b,
    title: "DesignLab",
    des: "设计系统配置",
  },
  {
    logo: prArcoMaterial,
    logoB: prArcoMaterial_b,
    title: "ArcoMaterial",
    des: "物料平台",
  },
  {
    logo: prChartSpace,
    logoB: prChartSpace_b,
    title: "ChartSpace",
    des: "图表库",
  },
  {
    logo: prFontMall,
    logoB: prFontMall_b,
    title: "FontMall",
    des: "字体配置平台",
  },
  {
    logo: prBrandStore,
    logoB: prBrandStore_b,
    title: "BrandStore",
    des: "品牌资源平台",
  },
];

const LogoItem = (props) => {
  return (
    <div className="panel-item">
      <div className="logo">
        <img src={props.logo} alt="prLogo" />
        <img src={props.logoB} alt="prLogo" />
      </div>
      <section>
        <p>{props.title}</p>
        <span>{props.des}</span>
      </section>
    </div>
  );
};

const AppCss = styled.div`
  main {
    width: 1180px;
    margin: 140px 0;
  }

  .hero {
    display: flex;
    justify-content: center;
  }

  .float-logo {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #165dff;

    &:after {
      position: absolute;
      bottom: -20px;
      right: -20px;
      content: "";
      width: 40px;
      height: 40px;
      background: #fff;
      opacity: 0.5;
      filter: blur(10px);
    }
  }

  #scene {
    position: relative;
    width: 84%;
    height: 400px;
    /* opacity: 0; */
    /* animation: heroSceneshow 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 0.55s;
    will-change: scale; */

    /* @keyframes heroSceneshow {
      from {
        opacity: 0;
        transform: scale3d(0.9, 0.9, 0.9);
      }
      to {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }
    } */

    & > div {
      width: 100%;
      height: inherit;
    }
  }

  .float-logo-1 {
    bottom: 40px;
    left: 40px;
  }
  .float-logo-2 {
    bottom: 160px;
    left: 10px;
  }
  .float-logo-3 {
    bottom: 220px;
    right: 40px;
  }
  .float-logo-4 {
    bottom: 30px;
    right: 10px;
  }
  .float-logo-5 {
    top: 50px;
    right: 340px;
    filter: blur(8px);
    opacity: 0.4;
  }
  .float-logo-6 {
    bottom: 100px;
    left: -10px;
    filter: blur(8px);
    opacity: 0.4;
  }
  .float-logo-7 {
    bottom: 100px;
    right: 40px;
    filter: blur(10px);
    opacity: 0.4;
  }

  .hero-motion {
    position: relative;
    width: 900px;
    display: flex;
    justify-content: center;
    overflow-y: hidden;
    .motion-content {
      position: absolute;
      z-index: 1;
      margin-bottom: -10px;
      width: 600px;
      height: 410px;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: inset 0 0 0 1px rgb(58 60 70 / 10%);
      box-sizing: border-box;
      backdrop-filter: blur(10px);
      border-radius: 8px;
      /* animation: heroWindowShow 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards; */

      @keyframes heroWindowShow {
        from {
          transform: translateY(110%);
        }
        to {
          transform: translateY(0);
        }
      }

      &_header {
        display: flex;
        justify-content: center;
        width: calc(100% - 24px);
        padding: 9px 12px;

        .dots {
          display: flex;
          position: absolute;
          left: 12px;
          i {
            width: 8px;
            height: 8px;
            border-radius: 100%;

            &:nth-of-type(1) {
              background-color: #ff4a4a;
            }
            &:nth-of-type(2) {
              background-color: #ffb83d;
              margin: 0 4px;
            }
            &:nth-of-type(3) {
              background-color: #00c543;
            }
          }
        }

        .url {
          width: 168px;
          height: 22px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #86909c;
          font-size: 12px;
          line-height: 12px;
          background: #f7f8fa;
          border-radius: 3px;

          svg {
            margin-right: 4px;
          }
        }
      }

      &_top {
        padding: 0 24px 20px 24px;
        .badge {
          display: flex;
          align-items: center;
          margin-bottom: 24px;

          p {
            font-size: 12px;
            line-height: 12px;
            color: #1d2129;
          }

          i {
            margin: 0 8px;
            height: 12px;
            width: 1px;
            background-color: #c9cdd4;
          }
        }

        .top {
          display: grid;
          grid-template-columns: 1fr 1.2fr 0.8fr 1.5fr;
          height: 154px;
          grid-gap: 20px;

          &-1 {
            display: grid;
            grid-auto-rows: auto 1fr;
            grid-gap: 20px;
            height: 154px;

            .arco-skeleton {
              width: 108px;

              li {
                height: 13px;
                margin-bottom: 8px;
                &:last-child {
                  margin-bottom: 0;
                }
              }
            }
            .arco-skeleton-header .arco-skeleton-image {
              width: 24px;
              height: 24px;
              /* border-radius: 100%; */
              margin-right: 6px;
            }

            span {
              position: relative;
              width: 100%;
              height: 60px;

              svg {
                position: absolute;
                transition: all 0.2s ease;

                path {
                  transition: all 0.2s ease;
                }

                &:nth-of-type(1) {
                  /* z-index: 2;
                  left: -3px; */

                  &:hover {
                    path {
                      fill: transparent;
                      stroke: #5f00fb;
                      stroke-width: 0.7px;
                    }
                  }
                }
                /* &:nth-of-type(2) {
                  top: 3px;
                  left: 3px;
                  border: 1px solid #5f00fb;
                  path {
                    transition: all 0.3s ease;
                  }
                  &:hover {
                    path {
                      fill: transparent;
                      stroke: #5f00fb;
                    }
                  }
                } */
              }
            }
          }

          &-2 {
            display: grid;
            grid-auto-rows: auto 1fr;
            grid-gap: 20px;
            height: 154px;

            .hero-chart {
              width: 100%;
              height: 58px;
              display: flex;
              align-items: flex-end;
              & > div {
                position: relative;
                height: 58px;
                width: calc((100% / 9) + 20px);
                background: rgb(22 93 255 / 40%);
                margin-right: 2px;
                display: flex;
                align-items: flex-end;
                overflow: hidden;
                border-radius: 1px;
                transition: all 0.3s ease;

                div {
                  transition: all 0.2s ease-out;
                }

                &:hover {
                  /* opacity: 0.8; */

                  div {
                    transform: scale(2);
                  }
                }

                &:last-child {
                  margin-right: 0;
                }

                &:nth-of-type(1) {
                  height: calc(58px - 10px);

                  div {
                    position: absolute;
                    &:nth-of-type(1) {
                      width: 100%;
                      background: #165dff;
                      height: 45%;
                    }
                    &:nth-of-type(2) {
                      width: 100%;
                      background: #1d2129;
                      height: 18%;
                    }
                  }
                }
                &:nth-of-type(2) {
                  /* height: calc(58px - 10px); */

                  div {
                    position: absolute;
                    &:nth-of-type(1) {
                      width: 100%;
                      background: #165dff;
                      height: 45%;
                    }
                    &:nth-of-type(2) {
                      width: 100%;
                      background: #1d2129;
                      height: 18%;
                    }
                  }
                }
                &:nth-of-type(3) {
                  height: calc(58px - 15px);

                  div {
                    position: absolute;
                    &:nth-of-type(1) {
                      width: 100%;
                      background: #165dff;
                      height: 45%;
                    }
                    &:nth-of-type(2) {
                      width: 100%;
                      background: #1d2129;
                      height: 18%;
                    }
                  }
                }
                &:nth-of-type(4) {
                  height: calc(58px - 25px);

                  div {
                    position: absolute;
                    &:nth-of-type(1) {
                      width: 100%;
                      background: #165dff;
                      height: 45%;
                    }
                    &:nth-of-type(2) {
                      width: 100%;
                      background: #1d2129;
                      height: 18%;
                    }
                  }
                }
                &:nth-of-type(5) {
                  height: calc(58px - 30px);

                  div {
                    position: absolute;
                    &:nth-of-type(1) {
                      width: 100%;
                      background: #165dff;
                      height: 45%;
                    }
                    &:nth-of-type(2) {
                      width: 100%;
                      background: #1d2129;
                      height: 18%;
                    }
                  }
                }
                &:nth-of-type(6) {
                  height: calc(58px - 40px);

                  div {
                    position: absolute;
                    &:nth-of-type(1) {
                      width: 100%;
                      background: #165dff;
                      height: 45%;
                    }
                    &:nth-of-type(2) {
                      width: 100%;
                      background: #1d2129;
                      height: 18%;
                    }
                  }
                }
                &:nth-of-type(7) {
                  height: calc(58px - 20px);

                  div {
                    position: absolute;
                    &:nth-of-type(1) {
                      width: 100%;
                      background: #165dff;
                      height: 45%;
                    }
                    &:nth-of-type(2) {
                      width: 100%;
                      background: #1d2129;
                      height: 18%;
                    }
                  }
                }
                &:nth-of-type(8) {
                  height: calc(58px - 25px);

                  div {
                    position: absolute;
                    &:nth-of-type(1) {
                      width: 100%;
                      background: #165dff;
                      height: 45%;
                    }
                    &:nth-of-type(2) {
                      width: 100%;
                      background: #1d2129;
                      height: 18%;
                    }
                  }
                }
                &:nth-of-type(9) {
                  height: calc(58px - 30px);

                  div {
                    position: absolute;
                    &:nth-of-type(1) {
                      width: 100%;
                      background: #165dff;
                      height: 45%;
                    }
                    &:nth-of-type(2) {
                      width: 100%;
                      background: #1d2129;
                      height: 18%;
                    }
                  }
                }
                &:nth-of-type(10) {
                  height: calc(58px - 40px);

                  div {
                    position: absolute;
                    &:nth-of-type(1) {
                      width: 100%;
                      background: #165dff;
                      height: 45%;
                    }
                    &:nth-of-type(2) {
                      width: 100%;
                      background: #1d2129;
                      height: 18%;
                    }
                  }
                }
              }
            }

            .hero-banner {
              display: flex;
              overflow: hidden;
              border-radius: 3px;

              .arco-carousel-indicator-wrapper {
                margin-bottom: -4px;
              }
              .arco-carousel-arrow-right {
                transform: scale(0.6);
                margin-top: -12px;
                margin-right: -10px;
              }
              .arco-carousel-arrow-left {
                transform: scale(0.6);
                margin-top: -12px;
                margin-left: -10px;
              }
            }
          }

          &-3 {
            height: 154px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          &-4 {
            height: 154px;
            display: grid;
            grid-auto-rows: 1fr auto;
            grid-gap: 12px;

            .color-panel {
              width: 100%;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
              grid-template-rows: repeat(1fr, 3);
              div {
                transition: all 0.25s ease-in-out;
                &:hover {
                  transform: scale(1.1);
                  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                }
                &:nth-of-type(1) {
                  background: #0e42d2;
                }
                &:nth-of-type(2) {
                  background: #165dff;
                }
                &:nth-of-type(3) {
                  background: #4080ff;
                }
                &:nth-of-type(4) {
                  background: #6aa1ff;
                }
                &:nth-of-type(5) {
                  background: #94bfff;
                }
                &:nth-of-type(6) {
                  background: #206ccf;
                }
                &:nth-of-type(7) {
                  background: #3491fa;
                }
                &:nth-of-type(8) {
                  background: #57a9fb;
                }
                &:nth-of-type(9) {
                  background: #9fd4fd;
                }
                &:nth-of-type(10) {
                  background: #c3e7fe;
                }
                &:nth-of-type(11) {
                  background: #0aa5a8;
                }
                &:nth-of-type(12) {
                  background: #0fc6c2;
                }
                &:nth-of-type(13) {
                  background: #33d1c9;
                }
                &:nth-of-type(14) {
                  background: #86e8dd;
                }
                &:nth-of-type(15) {
                  background: #b5f4ea;
                }
              }
            }

            .hero-control {
              display: grid;
              grid-template-columns: 2fr 1fr;
              grid-gap: 20px;

              & > div {
                &:nth-of-type(1) {
                  .arco-rate-character:not(:last-child) {
                    margin-right: 2px;
                  }
                  .arco-icon {
                    width: 20px;
                    height: 20px;
                  }
                  .arco-slider {
                    width: 100% !important;
                  }
                }
                &:nth-of-type(2) {
                  display: flex;
                  flex-direction: column;
                  justify-content: space-evenly;
                  .arco-switch {
                    width: 100%;
                  }
                }
              }
            }
          }
        }
      }

      &_bottom {
        width: 100%;
        height: 148px;
        display: grid;
        grid-template-columns: 153px 1.1fr 0.9fr;
        grid-template-rows: repeat(1fr, 3);
        background: transparent;

        & > div {
          &:nth-of-type(1) {
            background: rgba(43, 121, 255, 0.2);
            /* backdrop-filter: blur(10px); */
            display: flex;
            justify-content: center;
            align-items: center;
          }
          &:nth-of-type(2) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #0e42d2;
            background-image: linear-gradient(
                rgba(255, 255, 255, 0.1) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.1) 1px,
                transparent 1px
              );
            background-size: 5px 5px;

            & > div {
              padding: 0 20px;
              .arco-badge-text {
                line-height: 18px;
              }
              &:nth-of-type(1) {
                width: calc(100% - 40px);
                margin-bottom: 12px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .arco-icon {
                  width: 32px;
                  height: 32px;
                  padding: 12px;
                  background: white;
                  border-radius: 100%;
                  color: #0e42d2;
                  border: 1px solid transparent;
                  transition: all 0.2s ease;

                  path,
                  circle {
                    transition: all 0.2s ease;
                  }

                  &:hover {
                    background: transparent;
                    stroke: white;
                    border: 1px solid #ffffff;
                  }

                  &:nth-of-type(1):not(.arco-badge .arco-icon) {
                    width: 20px;
                    height: 20px;
                    padding: 10px;
                    border: 1px solid #ffffff;
                    background: transparent;
                    color: white;

                    &:hover {
                      background: white;
                      stroke: #0e42d2;
                      border: 1px solid transparent;
                    }
                  }
                  &:nth-of-type(2):not(.arco-badge .arco-icon) {
                    width: 12px;
                    height: 12px;
                    padding: 6px;
                    border: 1px solid #ffffff;
                    background: transparent;
                    color: white;

                    &:hover {
                      background: white;
                      stroke: #0e42d2;
                      border: 1px solid transparent;
                    }
                  }
                  &:nth-of-type(3):not(.arco-badge .arco-icon) {
                    width: 8px;
                    height: 8px;
                    padding: 4px;
                    border: 1px solid #ffffff;
                    background: transparent;
                    color: white;

                    &:hover {
                      background: white;
                      stroke: #0e42d2;
                      border: 1px solid transparent;
                    }
                  }
                }
              }
              &:nth-of-type(2) {
                width: calc(100% - 40px);
                display: flex;
                justify-content: space-between;

                .arco-icon {
                  width: 24px;
                  height: 24px;
                  color: white;
                  border: 1px solid rgba(255, 255, 255, 0.6);
                  padding: 8px;
                  border-radius: 3px;
                  transition: all 0.2s ease;

                  path,
                  circle {
                    transition: all 0.2s ease;
                  }

                  &:hover {
                    background: white;
                    stroke: #0e42d2;
                    border: 1px solid transparent;
                  }
                }
              }
            }
          }
          &:nth-of-type(3) {
            background: #282c34;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }

    .bg_light {
      z-index: -1;
      position: absolute;
      width: 85%;
      height: 260px;
      background: #165dff;
      opacity: 0.6;
      bottom: -240px;
      border-radius: 100%;
      filter: blur(60px);
      /* will-change: translateY;
      opacity: 0;
      animation: heroBgshow 1s ease forwards;

      @keyframes heroBgshow {
        from {
          filter: blur(0);
          transform: translateY(100%);
        }
        to {
          opacity: 1;
          filter: blur(60px);
          transform: translateY(0);
        }
      } */
    }
  }

  .nav-open {
    opacity: 1 !important;
  }

  .cover {
    opacity: 0;
    top: 0;
    left: 0;
    z-index: -1;
    position: absolute;
    content: "";
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  #navbar {
    width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > img {
      z-index: 999;
      background: white;
    }

    .dropdown {
      position: relative;
      transform: translateY(-110%);
      width: 1440px;
      padding: 40px 0;
      background: white;
      display: flex;
      justify-content: center;

      & > div {
        display: grid;
        width: 1180px;
        grid-template-columns: 1fr 1fr;
        grid-gap: 40px;
      }

      .left {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-gap: 40px;
      }

      .right {
        display: grid;
        grid-gap: 24px;

        & > div {
          img {
            width: 208px;
          }
        }
      }
    }
  }
  /* #videos {
    width: 90vw;
    height: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    margin: 20px;

    div {
      overflow: hidden;
      border: 1px solid #eee;

      video {
        height: 125%;
      }
    }
  } */

  .panel-open {
    .panel-bg {
      opacity: 1 !important;
      transform: scale(1) translateY(0) !important;
      box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1) !important;
      border: 1px solid #e5e6eb !important;
    }
  }

  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 20px;
    left: 20px;
  }

  #panel {
    z-index: 999999;
    position: fixed;
    top: 90px;
    left: 48px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;

    .panel-bg {
      opacity: 0;
      z-index: 0;
      position: absolute;
      top: -32px;
      left: -32px;
      width: 100%;
      height: 100%;
      padding: 32px;
      background: white;
      border: 1px solid transparent;
      box-shadow: 0px 0 0 rgba(0, 0, 0, 0);
      border-radius: 8px;
      transform-origin: top left;
      transform: scale(0.55) translateY(-6px);
      /* transition-delay: 0.5s; */
      transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .panel-item {
      opacity: 0;
      cursor: pointer;
      position: relative;
      z-index: 2;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      &:hover {
        &::after {
          opacity: 1;
          transform: scale(1);
        }

        section {
          p {
            transform: translateY(-8px);
            color: #1d2129;
          }
          span {
            transform: translateY(-4px);
            opacity: 1;
          }
        }

        img {
          &:nth-of-type(2) {
            opacity: 0;
          }
        }
      }

      &::after {
        position: absolute;
        z-index: -1;
        content: "";
        width: 100%;
        height: 100%;
        padding: 16px;
        background: #f7f8fa;
        border-radius: 4px;
        left: -16px;
        opacity: 0;
        transform: scale(0.94);
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .logo {
        position: relative;
        width: 24px;
        height: 24px;
        margin-right: 16px;
        img {
          position: absolute;
          transition: all 0.25s ease-out;
        }
      }

      p {
        font-family: "Nunito Sans", sans-serif;
        font-weight: 800;
        color: #4e5969;
        transition: all 0.2s ease-out;
      }
      span {
        font-family: PingFang SC;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 12px;
        color: #4e5969;
        position: absolute;
        word-break: keep-all;
        transform: translateY(0);
        opacity: 0;
        transition: all 0.2s ease-out;
      }
    }
  }
`;

function App() {
  const [value, setValue] = useState(30);
  const [navOpen, setNavOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);

  // const coverClose = () => {
  //   console.log(navOpen)
  //   setNavOpen(false);
  // };

  const handlePanel = () => {
    let panelTL = gsap.timeline();
    let panelTL2 = gsap.timeline();
    if (!panelOpen) {
      panelTL.fromTo(
        ".panel-item",
        {
          opacity: 0,
          duration: 0.3,
          y: -4,
          delay: 0.1,
          stagger: {
            amount: 0.2,
          },
        },
        {
          opacity: 1,
          duration: 0.3,
          y: 0,
          delay: 0.1,
          stagger: {
            amount: 0.2,
          },
        }
      );
    } else {
      panelTL2.to(".panel-item", {
        opacity: 0,
        duration: 0.2,
        y: -4,
      });
    }
    setPanelOpen(!panelOpen);
  };

  const navToggle = () => {
    let tl2 = gsap.timeline();
    if (navOpen) {
      tl2.to(".dropdown", {
        y: "-110%",
        duration: 0.3,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      });
    } else {
      tl2
        .to(".dropdown", {
          y: 0,
          duration: 0.4,
          ease: "cubic-bezier(0.25, 1, 0.5, 1)",
        })
        .from(
          ".dropdown .left, .dropdown .right",
          {
            opacity: 0,
            duration: 0.3,
            x: -20,
            ease: "cubic-bezier(0.25, 1, 0.5, 1)",
            stagger: {
              amount: 0.1,
            },
          }
          // "<0.03"
        )
        .from(
          ".dropdown .right div img",
          {
            opacity: 0,
            duration: 0.35,
            ease: "cubic-bezier(0.25, 1, 0.5, 1)",
            x: -16,
            stagger: {
              amount: 0.2,
            },
          },
          "<0.2"
        );
    }
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(".bg_light", {
      opacity: 0,
      duration: 0.2,
      ease: "ease",
    })
      .from(".motion-content", {
        y: "110%",
        scale: 0.86,
        duration: 1.8,
        ease: "power3.inOut",
      })
      .from(
        "#scene",
        {
          opacity: 0,
          scale: "0.9",
          duration: 1,
          ease: "cubic-bezier(0.34, 1.56, 0.64, 1) ",
        },
        "start-=0.55"
      )
      .from(
        ".hero-chart > div",
        {
          opacity: 0,
          height: "100%",
          stagger: {
            amount: 0.6,
          },
        },
        "start-=1"
      )
      .from(
        ".top-3 button",
        {
          opacity: 0,
          stagger: {
            amount: 0.6,
          },
        },
        "start-=1"
      )
      .from(
        ".color-panel > div",
        {
          opacity: 0,
          stagger: {
            amount: 0.3,
          },
        },
        "start-=1"
      )
      .from(
        ".top > div, .motion-content_bottom > div",
        {
          opacity: 0,
          stagger: {
            amount: 0.4,
          },
        },
        "start-=0.8"
      )
      .from(
        "#code-block path",
        {
          opacity: 0,
          stagger: {
            amount: 0.4,
          },
        },
        "<0.4"
      )
      .from(
        "#scene div",
        {
          opacity: 0,
          stagger: {
            amount: 1.4,
          },
        },
        "start-=0.65"
      );
  });
  useEffect(() => {
    // eslint-disable-next-line
    var scene = document.getElementById("scene");
    // eslint-disable-next-line
    var parallaxInstance = new Parallax(scene, {
      // hoverOnly: true,
    });
  });

  useEffect(() => {
    gsap.to("#react-ball-1", {
      duration: 6,
      repeat: 100,
      delay: 1,
      ease: "linear",
      motionPath: {
        path: "#path-1",
        align: "#path-1",
        alignOrigin: [0.5, 0.5],
      },
    });
    gsap.to("#react-ball-2", {
      duration: 10,
      repeat: 100,
      repeatDelay: 0,
      ease: "linear",
      motionPath: {
        path: "#path-2",
        align: "#path-2",
        alignOrigin: [0.5, 0.5],
      },
    });
  });
  return (
    <AppCss className="App">
      <GlobalStyle />
      <section id="navbar">
        <img src={picNavBar} alt="picNavBar" onClick={navToggle} />
        <div className="dropdown">
          <div>
            <div className="left">
              <img src={picNavBar_1} alt="picNavBar" />
              <img src={picNavBar_2} alt="picNavBar" />
            </div>
            <div className="right">
              <img src={picNavBar_3} alt="picNavBar" />
              <div>
                <img src={picNavBar_4_1} alt="picNavBar" />
                <img src={picNavBar_4_2} alt="picNavBar" />
                <img src={picNavBar_4_3} alt="picNavBar" />
                <img src={picNavBar_4_4} alt="picNavBar" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <span className={`cover ${navOpen ? "nav-open" : ""}`}></span>
      <main>
        <div className="hero">
          <div className="hero-motion">
            <div className="motion-content">
              <div className="motion-content_header">
                <div className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <div className="url">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.41813 15.1666C4.73613 15.1666 1.75146 12.1819 1.75146 8.49992C1.75146 4.81792 4.73613 1.83325 8.41813 1.83325C12.1001 1.83325 15.0848 4.81792 15.0848 8.49992C15.0848 12.1819 12.1001 15.1666 8.41813 15.1666ZM6.89147 13.6113C6.23374 12.2161 5.85271 10.7067 5.76947 9.16659H3.12613C3.25586 10.1925 3.68075 11.1587 4.34918 11.9477C5.01761 12.7368 5.90081 13.3147 6.89147 13.6113ZM7.1048 9.16659C7.20546 10.7926 7.67013 12.3199 8.41813 13.6679C9.18634 12.2843 9.63509 10.7462 9.73147 9.16659H7.1048ZM13.7101 9.16659H11.0668C10.9836 10.7067 10.6025 12.2161 9.9448 13.6113C10.9355 13.3147 11.8187 12.7368 12.4871 11.9477C13.1555 11.1587 13.5804 10.1925 13.7101 9.16659ZM3.12613 7.83325H5.76947C5.85271 6.29311 6.23374 4.78371 6.89147 3.38859C5.90081 3.68517 5.01761 4.26309 4.34918 5.05212C3.68075 5.84114 3.25586 6.80732 3.12613 7.83325ZM7.10546 7.83325H9.7308C9.63463 6.25365 9.18611 4.71561 8.41813 3.33192C7.64992 4.71555 7.20117 6.2536 7.1048 7.83325H7.10546ZM9.9448 3.38859C10.6025 4.78371 10.9836 6.29311 11.0668 7.83325H13.7101C13.5804 6.80732 13.1555 5.84114 12.4871 5.05212C11.8187 4.26309 10.9355 3.68517 9.9448 3.38859Z"
                      fill="#C9CDD4"
                    />
                  </svg>
                  arco.design
                </div>
              </div>
              <div className="motion-content_top">
                <div className="badge">
                  <img src={logo} alt="logo" />
                  <i></i>
                  <p>企业级设计系统</p>
                </div>
                <div className="top">
                  <div className="top-1">
                    <span>
                      <svg
                        width="112"
                        height="63"
                        viewBox="0 0 112 63"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 59L27.7478 4H39.0613L64.8091 59H50.4527L45.6933 47.844H21.1158L16.3564 59H2ZM33.2875 18.9787L25.7972 36.844H40.9338L33.4436 18.9787H33.2875Z"
                          fill="#4E5969"
                        />
                        <path
                          d="M84.6976 58.9996C81.7061 58.9996 79.0557 58.4586 76.7465 57.3767C74.4897 56.2947 72.7053 54.8264 71.3933 52.9717C70.1337 51.0654 69.5039 48.9016 69.5039 46.4801C69.5039 43.7495 70.2387 41.5857 71.7082 39.9885C73.1777 38.3399 75.5394 37.1807 78.7933 36.5109C82.0472 35.7896 86.377 35.429 91.7827 35.429H94.7742V34.3471C94.7742 32.4923 94.2756 31.1786 93.2785 30.4057C92.3338 29.6329 90.6806 29.2465 88.3189 29.2465C86.3245 29.2465 84.1203 29.5557 81.7061 30.1739C79.2919 30.7921 76.9302 31.7453 74.6209 33.0333L71.0784 23.9915C72.3904 23.0641 74.0699 22.2398 76.1167 21.5185C78.1635 20.7972 80.3153 20.2562 82.572 19.8956C84.8288 19.4834 86.9543 19.2773 88.9487 19.2773C95.404 19.2773 100.18 20.6426 103.276 23.3732C106.425 26.1038 108 30.4057 108 36.2791V58.1495H94.9317V52.7398C94.2494 54.6976 93.0161 56.2432 91.2316 57.3767C89.4472 58.4586 87.2692 58.9996 84.6976 58.9996ZM87.8465 50.035C89.7884 50.035 91.4153 49.4168 92.7274 48.1803C94.0919 46.9438 94.7742 45.3209 94.7742 43.3116V41.9206H91.7827C88.6862 41.9206 86.4033 42.2554 84.9338 42.9252C83.5167 43.5434 82.8082 44.5481 82.8082 45.9391C82.8082 47.1241 83.2281 48.103 84.0678 48.8758C84.96 49.6486 86.2196 50.035 87.8465 50.035Z"
                          fill="#4E5969"
                        />
                        <rect
                          x="4.39291"
                          y="3.39291"
                          width="104.214"
                          height="56.2142"
                          stroke="#5F00FB"
                          strokeWidth="1.21417"
                        />
                        <rect
                          x="1.39291"
                          y="1.39291"
                          width="5.21417"
                          height="5.21417"
                          fill="white"
                          stroke="#5F00FB"
                          strokeWidth="1.21417"
                        />
                        <rect
                          x="105.393"
                          y="1.39291"
                          width="5.21417"
                          height="5.21417"
                          fill="white"
                          stroke="#5F00FB"
                          strokeWidth="1.21417"
                        />
                        <rect
                          x="1.39291"
                          y="56.8919"
                          width="5.21417"
                          height="5.21417"
                          fill="white"
                          stroke="#5F00FB"
                          strokeWidth="1.21417"
                        />
                        <rect
                          x="105.393"
                          y="56.89"
                          width="5.21417"
                          height="5.21417"
                          fill="white"
                          stroke="#5F00FB"
                          strokeWidth="1.21417"
                        />
                      </svg>
                    </span>
                    <Skeleton
                      text={{ rows: 4, width: [78, 78, 60, 60] }}
                      image
                      animation
                    ></Skeleton>
                  </div>

                  <div className="top-2">
                    <div className="hero-chart">
                      <div>
                        <div></div>
                        <div></div>
                      </div>
                      <div>
                        <div></div>
                        <div></div>
                      </div>
                      <div>
                        <div></div>

                        <div></div>
                      </div>
                      <div>
                        <div></div>

                        <div></div>
                      </div>
                      <div>
                        <div></div>

                        <div></div>
                      </div>
                      <div>
                        <div></div>

                        <div></div>
                      </div>
                      <div>
                        <div></div>

                        <div></div>
                      </div>
                      <div>
                        <div></div>

                        <div></div>
                      </div>
                      <div>
                        <div></div>

                        <div></div>
                      </div>
                    </div>
                    <div className="hero-banner">
                      <Carousel
                        style={{
                          width: "100%",
                        }}
                        autoPlay
                        showArrow="hover"
                      >
                        {imageSrc.map((src, index) => (
                          <div key={index}>
                            <img
                              src={src}
                              alt="banner"
                              style={{
                                width: "120%",
                              }}
                            />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                  </div>
                  <div className="top-3">
                    <Button long type="primary" size="mini">
                      Primary
                    </Button>
                    <Button long type="secondary" size="mini">
                      Secondary
                    </Button>
                    <Button long type="dashed" size="mini">
                      Dashed
                    </Button>
                    <Button long type="outline" size="mini">
                      Outline
                    </Button>
                    <Button long type="text" size="mini">
                      Text
                    </Button>
                  </div>
                  <div className="top-4">
                    <div className="color-panel">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className="hero-control">
                      <div>
                        <Rate
                          allowHalf
                          defaultValue={2.5}
                          tooltips={["😠", "🙂", "😊", "😘", "😍"]}
                        />
                        <Slider
                          value={value}
                          onChange={setValue}
                          style={{ width: 200 }}
                        />
                      </div>
                      <div>
                        <Switch size="small" />
                        <Switch size="small" type="round" defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="motion-content_bottom">
                <div>
                  <svg
                    width="125"
                    height="117"
                    viewBox="0 0 125 117"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    id="react-motion"
                  >
                    <path
                      d="M83.8395 58.1957C83.8395 74.1393 81.3312 88.5106 77.3239 98.8453C75.3185 104.017 72.9647 108.108 70.4216 110.882C67.8795 113.655 65.2548 115.006 62.6594 115.006C60.0641 115.006 57.4393 113.655 54.8972 110.882C52.3542 108.108 50.0004 104.017 47.995 98.8453C43.9876 88.5106 41.4794 74.1393 41.4794 58.1957C41.4794 42.2521 43.9876 27.8808 47.995 17.5461C50.0004 12.3742 52.3542 8.28359 54.8972 5.50965C57.4393 2.73668 60.0641 1.38561 62.6594 1.38561C65.2548 1.38561 67.8795 2.73668 70.4216 5.50965C72.9647 8.28359 75.3185 12.3742 77.3239 17.5461C81.3312 27.8808 83.8395 42.2521 83.8395 58.1957Z"
                      stroke="white"
                      strokeWidth="2.77122"
                    />
                    <path
                      d="M52.068 76.5376C38.2605 68.5658 27.0687 59.2079 20.1222 50.5701C16.646 46.2474 14.2803 42.1636 13.1495 38.5743C12.0191 34.9863 12.1614 32.0377 13.4591 29.79C14.7568 27.5424 17.2392 25.9449 20.9117 25.1298C24.5855 24.3144 29.305 24.3213 34.7867 25.1705C45.7405 26.8674 59.4406 31.8808 73.2481 39.8526C87.0556 47.8244 98.2474 57.1823 105.194 65.8201C108.67 70.1428 111.036 74.2265 112.167 77.8158C113.297 81.4039 113.155 84.3525 111.857 86.6001C110.559 88.8478 108.077 90.4453 104.404 91.2604C100.731 92.0757 96.0111 92.0689 90.5294 91.2197C79.5756 89.5228 65.8755 84.5093 52.068 76.5376Z"
                      stroke="white"
                      strokeWidth="2.77122"
                      id="path-1"
                    />
                    <path
                      d="M73.2503 76.5376C87.0579 68.5658 98.2497 59.2079 105.196 50.5701C108.672 46.2474 111.038 42.1636 112.169 38.5743C113.299 34.9863 113.157 32.0377 111.859 29.79C110.562 27.5424 108.079 25.9449 104.407 25.1298C100.733 24.3144 96.0133 24.3213 90.5317 25.1705C79.5779 26.8674 65.8778 31.8808 52.0703 39.8526C38.2627 47.8244 27.0709 57.1823 20.1245 65.8201C16.6482 70.1428 14.2825 74.2265 13.1517 77.8158C12.0214 81.4039 12.1636 84.3525 13.4613 86.6001C14.759 88.8478 17.2414 90.4453 20.914 91.2604C24.5878 92.0757 29.3073 92.0689 34.7889 91.2197C45.7427 89.5228 59.4428 84.5093 73.2503 76.5376Z"
                      stroke="white"
                      strokeWidth="2.77122"
                      id="path-2"
                    />
                    <circle
                      cx="62.2718"
                      cy="58.1951"
                      r="6.92806"
                      fill="white"
                    />
                    <circle
                      cx="109.082"
                      cy="45.3638"
                      r="4.90386"
                      fill="white"
                      id="react-ball-2"
                    />
                    <circle
                      cx="34.9039"
                      cy="24.9039"
                      r="4.90386"
                      fill="white"
                      id="react-ball-1"
                    />
                  </svg>
                </div>
                <div>
                  <div>
                    <Badge count={9} offset={[-6, 6]}>
                      <IconUser />
                    </Badge>
                    <IconUser />
                    <IconUser />
                    <IconUser />
                  </div>
                  <div>
                    <span>
                      <IconSubscribeAdd />
                    </span>
                    <span>
                      <IconSubscribe />
                    </span>
                    <span>
                      <IconSubscribed />
                    </span>
                    <span>
                      <IconCommon />
                    </span>
                  </div>
                </div>
                <div>
                  <svg
                    width="148"
                    height="110"
                    viewBox="0 0 148 110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    id="code-block"
                  >
                    <path
                      opacity="0.9"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M50.55 23C50.55 23.5523 50.1023 24 49.55 24H8C7.44772 24 7 23.5523 7 23V19C7 18.4477 7.44771 18 8 18H49.55C50.1023 18 50.55 18.4477 50.55 19V23Z"
                      fill="#CA84E8"
                    />
                    <path
                      opacity="0.9"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M84.3492 23C84.3492 23.5523 83.9015 24 83.3492 24H61.9492C61.3969 24 60.9492 23.5523 60.9492 23V19C60.9492 18.4477 61.3969 18 61.9492 18H83.3492C83.9015 18 84.3492 18.4477 84.3492 19V23Z"
                      fill="#81CEE7"
                    />
                    <path
                      opacity="0.9"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M118.15 23C118.15 23.5523 117.702 24 117.15 24H95.75C95.1977 24 94.75 23.5523 94.75 23V19C94.75 18.4477 95.1977 18 95.75 18H117.15C117.702 18 118.15 18.4477 118.15 19V23Z"
                      fill="#81CEE7"
                    />
                    <path
                      opacity="0.9"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M50.55 36C50.55 36.5523 50.1023 37 49.55 37H8C7.44772 37 7 36.5523 7 36V32C7 31.4477 7.44771 31 8 31H49.55C50.1023 31 50.55 31.4477 50.55 32V36Z"
                      fill="#CA84E8"
                    />
                    <path
                      opacity="0.9"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M84.3492 36C84.3492 36.5523 83.9015 37 83.3492 37H61.9492C61.3969 37 60.9492 36.5523 60.9492 36V32C60.9492 31.4477 61.3969 31 61.9492 31H83.3492C83.9015 31 84.3492 31.4477 84.3492 32V36Z"
                      fill="#81CEE7"
                    />
                    <path
                      opacity="0.9"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30.4 49C30.4 49.5523 29.9523 50 29.4 50H8C7.44772 50 7 49.5523 7 49V45C7 44.4477 7.44771 44 8 44H29.4C29.9523 44 30.4 44.4477 30.4 45V49Z"
                      fill="#81CEE7"
                    />
                    <path
                      opacity="0.9"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M84.3508 49C84.3508 49.5523 83.9031 50 83.3508 50H41.8008C41.2485 50 40.8008 49.5523 40.8008 49V45C40.8008 44.4477 41.2485 44 41.8008 44H83.3508C83.9031 44 84.3508 44.4477 84.3508 45V49Z"
                      fill="#CA84E8"
                    />
                    <path
                      opacity="0.9"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M118.15 49C118.15 49.5523 117.702 50 117.15 50H95.75C95.1977 50 94.75 49.5523 94.75 49V45C94.75 44.4477 95.1977 44 95.75 44H117.15C117.702 44 118.15 44.4477 118.15 45V49Z"
                      fill="#81CEE7"
                    />
                    <path
                      opacity="0.9"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M50.55 62C50.55 62.5523 50.1023 63 49.55 63H8C7.44772 63 7 62.5523 7 62V58C7 57.4477 7.44771 57 8 57H49.55C50.1023 57 50.55 57.4477 50.55 58V62Z"
                      fill="#CA84E8"
                    />
                    <path
                      opacity="0.9"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M84.3492 62C84.3492 62.5523 83.9015 63 83.3492 63H61.9492C61.3969 63 60.9492 62.5523 60.9492 62V58C60.9492 57.4477 61.3969 57 61.9492 57H83.3492C83.9015 57 84.3492 57.4477 84.3492 58V62Z"
                      fill="#81CEE7"
                    />
                    <path
                      d="M1.2 90V85.08H0.06V84.144H1.2V84.036C1.2 83.228 1.404 82.62 1.812 82.212C2.228 81.804 2.864 81.576 3.72 81.528L4.248 81.492L4.332 82.404L3.78 82.44C3.292 82.472 2.94 82.604 2.724 82.836C2.516 83.068 2.412 83.412 2.412 83.868V84.144H4.056V85.08H2.412V90H1.2ZM5.01216 90V84.144H6.18816V85.188C6.49216 84.492 7.12416 84.104 8.08416 84.024L8.48016 84L8.56416 85.032L7.83216 85.104C6.76816 85.208 6.23616 85.756 6.23616 86.748V90H5.01216ZM11.9507 90.108C11.3587 90.108 10.8467 89.984 10.4147 89.736C9.98269 89.488 9.64669 89.14 9.40669 88.692C9.17469 88.236 9.05869 87.696 9.05869 87.072C9.05869 86.448 9.17469 85.912 9.40669 85.464C9.64669 85.008 9.98269 84.656 10.4147 84.408C10.8467 84.16 11.3587 84.036 11.9507 84.036C12.5267 84.036 13.0307 84.16 13.4627 84.408C13.8947 84.656 14.2307 85.008 14.4707 85.464C14.7107 85.912 14.8307 86.448 14.8307 87.072C14.8307 87.696 14.7107 88.236 14.4707 88.692C14.2307 89.14 13.8947 89.488 13.4627 89.736C13.0307 89.984 12.5267 90.108 11.9507 90.108ZM11.9507 89.172C12.4467 89.172 12.8467 88.992 13.1507 88.632C13.4547 88.272 13.6067 87.752 13.6067 87.072C13.6067 86.392 13.4547 85.876 13.1507 85.524C12.8467 85.164 12.4467 84.984 11.9507 84.984C11.4467 84.984 11.0427 85.164 10.7387 85.524C10.4347 85.876 10.2827 86.392 10.2827 87.072C10.2827 87.752 10.4347 88.272 10.7387 88.632C11.0427 88.992 11.4467 89.172 11.9507 89.172ZM16.2158 90V84.144H17.3918V85.092C17.5678 84.756 17.8118 84.496 18.1238 84.312C18.4358 84.128 18.7998 84.036 19.2158 84.036C20.1118 84.036 20.6918 84.428 20.9558 85.212C21.1398 84.844 21.4038 84.556 21.7478 84.348C22.0918 84.14 22.4838 84.036 22.9238 84.036C24.2358 84.036 24.8918 84.82 24.8918 86.388V90H23.6798V86.448C23.6798 85.952 23.5918 85.588 23.4158 85.356C23.2478 85.124 22.9678 85.008 22.5758 85.008C22.1358 85.008 21.7878 85.164 21.5318 85.476C21.2758 85.78 21.1478 86.196 21.1478 86.724V90H19.9358V86.448C19.9358 85.952 19.8518 85.588 19.6838 85.356C19.5158 85.124 19.2358 85.008 18.8438 85.008C18.4038 85.008 18.0558 85.164 17.7998 85.476C17.5518 85.78 17.4278 86.196 17.4278 86.724V90H16.2158Z"
                      fill="#78BED5"
                    />
                    <path
                      d="M0.708 100.36V99.388C0.708 99.028 0.768 98.696 0.888 98.392C1.016 98.08 1.232 97.768 1.536 97.456L2.076 97.876C1.884 98.068 1.74 98.248 1.644 98.416C1.556 98.584 1.5 98.756 1.476 98.932H2.136V100.36H0.708ZM139.836 100.444L139.308 100.036C139.492 99.836 139.628 99.652 139.716 99.484C139.804 99.316 139.864 99.144 139.896 98.968H139.224V97.54H140.664V98.512C140.664 98.872 140.604 99.208 140.484 99.52C140.364 99.832 140.148 100.14 139.836 100.444ZM141.931 101.572V100.144H143.359V101.572H141.931ZM142.543 107.476L142.015 107.068C142.199 106.868 142.335 106.684 142.423 106.516C142.511 106.348 142.567 106.176 142.591 106H141.931V104.572H143.359V105.544C143.359 105.912 143.299 106.248 143.179 106.552C143.059 106.864 142.847 107.172 142.543 107.476Z"
                      fill="white"
                    />
                    <path
                      d="M8.66766 107.968C7.65166 107.968 6.75566 107.752 5.97966 107.32C5.21166 106.896 4.61166 106.292 4.17966 105.508C3.75566 104.724 3.54366 103.804 3.54366 102.748C3.54366 101.956 3.67166 101.236 3.92766 100.588C4.18366 99.932 4.54366 99.368 5.00766 98.896C5.47966 98.424 6.03966 98.064 6.68766 97.816C7.34366 97.56 8.06366 97.432 8.84766 97.432C9.78366 97.432 10.5997 97.616 11.2957 97.984C11.9997 98.352 12.5477 98.872 12.9397 99.544C13.3317 100.208 13.5277 100.988 13.5277 101.884C13.5277 102.572 13.4317 103.172 13.2397 103.684C13.0477 104.196 12.7797 104.592 12.4357 104.872C12.0917 105.152 11.6877 105.292 11.2237 105.292C10.8317 105.292 10.5117 105.2 10.2637 105.016C10.0157 104.832 9.85966 104.572 9.79566 104.236C9.57166 104.588 9.30366 104.852 8.99166 105.028C8.68766 105.204 8.36366 105.292 8.01966 105.292C7.38766 105.292 6.89566 105.096 6.54366 104.704C6.19966 104.312 6.02766 103.772 6.02766 103.084C6.02766 102.5 6.13966 101.98 6.36366 101.524C6.58766 101.06 6.89566 100.696 7.28766 100.432C7.67966 100.168 8.12366 100.036 8.61966 100.036C9.35566 100.036 9.85166 100.336 10.1077 100.936L10.2517 100.144H11.1877L10.6717 103.156C10.6237 103.388 10.5997 103.592 10.5997 103.768C10.5997 104.28 10.8277 104.536 11.2837 104.536C11.7157 104.536 12.0637 104.292 12.3277 103.804C12.5917 103.316 12.7237 102.676 12.7237 101.884C12.7237 101.132 12.5637 100.484 12.2437 99.94C11.9317 99.388 11.4837 98.964 10.8997 98.668C10.3157 98.372 9.62766 98.224 8.83566 98.224C7.95566 98.224 7.18366 98.412 6.51966 98.788C5.86366 99.156 5.35166 99.68 4.98366 100.36C4.61566 101.04 4.43166 101.836 4.43166 102.748C4.43166 103.668 4.60366 104.46 4.94766 105.124C5.29166 105.788 5.77966 106.296 6.41166 106.648C7.05166 107 7.80366 107.176 8.66766 107.176C9.29166 107.176 9.85966 107.08 10.3717 106.888C10.8837 106.704 11.3157 106.44 11.6677 106.096L12.0997 106.768C11.7157 107.152 11.2277 107.448 10.6357 107.656C10.0437 107.864 9.38766 107.968 8.66766 107.968ZM8.17566 104.488C8.50366 104.488 8.79566 104.388 9.05166 104.188C9.31566 103.98 9.51966 103.7 9.66366 103.348C9.81566 102.988 9.89166 102.58 9.89166 102.124C9.89166 101.276 9.51166 100.852 8.75166 100.852C8.41566 100.852 8.11566 100.948 7.85166 101.14C7.59566 101.332 7.39166 101.596 7.23966 101.932C7.09566 102.26 7.02366 102.64 7.02366 103.072C7.02366 103.528 7.12366 103.88 7.32366 104.128C7.52366 104.368 7.80766 104.488 8.17566 104.488ZM16.9506 106.108C16.5426 106.108 16.1786 106.028 15.8586 105.868C15.5386 105.708 15.2826 105.492 15.0906 105.22C14.9066 104.948 14.8146 104.64 14.8146 104.296C14.8146 103.864 14.9226 103.524 15.1386 103.276C15.3626 103.028 15.7266 102.848 16.2306 102.736C16.7426 102.624 17.4306 102.568 18.2946 102.568H18.7026V102.256C18.7026 101.8 18.6066 101.472 18.4146 101.272C18.2226 101.072 17.9066 100.972 17.4666 100.972C17.1306 100.972 16.7946 101.024 16.4586 101.128C16.1226 101.224 15.7786 101.38 15.4266 101.596L15.0546 100.744C15.3586 100.528 15.7386 100.356 16.1946 100.228C16.6506 100.1 17.0866 100.036 17.5026 100.036C18.3026 100.036 18.8946 100.228 19.2786 100.612C19.6626 100.988 19.8546 101.58 19.8546 102.388V106H18.7146V105.028C18.5706 105.364 18.3466 105.628 18.0426 105.82C17.7386 106.012 17.3746 106.108 16.9506 106.108ZM17.1906 105.244C17.6226 105.244 17.9826 105.092 18.2706 104.788C18.5586 104.484 18.7026 104.1 18.7026 103.636V103.312H18.3066C17.7226 103.312 17.2626 103.34 16.9266 103.396C16.5986 103.452 16.3626 103.548 16.2186 103.684C16.0826 103.812 16.0146 103.992 16.0146 104.224C16.0146 104.528 16.1186 104.776 16.3266 104.968C16.5346 105.152 16.8226 105.244 17.1906 105.244ZM21.5239 106V100.144H22.6999V101.188C23.0039 100.492 23.6359 100.104 24.5959 100.024L24.9919 100L25.0759 101.032L24.3439 101.104C23.2799 101.208 22.7479 101.756 22.7479 102.748V106H21.5239ZM28.4984 106.108C27.8984 106.108 27.3784 105.984 26.9384 105.736C26.5064 105.48 26.1704 105.124 25.9304 104.668C25.6904 104.204 25.5704 103.66 25.5704 103.036C25.5704 102.108 25.8344 101.376 26.3624 100.84C26.8904 100.304 27.6024 100.036 28.4984 100.036C28.8664 100.036 29.2304 100.1 29.5904 100.228C29.9504 100.356 30.2464 100.532 30.4784 100.756L30.0944 101.608C29.8704 101.4 29.6224 101.248 29.3504 101.152C29.0864 101.048 28.8344 100.996 28.5944 100.996C28.0264 100.996 27.5864 101.176 27.2744 101.536C26.9704 101.888 26.8184 102.392 26.8184 103.048C26.8184 103.704 26.9704 104.22 27.2744 104.596C27.5864 104.964 28.0264 105.148 28.5944 105.148C28.8344 105.148 29.0864 105.1 29.3504 105.004C29.6224 104.9 29.8704 104.744 30.0944 104.536L30.4784 105.4C30.2464 105.616 29.9464 105.788 29.5784 105.916C29.2184 106.044 28.8584 106.108 28.4984 106.108ZM33.9468 106.108C33.3548 106.108 32.8428 105.984 32.4108 105.736C31.9788 105.488 31.6428 105.14 31.4028 104.692C31.1708 104.236 31.0548 103.696 31.0548 103.072C31.0548 102.448 31.1708 101.912 31.4028 101.464C31.6428 101.008 31.9788 100.656 32.4108 100.408C32.8428 100.16 33.3548 100.036 33.9468 100.036C34.5228 100.036 35.0268 100.16 35.4588 100.408C35.8908 100.656 36.2268 101.008 36.4668 101.464C36.7068 101.912 36.8268 102.448 36.8268 103.072C36.8268 103.696 36.7068 104.236 36.4668 104.692C36.2268 105.14 35.8908 105.488 35.4588 105.736C35.0268 105.984 34.5228 106.108 33.9468 106.108ZM33.9468 105.172C34.4428 105.172 34.8428 104.992 35.1468 104.632C35.4508 104.272 35.6028 103.752 35.6028 103.072C35.6028 102.392 35.4508 101.876 35.1468 101.524C34.8428 101.164 34.4428 100.984 33.9468 100.984C33.4428 100.984 33.0388 101.164 32.7348 101.524C32.4308 101.876 32.2788 102.392 32.2788 103.072C32.2788 103.752 32.4308 104.272 32.7348 104.632C33.0388 104.992 33.4428 105.172 33.9468 105.172ZM38.3517 103.288V102.304H41.8077V103.288H38.3517ZM45.916 106.108C45.404 106.108 44.952 105.988 44.56 105.748C44.176 105.5 43.876 105.148 43.66 104.692C43.444 104.236 43.336 103.696 43.336 103.072C43.336 102.448 43.444 101.912 43.66 101.464C43.876 101.008 44.176 100.656 44.56 100.408C44.944 100.16 45.396 100.036 45.916 100.036C46.356 100.036 46.748 100.132 47.092 100.324C47.436 100.516 47.692 100.776 47.86 101.104V97.54H49.072V106H47.884V104.98C47.716 105.332 47.456 105.608 47.104 105.808C46.76 106.008 46.364 106.108 45.916 106.108ZM46.228 105.172C46.724 105.172 47.124 104.992 47.428 104.632C47.732 104.272 47.884 103.752 47.884 103.072C47.884 102.392 47.732 101.876 47.428 101.524C47.124 101.164 46.724 100.984 46.228 100.984C45.724 100.984 45.32 101.164 45.016 101.524C44.712 101.876 44.56 102.392 44.56 103.072C44.56 103.752 44.712 104.272 45.016 104.632C45.32 104.992 45.724 105.172 46.228 105.172ZM53.5219 106.108C52.5619 106.108 51.8059 105.84 51.2539 105.304C50.7019 104.76 50.4259 104.02 50.4259 103.084C50.4259 102.484 50.5459 101.956 50.7859 101.5C51.0339 101.036 51.3739 100.676 51.8059 100.42C52.2379 100.164 52.7339 100.036 53.2939 100.036C54.1019 100.036 54.7379 100.296 55.2019 100.816C55.6659 101.328 55.8979 102.036 55.8979 102.94V103.348H51.6019C51.6899 104.564 52.3339 105.172 53.5339 105.172C53.8699 105.172 54.1979 105.12 54.5179 105.016C54.8459 104.912 55.1539 104.74 55.4419 104.5L55.8019 105.34C55.5379 105.58 55.1979 105.768 54.7819 105.904C54.3659 106.04 53.9459 106.108 53.5219 106.108ZM53.3419 100.888C52.8379 100.888 52.4379 101.044 52.1419 101.356C51.8459 101.668 51.6659 102.084 51.6019 102.604H54.8779C54.8539 102.06 54.7099 101.64 54.4459 101.344C54.1819 101.04 53.8139 100.888 53.3419 100.888ZM59.2712 106.108C58.7912 106.108 58.3432 106.048 57.9272 105.928C57.5112 105.8 57.1632 105.624 56.8832 105.4L57.2312 104.584C57.5272 104.792 57.8512 104.952 58.2032 105.064C58.5632 105.176 58.9232 105.232 59.2832 105.232C59.7072 105.232 60.0272 105.156 60.2432 105.004C60.4592 104.852 60.5672 104.648 60.5672 104.392C60.5672 104.184 60.4952 104.024 60.3512 103.912C60.2072 103.792 59.9912 103.7 59.7032 103.636L58.5632 103.408C57.5552 103.2 57.0512 102.68 57.0512 101.848C57.0512 101.296 57.2712 100.856 57.7112 100.528C58.1512 100.2 58.7272 100.036 59.4392 100.036C59.8472 100.036 60.2352 100.096 60.6032 100.216C60.9792 100.336 61.2912 100.516 61.5392 100.756L61.1912 101.572C60.9512 101.364 60.6752 101.204 60.3632 101.092C60.0512 100.98 59.7432 100.924 59.4392 100.924C59.0232 100.924 58.7072 101.004 58.4912 101.164C58.2752 101.316 58.1672 101.524 58.1672 101.788C58.1672 102.188 58.4312 102.444 58.9592 102.556L60.0992 102.784C60.6192 102.888 61.0112 103.064 61.2752 103.312C61.5472 103.56 61.6832 103.896 61.6832 104.32C61.6832 104.88 61.4632 105.32 61.0232 105.64C60.5832 105.952 59.9992 106.108 59.2712 106.108ZM62.9237 98.788V97.528H64.3397V98.788H62.9237ZM63.0317 106V100.144H64.2437V106H63.0317ZM68.6017 108.268C68.0737 108.268 67.5817 108.204 67.1257 108.076C66.6697 107.956 66.2657 107.764 65.9137 107.5L66.2857 106.636C66.6377 106.876 66.9977 107.052 67.3657 107.164C67.7337 107.276 68.1177 107.332 68.5177 107.332C69.6377 107.332 70.1977 106.772 70.1977 105.652V104.728C70.0297 105.08 69.7657 105.356 69.4057 105.556C69.0537 105.756 68.6577 105.856 68.2177 105.856C67.6897 105.856 67.2297 105.736 66.8377 105.496C66.4457 105.248 66.1417 104.908 65.9257 104.476C65.7097 104.036 65.6017 103.524 65.6017 102.94C65.6017 102.364 65.7097 101.86 65.9257 101.428C66.1417 100.988 66.4457 100.648 66.8377 100.408C67.2297 100.16 67.6897 100.036 68.2177 100.036C68.6657 100.036 69.0657 100.136 69.4177 100.336C69.7697 100.536 70.0297 100.812 70.1977 101.164V100.144H71.3737V105.508C71.3737 106.428 71.1377 107.116 70.6657 107.572C70.1937 108.036 69.5057 108.268 68.6017 108.268ZM68.5057 104.908C69.0177 104.908 69.4257 104.732 69.7297 104.38C70.0337 104.028 70.1857 103.548 70.1857 102.94C70.1857 102.332 70.0337 101.856 69.7297 101.512C69.4257 101.16 69.0177 100.984 68.5057 100.984C67.9937 100.984 67.5857 101.16 67.2817 101.512C66.9777 101.856 66.8257 102.332 66.8257 102.94C66.8257 103.548 66.9777 104.028 67.2817 104.38C67.5857 104.732 67.9937 104.908 68.5057 104.908ZM73.0747 106V100.144H74.2507V101.116C74.4507 100.764 74.7227 100.496 75.0667 100.312C75.4187 100.128 75.8107 100.036 76.2427 100.036C77.6267 100.036 78.3187 100.82 78.3187 102.388V106H77.1067V102.46C77.1067 101.956 77.0067 101.588 76.8067 101.356C76.6147 101.124 76.3107 101.008 75.8947 101.008C75.4067 101.008 75.0147 101.164 74.7187 101.476C74.4307 101.78 74.2867 102.184 74.2867 102.688V106H73.0747ZM79.8327 106.792L78.9087 106.516L81.9927 96.94L82.9287 97.216L79.8327 106.792ZM84.7719 106L82.5399 100.144H83.7879L85.3599 104.584L86.9799 100.144H87.9159L89.5119 104.608L91.1079 100.144H92.2959L90.0639 106H88.9599L87.4119 101.812L85.8759 106H84.7719ZM95.9789 106.108C95.0189 106.108 94.2629 105.84 93.7109 105.304C93.1589 104.76 92.8829 104.02 92.8829 103.084C92.8829 102.484 93.0029 101.956 93.2429 101.5C93.4909 101.036 93.8309 100.676 94.2629 100.42C94.6949 100.164 95.1909 100.036 95.7509 100.036C96.5589 100.036 97.1949 100.296 97.6589 100.816C98.1229 101.328 98.3549 102.036 98.3549 102.94V103.348H94.0589C94.1469 104.564 94.7909 105.172 95.9909 105.172C96.3269 105.172 96.6549 105.12 96.9749 105.016C97.3029 104.912 97.6109 104.74 97.8989 104.5L98.2589 105.34C97.9949 105.58 97.6549 105.768 97.2389 105.904C96.8229 106.04 96.4029 106.108 95.9789 106.108ZM95.7989 100.888C95.2949 100.888 94.8949 101.044 94.5989 101.356C94.3029 101.668 94.1229 102.084 94.0589 102.604H97.3349C97.3109 102.06 97.1669 101.64 96.9029 101.344C96.6389 101.04 96.2709 100.888 95.7989 100.888ZM102.82 106.108C102.372 106.108 101.976 106.008 101.632 105.808C101.288 105.608 101.032 105.34 100.864 105.004V106H99.6762V97.54H100.888V101.092C101.064 100.772 101.32 100.516 101.656 100.324C102 100.132 102.388 100.036 102.82 100.036C103.34 100.036 103.792 100.16 104.176 100.408C104.568 100.656 104.868 101.008 105.076 101.464C105.292 101.912 105.4 102.448 105.4 103.072C105.4 103.696 105.292 104.236 105.076 104.692C104.868 105.148 104.568 105.5 104.176 105.748C103.792 105.988 103.34 106.108 102.82 106.108ZM102.52 105.172C103.024 105.172 103.424 104.992 103.72 104.632C104.024 104.272 104.176 103.752 104.176 103.072C104.176 102.392 104.024 101.876 103.72 101.524C103.424 101.164 103.024 100.984 102.52 100.984C102.016 100.984 101.612 101.164 101.308 101.524C101.012 101.876 100.864 102.392 100.864 103.072C100.864 103.752 101.012 104.272 101.308 104.632C101.612 104.992 102.016 105.172 102.52 105.172ZM106.93 103.288V102.304H110.386V103.288H106.93ZM112.086 106V100.144H113.262V101.188C113.566 100.492 114.198 100.104 115.158 100.024L115.554 100L115.638 101.032L114.906 101.104C113.842 101.208 113.31 101.756 113.31 102.748V106H112.086ZM119.229 106.108C118.269 106.108 117.513 105.84 116.961 105.304C116.409 104.76 116.133 104.02 116.133 103.084C116.133 102.484 116.253 101.956 116.493 101.5C116.741 101.036 117.081 100.676 117.513 100.42C117.945 100.164 118.441 100.036 119.001 100.036C119.809 100.036 120.445 100.296 120.909 100.816C121.373 101.328 121.605 102.036 121.605 102.94V103.348H117.309C117.397 104.564 118.041 105.172 119.241 105.172C119.577 105.172 119.905 105.12 120.225 105.016C120.553 104.912 120.861 104.74 121.149 104.5L121.509 105.34C121.245 105.58 120.905 105.768 120.489 105.904C120.073 106.04 119.653 106.108 119.229 106.108ZM119.049 100.888C118.545 100.888 118.145 101.044 117.849 101.356C117.553 101.668 117.373 102.084 117.309 102.604H120.585C120.561 102.06 120.417 101.64 120.153 101.344C119.889 101.04 119.521 100.888 119.049 100.888ZM124.798 106.108C124.39 106.108 124.026 106.028 123.706 105.868C123.386 105.708 123.13 105.492 122.938 105.22C122.754 104.948 122.662 104.64 122.662 104.296C122.662 103.864 122.77 103.524 122.986 103.276C123.21 103.028 123.574 102.848 124.078 102.736C124.59 102.624 125.278 102.568 126.142 102.568H126.55V102.256C126.55 101.8 126.454 101.472 126.262 101.272C126.07 101.072 125.754 100.972 125.314 100.972C124.978 100.972 124.642 101.024 124.306 101.128C123.97 101.224 123.626 101.38 123.274 101.596L122.902 100.744C123.206 100.528 123.586 100.356 124.042 100.228C124.498 100.1 124.934 100.036 125.35 100.036C126.15 100.036 126.742 100.228 127.126 100.612C127.51 100.988 127.702 101.58 127.702 102.388V106H126.562V105.028C126.418 105.364 126.194 105.628 125.89 105.82C125.586 106.012 125.222 106.108 124.798 106.108ZM125.038 105.244C125.47 105.244 125.83 105.092 126.118 104.788C126.406 104.484 126.55 104.1 126.55 103.636V103.312H126.154C125.57 103.312 125.11 103.34 124.774 103.396C124.446 103.452 124.21 103.548 124.066 103.684C123.93 103.812 123.862 103.992 123.862 104.224C123.862 104.528 123.966 104.776 124.174 104.968C124.382 105.152 124.67 105.244 125.038 105.244ZM131.952 106.108C131.352 106.108 130.832 105.984 130.392 105.736C129.96 105.48 129.624 105.124 129.384 104.668C129.144 104.204 129.024 103.66 129.024 103.036C129.024 102.108 129.288 101.376 129.816 100.84C130.344 100.304 131.056 100.036 131.952 100.036C132.32 100.036 132.684 100.1 133.044 100.228C133.404 100.356 133.7 100.532 133.932 100.756L133.548 101.608C133.324 101.4 133.076 101.248 132.804 101.152C132.54 101.048 132.288 100.996 132.048 100.996C131.48 100.996 131.04 101.176 130.728 101.536C130.424 101.888 130.272 102.392 130.272 103.048C130.272 103.704 130.424 104.22 130.728 104.596C131.04 104.964 131.48 105.148 132.048 105.148C132.288 105.148 132.54 105.1 132.804 105.004C133.076 104.9 133.324 104.744 133.548 104.536L133.932 105.4C133.7 105.616 133.4 105.788 133.032 105.916C132.672 106.044 132.312 106.108 131.952 106.108ZM137.481 106.108C136.745 106.108 136.197 105.92 135.837 105.544C135.477 105.168 135.297 104.624 135.297 103.912V101.08H134.157V100.144H135.297V98.38H136.509V100.144H138.321V101.08H136.509V103.816C136.509 104.24 136.597 104.56 136.773 104.776C136.957 104.992 137.253 105.1 137.661 105.1C137.789 105.1 137.913 105.088 138.033 105.064C138.153 105.032 138.273 104.996 138.393 104.956L138.585 105.868C138.465 105.94 138.297 105.996 138.081 106.036C137.873 106.084 137.673 106.108 137.481 106.108Z"
                      fill="#C591E8"
                    />
                    <path
                      d="M3.048 14.16C2.632 14.16 2.308 14.044 2.076 13.812C1.852 13.588 1.74 13.26 1.74 12.828V10.284C1.74 9.956 1.676 9.72 1.548 9.576C1.428 9.432 1.22 9.348 0.924 9.324L0.552 9.3V8.4L0.924 8.364C1.22 8.348 1.428 8.268 1.548 8.124C1.676 7.972 1.74 7.736 1.74 7.416V4.872C1.74 4.44 1.852 4.112 2.076 3.888C2.308 3.656 2.632 3.54 3.048 3.54H4.32V4.476H3.468C3.124 4.476 2.952 4.652 2.952 5.004V7.548C2.952 7.876 2.864 8.16 2.688 8.4C2.52 8.64 2.308 8.792 2.052 8.856C2.308 8.912 2.52 9.06 2.688 9.3C2.864 9.54 2.952 9.824 2.952 10.152V12.696C2.952 13.048 3.124 13.224 3.468 13.224H4.32V14.16H3.048Z"
                      fill="white"
                    />
                    <path
                      d="M0.12 76.16V75.224H0.972C1.316 75.224 1.488 75.048 1.488 74.696V72.152C1.488 71.824 1.572 71.54 1.74 71.3C1.916 71.06 2.136 70.912 2.4 70.856C2.136 70.792 1.916 70.64 1.74 70.4C1.572 70.16 1.488 69.876 1.488 69.548V67.004C1.488 66.652 1.316 66.476 0.972 66.476H0.12V65.54H1.38C1.804 65.54 2.128 65.656 2.352 65.888C2.584 66.12 2.7 66.448 2.7 66.872V69.416C2.7 69.744 2.76 69.98 2.88 70.124C3.008 70.268 3.22 70.348 3.516 70.364L3.888 70.4V71.3L3.516 71.324C3.22 71.348 3.008 71.432 2.88 71.576C2.76 71.72 2.7 71.956 2.7 72.284V74.828C2.7 75.252 2.584 75.58 2.352 75.812C2.128 76.044 1.804 76.16 1.38 76.16H0.12Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div id="scene" data-calibrate-x="true" data-calibrate-y="true">
              <div data-depth="0.1">
                <div className="float-logo float-logo-1">
                  <img src={floatIcon1} alt="floatIcon" />
                </div>
              </div>
              <div data-depth="0.2">
                <div className="float-logo float-logo-2">
                  <img src={floatIcon2} alt="floatIcon" />
                </div>
              </div>
              <div data-depth="0.1">
                <div className="float-logo float-logo-3">
                  <img src={floatIcon3} alt="floatIcon" />
                </div>
              </div>
              <div data-depth="0.05">
                <div className="float-logo float-logo-4">
                  <img src={floatIcon4} alt="floatIcon" />
                </div>
              </div>
              <div data-depth="0.14">
                <div className="float-logo float-logo-5">
                  <img src={floatIcon4} alt="floatIcon" />
                </div>
              </div>
              <div data-depth="0.04">
                <div className="float-logo float-logo-6">
                  <img src={floatIcon4} alt="floatIcon" />
                </div>
              </div>
              <div data-depth="0.05">
                <div className="float-logo float-logo-7">
                  <img src={floatIcon4} alt="floatIcon" />
                </div>
              </div>
            </div>
            <div className="bg_light"></div>
          </div>
        </div>
      </main>

      {/* <section id="videos">
        <div>
          <video loop autoPlay muted src={vid_1} type="video/mp4" />
        </div>
        <div>
          <video loop autoPlay muted src={vid_2} type="video/mp4" />
        </div>
        <div>
          <video loop autoPlay muted src={vid_3} type="video/mp4" />
        </div>
        <div>
          <video loop autoPlay muted src={vid_4} type="video/mp4" />
        </div>
        <div>
          <video loop autoPlay muted src={vid_5} type="video/mp4" />
        </div>
        <div>
          <video loop autoPlay muted src={vid_6} type="video/mp4" />
        </div>
      </section> */}
      <div className="menu-icon" onClick={handlePanel}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.5 5L5 5L5 2.5L2.5 2.5L2.5 5ZM5 11.25L2.5 11.25L2.5 8.75L5 8.75L5 11.25ZM17.5 11.25L15 11.25L15 8.75L17.5 8.75L17.5 11.25ZM8.75 11.25L11.25 11.25L11.25 8.75L8.75 8.75L8.75 11.25ZM5 17.5L2.5 17.5L2.5 15L5 15L5 17.5ZM15 17.5L17.5 17.5L17.5 15L15 15L15 17.5ZM11.25 17.5L8.75 17.5L8.75 15L11.25 15L11.25 17.5ZM17.5 5L15 5L15 2.5L17.5 2.5L17.5 5ZM8.75 5L11.25 5L11.25 2.5L8.75 2.5L8.75 5Z"
            fill="#165DFF"
          />
        </svg>
      </div>
      <section id="panel" className={`${panelOpen ? "panel-open" : ""}`}>
        {/* <div className="panel_main"> */}
        {logoData.map((t) => {
          return (
            <LogoItem
              logoB={t.logoB}
              logo={t.logo}
              title={t.title}
              des={t.des}
            />
          );
        })}
        {/* </div> */}
        <span className="panel-bg"></span>
      </section>
    </AppCss>
  );
}

export default App;
