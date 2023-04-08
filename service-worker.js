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
    "revision": "7a2c65264c0e57458c8af660cca21cbf"
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
    "url": "assets/js/13.22a5038a.js",
    "revision": "8972b7c72d314ad6b6d13f0ede93dd3c"
  },
  {
    "url": "assets/js/14.41a592c5.js",
    "revision": "ececb7b1f746ccba84b49768dd2c5f82"
  },
  {
    "url": "assets/js/15.50a7b002.js",
    "revision": "4af495968cb4e72dfefdb55963743c7f"
  },
  {
    "url": "assets/js/16.1f0e2f0a.js",
    "revision": "77980ee985e85bc7ef25e57e082625c7"
  },
  {
    "url": "assets/js/17.8faa0753.js",
    "revision": "f8bf5c88f9cd04152dd34f36961f89d7"
  },
  {
    "url": "assets/js/18.ce4df536.js",
    "revision": "d694268519b57a4802a37a1900aa9515"
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
    "url": "assets/js/app.840a2e81.js",
    "revision": "5db019bbac8353a76b4301ecc16ac8b7"
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
    "revision": "bbf8b686ac3d56016993a4755a3999d8"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7d6b50241541469d2001ebac3d469e36"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "d26c84028ec5ffa0d8418460c1a12c36"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "9bdfbc9be684a42ae42fc90badb97fe6"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "29f2ab1196e70948632ad21ea2ebf4a0"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "53aa889d16c4a575e00fea8449734198"
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
    "revision": "c1589e78b02451baae99ff221d38c026"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "c7ca7ab861930386a14b46de49fa2e0a"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "d65159051e7f98fd848284acb8578e41"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ca30d078439947ea3fca10438f9ff6b1"
  },
  {
    "url": "tags/js/index.html",
    "revision": "97f946dc4f5c422290c4e2dd465e0439"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "195d8693d7432cac101004a3701ec127"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "173d13d53daaf420db84600f2bb08f69"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "69e61f5685e30af5bbde4681b70b99aa"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "0426c1e2bda6db80db5c2e623294faa2"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "0f791659a679a9e00cd4973014a31850"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f3e1256581d1bab97e1fded31c86dc65"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "eb299dae56f663b6a50ae5d339dd0364"
  },
  {
    "url": "timeline/index.html",
    "revision": "858cbecd7582c8ecd00155babf177f51"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "4c96d7fe3c41e14b8c8cac33eecc04d4"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "1c375e5214e18d668f4be4e83edbb5c2"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "cad0cfcf69539ebcce36f37456fc5bb4"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "7e232f096f4c670d0e3e6102abdddf0d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "fd8c5fb603217ebf8a4d82125ef4e132"
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
