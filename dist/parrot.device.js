/**
 * parrot-module-device - Automatically detect your device and provide some useful information: vendor, screen properties, browser vendor and version,...
 * @version v0.12.16
 * @link    https://github.com/parrotjs/parrot-module-device
 * @author  Kiko Beats (https://github.com/Kikobeats)
 * @license MIT
 */
require=function e(i,s,r){function o(t,a){if(!s[t]){if(!i[t]){var d="function"==typeof require&&require;if(!a&&d)return d(t,!0);if(n)return n(t,!0);var l=new Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}var c=s[t]={exports:{}};i[t][0].call(c.exports,function(e){var s=i[t][1][e];return o(s?s:e)},c,c.exports,e,i,s,r)}return s[t].exports}for(var n="function"==typeof require&&require,t=0;t<r.length;t++)o(r[t]);return o}({"aspect-ratio":[function(e,i){"use strict";i.exports=function(e,i,s){var r,o,n;return s=s||":",o=function(e,i){return 0===i?e:o(i,e%i)},e===i?"1"+s+"1":(i>e&&(n=e,e=i,i=n),r=o(e,i),"undefined"==typeof n?e/r+s+i/r:i/r+s+e/r)}},{}]},{},[]),function(e,i){"use strict";var s="0.7.3",r="",o="?",n="function",t="undefined",a="object",d="major",l="model",c="name",w="type",p="vendor",u="version",m="architecture",f="console",g="mobile",h="tablet",v="smarttv",b="wearable",x="embedded",y={extend:function(e,i){for(var s in i)-1!=="browser cpu device engine os".indexOf(s)&&i[s].length%2===0&&(e[s]=i[s].concat(e[s]));return e},has:function(e,i){return"string"==typeof e?-1!==i.toLowerCase().indexOf(e.toLowerCase()):void 0},lowerize:function(e){return e.toLowerCase()}},k={rgx:function(){for(var e,s,r,o,d,l,c,w=0,p=arguments;w<p.length&&!l;){var u=p[w],m=p[w+1];if(typeof e===t){e={};for(o in m)d=m[o],typeof d===a?e[d[0]]=i:e[d]=i}for(s=r=0;s<u.length&&!l;)if(l=u[s++].exec(this.getUA()))for(o=0;o<m.length;o++)c=l[++r],d=m[o],typeof d===a&&d.length>0?2==d.length?e[d[0]]=typeof d[1]==n?d[1].call(this,c):d[1]:3==d.length?e[d[0]]=typeof d[1]!==n||d[1].exec&&d[1].test?c?c.replace(d[1],d[2]):i:c?d[1].call(this,c,d[2]):i:4==d.length&&(e[d[0]]=c?d[3].call(this,c.replace(d[1],d[2])):i):e[d]=c?c:i;w+=2}return e},str:function(e,s){for(var r in s)if(typeof s[r]===a&&s[r].length>0){for(var n=0;n<s[r].length;n++)if(y.has(s[r][n],e))return r===o?i:r}else if(y.has(s[r],e))return r===o?i:r;return e}},A={browser:{oldsafari:{major:{1:["/8","/1","/3"],2:"/4","?":"/"},version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:"NT 6.4",RT:"ARM"}}}},E={browser:[[/(opera\smini)\/((\d+)?[\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i,/(opera).+version\/((\d+)?[\w\.]+)/i,/(opera)[\/\s]+((\d+)?[\w\.]+)/i],[c,u,d],[/\s(opr)\/((\d+)?[\w\.]+)/i],[[c,"Opera"],u,d],[/(kindle)\/((\d+)?[\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i,/(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i,/(rekonq)((?:\/)[\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i],[c,u,d],[/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i],[[c,"IE"],u,d],[/(yabrowser)\/((\d+)?[\w\.]+)/i],[[c,"Yandex"],u,d],[/(comodo_dragon)\/((\d+)?[\w\.]+)/i],[[c,/_/g," "],u,d],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i,/(uc\s?browser|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i],[c,u,d],[/(dolfin)\/((\d+)?[\w\.]+)/i],[[c,"Dolphin"],u,d],[/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i],[[c,"Chrome"],u,d],[/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i],[u,d,[c,"Mobile Safari"]],[/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i],[u,d,c],[/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i],[c,[d,k.str,A.browser.oldsafari.major],[u,k.str,A.browser.oldsafari.version]],[/(konqueror)\/((\d+)?[\w\.]+)/i,/(webkit|khtml)\/((\d+)?[\w\.]+)/i],[c,u,d],[/(navigator|netscape)\/((\d+)?[\w\.-]+)/i],[[c,"Netscape"],u,d],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i,/(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i,/(links)\s\(((\d+)?[\w\.]+)/i,/(gobrowser)\/?((\d+)?[\w\.]+)*/i,/(ice\s?browser)\/v?((\d+)?[\w\._]+)/i,/(mosaic)[\/\s]((\d+)?[\w\.]+)/i],[c,u,d]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[m,"amd64"]],[/(ia32(?=;))/i],[[m,y.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[m,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[m,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[m,/ower/,"",y.lowerize]],[/(sun4\w)[;\)]/i],[[m,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[m,y.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[l,p,[w,h]],[/applecoremedia\/[\w\.]+ \((ipad)/],[l,[p,"Apple"],[w,h]],[/(apple\s{0,1}tv)/i],[[l,"Apple TV"],[p,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[p,l,[w,h]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[l,[p,"Amazon"],[w,h]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[l,k.str,A.device.amazon.model],[p,"Amazon"],[w,g]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[l,p,[w,g]],[/\((ip[honed|\s\w*]+);/i],[l,[p,"Apple"],[w,g]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[p,l,[w,g]],[/\(bb10;\s(\w+)/i],[l,[p,"BlackBerry"],[w,g]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],[l,[p,"Asus"],[w,h]],[/(sony)\s(tablet\s[ps])/i],[p,l,[w,h]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[p,l,[w,f]],[/android.+;\s(shield)\sbuild/i],[l,[p,"Nvidia"],[w,f]],[/(playstation\s[3portablevi]+)/i],[l,[p,"Sony"],[w,f]],[/(sprint\s(\w+))/i],[[p,k.str,A.device.sprint.vendor],[l,k.str,A.device.sprint.model],[w,g]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[p,l,[w,h]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[p,[l,/_/g," "],[w,g]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[l,[p,"Microsoft"],[w,f]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[p,"Microsoft"],[w,g]],[/\s((milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?))[\w\s]+build\//i,/(mot)[\s-]?(\w+)*/i],[[p,"Motorola"],l,[w,g]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[l,[p,"Motorola"],[w,h]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[p,"Samsung"],l,[w,h]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[p,"Samsung"],l,[w,g]],[/(samsung);smarttv/i],[p,l,[w,v]],[/\(dtv[\);].+(aquos)/i],[l,[p,"Sharp"],[w,v]],[/sie-(\w+)*/i],[l,[p,"Siemens"],[w,g]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[p,"Nokia"],l,[w,g]],[/android\s3\.[\s\w-;]{10}(a\d{3})/i],[l,[p,"Acer"],[w,h]],[/android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i],[[p,"LG"],l,[w,h]],[/(lg) netcast\.tv/i],[p,l,[w,v]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[l,[p,"LG"],[w,g]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[l,[p,"Lenovo"],[w,h]],[/linux;.+((jolla));/i],[p,l,[w,g]],[/((pebble))app\/[\d\.]+\s/i],[p,l,[w,b]],[/android.+;\s(glass)\s\d/i],[l,[p,"Google"],[w,b]],[/(mobile|tablet);.+rv\:.+gecko\//i],[[w,y.lowerize],p,l]],engine:[[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[c,u],[/rv\:([\w\.]+).*(gecko)/i],[u,c]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[c,u],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[c,[u,k.str,A.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[c,"Windows"],[u,k.str,A.os.windows.version]],[/\((bb)(10);/i],[[c,"BlackBerry"],u],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[c,u],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[c,"Symbian"],u],[/\((series40);/i],[c],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[c,"Firefox OS"],u],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[c,u],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[c,"Chromium OS"],u],[/(sunos)\s?([\w\.]+\d)*/i],[[c,"Solaris"],u],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[c,u],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[c,"iOS"],[u,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[c,"Mac OS"],[u,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[c,u]]},N=function(i,s){if(!(this instanceof N))return new N(i,s).getResult();var o=i||(e&&e.navigator&&e.navigator.userAgent?e.navigator.userAgent:r),n=s?y.extend(E,s):E;this.getBrowser=function(){return k.rgx.apply(this,n.browser)},this.getCPU=function(){return k.rgx.apply(this,n.cpu)},this.getDevice=function(){return k.rgx.apply(this,n.device)},this.getEngine=function(){return k.rgx.apply(this,n.engine)},this.getOS=function(){return k.rgx.apply(this,n.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(e){return o=e,this},this.setUA(o)};if(N.VERSION=s,N.BROWSER={NAME:c,MAJOR:d,VERSION:u},N.CPU={ARCHITECTURE:m},N.DEVICE={MODEL:l,VENDOR:p,TYPE:w,CONSOLE:f,MOBILE:g,SMARTTV:v,TABLET:h,WEARABLE:b,EMBEDDED:x},N.ENGINE={NAME:c,VERSION:u},N.OS={NAME:c,VERSION:u},typeof exports!==t)typeof module!==t&&module.exports&&(exports=module.exports=N),exports.UAParser=N;else{e.UAParser=N,typeof define===n&&define.amd&&define(function(){return N});var S=e.jQuery||e.Zepto;if(typeof S!==t){var R=new N;S.ua=R.getResult(),S.ua.get=function(){return R.getUA()},S.ua.set=function(e){R.setUA(e);var i=R.getResult();for(var s in i)S.ua[s]=i[s]}}}}(this),function(){parrot.$(function(){var e;return e=function(){var e,i,s,r,o,n,t,a;s=(new UAParser).getResult(),delete s.ua,null!=s.cpu.architecture&&(s.cpu=s.cpu.architecture),delete s.cpu,a=s.device,delete s.device;for(r in a)n=a[r],null!=n&&(s[r]=n);return parrot.device=s,t=screen.width,e=screen.height,o=e>t&&480>t||t>e&&480>e?"small":"normal",i=1>e/t?"landscape":"portrait",null==parrot.device.type&&"normal"===o&&(parrot.device.type="desktop"),parrot.device.screen={width:t,height:e,size:o,orientation:i,aspectRatio:require("aspect-ratio")(t,e)},"undefined"!=typeof devicePixelRatio&&null!==devicePixelRatio&&(parrot.device.screen.pixelRatio=devicePixelRatio),parrot.device.detection=function(){var e,i;return i=document.body,e=parrot.device,i.dataset.lang=parrot.language,i.dataset.os=e.os.name.toLowerCase(),i.dataset.device=e.type,i.dataset.orientation=e.screen.orientation,i.dataset.screen=e.screen.size,i.dataset.retina=1===e.screen.pixelRatio?!1:!0}(),parrot.device.noDetection=function(){var e,i,s,o,n;for(e=document.body,o=["lang","os","device","orientation","screen","retina"],n=[],i=0,s=o.length;s>i;i++)r=o[i],n.push(delete e.dataset[r]);return n}},e(),parrot.$(window).on("resize",e),parrot.$(window).on("orientationchange",e)})}.call(this);