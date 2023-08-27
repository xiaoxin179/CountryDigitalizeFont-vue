<template>
  <footer class="footer">
    <ul class="footer__nav">
      <li class="nav__item">
        <h2 class="nav__title">项目</h2>

        <ul class="nav__ul">
          <li>
            <a href="#">下载</a>
          </li>

          <li>
            <a href="#">变更日志</a>
          </li>

          <li>
            <a href="#">所有版本</a>
          </li>
        </ul>
      </li>

      <li class="nav__item">
        <h2 class="nav__title">社区</h2>

        <ul class="nav__ul">
          <li>
            <a href="#">Github</a>
          </li>

          <li>
            <a href="#">Gitee</a>
          </li>

          <li>
            <a href="#">Facebook</a>
          </li>
        </ul>
      </li>

      <li class="nav__item">
         
        <h2 class="nav__title">帮助</h2>
        <font-awesome-icon icon="fa-solid fa-headphones" />
        <ul class="nav__ul">
          <li>
            <a href="#">支持</a>
          </li>

          <li>
            <a href="#">故障排除</a>
          </li>

          <li>
            <a href="#">联系我们</a>
          </li>
        </ul>
      </li>
      <div class="footer__addr">
        <address class="EmailUs">
          <Icon
            icon="ic:outline-mark-email-unread"
            width="33px"
            class="icon_1"
          />
        </address>
      </div>
    </ul>

    <div class="legal">
      <p>&copy; 北方民族大学计算机科学与工程学院</p>
    </div>
  </footer>
</template>
<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
body {
  font-family: acumin-pro, system-ui, sans-serif;
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  font-size: 14px;
  background-color: #f4f4f4;
  align-items: start;
  min-height: 100vh;
}
.footer {
  display: flex;
  flex-flow: row wrap;
  padding: 30px 30px 20px 30px;
  color: #2f2f2f;
  background-color: #f2eee3;
  border-top: 1px solid #e5e5e5;
  margin-top: 5px;
}

.footer > * {
  flex: 1 100%;
}

.footer__addr {
  margin-right: 1.25em;
  margin-bottom: 2em;
  display: flex;
  text-align: right;
}

.footer__logo {
  font-family: "Pacifico", cursive;
  font-weight: 400;
  text-transform: lowercase;
  font-size: 2rem;
}

.footer__addr h2 {
  margin-top: 1.3em;
  font-size: 15px;
  font-weight: 400;
}

.nav__title {
  font-weight: 400;
  font-size: 15px;
}

.footer address {
  font-style: normal;
  color: #999;
}

.footer__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  max-width: max-content;
  background-color: rgb(33, 33, 33, 0.07);
  border-radius: 100px;
  color: #2f2f2f;
  line-height: 0;
  margin: 0.6em 0;
  font-size: 1rem;
  padding: 0 1.3em;
}

.footer ul {
  list-style: none;
  padding-left: 0;
}

.footer li {
  line-height: 2em;
}

.footer a {
  text-decoration: none;
}

.footer__nav {
  display: flex;
  flex-flow: row wrap;
}

.footer__nav > * {
  flex: 1 50%;
  margin-right: 1.25em;
}

.nav__ul a {
  color: #999;
}

.legal {
  float: right;
  text-align: right;
  flex-wrap: wrap;
  color: #999;
  font-size: 20px;
}

@media screen and (min-width: 24.375em) {
  .legal .legal__links {
    margin-left: auto;
  }
}

@media screen and (min-width: 40.375em) {
  .footer__nav > * {
    flex: 1;
  }

  .footer__addr {
    flex: 1 0px;
  }

  .footer__nav {
    flex: 2 0px;
  }
}
.EmailUs {
  margin-bottom: 30px;
  display: flex;
  padding-left: 280px;
}
.icon_1 {
  margin-top: 10px;
  margin-right: 10px;
}

</style>