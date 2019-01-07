<template>
  <div class="location">
    <div class="icon">
      <img src="src/assets/icons/icon_location.png" alt title>
    </div>
    <h3>{{ $t('location.' + this.place.location + '.name' ) }}</h3>
    <h4>{{ this.place.location }}</h4>
    <p class="location-p">{{ $t('location.' + this.place.location + '.text' ) }}</p>
    <a :href="'https://maps.google.com?saddr=Current+Location&daddr=' + this.place.lat + ',' +this.place.lon" class="get-direction" target="_blank">{{ $t('location.button') }}</a>
  </div>
</template>

<script>
  export default {
    props: ["place"],
    created() {
      console.log(this.place.location);
    }
  };
</script>

<style lang="scss">
  .location {
    width: 340px;
    float: left;
    /* margin: 0 40px 80px 0; */
    .icon {
      text-align: center;
    }
    h3 {
      color: #5d594d;
      font-family: "Open Sans", sans-serif;
      font-weight: 800;
      font-size: 24px;
      text-transform: uppercase;
      margin-bottom: 0px;
    }
    h4 {
      color: #b5af47;
      font-family: "Open Sans", sans-serif;
      text-transform: uppercase;
      font-size: 14px;
      margin-top: 0px;
    }
    .location-p {
      font-size: 16px;
      padding: 0 10px;
      line-height: 22px;
      color: #6e6a5f;
      font-family: "Open Sans", sans-serif;
    }
    .get-direction {
      border: 1px #999700 solid;
      display: inline-block;
      padding: 12px 30px;
      width: auto;
      margin: auto;
      text-align: center;
      font-size: 11px;
      font-weight: 800;
      color: #999700;
      line-height: 10px;
      margin-bottom: 70px;
      margin-top: 20px;
      font-family: "Open Sans", sans-serif;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 768px) {
  .location {
    width: 320px;
    }
}
</style>