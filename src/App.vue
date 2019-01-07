<template>
  <div id="app">
    <div class="page-wrapper">
      <header id="header"></header>
      <div class="banner-image">
        <nav class="menu">
          <main-menu></main-menu>
          <ul class="lang-switcher">
            <li>
              <a id="en" @click="switchEN" href="#" class="is-active">En</a>
            </li>
            <li>
              <a id="tr" @click="switchTR" href="#">Tr</a>
            </li>
          </ul>
        </nav>
        <div class="welcome-text">{{ $t("message.slogan") }}</div>
        <div class="lover-birds">
          <img src="src/assets/icons/birds_icon.png">
        </div>
        <h1>
          GULISTAN
          <span>&</span> MUHARREM
        </h1>
        <div class="title-date">
          <span>04.05.2019</span>
        </div>
      </div>
      <counter></counter>
    </div>
    <div class="about" id="about">
      <h2>{{$t("message.name")}}</h2>
      <p>{{$t("message.text")}}</p>
    </div>
    <div class="locations-container" id="location">
      <div class="locations">
        <div v-for="place in places" :key="place.name">
          <location :place="place"></location>
        </div>
      </div>
    </div>
    <div class="get-in-touch" id="get-in-touch">
      <h2 class="getintch">{{$t("contact.title")}}</h2>
      <p class="p-getintch">{{$t("contact.text")}}</p>
      <div class="contact-email">
        <a href="mailto:gmjevleniyor@gmail.com?Subject=Hello%20again">gmjevleniyor@gmail.com</a>
      </div>
    </div>
    <div class="footer">
      <span>
        <img src="src/assets/icons/birds_icon.png">
      </span>

      <div class="save-the-date">{{$t("message.footer")}}</div>
      <div class="footer_socials">
        <ul>
          <li>
            <a href="#">
              <img src="src/assets/icons/twitter.png" alt="twitter-gmj" title>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="src/assets/icons/pinterest.png" alt="pinterest-gmj" title>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="src/assets/icons/instagram.png" alt="insta-gmj" title>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer_copyright">{{$t("message.madeby")}}</div>
    </div>
  </div>
</template>

<script>
import Counter from "./Counter.vue";
import Location from "./Location.vue";
import Menu from "./Menu.vue";
import VueI18n from "vue-i18n";

export default {
  components: {
    counter: Counter,
    location: Location,
    "main-menu": Menu
  },
  methods: {
    switchEN: function() {
      this.$i18n.locale = "en";
    },
    switchTR: function() {
      this.$i18n.locale = "tr";
    }
  },
  data() {
    return {
      places: [
        {
          location: "Buldan",
          lat: "38.044215",
          lon: "28.8340475"
        },
        {
          location: "Denizli",
          lat: "37.8175215",
          lon: "29.1210704"
        },
        {
          location: "Isparta",
          lat: "37.7763314",
          lon: "30.5341646"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Clicker+Script|Open+Sans");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,800");
html {
  scroll-behavior: smooth;
}

#app {
  font-family: "Open Sans", sans-serif;
  text-align: center;
}

body {
  margin: 0;
  width: 100%;
}

.banner-image {
  background: url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bfef355c0cf4898112f3c63cd8bb4bf9&auto=format&fit=crop&w=1650&q=80")
    no-repeat fixed center;
  height: auto;
  position: relative;
  width: 100%;
}

.menu {
  background: url("/icons/menu_border_bottom.png") no-repeat center bottom;
  padding: 0px;
  width: 100%;
  text-align: center;
}

.welcome-text {
  color: #ffffff;
  font-weight: 800;
  font-size: 20px;
  padding: 30px 0 30px 0;
}

h1 {
  color: white;
  font-family: "Clicker Script", cursive;
  font-size: 100px;
  font-weight: 100;
  padding: 0;
}

.lang-switcher {
  float: left;
  font-weight: 100;
  margin: 0;
  right: 60px;
  padding: 0;
  position: absolute;
  top: 35px;
  text-transform: uppercase;
  li {
    border-right: 1px solid #ffffff;
    display: inline-block;
    margin-right: 0px;
    &:last-child {
      border-right: none;
      margin-left: 0px;
    }
    a {
      color: #ffffff;
      display: inline-block;
      height: 100%;
      line-height: unset;
      min-width: 40px;
      padding: 3px 5px;
      text-decoration: none;
      transition: all 0.5s ease;
    }
  }
}

.lover-birds {
  padding: 40px 0px 20px;
}

span {
  color: #d7d677;
}

.title-date {
  color: #ffffff;
  font-weight: 800;
  font-size: 30px;
  padding: 0 0 80px 0;
}

.about {
  color: #6e6a5f;
  h2 {
    font-size: 65px;
    font-family: "Clicker Script", cursive;
    font-weight: 300;
    margin-bottom: 0px;
  }
  p {
    font-size: 20px;
    font-weight: 200;
    line-height: 32px;
    padding: 30px 150px;
  }
}

.locations-container {
  background-color: #f6f5ec;
  height: 340px;
  padding: 60px 0 0px 0;
  width: 100%;
}

.locations {
  margin: auto;
  padding: 0px 0;
  width: 1100px;
  .get-direction {
    border: 1px #999700 solid;
    display: inline-block;
    padding: 12px 30px;
    width: auto;
    margin: auto;
    font-size: 11px;
    font-weight: 800;
    color: #999700;
    line-height: 10px;
    margin-bottom: 70px;
    margin-top: 20px;
  }
}

.get-in-touch {
  margin-top: 50px;
  h2 {
    font-weight: 800;
    font-size: 26px;
    clear: both;
  }
  p {
    padding: 0px 150px;
    color: #6e6a5f;
    line-height: 32px;
    font-size: 20px;
    font-weight: 200;
  }
}

.contact-email {
  border: 1px solid #b5af47;
  display: inline-block;
  font-weight: 800;
  margin: 20px 0 60px 0;
  padding: 15px 30px;
  text-transform: uppercase;
  a {
    color: #b5af47;
    text-decoration: none;
  }
}

.footer {
  background-color: #2d2e21;
  clear: both;
  padding: 40px 0 20px 0;
  width: 100%;
}

.full_width_centered {
  margin: auto;
  padding: 0;
  width: 1100px;
}

.save-the-date {
  color: #b5af47;
  font-weight: 800;
  font-size: 30px;
}

.footer_socials {
  display: flex;
  justify-content: center;
  padding: 40px 0;
  ul {
    padding-left: 0;
  }
  li {
    display: inline-block;
    list-style: none;
    margin: 0px;
    padding: 0px;
  }
}

.footer_copyright {
  color: #b5af47;
  font-size: 15px;
}

@media screen and (min-width: 768px) {
  .banner-image {
    background-position: top;
  }
}
</style>
