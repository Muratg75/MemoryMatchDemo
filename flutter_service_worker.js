'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4448afd1b82e615ee42d5391dcfff991",
"assets/AssetManifest.bin.json": "4d5b1283608947bb3876c8dea971b7ab",
"assets/assets/icons/Me_Ma_512.jpg": "3075d048b8fe1254063b2625427a1f04",
"assets/assets/images/animals/akrep.jpg": "ce522e16411f112cbad1f1b6c422c898",
"assets/assets/images/animals/akrep2.jpg": "afa09f9f2aa183f05e2d89c92c5b8935",
"assets/assets/images/animals/apagan.jpg": "d4977db67b7abcef244fd8c2f3636e50",
"assets/assets/images/animals/ari.jpg": "e2e6e0cb417d172993ee5cedf3c37d76",
"assets/assets/images/animals/arslan.jpg": "2677d74e4700f83a1e296a1d21887782",
"assets/assets/images/animals/at.jpg": "96334537ce1978688a2b2c554674b986",
"assets/assets/images/animals/ayi.jpg": "4dbb34b5993fbbdea8cdb17e2e90d2dc",
"assets/assets/images/animals/baykus.jpg": "8de0a7b53ca53ac40e5acd62f9d3faf7",
"assets/assets/images/animals/cekirge1.jpg": "ba24f5a95eb90bbc84391038be00cc32",
"assets/assets/images/animals/cekirge2.jpg": "7c85aca492398976500687442ae5ba73",
"assets/assets/images/animals/ceylan.jpg": "a5c0978955e4d18fb425bb681ce9fcfe",
"assets/assets/images/animals/civciv.jpg": "41bcc948acb7ea727c241691b566a49c",
"assets/assets/images/animals/default.jpg": "988b194751760d9ad12b07103826b838",
"assets/assets/images/animals/deve.jpg": "6e070cd8ba6f4778189c0a604c86a65a",
"assets/assets/images/animals/fare.jpg": "89a0f40c7aa452575ca27b3828bf0924",
"assets/assets/images/animals/fil.jpg": "c36a85e40859c14e8660af7d21467453",
"assets/assets/images/animals/gergedan.jpg": "75a5cbdbd44d11a08b23295ec650578d",
"assets/assets/images/animals/horoz.jpg": "e973433f2f37cbc3aa2e016d50a8da04",
"assets/assets/images/animals/inek.jpg": "59af05357ee250df28cf3449b334bab9",
"assets/assets/images/animals/kanarya.jpg": "f8765317b5d1a5638768f46de7e46315",
"assets/assets/images/animals/kaplan.jpg": "23b49989c6acf51037917d7be421efaa",
"assets/assets/images/animals/karasinek.jpg": "d771033047c2ab0ad0b03cd71508885c",
"assets/assets/images/animals/kartal.jpg": "1614cbd1b1ddca90b53196f08999c05f",
"assets/assets/images/animals/kaz.jpg": "be2108f75d33bc7dcea3772b041870c1",
"assets/assets/images/animals/kedi.jpg": "af246e5c27bd228a72a5ad7ab0cae5d7",
"assets/assets/images/animals/kirkayak.jpg": "273fa41c77d619ef26e5bf09610581d3",
"assets/assets/images/animals/kopek.jpg": "48c5df853c12262c7500dfa7ac378fb2",
"assets/assets/images/animals/kopekbaligi.jpg": "344bc63f0f36693f6c1f5a930b31429c",
"assets/assets/images/animals/kugu.jpg": "ba3bb038fdd6526fa78311e0738232a5",
"assets/assets/images/animals/kurbaga.jpg": "7dd3f93587857659f83e75afd1057892",
"assets/assets/images/animals/kurt.jpg": "5d7dfc70dfcde10fe17a41dc520f05e2",
"assets/assets/images/animals/kus1.jpg": "a5c4559cde72af8cf44b2ab7439c75e2",
"assets/assets/images/animals/kus2.jpg": "c8e64c614c7714559969e9d7f8e7e0da",
"assets/assets/images/animals/kutupayisi.jpg": "2a380db27ce4db3f6a9f1e926d7a34f9",
"assets/assets/images/animals/kuzu.jpg": "5f64d2e862de8bd63726fdf1ea9f3cf3",
"assets/assets/images/animals/leylek.jpg": "7fc4068128f509a44b3237be5658a19c",
"assets/assets/images/animals/marti.jpg": "2ed6370a315d234d27369c9337e39966",
"assets/assets/images/animals/maymun.jpg": "f5793fa43057b4b0d35389601aa127c2",
"assets/assets/images/animals/orumcek.jpg": "9e5a3b526fdda6c426f7a9104ef74823",
"assets/assets/images/animals/panda.jpg": "d79d0b438166d48f83868fdf19761cca",
"assets/assets/images/animals/panter.jpg": "15ed810a9feba254659b948c5ce42134",
"assets/assets/images/animals/pelikan.jpg": "6347de7ab5b3a49d19740e81b2899f2d",
"assets/assets/images/animals/penguen.jpg": "4da919e410cc81435421e3b3114a7f90",
"assets/assets/images/animals/rakun.jpg": "8efb0303287170b4b2957e280ca93c98",
"assets/assets/images/animals/README.md": "9de56a232a5c785a7686f41e8b76bd37",
"assets/assets/images/animals/sivrisinek.jpg": "b7307eed4ba3f60334f80a0cb6cdcf88",
"assets/assets/images/animals/solucan.jpg": "92e5480facf3c7db7f23fa1bdcf5ea5e",
"assets/assets/images/animals/tavsan.jpg": "43f6b9da11c47e55c0be99777f403b04",
"assets/assets/images/animals/tilki.jpg": "b943ab912f7cfc342ab0df983f22c9e2",
"assets/assets/images/animals/yengec.jpg": "615cb3743395975308aa6e07a3ac9cfc",
"assets/assets/images/animals/yilan1.jpg": "f47b19eea0fa8aa6268ae8b8927b204c",
"assets/assets/images/animals/yilan2.jpg": "ae46002e7615c7521febf198c5e6d005",
"assets/assets/images/animals/yilan3.jpg": "f1083e10a44e9f6ae18c813cfa1b0d2e",
"assets/assets/images/animals/yunus.jpg": "b63a7054ff9dc6969891d0668baec522",
"assets/assets/images/animals/yusufcuk.jpg": "c82d568bf2e193c2b2d8a924d942ff0a",
"assets/assets/images/animals/zebra.jpg": "0f0d741357647f2e8a70960416356467",
"assets/assets/images/default.jpg": "748dc28fc237200e92b004da20fcadde",
"assets/assets/images/flags/arj.png": "b6860f57e8d046a565a407c1817634c5",
"assets/assets/images/flags/au.png": "5ea2011b75b5068693e617ca714050c9",
"assets/assets/images/flags/azr.png": "8983018ad9fa02e48bdceda24cbd504d",
"assets/assets/images/flags/blr.png": "d8848b1e0c73f6139aaef483ee550ecf",
"assets/assets/images/flags/bosna.png": "871c87bfd7d2452ddf2e66aae3d8417d",
"assets/assets/images/flags/br.png": "1da0121f807e50fa381960de3680ba25",
"assets/assets/images/flags/bulgar.png": "9f967f34e7d25ebe7e1123652864c689",
"assets/assets/images/flags/ca.png": "76e4fffdeb847b5d4f6871684d637db9",
"assets/assets/images/flags/cameron.png": "6bfdc9e53aee96bac41339d3df87823e",
"assets/assets/images/flags/cek.png": "43fe4c4f8dc13a26059c915be4496822",
"assets/assets/images/flags/cezayir.png": "78cb223785879033c9cbb1a90b970903",
"assets/assets/images/flags/cn.png": "6673adccb20be9356de641a639edc955",
"assets/assets/images/flags/de.png": "adba1a967ff240a39fa22b58ba1c9e26",
"assets/assets/images/flags/default.jpg": "d8d48416625be8b55ac4d51adaf091f1",
"assets/assets/images/flags/eg.png": "c3b15a303c26e9788be596cf73b29a3f",
"assets/assets/images/flags/egypt.png": "5c29565ba4a923156b0b88a0f1bc53fe",
"assets/assets/images/flags/es.png": "3919ae0678d7b7de25cdf6d270253c6e",
"assets/assets/images/flags/fr.png": "3ef7e6b1c8be7b772c0cc7f4672193f5",
"assets/assets/images/flags/gb.png": "1ec6d98991808a8f208d01f11932b8c0",
"assets/assets/images/flags/greece.png": "501327906440b82c3faa24fbbfb69ea6",
"assets/assets/images/flags/hrv.png": "8058cb91745524077d365d313f417f1a",
"assets/assets/images/flags/iran.png": "0ce4fd249c0f33a3011c075482f26add",
"assets/assets/images/flags/iraq.png": "20512463b7606df6064c401c06418b1f",
"assets/assets/images/flags/it.png": "eabf4bc45003e3c2c4f74184eda536a7",
"assets/assets/images/flags/jp.png": "df3ca26b6287ef938c19ffd14ffcf984",
"assets/assets/images/flags/jrd.png": "48c99420ab51424f63958a90a21b66ef",
"assets/assets/images/flags/kktc.png": "7f1cd9305da4df73f7751c37e4c9c191",
"assets/assets/images/flags/krgz.png": "9800a95c9972000188a015624addf111",
"assets/assets/images/flags/kzk.png": "d86d34b6d313a1922febdc743f8bdc69",
"assets/assets/images/flags/mlz.png": "879595d0ba99e3ed324b52a0f11c5608",
"assets/assets/images/flags/pak.png": "76fc6d0bb896668d2a03db8a077c240e",
"assets/assets/images/flags/poland.png": "8a826b0d0ad665f47273c3e9809a1d35",
"assets/assets/images/flags/prtz.png": "57681fe6c191cad13b9b45cf124e4caf",
"assets/assets/images/flags/roman.png": "352d82543fc2924c269ee9189dafe3f0",
"assets/assets/images/flags/russia.png": "d2b5c90986c37e424c79c26bdee6228b",
"assets/assets/images/flags/sili.png": "f44d0a358a36b7e389656c7de24b0101",
"assets/assets/images/flags/swd.png": "aa02fde4b506998913871dc565448008",
"assets/assets/images/flags/tkr.png": "bc4dbd63718c6440600687834f668726",
"assets/assets/images/flags/tr.png": "078c34b96116740f92c12b293d15b9f4",
"assets/assets/images/flags/tunus.png": "4f2ff0b4083812f9e9abd98c106d6da1",
"assets/assets/images/flags/ukr.png": "d0729faa1247331e30873f1c092abe3f",
"assets/assets/images/flags/us.png": "c5558d32ccfc0489705ec8063c39f7ec",
"assets/assets/images/flags/uzk.png": "e677fba093e0bbccbab722f52b059071",
"assets/assets/images/fruits/apple.jpg": "8a79641f77e28d39f1b9221547c9f74e",
"assets/assets/images/fruits/avocado.jpg": "d6323ad677d51a74f2451ec7ff56d4ea",
"assets/assets/images/fruits/banana.jpg": "5ce79478e67564bdce293501df2984c8",
"assets/assets/images/fruits/blackberry.jpg": "817c3542f111653de391a772b8c91d35",
"assets/assets/images/fruits/cantaloupe.jpg": "273e3a851e58ad12fa7404bacb75715d",
"assets/assets/images/fruits/fig.jpg": "49c6212c754856aaa67a84d305b355b3",
"assets/assets/images/fruits/grape.jpg": "fa1eebed498d0fadec8202a8b433e903",
"assets/assets/images/fruits/kiwi.jpg": "d21366ca2e4c891c7350224063bd9415",
"assets/assets/images/fruits/mango.jpg": "b3aa71819a579474b62f58309f4e6651",
"assets/assets/images/fruits/nectarine.jpg": "6021cd4dd621c3788b283e7da9273062",
"assets/assets/images/fruits/orange.jpg": "d377ecb2a08b814ce8510e575b857a3e",
"assets/assets/images/fruits/peach.jpg": "4c1da8dc5adab82475a54a46cf05d37d",
"assets/assets/images/fruits/pear.jpg": "0d1bc5471c314115478952a2e660154c",
"assets/assets/images/fruits/pineapple.jpg": "f1b588eed2e2f8bcc3be698427cff943",
"assets/assets/images/fruits/plum.jpg": "ff6d8771c46875fd596fcdcc11c55685",
"assets/assets/images/fruits/README.md": "15297bb7f809c39bc4c338851652920c",
"assets/assets/images/fruits/strawberry.jpg": "9314d839d7c018b941dbc368fa14991f",
"assets/assets/images/fruits/tangelo.jpg": "a0a282a9c527cee0ca4c4af7bb92b4df",
"assets/assets/images/fruits/watermelon.jpg": "18a6645feb895d48baebfbb25cf3b65a",
"assets/assets/images/me_ma_512_noname.jpg": "596bfcee303c20da9ee16a2665a7c56e",
"assets/assets/images/me_ma_696.jpg": "748dc28fc237200e92b004da20fcadde",
"assets/assets/images/vegetables/artichoke.jpg": "9ac2c7d3b21e12c077cfe3347c7efb74",
"assets/assets/images/vegetables/asparagus.jpg": "ee08acf39f1318d3eb749ffa3d00efdb",
"assets/assets/images/vegetables/cauliflower.jpg": "9d6945be628e1f68f331a864b2bc38f5",
"assets/assets/images/vegetables/default.jpg": "05958349dd614fb782eac73948f41a73",
"assets/assets/images/vegetables/endive.jpg": "e2ce1de002880316d2201bdbcb383bbf",
"assets/assets/images/vegetables/green_bell_pepper.jpg": "431c8bae73546702dcc72898dce74e05",
"assets/assets/images/vegetables/habanero.jpg": "185e999fc655964ad633162ecb735f56",
"assets/assets/images/vegetables/kale.jpg": "507961d424f5b7683824c09c6bad3856",
"assets/assets/images/vegetables/lemon.jpg": "299fa783b72a1d4b2c0e77698f1810e2",
"assets/assets/images/vegetables/lime.jpg": "2127c722dfd4b14fe412fb8db894590b",
"assets/assets/images/vegetables/mushroom.jpg": "537150c90d635d2815acdc5228b29cdf",
"assets/assets/images/vegetables/orange_bell_pepper.jpg": "82937f157586c7654c038c686fd5af32",
"assets/assets/images/vegetables/persimmon.jpg": "b28daa32a3ee567893c733e87ab4bc90",
"assets/assets/images/vegetables/potato.jpg": "8bd093e6f0f1a387ee00c456e9c2a3b7",
"assets/assets/images/vegetables/radicchio.jpg": "afb9a6d2a84b28cb14e98cdb1f235b61",
"assets/assets/images/vegetables/radish.jpg": "49e657d5ceb911e4ee40520fb9f1fb8d",
"assets/assets/images/vegetables/squash.jpg": "e8acb0763d23302e7eb0e5741a6fde26",
"assets/assets/images/vegetables/tomato.jpg": "f67b749403253c6de9a3413e4d52e584",
"assets/assets/images/words/README.md": "107600edef37360dc75a2336e9d55bd4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "de0723f6a22fe656245a89d78992f615",
"assets/NOTICES": "91c9c9ec933cb2868c45e0e45958c9d9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "efc089b2331fb43af875412802121ac3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "29222c8331128f6e9028b2a2449cdf92",
"/": "29222c8331128f6e9028b2a2449cdf92",
"main.dart.js": "2b926d0c7be71a1be12d8df538a9c1ab",
"manifest.json": "25d5d4250ed23bfc60311650f6a677f4",
"version.json": "7d32c87d54d92861aae43ee2ce7121ac"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
