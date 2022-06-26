<template>
  <body>
    <navbar></navbar>
    <div class="content">
      <router-view />
    </div>
    <foot></foot>
  </body>
</template>


<script>
import mitt from "mitt";
import navbar from "./components/NavBar.vue";
import foot from "./components/FooTre.vue";
export default {
  provide() {
    return {
      mitter: mitt(),
    };
  },
  data() {
    return {};
  },
  created() {},
  components: {
    navbar,
    foot,
  },
};
</script>

<style  lang="scss">

@import "./assets/all";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap");
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;

  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  // font-family: "MS Gothic", sans-serif;
  font-family: "MS Gothic", Helvetica, sans-serif;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
img {
  max-width: 100%;
  height: auto;
}
body {
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100vw;
  .content {
    width: 100%;
  }
}
</style>
