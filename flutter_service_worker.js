'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1ecf059627d3179524ebd1e43be6569e",
"version.json": "8af3590e167c33e507c3d7dba6134547",
"index.html": "bb2a03720d9cff61dc497068201dd9da",
"/": "bb2a03720d9cff61dc497068201dd9da",
"main.dart.js": "0448926758851a43b40ee1f6f6cea6b5",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "d894c3e0de3af5ce00601c470817eb00",
"icons/Icon-192.png": "e66929205e9fb208971445e601b03358",
"icons/Icon-maskable-192.png": "e19c10a5b64785a7e5de22b6ab4567db",
"icons/Icon-maskable-512.png": "94f082911142f1991d2708dfd25f67c9",
"icons/Icon-512.png": "0a27264cc22e1425cb5326086959b6d6",
"manifest.json": "56abcdcfed74744b138b1ef8e59e016d",
".git/ORIG_HEAD": "0ff19c2204a15f70ab5fd1d642a7d71c",
".git/config": "9695b0ee340717adf97d9c0111b4f0b3",
".git/objects/61/f556ba0ca4388bd64838efd005cce532b11d58": "e6f8eb9ab9e886ed7b38e4cda32c2412",
".git/objects/95/28d9f32443554124d29ed061015bab2d2c6a67": "ba1ab4a292c816523ef9bfc707bb2e57",
".git/objects/0c/a9fe1f60e94ac248026834c336b67efcae4101": "95a5d2f15fc90e795f12506041861126",
".git/objects/50/e77cd545073d1ae08491fd548baabd817b4daf": "bd5ae08a783c7cac257eeeea30af59d0",
".git/objects/50/e6786930a4c77a54cc045f5b748a3abf61e812": "d15cd93fc5d01f7e3e6beeeeeeed38d6",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/fe6d2f842c06a6c37716f5ccb9047a7ddb3f26": "bd950b04d39e6df819d3a559f02a3b84",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/03/0f00c1f584e7e5e498b1ec7c0b229e40376edc": "4897cdd28b5e99d3490ee0c28f2ef45d",
".git/objects/9b/514e3b5acbdc13c340dfe06f2437cae5352424": "24192e9deb0d45925e8de77603a0acc7",
".git/objects/04/6e31fed1a80e9ca70e728932adea53a30689b2": "822a50952c0568f546bf1dd0848af352",
".git/objects/35/70372ca323f4e5f73c1906d8a1c8055c5cc8ad": "fe8015897e026e1c5eff4598640a8186",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/69/91bbba63afa08cb333de5dbbdfea7187d37a43": "b68ac40baa0691e430b093e019737df8",
".git/objects/51/62a117718b9011f3543e45c61c25f84b74b677": "e0e44bd1ea3fc5fc4b1b5f922b5da86e",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/3d/b9e78ce1c7bd6e13eefef493d3aaa11f09c353": "f60554a29ddf8fbc96cf64b7db939609",
".git/objects/93/f6d12db598bf7c15942825dff0beda68396b3b": "04f4d46336e11163c079cac40f9bc4f4",
".git/objects/93/d5fd999f2e19d4c52f4f791324ff63336cd5d1": "f4923d8a74ec0558e3ee8a0f1a53cba9",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/0e/1b0394d1b3d31d559ab90d6bfb880139869c0e": "6675a3367e8826427e4d340299529a3b",
".git/objects/0e/1ad05f7ae1d6b3691af757bb07edb8f980474d": "62d6c66d87c5544fc29b39e4bc5132f5",
".git/objects/60/7a80d2425aa827033fa99acc99bfdaa1563cbb": "e8bb28b2958c146fdcbec8a2284449a8",
".git/objects/5f/775b91f23fdae6d196717a1e2ea2a531e7153c": "14d016af51e048169318ea15b43d70ab",
".git/objects/5f/045e1a78474d7353151dedc97c8b89b0c3eadb": "66e50740f31814df75242c0ae43e7b71",
".git/objects/33/b6d4e14a0d7ae047c0095eae22bbf17f2ae89d": "7660950fe6f0ca737da403afe6aa4315",
".git/objects/02/3cd10beaad38ed699ab680d11f65bdb6827eb6": "e18bb14e44fe818ef31fb61c0175471f",
".git/objects/a4/33512ec22a7ffb01197845077d33bd7bd637b1": "54b81ca39f8c93e2785377a6f25670bc",
".git/objects/b5/72116031ccb4ce4807c44ece4cbd0f720fa0d9": "efc95599a606a02ce7ca1d27dff91040",
".git/objects/b2/930b7b80445b6a348965b859a40a1cfa54efee": "260d811af9dba760f3449974b9c4d7ba",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/b2367df0a26c8b114520ae521a110faa629357": "28f0e75ab6f4e64d687ba888563e6888",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/288a3ba0c9b29d4477fa08baf87d46cacc3d0d": "c4590fab77be3ed3a5801a73f8829321",
".git/objects/d0/472c73015a90986de75ed38d99fde0551a9d58": "6fdbff403c65dab3a69ff31d762c4178",
".git/objects/b3/32e468e18a68d31cf032e0f36f072102df9754": "2852a93e525fa0111cc8f0179843b441",
".git/objects/b3/a425249b207819e63bf9a2716fd16f63b0f7b7": "149bd288da71e467cfe68c146968a238",
".git/objects/df/71702f0ea8e6f6995fd004da4097c4c6cc2ee8": "b7603ca86d8a0541db2a51619cac2ee0",
".git/objects/df/e2e20e0ef88a6e27c78ee18f467be4d561938d": "23e2c73a1b2c42ba6b25557964c78fe5",
".git/objects/da/81900bf044ec3b3da1e1fd53b3621eda1c3373": "1931fd67b76a19166d6e8d9c9bd36784",
".git/objects/a2/8cdc18a1df18f49abc826c8a0e68b1dda050d5": "823a283a4652e4ea926c053db326b8f8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/dd7f7cb1e232194bbe44a05fdaaaf7e69cd526": "64c5c80478e2248f6ac7fa2a0f2ed699",
".git/objects/ae/0296c58110ec2ccdd0aabc5e6bc982216eba27": "3e06577a66264d0e160a69c155be0d10",
".git/objects/d8/31f898bcd56d81b07d50206c0ccddc27d3b68d": "c8934101cb48f98d9d7f5ce512aacd79",
".git/objects/d8/ab7440f533e21a4f3fddc38f9a617dc5dcb249": "ad1ab07045a9dc5224e0f9e8717776c4",
".git/objects/e5/25b3ca8d5fb903b9e28b0160d03d6e0c820c2c": "008d3c078a3edf9fcd036170958953cf",
".git/objects/e2/da611d9b6f53b81047d33aeba34ad26b1b1042": "7f3adbaebee18568aa30c5a139e54ed4",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f99755b91740fe4f6dd741bc298d0168e17a38": "0cc92b4b1aec8749e36cc87b73590a5c",
".git/objects/c0/c2e3d43ee85bbfa7120cc9f4f983abf61a77b4": "232f85117f6c68bd213a54704f25408c",
".git/objects/ee/db745f7c79a63568a709d22a12be81a9554f96": "0ee88ed6b00ca8312176aaed3f95281c",
".git/objects/ee/7dc8572c43deab0a1a2b85dee7afa87957266f": "3b0c131f3a5e202113a5c03c348ecd70",
".git/objects/fc/ac89f37259fa5c9fb189d9c835bb3cf4d3a2ee": "f1b977362d15c14fffa5b94fca751f4c",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f2/84c464c9709f6b164f708a95a49d9249331d63": "2f5539f79ff5c66a2193231c09f546e8",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/b71790403fe87bb06629e7d66451bfc7f6c0f9": "9ab82a6de3a485cd090319448341ae2a",
".git/objects/e3/9360e93615cdb58556675b0c0695b20798f3da": "bcd06c2fd8a56ebe8d47436885660216",
".git/objects/ca/66f99fe2de119538ba6b517166774f1f613d79": "7cd09de712a9979ce8c35127a9d28bfb",
".git/objects/ca/266d9db666e8f177d0791fa6f9ab30f4f92a8c": "b7cc9af3bb3a418bdaf718462240fb43",
".git/objects/c8/50f5d7e90ca3f1b778ba5a37375c164c03812d": "3d08cf5f5dc8f7c7458f3570b633f471",
".git/objects/c8/7a013ee01567c23280d13aa696f3a01c9ed02f": "58efbb1e586b8742ba9e1c583d5babe9",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ec/424bc80993c17aeec8418a68709cf4d9a24286": "c22deb10e50a49eea9359f2f9f119628",
".git/objects/4b/350a778117f826fa1d6e4d0a3101bd15eb7f6c": "f21f2107a35426b8b43cb300c2ee7490",
".git/objects/11/f1fd5c5477bff484fbd6738afdded193ca3224": "10f77beb4e8575743bb891bce23148da",
".git/objects/7d/eda9e4c542ef6139626a441e595f0508d287cb": "7b2dd1a56a9381fd42f45f14799a6a0f",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/42/1dc73144ef96cc1d0ff53da4fc09993d882325": "49e8e1f15a54ee10e707ed17103b8553",
".git/objects/73/53306afcbb72024d8024676b6ce7809af7f2f9": "fed51a4e40c061b68924087ca4eda50a",
".git/objects/80/2884f42d506d92d278a53c153f56185ddde76f": "9d763dd515ac165463cfc478b35f67f3",
".git/objects/74/0956c240ab64789f65a28990e61e70578c836c": "758a3887a79e92bdf33d8576e24cc2c2",
".git/objects/7b/df5f72cd8c44a780d8685395364bb4c98a4d5f": "c0dfed3baaa9bf757cda1eae9f057523",
".git/objects/7b/2ee735bb47b4e24cde1e54b74c9f64f70eaf54": "eba7131aadc38bdb7ea454bf9dec72ff",
".git/objects/8a/1911bcbfe25f6f974280792c2cd5964721eac8": "903d12f0ac252bf3883af5262c014a4c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/dca6eb2bd4b04aabbe534dc7d94740a76efd8b": "fdeeb426e8aa82b7bb4953f3b4bf5c67",
".git/objects/4c/adc9c1c5ca0a0c19b526ec22980a8c6bc461eb": "d779dde3d30e52886275493d5cc5e6b0",
".git/objects/21/71e3dfe3fb2c4a308f036175f78ba1bad26ddf": "ed4723df79c5d264de3b7d7b64166bb6",
".git/objects/4d/77f981c74f1ead6f617cc390cc09880d242f6e": "d9039e295b857d526ca1f27fde661c5e",
".git/objects/86/fc38bc1e2bdff59923d8f773c43cc61efdffb6": "386c41d5b0051b8edc94ede316bbf57e",
".git/objects/86/5fd5e09c67d41c7f600e6ef2b4530d8ed7f547": "f594b1abaae54112114fbd20e0c3ccb8",
".git/objects/86/fd15cabfd94cae4c2f0ace6e0bbe86ce8959be": "f483ec3835b43453f7a1febda786f729",
".git/objects/88/c4543b90f713048c534ffd2b539bf8cab29e1b": "3c1b07a4740951378527d414b257b7b7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/5df49fd4eb931d7a890306beae8e8e02bf0e07": "90b8472e5a25e20fe55128c7dcc82880",
".git/objects/07/a6a9d4810bedf9d5adbe7a4c5a1f3f765edcf0": "c81aeac3f7a08a1ac2af01a8ea1e0e8e",
".git/objects/38/1f3ca221194081734e184ec805d28314e942b8": "414cb4759238df77a59be83a504cce02",
".git/objects/9a/cf69393f987fe81550d5e9dcb70836fef18712": "9a6c755be26a2113f45745cbca86557a",
".git/objects/5c/f2524c2efd3d3c8d5907061ddf32d6e2beb456": "f4ca3ec1371a349b0c2a95341069f293",
".git/objects/5c/c7d9a9c26b5b4d8e33de801c91175ecebbc2f0": "99b9a33821fc7b633b81392e5adaf2a9",
".git/objects/31/f361825ad4bdccdbbf29c7168279495d469d3c": "0e5216eba80a6ed34437ad8f14a05bc8",
".git/objects/91/a296df401a27a8c932741ad6c309379b91e367": "9d68c191a8491d27b53000241c292206",
".git/objects/62/d336755b9f071e4750b3188778ee89e28cd104": "79cd496a9db3931890c4ab9f9fc7a3ad",
".git/objects/62/7fde4b63b1db3c30f741379eb811324d138b4f": "21be3400f9b0645162a6f42b0f3d5129",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/590af491baa343e8377b9e66e5ce84be1a85bb": "a6255944b5c0eafdcdedb42d6fd9c135",
".git/objects/54/2af52e5f1e58218136977e42b0b2336b1de1c8": "df6310bc5411f1558a995f316227f92d",
".git/objects/08/0d4dea8c4974b40c51562acd6c7fbde9b405c5": "8275934b953ea2ae061cdc1e4aea71ca",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/6c/740c103b53ef662caf0bb8415ab5f6d0b2d6f1": "e2bd88099654ef9b1169285d8abd3793",
".git/objects/99/0258379a62c75c7e4a2bea0ff2f81ef8c1702c": "5f8d154da714a438d87acce633d21e1a",
".git/objects/97/7daa2ede54378f4e144c9693681e6fd3235616": "b1fb144028968d01f81ab454cf6176e1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/fafc3e10668648a8e19fc75cfbcdc7f6c1b7fd": "f65fb895f66f83f415689afdd885bd35",
".git/objects/ba/2937ee6d0cc098e9b0ec9537fa282e9d3931ec": "f5348106c6264e1310d155ebfab8d5c2",
".git/objects/b1/01b54bdb98217482f38774b93270f63265c055": "7c2bd79c8d3803187fb952902b788379",
".git/objects/dd/3dc7f2a08792c6caae51d6f65b977ed8f08a1d": "0ed366c1d7dfcbab1204233b2fa3319d",
".git/objects/dd/4728e48649f3c2d27a099cca12557e304460ea": "44712b065b5fd33bd478800a5390b87c",
".git/objects/a9/bf6971e9718b0a83fd257960b1d7112dc917b4": "801f2c3037e3dc8122a31248bbe8379c",
".git/objects/d5/4793ac8d21aaf00a7a026c1e262bec668bb167": "344ec66ba924e7a05d20656b1a9216f4",
".git/objects/af/0b40e45aaa161e6229934bc5c3b6ec100b878e": "0ab730bbafe317d98c09863556972124",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/d014406d75759603192d514c5b2d7fe2a18fea": "e30989cc72fba8f92eaaf53a79da381e",
".git/objects/de/f61913492974485c7bb5e32b34293f406bd819": "d1b4d97e07f54131435aeb9fcea7ba28",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/a1/08105f728a198e5b203e83710f24f945c288fb": "90be684a5bd5bb604b2f7720ee9e10a2",
".git/objects/a1/1e51c23a6c50babba5f50d4e9def47a9b23d36": "78e168170a742375d893f1a3c7191c15",
".git/objects/c4/125b89283cb93702ae163b89ecbfde6aa4a14c": "44d3c148887075598ebcd1dcfe995c8e",
".git/objects/e1/648e856c9258883ce32de7f8cc47e17f1a8bd3": "94f1a59b9a8204ed05c234f87381c2e5",
".git/objects/cc/ce870a613cb9b1a5df947feeebee318ccf0bc1": "f006924950d5d84454ed94ac586d64fb",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f9/eaec105795edaf23776239d3e0dd4e87ba2843": "002fc5fb3124082a910eaea5a5ae4541",
".git/objects/e8/6c51abf37d92274d2804efb7621c79ddb4d42b": "81bbf04f34df14b8f3f47e5a2b2c7579",
".git/objects/c5/e544cffd636141672d8b172ceaefb459674bf3": "3f19d925a944a45e68f338c2c37777e6",
".git/objects/c2/30f19c61e494ad31523f730ed135338f360674": "7c98e65eb370d98239a78f7923b341c7",
".git/objects/f6/68624e22806fcf18b0bf334f94489a813381cf": "16945fb57403d9fae214a6478871e932",
".git/objects/f6/aa73f9a19cc1334a2275fc77c35e2de2585431": "e62889f48fc7ef4cf0cf0c6628a236c5",
".git/objects/f6/5facbbaefc9081a70903eb7d3c04dbe48f60f2": "f6be87ec44b7cccdd70e61f2ebc2f889",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ce/56dd4ba0c46f54ef503325d80fab2ec64bb42c": "0f48947eb65b15b7b77c1efac2158e7a",
".git/objects/e0/5f4cd5d72a083530b47089403c5614c576abdd": "4b0bc3ade951661d057a9ba653c44e29",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/1849c1c3d1a844e0dbee29964fd2a6f1e9acd9": "f1abfe7c87df3e9d1b475c124699ab57",
".git/objects/2c/50a34c3c61beccf6dc42c1a22428ab67984298": "d45ca415c44e1297ebe317c3cba11c8f",
".git/objects/83/128790c3a4675258de02343b3d3a56537d4cf9": "652c49691751360ecaab2622b34894e3",
".git/objects/1b/cf3dad5f2e012ee0ae43fb02c4eab439c2893a": "a1cfc9363f3754b11d8667cd96687c11",
".git/objects/77/1ee735199b674f70f444c79fff9b875681e92f": "0a5bc45ccc7005e6265ec3f446b3e414",
".git/objects/70/a5e086fced094c34289be52defa8a1bf529972": "71c931b3d0b277982ac1176d9182e8f3",
".git/objects/84/3ca69114ba2a3260f20eb05eb8aa4314606876": "2b49bdde955c716cb43f7c030ccc1324",
".git/objects/84/b1a90cb6d3ab4235584a05afb7fd69870ba860": "0d4021307a597156dffa243b65d502d4",
".git/objects/4a/4c4548ad9cc519b93d46998190538d5d9fbde5": "de7c8293aea5a036bcaef338cf0f6e24",
".git/objects/24/c4ddca974a4bc5f3e9320ef6488d5587bfcdb9": "4f8b6b65964fa29f103de74cecfc29c6",
".git/objects/23/6d2d484319480b33f04574bd672ef0c72e2d84": "6976f2f1ebd6e63dce8e7e76d584a38b",
".git/objects/4f/aac81408612614312053e952cef3b56b655580": "d89b6175238f8876dcd85181c6d44286",
".git/objects/12/73644430502cc07a76d682324cf43abe069bf7": "1658a0f99a30b71d083cdf1ed69b59f6",
".git/objects/8c/1055109c5fa93be65b302ee814c1b67a91ccd8": "a7986dba217d1b6a1c53c050d00863a0",
".git/objects/8c/fdef4a512819c298e8245744e094f7e14526b3": "55c1d44b29706868b677bbcc0bcb5b05",
".git/objects/85/702048c61d4a52bb2851945e494d8f0cb6944f": "ed4c4c2ef672af58126836101933b87f",
".git/objects/85/14ff507da3ecf67290b4deecb54913d88b8064": "def8eab99788e3f32949244c3c8d6e29",
".git/objects/85/7d40d3895204a4806ca9a8a79c88acd7d2cd7c": "9fde69a5841ca229737802f67089cbe4",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/1d/e686ebc98400b4a4ba10ebaace46e719f6d61a": "952990bae3a5c64ce075a6ff3704bf16",
".git/objects/49/06d7c3fb977e6b1495e697faf73ebc50acec47": "785f8732a87a62b52b87e2273426fe6e",
".git/objects/40/b5283f27c22c74f4cf1ca846d4aa684ffd2e7a": "a59c21492b387159596e1ff8e41b079c",
".git/objects/2b/8e5635f83da2473866c2648dd267512135a14c": "bad228b9e0744b2f1182b49d3c206e6f",
".git/objects/8b/41833fa8314be96de2565daf2fb19707e352ff": "2b6756f6d9768a5373fae4c2d367c676",
".git/objects/7a/8d445322dfecfc3cc1a5829e914b8b64d17527": "5390153871f8f55694cf1a18be7d3f2f",
".git/objects/14/603c5c327a0e88f7f45d7bc0e2d19c84dd7f01": "19988be0fb48016ed0723ed77b7e2aad",
".git/objects/22/37310342f268a9a3d36011f348d88d48a81851": "bd9c53d2f66ce54ebe43bf3564083e2c",
".git/objects/22/1b6fb8e442b0e777f751dd60b985dcbfcdf43a": "014ad19b25c8863ff45e1d7258c71678",
".git/objects/25/e0fafe865c49e0d8c02d563de8d1a208a26bc0": "062a3fdf89c0406dc72a8203d6d7d25d",
".git/objects/25/e0fe9248f45c66b28d650b97d816b9bc766385": "225d439fbda22347541aba3c3df0221a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "677daaba60f3b825d3f104050f22288f",
".git/logs/refs/heads/main": "ec3d00e0dac3011a995ad157508da4a8",
".git/logs/refs/remotes/origin/main": "1eafaf03e1b37e99ad110c32409afcbc",
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
".git/refs/heads/main": "b682e3139e71ddd0dcf1f0db6c3f0c0f",
".git/refs/remotes/origin/main": "30ef40ef74413fdf82023ffc0f1781d9",
".git/index": "3e98877ccb2b0b96dae960c91a7ac79c",
".git/COMMIT_EDITMSG": "2f918003aef1cfbe47247e18b07f5a30",
".git/FETCH_HEAD": "67a6ebe4d71ab80c61d0e3867f5b7e71",
"assets/NOTICES": "0fafa96b34287c262ca066e9a7fe6945",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "735c3d08c2e86523798e411ee50c33fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "fa0898dcf1ca08f76e1956819f253b66",
"assets/fonts/MaterialIcons-Regular.otf": "9d85d00db94e2e1302af9fb87f882ddb",
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
