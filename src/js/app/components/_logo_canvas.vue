<style scoped lang='scss'>
@import "../../../styles/_mixins.scss";

.logo_canvas {
  &.mini{
      .subtitle{
          display: none !important;
      }
  }
  .stage {
    display: inline-block;
    vertical-align: middle;
  }

  .content {
    display: inline-block;
    vertical-align: middle;
    font-family: TrumpTownPro;
    text-align: left;
    color: $color_drakblue;
    .title,
    .subtitle {
      margin: 0;
      overflow: hidden;
    }

    .title {
      font-size: 50px;
      @include strictHeight(50px);
      @include transition(all 0.5s ease-in-out 0.1s);
      opacity: 1;
      &.hide{
          opacity: 0;
      }
    }

    .subtitle {
      margin-top: 10px;
      font-size: 35px;
      opacity: 1;
      @include transition(all 0.5s ease-in-out 0.6s);
      @include strictHeight(35px);
      &.hide{
          opacity: 0;
      }
    }
  }
}
</style>

<template>
<div class="logo_canvas" :class="{'mini': mode === 'mini'}">
    <canvas class="stage"></canvas>
    <div class="content">
        <p class="title hide">boi</p>
        <p class="subtitle hide">build for elegance</p>
    </div>
</div>
</template>

<script>
import LogoCanvas from '../classes/class.logo.js';

export default {
    props: {
        size: {
            type: Object,
            required: true
        },
        mode: {
            type: String
        }
    },
    ready: function() {
        let _this = this;
        let stage = $('.logo_canvas .stage')[0],
        $title = $('.logo_canvas .title'),
        $subTitle = $('.logo_canvas .subtitle');

        let logo = new LogoCanvas(stage,{
            width: _this.size.width,
            height: _this.size.height
        });

        let duration = logo.baseParams.drawDuration;

        setTimeout(function(){
            $title.removeClass('hide');
            $subTitle.removeClass('hide');
        },duration);

        logo.draw();

    }
}

</script>
