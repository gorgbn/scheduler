'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2f6a44449a40711d0c47ff9ed0f75e86",
"version.json": "8af3590e167c33e507c3d7dba6134547",
"index.html": "fab3a05c584b3fb8f41477e57201a6d2",
"/": "fab3a05c584b3fb8f41477e57201a6d2",
"CNAME": "38bd9d40675b62cb8bfb53d771a21bf8",
"main.dart.js": "0c979375763badb287f88e60d7e443fb",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "d894c3e0de3af5ce00601c470817eb00",
"icons/Icon-192.png": "e66929205e9fb208971445e601b03358",
"icons/Icon-maskable-192.png": "e19c10a5b64785a7e5de22b6ab4567db",
"icons/Icon-maskable-512.png": "94f082911142f1991d2708dfd25f67c9",
"icons/Icon-512.png": "0a27264cc22e1425cb5326086959b6d6",
"manifest.json": "56abcdcfed74744b138b1ef8e59e016d",
".git/config": "3d48f9565ebdd6a78412a7cada4658c0",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/57/dbea59e72089fbe413146f9a5d39aab6e0b811": "1ebf6d1fb14d4a0d9f4325b81b6c6d38",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/03/b899a1b8095568442c7752614ed18cd6e6fef8": "dd1432d340efd0b80404e12e16c8fea7",
".git/objects/9b/514e3b5acbdc13c340dfe06f2437cae5352424": "24192e9deb0d45925e8de77603a0acc7",
".git/objects/9e/8c36bfd39daf485a2c1470904b07bd8117cead": "1a400ad61d9bc2d1a256bd3e83e1f55c",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/93/d5fd999f2e19d4c52f4f791324ff63336cd5d1": "f4923d8a74ec0558e3ee8a0f1a53cba9",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/0e/1b0394d1b3d31d559ab90d6bfb880139869c0e": "6675a3367e8826427e4d340299529a3b",
".git/objects/9d/3ac6ae0a106c34f1d0b0481272aac500c69900": "05165af640a195c54faeec39055e54cc",
".git/objects/02/b946b1aede9a2ccb5860089832ee238a19c38f": "df1e69ca1c6cc17dc6a9ef7667fe2aae",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ac/075a7b6eae4fec5405f90675024671abe6734c": "97c1903ad489d0e00a368a6a4f7731fc",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/288a3ba0c9b29d4477fa08baf87d46cacc3d0d": "c4590fab77be3ed3a5801a73f8829321",
".git/objects/b3/a425249b207819e63bf9a2716fd16f63b0f7b7": "149bd288da71e467cfe68c146968a238",
".git/objects/a5/6836fc9c306c4a974325a91fa62c838bb31d05": "e5e10d9269cde33210ee8d99da121cf8",
".git/objects/a5/ebd96ef296a06d467b6f53a273f5bb77a2612a": "0fcfa81a3811fba357685ab4e384e8c5",
".git/objects/d6/eac4f29a38538ca929f3d8b77a6d7cdd97deb0": "8b6a42ee6dd74a9f63501745b471399b",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/f99755b91740fe4f6dd741bc298d0168e17a38": "0cc92b4b1aec8749e36cc87b73590a5c",
".git/objects/ee/7dc8572c43deab0a1a2b85dee7afa87957266f": "3b0c131f3a5e202113a5c03c348ecd70",
".git/objects/c9/3c7c319384a81c5d7acb15ee6b71cfb47efbc1": "47e8b8566f6167ca90f98be30129524e",
".git/objects/fc/537fec5ed728f2122e967e1260cc19b57e5558": "a78e237c34eb0ff2a33f84813357f203",
".git/objects/fc/1c337db068e2373ccb85648ae297a3979aac87": "38656ceb792ff17f610c8188b42fa8a7",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/45b71d6799f955327348bb50ac972b67c7bf00": "58f52aa96675448e71f7da0477731e24",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/612099e94c16a864cd16a19900e5cdaeab1188": "27e025908b1d1247b5ff5b5b83837dd1",
".git/objects/ca/266d9db666e8f177d0791fa6f9ab30f4f92a8c": "b7cc9af3bb3a418bdaf718462240fb43",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/27c8195d008808c8052324041400d8015b3997": "c375993c6bc5d28a56134191769e06a8",
".git/objects/10/dca6eb2bd4b04aabbe534dc7d94740a76efd8b": "fdeeb426e8aa82b7bb4953f3b4bf5c67",
".git/objects/75/8ab661202eca16436081229f765c20e602c01e": "6f1bccac01cc1d2bbb378da6387ee6a9",
".git/objects/88/c4543b90f713048c534ffd2b539bf8cab29e1b": "3c1b07a4740951378527d414b257b7b7",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/1f3ca221194081734e184ec805d28314e942b8": "414cb4759238df77a59be83a504cce02",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3f/35fd0752c8cb1832640874ad390d63b44e1a6b": "50619d2179591ce094ec83b09adaa0b4",
".git/objects/08/0d4dea8c4974b40c51562acd6c7fbde9b405c5": "8275934b953ea2ae061cdc1e4aea71ca",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/6c/fbe5c27e956f99fc3dbe359ae9cc77f51cddc4": "9bbf54fb95e45c8ffab87f4cef1ca3e4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/fafc3e10668648a8e19fc75cfbcdc7f6c1b7fd": "f65fb895f66f83f415689afdd885bd35",
".git/objects/dd/4728e48649f3c2d27a099cca12557e304460ea": "44712b065b5fd33bd478800a5390b87c",
".git/objects/a8/84cce5035442083928edfc9128d502940c38d4": "386160be0f52b4b882c0dceadbd1468d",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/cd/bc1443f07e91beb8f3bad9aecce2c1d91ecf78": "065eb36daef74523b2adcff3e5efd567",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e7/88a1b2548a8c7857e36e04474977bce5fe0d19": "519923c1671c426f907fda1f9ab1b389",
".git/objects/ce/56dd4ba0c46f54ef503325d80fab2ec64bb42c": "0f48947eb65b15b7b77c1efac2158e7a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/a2109fa68b08eca71e4630305887f41d610fde": "d3402e3d5ed2226a451847b8cce49430",
".git/objects/1b/00078f99b6ac3c44a5cd6883af1fc21d8b7338": "ecb9f60132e735f41880c27ee74ab556",
".git/objects/48/1ba048e8f645fab106b476de11c3a9c4b8c9a9": "37f04604ca929c67c249c725662777d6",
".git/objects/84/3ca69114ba2a3260f20eb05eb8aa4314606876": "2b49bdde955c716cb43f7c030ccc1324",
".git/objects/4a/4c4548ad9cc519b93d46998190538d5d9fbde5": "de7c8293aea5a036bcaef338cf0f6e24",
".git/objects/12/ad7f62296266c5c51dadd6d49991089ef9fc87": "60bae8388ec91dfc6faceaecdee916ae",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/49/0b0c5192e7d08a2a60f8d6ad29bef4638c8edb": "acbdc88dcfdf29888e116bb134de522d",
".git/objects/7a/ae89f49a1af1980d5e3adfb8a853d3104204ad": "8bcfa6664d485bacef8cfeabbaa6deea",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b939606ee2c3134ca2482c5e7e9318fc",
".git/logs/refs/heads/main": "77025187847706a7c6f10cbc15c7f724",
".git/logs/refs/remotes/scheduler/main": "b38c75f7ee44a09ab3367a498d15ec23",
".git/logs/refs/remotes/origin/main": "5835a0cf55d5a2993cedead1641e32c7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f45018c8c1444dac557a616c19db65ec",
".git/refs/remotes/scheduler/main": "d20ab20cbd1212288bf7cee43dcea999",
".git/refs/remotes/origin/main": "f45018c8c1444dac557a616c19db65ec",
".git/index": "34d4c27d0ca4cd278d234f548d9b90ce",
".git/COMMIT_EDITMSG": "d37c106f04c2d4d686c9ae4cdbcf681d",
"assets/NOTICES": "0fafa96b34287c262ca066e9a7fe6945",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "735c3d08c2e86523798e411ee50c33fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "fa0898dcf1ca08f76e1956819f253b66",
"assets/fonts/MaterialIcons-Regular.otf": "aaa834f9d5a21341f0b0c7942c85c784",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
