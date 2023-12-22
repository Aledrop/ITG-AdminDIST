(self["webpackChunkiristravel"]=self["webpackChunkiristravel"]||[]).push([[154],{7154:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"login absolute top-1/2 w-100"},[r("div",{staticClass:"w-20 mx-auto my-5"},[e._m(0),r("form",{staticClass:"flex flex-col text-white gap-y-4"},[r("div",{staticClass:"flex flex-col items-start gap-y-1"},[r("label",{staticClass:"pl-2",attrs:{for:"user"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],staticClass:"bg-transparent border-2 w-full rounded-4xl text-xl px-2",attrs:{type:"text",id:"user",name:"user"},domProps:{value:e.user},on:{input:function(t){t.target.composing||(e.user=t.target.value)}}})]),r("div",{staticClass:"relative flex flex-col items-start gap-y-1"},[r("label",{staticClass:"pl-2",attrs:{for:"pass"}},[e._v("Contreña")]),"checkbox"===(e.showpass?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],staticClass:"bg-transparent border-2 w-full rounded-4xl text-xl px-2",attrs:{id:"pass",name:"pass",type:"checkbox"},domProps:{checked:Array.isArray(e.pass)?e._i(e.pass,null)>-1:e.pass},on:{change:function(t){var r=e.pass,n=t.target,a=!!n.checked;if(Array.isArray(r)){var s=null,o=e._i(r,s);n.checked?o<0&&(e.pass=r.concat([s])):o>-1&&(e.pass=r.slice(0,o).concat(r.slice(o+1)))}else e.pass=a}}}):"radio"===(e.showpass?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],staticClass:"bg-transparent border-2 w-full rounded-4xl text-xl px-2",attrs:{id:"pass",name:"pass",type:"radio"},domProps:{checked:e._q(e.pass,null)},on:{change:function(t){e.pass=null}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],staticClass:"bg-transparent border-2 w-full rounded-4xl text-xl px-2",attrs:{id:"pass",name:"pass",type:e.showpass?"text":"password"},domProps:{value:e.pass},on:{input:function(t){t.target.composing||(e.pass=t.target.value)}}}),r("button",{directives:[{name:"show",rawName:"v-show",value:!e.showpass,expression:"!showpass"}],staticClass:"absolute top-2rem right-1rem",attrs:{type:"button"},on:{click:function(t){e.showpass=!e.showpass}}},[r("i",{staticClass:"fas fa-eye-slash"})]),r("button",{directives:[{name:"show",rawName:"v-show",value:e.showpass,expression:"showpass"}],staticClass:"absolute top-2rem right-1rem",attrs:{type:"button"},on:{click:function(t){e.showpass=!e.showpass}}},[r("i",{staticClass:"fas fa-eye"})])]),r("div",{staticClass:"flex flex-col items-center gap-y-3"},[r("small",{directives:[{name:"show",rawName:"v-show",value:e.is_error,expression:"is_error"}],staticClass:"text-red py-1"},[e._v(e._s(e.error_message))]),r("router-link",{staticClass:"text-lightBlue underline",attrs:{to:{name:"ForgotPassword"}}},[e._v("Olvide mi contraseña")]),r("button",{staticClass:"border border-orange bg-orange rounded-3xl py-2 px-16",attrs:{type:"submit"},on:{click:e.login}},[e._v(" Iniciar sesión "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]},[r("i",{staticClass:"fa fa-spinner fa-pulse"})])])],1)])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("figure",{staticClass:"flex py-4"},[n("img",{staticClass:"w-4/5 m-auto",attrs:{src:r(7038),alt:"logo"}})])}],s=r(6198),o=(r(5666),r(23)),i=r(1105);r(1703);r(1249),r(7941),r(8862),r(2418);var l={name:"LoginForm",data:function(){return{user:"",pass:"",showpass:!1,disabledLogin:!1,is_error:!1,loading:!1,error_message:"Mensaje de error"}},created:function(){o.Z.isClientLogged()&&this.$router.push({name:"Dashboard"})},methods:{login:function(e){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.preventDefault(),t.disabledLogin||(t.loading=!0,i.Z.login(t.user,t.pass).then((function(e){t.loading=!0,e.logged?t.$router.push({name:"Dashboard"}):(t.error_message=e.message,t.is_error=!0,setTimeout((function(){t.is_error=!1}),3e3))})));case 2:case"end":return r.stop()}}),r)})))()}}},u=l,c=r(1001),f=(0,c.Z)(u,n,a,!1,null,"5992ddca",null),p=f.exports},2418:function(e,t,r){var n,a,s;
/**
 * @license bcrypt.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/bcrypt.js for details
 */e=r.nmd(e),function(r,o){a=[],n=o,s="function"===typeof n?n.apply(t,a):n,void 0===s||(e.exports=s)}(0,(function(){"use strict";var t={},r=null;function n(t){if(e&&e["exports"])try{return Object(function(){var e=new Error("Cannot find module 'crypto'");throw e.code="MODULE_NOT_FOUND",e}())(t)}catch(a){}try{var n;return(self["crypto"]||self["msCrypto"])["getRandomValues"](n=new Uint32Array(t)),Array.prototype.slice.call(n)}catch(a){}if(!r)throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");return r(t)}try{n(1),!0}catch(I){}function a(e,t){for(var r=0,n=0,a=0,s=e.length;a<s;++a)e.charCodeAt(a)===t.charCodeAt(a)?++r:++n;return!(r<0)&&0===n}r=null,t.setRandomFallback=function(e){r=e},t.genSaltSync=function(e,t){if(e=e||d,"number"!==typeof e)throw Error("Illegal arguments: "+typeof e+", "+typeof t);e<4?e=4:e>31&&(e=31);var r=[];return r.push("$2a$"),e<10&&r.push("0"),r.push(e.toString()),r.push("$"),r.push(c(n(h),h)),r.join("")},t.genSalt=function(e,r,n){if("function"===typeof r&&(n=r,r=void 0),"function"===typeof e&&(n=e,e=void 0),"undefined"===typeof e)e=d;else if("number"!==typeof e)throw Error("illegal arguments: "+typeof e);function a(r){s((function(){try{r(null,t.genSaltSync(e))}catch(n){r(n)}}))}if(!n)return new Promise((function(e,t){a((function(r,n){r?t(r):e(n)}))}));if("function"!==typeof n)throw Error("Illegal callback: "+typeof n);a(n)},t.hashSync=function(e,r){if("undefined"===typeof r&&(r=d),"number"===typeof r&&(r=t.genSaltSync(r)),"string"!==typeof e||"string"!==typeof r)throw Error("Illegal arguments: "+typeof e+", "+typeof r);return E(e,r)},t.hash=function(e,r,n,a){function o(n){"string"===typeof e&&"number"===typeof r?t.genSalt(r,(function(t,r){E(e,r,n,a)})):"string"===typeof e&&"string"===typeof r?E(e,r,n,a):s(n.bind(this,Error("Illegal arguments: "+typeof e+", "+typeof r)))}if(!n)return new Promise((function(e,t){o((function(r,n){r?t(r):e(n)}))}));if("function"!==typeof n)throw Error("Illegal callback: "+typeof n);o(n)},t.compareSync=function(e,r){if("string"!==typeof e||"string"!==typeof r)throw Error("Illegal arguments: "+typeof e+", "+typeof r);return 60===r.length&&a(t.hashSync(e,r.substr(0,r.length-31)),r)},t.compare=function(e,r,n,o){function i(n){"string"===typeof e&&"string"===typeof r?60===r.length?t.hash(e,r.substr(0,29),(function(e,t){e?n(e):n(null,a(t,r))}),o):s(n.bind(this,null,!1)):s(n.bind(this,Error("Illegal arguments: "+typeof e+", "+typeof r)))}if(!n)return new Promise((function(e,t){i((function(r,n){r?t(r):e(n)}))}));if("function"!==typeof n)throw Error("Illegal callback: "+typeof n);i(n)},t.getRounds=function(e){if("string"!==typeof e)throw Error("Illegal arguments: "+typeof e);return parseInt(e.split("$")[2],10)},t.getSalt=function(e){if("string"!==typeof e)throw Error("Illegal arguments: "+typeof e);if(60!==e.length)throw Error("Illegal hash length: "+e.length+" != 60");return e.substring(0,29)};var s="undefined"!==typeof process&&process&&"function"===typeof process.nextTick?"function"===typeof setImmediate?setImmediate:process.nextTick:setTimeout;function o(e){var t=[],r=0;return p.encodeUTF16toUTF8((function(){return r>=e.length?null:e.charCodeAt(r++)}),(function(e){t.push(e)})),t}var i="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),l=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1],u=String.fromCharCode;function c(e,t){var r,n,a=0,s=[];if(t<=0||t>e.length)throw Error("Illegal len: "+t);while(a<t){if(r=255&e[a++],s.push(i[r>>2&63]),r=(3&r)<<4,a>=t){s.push(i[63&r]);break}if(n=255&e[a++],r|=n>>4&15,s.push(i[63&r]),r=(15&n)<<2,a>=t){s.push(i[63&r]);break}n=255&e[a++],r|=n>>6&3,s.push(i[63&r]),s.push(i[63&n])}return s.join("")}function f(e,t){var r,n,a,s,o,i,c=0,f=e.length,p=0,h=[];if(t<=0)throw Error("Illegal len: "+t);while(c<f-1&&p<t){if(i=e.charCodeAt(c++),r=i<l.length?l[i]:-1,i=e.charCodeAt(c++),n=i<l.length?l[i]:-1,-1==r||-1==n)break;if(o=r<<2>>>0,o|=(48&n)>>4,h.push(u(o)),++p>=t||c>=f)break;if(i=e.charCodeAt(c++),a=i<l.length?l[i]:-1,-1==a)break;if(o=(15&n)<<4>>>0,o|=(60&a)>>2,h.push(u(o)),++p>=t||c>=f)break;i=e.charCodeAt(c++),s=i<l.length?l[i]:-1,o=(3&a)<<6>>>0,o|=s,h.push(u(o)),++p}var d=[];for(c=0;c<p;c++)d.push(h[c].charCodeAt(0));return d}var p=function(){var e={MAX_CODEPOINT:1114111,encodeUTF8:function(e,t){var r=null;"number"===typeof e&&(r=e,e=function(){return null});while(null!==r||null!==(r=e()))r<128?t(127&r):r<2048?(t(r>>6&31|192),t(63&r|128)):r<65536?(t(r>>12&15|224),t(r>>6&63|128),t(63&r|128)):(t(r>>18&7|240),t(r>>12&63|128),t(r>>6&63|128),t(63&r|128)),r=null},decodeUTF8:function(e,t){var r,n,a,s,o=function(e){e=e.slice(0,e.indexOf(null));var t=Error(e.toString());throw t.name="TruncatedError",t["bytes"]=e,t};while(null!==(r=e()))if(0===(128&r))t(r);else if(192===(224&r))null===(n=e())&&o([r,n]),t((31&r)<<6|63&n);else if(224===(240&r))(null===(n=e())||null===(a=e()))&&o([r,n,a]),t((15&r)<<12|(63&n)<<6|63&a);else{if(240!==(248&r))throw RangeError("Illegal starting byte: "+r);(null===(n=e())||null===(a=e())||null===(s=e()))&&o([r,n,a,s]),t((7&r)<<18|(63&n)<<12|(63&a)<<6|63&s)}},UTF16toUTF8:function(e,t){var r,n=null;while(1){if(null===(r=null!==n?n:e()))break;r>=55296&&r<=57343&&null!==(n=e())&&n>=56320&&n<=57343?(t(1024*(r-55296)+n-56320+65536),n=null):t(r)}null!==n&&t(n)},UTF8toUTF16:function(e,t){var r=null;"number"===typeof e&&(r=e,e=function(){return null});while(null!==r||null!==(r=e()))r<=65535?t(r):(r-=65536,t(55296+(r>>10)),t(r%1024+56320)),r=null},encodeUTF16toUTF8:function(t,r){e.UTF16toUTF8(t,(function(t){e.encodeUTF8(t,r)}))},decodeUTF8toUTF16:function(t,r){e.decodeUTF8(t,(function(t){e.UTF8toUTF16(t,r)}))},calculateCodePoint:function(e){return e<128?1:e<2048?2:e<65536?3:4},calculateUTF8:function(t){var r,n=0;while(null!==(r=t()))n+=e.calculateCodePoint(r);return n},calculateUTF16asUTF8:function(t){var r=0,n=0;return e.UTF16toUTF8(t,(function(t){++r,n+=e.calculateCodePoint(t)})),[r,n]}};return e}();Date.now=Date.now||function(){return+new Date};var h=16,d=10,g=16,v=100,m=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],y=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],w=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892];function b(e,t,r,n){var a,s=e[t],o=e[t+1];return s^=r[0],a=n[s>>>24],a+=n[256|s>>16&255],a^=n[512|s>>8&255],a+=n[768|255&s],o^=a^r[1],a=n[o>>>24],a+=n[256|o>>16&255],a^=n[512|o>>8&255],a+=n[768|255&o],s^=a^r[2],a=n[s>>>24],a+=n[256|s>>16&255],a^=n[512|s>>8&255],a+=n[768|255&s],o^=a^r[3],a=n[o>>>24],a+=n[256|o>>16&255],a^=n[512|o>>8&255],a+=n[768|255&o],s^=a^r[4],a=n[s>>>24],a+=n[256|s>>16&255],a^=n[512|s>>8&255],a+=n[768|255&s],o^=a^r[5],a=n[o>>>24],a+=n[256|o>>16&255],a^=n[512|o>>8&255],a+=n[768|255&o],s^=a^r[6],a=n[s>>>24],a+=n[256|s>>16&255],a^=n[512|s>>8&255],a+=n[768|255&s],o^=a^r[7],a=n[o>>>24],a+=n[256|o>>16&255],a^=n[512|o>>8&255],a+=n[768|255&o],s^=a^r[8],a=n[s>>>24],a+=n[256|s>>16&255],a^=n[512|s>>8&255],a+=n[768|255&s],o^=a^r[9],a=n[o>>>24],a+=n[256|o>>16&255],a^=n[512|o>>8&255],a+=n[768|255&o],s^=a^r[10],a=n[s>>>24],a+=n[256|s>>16&255],a^=n[512|s>>8&255],a+=n[768|255&s],o^=a^r[11],a=n[o>>>24],a+=n[256|o>>16&255],a^=n[512|o>>8&255],a+=n[768|255&o],s^=a^r[12],a=n[s>>>24],a+=n[256|s>>16&255],a^=n[512|s>>8&255],a+=n[768|255&s],o^=a^r[13],a=n[o>>>24],a+=n[256|o>>16&255],a^=n[512|o>>8&255],a+=n[768|255&o],s^=a^r[14],a=n[s>>>24],a+=n[256|s>>16&255],a^=n[512|s>>8&255],a+=n[768|255&s],o^=a^r[15],a=n[o>>>24],a+=n[256|o>>16&255],a^=n[512|o>>8&255],a+=n[768|255&o],s^=a^r[16],e[t]=o^r[g+1],e[t+1]=s,e}function x(e,t){for(var r=0,n=0;r<4;++r)n=n<<8|255&e[t],t=(t+1)%e.length;return{key:n,offp:t}}function k(e,t,r){for(var n,a=0,s=[0,0],o=t.length,i=r.length,l=0;l<o;l++)n=x(e,a),a=n.offp,t[l]=t[l]^n.key;for(l=0;l<o;l+=2)s=b(s,0,t,r),t[l]=s[0],t[l+1]=s[1];for(l=0;l<i;l+=2)s=b(s,0,t,r),r[l]=s[0],r[l+1]=s[1]}function C(e,t,r,n){for(var a,s=0,o=[0,0],i=r.length,l=n.length,u=0;u<i;u++)a=x(t,s),s=a.offp,r[u]=r[u]^a.key;for(s=0,u=0;u<i;u+=2)a=x(e,s),s=a.offp,o[0]^=a.key,a=x(e,s),s=a.offp,o[1]^=a.key,o=b(o,0,r,n),r[u]=o[0],r[u+1]=o[1];for(u=0;u<l;u+=2)a=x(e,s),s=a.offp,o[0]^=a.key,a=x(e,s),s=a.offp,o[1]^=a.key,o=b(o,0,r,n),n[u]=o[0],n[u+1]=o[1]}function F(e,t,r,n,a){var o,i=w.slice(),l=i.length;if(r<4||r>31){if(o=Error("Illegal number of rounds (4-31): "+r),n)return void s(n.bind(this,o));throw o}if(t.length!==h){if(o=Error("Illegal salt length: "+t.length+" != "+h),n)return void s(n.bind(this,o));throw o}r=1<<r>>>0;var u,c,f,p,d=0;function g(){if(a&&a(d/r),!(d<r)){for(d=0;d<64;d++)for(f=0;f<l>>1;f++)b(i,f<<1,u,c);var o=[];for(d=0;d<l;d++)o.push((i[d]>>24&255)>>>0),o.push((i[d]>>16&255)>>>0),o.push((i[d]>>8&255)>>>0),o.push((255&i[d])>>>0);return n?void n(null,o):o}for(var p=Date.now();d<r;)if(d+=1,k(e,u,c),k(t,u,c),Date.now()-p>v)break;n&&s(g)}if(Int32Array?(u=new Int32Array(m),c=new Int32Array(y)):(u=m.slice(),c=y.slice()),C(t,e,u,c),"undefined"!==typeof n)g();else while(1)if("undefined"!==typeof(p=g()))return p||[]}function E(e,t,r,n){var a,i,l;if("string"!==typeof e||"string"!==typeof t){if(a=Error("Invalid string / salt: Not a string"),r)return void s(r.bind(this,a));throw a}if("$"!==t.charAt(0)||"2"!==t.charAt(1)){if(a=Error("Invalid salt version: "+t.substring(0,2)),r)return void s(r.bind(this,a));throw a}if("$"===t.charAt(2))i=String.fromCharCode(0),l=3;else{if(i=t.charAt(2),"a"!==i&&"b"!==i&&"y"!==i||"$"!==t.charAt(3)){if(a=Error("Invalid salt revision: "+t.substring(2,4)),r)return void s(r.bind(this,a));throw a}l=4}if(t.charAt(l+2)>"$"){if(a=Error("Missing salt rounds"),r)return void s(r.bind(this,a));throw a}var u=10*parseInt(t.substring(l,l+1),10),p=parseInt(t.substring(l+1,l+2),10),d=u+p,g=t.substring(l+3,l+25);e+=i>="a"?"\0":"";var v=o(e),m=f(g,h);function y(e){var t=[];return t.push("$2"),i>="a"&&t.push(i),t.push("$"),d<10&&t.push("0"),t.push(d.toString()),t.push("$"),t.push(c(m,m.length)),t.push(c(e,4*w.length-1)),t.join("")}if("undefined"==typeof r)return y(F(v,m,d));F(v,m,d,(function(e,t){e?r(e,null):r(null,y(t))}),n)}return t.encodeBase64=c,t.decodeBase64=f,t}))},1249:function(e,t,r){"use strict";var n=r(2109),a=r(2092).map,s=r(1194),o=s("map");n({target:"Array",proto:!0,forced:!o},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},8862:function(e,t,r){var n=r(2109),a=r(7854),s=r(5005),o=r(2104),i=r(1702),l=r(7293),u=a.Array,c=s("JSON","stringify"),f=i(/./.exec),p=i("".charAt),h=i("".charCodeAt),d=i("".replace),g=i(1..toString),v=/[\uD800-\uDFFF]/g,m=/^[\uD800-\uDBFF]$/,y=/^[\uDC00-\uDFFF]$/,w=function(e,t,r){var n=p(r,t-1),a=p(r,t+1);return f(m,e)&&!f(y,a)||f(y,e)&&!f(m,n)?"\\u"+g(h(e,0),16):e},b=l((function(){return'"\\udf06\\ud834"'!==c("\udf06\ud834")||'"\\udead"'!==c("\udead")}));c&&n({target:"JSON",stat:!0,forced:b},{stringify:function(e,t,r){for(var n=0,a=arguments.length,s=u(a);n<a;n++)s[n]=arguments[n];var i=o(c,null,s);return"string"==typeof i?d(i,v,w):i}})},1105:function(e,t,r){"use strict";var n=r(7965),a=r(6198),s=(r(8309),r(7327),r(1539),r(5666),r(23)),o={login:function(e,t){return(0,a.Z)(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t=s.Z.encryptPass(t),r.next=4,s.Z.checkLogin("/clients/login",{auth:"bearer",headers:{email:e,password:t}});case 4:if(n=r.sent,a=n.status,o=n.data,200!=a){r.next=13;break}return sessionStorage.setItem("token",o.token),s.Z.createLocalUserData(),r.abrupt("return",{message:"Success!!!",error:!1,logged:!0});case 13:if(400!=a){r.next=17;break}return r.abrupt("return",{message:o.message,error:!0,logged:!1});case 17:console.log("Poblemas al loguearse");case 18:r.next=24;break;case 20:r.prev=20,r.t0=r["catch"](0),console.log(r.t0),localStorage.clear();case 24:case"end":return r.stop()}}),r,null,[[0,20]])})))()},getList:function(){var e=this;try{return s.Z.checkLogin("/clients").then((function(t){var r=[];if(200==t.status)if(s.Z.validateRole(["ROLE_Admin"])){var a,o=(0,n.Z)(t.data);try{for(o.s();!(a=o.n()).done;){var i=a.value;r.push({id:i.id,name:i.name,email:i.email,active:!!i.active,verify:!!i.verify,agent:!!i.agent})}}catch(f){o.e(f)}finally{o.f()}}else if(s.Z.validateRole(["ROLE_Comercial"])){var l,u=(0,n.Z)(t.data);try{for(u.s();!(l=u.n()).done;){var c=l.value;c.email==localStorage.getItem("email")&&r.push({id:c.id,name:c.name,email:c.email,active:!!c.active,verify:!!c.verify,agent:!!c.agent})}}catch(f){u.e(f)}finally{u.f()}}else s.Z.validateRole(["ROLE_Agency"])&&(r=e.validateRoleUser(t.data));return r}))}catch(t){console.log(t)}},addUpdClient:function(e){var t=arguments;return(0,a.Z)(regeneratorRuntime.mark((function r(){var n,a,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=!(t.length>1&&void 0!==t[1])||t[1],r.prev=1,e.password=s.Z.encryptPass(e.password),e.auth="bearer",!n){r.next=10;break}return r.next=7,s.Z.checkLogin("/clients/create",e,"post");case 7:r.t0=r.sent,r.next=13;break;case 10:return r.next=12,s.Z.checkLogin("/clients/upd",e,"put");case 12:r.t0=r.sent;case 13:if(a=r.t0,o=a.status,i=a.data,200!=o){r.next=18;break}return r.abrupt("return",i);case 18:r.next=23;break;case 20:r.prev=20,r.t1=r["catch"](1),console.log(r.t1.response);case 23:return r.abrupt("return",!1);case 24:case"end":return r.stop()}}),r,null,[[1,20]])})))()},getClient:function(e){return(0,a.Z)(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.checkLogin("/clients/".concat(e),{auth:"bearer"});case 3:if(r=t.sent,n=r.status,a=r.data,200!=n){t.next=8;break}return t.abrupt("return",a);case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0.response);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},delete:function(e){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n={auth:"bearer",ids:e},r.prev=1,r.next=4,s.Z.checkLogin("/clients/delete",n,"post");case 4:if(a=r.sent,o=a.status,a.data,200!=o){r.next=9;break}return r.abrupt("return",t.getList().then((function(e){return e})));case 9:r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](1),
//! Fail 
console.log(r.t0.response);case 14:case"end":return r.stop()}}),r,null,[[1,11]])})))()},validateRoleUser:function(e){var t=localStorage.getItem("email"),r=e.filter((function(e){return e.email==t})),a=[];a.push({id:r[0].id,name:r[0].name,email:r[0].email,active:!!r[0].active,verify:!!r[0].verify,agent:!!r[0].agent,vendor:!1});var s,o=(0,n.Z)(e);try{for(o.s();!(s=o.n()).done;){var i=s.value;r[0].id==i.parent&&a.push({id:i.id,name:i.name,email:i.email,active:!!i.active,verify:!!i.verify,agent:!!i.agent,vendor:!0})}}catch(l){o.e(l)}finally{o.f()}return a}};t["Z"]=o}}]);
//# sourceMappingURL=154-legacy.d1b527cb.js.map