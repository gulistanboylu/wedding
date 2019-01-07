<template>
  <ul class="main-menu">
    <li>
      <a href="#header">{{ $t("menu.home") }}</a>
    </li>
    <li>
      <a href="#count-down">{{ $t("menu.wedding") }}</a>
    </li>
    <li>
      <a href="#location">{{ $t("menu.locations") }}</a>
    </li>
    <li>
      <a href="#about">{{ $t("menu.about") }}</a>
    </li>
    <li>
      <a href="#get-in-touch">{{ $t("menu.contact") }}</a>
    </li>
  </ul>
</template>

<script>
  export default {
  
  };
</script>

<style lang="scss">
  .main-menu {
    list-style: none;
    margin: 0;
    padding: 0px;
    display: flex;
    margin-top: 0px;
    justify-content: center;
    li {
      list-style: none;
      position: relative;
      margin: 0 10px;
      a {
        font-size: 14px;
        font-family: "Open Sans", sans-serif;
        text-transform: uppercase;
        line-height: 85px;
        color: #ffffff;
        padding: 0 0 0 18px;
        font-weight: 400;
        text-decoration: none;
        font-weight: 300;
        &:hover {
          color: #d7d677;
        }
      }
    }
  }
</style>
