/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f110ba5cb7c080d5a3b5158994eda0df"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.73dc42e5.js",
    "revision": "30e828c146c3447f6cbf728cdd82e925"
  },
  {
    "url": "assets/js/10.f90154aa.js",
    "revision": "2d186e0b80e993bf73e697cd6f792bb4"
  },
  {
    "url": "assets/js/11.e8633219.js",
    "revision": "c6b1a8edcabf36b3249cd03c29f993dd"
  },
  {
    "url": "assets/js/12.cfdc75b2.js",
    "revision": "1523ab2e9237d015413223374b0b45be"
  },
  {
    "url": "assets/js/13.665ce0ec.js",
    "revision": "3130f6cea0515e294a4d8e3a6daf6239"
  },
  {
    "url": "assets/js/14.f1c8e62b.js",
    "revision": "f754bd440574752dde5184c5efa90116"
  },
  {
    "url": "assets/js/15.92bf9ad9.js",
    "revision": "556a08b194bac7e4590106cf77c70c50"
  },
  {
    "url": "assets/js/16.8c417bdc.js",
    "revision": "77d86646973db802dec199f749183516"
  },
  {
    "url": "assets/js/17.85e574f5.js",
    "revision": "679e09d1bee7f18523c034f6c3e7dbed"
  },
  {
    "url": "assets/js/18.285cfffd.js",
    "revision": "e5de0936c508067e90878438b7492fa1"
  },
  {
    "url": "assets/js/4.d94921b7.js",
    "revision": "6a9061b507f12ee2770b1f19b8e3d4da"
  },
  {
    "url": "assets/js/5.aafec39e.js",
    "revision": "1689296e32236e06547752a56f9265f6"
  },
  {
    "url": "assets/js/6.fcea16c6.js",
    "revision": "4719502381b5c3d6ac6a2e6d590b4322"
  },
  {
    "url": "assets/js/7.7fcc8b8f.js",
    "revision": "c38484adcb3f89dd39a62f70a7b1ea62"
  },
  {
    "url": "assets/js/8.8dfc7fd6.js",
    "revision": "09cca6c7b2202fa0a4d063836f72e2dd"
  },
  {
    "url": "assets/js/9.e8364819.js",
    "revision": "05c8a35278c075892025e2714a299d64"
  },
  {
    "url": "assets/js/app.c449c74a.js",
    "revision": "7512ba471d54b38440e7d5bd5fff7556"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.6ecfa24c.js",
    "revision": "0914943e5101085e2068a7393195effe"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "fa8d13466500d48660f08b1f6ca88d0d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7cbc18d3c9f413e048993b4bb07118be"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "caddb204cdf46296242e816ea2f07662"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "af1149d731c82651e5a7300f1ac842c4"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "a51dc52de89838b36c663c02ba43f9ea"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "117c2545fec57936e3d1eca4446042af"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "421350e2a6024899e35c786667f94877"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "f1d26611c433b54e9448530f2d4d5c2f"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "526fa3624623ebe80f8f9ef7277a9e4f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "3e1d667e9e8facda2cb5bad85f369114"
  },
  {
    "url": "tags/js/index.html",
    "revision": "45254bfe71d2fab5ce19bb6c10b633bc"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "284a75da0573d801a85f62f8f0cf9363"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "874cbbbfb8394cc03ff0b92726955e60"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "71defca28c22252e788bc503f5ef4be9"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "9b96d92e24a969112d6580a1020302d8"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "6040ac12bc7afb57bb9133cbbafd4fd0"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "5343228d36b21e23491380b854a7ac04"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "20c0a5aabd7e07424712eccd104746e2"
  },
  {
    "url": "timeline/index.html",
    "revision": "066ef1527f469085c3f2c5a6126ded60"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "b7f8de9df525d76f9631caab2be279da"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "28eba85c826b97e36c5d4a32a0ec9281"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "e29bba73206fc47814920a72277fd1fa"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "1655cfd5dba8bc9cace50c76f04007d0"
  },
  {
    "url": "生活分享/life.html",
    "revision": "1354d4ff1716191df3d09286ae68cf1c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
