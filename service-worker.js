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
    "revision": "b6af4a60ac3ec640eb6fc3b3e03da653"
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
    "url": "assets/js/12.06ef4276.js",
    "revision": "05b38751e842897cc6c68a24d7c5732c"
  },
  {
    "url": "assets/js/13.09880795.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.3ff36ed1.js",
    "revision": "730e4139a30d67ea051dc58189e3abeb"
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
    "url": "assets/js/17.42482b2c.js",
    "revision": "75746639d352033c7a1a9a7ae69b7bb7"
  },
  {
    "url": "assets/js/18.e46068ae.js",
    "revision": "2f98574d23998e4192e127bcb7188b70"
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
    "url": "assets/js/app.61910eb9.js",
    "revision": "d7cb6d3f78e7b699747e7e8fc264c04b"
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
    "revision": "890adc53ba6f8251848f4542ab3e81be"
  },
  {
    "url": "categories/java/index.html",
    "revision": "a8893aece6d83d5531d2ee749efea1c9"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "2ae1434b4088ec4a3f45dafd8864dff0"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c219dff8340da51fc5d0cf36a1292f69"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "c4a460bd3fedaa569c012a51b6093146"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "4042da6c488fbe19fd98603f55f9d77c"
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
    "revision": "01371fe891b17dd02d9071334fa6d384"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "5da9d1871f077439ad15f3b817d87a5d"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "255e75e929ad0ed95a1fc5bc7e7ef2cc"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "2be32d0289b884dd26715b1a3e07b8c2"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c12de92d4a0b437d4674d2774be713ad"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "9f71b6c6c4c42df5550aedd714c44a94"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "f48f95ae29a94bece482744d969cd8f1"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "b431dab22f8d269b3ac6ba2596b3dead"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "d5a66bf02327ad2d077b32f9d95609c1"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "66b1596616b1d477f1c028af0b4dc1e3"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "c14504cff83645f18496041fdc981f29"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "f4aa3ac9fdd8b432053196bbb3086a9d"
  },
  {
    "url": "timeline/index.html",
    "revision": "8e69854f5faf0a39a7d5f493d63c87a8"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "a90ba53fce2d547721601ae893920108"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "9249817c16607b28b9eed45f60be60b8"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "68468f1bb9596603485f4d54fa5bb937"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "8cd31aef734c3c8a2958b3e54ee94b0c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "48786ce9c2d0bb73f9a81366c36b4856"
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
