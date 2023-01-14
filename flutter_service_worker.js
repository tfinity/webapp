'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "81f28522db473d9139d0d4fb8d614063",
".git/config": "588cdbcf5bb4cb4fb925b8f68a82e1cf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "225bf98c7e07092d23211d8fc5396f93",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ee1c559e1fc6c9d7a61b76f386c7fc50",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5d46bfe502efe2bd4f2a4ae21a58c12e",
".git/logs/refs/heads/main": "337cafb19f6ea37303ab3ecd59591265",
".git/logs/refs/remotes/origin/main": "50bd3d7b225b3b0ec53dabd631454b2f",
".git/objects/12/4bcf95eaf7739d10e0c5769b62af925e04ee75": "794037e8aa194e3c809f92cb736cbcb9",
".git/objects/1a/b33bb35d73e3281688aad01c1b20eb1222ba3f": "b82e3a94e8b5e3b30195a8ab1e799634",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1e/270804fed1b7aa1e98af6b47ffdb42bf119b5f": "34a99a182b4f355b801f0de1283dc90b",
".git/objects/22/2f637e2f231470dbede6f70d3b66e2bf47caa6": "4025d767fa15dec00707204f04f164e1",
".git/objects/28/b27983c3e375b3d4f7e1d240ac69e097d4bbfc": "75596b785f1f31889c98527af9afbf2e",
".git/objects/29/e2012a7a928d368d9f4de48d2f9c1837bc3cd3": "995d80d04a505d2583da2535496979d2",
".git/objects/2a/ef2201b699263b2b46653530794f155c2bb49f": "44e5a9f7810628c24cd4de4a3cc1c70f",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/94599643308577d811aeb49998ccc21b109335": "7cbd847dad3497904a2fe77de3b2b90f",
".git/objects/2c/30218c4972ed6be448b5108c71b4b033a48b31": "26260429866c6a9669c4fb33ca608fc4",
".git/objects/31/edd2fe7390b98f8379253f8c1f38da5def939b": "f27eb1f0a957f431ba2aa52f93bf4208",
".git/objects/35/a3b74169c5f12bee53656a3d67327e91d6f6d5": "5474a735cbeaec97086fbeb900b59143",
".git/objects/3c/9c05fb46a4643879f422618c94b5b41dfc959f": "47c34890b609e0333b581fb748c36ba2",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/46/bc46bb0fc202719ab086c6ccd7d7cdc2539c5a": "8de6cb77765f305dcb6620e441169936",
".git/objects/47/81e7c88a1e3659f283d530984b4232cd80ab71": "64bd8e937336531f802265672bc1b1c9",
".git/objects/48/7dad4595dcabb29236a41fa14a9b1dd4ffc703": "57b6e9d8f2fcc11d707752d320d64793",
".git/objects/54/7cebc064a199ad355d7b6633c2f7022e77e896": "3b435b904cbdc5b8395dde006b96d677",
".git/objects/5c/eb40c845fbcf9c8428d5664401adae1539e31f": "90b157480a974762c5b25ef4b627df0b",
".git/objects/62/ae1ca711b55edb5eede7123dd4d7aaeacae291": "1239a8bcf23c255a4f71b0494c2b3978",
".git/objects/69/b51676eaf6ba46f2a2b032c6121049de5cfe8a": "6bd50624e5200659f43e56dcab6d31fa",
".git/objects/72/2a2e9d1eb818e80e941c56d944fb6a82cbab8a": "3347c678877ebfab9fbb2833bade1784",
".git/objects/76/08bc4907e6b565e678e346f59196db2dbc0b37": "eed0227f6d86156ec39a041f177b7835",
".git/objects/78/3dda17bd03df1175fed1e679f58df8cc9c11db": "075cc550f57862709ca8235bf68b1dac",
".git/objects/78/ff1935b4339cfb2a59c63113849398ec382d05": "f049526e16ed28f5f768abc1105ac263",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/64a2dc8effb540e8719adef4d278cc68ca682d": "b95a1365b4436f588eeb6e4763afcd23",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/84/001baf6256c7f94f69447fa99a280ed3cada77": "686f580f53e8dd76495299fab4e1353d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f6e83c327485de46d3333ebdb665e320104a46": "fc5e36e532250b0f736ee2a220a73064",
".git/objects/8c/1083e5a106e822baffff9ab59eefe2f4e7ac42": "95d4257c9f0040ebcd53f8bad2562a82",
".git/objects/92/6b90e982d866f280c4203802c7bdcbd2aff930": "be910aa075a4dcb13064618e424da895",
".git/objects/97/3e20204f346d5a2d28a57e7e8a06ffab145988": "0255e6e840342b70cdfa00c9c028043e",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/8e16f7fc1c68f6d8ac3285641624d1f33d0d87": "058e8e011757781fd176fdb1ea7b381d",
".git/objects/9b/6e8c6c418b54bee4fb15e6ebd02b27970af7bc": "ddedc72c3884a66203e61ef3dc51a0f5",
".git/objects/9c/c3db6ee1fdbe8f2be64f1970a03d70b4865dde": "8fb4cf4b406100bdedff2a2f0d5fb883",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/29ac4da8ee03ad43f9dc3886f03c9422f8e7ce": "02e3a6d412642239684b2b350a2ef3f1",
".git/objects/a8/f2eeafa920d416ea57801c504094a917c0f98a": "9f36edccb223007ef5f1914c2edf66c6",
".git/objects/a8/f4e8bfe19a533398a68194ccbe15474853ae14": "5ec35cbcc29f1a0ec45147f267eada4c",
".git/objects/aa/ecd6d08e7b0c7a7bcc1ee306ad016250242452": "ef399326f496a27946a188619e650e7c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/b2822e6b6936014a75be37851b4d9d07356e19": "76bc6abcc314029bd0ad13e567078d11",
".git/objects/af/b4496435fb9e7eeef2f8164e5bf10663c4622a": "b4a1a8ba5195cf4cf63188b3bc714a20",
".git/objects/b2/d162c3fd3b71f67004e476e99c03ae668964b5": "5d4264202f6893259acd79287f780f5d",
".git/objects/b5/9a457f7a10973c5a10384f3556192da5aaf316": "6851dd58714202aad70b87be172d8726",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c5866c05985e7f84e599fbba42c362edfaac51": "3c01a649a44bcd0df47ce0fd97181c4c",
".git/objects/ba/b840042e934787b656b28e3bf634f166781c9f": "dba6883d93a10bef88ff396371356165",
".git/objects/ba/ed0a8423b71f6f596ff83cbe7b0d57019f7b49": "860a5cd6f4d0ee03eea4cf9f20f95589",
".git/objects/bd/c0876831fa4976739ae57ebb006122537011ac": "c5c13c15f56da1b9c9d2d8abd929670b",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/f1aa168f668cbad09ddd9a03217296114dd5d2": "b14250ca6f9c5b86d2758250282c2166",
".git/objects/cf/4d40268ede3cf0f1307146a81e6739fab5e5c4": "4fc1f81d087cbeea0492b3c5abcf19ae",
".git/objects/d3/ae1258967cf7235d9461d3f1860a48137d7bd0": "85f1efe8a5969359d1d34df66ff5a4ba",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/e8f7f60c141588115cb66dcf143c26c237f005": "b8163e1ba79802d982163573e3b1cb06",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/57d8c570ff509d6557202bdeb5a3f174ebb10a": "aeae120789dda02b4efd5f17584acbe4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/497e1050648c18959d835ffda709283494d5b9": "2dccfb19b13169a19ae348f31bbfb633",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/f3aa507a2dd99d44fb56c4257de834720d53b4": "9437f28edbff3e4e2b178990b004e393",
".git/objects/ef/e1067c44388d837decc3a8f78a8521b250b61e": "162c253059aed2ba1fe73666ad5757bc",
".git/objects/f1/44d641781b0a2a3cae87623497d4cf35342f47": "edfd3d5db5c294566d410296ac629bef",
".git/objects/f2/782364766af319383d08803a0052cfb26aba24": "4077b940738abb3a457f22c0e00b2101",
".git/objects/fe/ff82be9fc15a5a43b3b4056958e3a17152fef0": "815c7dcfa6df03ad5bbf5243f066d2ad",
".git/objects/ff/af3149d6f5b870b96c4273ab22353598d58445": "62dd407dd639d310507eee60cb042622",
".git/refs/heads/main": "faabad45f6429f43316a09ab477ffbb8",
".git/refs/remotes/origin/main": "faabad45f6429f43316a09ab477ffbb8",
"apple-touch-icon.png": "0e7ffa57f0fa647996943b2a4719621c",
"assets/AssetManifest.json": "2408084f509ff94ba024bd3633e80170",
"assets/assets/book%25201/78.%2520An%2520-%2520Naba%2520-%25203%2520-%25206%2520%25D8%25A7%25D9%2584%25D9%2586%25D9%258E%25D9%2591%25D8%25A8%25D9%258E%25D8%25A7%25D9%2590%25D9%2595_2.mp3": "ce865a194184a68edcd456c3e7f4fdf4",
"assets/assets/book%25201/book_1.jpeg": "5bc7f99119923dae53aa71b0a486b3bc",
"assets/assets/book%25202/book_2.jpeg": "9d69fc519bed967c336c2b1bc218e292",
"assets/assets/fonts/DG-Bebo-B.ttf": "838fd087fc74c2f2b62350435aadf378",
"assets/assets/splash.jpeg": "a5f5d6c5cbf50356b6401a4c05410827",
"assets/FontManifest.json": "77c6eb938447f2e91fc861c4fe771c77",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "65389f757f8b0be3013592b89a878c04",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "e2203ac0b28863f796ef944d8ec8df66",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icon-192-maskable.png": "0d0b86d7741d558aef18d6b2945c75c9",
"icon-192.png": "96011425e6380e73202a102c485e2195",
"icon-512-maskable.png": "1b74e292c752ebac55600830fe03aca9",
"icon-512.png": "de5d4f06276906fea7ef5030b0ce114d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "498e78d1dfa9de598a5d21d51a668597",
"/": "498e78d1dfa9de598a5d21d51a668597",
"main.dart.js": "d0e1d9eba1b42bc0ef739d2e176c5832",
"manifest.json": "e949ebc5363ca713e6e3e31ee23daa6f",
"splash.jpeg": "a5f5d6c5cbf50356b6401a4c05410827",
"version.json": "b1c9b544ada2592efefadb38510c944b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
