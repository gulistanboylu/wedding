<template>
  <div class="countdown" id="count-down">
    <h2>{{$t("message.countDown")}}</h2>
    <p id="down">{{ days }} {{$t("date.days")}} {{hours}} {{$t("date.hours")}} {{minutes}} {{$t("date.minutes")}} {{seconds}} {{$t("date.seconds")}}</p>
  </div>
</template>

<script>
  export default {
    name: "app",
    data() {
      return {
        days: "",
        hours: "",
        minutes: "",
        seconds: ""
      };
    },
    created: function() {
      setInterval(
        function() {
          let countDownDate = new Date("May 5, 2019 15:37:25").getTime();
          let now = new Date().getTime();
          let distance = countDownDate - now;
  
          this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
          this.hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        }.bind(this),
        1000
      );
    }
  };
</script>

<style lang="scss">
  .countdown {
    background-color: #b5af47;
    color: white!important;
    font-family: "Open Sans", sans-serif;
    text-align: center;
    h2 {
      font-family: "Open Sans", sans-serif;
      font-size: 26px;
      font-weight: 200;
      margin: 0px;
      padding: 60px 0px 0px 0px;
    }
    p {
      font-size: 40px;
      font-weight: 400;
      padding-bottom: 90px;
    }
  }
</style>
