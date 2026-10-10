'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5422bc9dd0b66aede9facd1010f46ee5",
"version.json": "8af3590e167c33e507c3d7dba6134547",
"index.html": "bb2a03720d9cff61dc497068201dd9da",
"/": "bb2a03720d9cff61dc497068201dd9da",
"main.dart.js": "c381076af1b12ead40d5dc839441ad6f",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "d894c3e0de3af5ce00601c470817eb00",
"icons/Icon-192.png": "e66929205e9fb208971445e601b03358",
"icons/Icon-maskable-192.png": "e19c10a5b64785a7e5de22b6ab4567db",
"icons/Icon-maskable-512.png": "94f082911142f1991d2708dfd25f67c9",
"icons/Icon-512.png": "0a27264cc22e1425cb5326086959b6d6",
"manifest.json": "56abcdcfed74744b138b1ef8e59e016d",
".git/config": "9695b0ee340717adf97d9c0111b4f0b3",
".git/objects/50/e6786930a4c77a54cc045f5b748a3abf61e812": "d15cd93fc5d01f7e3e6beeeeeeed38d6",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/35/70372ca323f4e5f73c1906d8a1c8055c5cc8ad": "fe8015897e026e1c5eff4598640a8186",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/69/91bbba63afa08cb333de5dbbdfea7187d37a43": "b68ac40baa0691e430b093e019737df8",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/93/d5fd999f2e19d4c52f4f791324ff63336cd5d1": "f4923d8a74ec0558e3ee8a0f1a53cba9",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/0e/1b0394d1b3d31d559ab90d6bfb880139869c0e": "6675a3367e8826427e4d340299529a3b",
".git/objects/b2/930b7b80445b6a348965b859a40a1cfa54efee": "260d811af9dba760f3449974b9c4d7ba",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/288a3ba0c9b29d4477fa08baf87d46cacc3d0d": "c4590fab77be3ed3a5801a73f8829321",
".git/objects/d0/472c73015a90986de75ed38d99fde0551a9d58": "6fdbff403c65dab3a69ff31d762c4178",
".git/objects/b3/a425249b207819e63bf9a2716fd16f63b0f7b7": "149bd288da71e467cfe68c146968a238",
".git/objects/df/e2e20e0ef88a6e27c78ee18f467be4d561938d": "23e2c73a1b2c42ba6b25557964c78fe5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f99755b91740fe4f6dd741bc298d0168e17a38": "0cc92b4b1aec8749e36cc87b73590a5c",
".git/objects/ee/7dc8572c43deab0a1a2b85dee7afa87957266f": "3b0c131f3a5e202113a5c03c348ecd70",
".git/objects/fc/ac89f37259fa5c9fb189d9c835bb3cf4d3a2ee": "f1b977362d15c14fffa5b94fca751f4c",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/266d9db666e8f177d0791fa6f9ab30f4f92a8c": "b7cc9af3bb3a418bdaf718462240fb43",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/7d/eda9e4c542ef6139626a441e595f0508d287cb": "7b2dd1a56a9381fd42f45f14799a6a0f",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/73/53306afcbb72024d8024676b6ce7809af7f2f9": "fed51a4e40c061b68924087ca4eda50a",
".git/objects/74/0956c240ab64789f65a28990e61e70578c836c": "758a3887a79e92bdf33d8576e24cc2c2",
".git/objects/7b/2ee735bb47b4e24cde1e54b74c9f64f70eaf54": "eba7131aadc38bdb7ea454bf9dec72ff",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/dca6eb2bd4b04aabbe534dc7d94740a76efd8b": "fdeeb426e8aa82b7bb4953f3b4bf5c67",
".git/objects/4c/adc9c1c5ca0a0c19b526ec22980a8c6bc461eb": "d779dde3d30e52886275493d5cc5e6b0",
".git/objects/86/fc38bc1e2bdff59923d8f773c43cc61efdffb6": "386c41d5b0051b8edc94ede316bbf57e",
".git/objects/88/c4543b90f713048c534ffd2b539bf8cab29e1b": "3c1b07a4740951378527d414b257b7b7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/1f3ca221194081734e184ec805d28314e942b8": "414cb4759238df77a59be83a504cce02",
".git/objects/9a/cf69393f987fe81550d5e9dcb70836fef18712": "9a6c755be26a2113f45745cbca86557a",
".git/objects/5c/c7d9a9c26b5b4d8e33de801c91175ecebbc2f0": "99b9a33821fc7b633b81392e5adaf2a9",
".git/objects/31/f361825ad4bdccdbbf29c7168279495d469d3c": "0e5216eba80a6ed34437ad8f14a05bc8",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/590af491baa343e8377b9e66e5ce84be1a85bb": "a6255944b5c0eafdcdedb42d6fd9c135",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/fafc3e10668648a8e19fc75cfbcdc7f6c1b7fd": "f65fb895f66f83f415689afdd885bd35",
".git/objects/dd/4728e48649f3c2d27a099cca12557e304460ea": "44712b065b5fd33bd478800a5390b87c",
".git/objects/af/0b40e45aaa161e6229934bc5c3b6ec100b878e": "0ab730bbafe317d98c09863556972124",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/d014406d75759603192d514c5b2d7fe2a18fea": "e30989cc72fba8f92eaaf53a79da381e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f6/5facbbaefc9081a70903eb7d3c04dbe48f60f2": "f6be87ec44b7cccdd70e61f2ebc2f889",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ce/56dd4ba0c46f54ef503325d80fab2ec64bb42c": "0f48947eb65b15b7b77c1efac2158e7a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/84/3ca69114ba2a3260f20eb05eb8aa4314606876": "2b49bdde955c716cb43f7c030ccc1324",
".git/objects/23/6d2d484319480b33f04574bd672ef0c72e2d84": "6976f2f1ebd6e63dce8e7e76d584a38b",
".git/objects/4f/aac81408612614312053e952cef3b56b655580": "d89b6175238f8876dcd85181c6d44286",
".git/objects/8c/fdef4a512819c298e8245744e094f7e14526b3": "55c1d44b29706868b677bbcc0bcb5b05",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/40/b5283f27c22c74f4cf1ca846d4aa684ffd2e7a": "a59c21492b387159596e1ff8e41b079c",
".git/objects/22/37310342f268a9a3d36011f348d88d48a81851": "bd9c53d2f66ce54ebe43bf3564083e2c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1eccb660db065da38a8b69601241a197",
".git/logs/refs/heads/main": "55fd8fe1562f8d5a9cf71d2ab3f8520d",
".git/logs/refs/remotes/origin/main": "9c29069880a16c41229dc4ba182d9edb",
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
".git/refs/heads/main": "c363fe8c3368e1f526d167d74acffad6",
".git/refs/remotes/origin/main": "c363fe8c3368e1f526d167d74acffad6",
".git/index": "bb759b6810dfccfcfc6776c782ec1aa2",
".git/COMMIT_EDITMSG": "ce31f70f1f3cd81fd24b8f85fdf3108d",
"assets/NOTICES": "0fafa96b34287c262ca066e9a7fe6945",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "735c3d08c2e86523798e411ee50c33fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "fa0898dcf1ca08f76e1956819f253b66",
"assets/fonts/MaterialIcons-Regular.otf": "98d19e7b6fac04be00ab37057e6a180c",
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
