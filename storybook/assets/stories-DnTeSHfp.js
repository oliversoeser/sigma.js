import{i as B,G as C,S as L,o as F,a as p}from"./utils-8yT8BWPw.js";import{F as w}from"./circlepack-CNqExD6Y.js";import{a as D}from"./circular-BYverafV.js";import{d as E}from"./defaults-9mJNxk8k.js";import{f as M}from"./index-cx5rF6iY.js";import"./_commonjsHelpers-BosuxZz1.js";var S=E,I=B,P={dimensions:["x","y"],center:.5,rng:Math.random,scale:1};function v(r,c,o){if(!I(c))throw new Error("graphology-layout/random: the given graph is not a valid graphology instance.");o=S(o,P);var s=o.dimensions;if(!Array.isArray(s)||s.length<1)throw new Error("graphology-layout/random: given dimensions are invalid.");var b=s.length,k=o.center,z=o.rng,m=o.scale,u=(k-.5)*m;function t(y){for(var n=0;n<b;n++)y[s[n]]=z()*m+u;return y}if(!r){var g={};return c.forEachNode(function(y){g[y]=t({})}),g}c.updateEachNodeAttributes(function(y,n){return t(n),n},{attributes:s})}var T=v.bind(null,!1);T.assign=v.bind(null,!0);var G=E,N=B,R=Math.PI/180,O={dimensions:["x","y"],centeredOnZero:!1,degrees:!1};function A(r,c,o,s){if(!N(c))throw new Error("graphology-layout/rotation: the given graph is not a valid graphology instance.");s=G(s,O),s.degrees&&(o*=R);var b=s.dimensions;if(!Array.isArray(b)||b.length!==2)throw new Error("graphology-layout/random: given dimensions are invalid.");if(c.order===0)return r?void 0:{};var k=b[0],z=b[1],m=0,u=0;if(!s.centeredOnZero){var t=1/0,g=-1/0,y=1/0,n=-1/0;c.forEachNode(function(e,a){var i=a[k],d=a[z];i<t&&(t=i),i>g&&(g=i),d<y&&(y=d),d>n&&(n=d)}),m=(t+g)/2,u=(y+n)/2}var x=Math.cos(o),f=Math.sin(o);function h(e){var a=e[k],i=e[z];return e[k]=m+(a-m)*x-(i-u)*f,e[z]=u+(a-m)*f+(i-u)*x,e}if(!r){var l={};return c.forEachNode(function(e,a){var i={};i[k]=a[k],i[z]=a[z],l[e]=h(i)}),l}c.updateEachNodeAttributes(function(e,a){return h(a),a},{attributes:b})}var j=A.bind(null,!1);j.assign=A.bind(null,!0);var H=D;const U=[{key:"0.0",attributes:{x:268.72385,y:91.18155,size:22.714287,label:"Myriel",color:"#D8482D"}},{key:"1.0",attributes:{x:296.39902,y:57.118374,size:15,label:"Napoleon",color:"#B30000"}},{key:"2.0",attributes:{x:248.45229,y:52.22656,size:16.714285,label:"MlleBaptistine",color:"#BB100A"}},{key:"3.0",attributes:{x:224.83313,y:98.01885,size:16.714285,label:"MmeMagloire",color:"#BB100A"}},{key:"4.0",attributes:{x:270.9098,y:149.2961,size:15,label:"CountessDeLo",color:"#B30000"}},{key:"5.0",attributes:{x:318.6509,y:85.41602,size:15,label:"Geborand",color:"#B30000"}},{key:"6.0",attributes:{x:330.3126,y:117.94921,size:15,label:"Champtercier",color:"#B30000"}},{key:"7.0",attributes:{x:310.513,y:155.66956,size:15,label:"Cravatte",color:"#B30000"}},{key:"8.0",attributes:{x:295.74683,y:124.78035,size:15,label:"Count",color:"#B30000"}},{key:"9.0",attributes:{x:241.03372,y:131.8897,size:15,label:"OldMan",color:"#B30000"}},{key:"10.0",attributes:{x:-55.532795,y:-246.75798,size:15,label:"Labarre",color:"#B30000"}},{key:"11.0",attributes:{x:-8.81755,y:-60.480377,size:45,label:"Valjean",color:"#FEF0D9"}},{key:"12.0",attributes:{x:116.85369,y:-100.77216,size:15.857142,label:"Marguerite",color:"#B70805"}},{key:"13.0",attributes:{x:78.10812,y:-16.99423,size:15,label:"MmeDeR",color:"#B30000"}},{key:"14.0",attributes:{x:47.669666,y:-96.23158,size:15,label:"Isabeau",color:"#B30000"}},{key:"15.0",attributes:{x:20.945133,y:-118.35298,size:15,label:"Gervais",color:"#B30000"}},{key:"16.0",attributes:{x:232.50653,y:-165.75543,size:21.857143,label:"Tholomyes",color:"#D44028"}},{key:"17.0",attributes:{x:322.50223,y:-210.94756,size:20.142857,label:"Listolier",color:"#CC301E"}},{key:"18.0",attributes:{x:322.0389,y:-162.5361,size:20.142857,label:"Fameuil",color:"#CC301E"}},{key:"19.0",attributes:{x:282.84045,y:-234.37758,size:20.142857,label:"Blacheville",color:"#CC301E"}},{key:"20.0",attributes:{x:282.14212,y:-141.3707,size:20.142857,label:"Favourite",color:"#CC301E"}},{key:"21.0",attributes:{x:279.24896,y:-186.69917,size:20.142857,label:"Dahlia",color:"#CC301E"}},{key:"22.0",attributes:{x:240.49136,y:-212.45226,size:20.142857,label:"Zephine",color:"#CC301E"}},{key:"23.0",attributes:{x:185.86234,y:-128.47615,size:27,label:"Fantine",color:"#ED7047"}},{key:"24.0",attributes:{x:-15.730793,y:46.37429,size:23.57143,label:"MmeThenardier",color:"#DC5032"}},{key:"25.0",attributes:{x:3.6068764,y:98.60965,size:27.857143,label:"Thenardier",color:"#F1784C"}},{key:"26.0",attributes:{x:-69.92912,y:-15.777599,size:23.57143,label:"Cosette",color:"#DC5032"}},{key:"27.0",attributes:{x:54.198936,y:49.115128,size:28.714287,label:"Javert",color:"#F58051"}},{key:"28.0",attributes:{x:58.138313,y:-56.714897,size:17.571428,label:"Fauchelevent",color:"#BF180F"}},{key:"29.0",attributes:{x:97.39532,y:-157.35661,size:21,label:"Bamatabois",color:"#D03823"}},{key:"30.0",attributes:{x:157.66608,y:-88.86034,size:15.857142,label:"Perpetue",color:"#B70805"}},{key:"31.0",attributes:{x:130.24326,y:-62.113045,size:17.571428,label:"Simplice",color:"#BF180F"}},{key:"32.0",attributes:{x:-31.725157,y:-124.8531,size:15,label:"Scaufflaire",color:"#B30000"}},{key:"33.0",attributes:{x:45.4282,y:-2.6807823,size:15.857142,label:"Woman1",color:"#B70805"}},{key:"34.0",attributes:{x:-2.146402,y:-152.7878,size:19.285715,label:"Judge",color:"#C72819"}},{key:"35.0",attributes:{x:54.183117,y:-142.10239,size:19.285715,label:"Champmathieu",color:"#C72819"}},{key:"36.0",attributes:{x:-21.096437,y:-192.47128,size:19.285715,label:"Brevet",color:"#C72819"}},{key:"37.0",attributes:{x:56.919018,y:-184.99847,size:19.285715,label:"Chenildieu",color:"#C72819"}},{key:"38.0",attributes:{x:21.456747,y:-211.19899,size:19.285715,label:"Cochepaille",color:"#C72819"}},{key:"39.0",attributes:{x:-69.42261,y:66.22773,size:16.714285,label:"Pontmercy",color:"#BB100A"}},{key:"40.0",attributes:{x:52.13746,y:97.863976,size:15,label:"Boulatruelle",color:"#B30000"}},{key:"41.0",attributes:{x:-84.15585,y:140.50175,size:23.57143,label:"Eponine",color:"#DC5032"}},{key:"42.0",attributes:{x:-47.696083,y:112.90357,size:16.714285,label:"Anzelma",color:"#BB100A"}},{key:"43.0",attributes:{x:10.037987,y:7.8234367,size:16.714285,label:"Woman2",color:"#BB100A"}},{key:"44.0",attributes:{x:82.99555,y:-87.651726,size:15.857142,label:"MotherInnocent",color:"#B70805"}},{key:"45.0",attributes:{x:94.93769,y:-47.799778,size:15,label:"Gribier",color:"#B30000"}},{key:"46.0",attributes:{x:-293.23438,y:-146.10257,size:15,label:"Jondrette",color:"#B30000"}},{key:"47.0",attributes:{x:-294.94247,y:-108.07895,size:15.857142,label:"MmeBurgon",color:"#B70805"}},{key:"48.0",attributes:{x:-215.57619,y:34.40003,size:33,label:"Gavroche",color:"#FCA072"}},{key:"49.0",attributes:{x:-119.18742,y:-17.39732,size:20.142857,label:"Gillenormand",color:"#CC301E"}},{key:"50.0",attributes:{x:-57.473045,y:29.63873,size:15.857142,label:"Magnon",color:"#B70805"}},{key:"51.0",attributes:{x:-93.255005,y:-60.657784,size:20.142857,label:"MlleGillenormand",color:"#CC301E"}},{key:"52.0",attributes:{x:-93.764046,y:22.565668,size:15.857142,label:"MmePontmercy",color:"#B70805"}},{key:"53.0",attributes:{x:-132.14008,y:-66.85538,size:15,label:"MlleVaubois",color:"#B30000"}},{key:"54.0",attributes:{x:-95.75337,y:-102.71505,size:17.571428,label:"LtGillenormand",color:"#BF180F"}},{key:"55.0",attributes:{x:-142.15263,y:36.388676,size:30.428574,label:"Marius",color:"#FC8F5C"}},{key:"56.0",attributes:{x:-160.2533,y:-24.29684,size:15.857142,label:"BaronessT",color:"#B70805"}},{key:"57.0",attributes:{x:-267.16248,y:196.98003,size:23.57143,label:"Mabeuf",color:"#DC5032"}},{key:"58.0",attributes:{x:-190.88988,y:96.44671,size:27,label:"Enjolras",color:"#ED7047"}},{key:"59.0",attributes:{x:-222.5417,y:144.66484,size:23.57143,label:"Combeferre",color:"#DC5032"}},{key:"60.0",attributes:{x:-325.61102,y:166.71417,size:21.857143,label:"Prouvaire",color:"#D44028"}},{key:"61.0",attributes:{x:-276.3468,y:145.79153,size:23.57143,label:"Feuilly",color:"#DC5032"}},{key:"62.0",attributes:{x:-251.45561,y:97.83937,size:25.285713,label:"Courfeyrac",color:"#E5603D"}},{key:"63.0",attributes:{x:-318.40936,y:114.202415,size:24.428572,label:"Bahorel",color:"#E05837"}},{key:"64.0",attributes:{x:-278.9682,y:45.932438,size:25.285713,label:"Bossuet",color:"#E5603D"}},{key:"65.0",attributes:{x:-333.04984,y:62.438156,size:24.428572,label:"Joly",color:"#E05837"}},{key:"66.0",attributes:{x:-370.2446,y:101.73884,size:22.714287,label:"Grantaire",color:"#D8482D"}},{key:"67.0",attributes:{x:-253.54378,y:237.9443,size:15,label:"MotherPlutarch",color:"#B30000"}},{key:"68.0",attributes:{x:-16.550194,y:152.69055,size:22.714287,label:"Gueulemer",color:"#D8482D"}},{key:"69.0",attributes:{x:35.653145,y:144.49445,size:22.714287,label:"Babet",color:"#D8482D"}},{key:"70.0",attributes:{x:58.97649,y:188.46011,size:22.714287,label:"Claquesous",color:"#D8482D"}},{key:"71.0",attributes:{x:-2.9325058,y:200.66508,size:21.857143,label:"Montparnasse",color:"#D44028"}},{key:"72.0",attributes:{x:-30.056648,y:3.5053203,size:16.714285,label:"Toussaint",color:"#BB100A"}},{key:"73.0",attributes:{x:-244.859,y:-11.3161335,size:15.857142,label:"Child1",color:"#B70805"}},{key:"74.0",attributes:{x:-280.33203,y:-1.466383,size:15.857142,label:"Child2",color:"#B70805"}},{key:"75.0",attributes:{x:-56.819256,y:182.0544,size:20.142857,label:"Brujon",color:"#CC301E"}},{key:"76.0",attributes:{x:-382.06223,y:47.045475,size:20.142857,label:"MmeHucheloup",color:"#CC301E"}}],_=[{key:"0",source:"1.0",target:"0.0",attributes:{size:1}},{key:"1",source:"2.0",target:"0.0",attributes:{size:8}},{key:"2",source:"3.0",target:"0.0",attributes:{size:10}},{key:"3",source:"3.0",target:"2.0",attributes:{size:6}},{key:"4",source:"4.0",target:"0.0",attributes:{size:1}},{key:"5",source:"5.0",target:"0.0",attributes:{size:1}},{key:"6",source:"6.0",target:"0.0",attributes:{size:1}},{key:"7",source:"7.0",target:"0.0",attributes:{size:1}},{key:"8",source:"8.0",target:"0.0",attributes:{size:2}},{key:"9",source:"9.0",target:"0.0",attributes:{size:1}},{key:"13",source:"11.0",target:"0.0",attributes:{size:5}},{key:"12",source:"11.0",target:"2.0",attributes:{size:3}},{key:"11",source:"11.0",target:"3.0",attributes:{size:3}},{key:"10",source:"11.0",target:"10.0",attributes:{size:1}},{key:"14",source:"12.0",target:"11.0",attributes:{size:1}},{key:"15",source:"13.0",target:"11.0",attributes:{size:1}},{key:"16",source:"14.0",target:"11.0",attributes:{size:1}},{key:"17",source:"15.0",target:"11.0",attributes:{size:1}},{key:"18",source:"17.0",target:"16.0",attributes:{size:4}},{key:"19",source:"18.0",target:"16.0",attributes:{size:4}},{key:"20",source:"18.0",target:"17.0",attributes:{size:4}},{key:"21",source:"19.0",target:"16.0",attributes:{size:4}},{key:"22",source:"19.0",target:"17.0",attributes:{size:4}},{key:"23",source:"19.0",target:"18.0",attributes:{size:4}},{key:"24",source:"20.0",target:"16.0",attributes:{size:3}},{key:"25",source:"20.0",target:"17.0",attributes:{size:3}},{key:"26",source:"20.0",target:"18.0",attributes:{size:3}},{key:"27",source:"20.0",target:"19.0",attributes:{size:4}},{key:"28",source:"21.0",target:"16.0",attributes:{size:3}},{key:"29",source:"21.0",target:"17.0",attributes:{size:3}},{key:"30",source:"21.0",target:"18.0",attributes:{size:3}},{key:"31",source:"21.0",target:"19.0",attributes:{size:3}},{key:"32",source:"21.0",target:"20.0",attributes:{size:5}},{key:"33",source:"22.0",target:"16.0",attributes:{size:3}},{key:"34",source:"22.0",target:"17.0",attributes:{size:3}},{key:"35",source:"22.0",target:"18.0",attributes:{size:3}},{key:"36",source:"22.0",target:"19.0",attributes:{size:3}},{key:"37",source:"22.0",target:"20.0",attributes:{size:4}},{key:"38",source:"22.0",target:"21.0",attributes:{size:4}},{key:"47",source:"23.0",target:"11.0",attributes:{size:9}},{key:"46",source:"23.0",target:"12.0",attributes:{size:2}},{key:"39",source:"23.0",target:"16.0",attributes:{size:3}},{key:"40",source:"23.0",target:"17.0",attributes:{size:3}},{key:"41",source:"23.0",target:"18.0",attributes:{size:3}},{key:"42",source:"23.0",target:"19.0",attributes:{size:3}},{key:"43",source:"23.0",target:"20.0",attributes:{size:4}},{key:"44",source:"23.0",target:"21.0",attributes:{size:4}},{key:"45",source:"23.0",target:"22.0",attributes:{size:4}},{key:"49",source:"24.0",target:"11.0",attributes:{size:7}},{key:"48",source:"24.0",target:"23.0",attributes:{size:2}},{key:"52",source:"25.0",target:"11.0",attributes:{size:12}},{key:"51",source:"25.0",target:"23.0",attributes:{size:1}},{key:"50",source:"25.0",target:"24.0",attributes:{size:13}},{key:"54",source:"26.0",target:"11.0",attributes:{size:31}},{key:"55",source:"26.0",target:"16.0",attributes:{size:1}},{key:"53",source:"26.0",target:"24.0",attributes:{size:4}},{key:"56",source:"26.0",target:"25.0",attributes:{size:1}},{key:"57",source:"27.0",target:"11.0",attributes:{size:17}},{key:"58",source:"27.0",target:"23.0",attributes:{size:5}},{key:"60",source:"27.0",target:"24.0",attributes:{size:1}},{key:"59",source:"27.0",target:"25.0",attributes:{size:5}},{key:"61",source:"27.0",target:"26.0",attributes:{size:1}},{key:"62",source:"28.0",target:"11.0",attributes:{size:8}},{key:"63",source:"28.0",target:"27.0",attributes:{size:1}},{key:"66",source:"29.0",target:"11.0",attributes:{size:2}},{key:"64",source:"29.0",target:"23.0",attributes:{size:1}},{key:"65",source:"29.0",target:"27.0",attributes:{size:1}},{key:"67",source:"30.0",target:"23.0",attributes:{size:1}},{key:"69",source:"31.0",target:"11.0",attributes:{size:3}},{key:"70",source:"31.0",target:"23.0",attributes:{size:2}},{key:"71",source:"31.0",target:"27.0",attributes:{size:1}},{key:"68",source:"31.0",target:"30.0",attributes:{size:2}},{key:"72",source:"32.0",target:"11.0",attributes:{size:1}},{key:"73",source:"33.0",target:"11.0",attributes:{size:2}},{key:"74",source:"33.0",target:"27.0",attributes:{size:1}},{key:"75",source:"34.0",target:"11.0",attributes:{size:3}},{key:"76",source:"34.0",target:"29.0",attributes:{size:2}},{key:"77",source:"35.0",target:"11.0",attributes:{size:3}},{key:"79",source:"35.0",target:"29.0",attributes:{size:2}},{key:"78",source:"35.0",target:"34.0",attributes:{size:3}},{key:"82",source:"36.0",target:"11.0",attributes:{size:2}},{key:"83",source:"36.0",target:"29.0",attributes:{size:1}},{key:"80",source:"36.0",target:"34.0",attributes:{size:2}},{key:"81",source:"36.0",target:"35.0",attributes:{size:2}},{key:"87",source:"37.0",target:"11.0",attributes:{size:2}},{key:"88",source:"37.0",target:"29.0",attributes:{size:1}},{key:"84",source:"37.0",target:"34.0",attributes:{size:2}},{key:"85",source:"37.0",target:"35.0",attributes:{size:2}},{key:"86",source:"37.0",target:"36.0",attributes:{size:2}},{key:"93",source:"38.0",target:"11.0",attributes:{size:2}},{key:"94",source:"38.0",target:"29.0",attributes:{size:1}},{key:"89",source:"38.0",target:"34.0",attributes:{size:2}},{key:"90",source:"38.0",target:"35.0",attributes:{size:2}},{key:"91",source:"38.0",target:"36.0",attributes:{size:2}},{key:"92",source:"38.0",target:"37.0",attributes:{size:2}},{key:"95",source:"39.0",target:"25.0",attributes:{size:1}},{key:"96",source:"40.0",target:"25.0",attributes:{size:1}},{key:"97",source:"41.0",target:"24.0",attributes:{size:2}},{key:"98",source:"41.0",target:"25.0",attributes:{size:3}},{key:"101",source:"42.0",target:"24.0",attributes:{size:1}},{key:"100",source:"42.0",target:"25.0",attributes:{size:2}},{key:"99",source:"42.0",target:"41.0",attributes:{size:2}},{key:"102",source:"43.0",target:"11.0",attributes:{size:3}},{key:"103",source:"43.0",target:"26.0",attributes:{size:1}},{key:"104",source:"43.0",target:"27.0",attributes:{size:1}},{key:"106",source:"44.0",target:"11.0",attributes:{size:1}},{key:"105",source:"44.0",target:"28.0",attributes:{size:3}},{key:"107",source:"45.0",target:"28.0",attributes:{size:2}},{key:"108",source:"47.0",target:"46.0",attributes:{size:1}},{key:"112",source:"48.0",target:"11.0",attributes:{size:1}},{key:"110",source:"48.0",target:"25.0",attributes:{size:1}},{key:"111",source:"48.0",target:"27.0",attributes:{size:1}},{key:"109",source:"48.0",target:"47.0",attributes:{size:2}},{key:"114",source:"49.0",target:"11.0",attributes:{size:2}},{key:"113",source:"49.0",target:"26.0",attributes:{size:3}},{key:"116",source:"50.0",target:"24.0",attributes:{size:1}},{key:"115",source:"50.0",target:"49.0",attributes:{size:1}},{key:"119",source:"51.0",target:"11.0",attributes:{size:2}},{key:"118",source:"51.0",target:"26.0",attributes:{size:2}},{key:"117",source:"51.0",target:"49.0",attributes:{size:9}},{key:"121",source:"52.0",target:"39.0",attributes:{size:1}},{key:"120",source:"52.0",target:"51.0",attributes:{size:1}},{key:"122",source:"53.0",target:"51.0",attributes:{size:1}},{key:"125",source:"54.0",target:"26.0",attributes:{size:1}},{key:"124",source:"54.0",target:"49.0",attributes:{size:1}},{key:"123",source:"54.0",target:"51.0",attributes:{size:2}},{key:"131",source:"55.0",target:"11.0",attributes:{size:19}},{key:"132",source:"55.0",target:"16.0",attributes:{size:1}},{key:"133",source:"55.0",target:"25.0",attributes:{size:2}},{key:"130",source:"55.0",target:"26.0",attributes:{size:21}},{key:"128",source:"55.0",target:"39.0",attributes:{size:1}},{key:"134",source:"55.0",target:"41.0",attributes:{size:5}},{key:"135",source:"55.0",target:"48.0",attributes:{size:4}},{key:"127",source:"55.0",target:"49.0",attributes:{size:12}},{key:"126",source:"55.0",target:"51.0",attributes:{size:6}},{key:"129",source:"55.0",target:"54.0",attributes:{size:1}},{key:"136",source:"56.0",target:"49.0",attributes:{size:1}},{key:"137",source:"56.0",target:"55.0",attributes:{size:1}},{key:"139",source:"57.0",target:"41.0",attributes:{size:1}},{key:"140",source:"57.0",target:"48.0",attributes:{size:1}},{key:"138",source:"57.0",target:"55.0",attributes:{size:1}},{key:"145",source:"58.0",target:"11.0",attributes:{size:4}},{key:"143",source:"58.0",target:"27.0",attributes:{size:6}},{key:"142",source:"58.0",target:"48.0",attributes:{size:7}},{key:"141",source:"58.0",target:"55.0",attributes:{size:7}},{key:"144",source:"58.0",target:"57.0",attributes:{size:1}},{key:"148",source:"59.0",target:"48.0",attributes:{size:6}},{key:"147",source:"59.0",target:"55.0",attributes:{size:5}},{key:"149",source:"59.0",target:"57.0",attributes:{size:2}},{key:"146",source:"59.0",target:"58.0",attributes:{size:15}},{key:"150",source:"60.0",target:"48.0",attributes:{size:1}},{key:"151",source:"60.0",target:"58.0",attributes:{size:4}},{key:"152",source:"60.0",target:"59.0",attributes:{size:2}},{key:"153",source:"61.0",target:"48.0",attributes:{size:2}},{key:"158",source:"61.0",target:"55.0",attributes:{size:1}},{key:"157",source:"61.0",target:"57.0",attributes:{size:1}},{key:"154",source:"61.0",target:"58.0",attributes:{size:6}},{key:"156",source:"61.0",target:"59.0",attributes:{size:5}},{key:"155",source:"61.0",target:"60.0",attributes:{size:2}},{key:"164",source:"62.0",target:"41.0",attributes:{size:1}},{key:"162",source:"62.0",target:"48.0",attributes:{size:7}},{key:"159",source:"62.0",target:"55.0",attributes:{size:9}},{key:"163",source:"62.0",target:"57.0",attributes:{size:2}},{key:"160",source:"62.0",target:"58.0",attributes:{size:17}},{key:"161",source:"62.0",target:"59.0",attributes:{size:13}},{key:"166",source:"62.0",target:"60.0",attributes:{size:3}},{key:"165",source:"62.0",target:"61.0",attributes:{size:6}},{key:"168",source:"63.0",target:"48.0",attributes:{size:5}},{key:"174",source:"63.0",target:"55.0",attributes:{size:1}},{key:"170",source:"63.0",target:"57.0",attributes:{size:2}},{key:"171",source:"63.0",target:"58.0",attributes:{size:4}},{key:"167",source:"63.0",target:"59.0",attributes:{size:5}},{key:"173",source:"63.0",target:"60.0",attributes:{size:2}},{key:"172",source:"63.0",target:"61.0",attributes:{size:3}},{key:"169",source:"63.0",target:"62.0",attributes:{size:6}},{key:"184",source:"64.0",target:"11.0",attributes:{size:1}},{key:"177",source:"64.0",target:"48.0",attributes:{size:5}},{key:"175",source:"64.0",target:"55.0",attributes:{size:5}},{key:"183",source:"64.0",target:"57.0",attributes:{size:1}},{key:"179",source:"64.0",target:"58.0",attributes:{size:10}},{key:"182",source:"64.0",target:"59.0",attributes:{size:9}},{key:"181",source:"64.0",target:"60.0",attributes:{size:2}},{key:"180",source:"64.0",target:"61.0",attributes:{size:6}},{key:"176",source:"64.0",target:"62.0",attributes:{size:12}},{key:"178",source:"64.0",target:"63.0",attributes:{size:4}},{key:"187",source:"65.0",target:"48.0",attributes:{size:3}},{key:"194",source:"65.0",target:"55.0",attributes:{size:2}},{key:"193",source:"65.0",target:"57.0",attributes:{size:1}},{key:"189",source:"65.0",target:"58.0",attributes:{size:5}},{key:"192",source:"65.0",target:"59.0",attributes:{size:5}},{key:"191",source:"65.0",target:"60.0",attributes:{size:2}},{key:"190",source:"65.0",target:"61.0",attributes:{size:5}},{key:"188",source:"65.0",target:"62.0",attributes:{size:5}},{key:"185",source:"65.0",target:"63.0",attributes:{size:5}},{key:"186",source:"65.0",target:"64.0",attributes:{size:7}},{key:"200",source:"66.0",target:"48.0",attributes:{size:1}},{key:"196",source:"66.0",target:"58.0",attributes:{size:3}},{key:"197",source:"66.0",target:"59.0",attributes:{size:1}},{key:"203",source:"66.0",target:"60.0",attributes:{size:1}},{key:"202",source:"66.0",target:"61.0",attributes:{size:1}},{key:"198",source:"66.0",target:"62.0",attributes:{size:2}},{key:"201",source:"66.0",target:"63.0",attributes:{size:1}},{key:"195",source:"66.0",target:"64.0",attributes:{size:3}},{key:"199",source:"66.0",target:"65.0",attributes:{size:2}},{key:"204",source:"67.0",target:"57.0",attributes:{size:3}},{key:"206",source:"68.0",target:"11.0",attributes:{size:1}},{key:"207",source:"68.0",target:"24.0",attributes:{size:1}},{key:"205",source:"68.0",target:"25.0",attributes:{size:5}},{key:"208",source:"68.0",target:"27.0",attributes:{size:1}},{key:"210",source:"68.0",target:"41.0",attributes:{size:1}},{key:"209",source:"68.0",target:"48.0",attributes:{size:1}},{key:"213",source:"69.0",target:"11.0",attributes:{size:1}},{key:"214",source:"69.0",target:"24.0",attributes:{size:1}},{key:"211",source:"69.0",target:"25.0",attributes:{size:6}},{key:"215",source:"69.0",target:"27.0",attributes:{size:2}},{key:"217",source:"69.0",target:"41.0",attributes:{size:1}},{key:"216",source:"69.0",target:"48.0",attributes:{size:1}},{key:"212",source:"69.0",target:"68.0",attributes:{size:6}},{key:"221",source:"70.0",target:"11.0",attributes:{size:1}},{key:"222",source:"70.0",target:"24.0",attributes:{size:1}},{key:"218",source:"70.0",target:"25.0",attributes:{size:4}},{key:"223",source:"70.0",target:"27.0",attributes:{size:1}},{key:"224",source:"70.0",target:"41.0",attributes:{size:1}},{key:"225",source:"70.0",target:"58.0",attributes:{size:1}},{key:"220",source:"70.0",target:"68.0",attributes:{size:4}},{key:"219",source:"70.0",target:"69.0",attributes:{size:4}},{key:"230",source:"71.0",target:"11.0",attributes:{size:1}},{key:"233",source:"71.0",target:"25.0",attributes:{size:1}},{key:"226",source:"71.0",target:"27.0",attributes:{size:1}},{key:"232",source:"71.0",target:"41.0",attributes:{size:1}},{key:"231",source:"71.0",target:"48.0",attributes:{size:1}},{key:"228",source:"71.0",target:"68.0",attributes:{size:2}},{key:"227",source:"71.0",target:"69.0",attributes:{size:2}},{key:"229",source:"71.0",target:"70.0",attributes:{size:2}},{key:"236",source:"72.0",target:"11.0",attributes:{size:1}},{key:"234",source:"72.0",target:"26.0",attributes:{size:2}},{key:"235",source:"72.0",target:"27.0",attributes:{size:1}},{key:"237",source:"73.0",target:"48.0",attributes:{size:2}},{key:"238",source:"74.0",target:"48.0",attributes:{size:2}},{key:"239",source:"74.0",target:"73.0",attributes:{size:3}},{key:"242",source:"75.0",target:"25.0",attributes:{size:3}},{key:"244",source:"75.0",target:"41.0",attributes:{size:1}},{key:"243",source:"75.0",target:"48.0",attributes:{size:1}},{key:"241",source:"75.0",target:"68.0",attributes:{size:3}},{key:"240",source:"75.0",target:"69.0",attributes:{size:3}},{key:"245",source:"75.0",target:"70.0",attributes:{size:1}},{key:"246",source:"75.0",target:"71.0",attributes:{size:1}},{key:"252",source:"76.0",target:"48.0",attributes:{size:1}},{key:"253",source:"76.0",target:"58.0",attributes:{size:1}},{key:"251",source:"76.0",target:"62.0",attributes:{size:1}},{key:"250",source:"76.0",target:"63.0",attributes:{size:1}},{key:"247",source:"76.0",target:"64.0",attributes:{size:1}},{key:"248",source:"76.0",target:"65.0",attributes:{size:1}},{key:"249",source:"76.0",target:"66.0",attributes:{size:1}}],$={nodes:U,edges:_},J=()=>{const r=new C;r.import($);const c=document.getElementById("sigma-container"),o=document.getElementById("forceatlas2"),s=document.getElementById("forceatlas2-stop-label"),b=document.getElementById("forceatlas2-start-label"),k=document.getElementById("random"),z=document.getElementById("circular"),m=M.inferSettings(r),u=new w(r,{settings:m});let t=null;function g(){u.stop(),b.style.display="flex",s.style.display="none"}function y(){t&&t(),u.start(),b.style.display="none",s.style.display="flex"}function n(){u.isRunning()?g():y()}o.addEventListener("click",n);function x(){u.isRunning()&&g(),t&&t();const l={min:0,max:0},e={min:0,max:0};r.forEachNode((i,d)=>{l.min=Math.min(d.x,l.min),l.max=Math.max(d.x,l.max),e.min=Math.min(d.y,e.min),e.max=Math.max(d.y,e.max)});const a={};r.forEachNode(i=>{a[i]={x:Math.random()*(l.max-l.min),y:Math.random()*(e.max-e.min)}}),t=p(r,a,{duration:2e3})}k.addEventListener("click",x);function f(){u.isRunning()&&g(),t&&t();const l=H(r,{scale:100});t=p(r,l,{duration:2e3,easing:"linear"})}z.addEventListener("click",f);const h=new L(r,c);F(()=>{h.kill()})},Y=`<style>
  html,
  body,
  #storybook-root,
  #sigma-container {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  #buttons {
    position: absolute;
    right: 1em;
    top: 1em;
    display: flex;
  }
  #buttons > button {
    margin-right: 1em;
    display: inline-block;
    text-align: center;
    background: white;
    outline: none;
    border: 1px solid dimgrey;
    border-radius: 2px;
    cursor: pointer;
  }
  #buttons > button img {
    height: 2em;
  }
  #buttons > button > span {
    height: 100%;
    display: flex;
    align-items: center;
  }
  #buttons > button:last-child {
    margin-right: 0;
  }
</style>
<div id="sigma-container"></div>
<div id="buttons">
  <button id="random">
    <span><img src="./GiPerspectiveDiceSixFaces.svg" />random</span>
  </button>
  <button id="forceatlas2">
    <span>
      <img id="forceatlas2-start-label" src="./BiPlay.svg" />
      <img id="forceatlas2-stop-label" style="display: none" src="./BiPause.svg" />
      Force Atlas 2
    </span>
  </button>
  <button id="circular">
    <span><img src="./BiLoaderCircle.svg" />circular</span>
  </button>
</div>
`,V=`/**
 * This is a minimal example of sigma. You can use it as a base to write new
 * examples, or reproducible test cases for new issues, for instance.
 */
import Graph from "graphology";
import { circular } from "graphology-layout";
import forceAtlas2 from "graphology-layout-forceatlas2";
import FA2Layout from "graphology-layout-forceatlas2/worker";
import Sigma from "sigma";
import { PlainObject } from "sigma/types";
import { animateNodes } from "sigma/utils";

import { onStoryDown } from "../utils";
import data from "./data.json";

export default () => {
  // Initialize the graph object with data
  const graph = new Graph();
  graph.import(data);

  // Retrieve some useful DOM elements:
  const container = document.getElementById("sigma-container") as HTMLElement;

  const FA2Button = document.getElementById("forceatlas2") as HTMLElement;
  const FA2StopLabel = document.getElementById("forceatlas2-stop-label") as HTMLElement;
  const FA2StartLabel = document.getElementById("forceatlas2-start-label") as HTMLElement;

  const randomButton = document.getElementById("random") as HTMLElement;

  const circularButton = document.getElementById("circular") as HTMLElement;

  /** FA2 LAYOUT **/
  /* This example shows how to use the force atlas 2 layout in a web worker */

  // Graphology provides a easy to use implementation of Force Atlas 2 in a web worker
  const sensibleSettings = forceAtlas2.inferSettings(graph);
  const fa2Layout = new FA2Layout(graph, {
    settings: sensibleSettings,
  });

  // A button to trigger the layout start/stop actions

  // A variable is used to toggle state between start and stop
  let cancelCurrentAnimation: (() => void) | null = null;

  // correlate start/stop actions with state management
  function stopFA2() {
    fa2Layout.stop();
    FA2StartLabel.style.display = "flex";
    FA2StopLabel.style.display = "none";
  }
  function startFA2() {
    if (cancelCurrentAnimation) cancelCurrentAnimation();
    fa2Layout.start();
    FA2StartLabel.style.display = "none";
    FA2StopLabel.style.display = "flex";
  }

  // the main toggle function
  function toggleFA2Layout() {
    if (fa2Layout.isRunning()) {
      stopFA2();
    } else {
      startFA2();
    }
  }
  // bind method to the forceatlas2 button
  FA2Button.addEventListener("click", toggleFA2Layout);

  /** RANDOM LAYOUT **/
  /* Layout can be handled manually by setting nodes x and y attributes */
  /* This random layout has been coded to show how to manipulate positions directly in the graph instance */
  /* Alternatively a random layout algo exists in graphology: https://github.com/graphology/graphology-layout#random  */
  function randomLayout() {
    // stop fa2 if running
    if (fa2Layout.isRunning()) stopFA2();
    if (cancelCurrentAnimation) cancelCurrentAnimation();

    // to keep positions scale uniform between layouts, we first calculate positions extents
    const xExtents = { min: 0, max: 0 };
    const yExtents = { min: 0, max: 0 };
    graph.forEachNode((_node, attributes) => {
      xExtents.min = Math.min(attributes.x, xExtents.min);
      xExtents.max = Math.max(attributes.x, xExtents.max);
      yExtents.min = Math.min(attributes.y, yExtents.min);
      yExtents.max = Math.max(attributes.y, yExtents.max);
    });
    const randomPositions: PlainObject<PlainObject<number>> = {};
    graph.forEachNode((node) => {
      // create random positions respecting position extents
      randomPositions[node] = {
        x: Math.random() * (xExtents.max - xExtents.min),
        y: Math.random() * (yExtents.max - yExtents.min),
      };
    });
    // use sigma animation to update new positions
    cancelCurrentAnimation = animateNodes(graph, randomPositions, { duration: 2000 });
  }

  // bind method to the random button
  randomButton.addEventListener("click", randomLayout);

  /** CIRCULAR LAYOUT **/
  /* This example shows how to use an existing deterministic graphology layout */
  function circularLayout() {
    // stop fa2 if running
    if (fa2Layout.isRunning()) stopFA2();
    if (cancelCurrentAnimation) cancelCurrentAnimation();

    //since we want to use animations we need to process positions before applying them through animateNodes
    const circularPositions = circular(graph, { scale: 100 });
    //In other context, it's possible to apply the position directly we : circular.assign(graph, {scale:100})
    cancelCurrentAnimation = animateNodes(graph, circularPositions, { duration: 2000, easing: "linear" });
  }

  // bind method to the random button
  circularButton.addEventListener("click", circularLayout);

  /** instantiate sigma into the container **/
  const renderer = new Sigma(graph, container);

  onStoryDown(() => {
    renderer.kill();
  });
};
`,ee={id:"layouts",title:"Examples"},te={name:"Layouts example",render:()=>Y,play:J,args:{},parameters:{storySource:{source:V}}};export{ee as default,te as story};
