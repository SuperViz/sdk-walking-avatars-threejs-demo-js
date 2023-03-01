var o,qu=Object.defineProperty,Xu=Object.defineProperties,Yu=Object.getOwnPropertyDescriptors,pl=Object.getOwnPropertySymbols,Zu=Object.prototype.hasOwnProperty,Ju=Object.prototype.propertyIsEnumerable,gl=Math.pow,ml=(e,t,i)=>t in e?qu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,sr=(e,t)=>{for(var i in t||(t={}))Zu.call(t,i)&&ml(e,i,t[i]);if(pl)for(var i of pl(t))Ju.call(t,i)&&ml(e,i,t[i]);return e},xl=(e,t)=>Xu(e,Yu(t)),Xe=(e,t,i)=>new Promise((r,n)=>{var s=e=>{try{l(i.next(e))}catch(t){n(t)}},a=e=>{try{l(i.throw(e))}catch(t){n(t)}},l=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,a);l((i=i.apply(e,t)).next())}),dc="147",ju=0,_l=1,Ku=2,Yh=1,$u=2,Es=3,Qt=0,Tt=1,St=2,Fn=0,Hi=1,Or=2,yl=3,vl=4,Qu=5,Bi=100,ed=101,td=102,bl=103,Ml=104,nd=200,id=201,sd=202,rd=203,Zh=204,Jh=205,od=206,ad=207,cd=208,ld=209,hd=210,ud=0,dd=1,fd=2,wa=3,pd=4,md=5,gd=6,xd=7,jh=0,_d=1,yd=2,vn=0,vd=1,bd=2,Md=3,wd=4,Sd=5,Kh=300,qi=301,Xi=302,Sa=303,Ta=304,uo=306,li=1e3,zt=1001,Ns=1002,ct=1003,zr=1004,Br=1005,ut=1006,fc=1007,gi=1008,hi=1009,Td=1010,Ad=1011,$h=1012,Ed=1013,oi=1014,Nn=1015,Fs=1016,Cd=1017,Pd=1018,Gi=1020,Rd=1021,Ld=1022,Ht=1023,Id=1024,Dd=1025,ai=1026,Yi=1027,Nd=1028,Fd=1029,Od=1030,zd=1031,Bd=1033,Uo=33776,ko=33777,Vo=33778,Ho=33779,wl=35840,Sl=35841,Tl=35842,Al=35843,Ud=36196,El=37492,Cl=37496,Pl=37808,Rl=37809,Ll=37810,Il=37811,Dl=37812,Nl=37813,Fl=37814,Ol=37815,zl=37816,Bl=37817,Ul=37818,kl=37819,Vl=37820,Hl=37821,Gl=36492,kd=2200,Vd=2201,Hd=2202,Zi=2300,ui=2301,Go=2302,Ui=2400,ki=2401,Ur=2402,pc=2500,Gd=2501,Qh=1,mc=2,di=3e3,Be=3001,Wd=3200,qd=3201,eu=0,Xd=1,nn="srgb",Os="srgb-linear",Wo=7680,Yd=519,Aa=35044,Wl="300 es",Ea=1035,bn=class{addEventListener(e,t){void 0===this._listeners&&(this._listeners={});let i=this._listeners;void 0===i[e]&&(i[e]=[]),-1===i[e].indexOf(t)&&i[e].push(t)}hasEventListener(e,t){if(void 0===this._listeners)return!1;let i=this._listeners;return void 0!==i[e]&&-1!==i[e].indexOf(t)}removeEventListener(e,t){if(void 0===this._listeners)return;let i=this._listeners[e];if(void 0!==i){let r=i.indexOf(t);-1!==r&&i.splice(r,1)}}dispatchEvent(e){if(void 0===this._listeners)return;let t=this._listeners[e.type];if(void 0!==t){e.target=this;let i=t.slice(0);for(let r=0,n=i.length;r<n;r++)i[r].call(this,e);e.target=null}}},mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ql=1234567,Ps=Math.PI/180,zs=180/Math.PI;function $t(){let e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0,r=4294967295*Math.random()|0;return(mt[255&e]+mt[e>>8&255]+mt[e>>16&255]+mt[e>>24&255]+"-"+mt[255&t]+mt[t>>8&255]+"-"+mt[t>>16&15|64]+mt[t>>24&255]+"-"+mt[63&i|128]+mt[i>>8&255]+"-"+mt[i>>16&255]+mt[i>>24&255]+mt[255&r]+mt[r>>8&255]+mt[r>>16&255]+mt[r>>24&255]).toLowerCase()}function lt(e,t,i){return Math.max(t,Math.min(i,e))}function gc(e,t){return(e%t+t)%t}function Zd(e,t,i,r,n){return r+(e-t)*(n-r)/(i-t)}function Jd(e,t,i){return e!==t?(i-e)/(t-e):0}function Rs(e,t,i){return(1-i)*e+i*t}function jd(e,t,i,r){return Rs(e,t,1-Math.exp(-i*r))}function Kd(e,t=1){return t-Math.abs(gc(e,2*t)-t)}function $d(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t))*e*(3-2*e)}function Qd(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t))*e*e*(e*(6*e-15)+10)}function ef(e,t){return e+Math.floor(Math.random()*(t-e+1))}function tf(e,t){return e+Math.random()*(t-e)}function nf(e){return e*(.5-Math.random())}function sf(e){void 0!==e&&(ql=e);let t=ql+=1831565813;return t=Math.imul(t^t>>>15,1|t),(((t^=t+Math.imul(t^t>>>7,61|t))^t>>>14)>>>0)/4294967296}function rf(e){return e*Ps}function of(e){return e*zs}function Ca(e){return(e&e-1)==0&&0!==e}function tu(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function kr(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function af(e,t,i,r,n){let s=Math.cos,a=Math.sin,l=s(i/2),h=a(i/2),u=s((t+r)/2),c=a((t+r)/2),d=s((t-r)/2),p=a((t-r)/2),f=s((r-t)/2),m=a((r-t)/2);switch(n){case"XYX":e.set(l*c,h*d,h*p,l*u);break;case"YZY":e.set(h*p,l*c,h*d,l*u);break;case"ZXZ":e.set(h*d,h*p,l*c,l*u);break;case"XZX":e.set(l*c,h*m,h*f,l*u);break;case"YXY":e.set(h*f,l*c,h*m,l*u);break;case"ZYZ":e.set(h*m,h*f,l*c,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function yn(e,t){switch(t.constructor){case Float32Array:return e;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("Invalid component type.")}}function He(e,t){switch(t.constructor){case Float32Array:return e;case Uint16Array:return Math.round(65535*e);case Uint8Array:return Math.round(255*e);case Int16Array:return Math.round(32767*e);case Int8Array:return Math.round(127*e);default:throw Error("Invalid component type.")}}var nu=Object.freeze({__proto__:null,DEG2RAD:Ps,RAD2DEG:zs,generateUUID:$t,clamp:lt,euclideanModulo:gc,mapLinear:Zd,inverseLerp:Jd,lerp:Rs,damp:jd,pingpong:Kd,smoothstep:$d,smootherstep:Qd,randInt:ef,randFloat:tf,randFloatSpread:nf,seededRandom:sf,degToRad:rf,radToDeg:of,isPowerOfTwo:Ca,ceilPowerOfTwo:tu,floorPowerOfTwo:kr,setQuaternionFromProperEuler:af,normalize:He,denormalize:yn}),se=class{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*i-s*r+e.x,this.y=n*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},wt=class{constructor(){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,n,s,a,l,h){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=n,u[5]=l,u[6]=i,u[7]=s,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,n=this.elements,s=i[0],a=i[3],l=i[6],h=i[1],u=i[4],c=i[7],d=i[2],p=i[5],f=i[8],m=r[0],g=r[3],$=r[6],v=r[1],x=r[4],y=r[7],b=r[2],_=r[5],S=r[8];return n[0]=s*m+a*v+l*b,n[3]=s*g+a*x+l*_,n[6]=s*$+a*y+l*S,n[1]=h*m+u*v+c*b,n[4]=h*g+u*x+c*_,n[7]=h*$+u*y+c*S,n[2]=d*m+p*v+f*b,n[5]=d*g+p*x+f*_,n[8]=d*$+p*y+f*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],a=e[5],l=e[6],h=e[7],u=e[8];return t*s*u-t*a*h-i*n*u+i*a*l+r*n*h-r*s*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],a=e[5],l=e[6],h=e[7],u=e[8],c=u*s-a*h,d=a*l-u*n,p=h*n-s*l,f=t*c+i*d+r*p;if(0===f)return this.set(0,0,0,0,0,0,0,0,0);let m=1/f;return e[0]=c*m,e[1]=(r*h-u*i)*m,e[2]=(a*i-r*s)*m,e[3]=d*m,e[4]=(u*t-r*l)*m,e[5]=(r*n-a*t)*m,e[6]=p*m,e[7]=(i*l-h*t)*m,e[8]=(s*t-i*n)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,s,a){let l=Math.cos(n),h=Math.sin(n);return this.set(i*l,i*h,-i*(l*s+h*a)+s+e,-r*h,r*l,-r*(-h*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qo.makeScale(e,t)),this}rotate(e){return this.premultiply(qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(qo.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},qo=new wt;function iu(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Bs(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function ci(e){return e<.04045?.0773993808*e:Math.pow(.9478672986*e+.0521327014,2.4)}function Fr(e){return e<.0031308?12.92*e:1.055*Math.pow(e,.41666)-.055}var Xo={[nn]:{[Os]:ci},[Os]:{[nn]:Fr}},vt={legacyMode:!0,get workingColorSpace(){return Os},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(e,t,i){if(this.legacyMode||t===i||!t||!i)return e;if(Xo[t]&&void 0!==Xo[t][i]){let r=Xo[t][i];return e.r=r(e.r),e.g=r(e.g),e.b=r(e.b),e}throw Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)}},su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qe={r:0,g:0,b:0},Jt={h:0,s:0,l:0},rr={h:0,s:0,l:0};function Yo(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*6*(2/3-i):e}function or(e,t){return t.r=e.r,t.g=e.g,t.b=e.b,t}var ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,void 0===t&&void 0===i?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):"number"==typeof e?this.setHex(e):"string"==typeof e&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=vt.workingColorSpace){if(e=gc(e,1),t=lt(t,0,1),i=lt(i,0,1),0===t)this.r=this.g=this.b=i;else{let n=i<=.5?i*(1+t):i+t-i*t,s=2*i-n;this.r=Yo(s,n,e+1/3),this.g=Yo(s,n,e),this.b=Yo(s,n,e-1/3)}return vt.toWorkingColorSpace(this,r),this}setStyle(e,t=nn){function i(t){void 0!==t&&1>parseFloat(t)&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let n,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,vt.toWorkingColorSpace(this,t),i(n[4]),this;if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,vt.toWorkingColorSpace(this,t),i(n[4]),this;break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){let l=parseFloat(n[1])/360,h=parseFloat(n[2])/100,u=parseFloat(n[3])/100;return i(n[4]),this.setHSL(l,h,u,t)}}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let c=r[1],d=c.length;if(3===d)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,vt.toWorkingColorSpace(this,t),this;if(6===d)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,vt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=nn){let i=su[e.toLowerCase()];return void 0!==i?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return vt.fromWorkingColorSpace(or(this,Qe),e),lt(255*Qe.r,0,255)<<16^lt(255*Qe.g,0,255)<<8^lt(255*Qe.b,0,255)<<0}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(or(this,Qe),t);let i=Qe.r,r=Qe.g,n=Qe.b,s=Math.max(i,r,n),a=Math.min(i,r,n),l,h,u=(a+s)/2;if(a===s)l=0,h=0;else{let c=s-a;switch(h=u<=.5?c/(s+a):c/(2-s-a),s){case i:l=(r-n)/c+(r<n?6:0);break;case r:l=(n-i)/c+2;break;case n:l=(i-r)/c+4}l/=6}return e.h=l,e.s=h,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(or(this,Qe),t),e.r=Qe.r,e.g=Qe.g,e.b=Qe.b,e}getStyle(e=nn){return vt.fromWorkingColorSpace(or(this,Qe),e),e!==nn?`color(${e} ${Qe.r} ${Qe.g} ${Qe.b})`:`rgb(${255*Qe.r|0},${255*Qe.g|0},${255*Qe.b|0})`}offsetHSL(e,t,i){return this.getHSL(Jt),Jt.h+=e,Jt.s+=t,Jt.l+=i,this.setHSL(Jt.h,Jt.s,Jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jt),e.getHSL(rr);let i=Rs(Jt.h,rr.h,t),r=Rs(Jt.s,rr.s,t),n=Rs(Jt.l,rr.l,t);return this.setHSL(i,r,n),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};ye.NAMES=su;var vi,Vr=class{static getDataURL(e){if(/^data:/i.test(e.src)||"undefined"==typeof HTMLCanvasElement)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{void 0===vi&&(vi=Bs("canvas")),vi.width=e.width,vi.height=e.height;let i=vi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap){let t=Bs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let s=0;s<n.length;s++)n[s]=255*ci(n[s]/255);return i.putImageData(r,0,0),t}if(!e.data)return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e;{let a=e.data.slice(0);for(let l=0;l<a.length;l++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[l]=Math.floor(255*ci(a[l]/255)):a[l]=ci(a[l]);return{data:a,width:e.width,height:e.height}}}},Hr=class{constructor(e=null){this.isSource=!0,this.uuid=$t(),this.data=e,this.version=0}set needsUpdate(e){!0===e&&this.version++}toJSON(e){let t=void 0===e||"string"==typeof e;if(!t&&void 0!==e.images[this.uuid])return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(null!==r){let n;if(Array.isArray(r)){n=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?n.push(Zo(r[s].image)):n.push(Zo(r[s]))}else n=Zo(r);i.url=n}return t||(e.images[this.uuid]=i),i}};function Zo(e){return"undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap?Vr.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cf=0,qe=class extends bn{constructor(e=qe.DEFAULT_IMAGE,t=qe.DEFAULT_MAPPING,i=zt,r=zt,n=ut,s=gi,a=Ht,l=hi,h=qe.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=$t(),this.name="",this.source=new Hr(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=void 0===e||"string"==typeof e;if(!t&&void 0!==e.textures[this.uuid])return e.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return"{}"!==JSON.stringify(this.userData)&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case li:e.x=e.x-Math.floor(e.x);break;case zt:e.x=e.x<0?0:1;break;case Ns:1===Math.abs(Math.floor(e.x)%2)?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case li:e.y=e.y-Math.floor(e.y);break;case zt:e.y=e.y<0?0:1;break;case Ns:1===Math.abs(Math.floor(e.y)%2)?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){!0===e&&(this.version++,this.source.needsUpdate=!0)}};qe.DEFAULT_IMAGE=null,qe.DEFAULT_MAPPING=Kh,qe.DEFAULT_ANISOTROPY=1;var Ue=class{constructor(e=0,t=0,i=0,r=1){Ue.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=void 0!==e.w?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*n,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*n,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*n,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,n,s=e.elements,a=s[0],l=s[4],h=s[8],u=s[1],c=s[5],d=s[9],p=s[2],f=s[6],m=s[10];if(.01>Math.abs(l-u)&&.01>Math.abs(h-p)&&.01>Math.abs(d-f)){if(.1>Math.abs(l+u)&&.1>Math.abs(h+p)&&.1>Math.abs(d+f)&&.1>Math.abs(a+c+m-3))return this.set(1,0,0,0),this;t=Math.PI;let g=(a+1)/2,$=(c+1)/2,v=(m+1)/2,x=(l+u)/4,y=(h+p)/4,b=(d+f)/4;return g>$&&g>v?g<.01?(i=0,r=.707106781,n=.707106781):(r=x/(i=Math.sqrt(g)),n=y/i):$>v?$<.01?(i=.707106781,r=0,n=.707106781):(i=x/(r=Math.sqrt($)),n=b/r):v<.01?(i=.707106781,r=.707106781,n=0):(i=y/(n=Math.sqrt(v)),r=b/n),this.set(i,r,n,t),this}let _=Math.sqrt((f-d)*(f-d)+(h-p)*(h-p)+(u-l)*(u-l));return .001>Math.abs(_)&&(_=1),this.x=(f-d)/_,this.y=(h-p)/_,this.z=(u-l)/_,this.w=Math.acos((a+c+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mn=class extends bn{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ue(0,0,e,t),this.scissorTest=!1,this.viewport=new Ue(0,0,e,t);let r={width:e,height:t,depth:1};this.texture=new qe(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=void 0!==i.generateMipmaps&&i.generateMipmaps,this.texture.internalFormat=void 0!==i.internalFormat?i.internalFormat:null,this.texture.minFilter=void 0!==i.minFilter?i.minFilter:ut,this.depthBuffer=void 0===i.depthBuffer||i.depthBuffer,this.stencilBuffer=void 0!==i.stencilBuffer&&i.stencilBuffer,this.depthTexture=void 0!==i.depthTexture?i.depthTexture:null,this.samples=void 0!==i.samples?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Hr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,null!==e.depthTexture&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gr=class extends qe{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ct,this.minFilter=ct,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pa=class extends qe{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ct,this.minFilter=ct,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},et=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,s,a){let l=i[r+0],h=i[r+1],u=i[r+2],c=i[r+3],d=n[s+0],p=n[s+1],f=n[s+2],m=n[s+3];if(0===a){e[t+0]=l,e[t+1]=h,e[t+2]=u,e[t+3]=c;return}if(1===a){e[t+0]=d,e[t+1]=p,e[t+2]=f,e[t+3]=m;return}if(c!==m||l!==d||h!==p||u!==f){let g=1-a,$=l*d+h*p+u*f+c*m,v=$>=0?1:-1,x=1-$*$;if(x>Number.EPSILON){let y=Math.sqrt(x),b=Math.atan2(y,$*v);g=Math.sin(g*b)/y,a=Math.sin(a*b)/y}let _=a*v;if(l=l*g+d*_,h=h*g+p*_,u=u*g+f*_,c=c*g+m*_,g===1-a){let S=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=S,h*=S,u*=S,c*=S}}e[t]=l,e[t+1]=h,e[t+2]=u,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,n,s){let a=i[r],l=i[r+1],h=i[r+2],u=i[r+3],c=n[s],d=n[s+1],p=n[s+2],f=n[s+3];return e[t]=a*f+u*c+l*p-h*d,e[t+1]=l*f+u*d+h*c-a*p,e[t+2]=h*f+u*p+a*d-l*c,e[t+3]=u*f-a*c-l*d-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let i=e._x,r=e._y,n=e._z,s=e._order,a=Math.cos,l=Math.sin,h=a(i/2),u=a(r/2),c=a(n/2),d=l(i/2),p=l(r/2),f=l(n/2);switch(s){case"XYZ":this._x=d*u*c+h*p*f,this._y=h*p*c-d*u*f,this._z=h*u*f+d*p*c,this._w=h*u*c-d*p*f;break;case"YXZ":this._x=d*u*c+h*p*f,this._y=h*p*c-d*u*f,this._z=h*u*f-d*p*c,this._w=h*u*c+d*p*f;break;case"ZXY":this._x=d*u*c-h*p*f,this._y=h*p*c+d*u*f,this._z=h*u*f+d*p*c,this._w=h*u*c-d*p*f;break;case"ZYX":this._x=d*u*c-h*p*f,this._y=h*p*c+d*u*f,this._z=h*u*f-d*p*c,this._w=h*u*c+d*p*f;break;case"YZX":this._x=d*u*c+h*p*f,this._y=h*p*c+d*u*f,this._z=h*u*f-d*p*c,this._w=h*u*c-d*p*f;break;case"XZY":this._x=d*u*c-h*p*f,this._y=h*p*c-d*u*f,this._z=h*u*f+d*p*c,this._w=h*u*c+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return!1!==t&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],n=t[8],s=t[1],a=t[5],l=t[9],h=t[2],u=t[6],c=t[10],d=i+a+c;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(n-h)*p,this._z=(s-r)*p}else if(i>a&&i>c){let f=2*Math.sqrt(1+i-a-c);this._w=(u-l)/f,this._x=.25*f,this._y=(r+s)/f,this._z=(n+h)/f}else if(a>c){let m=2*Math.sqrt(1+a-i-c);this._w=(n-h)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+u)/m}else{let g=2*Math.sqrt(1+c-i-a);this._w=(s-r)/g,this._x=(n+h)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);return 0===i||this.slerp(e,Math.min(1,t/i)),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return 0===e?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,n=e._z,s=e._w,a=t._x,l=t._y,h=t._z,u=t._w;return this._x=i*u+s*a+r*h-n*l,this._y=r*u+s*l+n*a-i*h,this._z=n*u+s*h+i*l-r*a,this._w=s*u-i*a-r*l-n*h,this._onChangeCallback(),this}slerp(e,t){if(0===t)return this;if(1===t)return this.copy(e);let i=this._x,r=this._y,n=this._z,s=this._w,a=s*e._w+i*e._x+r*e._y+n*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=n,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-t;return this._w=h*s+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*n+t*this._z,this.normalize(),this._onChangeCallback(),this}let u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,p=Math.sin(t*c)/u;return this._w=s*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=n*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(n),i*Math.cos(n),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class{constructor(e=0,t=0,i=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return void 0===i&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,n=e.elements,s=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*s,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*s,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,n=e.x,s=e.y,a=e.z,l=e.w,h=l*t+s*r-a*i,u=l*i+a*t-n*r,c=l*r+n*i-s*t,d=-n*t-s*i-a*r;return this.x=h*l+-(d*n)+-(u*a)- -(c*s),this.y=u*l+-(d*s)+-(c*n)- -(h*a),this.z=c*l+-(d*a)+-(h*s)- -(u*n),this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,n=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-n*a,this.y=n*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(0===t)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jo.copy(this).projectOnVector(e),this.sub(Jo)}reflect(e){return this.sub(Jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());return 0===t?Math.PI/2:Math.acos(lt(this.dot(e)/t,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-gl(e,2));return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jo=new T,Xl=new et,tt=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,n=-1/0,s=-1/0,a=-1/0;for(let l=0,h=e.length;l<h;l+=3){let u=e[l],c=e[l+1],d=e[l+2];u<t&&(t=u),c<i&&(i=c),d<r&&(r=d),u>n&&(n=u),c>s&&(s=c),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(n,s,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,n=-1/0,s=-1/0,a=-1/0;for(let l=0,h=e.count;l<h;l++){let u=e.getX(l),c=e.getY(l),d=e.getZ(l);u<t&&(t=u),c<i&&(i=c),d<r&&(r=d),u>n&&(n=u),c>s&&(s=c),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(n,s,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(void 0!==i){if(t&&null!=i.attributes&&void 0!==i.attributes.position){let r=i.attributes.position;for(let n=0,s=r.count;n<s;n++)ti.fromBufferAttribute(r,n).applyMatrix4(e.matrixWorld),this.expandByPoint(ti)}else null===i.boundingBox&&i.computeBoundingBox(),jo.copy(i.boundingBox),jo.applyMatrix4(e.matrixWorld),this.union(jo)}let a=e.children;for(let l=0,h=a.length;l<h;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),ar.subVectors(this.max,_s),bi.subVectors(e.a,_s),Mi.subVectors(e.b,_s),wi.subVectors(e.c,_s),An.subVectors(Mi,bi),En.subVectors(wi,Mi),ni.subVectors(bi,wi);let t=[0,-An.z,An.y,0,-En.z,En.y,0,-ni.z,ni.y,An.z,0,-An.x,En.z,0,-En.x,ni.z,0,-ni.x,-An.y,An.x,0,-En.y,En.x,0,-ni.y,ni.x,0];return!!(Ko(t,bi,Mi,wi,ar)&&Ko(t=[1,0,0,0,1,0,0,0,1],bi,Mi,wi,ar))&&(cr.crossVectors(An,En),Ko(t=[cr.x,cr.y,cr.z],bi,Mi,wi,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ti.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=.5*this.getSize(ti).length(),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},fn=[new T,new T,new T,new T,new T,new T,new T,new T],ti=new T,jo=new tt,bi=new T,Mi=new T,wi=new T,An=new T,En=new T,ni=new T,_s=new T,ar=new T,cr=new T,ii=new T;function Ko(e,t,i,r,n){for(let s=0,a=e.length-3;s<=a;s+=3){ii.fromArray(e,s);let l=n.x*Math.abs(ii.x)+n.y*Math.abs(ii.y)+n.z*Math.abs(ii.z),h=t.dot(ii),u=i.dot(ii),c=r.dot(ii);if(Math.max(-Math.max(h,u,c),Math.min(h,u,c))>l)return!1}return!0}var lf=new tt,ys=new T,$o=new T,en=class{constructor(e=new T,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;void 0!==t?i.copy(t):lf.setFromPoints(e).getCenter(i);let r=0;for(let n=0,s=e.length;n<s;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);let t=ys.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(!0===this.center.equals(e.center)?this.radius=Math.max(this.radius,e.radius):($o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add($o)),this.expandByPoint(ys.copy(e.center).sub($o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},pn=new T,Qo=new T,lr=new T,Cn=new T,ea=new T,hr=new T,ta=new T,On=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.direction).multiplyScalar(t).add(this.origin),pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Qo.copy(e).add(t).multiplyScalar(.5),lr.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(Qo);let n=.5*e.distanceTo(t),s=-this.direction.dot(lr),a=Cn.dot(this.direction),l=-Cn.dot(lr),h=Cn.lengthSq(),u=Math.abs(1-s*s),c,d,p,f;if(u>0){if(c=s*l-a,d=s*a-l,f=n*u,c>=0){if(d>=-f){if(d<=f){let m=1/u;c*=m,d*=m,p=c*(c+s*d+2*a)+d*(s*c+d+2*l)+h}else p=-(c=Math.max(0,-(s*(d=n)+a)))*c+d*(d+2*l)+h}else p=-(c=Math.max(0,-(s*(d=-n)+a)))*c+d*(d+2*l)+h}else d<=-f?(d=(c=Math.max(0,-(-s*n+a)))>0?-n:Math.min(Math.max(-n,-l),n),p=-c*c+d*(d+2*l)+h):d<=f?(c=0,p=(d=Math.min(Math.max(-n,-l),n))*(d+2*l)+h):(d=(c=Math.max(0,-(s*n+a)))>0?n:Math.min(Math.max(-n,-l),n),p=-c*c+d*(d+2*l)+h)}else d=s>0?-n:n,p=-(c=Math.max(0,-(s*d+a)))*c+d*(d+2*l)+h;return i&&i.copy(this.direction).multiplyScalar(c).add(this.origin),r&&r.copy(lr).multiplyScalar(d).add(Qo),p}intersectSphere(e,t){pn.subVectors(e.center,this.origin);let i=pn.dot(this.direction),r=pn.dot(pn)-i*i,n=e.radius*e.radius;if(r>n)return null;let s=Math.sqrt(n-r),a=i-s,l=i+s;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(0===t)return 0===e.distanceToPoint(this.origin)?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return null===i?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return 0===t||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,s,a,l,h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(i=(e.min.x-d.x)*h,r=(e.max.x-d.x)*h):(i=(e.max.x-d.x)*h,r=(e.min.x-d.x)*h),u>=0?(n=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(n=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||n>r||((n>i||isNaN(i))&&(i=n),(s<r||isNaN(r))&&(r=s),c>=0?(a=(e.min.z-d.z)*c,l=(e.max.z-d.z)*c):(a=(e.max.z-d.z)*c,l=(e.min.z-d.z)*c),i>l||a>r)||((a>i||i!=i)&&(i=a),(l<r||r!=r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return null!==this.intersectBox(e,pn)}intersectTriangle(e,t,i,r,n){ea.subVectors(t,e),hr.subVectors(i,e),ta.crossVectors(ea,hr);let s=this.direction.dot(ta),a;if(s>0){if(r)return null;a=1}else{if(!(s<0))return null;a=-1,s=-s}Cn.subVectors(this.origin,e);let l=a*this.direction.dot(hr.crossVectors(Cn,hr));if(l<0)return null;let h=a*this.direction.dot(ea.cross(Cn));if(h<0||l+h>s)return null;let u=-a*Cn.dot(ta);return u<0?null:this.at(u/s,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class{constructor(){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,n,s,a,l,h,u,c,d,p,f,m,g){let $=this.elements;return $[0]=e,$[4]=t,$[8]=i,$[12]=r,$[1]=n,$[5]=s,$[9]=a,$[13]=l,$[2]=h,$[6]=u,$[10]=c,$[14]=d,$[3]=p,$[7]=f,$[11]=m,$[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Si.setFromMatrixColumn(e,0).length(),n=1/Si.setFromMatrixColumn(e,1).length(),s=1/Si.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,n=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),h=Math.sin(r),u=Math.cos(n),c=Math.sin(n);if("XYZ"===e.order){let d=s*u,p=s*c,f=a*u,m=a*c;t[0]=l*u,t[4]=-l*c,t[8]=h,t[1]=p+f*h,t[5]=d-m*h,t[9]=-a*l,t[2]=m-d*h,t[6]=f+p*h,t[10]=s*l}else if("YXZ"===e.order){let g=l*u,$=l*c,v=h*u,x=h*c;t[0]=g+x*a,t[4]=v*a-$,t[8]=s*h,t[1]=s*c,t[5]=s*u,t[9]=-a,t[2]=$*a-v,t[6]=x+g*a,t[10]=s*l}else if("ZXY"===e.order){let y=l*u,b=l*c,_=h*u,S=h*c;t[0]=y-S*a,t[4]=-s*c,t[8]=_+b*a,t[1]=b+_*a,t[5]=s*u,t[9]=S-y*a,t[2]=-s*h,t[6]=a,t[10]=s*l}else if("ZYX"===e.order){let w=s*u,M=s*c,E=a*u,A=a*c;t[0]=l*u,t[4]=E*h-M,t[8]=w*h+A,t[1]=l*c,t[5]=A*h+w,t[9]=M*h-E,t[2]=-h,t[6]=a*l,t[10]=s*l}else if("YZX"===e.order){let C=s*l,L=s*h,R=a*l,P=a*h;t[0]=l*u,t[4]=P-C*c,t[8]=R*c+L,t[1]=c,t[5]=s*u,t[9]=-a*u,t[2]=-h*u,t[6]=L*c+R,t[10]=C-P*c}else if("XZY"===e.order){let I=s*l,D=s*h,N=a*l,O=a*h;t[0]=l*u,t[4]=-c,t[8]=h*u,t[1]=I*c+O,t[5]=s*u,t[9]=D*c-N,t[2]=N*c-D,t[6]=a*u,t[10]=O*c+I}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hf,e,uf)}lookAt(e,t,i){let r=this.elements;return Nt.subVectors(e,t),0===Nt.lengthSq()&&(Nt.z=1),Nt.normalize(),Pn.crossVectors(i,Nt),0===Pn.lengthSq()&&(1===Math.abs(i.z)?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Pn.crossVectors(i,Nt)),Pn.normalize(),ur.crossVectors(Nt,Pn),r[0]=Pn.x,r[4]=ur.x,r[8]=Nt.x,r[1]=Pn.y,r[5]=ur.y,r[9]=Nt.y,r[2]=Pn.z,r[6]=ur.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,n=this.elements,s=i[0],a=i[4],l=i[8],h=i[12],u=i[1],c=i[5],d=i[9],p=i[13],f=i[2],m=i[6],g=i[10],$=i[14],v=i[3],x=i[7],y=i[11],b=i[15],_=r[0],S=r[4],w=r[8],M=r[12],E=r[1],A=r[5],C=r[9],L=r[13],R=r[2],P=r[6],I=r[10],D=r[14],N=r[3],O=r[7],z=r[11],U=r[15];return n[0]=s*_+a*E+l*R+h*N,n[4]=s*S+a*A+l*P+h*O,n[8]=s*w+a*C+l*I+h*z,n[12]=s*M+a*L+l*D+h*U,n[1]=u*_+c*E+d*R+p*N,n[5]=u*S+c*A+d*P+p*O,n[9]=u*w+c*C+d*I+p*z,n[13]=u*M+c*L+d*D+p*U,n[2]=f*_+m*E+g*R+$*N,n[6]=f*S+m*A+g*P+$*O,n[10]=f*w+m*C+g*I+$*z,n[14]=f*M+m*L+g*D+$*U,n[3]=v*_+x*E+y*R+b*N,n[7]=v*S+x*A+y*P+b*O,n[11]=v*w+x*C+y*I+b*z,n[15]=v*M+x*L+y*D+b*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],s=e[1],a=e[5],l=e[9],h=e[13],u=e[2],c=e[6],d=e[10],p=e[14],f=e[3],m=e[7],g;return f*(+n*l*c-r*h*c-n*a*d+i*h*d+r*a*p-i*l*p)+m*(+t*l*p-t*h*d+n*s*d-r*s*p+r*h*u-n*l*u)+e[11]*(+t*h*c-t*a*p-n*s*c+i*s*p+n*a*u-i*h*u)+e[15]*(-r*a*u-t*l*c+t*a*d+r*s*c-i*s*d+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],a=e[5],l=e[6],h=e[7],u=e[8],c=e[9],d=e[10],p=e[11],f=e[12],m=e[13],g=e[14],$=e[15],v=c*g*h-m*d*h+m*l*p-a*g*p-c*l*$+a*d*$,x=f*d*h-u*g*h-f*l*p+s*g*p+u*l*$-s*d*$,y=u*m*h-f*c*h+f*a*p-s*m*p-u*a*$+s*c*$,b=f*c*l-u*m*l-f*a*d+s*m*d+u*a*g-s*c*g,_=t*v+i*x+r*y+n*b;if(0===_)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/_;return e[0]=v*S,e[1]=(m*d*n-c*g*n-m*r*p+i*g*p+c*r*$-i*d*$)*S,e[2]=(a*g*n-m*l*n+m*r*h-i*g*h-a*r*$+i*l*$)*S,e[3]=(c*l*n-a*d*n-c*r*h+i*d*h+a*r*p-i*l*p)*S,e[4]=x*S,e[5]=(u*g*n-f*d*n+f*r*p-t*g*p-u*r*$+t*d*$)*S,e[6]=(f*l*n-s*g*n-f*r*h+t*g*h+s*r*$-t*l*$)*S,e[7]=(s*d*n-u*l*n+u*r*h-t*d*h-s*r*p+t*l*p)*S,e[8]=y*S,e[9]=(f*c*n-u*m*n-f*i*p+t*m*p+u*i*$-t*c*$)*S,e[10]=(s*m*n-f*a*n+f*i*h-t*m*h-s*i*$+t*a*$)*S,e[11]=(u*a*n-s*c*n-u*i*h+t*c*h+s*i*p-t*a*p)*S,e[12]=b*S,e[13]=(u*m*r-f*c*r+f*i*d-t*m*d-u*i*g+t*c*g)*S,e[14]=(f*a*r-s*m*r-f*i*l+t*m*l+s*i*g-t*a*g)*S,e[15]=(s*c*r-u*a*r+u*i*l-t*c*l-s*i*d+t*a*d)*S,this}scale(e){let t=this.elements,i=e.x,r=e.y,n=e.z;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i;return Math.sqrt(Math.max(t,e[4]*e[4]+e[5]*e[5]+e[6]*e[6],e[8]*e[8]+e[9]*e[9]+e[10]*e[10]))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),n=1-i,s=e.x,a=e.y,l=e.z,h=n*s,u=n*a;return this.set(h*s+i,h*a-r*l,h*l+r*a,0,h*a+r*l,u*a+i,u*l-r*s,0,h*l-r*a,u*l+r*s,n*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,s){return this.set(1,i,n,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,n=t._x,s=t._y,a=t._z,l=t._w,h=n+n,u=s+s,c=a+a,d=n*h,p=n*u,f=n*c,m=s*u,g=s*c,$=a*c,v=l*h,x=l*u,y=l*c,b=i.x,_=i.y,S=i.z;return r[0]=(1-(m+$))*b,r[1]=(p+y)*b,r[2]=(f-x)*b,r[3]=0,r[4]=(p-y)*_,r[5]=(1-(d+$))*_,r[6]=(g+v)*_,r[7]=0,r[8]=(f+x)*S,r[9]=(g-v)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,n=Si.set(r[0],r[1],r[2]).length(),s=Si.set(r[4],r[5],r[6]).length(),a=Si.set(r[8],r[9],r[10]).length();0>this.determinant()&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],jt.copy(this);let l=1/n,h=1/s,u=1/a;return jt.elements[0]*=l,jt.elements[1]*=l,jt.elements[2]*=l,jt.elements[4]*=h,jt.elements[5]*=h,jt.elements[6]*=h,jt.elements[8]*=u,jt.elements[9]*=u,jt.elements[10]*=u,t.setFromRotationMatrix(jt),i.x=n,i.y=s,i.z=a,this}makePerspective(e,t,i,r,n,s){let a=this.elements;return a[0]=2*n/(t-e),a[4]=0,a[8]=(t+e)/(t-e),a[12]=0,a[1]=0,a[5]=2*n/(i-r),a[9]=(i+r)/(i-r),a[13]=0,a[2]=0,a[6]=0,a[10]=-(s+n)/(s-n),a[14]=-2*s*n/(s-n),a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,n,s){let a=this.elements,l=1/(t-e),h=1/(i-r),u=1/(s-n);return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-((t+e)*l),a[1]=0,a[5]=2*h,a[9]=0,a[13]=-((i+r)*h),a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-((s+n)*u),a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Si=new T,jt=new me,hf=new T(0,0,0),uf=new T(1,1,1),Pn=new T,ur=new T,Nt=new T,Yl=new me,Zl=new et,fi=class{constructor(e=0,t=0,i=0,r=fi.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,n=r[0],s=r[4],a=r[8],l=r[1],h=r[5],u=r[9],c=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(a,-1,1)),.9999999>Math.abs(a)?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),.9999999>Math.abs(u)?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,n),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),.9999999>Math.abs(d)?(this._y=Math.atan2(-c,p),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-lt(c,-1,1)),.9999999>Math.abs(c)?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),.9999999>Math.abs(l)?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,n)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-lt(s,-1,1)),.9999999>Math.abs(s)?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,n)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,!0===i&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],void 0!==e[3]&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}};fi.DefaultOrder="XYZ",fi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Us=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},df=0,Jl=new T,Ti=new et,mn=new me,dr=new T,vs=new T,ff=new T,pf=new et,jl=new T(1,0,0),Kl=new T(0,1,0),$l=new T(0,0,1),mf={type:"added"},Ql={type:"removed"},Oe=class extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=$t(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DefaultUp.clone();let e=new T,t=new fi,i=new et,r=new T(1,1,1);function n(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new me},normalMatrix:{value:new wt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Oe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Oe.DefaultMatrixWorldAutoUpdate,this.layers=new Us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(jl,e)}rotateY(e){return this.rotateOnAxis(Kl,e)}rotateZ(e){return this.rotateOnAxis($l,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jl,e)}translateY(e){return this.translateOnAxis(Kl,e)}translateZ(e){return this.translateOnAxis($l,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?dr.copy(e):dr.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(vs,dr,this.up):mn.lookAt(dr,vs,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(mn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(null!==e.parent&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}let i=this.children.indexOf(e);return -1!==i&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Ql)),this}removeFromParent(){let e=this.parent;return null!==e&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Ql)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),null!==e.parent&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let n=this.children[i].getObjectByProperty(e,t);if(void 0!==n)return n}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,pf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(!1===this.visible)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;null!==t&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++){let n=t[i];(!0===n.matrixWorldAutoUpdate||!0===e)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(!0===e&&null!==i&&!0===i.matrixWorldAutoUpdate&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===t){let r=this.children;for(let n=0,s=r.length;n<s;n++){let a=r[n];!0===a.matrixWorldAutoUpdate&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=void 0===e||"string"==typeof e,i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let r={};function n(t,i){return void 0===t[i.uuid]&&(t[i.uuid]=i.toJSON(e)),i.uuid}if(r.uuid=this.uuid,r.type=this.type,""!==this.name&&(r.name=this.name),!0===this.castShadow&&(r.castShadow=!0),!0===this.receiveShadow&&(r.receiveShadow=!0),!1===this.visible&&(r.visible=!1),!1===this.frustumCulled&&(r.frustumCulled=!1),0!==this.renderOrder&&(r.renderOrder=this.renderOrder),"{}"!==JSON.stringify(this.userData)&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),!1===this.matrixAutoUpdate&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),null!==this.instanceColor&&(r.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&!0!==this.environment.isRenderTargetTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);let s=this.geometry.parameters;if(void 0!==s&&void 0!==s.shapes){let a=s.shapes;if(Array.isArray(a))for(let l=0,h=a.length;l<h;l++){let u=a[l];n(e.shapes,u)}else n(e.shapes,a)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),void 0!==this.skeleton&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),void 0!==this.material){if(Array.isArray(this.material)){let c=[];for(let d=0,p=this.material.length;d<p;d++)c.push(n(e.materials,this.material[d]));r.material=c}else r.material=n(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let m=0;m<this.animations.length;m++){let g=this.animations[m];r.animations.push(n(e.animations,g))}}if(t){let $=M(e.geometries),v=M(e.materials),x=M(e.textures),y=M(e.images),b=M(e.shapes),_=M(e.skeletons),S=M(e.animations),w=M(e.nodes);$.length>0&&(i.geometries=$),v.length>0&&(i.materials=v),x.length>0&&(i.textures=x),y.length>0&&(i.images=y),b.length>0&&(i.shapes=b),_.length>0&&(i.skeletons=_),S.length>0&&(i.animations=S),w.length>0&&(i.nodes=w)}return i.object=r,i;function M(e){let t=[];for(let i in e){let r=e[i];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),!0===t)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Oe.DefaultUp=new T(0,1,0),Oe.DefaultMatrixAutoUpdate=!0,Oe.DefaultMatrixWorldAutoUpdate=!0;var Kt=new T,gn=new T,na=new T,xn=new T,Ai=new T,Ei=new T,eh=new T,ia=new T,sa=new T,ra=new T,ft=class{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Kt.subVectors(e,t),r.cross(Kt);let n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){Kt.subVectors(r,t),gn.subVectors(i,t),na.subVectors(e,t);let s=Kt.dot(Kt),a=Kt.dot(gn),l=Kt.dot(na),h=gn.dot(gn),u=gn.dot(na),c=s*h-a*a;if(0===c)return n.set(-2,-1,-1);let d=1/c,p=(h*l-a*u)*d,f=(s*u-a*l)*d;return n.set(1-p-f,f,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,xn),xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(e,t,i,r,n,s,a,l){return this.getBarycoord(e,t,i,r,xn),l.set(0,0),l.addScaledVector(n,xn.x),l.addScaledVector(s,xn.y),l.addScaledVector(a,xn.z),l}static isFrontFacing(e,t,i,r){return Kt.subVectors(i,t),gn.subVectors(e,t),0>Kt.cross(gn).dot(r)}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),.5*Kt.cross(gn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ft.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ft.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,n){return ft.getUV(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return ft.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ft.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,n=this.c,s,a;Ai.subVectors(r,i),Ei.subVectors(n,i),ia.subVectors(e,i);let l=Ai.dot(ia),h=Ei.dot(ia);if(l<=0&&h<=0)return t.copy(i);sa.subVectors(e,r);let u=Ai.dot(sa),c=Ei.dot(sa);if(u>=0&&c<=u)return t.copy(r);let d=l*c-u*h;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(i).addScaledVector(Ai,s);ra.subVectors(e,n);let p=Ai.dot(ra),f=Ei.dot(ra);if(f>=0&&p<=f)return t.copy(n);let m=p*h-l*f;if(m<=0&&h>=0&&f<=0)return a=h/(h-f),t.copy(i).addScaledVector(Ei,a);let g=u*f-p*c;if(g<=0&&c-u>=0&&p-f>=0)return eh.subVectors(n,r),a=(c-u)/(c-u+(p-f)),t.copy(r).addScaledVector(eh,a);let $=1/(g+m+d);return s=m*$,a=d*$,t.copy(i).addScaledVector(Ai,s).addScaledVector(Ei,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gf=0,Et=class extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=$t(),this.name="",this.type="Material",this.blending=Hi,this.side=Qt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Zh,this.blendDst=Jh,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(void 0!==e)for(let t in e){let i=e[t];if(void 0===i){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let r=this[t];if(void 0===r){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=void 0===e||"string"==typeof e;t&&(e={textures:{},images:{}});let i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function r(e){let t=[];for(let i in e){let r=e[i];delete r.metadata,t.push(r)}return t}if(i.uuid=this.uuid,i.type=this.type,""!==this.name&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),void 0!==this.roughness&&(i.roughness=this.roughness),void 0!==this.metalness&&(i.metalness=this.metalness),void 0!==this.sheen&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),void 0!==this.sheenRoughness&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),void 0!==this.specularIntensity&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),void 0!==this.shininess&&(i.shininess=this.shininess),void 0!==this.clearcoat&&(i.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),void 0!==this.iridescence&&(i.iridescence=this.iridescence),void 0!==this.iridescenceIOR&&(i.iridescenceIOR=this.iridescenceIOR),void 0!==this.iridescenceThicknessRange&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,void 0!==this.combine&&(i.combine=this.combine)),void 0!==this.envMapIntensity&&(i.envMapIntensity=this.envMapIntensity),void 0!==this.reflectivity&&(i.reflectivity=this.reflectivity),void 0!==this.refractionRatio&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),void 0!==this.transmission&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),void 0!==this.thickness&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),void 0!==this.attenuationDistance&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),void 0!==this.attenuationColor&&(i.attenuationColor=this.attenuationColor.getHex()),void 0!==this.size&&(i.size=this.size),null!==this.shadowSide&&(i.shadowSide=this.shadowSide),void 0!==this.sizeAttenuation&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(i.blending=this.blending),this.side!==Qt&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),!0===this.transparent&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,void 0!==this.rotation&&0!==this.rotation&&(i.rotation=this.rotation),!0===this.polygonOffset&&(i.polygonOffset=!0),0!==this.polygonOffsetFactor&&(i.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(i.polygonOffsetUnits=this.polygonOffsetUnits),void 0!==this.linewidth&&1!==this.linewidth&&(i.linewidth=this.linewidth),void 0!==this.dashSize&&(i.dashSize=this.dashSize),void 0!==this.gapSize&&(i.gapSize=this.gapSize),void 0!==this.scale&&(i.scale=this.scale),!0===this.dithering&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),!0===this.alphaToCoverage&&(i.alphaToCoverage=this.alphaToCoverage),!0===this.premultipliedAlpha&&(i.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(i.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(i.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(i.flatShading=this.flatShading),!1===this.visible&&(i.visible=!1),!1===this.toneMapped&&(i.toneMapped=!1),!1===this.fog&&(i.fog=!1),"{}"!==JSON.stringify(this.userData)&&(i.userData=this.userData),t){let n=r(e.textures),s=r(e.images);n.length>0&&(i.textures=n),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(null!==t){let r=t.length;i=Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){!0===e&&this.version++}},Gt=class extends Et{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ke=new T,fr=new se,Ye=class{constructor(e,t,i){if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=void 0!==e?e.length/t:0,this.normalized=!0===i,this.usage=Aa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(2===this.itemSize)for(let t=0,i=this.count;t<i;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(3===this.itemSize)for(let r=0,n=this.count;r<n;r++)Ke.fromBufferAttribute(this,r),Ke.applyMatrix3(e),this.setXYZ(r,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ke.fromBufferAttribute(this,t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ke.fromBufferAttribute(this,t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=He(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=He(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=He(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=He(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=He(t,this.array),i=He(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=He(t,this.array),i=He(i,this.array),r=He(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.normalized&&(t=He(t,this.array),i=He(i,this.array),r=He(r,this.array),n=He(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return""!==this.name&&(e.name=this.name),this.usage!==Aa&&(e.usage=this.usage),(0!==this.updateRange.offset||-1!==this.updateRange.count)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}},Wr=class extends Ye{constructor(e,t,i){super(new Uint16Array(e),t,i)}},qr=class extends Ye{constructor(e,t,i){super(new Uint32Array(e),t,i)}},At=class extends Ye{constructor(e,t,i){super(new Float32Array(e),t,i)}},xf=0,Vt=new me,oa=new Oe,Ci=new T,Ft=new tt,bs=new tt,at=new T,ht=class extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=$t(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iu(e)?qr:Wr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return void 0!==this.attributes[e]}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;void 0!==t&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(void 0!==i){let r=new wt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return void 0!==n&&(n.transformDirection(e),n.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,i){return Vt.makeTranslation(e,t,i),this.applyMatrix4(Vt),this}scale(e,t,i){return Vt.makeScale(e,t,i),this.applyMatrix4(Vt),this}lookAt(e){return oa.lookAt(e),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new At(t,3)),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new tt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(void 0!==e){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let n=t[i];Ft.setFromBufferAttribute(n),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new en);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(e){let i=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){let s=t[r];bs.setFromBufferAttribute(s),this.morphTargetsRelative?(at.addVectors(Ft.min,bs.min),Ft.expandByPoint(at),at.addVectors(Ft.max,bs.max),Ft.expandByPoint(at)):(Ft.expandByPoint(bs.min),Ft.expandByPoint(bs.max))}Ft.getCenter(i);let a=0;for(let l=0,h=e.count;l<h;l++)at.fromBufferAttribute(e,l),a=Math.max(a,i.distanceToSquared(at));if(t)for(let u=0,c=t.length;u<c;u++){let d=t[u],p=this.morphTargetsRelative;for(let f=0,m=d.count;f<m;f++)at.fromBufferAttribute(d,f),p&&(Ci.fromBufferAttribute(e,f),at.add(Ci)),a=Math.max(a,i.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(null===e||void 0===t.position||void 0===t.normal||void 0===t.uv){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=t.position.array,n=t.normal.array,s=t.uv.array,a=r.length/3;!1===this.hasAttribute("tangent")&&this.setAttribute("tangent",new Ye(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,h=[],u=[];for(let c=0;c<a;c++)h[c]=new T,u[c]=new T;let d=new T,p=new T,f=new T,m=new se,g=new se,$=new se,v=new T,x=new T;function y(e,t,i){d.fromArray(r,3*e),p.fromArray(r,3*t),f.fromArray(r,3*i),m.fromArray(s,2*e),g.fromArray(s,2*t),$.fromArray(s,2*i),p.sub(d),f.sub(d),g.sub(m),$.sub(m);let n=1/(g.x*$.y-$.x*g.y);isFinite(n)&&(v.copy(p).multiplyScalar($.y).addScaledVector(f,-g.y).multiplyScalar(n),x.copy(f).multiplyScalar(g.x).addScaledVector(p,-$.x).multiplyScalar(n),h[e].add(v),h[t].add(v),h[i].add(v),u[e].add(x),u[t].add(x),u[i].add(x))}let b=this.groups;0===b.length&&(b=[{start:0,count:i.length}]);for(let _=0,S=b.length;_<S;++_){let w=b[_],M=w.start,E=w.count;for(let A=M,C=M+E;A<C;A+=3)y(i[A+0],i[A+1],i[A+2])}let L=new T,R=new T,P=new T,I=new T;function D(e){P.fromArray(n,3*e),I.copy(P);let t=h[e];L.copy(t),L.sub(P.multiplyScalar(P.dot(t))).normalize(),R.crossVectors(I,t);let i=0>R.dot(u[e])?-1:1;l[4*e]=L.x,l[4*e+1]=L.y,l[4*e+2]=L.z,l[4*e+3]=i}for(let N=0,O=b.length;N<O;++N){let z=b[N],U=z.start,B=z.count;for(let F=U,k=U+B;F<k;F+=3)D(i[F+0]),D(i[F+1]),D(i[F+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(void 0!==t){let i=this.getAttribute("normal");if(void 0===i)i=new Ye(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let r=0,n=i.count;r<n;r++)i.setXYZ(r,0,0,0);let s=new T,a=new T,l=new T,h=new T,u=new T,c=new T,d=new T,p=new T;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),$=e.getX(f+1),v=e.getX(f+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,$),l.fromBufferAttribute(t,v),d.subVectors(l,a),p.subVectors(s,a),d.cross(p),h.fromBufferAttribute(i,g),u.fromBufferAttribute(i,$),c.fromBufferAttribute(i,v),h.add(d),u.add(d),c.add(d),i.setXYZ(g,h.x,h.y,h.z),i.setXYZ($,u.x,u.y,u.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let x=0,y=t.count;x<y;x+=3)s.fromBufferAttribute(t,x+0),a.fromBufferAttribute(t,x+1),l.fromBufferAttribute(t,x+2),d.subVectors(l,a),p.subVectors(s,a),d.cross(p),i.setXYZ(x+0,d.x,d.y,d.z),i.setXYZ(x+1,d.x,d.y,d.z),i.setXYZ(x+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)at.fromBufferAttribute(e,t),at.normalize(),e.setXYZ(t,at.x,at.y,at.z)}toNonIndexed(){function e(e,t){let i=e.array,r=e.itemSize,n=e.normalized,s=new i.constructor(t.length*r),a=0,l=0;for(let h=0,u=t.length;h<u;h++){a=e.isInterleavedBufferAttribute?t[h]*e.data.stride+e.offset:t[h]*r;for(let c=0;c<r;c++)s[l++]=i[a++]}return new Ye(s,r,n)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new ht,i=this.index.array,r=this.attributes;for(let n in r){let s=e(r[n],i);t.setAttribute(n,s)}let a=this.morphAttributes;for(let l in a){let h=[],u=a[l];for(let c=0,d=u.length;c<d;c++){let p=e(u[c],i);h.push(p)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;let f=this.groups;for(let m=0,g=f.length;m<g;m++){let $=f[m];t.addGroup($.start,$.count,$.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,""!==this.name&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),void 0!==this.parameters){let t=this.parameters;for(let i in t)void 0!==t[i]&&(e[i]=t[i]);return e}e.data={attributes:{}};let r=this.index;null!==r&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});let n=this.attributes;for(let s in n){let a=n[s];e.data.attributes[s]=a.toJSON(e.data)}let l={},h=!1;for(let u in this.morphAttributes){let c=this.morphAttributes[u],d=[];for(let p=0,f=c.length;p<f;p++){let m=c[p];d.push(m.toJSON(e.data))}d.length>0&&(l[u]=d,h=!0)}h&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);let g=this.groups;g.length>0&&(e.data.groups=JSON.parse(JSON.stringify(g)));let $=this.boundingSphere;return null!==$&&(e.data.boundingSphere={center:$.center.toArray(),radius:$.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;null!==i&&this.setIndex(i.clone(t));let r=e.attributes;for(let n in r){let s=r[n];this.setAttribute(n,s.clone(t))}let a=e.morphAttributes;for(let l in a){let h=[],u=a[l];for(let c=0,d=u.length;c<d;c++)h.push(u[c].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let p=e.groups;for(let f=0,m=p.length;f<m;f++){let g=p[f];this.addGroup(g.start,g.count,g.materialIndex)}let $=e.boundingBox;null!==$&&(this.boundingBox=$.clone());let v=e.boundingSphere;return null!==v&&(this.boundingSphere=v.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,void 0!==e.parameters&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},th=new me,Pi=new On,aa=new en,Rn=new T,Ln=new T,In=new T,ca=new T,la=new T,ha=new T,pr=new T,mr=new T,gr=new T,xr=new se,_r=new se,yr=new se,ua=new T,vr=new T,Ze=class extends Oe{constructor(e=new ht,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),void 0!==e.morphTargetInfluences&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),void 0!==e.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}raycast(e,t){let i=this.geometry,r=this.material,n=this.matrixWorld;if(void 0===r||(null===i.boundingSphere&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(n),!1===e.ray.intersectsSphere(aa))||(th.copy(n).invert(),Pi.copy(e.ray).applyMatrix4(th),null!==i.boundingBox&&!1===Pi.intersectsBox(i.boundingBox)))return;let s,a=i.index,l=i.attributes.position,h=i.morphAttributes.position,u=i.morphTargetsRelative,c=i.attributes.uv,d=i.attributes.uv2,p=i.groups,f=i.drawRange;if(null!==a){if(Array.isArray(r))for(let m=0,g=p.length;m<g;m++){let $=p[m],v=r[$.materialIndex],x=Math.max($.start,f.start),y=Math.min(a.count,Math.min($.start+$.count,f.start+f.count));for(let b=x,_=y;b<_;b+=3){let S=a.getX(b),w;(s=br(this,v,e,Pi,l,h,u,c,d,S,a.getX(b+1),a.getX(b+2)))&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=$.materialIndex,t.push(s))}}else{let M=Math.max(0,f.start),E=Math.min(a.count,f.start+f.count);for(let A=M,C=E;A<C;A+=3){let L=a.getX(A),R;(s=br(this,r,e,Pi,l,h,u,c,d,L,a.getX(A+1),a.getX(A+2)))&&(s.faceIndex=Math.floor(A/3),t.push(s))}}}else if(void 0!==l){if(Array.isArray(r))for(let P=0,I=p.length;P<I;P++){let D=p[P],N=r[D.materialIndex],O=Math.max(D.start,f.start),z=Math.min(l.count,Math.min(D.start+D.count,f.start+f.count));for(let U=O,B=z;U<B;U+=3){let F=U,k;(s=br(this,N,e,Pi,l,h,u,c,d,F,U+1,U+2))&&(s.faceIndex=Math.floor(U/3),s.face.materialIndex=D.materialIndex,t.push(s))}}else{let H=Math.max(0,f.start),V=Math.min(l.count,f.start+f.count);for(let G=H,W=V;G<W;G+=3){let q=G,j;(s=br(this,r,e,Pi,l,h,u,c,d,q,G+1,G+2))&&(s.faceIndex=Math.floor(G/3),t.push(s))}}}}};function _f(e,t,i,r,n,s,a,l){let h;if(null===(h=t.side===Tt?r.intersectTriangle(a,s,n,!0,l):r.intersectTriangle(n,s,a,t.side!==St,l)))return null;vr.copy(l),vr.applyMatrix4(e.matrixWorld);let u=i.ray.origin.distanceTo(vr);return u<i.near||u>i.far?null:{distance:u,point:vr.clone(),object:e}}function br(e,t,i,r,n,s,a,l,h,u,c,d){Rn.fromBufferAttribute(n,u),Ln.fromBufferAttribute(n,c),In.fromBufferAttribute(n,d);let p=e.morphTargetInfluences;if(s&&p){pr.set(0,0,0),mr.set(0,0,0),gr.set(0,0,0);for(let f=0,m=s.length;f<m;f++){let g=p[f],$=s[f];0!==g&&(ca.fromBufferAttribute($,u),la.fromBufferAttribute($,c),ha.fromBufferAttribute($,d),a?(pr.addScaledVector(ca,g),mr.addScaledVector(la,g),gr.addScaledVector(ha,g)):(pr.addScaledVector(ca.sub(Rn),g),mr.addScaledVector(la.sub(Ln),g),gr.addScaledVector(ha.sub(In),g)))}Rn.add(pr),Ln.add(mr),In.add(gr)}e.isSkinnedMesh&&(e.boneTransform(u,Rn),e.boneTransform(c,Ln),e.boneTransform(d,In));let v=_f(e,t,i,r,Rn,Ln,In,ua);if(v){l&&(xr.fromBufferAttribute(l,u),_r.fromBufferAttribute(l,c),yr.fromBufferAttribute(l,d),v.uv=ft.getUV(ua,Rn,Ln,In,xr,_r,yr,new se)),h&&(xr.fromBufferAttribute(h,u),_r.fromBufferAttribute(h,c),yr.fromBufferAttribute(h,d),v.uv2=ft.getUV(ua,Rn,Ln,In,xr,_r,yr,new se));let x={a:u,b:c,c:d,normal:new T,materialIndex:0};ft.getNormal(Rn,Ln,In,x.normal),v.face=x}return v}var pi=class extends ht{constructor(e=1,t=1,i=1,r=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:s};let a=this;r=Math.floor(r),n=Math.floor(n);let l=[],h=[],u=[],c=[],d=0,p=0;function f(e,t,i,r,n,s,f,m,g,$,v){let x=s/g,y=f/$,b=s/2,_=f/2,S=m/2,w=g+1,M=$+1,E=0,A=0,C=new T;for(let L=0;L<M;L++){let R=L*y-_;for(let P=0;P<w;P++){let I=P*x-b;C[e]=I*r,C[t]=R*n,C[i]=S,h.push(C.x,C.y,C.z),C[e]=0,C[t]=0,C[i]=m>0?1:-1,u.push(C.x,C.y,C.z),c.push(P/g),c.push(1-L/$),E+=1}}for(let D=0;D<$;D++)for(let N=0;N<g;N++){let O=d+N+w*D,z=d+N+w*(D+1),U=d+(N+1)+w*(D+1),B=d+(N+1)+w*D;l.push(O,z,B),l.push(z,U,B),A+=6}a.addGroup(p,A,v),p+=A,d+=E}f("z","y","x",-1,-1,i,t,e,s=Math.floor(s),n,0),f("z","y","x",1,-1,i,t,-e,s,n,1),f("x","z","y",1,1,e,i,t,r,s,2),f("x","z","y",1,-1,e,i,-t,r,s,3),f("x","y","z",1,-1,e,t,i,r,n,4),f("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(l),this.setAttribute("position",new At(h,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(c,2))}static fromJSON(e){return new pi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ji(e){let t={};for(let i in e)for(let r in t[i]={},e[i]){let n=e[i][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?t[i][r]=n.clone():Array.isArray(n)?t[i][r]=n.slice():t[i][r]=n}return t}function Mt(e){let t={};for(let i=0;i<e.length;i++){let r=Ji(e[i]);for(let n in r)t[n]=r[n]}return t}function yf(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function ru(e){return null===e.getRenderTarget()&&e.outputEncoding===Be?nn:Os}var vf={clone:Ji,merge:Mt},bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends Et{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==e&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=yf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);for(let i in t.glslVersion=this.glslVersion,t.uniforms={},this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let s in this.extensions)!0===this.extensions[s]&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Xr=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},dt=class extends Xr{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=null===e.view?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*zs*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Ps*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*zs*Math.atan(Math.tan(.5*Ps*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,n,s){this.aspect=e/t,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Ps*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r,s=this.view;if(null!==this.view&&this.view.enabled){let a=s.fullWidth,l=s.fullHeight;n+=s.offsetX*r/a,t-=s.offsetY*i/l,r*=s.width/a,i*=s.height/l}let h=this.filmOffset;0!==h&&(n+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,null!==this.view&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ri=-90,Li=1,Ra=class extends Oe{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;let r=new dt(Ri,Li,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);let n=new dt(Ri,Li,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(-1,0,0),this.add(n);let s=new dt(Ri,Li,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);let a=new dt(Ri,Li,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);let l=new dt(Ri,Li,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);let h=new dt(Ri,Li,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,t){null===this.parent&&this.updateMatrixWorld();let i=this.renderTarget,[r,n,s,a,l,h]=this.children,u=e.getRenderTarget(),c=e.toneMapping,d=e.xr.enabled;e.toneMapping=vn,e.xr.enabled=!1;let p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,n),e.setRenderTarget(i,2),e.render(t,s),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,h),e.setRenderTarget(u),e.toneMapping=c,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}},Yr=class extends qe{constructor(e,t,i,r,n,s,a,l,h,u){super(e=void 0!==e?e:[],t=void 0!==t?t:qi,i,r,n,s,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},La=class extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Yr(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=void 0!==t.generateMipmaps&&t.generateMipmaps,this.texture.minFilter=void 0!==t.minFilter?t.minFilter:ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pi(5,5,5),n=new wn({name:"CubemapFromEquirect",uniforms:Ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tt,blending:Fn});n.uniforms.tEquirect.value=t;let s=new Ze(r,n),a=t.minFilter;return t.minFilter===gi&&(t.minFilter=ut),new Ra(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){let n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(n)}},da=new T,wf=new T,Sf=new wt,Ot=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=da.subVectors(i,t).cross(wf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let i=e.delta(da),r=this.normal.dot(i);if(0===r)return 0===this.distanceToPoint(e.start)?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/r;return n<0||n>1?null:t.copy(i).multiplyScalar(n).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Sf.getNormalMatrix(e),r=this.coplanarPoint(da).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ii=new en,Mr=new T,ks=class{constructor(e=new Ot,t=new Ot,i=new Ot,r=new Ot,n=new Ot,s=new Ot){this.planes=[e,t,i,r,n,s]}set(e,t,i,r,n,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(n),a[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let t=this.planes,i=e.elements,r=i[0],n=i[1],s=i[2],a=i[3],l=i[4],h=i[5],u=i[6],c=i[7],d=i[8],p=i[9],f=i[10],m=i[11],g=i[12],$=i[13],v=i[14],x=i[15];return t[0].setComponents(a-r,c-l,m-d,x-g).normalize(),t[1].setComponents(a+r,c+l,m+d,x+g).normalize(),t[2].setComponents(a+n,c+h,m+p,x+$).normalize(),t[3].setComponents(a-n,c-h,m-p,x-$).normalize(),t[4].setComponents(a-s,c-u,m-f,x-v).normalize(),t[5].setComponents(a+s,c+u,m+f,x+v).normalize(),this}intersectsObject(e){let t=e.geometry;return null===t.boundingSphere&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Mr.x=r.normal.x>0?e.max.x:e.min.x,Mr.y=r.normal.y>0?e.max.y:e.min.y,Mr.z=r.normal.z>0?e.max.z:e.min.z,0>r.distanceToPoint(Mr))return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(0>t[i].distanceToPoint(e))return!1;return!0}clone(){return new this.constructor().copy(this)}};function ou(){let e=null,t=!1,i=null,r=null;function n(t,s){i(t,s),r=e.requestAnimationFrame(n)}return{start:function(){!0!==t&&null!==i&&(r=e.requestAnimationFrame(n),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){i=e},setContext:function(t){e=t}}}function Tf(e,t){let i=t.isWebGL2,r=new WeakMap;return{get:function e(t){return t.isInterleavedBufferAttribute&&(t=t.data),r.get(t)},remove:function t(i){i.isInterleavedBufferAttribute&&(i=i.data);let n=r.get(i);n&&(e.deleteBuffer(n.buffer),r.delete(i))},update:function t(n,s){var a,l,h;if(n.isGLBufferAttribute){let u=r.get(n);(!u||u.version<n.version)&&r.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version});return}n.isInterleavedBufferAttribute&&(n=n.data);let c=r.get(n),d,p;void 0===c?r.set(n,function t(r,n){let s=r.array,a=r.usage,l=e.createBuffer();e.bindBuffer(n,l),e.bufferData(n,s,a),r.onUploadCallback();let h;if(s instanceof Float32Array)h=5126;else if(s instanceof Uint16Array){if(r.isFloat16BufferAttribute){if(i)h=5131;else throw Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.")}else h=5123}else if(s instanceof Int16Array)h=5122;else if(s instanceof Uint32Array)h=5125;else if(s instanceof Int32Array)h=5124;else if(s instanceof Int8Array)h=5120;else if(s instanceof Uint8Array)h=5121;else if(s instanceof Uint8ClampedArray)h=5121;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+s);return{buffer:l,type:h,bytesPerElement:s.BYTES_PER_ELEMENT,version:r.version}}(n,s)):c.version<n.version&&(a=c.buffer,l=n,h=s,d=l.array,p=l.updateRange,e.bindBuffer(h,a),-1===p.count?e.bufferSubData(h,0,d):(i?e.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):e.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),l.onUploadCallback(),c.version=n.version)}}}var Vs=class extends ht{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let n=e/2,s=t/2,a=Math.floor(i),l=Math.floor(r),h=a+1,u=l+1,c=e/a,d=t/l,p=[],f=[],m=[],g=[];for(let $=0;$<u;$++){let v=$*d-s;for(let x=0;x<h;x++){let y=x*c-n;f.push(y,-v,0),m.push(0,0,1),g.push(x/a),g.push(1-$/l)}}for(let b=0;b<l;b++)for(let _=0;_<a;_++){let S=_+h*b,w=_+h*(b+1),M=_+1+h*(b+1),E=_+1+h*b;p.push(S,w,E),p.push(w,M,E)}this.setIndex(p),this.setAttribute("position",new At(f,3)),this.setAttribute("normal",new At(m,3)),this.setAttribute("uv",new At(g,2))}static fromJSON(e){return new Vs(e.width,e.height,e.widthSegments,e.heightSegments)}},Af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,If="vec3 transformed = vec3( position );",Df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Ff=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Of=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Xf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$f="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ep=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,np=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,bp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Tp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ap=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ip=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,kp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rm=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,om=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,gm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,xm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,_m=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ym=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,vm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,bm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Mm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Im=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Om=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ym=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Km=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ng=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Se={alphamap_fragment:Af,alphamap_pars_fragment:Ef,alphatest_fragment:Cf,alphatest_pars_fragment:Pf,aomap_fragment:Rf,aomap_pars_fragment:Lf,begin_vertex:If,beginnormal_vertex:Df,bsdfs:Nf,iridescence_fragment:Ff,bumpmap_pars_fragment:Of,clipping_planes_fragment:zf,clipping_planes_pars_fragment:Bf,clipping_planes_pars_vertex:Uf,clipping_planes_vertex:kf,color_fragment:Vf,color_pars_fragment:Hf,color_pars_vertex:Gf,color_vertex:Wf,common:qf,cube_uv_reflection_fragment:Xf,defaultnormal_vertex:Yf,displacementmap_pars_vertex:Zf,displacementmap_vertex:Jf,emissivemap_fragment:jf,emissivemap_pars_fragment:Kf,encodings_fragment:$f,encodings_pars_fragment:Qf,envmap_fragment:ep,envmap_common_pars_fragment:tp,envmap_pars_fragment:np,envmap_pars_vertex:ip,envmap_physical_pars_fragment:mp,envmap_vertex:sp,fog_vertex:rp,fog_pars_vertex:op,fog_fragment:ap,fog_pars_fragment:cp,gradientmap_pars_fragment:lp,lightmap_fragment:hp,lightmap_pars_fragment:up,lights_lambert_fragment:dp,lights_lambert_pars_fragment:fp,lights_pars_begin:pp,lights_toon_fragment:gp,lights_toon_pars_fragment:xp,lights_phong_fragment:_p,lights_phong_pars_fragment:yp,lights_physical_fragment:vp,lights_physical_pars_fragment:bp,lights_fragment_begin:Mp,lights_fragment_maps:wp,lights_fragment_end:Sp,logdepthbuf_fragment:Tp,logdepthbuf_pars_fragment:Ap,logdepthbuf_pars_vertex:Ep,logdepthbuf_vertex:Cp,map_fragment:Pp,map_pars_fragment:Rp,map_particle_fragment:Lp,map_particle_pars_fragment:Ip,metalnessmap_fragment:Dp,metalnessmap_pars_fragment:Np,morphcolor_vertex:Fp,morphnormal_vertex:Op,morphtarget_pars_vertex:zp,morphtarget_vertex:Bp,normal_fragment_begin:Up,normal_fragment_maps:kp,normal_pars_fragment:Vp,normal_pars_vertex:Hp,normal_vertex:Gp,normalmap_pars_fragment:Wp,clearcoat_normal_fragment_begin:qp,clearcoat_normal_fragment_maps:Xp,clearcoat_pars_fragment:Yp,iridescence_pars_fragment:Zp,output_fragment:Jp,packing:jp,premultiplied_alpha_fragment:Kp,project_vertex:$p,dithering_fragment:Qp,dithering_pars_fragment:em,roughnessmap_fragment:tm,roughnessmap_pars_fragment:nm,shadowmap_pars_fragment:im,shadowmap_pars_vertex:sm,shadowmap_vertex:rm,shadowmask_pars_fragment:om,skinbase_vertex:am,skinning_pars_vertex:cm,skinning_vertex:lm,skinnormal_vertex:hm,specularmap_fragment:um,specularmap_pars_fragment:dm,tonemapping_fragment:fm,tonemapping_pars_fragment:pm,transmission_fragment:mm,transmission_pars_fragment:gm,uv_pars_fragment:xm,uv_pars_vertex:_m,uv_vertex:ym,uv2_pars_fragment:vm,uv2_pars_vertex:bm,uv2_vertex:Mm,worldpos_vertex:wm,background_vert:Sm,background_frag:Tm,backgroundCube_vert:Am,backgroundCube_frag:Em,cube_vert:Cm,cube_frag:Pm,depth_vert:Rm,depth_frag:Lm,distanceRGBA_vert:Im,distanceRGBA_frag:Dm,equirect_vert:Nm,equirect_frag:Fm,linedashed_vert:Om,linedashed_frag:zm,meshbasic_vert:Bm,meshbasic_frag:Um,meshlambert_vert:km,meshlambert_frag:Vm,meshmatcap_vert:Hm,meshmatcap_frag:Gm,meshnormal_vert:Wm,meshnormal_frag:qm,meshphong_vert:Xm,meshphong_frag:Ym,meshphysical_vert:Zm,meshphysical_frag:Jm,meshtoon_vert:jm,meshtoon_frag:Km,points_vert:$m,points_frag:Qm,shadow_vert:eg,shadow_frag:tg,sprite_vert:ng,sprite_frag:ig},ne={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new wt},uv2Transform:{value:new wt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wt}}},sn={basic:{uniforms:Mt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Mt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ye(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Mt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Mt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Mt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new ye(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Mt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Mt([ne.points,ne.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Mt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Mt([ne.common,ne.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Mt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Mt([ne.sprite,ne.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:Mt([ne.common,ne.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:Mt([ne.lights,ne.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};sn.physical={uniforms:Mt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new se(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};var wr={r:0,b:0,g:0};function sg(e,t,i,r,n,s,a){let l=new ye(0),h=!0===s?0:1,u,c,d=null,p=0,f=null;function m(t,i){t.getRGB(wr,ru(e)),r.buffers.color.setClear(wr.r,wr.g,wr.b,i,a)}return{getClearColor:function(){return l},setClearColor:function(e,t=1){l.set(e),m(l,h=t)},getClearAlpha:function(){return h},setClearAlpha:function(e){m(l,h=e)},render:function r(s,a){let g=!1,$=!0===a.isScene?a.background:null;$&&$.isTexture&&($=(a.backgroundBlurriness>0?i:t).get($));let v=e.xr,x=v.getSession&&v.getSession();x&&"additive"===x.environmentBlendMode&&($=null),null===$?m(l,h):$&&$.isColor&&(m($,1),g=!0),(e.autoClear||g)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),$&&($.isCubeTexture||$.mapping===uo)?(void 0===c&&((c=new Ze(new pi(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Ji(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(e,t,i){this.matrixWorld.copyPosition(i.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=$,c.material.uniforms.flipEnvMap.value=$.isCubeTexture&&!1===$.isRenderTargetTexture?-1:1,c.material.uniforms.backgroundBlurriness.value=a.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=a.backgroundIntensity,(d!==$||p!==$.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,d=$,p=$.version,f=e.toneMapping),c.layers.enableAll(),s.unshift(c,c.geometry,c.material,0,0,null)):$&&$.isTexture&&(void 0===u&&((u=new Ze(new Vs(2,2),new wn({name:"BackgroundMaterial",uniforms:Ji(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=$,u.material.uniforms.backgroundIntensity.value=a.backgroundIntensity,!0===$.matrixAutoUpdate&&$.updateMatrix(),u.material.uniforms.uvTransform.value.copy($.matrix),(d!==$||p!==$.version||f!==e.toneMapping)&&(u.material.needsUpdate=!0,d=$,p=$.version,f=e.toneMapping),u.layers.enableAll(),s.unshift(u,u.geometry,u.material,0,0,null))}}}function rg(e,t,i,r){let n=e.getParameter(34921),s=r.isWebGL2?null:t.get("OES_vertex_array_object"),a=r.isWebGL2||null!==s,l={},h=f(null),u=h,c=!1;function d(t){return r.isWebGL2?e.bindVertexArray(t):s.bindVertexArrayOES(t)}function p(t){return r.isWebGL2?e.deleteVertexArray(t):s.deleteVertexArrayOES(t)}function f(e){let t=[],i=[],r=[];for(let s=0;s<n;s++)t[s]=0,i[s]=0,r[s]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:i,attributeDivisors:r,object:e,attributes:{},index:null}}function m(){let e=u.newAttributes;for(let t=0,i=e.length;t<i;t++)e[t]=0}function g(e){$(e,0)}function $(i,n){let s=u.newAttributes,a=u.enabledAttributes,l=u.attributeDivisors;s[i]=1,0===a[i]&&(e.enableVertexAttribArray(i),a[i]=1),l[i]!==n&&((r.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](i,n),l[i]=n)}function v(){let t=u.newAttributes,i=u.enabledAttributes;for(let r=0,n=i.length;r<n;r++)i[r]!==t[r]&&(e.disableVertexAttribArray(r),i[r]=0)}function x(t,i,n,s,a,l){!0===r.isWebGL2&&(5124===n||5125===n)?e.vertexAttribIPointer(t,i,n,a,l):e.vertexAttribPointer(t,i,n,s,a,l)}function y(){b(),c=!0,u!==h&&d((u=h).object)}function b(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:function n(h,p,y,b,_){let S=!1;if(a){var w,M,E;let A,C,L,R,P=(w=b,M=y,E=p,A=!0===E.wireframe,C=l[w.id],void 0===C&&(C={},l[w.id]=C),L=C[M.id],void 0===L&&(L={},C[M.id]=L),R=L[A],void 0===R&&(R=f(r.isWebGL2?e.createVertexArray():s.createVertexArrayOES()),L[A]=R),R);u!==P&&d((u=P).object),(S=function e(t,i,r,n){let s=u.attributes,a=i.attributes,l=0,h=r.getAttributes();for(let c in h)if(h[c].location>=0){let d=s[c],p=a[c];if(void 0===p&&("instanceMatrix"===c&&t.instanceMatrix&&(p=t.instanceMatrix),"instanceColor"===c&&t.instanceColor&&(p=t.instanceColor)),void 0===d||d.attribute!==p||p&&d.data!==p.data)return!0;l++}return u.attributesNum!==l||u.index!==n}(h,b,y,_))&&function e(t,i,r,n){let s={},a=i.attributes,l=0,h=r.getAttributes();for(let c in h)if(h[c].location>=0){let d=a[c];void 0===d&&("instanceMatrix"===c&&t.instanceMatrix&&(d=t.instanceMatrix),"instanceColor"===c&&t.instanceColor&&(d=t.instanceColor));let p={};p.attribute=d,d&&d.data&&(p.data=d.data),s[c]=p,l++}u.attributes=s,u.attributesNum=l,u.index=n}(h,b,y,_)}else{let I=!0===p.wireframe;(u.geometry!==b.id||u.program!==y.id||u.wireframe!==I)&&(u.geometry=b.id,u.program=y.id,u.wireframe=I,S=!0)}null!==_&&i.update(_,34963),(S||c)&&(c=!1,function n(s,a,l,h){if(!1===r.isWebGL2&&(s.isInstancedMesh||h.isInstancedBufferGeometry)&&null===t.get("ANGLE_instanced_arrays"))return;m();let u=h.attributes,c=l.getAttributes(),d=a.defaultAttributeValues;for(let p in c){let f=c[p];if(f.location>=0){let y=u[p];if(void 0===y&&("instanceMatrix"===p&&s.instanceMatrix&&(y=s.instanceMatrix),"instanceColor"===p&&s.instanceColor&&(y=s.instanceColor)),void 0!==y){let b=y.normalized,_=y.itemSize,S=i.get(y);if(void 0===S)continue;let w=S.buffer,M=S.type,E=S.bytesPerElement;if(y.isInterleavedBufferAttribute){let A=y.data,C=A.stride,L=y.offset;if(A.isInstancedInterleavedBuffer){for(let R=0;R<f.locationSize;R++)$(f.location+R,A.meshPerAttribute);!0!==s.isInstancedMesh&&void 0===h._maxInstanceCount&&(h._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let P=0;P<f.locationSize;P++)g(f.location+P);e.bindBuffer(34962,w);for(let I=0;I<f.locationSize;I++)x(f.location+I,_/f.locationSize,M,b,C*E,(L+_/f.locationSize*I)*E)}else{if(y.isInstancedBufferAttribute){for(let D=0;D<f.locationSize;D++)$(f.location+D,y.meshPerAttribute);!0!==s.isInstancedMesh&&void 0===h._maxInstanceCount&&(h._maxInstanceCount=y.meshPerAttribute*y.count)}else for(let N=0;N<f.locationSize;N++)g(f.location+N);e.bindBuffer(34962,w);for(let O=0;O<f.locationSize;O++)x(f.location+O,_/f.locationSize,M,b,_*E,_/f.locationSize*O*E)}}else if(void 0!==d){let z=d[p];if(void 0!==z)switch(z.length){case 2:e.vertexAttrib2fv(f.location,z);break;case 3:e.vertexAttrib3fv(f.location,z);break;case 4:e.vertexAttrib4fv(f.location,z);break;default:e.vertexAttrib1fv(f.location,z)}}}}v()}(h,p,y,b),null!==_&&e.bindBuffer(34963,i.get(_).buffer))},reset:y,resetDefaultState:b,dispose:function e(){for(let t in y(),l){let i=l[t];for(let r in i){let n=i[r];for(let s in n)p(n[s].object),delete n[s];delete i[r]}delete l[t]}},releaseStatesOfGeometry:function e(t){if(void 0===l[t.id])return;let i=l[t.id];for(let r in i){let n=i[r];for(let s in n)p(n[s].object),delete n[s];delete i[r]}delete l[t.id]},releaseStatesOfProgram:function e(t){for(let i in l){let r=l[i];if(void 0===r[t.id])continue;let n=r[t.id];for(let s in n)p(n[s].object),delete n[s];delete r[t.id]}},initAttributes:m,enableAttribute:g,disableUnusedAttributes:v}}function og(e,t,i,r){let n=r.isWebGL2,s;function a(e){s=e}this.setMode=a,this.render=function t(r,n){e.drawArrays(s,r,n),i.update(n,s,1)},this.renderInstances=function r(a,l,h){if(0===h)return;let u,c;if(n)u=e,c="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",null===u){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[c](s,a,l,h),i.update(l,s,h)}}function ag(e,t,i){let r;function n(t){if("highp"===t){if(e.getShaderPrecisionFormat(35633,36338).precision>0&&e.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";t="mediump"}return"mediump"===t&&e.getShaderPrecisionFormat(35633,36337).precision>0&&e.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let s="undefined"!=typeof WebGL2RenderingContext&&e instanceof WebGL2RenderingContext||"undefined"!=typeof WebGL2ComputeRenderingContext&&e instanceof WebGL2ComputeRenderingContext,a=void 0!==i.precision?i.precision:"highp",l=n(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let h=s||t.has("WEBGL_draw_buffers"),u=!0===i.logarithmicDepthBuffer,c=e.getParameter(34930),d=e.getParameter(35660),p=e.getParameter(3379),f=e.getParameter(34076),m=e.getParameter(34921),g=e.getParameter(36347),$=e.getParameter(36348),v=e.getParameter(36349),x=d>0,y=s||t.has("OES_texture_float"),b=s?e.getParameter(36183):0;return{isWebGL2:s,drawBuffers:h,getMaxAnisotropy:function i(){if(void 0!==r)return r;if(!0===t.has("EXT_texture_filter_anisotropic")){let n=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:n,precision:a,logarithmicDepthBuffer:u,maxTextures:c,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:g,maxVaryings:$,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:x&&y,maxSamples:b}}function cg(e){let t=this,i=null,r=0,n=!1,s=!1,a=new Ot,l=new wt,h={value:null,needsUpdate:!1};function u(){h.value!==i&&(h.value=i,h.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(e,i,r,n){let s=null!==e?e.length:0,u=null;if(0!==s){if(u=h.value,!0!==n||null===u){let c=r+4*s,d=i.matrixWorldInverse;l.getNormalMatrix(d),(null===u||u.length<c)&&(u=new Float32Array(c));for(let p=0,f=r;p!==s;++p,f+=4)a.copy(e[p]).applyMatrix4(d,l),a.normal.toArray(u,f),u[f+3]=a.constant}h.value=u,h.needsUpdate=!0}return t.numPlanes=s,t.numIntersection=0,u}this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t,s){let a=0!==e.length||t||0!==r||n;return n=t,i=c(e,s,0),r=e.length,a},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(t,a,l){let d=t.clippingPlanes,p=t.clipIntersection,f=t.clipShadows,m=e.get(t);if(n&&null!==d&&0!==d.length&&(!s||f)){let g=s?0:r,$=4*g,v=m.clippingState||null;h.value=v,v=c(d,a,$,l);for(let x=0;x!==$;++x)v[x]=i[x];m.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=g}else s?c(null):u()}}function lg(e){let t=new WeakMap;function i(e,t){return t===Sa?e.mapping=qi:t===Ta&&(e.mapping=Xi),e}function r(e){let i=e.target;i.removeEventListener("dispose",r);let n=t.get(i);void 0!==n&&(t.delete(i),n.dispose())}return{get:function n(s){if(s&&s.isTexture&&!1===s.isRenderTargetTexture){let a=s.mapping;if(a===Sa||a===Ta){if(t.has(s))return i(t.get(s).texture,s.mapping);{let l=s.image;if(!l||!(l.height>0))return null;{let h=new La(l.height/2);return h.fromEquirectangularTexture(e,s),t.set(s,h),s.addEventListener("dispose",r),i(h.texture,s.mapping)}}}}return s},dispose:function e(){t=new WeakMap}}}var ji=class extends Xr{constructor(e=-1,t=1,i=1,r=-1,n=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=null===e.view?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,s){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,n=i-e,s=i+e,a=r+t,l=r-t;if(null!==this.view&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=h*this.view.offsetX,s=n+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(n,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,null!==this.view&&(t.object.view=Object.assign({},this.view)),t}},Vi=4,nh=[.125,.215,.35,.446,.526,.582],ri=20,fa=new ji,ih=new ye,pa=null,si=(1+Math.sqrt(5))/2,Di=1/si,sh=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,si,Di),new T(0,si,-Di),new T(Di,0,si),new T(-Di,0,si),new T(si,Di,0),new T(-si,Di,0)],Zr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){pa=this._renderer.getRenderTarget(),this._setSize(256);let n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,r,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){null===this._cubemapMaterial&&(this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){null===this._equirectMaterial&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),null!==this._cubemapMaterial&&this._cubemapMaterial.dispose(),null!==this._equirectMaterial&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){null!==this._blurMaterial&&this._blurMaterial.dispose(),null!==this._pingPongRenderTarget&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pa),e.scissorTest=!1,Sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Xi?this._setSize(0===e.image.length?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pa=this._renderer.getRenderTarget();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ut,minFilter:ut,generateMipmaps:!1,type:Fs,format:Ht,encoding:di,depthBuffer:!1},r=rh(e,t,i);if(null===this._pingPongRenderTarget||this._pingPongRenderTarget.width!==e){null!==this._pingPongRenderTarget&&this._dispose(),this._pingPongRenderTarget=rh(e,t,i);let{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hg(n)),this._blurMaterial=ug(n,e,t)}return r}_compileMaterial(e){let t=new Ze(this._lodPlanes[0],e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,i,r){let n=new dt(90,1,t,i),s=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(ih),l.toneMapping=vn,l.autoClear=!1;let c=new Gt({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),d=new Ze(new pi,c),p=!1,f=e.background;f?f.isColor&&(c.color.copy(f),e.background=null,p=!0):(c.color.copy(ih),p=!0);for(let m=0;m<6;m++){let g=m%3;0===g?(n.up.set(0,s[m],0),n.lookAt(a[m],0,0)):1===g?(n.up.set(0,0,s[m]),n.lookAt(0,a[m],0)):(n.up.set(0,s[m],0),n.lookAt(0,0,a[m]));let $=this._cubeSize;Sr(r,g*$,m>2?$:0,$,$),l.setRenderTarget(r),p&&l.render(d,n),l.render(e,n)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=u,l.autoClear=h,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===qi||e.mapping===Xi;r?(null===this._cubemapMaterial&&(this._cubemapMaterial=ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=!1===e.isRenderTargetTexture?-1:1):null===this._equirectMaterial&&(this._equirectMaterial=oh());let n=r?this._cubemapMaterial:this._equirectMaterial,s=new Ze(this._lodPlanes[0],n);n.uniforms.envMap.value=e;let a=this._cubeSize;Sr(t,0,0,3*a,2*a),i.setRenderTarget(t),i.render(s,fa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let n=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=sh[(r-1)%sh.length];this._blur(e,r-1,r,n,s)}t.autoClear=i}_blur(e,t,i,r,n){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",n),this._halfBlur(s,e,i,i,r,"longitudinal",n)}_halfBlur(e,t,i,r,n,s,a){let l=this._renderer,h=this._blurMaterial;"latitudinal"!==s&&"longitudinal"!==s&&console.error("blur direction must be either latitudinal or longitudinal!");let u=new Ze(this._lodPlanes[r],h),c=h.uniforms,d=this._sizeLods[i]-1,p=isFinite(n)?Math.PI/(2*d):2*Math.PI/(2*ri-1),f=n/p,m=isFinite(n)?1+Math.floor(3*f):ri;m>ri&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);let g=[],$=0;for(let v=0;v<ri;++v){let x=v/f,y=Math.exp(-x*x/2);g.push(y),0===v?$+=y:v<m&&($+=2*y)}for(let b=0;b<g.length;b++)g[b]=g[b]/$;c.envMap.value=e.texture,c.samples.value=m,c.weights.value=g,c.latitudinal.value="latitudinal"===s,a&&(c.poleAxis.value=a);let{_lodMax:_}=this;c.dTheta.value=p,c.mipInt.value=_-i;let S=this._sizeLods[r],w=4*(this._cubeSize-S);Sr(t,3*S*(r>_-Vi?r-_+Vi:0),w,3*S,2*S),l.setRenderTarget(t),l.render(u,fa)}};function hg(e){let t=[],i=[],r=[],n=e,s=e-Vi+1+nh.length;for(let a=0;a<s;a++){let l=Math.pow(2,n);i.push(l);let h=1/l;a>e-Vi?h=nh[a-e+Vi-1]:0===a&&(h=0),r.push(h);let u=1/(l-2),c=-u,d=1+u,p=[c,c,d,c,d,d,c,c,d,d,c,d],f=new Float32Array(108),m=new Float32Array(72),g=new Float32Array(36);for(let $=0;$<6;$++){let v=$%3*2/3-1,x=$>2?0:-1,y=[v,x,0,v+2/3,x,0,v+2/3,x+1,0,v,x,0,v+2/3,x+1,0,v,x+1,0];f.set(y,18*$),m.set(p,12*$);let b=[$,$,$,$,$,$];g.set(b,6*$)}let _=new ht;_.setAttribute("position",new Ye(f,3)),_.setAttribute("uv",new Ye(m,2)),_.setAttribute("faceIndex",new Ye(g,1)),t.push(_),n>Vi&&n--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function rh(e,t,i){let r=new Mn(e,t,i);return r.texture.mapping=uo,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Sr(e,t,i,r,n){e.viewport.set(t,i,r,n),e.scissor.set(t,i,r,n)}function ug(e,t,i){let r=new Float32Array(ri),n=new T(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function oh(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ah(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dg(e){let t=new WeakMap,i=null;function r(e){let i=e.target;i.removeEventListener("dispose",r);let n=t.get(i);void 0!==n&&(t.delete(i),n.dispose())}return{get:function n(s){if(s&&s.isTexture){let a=s.mapping,l=a===Sa||a===Ta,h=a===qi||a===Xi;if(l||h){if(s.isRenderTargetTexture&&!0===s.needsPMREMUpdate){s.needsPMREMUpdate=!1;let u=t.get(s);return null===i&&(i=new Zr(e)),u=l?i.fromEquirectangular(s,u):i.fromCubemap(s,u),t.set(s,u),u.texture}if(t.has(s))return t.get(s).texture;{let c=s.image;if(!(l&&c&&c.height>0||h&&c&&function e(t){let i=0;for(let r=0;r<6;r++)void 0!==t[r]&&i++;return 6===i}(c)))return null;{null===i&&(i=new Zr(e));let d=l?i.fromEquirectangular(s):i.fromCubemap(s);return t.set(s,d),s.addEventListener("dispose",r),d.texture}}}}return s},dispose:function e(){t=new WeakMap,null!==i&&(i.dispose(),i=null)}}}function fg(e){let t={};function i(i){if(void 0!==t[i])return t[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(e){return null!==i(e)},init:function(e){e.isWebGL2?i("EXT_color_buffer_float"):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(e){let t=i(e);return null===t&&console.warn("THREE.WebGLRenderer: "+e+" extension not supported."),t}}}function pg(e,t,i,r){let n={},s=new WeakMap;function a(e){let l=e.target;for(let h in null!==l.index&&t.remove(l.index),l.attributes)t.remove(l.attributes[h]);l.removeEventListener("dispose",a),delete n[l.id];let u=s.get(l);u&&(t.remove(u),s.delete(l)),r.releaseStatesOfGeometry(l),!0===l.isInstancedBufferGeometry&&delete l._maxInstanceCount,i.memory.geometries--}function l(e){let i=[],r=e.index,n=e.attributes.position,a=0;if(null!==r){let l=r.array;a=r.version;for(let h=0,u=l.length;h<u;h+=3){let c=l[h+0],d=l[h+1],p=l[h+2];i.push(c,d,d,p,p,c)}}else{let f=n.array;a=n.version;for(let m=0,g=f.length/3-1;m<g;m+=3){let $=m+0,v=m+1,x=m+2;i.push($,v,v,x,x,$)}}let y=new(iu(i)?qr:Wr)(i,1);y.version=a;let b=s.get(e);b&&t.remove(b),s.set(e,y)}return{get:function e(t,r){return!0===n[r.id]||(r.addEventListener("dispose",a),n[r.id]=!0,i.memory.geometries++),r},update:function e(i){let r=i.attributes;for(let n in r)t.update(r[n],34962);let s=i.morphAttributes;for(let a in s){let l=s[a];for(let h=0,u=l.length;h<u;h++)t.update(l[h],34962)}},getWireframeAttribute:function e(t){let i=s.get(t);if(i){let r=t.index;null!==r&&i.version<r.version&&l(t)}else l(t);return s.get(t)}}}function mg(e,t,i,r){let n=r.isWebGL2,s;function a(e){s=e}let l,h;this.setMode=a,this.setIndex=function e(t){l=t.type,h=t.bytesPerElement},this.render=function t(r,n){e.drawElements(s,n,l,r*h),i.update(n,s,1)},this.renderInstances=function r(a,u,c){if(0===c)return;let d,p;if(n)d=e,p="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",null===d){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,u,l,a*h,c),i.update(u,s,c)}}function gg(e){let t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function e(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function e(i,r,n){switch(t.calls++,r){case 4:t.triangles+=n*(i/3);break;case 1:t.lines+=n*(i/2);break;case 3:t.lines+=n*(i-1);break;case 2:t.lines+=n*i;break;case 0:t.points+=n*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r)}}}}function xg(e,t){return e[0]-t[0]}function _g(e,t){return Math.abs(t[1])-Math.abs(e[1])}function yg(e,t,i){let r={},n=new Float32Array(8),s=new WeakMap,a=new Ue,l=[];for(let h=0;h<8;h++)l[h]=[h,0];return{update:function h(u,c,d,p){let f=u.morphTargetInfluences;if(!0===t.isWebGL2){let m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=void 0!==m?m.length:0,$=s.get(c);if(void 0===$||$.count!==g){let v=function(){L.dispose(),s.delete(c),c.removeEventListener("dispose",v)};void 0!==$&&$.texture.dispose();let x=void 0!==c.morphAttributes.position,y=void 0!==c.morphAttributes.normal,b=void 0!==c.morphAttributes.color,_=c.morphAttributes.position||[],S=c.morphAttributes.normal||[],w=c.morphAttributes.color||[],M=0;!0===x&&(M=1),!0===y&&(M=2),!0===b&&(M=3);let E=c.attributes.position.count*M,A=1;E>t.maxTextureSize&&(A=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let C=new Float32Array(E*A*4*g),L=new Gr(C,E,A,g);L.type=Nn,L.needsUpdate=!0;let R=4*M;for(let P=0;P<g;P++){let I=_[P],D=S[P],N=w[P],O=E*A*4*P;for(let z=0;z<I.count;z++){let U=z*R;!0===x&&(a.fromBufferAttribute(I,z),C[O+U+0]=a.x,C[O+U+1]=a.y,C[O+U+2]=a.z,C[O+U+3]=0),!0===y&&(a.fromBufferAttribute(D,z),C[O+U+4]=a.x,C[O+U+5]=a.y,C[O+U+6]=a.z,C[O+U+7]=0),!0===b&&(a.fromBufferAttribute(N,z),C[O+U+8]=a.x,C[O+U+9]=a.y,C[O+U+10]=a.z,C[O+U+11]=4===N.itemSize?a.w:1)}}$={count:g,texture:L,size:new se(E,A)},s.set(c,$),c.addEventListener("dispose",v)}let B=0;for(let F=0;F<f.length;F++)B+=f[F];let k=c.morphTargetsRelative?1:1-B;p.getUniforms().setValue(e,"morphTargetBaseInfluence",k),p.getUniforms().setValue(e,"morphTargetInfluences",f),p.getUniforms().setValue(e,"morphTargetsTexture",$.texture,i),p.getUniforms().setValue(e,"morphTargetsTextureSize",$.size)}else{let H=void 0===f?0:f.length,V=r[c.id];if(void 0===V||V.length!==H){V=[];for(let G=0;G<H;G++)V[G]=[G,0];r[c.id]=V}for(let W=0;W<H;W++){let q=V[W];q[0]=W,q[1]=f[W]}V.sort(_g);for(let j=0;j<8;j++)j<H&&V[j][1]?(l[j][0]=V[j][0],l[j][1]=V[j][1]):(l[j][0]=Number.MAX_SAFE_INTEGER,l[j][1]=0);l.sort(xg);let X=c.morphAttributes.position,Y=c.morphAttributes.normal,K=0;for(let J=0;J<8;J++){let Z=l[J],Q=Z[0],ee=Z[1];Q!==Number.MAX_SAFE_INTEGER&&ee?(X&&c.getAttribute("morphTarget"+J)!==X[Q]&&c.setAttribute("morphTarget"+J,X[Q]),Y&&c.getAttribute("morphNormal"+J)!==Y[Q]&&c.setAttribute("morphNormal"+J,Y[Q]),n[J]=ee,K+=ee):(X&&!0===c.hasAttribute("morphTarget"+J)&&c.deleteAttribute("morphTarget"+J),Y&&!0===c.hasAttribute("morphNormal"+J)&&c.deleteAttribute("morphNormal"+J),n[J]=0)}let ei=c.morphTargetsRelative?1:1-K;p.getUniforms().setValue(e,"morphTargetBaseInfluence",ei),p.getUniforms().setValue(e,"morphTargetInfluences",n)}}}}function vg(e,t,i,r){let n=new WeakMap;function s(e){let t=e.target;t.removeEventListener("dispose",s),i.remove(t.instanceMatrix),null!==t.instanceColor&&i.remove(t.instanceColor)}return{update:function e(a){let l=r.render.frame,h=a.geometry,u=t.get(a,h);return n.get(u)!==l&&(t.update(u),n.set(u,l)),a.isInstancedMesh&&(!1===a.hasEventListener("dispose",s)&&a.addEventListener("dispose",s),i.update(a.instanceMatrix,34962),null!==a.instanceColor&&i.update(a.instanceColor,34962)),u},dispose:function e(){n=new WeakMap}}}var au=new qe,cu=new Gr,lu=new Pa,hu=new Yr,ch=[],lh=[],hh=new Float32Array(16),uh=new Float32Array(9),dh=new Float32Array(4);function rs(e,t,i){let r=e[0];if(r<=0||r>0)return e;let n=t*i,s=ch[n];if(void 0===s&&(s=new Float32Array(n),ch[n]=s),0!==t){r.toArray(s,0);for(let a=1,l=0;a!==t;++a)l+=i,e[a].toArray(s,l)}return s}function nt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function it(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function fo(e,t){let i=lh[t];void 0===i&&(i=new Int32Array(t),lh[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function bg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Mg(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(nt(i,t))return;e.uniform2fv(this.addr,t),it(i,t)}}function wg(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(void 0!==t.r)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(nt(i,t))return;e.uniform3fv(this.addr,t),it(i,t)}}function Sg(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(nt(i,t))return;e.uniform4fv(this.addr,t),it(i,t)}}function Tg(e,t){let i=this.cache,r=t.elements;if(void 0===r){if(nt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),it(i,t)}else{if(nt(i,r))return;dh.set(r),e.uniformMatrix2fv(this.addr,!1,dh),it(i,r)}}function Ag(e,t){let i=this.cache,r=t.elements;if(void 0===r){if(nt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),it(i,t)}else{if(nt(i,r))return;uh.set(r),e.uniformMatrix3fv(this.addr,!1,uh),it(i,r)}}function Eg(e,t){let i=this.cache,r=t.elements;if(void 0===r){if(nt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),it(i,t)}else{if(nt(i,r))return;hh.set(r),e.uniformMatrix4fv(this.addr,!1,hh),it(i,r)}}function Cg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Pg(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(nt(i,t))return;e.uniform2iv(this.addr,t),it(i,t)}}function Rg(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(nt(i,t))return;e.uniform3iv(this.addr,t),it(i,t)}}function Lg(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(nt(i,t))return;e.uniform4iv(this.addr,t),it(i,t)}}function Ig(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Dg(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(nt(i,t))return;e.uniform2uiv(this.addr,t),it(i,t)}}function Ng(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(nt(i,t))return;e.uniform3uiv(this.addr,t),it(i,t)}}function Fg(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(nt(i,t))return;e.uniform4uiv(this.addr,t),it(i,t)}}function Og(e,t,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(e.uniform1i(this.addr,n),r[0]=n),i.setTexture2D(t||au,n)}function zg(e,t,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(e.uniform1i(this.addr,n),r[0]=n),i.setTexture3D(t||lu,n)}function Bg(e,t,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(e.uniform1i(this.addr,n),r[0]=n),i.setTextureCube(t||hu,n)}function Ug(e,t,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(e.uniform1i(this.addr,n),r[0]=n),i.setTexture2DArray(t||cu,n)}function kg(e){switch(e){case 5126:return bg;case 35664:return Mg;case 35665:return wg;case 35666:return Sg;case 35674:return Tg;case 35675:return Ag;case 35676:return Eg;case 5124:case 35670:return Cg;case 35667:case 35671:return Pg;case 35668:case 35672:return Rg;case 35669:case 35673:return Lg;case 5125:return Ig;case 36294:return Dg;case 36295:return Ng;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return Ug}}function Vg(e,t){e.uniform1fv(this.addr,t)}function Hg(e,t){let i=rs(t,this.size,2);e.uniform2fv(this.addr,i)}function Gg(e,t){let i=rs(t,this.size,3);e.uniform3fv(this.addr,i)}function Wg(e,t){let i=rs(t,this.size,4);e.uniform4fv(this.addr,i)}function qg(e,t){let i=rs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Xg(e,t){let i=rs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Yg(e,t){let i=rs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Zg(e,t){e.uniform1iv(this.addr,t)}function Jg(e,t){e.uniform2iv(this.addr,t)}function jg(e,t){e.uniform3iv(this.addr,t)}function Kg(e,t){e.uniform4iv(this.addr,t)}function $g(e,t){e.uniform1uiv(this.addr,t)}function Qg(e,t){e.uniform2uiv(this.addr,t)}function e0(e,t){e.uniform3uiv(this.addr,t)}function t0(e,t){e.uniform4uiv(this.addr,t)}function n0(e,t,i){let r=this.cache,n=t.length,s=fo(i,n);nt(r,s)||(e.uniform1iv(this.addr,s),it(r,s));for(let a=0;a!==n;++a)i.setTexture2D(t[a]||au,s[a])}function i0(e,t,i){let r=this.cache,n=t.length,s=fo(i,n);nt(r,s)||(e.uniform1iv(this.addr,s),it(r,s));for(let a=0;a!==n;++a)i.setTexture3D(t[a]||lu,s[a])}function s0(e,t,i){let r=this.cache,n=t.length,s=fo(i,n);nt(r,s)||(e.uniform1iv(this.addr,s),it(r,s));for(let a=0;a!==n;++a)i.setTextureCube(t[a]||hu,s[a])}function r0(e,t,i){let r=this.cache,n=t.length,s=fo(i,n);nt(r,s)||(e.uniform1iv(this.addr,s),it(r,s));for(let a=0;a!==n;++a)i.setTexture2DArray(t[a]||cu,s[a])}function o0(e){switch(e){case 5126:return Vg;case 35664:return Hg;case 35665:return Gg;case 35666:return Wg;case 35674:return qg;case 35675:return Xg;case 35676:return Yg;case 5124:case 35670:return Zg;case 35667:case 35671:return Jg;case 35668:case 35672:return jg;case 35669:case 35673:return Kg;case 5125:return $g;case 36294:return Qg;case 36295:return e0;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}var Ia=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=kg(t.type)}},Da=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=o0(t.type)}},Na=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let n=0,s=r.length;n!==s;++n){let a=r[n];a.setValue(e,t[a.id],i)}}},ma=/(\w+)(\])?(\[|\.)?/g;function fh(e,t){e.seq.push(t),e.map[t.id]=t}function a0(e,t,i){let r=e.name,n=r.length;for(ma.lastIndex=0;;){let s=ma.exec(r),a=ma.lastIndex,l=s[1],h="]"===s[2],u=s[3];if(h&&(l|=0),void 0===u||"["===u&&a+2===n){fh(i,void 0===u?new Ia(l,e,t):new Da(l,e,t));break}{let c=i.map[l];void 0===c&&fh(i,c=new Na(l)),i=c}}}var Wi=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){let n=e.getActiveUniform(t,r),s=e.getUniformLocation(t,n.name);a0(n,s,this)}}setValue(e,t,i,r){let n=this.map[t];void 0!==n&&n.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];void 0!==r&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,s=t.length;n!==s;++n){let a=t[n],l=i[a.id];!1!==l.needsUpdate&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,n=e.length;r!==n;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function ph(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var c0=0;function l0(e,t){let i=e.split(`
`),r=[],n=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let a=n;a<s;a++){let l=a+1;r.push(`${l===t?">":" "} ${l}: ${i[a]}`)}return r.join(`
`)}function h0(e){switch(e){case di:return["Linear","( value )"];case Be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}function mh(e,t,i){let r=e.getShaderParameter(t,35713),n=e.getShaderInfoLog(t).trim();if(r&&""===n)return"";let s=/ERROR: 0:(\d+)/.exec(n);if(!s)return n;{let a=parseInt(s[1]);return i.toUpperCase()+`

`+n+`

`+l0(e.getShaderSource(t),a)}}function u0(e,t){let i=h0(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+i[0]+i[1]+"; }"}function d0(e,t){let i;switch(t){case vd:i="Linear";break;case bd:i="Reinhard";break;case Md:i="OptimizedCineon";break;case wd:i="ACESFilmic";break;case Sd:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function f0(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading||"physical"===e.shaderID?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function p0(e){let t=[];for(let i in e){let r=e[i];!1!==r&&t.push("#define "+i+" "+r)}return t.join(`
`)}function m0(e,t){let i={},r=e.getProgramParameter(t,35721);for(let n=0;n<r;n++){let s=e.getActiveAttrib(t,n),a=s.name,l=1;35674===s.type&&(l=2),35675===s.type&&(l=3),35676===s.type&&(l=4),i[a]={type:s.type,location:e.getAttribLocation(t,a),locationSize:l}}return i}function Cs(e){return""!==e}function gh(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var g0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fa(e){return e.replace(g0,x0)}function x0(e,t){let i=Se[t];if(void 0===i)throw Error("Can not resolve #include <"+t+">");return Fa(i)}var _0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(e){return e.replace(_0,y0)}function y0(e,t,i,r){let n="";for(let s=parseInt(t);s<parseInt(i);s++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function yh(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return"highp"===e.precision?t+=`
#define HIGH_PRECISION`:"mediump"===e.precision?t+=`
#define MEDIUM_PRECISION`:"lowp"===e.precision&&(t+=`
#define LOW_PRECISION`),t}function v0(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Yh?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===$u?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Es&&(t="SHADOWMAP_TYPE_VSM"),t}function b0(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case qi:case Xi:t="ENVMAP_TYPE_CUBE";break;case uo:t="ENVMAP_TYPE_CUBE_UV"}return t}function M0(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Xi&&(t="ENVMAP_MODE_REFRACTION"),t}function w0(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case jh:t="ENVMAP_BLENDING_MULTIPLY";break;case _d:t="ENVMAP_BLENDING_MIX";break;case yd:t="ENVMAP_BLENDING_ADD"}return t}function S0(e){let t=e.envMapCubeUVHeight;if(null===t)return null;let i=Math.log2(t)-2;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:1/t,maxMip:i}}function T0(e,t,i,r){let n=e.getContext(),s=i.defines,a=i.vertexShader,l=i.fragmentShader,h=v0(i),u=b0(i),c=M0(i),d=w0(i),p=S0(i),f=i.isWebGL2?"":f0(i),m=p0(s),g=n.createProgram(),$,v,x=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(($=[m].filter(Cs).join(`
`)).length>0&&($+=`
`),(v=[f,m].filter(Cs).join(`
`)).length>0&&(v+=`
`)):($=[yh(i),"#define SHADER_NAME "+i.shaderName,m,i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.supportsVertexTextures?"#define VERTEX_TEXTURES":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMap&&i.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",i.normalMap&&i.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.displacementMap&&i.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",i.specularColorMap?"#define USE_SPECULARCOLORMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEENCOLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUvs?"#define USE_UV":"",i.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&!1===i.flatShading?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+h:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),v=[f,yh(i),"#define SHADER_NAME "+i.shaderName,m,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.envMap?"#define "+c:"",i.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMap&&i.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",i.normalMap&&i.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",i.specularColorMap?"#define USE_SPECULARCOLORMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEENCOLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUvs?"#define USE_UV":"",i.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+h:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==vn?"#define TONE_MAPPING":"",i.toneMapping!==vn?Se.tonemapping_pars_fragment:"",i.toneMapping!==vn?d0("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.encodings_pars_fragment,u0("linearToOutputTexel",i.outputEncoding),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Cs).join(`
`)),a=gh(a=Fa(a),i),a=xh(a,i),l=gh(l=Fa(l),i),l=xh(l,i),a=_h(a),l=_h(l),i.isWebGL2&&!0!==i.isRawShaderMaterial&&(x=`#version 300 es
`,$=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+$,v=["#define varying in",i.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let y=x+$+a,b=x+v+l,_=ph(n,35633,y),S=ph(n,35632,b);if(n.attachShader(g,_),n.attachShader(g,S),void 0!==i.index0AttributeName?n.bindAttribLocation(g,0,i.index0AttributeName):!0===i.morphTargets&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g),e.debug.checkShaderErrors){let w=n.getProgramInfoLog(g).trim(),M=n.getShaderInfoLog(_).trim(),E=n.getShaderInfoLog(S).trim(),A=!0,C=!0;if(!1===n.getProgramParameter(g,35714)){A=!1;let L=mh(n,_,"vertex"),R=mh(n,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,35715)+`

Program Info Log: `+w+`
`+L+`
`+R)}else""!==w?console.warn("THREE.WebGLProgram: Program Info Log:",w):(""===M||""===E)&&(C=!1);C&&(this.diagnostics={runnable:A,programLog:w,vertexShader:{log:M,prefix:$},fragmentShader:{log:E,prefix:v}})}n.deleteShader(_),n.deleteShader(S);let P;this.getUniforms=function(){return void 0===P&&(P=new Wi(n,g)),P};let I;return this.getAttributes=function(){return void 0===I&&(I=m0(n,g)),I},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.name=i.shaderName,this.id=c0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=_,this.fragmentShader=S,this}var A0=0,Oa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),n=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return!1===s.has(r)&&(s.add(r),r.usedTimes++),!1===s.has(n)&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,0===i.usedTimes&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return void 0===i&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return void 0===i&&(i=new za(e),t.set(e,i)),i}},za=class{constructor(e){this.id=A0++,this.code=e,this.usedTimes=0}};function E0(e,t,i,r,n,s,a){let l=new Us,h=new Oa,u=[],c=n.isWebGL2,d=n.logarithmicDepthBuffer,p=n.vertexTextures,f=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};return{getParameters:function s(l,u,g,$,v){let x=$.fog,y=v.geometry,b=l.isMeshStandardMaterial?$.environment:null,_=(l.isMeshStandardMaterial?i:t).get(l.envMap||b),S=_&&_.mapping===uo?_.image.height:null,w=m[l.type];null!==l.precision&&(f=n.getMaxPrecision(l.precision))!==l.precision&&console.warn("THREE.WebGLProgram.getParameters:",l.precision,"not supported, using",f,"instead.");let M=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,E=void 0!==M?M.length:0,A=0;void 0!==y.morphAttributes.position&&(A=1),void 0!==y.morphAttributes.normal&&(A=2),void 0!==y.morphAttributes.color&&(A=3);let C,L,R,P;if(w){let I=sn[w];C=I.vertexShader,L=I.fragmentShader}else C=l.vertexShader,L=l.fragmentShader,h.update(l),R=h.getVertexShaderID(l),P=h.getFragmentShaderID(l);let D=e.getRenderTarget(),N=l.alphaTest>0,O=l.clearcoat>0,z=l.iridescence>0;return{isWebGL2:c,shaderID:w,shaderName:l.type,vertexShader:C,fragmentShader:L,defines:l.defines,customVertexShaderID:R,customFragmentShaderID:P,isRawShaderMaterial:!0===l.isRawShaderMaterial,glslVersion:l.glslVersion,precision:f,instancing:!0===v.isInstancedMesh,instancingColor:!0===v.isInstancedMesh&&null!==v.instanceColor,supportsVertexTextures:p,outputEncoding:null===D?e.outputEncoding:!0===D.isXRRenderTarget?D.texture.encoding:di,map:!!l.map,matcap:!!l.matcap,envMap:!!_,envMapMode:_&&_.mapping,envMapCubeUVHeight:S,lightMap:!!l.lightMap,aoMap:!!l.aoMap,emissiveMap:!!l.emissiveMap,bumpMap:!!l.bumpMap,normalMap:!!l.normalMap,objectSpaceNormalMap:l.normalMapType===Xd,tangentSpaceNormalMap:l.normalMapType===eu,decodeVideoTexture:!!l.map&&!0===l.map.isVideoTexture&&l.map.encoding===Be,clearcoat:O,clearcoatMap:O&&!!l.clearcoatMap,clearcoatRoughnessMap:O&&!!l.clearcoatRoughnessMap,clearcoatNormalMap:O&&!!l.clearcoatNormalMap,iridescence:z,iridescenceMap:z&&!!l.iridescenceMap,iridescenceThicknessMap:z&&!!l.iridescenceThicknessMap,displacementMap:!!l.displacementMap,roughnessMap:!!l.roughnessMap,metalnessMap:!!l.metalnessMap,specularMap:!!l.specularMap,specularIntensityMap:!!l.specularIntensityMap,specularColorMap:!!l.specularColorMap,opaque:!1===l.transparent&&l.blending===Hi,alphaMap:!!l.alphaMap,alphaTest:N,gradientMap:!!l.gradientMap,sheen:l.sheen>0,sheenColorMap:!!l.sheenColorMap,sheenRoughnessMap:!!l.sheenRoughnessMap,transmission:l.transmission>0,transmissionMap:!!l.transmissionMap,thicknessMap:!!l.thicknessMap,combine:l.combine,vertexTangents:!!l.normalMap&&!!y.attributes.tangent,vertexColors:l.vertexColors,vertexAlphas:!0===l.vertexColors&&!!y.attributes.color&&4===y.attributes.color.itemSize,vertexUvs:!!l.map||!!l.bumpMap||!!l.normalMap||!!l.specularMap||!!l.alphaMap||!!l.emissiveMap||!!l.roughnessMap||!!l.metalnessMap||!!l.clearcoatMap||!!l.clearcoatRoughnessMap||!!l.clearcoatNormalMap||!!l.iridescenceMap||!!l.iridescenceThicknessMap||!!l.displacementMap||!!l.transmissionMap||!!l.thicknessMap||!!l.specularIntensityMap||!!l.specularColorMap||!!l.sheenColorMap||!!l.sheenRoughnessMap,uvsVertexOnly:!(l.map||l.bumpMap||l.normalMap||l.specularMap||l.alphaMap||l.emissiveMap||l.roughnessMap||l.metalnessMap||l.clearcoatNormalMap||l.iridescenceMap||l.iridescenceThicknessMap||l.transmission>0||l.transmissionMap||l.thicknessMap||l.specularIntensityMap||l.specularColorMap||l.sheen>0||l.sheenColorMap||l.sheenRoughnessMap)&&!!l.displacementMap,fog:!!x,useFog:!0===l.fog,fogExp2:x&&x.isFogExp2,flatShading:!!l.flatShading,sizeAttenuation:l.sizeAttenuation,logarithmicDepthBuffer:d,skinning:!0===v.isSkinnedMesh,morphTargets:void 0!==y.morphAttributes.position,morphNormals:void 0!==y.morphAttributes.normal,morphColors:void 0!==y.morphAttributes.color,morphTargetsCount:E,morphTextureStride:A,numDirLights:u.directional.length,numPointLights:u.point.length,numSpotLights:u.spot.length,numSpotLightMaps:u.spotLightMap.length,numRectAreaLights:u.rectArea.length,numHemiLights:u.hemi.length,numDirLightShadows:u.directionalShadowMap.length,numPointLightShadows:u.pointShadowMap.length,numSpotLightShadows:u.spotShadowMap.length,numSpotLightShadowsWithMaps:u.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:l.dithering,shadowMapEnabled:e.shadowMap.enabled&&g.length>0,shadowMapType:e.shadowMap.type,toneMapping:l.toneMapped?e.toneMapping:vn,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:l.premultipliedAlpha,doubleSided:l.side===St,flipSided:l.side===Tt,useDepthPacking:!!l.depthPacking,depthPacking:l.depthPacking||0,index0AttributeName:l.index0AttributeName,extensionDerivatives:l.extensions&&l.extensions.derivatives,extensionFragDepth:l.extensions&&l.extensions.fragDepth,extensionDrawBuffers:l.extensions&&l.extensions.drawBuffers,extensionShaderTextureLOD:l.extensions&&l.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||r.has("EXT_shader_texture_lod"),customProgramCacheKey:l.customProgramCacheKey()}},getProgramCacheKey:function t(i){var r,n,s,a;let h=[];if(i.shaderID?h.push(i.shaderID):(h.push(i.customVertexShaderID),h.push(i.customFragmentShaderID)),void 0!==i.defines)for(let u in i.defines)h.push(u),h.push(i.defines[u]);return!1===i.isRawShaderMaterial&&(r=h,n=i,r.push(n.precision),r.push(n.outputEncoding),r.push(n.envMapMode),r.push(n.envMapCubeUVHeight),r.push(n.combine),r.push(n.vertexUvs),r.push(n.fogExp2),r.push(n.sizeAttenuation),r.push(n.morphTargetsCount),r.push(n.morphAttributeCount),r.push(n.numDirLights),r.push(n.numPointLights),r.push(n.numSpotLights),r.push(n.numSpotLightMaps),r.push(n.numHemiLights),r.push(n.numRectAreaLights),r.push(n.numDirLightShadows),r.push(n.numPointLightShadows),r.push(n.numSpotLightShadows),r.push(n.numSpotLightShadowsWithMaps),r.push(n.shadowMapType),r.push(n.toneMapping),r.push(n.numClippingPlanes),r.push(n.numClipIntersection),r.push(n.depthPacking),s=h,a=i,l.disableAll(),a.isWebGL2&&l.enable(0),a.supportsVertexTextures&&l.enable(1),a.instancing&&l.enable(2),a.instancingColor&&l.enable(3),a.map&&l.enable(4),a.matcap&&l.enable(5),a.envMap&&l.enable(6),a.lightMap&&l.enable(7),a.aoMap&&l.enable(8),a.emissiveMap&&l.enable(9),a.bumpMap&&l.enable(10),a.normalMap&&l.enable(11),a.objectSpaceNormalMap&&l.enable(12),a.tangentSpaceNormalMap&&l.enable(13),a.clearcoat&&l.enable(14),a.clearcoatMap&&l.enable(15),a.clearcoatRoughnessMap&&l.enable(16),a.clearcoatNormalMap&&l.enable(17),a.iridescence&&l.enable(18),a.iridescenceMap&&l.enable(19),a.iridescenceThicknessMap&&l.enable(20),a.displacementMap&&l.enable(21),a.specularMap&&l.enable(22),a.roughnessMap&&l.enable(23),a.metalnessMap&&l.enable(24),a.gradientMap&&l.enable(25),a.alphaMap&&l.enable(26),a.alphaTest&&l.enable(27),a.vertexColors&&l.enable(28),a.vertexAlphas&&l.enable(29),a.vertexUvs&&l.enable(30),a.vertexTangents&&l.enable(31),a.uvsVertexOnly&&l.enable(32),s.push(l.mask),l.disableAll(),a.fog&&l.enable(0),a.useFog&&l.enable(1),a.flatShading&&l.enable(2),a.logarithmicDepthBuffer&&l.enable(3),a.skinning&&l.enable(4),a.morphTargets&&l.enable(5),a.morphNormals&&l.enable(6),a.morphColors&&l.enable(7),a.premultipliedAlpha&&l.enable(8),a.shadowMapEnabled&&l.enable(9),a.physicallyCorrectLights&&l.enable(10),a.doubleSided&&l.enable(11),a.flipSided&&l.enable(12),a.useDepthPacking&&l.enable(13),a.dithering&&l.enable(14),a.specularIntensityMap&&l.enable(15),a.specularColorMap&&l.enable(16),a.transmission&&l.enable(17),a.transmissionMap&&l.enable(18),a.thicknessMap&&l.enable(19),a.sheen&&l.enable(20),a.sheenColorMap&&l.enable(21),a.sheenRoughnessMap&&l.enable(22),a.decodeVideoTexture&&l.enable(23),a.opaque&&l.enable(24),s.push(l.mask),h.push(e.outputEncoding)),h.push(i.customProgramCacheKey),h.join()},getUniforms:function e(t){let i=m[t.type],r;if(i){let n=sn[i];r=vf.clone(n.uniforms)}else r=t.uniforms;return r},acquireProgram:function t(i,r){let n;for(let a=0,l=u.length;a<l;a++){let h=u[a];if(h.cacheKey===r){n=h,++n.usedTimes;break}}return void 0===n&&(n=new T0(e,r,i,s),u.push(n)),n},releaseProgram:function e(t){0==--t.usedTimes&&(u[u.indexOf(t)]=u[u.length-1],u.pop(),t.destroy())},releaseShaderCache:function e(t){h.remove(t)},programs:u,dispose:function e(){h.dispose()}}}function C0(){let e=new WeakMap;return{get:function t(i){let r=e.get(i);return void 0===r&&(r={},e.set(i,r)),r},remove:function t(i){e.delete(i)},update:function t(i,r,n){e.get(i)[r]=n},dispose:function t(){e=new WeakMap}}}function P0(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function vh(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function bh(){let e=[],t=0,i=[],r=[],n=[];function s(i,r,n,s,a,l){let h=e[t];return void 0===h?(h={id:i.id,object:i,geometry:r,material:n,groupOrder:s,renderOrder:i.renderOrder,z:a,group:l},e[t]=h):(h.id=i.id,h.object=i,h.geometry=r,h.material=n,h.groupOrder=s,h.renderOrder=i.renderOrder,h.z=a,h.group=l),t++,h}return{opaque:i,transmissive:r,transparent:n,init:function e(){t=0,i.length=0,r.length=0,n.length=0},push:function e(t,a,l,h,u,c){let d=s(t,a,l,h,u,c);l.transmission>0?r.push(d):!0===l.transparent?n.push(d):i.push(d)},unshift:function e(t,a,l,h,u,c){let d=s(t,a,l,h,u,c);l.transmission>0?r.unshift(d):!0===l.transparent?n.unshift(d):i.unshift(d)},finish:function i(){for(let r=t,n=e.length;r<n;r++){let s=e[r];if(null===s.id)break;s.id=null,s.object=null,s.geometry=null,s.material=null,s.group=null}},sort:function e(t,s){i.length>1&&i.sort(t||P0),r.length>1&&r.sort(s||vh),n.length>1&&n.sort(s||vh)}}}function R0(){let e=new WeakMap;return{get:function t(i,r){let n=e.get(i),s;return void 0===n?(s=new bh,e.set(i,[s])):r>=n.length?(s=new bh,n.push(s)):s=n[r],s},dispose:function t(){e=new WeakMap}}}function L0(){let e={};return{get:function(t){if(void 0!==e[t.id])return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new T,color:new ye};break;case"SpotLight":i={position:new T,direction:new T,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new T,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new T,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new T,halfWidth:new T,halfHeight:new T}}return e[t.id]=i,i}}}function I0(){let e={};return{get:function(t){if(void 0!==e[t.id])return e[t.id];let i;switch(t.type){case"DirectionalLight":case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=i,i}}}var D0=0;function N0(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function F0(e,t){let i=new L0,r=I0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let s=0;s<9;s++)n.probe.push(new T);let a=new T,l=new me,h=new me;return{setup:function s(a,l){let h=0,u=0,c=0;for(let d=0;d<9;d++)n.probe[d].set(0,0,0);let p=0,f=0,m=0,g=0,$=0,v=0,x=0,y=0,b=0,_=0;a.sort(N0);let S=!0!==l?Math.PI:1;for(let w=0,M=a.length;w<M;w++){let E=a[w],A=E.color,C=E.intensity,L=E.distance,R=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=A.r*C*S,u+=A.g*C*S,c+=A.b*C*S;else if(E.isLightProbe)for(let P=0;P<9;P++)n.probe[P].addScaledVector(E.sh.coefficients[P],C);else if(E.isDirectionalLight){let I=i.get(E);if(I.color.copy(E.color).multiplyScalar(E.intensity*S),E.castShadow){let D=E.shadow,N=r.get(E);N.shadowBias=D.bias,N.shadowNormalBias=D.normalBias,N.shadowRadius=D.radius,N.shadowMapSize=D.mapSize,n.directionalShadow[p]=N,n.directionalShadowMap[p]=R,n.directionalShadowMatrix[p]=E.shadow.matrix,v++}n.directional[p]=I,p++}else if(E.isSpotLight){let O=i.get(E);O.position.setFromMatrixPosition(E.matrixWorld),O.color.copy(A).multiplyScalar(C*S),O.distance=L,O.coneCos=Math.cos(E.angle),O.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),O.decay=E.decay,n.spot[m]=O;let z=E.shadow;if(E.map&&(n.spotLightMap[b]=E.map,b++,z.updateMatrices(E),E.castShadow&&_++),n.spotLightMatrix[m]=z.matrix,E.castShadow){let U=r.get(E);U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,n.spotShadow[m]=U,n.spotShadowMap[m]=R,y++}m++}else if(E.isRectAreaLight){let B=i.get(E);B.color.copy(A).multiplyScalar(C),B.halfWidth.set(.5*E.width,0,0),B.halfHeight.set(0,.5*E.height,0),n.rectArea[g]=B,g++}else if(E.isPointLight){let F=i.get(E);if(F.color.copy(E.color).multiplyScalar(E.intensity*S),F.distance=E.distance,F.decay=E.decay,E.castShadow){let k=E.shadow,H=r.get(E);H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,n.pointShadow[f]=H,n.pointShadowMap[f]=R,n.pointShadowMatrix[f]=E.shadow.matrix,x++}n.point[f]=F,f++}else if(E.isHemisphereLight){let V=i.get(E);V.skyColor.copy(E.color).multiplyScalar(C*S),V.groundColor.copy(E.groundColor).multiplyScalar(C*S),n.hemi[$]=V,$++}}g>0&&(t.isWebGL2||!0===e.has("OES_texture_float_linear")?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):!0===e.has("OES_texture_half_float_linear")?(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=c;let G=n.hash;(G.directionalLength!==p||G.pointLength!==f||G.spotLength!==m||G.rectAreaLength!==g||G.hemiLength!==$||G.numDirectionalShadows!==v||G.numPointShadows!==x||G.numSpotShadows!==y||G.numSpotMaps!==b)&&(n.directional.length=p,n.spot.length=m,n.rectArea.length=g,n.point.length=f,n.hemi.length=$,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+b-_,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=_,G.directionalLength=p,G.pointLength=f,G.spotLength=m,G.rectAreaLength=g,G.hemiLength=$,G.numDirectionalShadows=v,G.numPointShadows=x,G.numSpotShadows=y,G.numSpotMaps=b,n.version=D0++)},setupView:function e(t,i){let r=0,s=0,u=0,c=0,d=0,p=i.matrixWorldInverse;for(let f=0,m=t.length;f<m;f++){let g=t[f];if(g.isDirectionalLight){let $=n.directional[r];$.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),$.direction.sub(a),$.direction.transformDirection(p),r++}else if(g.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(p),u++}else if(g.isRectAreaLight){let x=n.rectArea[c];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(p),h.identity(),l.copy(g.matrixWorld),l.premultiply(p),h.extractRotation(l),x.halfWidth.set(.5*g.width,0,0),x.halfHeight.set(0,.5*g.height,0),x.halfWidth.applyMatrix4(h),x.halfHeight.applyMatrix4(h),c++}else if(g.isPointLight){let y=n.point[s];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(p),s++}else if(g.isHemisphereLight){let b=n.hemi[d];b.direction.setFromMatrixPosition(g.matrixWorld),b.direction.transformDirection(p),d++}}},state:n}}function Mh(e,t){let i=new F0(e,t),r=[],n=[];return{init:function e(){r.length=0,n.length=0},state:{lightsArray:r,shadowsArray:n,lights:i},setupLights:function e(t){i.setup(r,t)},setupLightsView:function e(t){i.setupView(r,t)},pushLight:function e(t){r.push(t)},pushShadow:function e(t){n.push(t)}}}function O0(e,t){let i=new WeakMap;return{get:function r(n,s=0){let a=i.get(n),l;return void 0===a?(l=new Mh(e,t),i.set(n,[l])):s>=a.length?(l=new Mh(e,t),a.push(l)):l=a[s],l},dispose:function e(){i=new WeakMap}}}var Ba=class extends Et{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ua=class extends Et{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new T,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function U0(e,t,i){let r=new ks,n=new se,s=new se,a=new Ue,l=new Ba({depthPacking:qd}),h=new Ua,u={},c=i.maxTextureSize,d={0:Tt,1:Qt,2:St},p=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:z0,fragmentShader:B0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let m=new ht;m.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ze(m,p),$=this;function v(i,r){let s=t.update(g);p.defines.VSM_SAMPLES!==i.blurSamples&&(p.defines.VSM_SAMPLES=i.blurSamples,f.defines.VSM_SAMPLES=i.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),null===i.mapPass&&(i.mapPass=new Mn(n.x,n.y)),p.uniforms.shadow_pass.value=i.map.texture,p.uniforms.resolution.value=i.mapSize,p.uniforms.radius.value=i.radius,e.setRenderTarget(i.mapPass),e.clear(),e.renderBufferDirect(r,null,s,p,g,null),f.uniforms.shadow_pass.value=i.mapPass.texture,f.uniforms.resolution.value=i.mapSize,f.uniforms.radius.value=i.radius,e.setRenderTarget(i.map),e.clear(),e.renderBufferDirect(r,null,s,f,g,null)}function x(t,i,r,n,s,a){let c=null,p=!0===r.isPointLight?t.customDistanceMaterial:t.customDepthMaterial;if(c=void 0!==p?p:!0===r.isPointLight?h:l,e.localClippingEnabled&&!0===i.clipShadows&&Array.isArray(i.clippingPlanes)&&0!==i.clippingPlanes.length||i.displacementMap&&0!==i.displacementScale||i.alphaMap&&i.alphaTest>0||i.map&&i.alphaTest>0){let f=c.uuid,m=i.uuid,g=u[f];void 0===g&&(g={},u[f]=g);let $=g[m];void 0===$&&($=c.clone(),g[m]=$),c=$}return c.visible=i.visible,c.wireframe=i.wireframe,a===Es?c.side=null!==i.shadowSide?i.shadowSide:i.side:c.side=null!==i.shadowSide?i.shadowSide:d[i.side],c.alphaMap=i.alphaMap,c.alphaTest=i.alphaTest,c.map=i.map,c.clipShadows=i.clipShadows,c.clippingPlanes=i.clippingPlanes,c.clipIntersection=i.clipIntersection,c.displacementMap=i.displacementMap,c.displacementScale=i.displacementScale,c.displacementBias=i.displacementBias,c.wireframeLinewidth=i.wireframeLinewidth,c.linewidth=i.linewidth,!0===r.isPointLight&&!0===c.isMeshDistanceMaterial&&(c.referencePosition.setFromMatrixPosition(r.matrixWorld),c.nearDistance=n,c.farDistance=s),c}function y(i,n,s,a,l){if(!1===i.visible)return;if(i.layers.test(n.layers)&&(i.isMesh||i.isLine||i.isPoints)&&(i.castShadow||i.receiveShadow&&l===Es)&&(!i.frustumCulled||r.intersectsObject(i))){i.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse,i.matrixWorld);let h=t.update(i),u=i.material;if(Array.isArray(u)){let c=h.groups;for(let d=0,p=c.length;d<p;d++){let f=c[d],m=u[f.materialIndex];if(m&&m.visible){let g=x(i,m,a,s.near,s.far,l);e.renderBufferDirect(s,null,h,g,i,f)}}}else if(u.visible){let $=x(i,u,a,s.near,s.far,l);e.renderBufferDirect(s,null,h,$,i,null)}}let v=i.children;for(let b=0,_=v.length;b<_;b++)y(v[b],n,s,a,l)}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yh,this.render=function(t,i,l){if(!1===$.enabled||!1===$.autoUpdate&&!1===$.needsUpdate||0===t.length)return;let h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.state;p.setBlending(Fn),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);for(let f=0,m=t.length;f<m;f++){let g=t[f],x=g.shadow;if(void 0===x){console.warn("THREE.WebGLShadowMap:",g,"has no shadow.");continue}if(!1===x.autoUpdate&&!1===x.needsUpdate)continue;n.copy(x.mapSize);let b=x.getFrameExtents();if(n.multiply(b),s.copy(x.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(s.x=Math.floor(c/b.x),n.x=s.x*b.x,x.mapSize.x=s.x),n.y>c&&(s.y=Math.floor(c/b.y),n.y=s.y*b.y,x.mapSize.y=s.y)),null===x.map){let _=this.type!==Es?{minFilter:ct,magFilter:ct}:{};x.map=new Mn(n.x,n.y,_),x.map.texture.name=g.name+".shadowMap",x.camera.updateProjectionMatrix()}e.setRenderTarget(x.map),e.clear();let S=x.getViewportCount();for(let w=0;w<S;w++){let M=x.getViewport(w);a.set(s.x*M.x,s.y*M.y,s.x*M.z,s.y*M.w),p.viewport(a),x.updateMatrices(g,w),r=x.getFrustum(),y(i,l,x.camera,g,this.type)}!0!==x.isPointLightShadow&&this.type===Es&&v(x,l),x.needsUpdate=!1}$.needsUpdate=!1,e.setRenderTarget(h,u,d)}}function k0(e,t,i){let r=i.isWebGL2,n=new function t(){let i=!1,r=new Ue,n=null,s=new Ue(0,0,0,0);return{setMask:function(t){n===t||i||(e.colorMask(t,t,t,t),n=t)},setLocked:function(e){i=e},setClear:function(t,i,n,a,l){!0===l&&(t*=a,i*=a,n*=a),r.set(t,i,n,a),!1===s.equals(r)&&(e.clearColor(t,i,n,a),s.copy(r))},reset:function(){i=!1,n=null,s.set(-1,0,0,0)}}},s=new function t(){let i=!1,r=null,n=null,s=null;return{setTest:function(e){e?H(2929):V(2929)},setMask:function(t){r===t||i||(e.depthMask(t),r=t)},setFunc:function(t){if(n!==t){switch(t){case ud:e.depthFunc(512);break;case dd:e.depthFunc(519);break;case fd:e.depthFunc(513);break;case wa:e.depthFunc(515);break;case pd:e.depthFunc(514);break;case md:e.depthFunc(518);break;case gd:e.depthFunc(516);break;case xd:e.depthFunc(517);break;default:e.depthFunc(515)}n=t}},setLocked:function(e){i=e},setClear:function(t){s!==t&&(e.clearDepth(t),s=t)},reset:function(){i=!1,r=null,n=null,s=null}}},a=new function t(){let i=!1,r=null,n=null,s=null,a=null,l=null,h=null,u=null,c=null;return{setTest:function(e){i||(e?H(2960):V(2960))},setMask:function(t){r===t||i||(e.stencilMask(t),r=t)},setFunc:function(t,i,r){(n!==t||s!==i||a!==r)&&(e.stencilFunc(t,i,r),n=t,s=i,a=r)},setOp:function(t,i,r){(l!==t||h!==i||u!==r)&&(e.stencilOp(t,i,r),l=t,h=i,u=r)},setLocked:function(e){i=e},setClear:function(t){c!==t&&(e.clearStencil(t),c=t)},reset:function(){i=!1,r=null,n=null,s=null,a=null,l=null,h=null,u=null,c=null}}},l=new WeakMap,h=new WeakMap,u={},c={},d=new WeakMap,p=[],f=null,m=!1,g=null,$=null,v=null,x=null,y=null,b=null,_=null,S=!1,w=null,M=null,E=null,A=null,C=null,L=e.getParameter(35661),R=!1,P=0,I=e.getParameter(7938);-1!==I.indexOf("WebGL")?R=(P=parseFloat(/^WebGL (\d)/.exec(I)[1]))>=1:-1!==I.indexOf("OpenGL ES")&&(R=(P=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]))>=2);let D=null,N={},O=e.getParameter(3088),z=e.getParameter(2978),U=new Ue().fromArray(O),B=new Ue().fromArray(z);function F(t,i,r){let n=new Uint8Array(4),s=e.createTexture();e.bindTexture(t,s),e.texParameteri(t,10241,9728),e.texParameteri(t,10240,9728);for(let a=0;a<r;a++)e.texImage2D(i+a,0,6408,1,1,0,6408,5121,n);return s}let k={};function H(t){!0!==u[t]&&(e.enable(t),u[t]=!0)}function V(t){!1!==u[t]&&(e.disable(t),u[t]=!1)}k[3553]=F(3553,3553,1),k[34067]=F(34067,34069,6),n.setClear(0,0,0,1),s.setClear(1),a.setClear(0),H(2929),s.setFunc(wa),X(!1),Y(_l),H(2884),j(Fn);let G={[Bi]:32774,[ed]:32778,[td]:32779};if(r)G[bl]=32775,G[Ml]=32776;else{let W=t.get("EXT_blend_minmax");null!==W&&(G[bl]=W.MIN_EXT,G[Ml]=W.MAX_EXT)}let q={[nd]:0,[id]:1,[sd]:768,[Zh]:770,[hd]:776,[cd]:774,[od]:772,[rd]:769,[Jh]:771,[ld]:775,[ad]:773};function j(t,i,r,n,s,a,l,h){if(t===Fn){!0===m&&(V(3042),m=!1);return}if(!1===m&&(H(3042),m=!0),t!==Qu){if(t!==g||h!==S){if(($!==Bi||y!==Bi)&&(e.blendEquation(32774),$=Bi,y=Bi),h)switch(t){case Hi:e.blendFuncSeparate(1,771,1,771);break;case Or:e.blendFunc(1,1);break;case yl:e.blendFuncSeparate(0,769,0,1);break;case vl:e.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",t)}else switch(t){case Hi:e.blendFuncSeparate(770,771,1,771);break;case Or:e.blendFunc(770,1);break;case yl:e.blendFuncSeparate(0,769,0,1);break;case vl:e.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",t)}v=null,x=null,b=null,_=null,g=t,S=h}return}s=s||i,a=a||r,l=l||n,(i!==$||s!==y)&&(e.blendEquationSeparate(G[i],G[s]),$=i,y=s),(r!==v||n!==x||a!==b||l!==_)&&(e.blendFuncSeparate(q[r],q[n],q[a],q[l]),v=r,x=n,b=a,_=l),g=t,S=!1}function X(t){w!==t&&(t?e.frontFace(2304):e.frontFace(2305),w=t)}function Y(t){t!==ju?(H(2884),t!==M&&(t===_l?e.cullFace(1029):t===Ku?e.cullFace(1028):e.cullFace(1032))):V(2884),M=t}function K(t,i,r){t?(H(32823),(A!==i||C!==r)&&(e.polygonOffset(i,r),A=i,C=r)):V(32823)}return{buffers:{color:n,depth:s,stencil:a},enable:H,disable:V,bindFramebuffer:function t(i,n){return c[i]!==n&&(e.bindFramebuffer(i,n),c[i]=n,r&&(36009===i&&(c[36160]=n),36160===i&&(c[36009]=n)),!0)},drawBuffers:function r(n,s){let a=p,l=!1;if(n){if(void 0===(a=d.get(s))&&(a=[],d.set(s,a)),n.isWebGLMultipleRenderTargets){let h=n.texture;if(a.length!==h.length||36064!==a[0]){for(let u=0,c=h.length;u<c;u++)a[u]=36064+u;a.length=h.length,l=!0}}else 36064!==a[0]&&(a[0]=36064,l=!0)}else 1029!==a[0]&&(a[0]=1029,l=!0);l&&(i.isWebGL2?e.drawBuffers(a):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(a))},useProgram:function t(i){return f!==i&&(e.useProgram(i),f=i,!0)},setBlending:j,setMaterial:function e(t,i){t.side===St?V(2884):H(2884);let r=t.side===Tt;i&&(r=!r),X(r),t.blending===Hi&&!1===t.transparent?j(Fn):j(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.premultipliedAlpha),s.setFunc(t.depthFunc),s.setTest(t.depthTest),s.setMask(t.depthWrite),n.setMask(t.colorWrite);let l=t.stencilWrite;a.setTest(l),l&&(a.setMask(t.stencilWriteMask),a.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),a.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),K(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),!0===t.alphaToCoverage?H(32926):V(32926)},setFlipSided:X,setCullFace:Y,setLineWidth:function t(i){i!==E&&(R&&e.lineWidth(i),E=i)},setPolygonOffset:K,setScissorTest:function e(t){t?H(3089):V(3089)},activeTexture:function t(i){void 0===i&&(i=33984+L-1),D!==i&&(e.activeTexture(i),D=i)},bindTexture:function t(i,r,n){void 0===n&&(n=null===D?33984+L-1:D);let s=N[n];void 0===s&&(s={type:void 0,texture:void 0},N[n]=s),(s.type!==i||s.texture!==r)&&(D!==n&&(e.activeTexture(n),D=n),e.bindTexture(i,r||k[i]),s.type=i,s.texture=r)},unbindTexture:function t(){let i=N[D];void 0!==i&&void 0!==i.type&&(e.bindTexture(i.type,null),i.type=void 0,i.texture=void 0)},compressedTexImage2D:function t(){try{e.compressedTexImage2D.apply(e,arguments)}catch(i){console.error("THREE.WebGLState:",i)}},compressedTexImage3D:function t(){try{e.compressedTexImage3D.apply(e,arguments)}catch(i){console.error("THREE.WebGLState:",i)}},texImage2D:function t(){try{e.texImage2D.apply(e,arguments)}catch(i){console.error("THREE.WebGLState:",i)}},texImage3D:function t(){try{e.texImage3D.apply(e,arguments)}catch(i){console.error("THREE.WebGLState:",i)}},updateUBOMapping:function t(i,r){let n=h.get(r);void 0===n&&(n=new WeakMap,h.set(r,n));let s=n.get(i);void 0===s&&(s=e.getUniformBlockIndex(r,i.name),n.set(i,s))},uniformBlockBinding:function t(i,r){let n=h.get(r).get(i);l.get(i)!==n&&(e.uniformBlockBinding(r,n,i.__bindingPointIndex),l.set(i,n))},texStorage2D:function t(){try{e.texStorage2D.apply(e,arguments)}catch(i){console.error("THREE.WebGLState:",i)}},texStorage3D:function t(){try{e.texStorage3D.apply(e,arguments)}catch(i){console.error("THREE.WebGLState:",i)}},texSubImage2D:function t(){try{e.texSubImage2D.apply(e,arguments)}catch(i){console.error("THREE.WebGLState:",i)}},texSubImage3D:function t(){try{e.texSubImage3D.apply(e,arguments)}catch(i){console.error("THREE.WebGLState:",i)}},compressedTexSubImage2D:function t(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(i){console.error("THREE.WebGLState:",i)}},compressedTexSubImage3D:function t(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(i){console.error("THREE.WebGLState:",i)}},scissor:function t(i){!1===U.equals(i)&&(e.scissor(i.x,i.y,i.z,i.w),U.copy(i))},viewport:function t(i){!1===B.equals(i)&&(e.viewport(i.x,i.y,i.z,i.w),B.copy(i))},reset:function t(){e.disable(3042),e.disable(2884),e.disable(2929),e.disable(32823),e.disable(3089),e.disable(2960),e.disable(32926),e.blendEquation(32774),e.blendFunc(1,0),e.blendFuncSeparate(1,0,1,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(513),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(519,0,4294967295),e.stencilOp(7680,7680,7680),e.clearStencil(0),e.cullFace(1029),e.frontFace(2305),e.polygonOffset(0,0),e.activeTexture(33984),e.bindFramebuffer(36160,null),!0===r&&(e.bindFramebuffer(36009,null),e.bindFramebuffer(36008,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},D=null,N={},c={},d=new WeakMap,p=[],f=null,m=!1,g=null,$=null,v=null,x=null,y=null,b=null,_=null,S=!1,w=null,M=null,E=null,A=null,C=null,U.set(0,0,e.canvas.width,e.canvas.height),B.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),a.reset()}}}function V0(e,t,i,r,n,s,a){let l=n.isWebGL2,h=n.maxTextures,u=n.maxCubemapSize,c=n.maxTextureSize,d=n.maxSamples,p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f="undefined"!=typeof navigator&&/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap,g,$=new WeakMap,v=!1;try{v="undefined"!=typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext("2d")}catch(x){}function y(e,t){return v?new OffscreenCanvas(e,t):Bs("canvas")}function b(e,t,i,r){let n=1;if((e.width>r||e.height>r)&&(n=r/Math.max(e.width,e.height)),n<1||!0===t){if(!("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap))return"data"in e&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+e.width+"x"+e.height+")."),e;{let s=t?kr:Math.floor,a=s(n*e.width),l=s(n*e.height);void 0===g&&(g=y(a,l));let h=i?y(a,l):g;return h.width=a,h.height=l,h.getContext("2d").drawImage(e,0,0,a,l),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+e.width+"x"+e.height+") to ("+a+"x"+l+")."),h}}return e}function _(e){return Ca(e.width)&&Ca(e.height)}function S(e,t){return e.generateMipmaps&&t&&e.minFilter!==ct&&e.minFilter!==ut}function w(t){e.generateMipmap(t)}function M(i,r,n,s,a=!1){if(!1===l)return r;if(null!==i){if(void 0!==e[i])return e[i];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+i+"'")}let h=r;return 6403===r&&(5126===n&&(h=33326),5131===n&&(h=33325),5121===n&&(h=33321)),33319===r&&(5126===n&&(h=33328),5131===n&&(h=33327),5121===n&&(h=33323)),6408===r&&(5126===n&&(h=34836),5131===n&&(h=34842),5121===n&&(h=s===Be&&!1===a?35907:32856),32819===n&&(h=32854),32820===n&&(h=32855)),(33325===h||33326===h||33327===h||33328===h||34842===h||34836===h)&&t.get("EXT_color_buffer_float"),h}function E(e,t,i){return!0===S(e,i)||e.isFramebufferTexture&&e.minFilter!==ct&&e.minFilter!==ut?Math.log2(Math.max(t.width,t.height))+1:void 0!==e.mipmaps&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function A(e){return e===ct||e===zr||e===Br?9728:9729}function C(e){let t=e.target;t.removeEventListener("dispose",C),function e(t){let i=r.get(t);if(void 0===i.__webglInit)return;let n=t.source,s=$.get(n);if(s){let a=s[i.__cacheKey];a.usedTimes--,0===a.usedTimes&&R(t),0===Object.keys(s).length&&$.delete(n)}r.remove(t)}(t),t.isVideoTexture&&m.delete(t)}function L(t){let i=t.target;i.removeEventListener("dispose",L),function t(i){let n=i.texture,s=r.get(i),l=r.get(n);if(void 0!==l.__webglTexture&&(e.deleteTexture(l.__webglTexture),a.memory.textures--),i.depthTexture&&i.depthTexture.dispose(),i.isWebGLCubeRenderTarget)for(let h=0;h<6;h++)e.deleteFramebuffer(s.__webglFramebuffer[h]),s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer[h]);else{if(e.deleteFramebuffer(s.__webglFramebuffer),s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer),s.__webglMultisampledFramebuffer&&e.deleteFramebuffer(s.__webglMultisampledFramebuffer),s.__webglColorRenderbuffer)for(let u=0;u<s.__webglColorRenderbuffer.length;u++)s.__webglColorRenderbuffer[u]&&e.deleteRenderbuffer(s.__webglColorRenderbuffer[u]);s.__webglDepthRenderbuffer&&e.deleteRenderbuffer(s.__webglDepthRenderbuffer)}if(i.isWebGLMultipleRenderTargets)for(let c=0,d=n.length;c<d;c++){let p=r.get(n[c]);p.__webglTexture&&(e.deleteTexture(p.__webglTexture),a.memory.textures--),r.remove(n[c])}r.remove(n),r.remove(i)}(i)}function R(t){let i=r.get(t);e.deleteTexture(i.__webglTexture);let n=t.source;delete $.get(n)[i.__cacheKey],a.memory.textures--}let P=0;function I(e,t){var n;let s=r.get(e),l;if(e.isVideoTexture&&(n=e,l=a.render.frame,m.get(n)!==l&&(m.set(n,l),n.update())),!1===e.isRenderTargetTexture&&e.version>0&&s.__version!==e.version){let h=e.image;if(null===h)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(!1===h.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(s,e,t);return}}i.bindTexture(3553,s.__webglTexture,33984+t)}let D={[li]:10497,[zt]:33071,[Ns]:33648},N={[ct]:9728,[zr]:9984,[Br]:9986,[ut]:9729,[fc]:9985,[gi]:9987};function O(i,s,a){if(a?(e.texParameteri(i,10242,D[s.wrapS]),e.texParameteri(i,10243,D[s.wrapT]),(32879===i||35866===i)&&e.texParameteri(i,32882,D[s.wrapR]),e.texParameteri(i,10240,N[s.magFilter]),e.texParameteri(i,10241,N[s.minFilter])):(e.texParameteri(i,10242,33071),e.texParameteri(i,10243,33071),(32879===i||35866===i)&&e.texParameteri(i,32882,33071),(s.wrapS!==zt||s.wrapT!==zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(i,10240,A(s.magFilter)),e.texParameteri(i,10241,A(s.minFilter)),s.minFilter!==ct&&s.minFilter!==ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),!0===t.has("EXT_texture_filter_anisotropic")){let h=t.get("EXT_texture_filter_anisotropic");(s.type!==Nn||!1!==t.has("OES_texture_float_linear"))&&(!1!==l||s.type!==Fs||!1!==t.has("OES_texture_half_float_linear"))&&(s.anisotropy>1||r.get(s).__currentAnisotropy)&&(e.texParameterf(i,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,n.getMaxAnisotropy())),r.get(s).__currentAnisotropy=s.anisotropy)}}function z(t,i){var r;let n=!1;void 0===t.__webglInit&&(t.__webglInit=!0,i.addEventListener("dispose",C));let s=i.source,l=$.get(s);void 0===l&&(l={},$.set(s,l));let h,u=(r=i,(h=[]).push(r.wrapS),h.push(r.wrapT),h.push(r.wrapR||0),h.push(r.magFilter),h.push(r.minFilter),h.push(r.anisotropy),h.push(r.internalFormat),h.push(r.format),h.push(r.type),h.push(r.generateMipmaps),h.push(r.premultiplyAlpha),h.push(r.flipY),h.push(r.unpackAlignment),h.push(r.encoding),h.join());if(u!==t.__cacheKey){void 0===l[u]&&(l[u]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,n=!0),l[u].usedTimes++;let c=l[t.__cacheKey];void 0!==c&&(l[t.__cacheKey].usedTimes--,0===c.usedTimes&&R(i)),t.__cacheKey=u,t.__webglTexture=l[u].texture}return n}function U(t,n,a){let h=3553;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(h=35866),n.isData3DTexture&&(h=32879);let u=z(t,n),d=n.source;i.bindTexture(h,t.__webglTexture,33984+a);let p=r.get(d);if(d.version!==p.__version||!0===u){var f;i.activeTexture(33984+a),e.pixelStorei(37440,n.flipY),e.pixelStorei(37441,n.premultiplyAlpha),e.pixelStorei(3317,n.unpackAlignment),e.pixelStorei(37443,0);let m=(f=n,!l&&(f.wrapS!==zt||f.wrapT!==zt||f.minFilter!==ct&&f.minFilter!==ut)&&!1===_(n.image)),g=b(n.image,m,!1,c);g=G(n,g);let $=_(g)||l,v=s.convert(n.format,n.encoding),x=s.convert(n.type),y=M(n.internalFormat,v,x,n.encoding,n.isVideoTexture);O(h,n,$);let A,C=n.mipmaps,L=l&&!0!==n.isVideoTexture,R=void 0===p.__version||!0===u,P=E(n,g,$);if(n.isDepthTexture)y=6402,l?y=n.type===Nn?36012:n.type===oi?33190:n.type===Gi?35056:33189:n.type===Nn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),n.format===ai&&6402===y&&n.type!==$h&&n.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),n.type=oi,x=s.convert(n.type)),n.format===Yi&&6402===y&&(y=34041,n.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),n.type=Gi,x=s.convert(n.type))),R&&(L?i.texStorage2D(3553,1,y,g.width,g.height):i.texImage2D(3553,0,y,g.width,g.height,0,v,x,null));else if(n.isDataTexture){if(C.length>0&&$){L&&R&&i.texStorage2D(3553,P,y,C[0].width,C[0].height);for(let I=0,D=C.length;I<D;I++)A=C[I],L?i.texSubImage2D(3553,I,0,0,A.width,A.height,v,x,A.data):i.texImage2D(3553,I,y,A.width,A.height,0,v,x,A.data);n.generateMipmaps=!1}else L?(R&&i.texStorage2D(3553,P,y,g.width,g.height),i.texSubImage2D(3553,0,0,0,g.width,g.height,v,x,g.data)):i.texImage2D(3553,0,y,g.width,g.height,0,v,x,g.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){L&&R&&i.texStorage3D(35866,P,y,C[0].width,C[0].height,g.depth);for(let N=0,U=C.length;N<U;N++)A=C[N],n.format!==Ht?null!==v?L?i.compressedTexSubImage3D(35866,N,0,0,0,A.width,A.height,g.depth,v,A.data,0,0):i.compressedTexImage3D(35866,N,y,A.width,A.height,g.depth,0,A.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?i.texSubImage3D(35866,N,0,0,0,A.width,A.height,g.depth,v,x,A.data):i.texImage3D(35866,N,y,A.width,A.height,g.depth,0,v,x,A.data)}else{L&&R&&i.texStorage2D(3553,P,y,C[0].width,C[0].height);for(let B=0,F=C.length;B<F;B++)A=C[B],n.format!==Ht?null!==v?L?i.compressedTexSubImage2D(3553,B,0,0,A.width,A.height,v,A.data):i.compressedTexImage2D(3553,B,y,A.width,A.height,0,A.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?i.texSubImage2D(3553,B,0,0,A.width,A.height,v,x,A.data):i.texImage2D(3553,B,y,A.width,A.height,0,v,x,A.data)}}else if(n.isDataArrayTexture)L?(R&&i.texStorage3D(35866,P,y,g.width,g.height,g.depth),i.texSubImage3D(35866,0,0,0,0,g.width,g.height,g.depth,v,x,g.data)):i.texImage3D(35866,0,y,g.width,g.height,g.depth,0,v,x,g.data);else if(n.isData3DTexture)L?(R&&i.texStorage3D(32879,P,y,g.width,g.height,g.depth),i.texSubImage3D(32879,0,0,0,0,g.width,g.height,g.depth,v,x,g.data)):i.texImage3D(32879,0,y,g.width,g.height,g.depth,0,v,x,g.data);else if(n.isFramebufferTexture){if(R){if(L)i.texStorage2D(3553,P,y,g.width,g.height);else{let k=g.width,H=g.height;for(let V=0;V<P;V++)i.texImage2D(3553,V,y,k,H,0,v,x,null),k>>=1,H>>=1}}}else if(C.length>0&&$){L&&R&&i.texStorage2D(3553,P,y,C[0].width,C[0].height);for(let W=0,q=C.length;W<q;W++)A=C[W],L?i.texSubImage2D(3553,W,0,0,v,x,A):i.texImage2D(3553,W,y,v,x,A);n.generateMipmaps=!1}else L?(R&&i.texStorage2D(3553,P,y,g.width,g.height),i.texSubImage2D(3553,0,0,0,v,x,g)):i.texImage2D(3553,0,y,v,x,g);S(n,$)&&w(h),p.__version=d.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function B(t,n,a,l,h){let u=s.convert(a.format,a.encoding),c=s.convert(a.type),d=M(a.internalFormat,u,c,a.encoding);r.get(n).__hasExternalTextures||(32879===h||35866===h?i.texImage3D(h,0,d,n.width,n.height,n.depth,0,u,c,null):i.texImage2D(h,0,d,n.width,n.height,0,u,c,null)),i.bindFramebuffer(36160,t),V(n)?p.framebufferTexture2DMultisampleEXT(36160,l,h,r.get(a).__webglTexture,0,H(n)):(3553===h||h>=34069&&h<=34074)&&e.framebufferTexture2D(36160,l,h,r.get(a).__webglTexture,0),i.bindFramebuffer(36160,null)}function F(t,i,r){if(e.bindRenderbuffer(36161,t),i.depthBuffer&&!i.stencilBuffer){let n=33189;if(r||V(i)){let a=i.depthTexture;a&&a.isDepthTexture&&(a.type===Nn?n=36012:a.type===oi&&(n=33190));let l=H(i);V(i)?p.renderbufferStorageMultisampleEXT(36161,l,n,i.width,i.height):e.renderbufferStorageMultisample(36161,l,n,i.width,i.height)}else e.renderbufferStorage(36161,n,i.width,i.height);e.framebufferRenderbuffer(36160,36096,36161,t)}else if(i.depthBuffer&&i.stencilBuffer){let h=H(i);r&&!1===V(i)?e.renderbufferStorageMultisample(36161,h,35056,i.width,i.height):V(i)?p.renderbufferStorageMultisampleEXT(36161,h,35056,i.width,i.height):e.renderbufferStorage(36161,34041,i.width,i.height),e.framebufferRenderbuffer(36160,33306,36161,t)}else{let u=!0===i.isWebGLMultipleRenderTargets?i.texture:[i.texture];for(let c=0;c<u.length;c++){let d=u[c],f=s.convert(d.format,d.encoding),m=s.convert(d.type),g=M(d.internalFormat,f,m,d.encoding),$=H(i);r&&!1===V(i)?e.renderbufferStorageMultisample(36161,$,g,i.width,i.height):V(i)?p.renderbufferStorageMultisampleEXT(36161,$,g,i.width,i.height):e.renderbufferStorage(36161,g,i.width,i.height)}}e.bindRenderbuffer(36161,null)}function k(t){let n=r.get(t),s=!0===t.isWebGLCubeRenderTarget;if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(s)throw Error("target.depthTexture not supported in Cube render targets");!function t(n,s){if(s&&s.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(36160,n),!(s.depthTexture&&s.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");r.get(s.depthTexture).__webglTexture&&s.depthTexture.image.width===s.width&&s.depthTexture.image.height===s.height||(s.depthTexture.image.width=s.width,s.depthTexture.image.height=s.height,s.depthTexture.needsUpdate=!0),I(s.depthTexture,0);let a=r.get(s.depthTexture).__webglTexture,l=H(s);if(s.depthTexture.format===ai)V(s)?p.framebufferTexture2DMultisampleEXT(36160,36096,3553,a,0,l):e.framebufferTexture2D(36160,36096,3553,a,0);else if(s.depthTexture.format===Yi)V(s)?p.framebufferTexture2DMultisampleEXT(36160,33306,3553,a,0,l):e.framebufferTexture2D(36160,33306,3553,a,0);else throw Error("Unknown depthTexture format")}(n.__webglFramebuffer,t)}else if(s){n.__webglDepthbuffer=[];for(let a=0;a<6;a++)i.bindFramebuffer(36160,n.__webglFramebuffer[a]),n.__webglDepthbuffer[a]=e.createRenderbuffer(),F(n.__webglDepthbuffer[a],t,!1)}else i.bindFramebuffer(36160,n.__webglFramebuffer),n.__webglDepthbuffer=e.createRenderbuffer(),F(n.__webglDepthbuffer,t,!1);i.bindFramebuffer(36160,null)}function H(e){return Math.min(d,e.samples)}function V(e){let i=r.get(e);return l&&e.samples>0&&!0===t.has("WEBGL_multisampled_render_to_texture")&&!1!==i.__useRenderToTexture}function G(e,i){let r=e.encoding,n=e.format,s=e.type;return!0===e.isCompressedTexture||!0===e.isVideoTexture||e.format===Ea||r!==di&&(r===Be?!1===l?!0===t.has("EXT_sRGB")&&n===Ht?(e.format=Ea,e.minFilter=ut,e.generateMipmaps=!1):i=Vr.sRGBToLinear(i):(n!==Ht||s!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",r)),i}this.allocateTextureUnit=function e(){let t=P;return t>=h&&console.warn("THREE.WebGLTextures: Trying to use "+t+" texture units while this GPU supports only "+h),P+=1,t},this.resetTextureUnits=function e(){P=0},this.setTexture2D=I,this.setTexture2DArray=function e(t,n){let s=r.get(t);if(t.version>0&&s.__version!==t.version){U(s,t,n);return}i.bindTexture(35866,s.__webglTexture,33984+n)},this.setTexture3D=function e(t,n){let s=r.get(t);if(t.version>0&&s.__version!==t.version){U(s,t,n);return}i.bindTexture(32879,s.__webglTexture,33984+n)},this.setTextureCube=function t(n,a){let h=r.get(n);if(n.version>0&&h.__version!==n.version){(function t(n,a,h){if(6!==a.image.length)return;let c=z(n,a),d=a.source;i.bindTexture(34067,n.__webglTexture,33984+h);let p=r.get(d);if(d.version!==p.__version||!0===c){i.activeTexture(33984+h),e.pixelStorei(37440,a.flipY),e.pixelStorei(37441,a.premultiplyAlpha),e.pixelStorei(3317,a.unpackAlignment),e.pixelStorei(37443,0);let f=a.isCompressedTexture||a.image[0].isCompressedTexture,m=a.image[0]&&a.image[0].isDataTexture,g=[];for(let $=0;$<6;$++)f||m?g[$]=m?a.image[$].image:a.image[$]:g[$]=b(a.image[$],!1,!0,u),g[$]=G(a,g[$]);let v=g[0],x=_(v)||l,y=s.convert(a.format,a.encoding),A=s.convert(a.type),C=M(a.internalFormat,y,A,a.encoding),L=l&&!0!==a.isVideoTexture,R=void 0===p.__version||!0===c,P=E(a,v,x);O(34067,a,x);let I;if(f){L&&R&&i.texStorage2D(34067,P,C,v.width,v.height);for(let D=0;D<6;D++){I=g[D].mipmaps;for(let N=0;N<I.length;N++){let U=I[N];a.format!==Ht?null!==y?L?i.compressedTexSubImage2D(34069+D,N,0,0,U.width,U.height,y,U.data):i.compressedTexImage2D(34069+D,N,C,U.width,U.height,0,U.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?i.texSubImage2D(34069+D,N,0,0,U.width,U.height,y,A,U.data):i.texImage2D(34069+D,N,C,U.width,U.height,0,y,A,U.data)}}}else{I=a.mipmaps,L&&R&&(I.length>0&&P++,i.texStorage2D(34067,P,C,g[0].width,g[0].height));for(let B=0;B<6;B++)if(m){L?i.texSubImage2D(34069+B,0,0,0,g[B].width,g[B].height,y,A,g[B].data):i.texImage2D(34069+B,0,C,g[B].width,g[B].height,0,y,A,g[B].data);for(let F=0;F<I.length;F++){let k=I[F].image[B].image;L?i.texSubImage2D(34069+B,F+1,0,0,k.width,k.height,y,A,k.data):i.texImage2D(34069+B,F+1,C,k.width,k.height,0,y,A,k.data)}}else{L?i.texSubImage2D(34069+B,0,0,0,y,A,g[B]):i.texImage2D(34069+B,0,C,y,A,g[B]);for(let H=0;H<I.length;H++){let V=I[H];L?i.texSubImage2D(34069+B,H+1,0,0,y,A,V.image[B]):i.texImage2D(34069+B,H+1,C,y,A,V.image[B])}}}S(a,x)&&w(34067),p.__version=d.version,a.onUpdate&&a.onUpdate(a)}n.__version=a.version})(h,n,a);return}i.bindTexture(34067,h.__webglTexture,33984+a)},this.rebindTextures=function e(t,i,n){let s=r.get(t);void 0!==i&&B(s.__webglFramebuffer,t,t.texture,36064,3553),void 0!==n&&k(t)},this.setupRenderTarget=function t(h){let u=h.texture,c=r.get(h),d=r.get(u);h.addEventListener("dispose",L),!0!==h.isWebGLMultipleRenderTargets&&(void 0===d.__webglTexture&&(d.__webglTexture=e.createTexture()),d.__version=u.version,a.memory.textures++);let p=!0===h.isWebGLCubeRenderTarget,f=!0===h.isWebGLMultipleRenderTargets,m=_(h)||l;if(p){c.__webglFramebuffer=[];for(let g=0;g<6;g++)c.__webglFramebuffer[g]=e.createFramebuffer()}else{if(c.__webglFramebuffer=e.createFramebuffer(),f){if(n.drawBuffers){let $=h.texture;for(let v=0,x=$.length;v<x;v++){let y=r.get($[v]);void 0===y.__webglTexture&&(y.__webglTexture=e.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.")}if(l&&h.samples>0&&!1===V(h)){let b=f?u:[u];c.__webglMultisampledFramebuffer=e.createFramebuffer(),c.__webglColorRenderbuffer=[],i.bindFramebuffer(36160,c.__webglMultisampledFramebuffer);for(let E=0;E<b.length;E++){let A=b[E];c.__webglColorRenderbuffer[E]=e.createRenderbuffer(),e.bindRenderbuffer(36161,c.__webglColorRenderbuffer[E]);let C=s.convert(A.format,A.encoding),R=s.convert(A.type),P=M(A.internalFormat,C,R,A.encoding,!0===h.isXRRenderTarget),I=H(h);e.renderbufferStorageMultisample(36161,I,P,h.width,h.height),e.framebufferRenderbuffer(36160,36064+E,36161,c.__webglColorRenderbuffer[E])}e.bindRenderbuffer(36161,null),h.depthBuffer&&(c.__webglDepthRenderbuffer=e.createRenderbuffer(),F(c.__webglDepthRenderbuffer,h,!0)),i.bindFramebuffer(36160,null)}}if(p){i.bindTexture(34067,d.__webglTexture),O(34067,u,m);for(let D=0;D<6;D++)B(c.__webglFramebuffer[D],h,u,36064,34069+D);S(u,m)&&w(34067),i.unbindTexture()}else if(f){let N=h.texture;for(let z=0,U=N.length;z<U;z++){let G=N[z],W=r.get(G);i.bindTexture(3553,W.__webglTexture),O(3553,G,m),B(c.__webglFramebuffer,h,G,36064+z,3553),S(G,m)&&w(3553)}i.unbindTexture()}else{let q=3553;(h.isWebGL3DRenderTarget||h.isWebGLArrayRenderTarget)&&(l?q=h.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(q,d.__webglTexture),O(q,u,m),B(c.__webglFramebuffer,h,u,36064,q),S(u,m)&&w(q),i.unbindTexture()}h.depthBuffer&&k(h)},this.updateRenderTargetMipmap=function e(t){let n=_(t)||l,s=!0===t.isWebGLMultipleRenderTargets?t.texture:[t.texture];for(let a=0,h=s.length;a<h;a++){let u=s[a];if(S(u,n)){let c=t.isWebGLCubeRenderTarget?34067:3553,d=r.get(u).__webglTexture;i.bindTexture(c,d),w(c),i.unbindTexture()}}},this.updateMultisampleRenderTarget=function t(n){if(l&&n.samples>0&&!1===V(n)){let s=n.isWebGLMultipleRenderTargets?n.texture:[n.texture],a=n.width,h=n.height,u=16384,c=[],d=n.stencilBuffer?33306:36096,p=r.get(n),m=!0===n.isWebGLMultipleRenderTargets;if(m)for(let g=0;g<s.length;g++)i.bindFramebuffer(36160,p.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064+g,36161,null),i.bindFramebuffer(36160,p.__webglFramebuffer),e.framebufferTexture2D(36009,36064+g,3553,null,0);i.bindFramebuffer(36008,p.__webglMultisampledFramebuffer),i.bindFramebuffer(36009,p.__webglFramebuffer);for(let $=0;$<s.length;$++){c.push(36064+$),n.depthBuffer&&c.push(d);let v=void 0!==p.__ignoreDepthValues&&p.__ignoreDepthValues;if(!1===v&&(n.depthBuffer&&(u|=256),n.stencilBuffer&&(u|=1024)),m&&e.framebufferRenderbuffer(36008,36064,36161,p.__webglColorRenderbuffer[$]),!0===v&&(e.invalidateFramebuffer(36008,[d]),e.invalidateFramebuffer(36009,[d])),m){let x=r.get(s[$]).__webglTexture;e.framebufferTexture2D(36009,36064,3553,x,0)}e.blitFramebuffer(0,0,a,h,0,0,a,h,u,9728),f&&e.invalidateFramebuffer(36008,c)}if(i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),m)for(let y=0;y<s.length;y++){i.bindFramebuffer(36160,p.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064+y,36161,p.__webglColorRenderbuffer[y]);let b=r.get(s[y]).__webglTexture;i.bindFramebuffer(36160,p.__webglFramebuffer),e.framebufferTexture2D(36009,36064+y,3553,b,0)}i.bindFramebuffer(36009,p.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=B,this.useMultisampledRTT=V}function H0(e,t,i){let r=i.isWebGL2;return{convert:function i(n,s=null){let a;if(n===hi)return 5121;if(n===Cd)return 32819;if(n===Pd)return 32820;if(n===Td)return 5120;if(n===Ad)return 5122;if(n===$h)return 5123;if(n===Ed)return 5124;if(n===oi)return 5125;if(n===Nn)return 5126;if(n===Fs)return r?5131:null!==(a=t.get("OES_texture_half_float"))?a.HALF_FLOAT_OES:null;if(n===Rd)return 6406;if(n===Ht)return 6408;if(n===Id)return 6409;if(n===Dd)return 6410;if(n===ai)return 6402;if(n===Yi)return 34041;if(n===Ld)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(n===Ea)return null!==(a=t.get("EXT_sRGB"))?a.SRGB_ALPHA_EXT:null;if(n===Nd)return 6403;if(n===Fd)return 36244;if(n===Od)return 33319;if(n===zd)return 33320;if(n===Bd)return 36249;if(n===Uo||n===ko||n===Vo||n===Ho){if(s===Be){if(null===(a=t.get("WEBGL_compressed_texture_s3tc_srgb")))return null;if(n===Uo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(null===(a=t.get("WEBGL_compressed_texture_s3tc")))return null;if(n===Uo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ho)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}}if(n===wl||n===Sl||n===Tl||n===Al){if(null===(a=t.get("WEBGL_compressed_texture_pvrtc")))return null;if(n===wl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===Ud)return null!==(a=t.get("WEBGL_compressed_texture_etc1"))?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===El||n===Cl){if(null===(a=t.get("WEBGL_compressed_texture_etc")))return null;if(n===El)return s===Be?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Cl)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(n===Pl||n===Rl||n===Ll||n===Il||n===Dl||n===Nl||n===Fl||n===Ol||n===zl||n===Bl||n===Ul||n===kl||n===Vl||n===Hl){if(null===(a=t.get("WEBGL_compressed_texture_astc")))return null;if(n===Pl)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rl)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ll)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dl)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nl)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fl)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ol)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zl)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bl)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ul)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kl)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vl)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hl)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===Gl){if(null===(a=t.get("EXT_texture_compression_bptc")))return null;if(n===Gl)return s===Be?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}return n===Gi?r?34042:null!==(a=t.get("WEBGL_depth_texture"))?a.UNSIGNED_INT_24_8_WEBGL:null:void 0!==e[n]?e[n]:null}}}var ka=class extends dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},rn=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},G0={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return null===this._hand&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return null===this._targetRay&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return null===this._grip&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return null!==this._targetRay&&this._targetRay.dispatchEvent(e),null!==this._grip&&this._grip.dispatchEvent(e),null!==this._hand&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),null!==this._targetRay&&(this._targetRay.visible=!1),null!==this._grip&&(this._grip.visible=!1),null!==this._hand&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,s=null,a=this._targetRay,l=this._grip,h=this._hand;if(e&&"visible-blurred"!==t.session.visibilityState){if(h&&e.hand){for(let u of(s=!0,e.hand.values())){let c=t.getJointPose(u,i),d=this._getHandJoint(h,u);null!==c&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.jointRadius=c.radius),d.visible=null!==c}let p=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],m=p.position.distanceTo(f.position);h.inputState.pinching&&m>.025?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=.015&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else null!==l&&e.gripSpace&&null!==(n=t.getPose(e.gripSpace,i))&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1);null!==a&&(null===(r=t.getPose(e.targetRaySpace,i))&&null!==n&&(r=n),null!==r&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(G0)))}return null!==a&&(a.visible=null!==r),null!==l&&(l.visible=null!==n),null!==h&&(h.visible=null!==s),this}_getHandJoint(e,t){if(void 0===e.joints[t.jointName]){let i=new rn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Va=class extends qe{constructor(e,t,i,r,n,s,a,l,h,u){if((u=void 0!==u?u:ai)!==ai&&u!==Yi)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===i&&u===ai&&(i=oi),void 0===i&&u===Yi&&(i=Gi),super(null,r,n,s,a,l,u,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=void 0!==a?a:ct,this.minFilter=void 0!==l?l:ct,this.flipY=!1,this.generateMipmaps=!1}},Ha=class extends bn{constructor(e,t){super();let i=this,r=null,n=1,s=null,a="local-floor",l=null,h=null,u=null,c=null,d=null,p=null,f=t.getContextAttributes(),m=null,g=null,$=[],v=[],x=new Set,y=new Map,b=new dt;b.layers.enable(1),b.viewport=new Ue;let _=new dt;_.layers.enable(2),_.viewport=new Ue;let S=[b,_],w=new ka;w.layers.enable(1),w.layers.enable(2);let M=null,E=null;function A(e){let t=v.indexOf(e.inputSource);if(-1===t)return;let i=$[t];void 0!==i&&i.dispatchEvent({type:e.type,data:e.inputSource})}function C(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",C),r.removeEventListener("inputsourceschange",L);for(let t=0;t<$.length;t++){let n=v[t];null!==n&&(v[t]=null,$[t].disconnect(n))}M=null,E=null,e.setRenderTarget(m),d=null,c=null,u=null,r=null,g=null,z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}function L(e){for(let t=0;t<e.removed.length;t++){let i=e.removed[t],r=v.indexOf(i);r>=0&&(v[r]=null,$[r].disconnect(i))}for(let n=0;n<e.added.length;n++){let s=e.added[n],a=v.indexOf(s);if(-1===a){for(let l=0;l<$.length;l++)if(l>=v.length){v.push(s),a=l;break}else if(null===v[l]){v[l]=s,a=l;break}if(-1===a)break}let h=$[a];h&&h.connect(s)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=$[e];return void 0===t&&(t=new Ls,$[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=$[e];return void 0===t&&(t=new Ls,$[e]=t),t.getGripSpace()},this.getHand=function(e){let t=$[e];return void 0===t&&(t=new Ls,$[e]=t),t.getHandSpace()},this.setFramebufferScaleFactor=function(e){n=e,!0===i.isPresenting&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(e){a=e,!0===i.isPresenting&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(e){l=e},this.getBaseLayer=function(){return null!==c?c:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=function(h){return Xe(this,null,function*(){if(null!==(r=h)){if(m=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",C),r.addEventListener("inputsourceschange",L),!0!==f.xrCompatible&&(yield t.makeXRCompatible()),void 0===r.renderState.layers||!1===e.capabilities.isWebGL2){let p={antialias:void 0!==r.renderState.layers||f.antialias,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:n};d=new XRWebGLLayer(r,t,p),r.updateRenderState({baseLayer:d}),g=new Mn(d.framebufferWidth,d.framebufferHeight,{format:Ht,type:hi,encoding:e.outputEncoding,stencilBuffer:f.stencil})}else{let $=null,v=null,x=null;f.depth&&(x=f.stencil?35056:33190,$=f.stencil?Yi:ai,v=f.stencil?Gi:oi);let y={colorFormat:32856,depthFormat:x,scaleFactor:n};c=(u=new XRWebGLBinding(r,t)).createProjectionLayer(y),r.updateRenderState({layers:[c]}),g=new Mn(c.textureWidth,c.textureHeight,{format:Ht,type:hi,depthTexture:new Va(c.textureWidth,c.textureHeight,v,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0});e.properties.get(g).__ignoreDepthValues=c.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(1),l=null,s=yield r.requestReferenceSpace(a),z.setContext(r),z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})};let R=new T,P=new T;function I(e,t,i){R.setFromMatrixPosition(t.matrixWorld),P.setFromMatrixPosition(i.matrixWorld);let r=R.distanceTo(P),n=t.projectionMatrix.elements,s=i.projectionMatrix.elements,a=n[14]/(n[10]-1),l=n[14]/(n[10]+1),h=(n[9]+1)/n[5],u=(n[9]-1)/n[5],c=(n[8]-1)/n[0],d=(s[8]+1)/s[0],p=r/(-c+d),f=-(p*c);t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(f),e.translateZ(p),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();let m=a+p,g=l+p;e.projectionMatrix.makePerspective(a*c-f,a*d+(r-f),h*l/g*m,u*l/g*m,m,g)}function D(e,t){null===t?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(null===r)return;w.near=_.near=b.near=e.near,w.far=_.far=b.far=e.far,(M!==w.near||E!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),M=w.near,E=w.far);let t=e.parent,i=w.cameras;D(w,t);for(let n=0;n<i.length;n++)D(i[n],t);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),e.matrix.copy(w.matrix),e.matrix.decompose(e.position,e.quaternion,e.scale);let s=e.children;for(let a=0,l=s.length;a<l;a++)s[a].updateMatrixWorld(!0);2===i.length?I(w,b,_):w.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){return null!==c?c.fixedFoveation:null!==d?d.fixedFoveation:void 0},this.setFoveation=function(e){null!==c&&(c.fixedFoveation=e),null!==d&&void 0!==d.fixedFoveation&&(d.fixedFoveation=e)},this.getPlanes=function(){return x};let N=null;function O(t,r){if(h=r.getViewerPose(l||s),p=r,null!==h){let n=h.views;null!==d&&(e.setRenderTargetFramebuffer(g,d.framebuffer),e.setRenderTarget(g));let a=!1;n.length!==w.cameras.length&&(w.cameras.length=0,a=!0);for(let f=0;f<n.length;f++){let m=n[f],b=null;if(null!==d)b=d.getViewport(m);else{let _=u.getViewSubImage(c,m);b=_.viewport,0===f&&(e.setRenderTargetTextures(g,_.colorTexture,c.ignoreDepthValues?void 0:_.depthStencilTexture),e.setRenderTarget(g))}let M=S[f];void 0===M&&((M=new dt).layers.enable(f),M.viewport=new Ue,S[f]=M),M.matrix.fromArray(m.transform.matrix),M.projectionMatrix.fromArray(m.projectionMatrix),M.viewport.set(b.x,b.y,b.width,b.height),0===f&&w.matrix.copy(M.matrix),!0===a&&w.cameras.push(M)}}for(let E=0;E<$.length;E++){let A=v[E],C=$[E];null!==A&&void 0!==C&&C.update(A,r,l||s)}if(N&&N(t,r),r.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:r.detectedPlanes});let L=null;for(let R of x)r.detectedPlanes.has(R)||(null===L&&(L=[]),L.push(R));if(null!==L)for(let P of L)x.delete(P),y.delete(P),i.dispatchEvent({type:"planeremoved",data:P});for(let I of r.detectedPlanes)if(x.has(I)){let D=y.get(I);I.lastChangedTime>D&&(y.set(I,I.lastChangedTime),i.dispatchEvent({type:"planechanged",data:I}))}else x.add(I),y.set(I,r.lastChangedTime),i.dispatchEvent({type:"planeadded",data:I})}p=null}let z=new ou;z.setAnimationLoop(O),this.setAnimationLoop=function(e){N=e},this.dispose=function(){}}};function W0(e,t){function i(i,r){i.opacity.value=r.opacity,r.color&&i.diffuse.value.copy(r.color),r.emissive&&i.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(i.map.value=r.map),r.alphaMap&&(i.alphaMap.value=r.alphaMap),r.bumpMap&&(i.bumpMap.value=r.bumpMap,i.bumpScale.value=r.bumpScale,r.side===Tt&&(i.bumpScale.value*=-1)),r.displacementMap&&(i.displacementMap.value=r.displacementMap,i.displacementScale.value=r.displacementScale,i.displacementBias.value=r.displacementBias),r.emissiveMap&&(i.emissiveMap.value=r.emissiveMap),r.normalMap&&(i.normalMap.value=r.normalMap,i.normalScale.value.copy(r.normalScale),r.side===Tt&&i.normalScale.value.negate()),r.specularMap&&(i.specularMap.value=r.specularMap),r.alphaTest>0&&(i.alphaTest.value=r.alphaTest);let n=t.get(r).envMap;if(n&&(i.envMap.value=n,i.flipEnvMap.value=n.isCubeTexture&&!1===n.isRenderTargetTexture?-1:1,i.reflectivity.value=r.reflectivity,i.ior.value=r.ior,i.refractionRatio.value=r.refractionRatio),r.lightMap){i.lightMap.value=r.lightMap;let s=!0!==e.physicallyCorrectLights?Math.PI:1;i.lightMapIntensity.value=r.lightMapIntensity*s}r.aoMap&&(i.aoMap.value=r.aoMap,i.aoMapIntensity.value=r.aoMapIntensity);let a;r.map?a=r.map:r.specularMap?a=r.specularMap:r.displacementMap?a=r.displacementMap:r.normalMap?a=r.normalMap:r.bumpMap?a=r.bumpMap:r.roughnessMap?a=r.roughnessMap:r.metalnessMap?a=r.metalnessMap:r.alphaMap?a=r.alphaMap:r.emissiveMap?a=r.emissiveMap:r.clearcoatMap?a=r.clearcoatMap:r.clearcoatNormalMap?a=r.clearcoatNormalMap:r.clearcoatRoughnessMap?a=r.clearcoatRoughnessMap:r.iridescenceMap?a=r.iridescenceMap:r.iridescenceThicknessMap?a=r.iridescenceThicknessMap:r.specularIntensityMap?a=r.specularIntensityMap:r.specularColorMap?a=r.specularColorMap:r.transmissionMap?a=r.transmissionMap:r.thicknessMap?a=r.thicknessMap:r.sheenColorMap?a=r.sheenColorMap:r.sheenRoughnessMap&&(a=r.sheenRoughnessMap),void 0!==a&&(a.isWebGLRenderTarget&&(a=a.texture),!0===a.matrixAutoUpdate&&a.updateMatrix(),i.uvTransform.value.copy(a.matrix));let l;r.aoMap?l=r.aoMap:r.lightMap&&(l=r.lightMap),void 0!==l&&(l.isWebGLRenderTarget&&(l=l.texture),!0===l.matrixAutoUpdate&&l.updateMatrix(),i.uv2Transform.value.copy(l.matrix))}return{refreshFogUniforms:function t(i,r){r.color.getRGB(i.fogColor.value,ru(e)),r.isFog?(i.fogNear.value=r.near,i.fogFar.value=r.far):r.isFogExp2&&(i.fogDensity.value=r.density)},refreshMaterialUniforms:function e(r,n,s,a,l){var h,u,c,d,p,f,m,g,$,v,x,y,b,_,S,w,M,E,A,C,L,R,P;let I,D;n.isMeshBasicMaterial||n.isMeshLambertMaterial?i(r,n):n.isMeshToonMaterial?(i(r,n),h=r,(u=n).gradientMap&&(h.gradientMap.value=u.gradientMap)):n.isMeshPhongMaterial?(i(r,n),c=r,d=n,c.specular.value.copy(d.specular),c.shininess.value=Math.max(d.shininess,1e-4)):n.isMeshStandardMaterial?(i(r,n),p=r,f=n,p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity),n.isMeshPhysicalMaterial&&(m=r,g=n,$=l,m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap)),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),m.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===Tt&&m.clearcoatNormalScale.value.negate())),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap)),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=$.texture,m.transmissionSamplerSize.value.set($.width,$.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap))):n.isMeshMatcapMaterial?(i(r,n),v=r,(x=n).matcap&&(v.matcap.value=x.matcap)):n.isMeshDepthMaterial?i(r,n):n.isMeshDistanceMaterial?(i(r,n),y=r,b=n,y.referencePosition.value.copy(b.referencePosition),y.nearDistance.value=b.nearDistance,y.farDistance.value=b.farDistance):n.isMeshNormalMaterial?i(r,n):n.isLineBasicMaterial?(_=r,S=n,_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,n.isLineDashedMaterial&&(w=r,M=n,w.dashSize.value=M.dashSize,w.totalSize.value=M.dashSize+M.gapSize,w.scale.value=M.scale)):n.isPointsMaterial?(E=r,A=n,C=s,L=a,E.diffuse.value.copy(A.color),E.opacity.value=A.opacity,E.size.value=A.size*C,E.scale.value=.5*L,A.map&&(E.map.value=A.map),A.alphaMap&&(E.alphaMap.value=A.alphaMap),A.alphaTest>0&&(E.alphaTest.value=A.alphaTest),A.map?I=A.map:A.alphaMap&&(I=A.alphaMap),void 0!==I&&(!0===I.matrixAutoUpdate&&I.updateMatrix(),E.uvTransform.value.copy(I.matrix))):n.isSpriteMaterial?(R=r,P=n,R.diffuse.value.copy(P.color),R.opacity.value=P.opacity,R.rotation.value=P.rotation,P.map&&(R.map.value=P.map),P.alphaMap&&(R.alphaMap.value=P.alphaMap),P.alphaTest>0&&(R.alphaTest.value=P.alphaTest),P.map?D=P.map:P.alphaMap&&(D=P.alphaMap),void 0!==D&&(!0===D.matrixAutoUpdate&&D.updateMatrix(),R.uvTransform.value.copy(D.matrix))):n.isShadowMaterial?(r.color.value.copy(n.color),r.opacity.value=n.opacity):n.isShaderMaterial&&(n.uniformsNeedUpdate=!1)}}}function q0(e,t,i,r){let n={},s={},a=[],l=i.isWebGL2?e.getParameter(35375):0;function h(e,t,i){let r=e.value;if(void 0===i[t])return"number"==typeof r?i[t]=r:i[t]=r.clone(),!0;if("number"==typeof r){if(i[t]!==r)return i[t]=r,!0}else{let n=i[t];if(!1===n.equals(r))return n.copy(r),!0}return!1}function u(e){let t=e.value,i={boundary:0,storage:0};return"number"==typeof t?(i.boundary=4,i.storage=4):t.isVector2?(i.boundary=8,i.storage=8):t.isVector3||t.isColor?(i.boundary=16,i.storage=12):t.isVector4?(i.boundary=16,i.storage=16):t.isMatrix3?(i.boundary=48,i.storage=48):t.isMatrix4?(i.boundary=64,i.storage=64):t.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",t),i}function c(t){let i=t.target;i.removeEventListener("dispose",c);let r=a.indexOf(i.__bindingPointIndex);a.splice(r,1),e.deleteBuffer(n[i.id]),delete n[i.id],delete s[i.id]}return{bind:function e(t,i){let n=i.program;r.uniformBlockBinding(t,n)},update:function i(d,p){var f;let m=n[d.id],g,$,v,x;void 0===m&&(function e(t){let i=t.uniforms,r=0,n=0;for(let s=0,a=i.length;s<a;s++){let l=i[s],h=u(l);if(l.__data=new Float32Array(h.storage/Float32Array.BYTES_PER_ELEMENT),l.__offset=r,s>0){let c=16-(n=r%16);0!==n&&c-h.boundary<0&&(r+=16-n,l.__offset=r)}r+=h.storage}return(n=r%16)>0&&(r+=16-n),t.__size=r,t.__cache={},this}(d),m=(f=d,g=function e(){for(let t=0;t<l;t++)if(-1===a.indexOf(t))return a.push(t),t;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}(),f.__bindingPointIndex=g,$=e.createBuffer(),v=f.__size,x=f.usage,e.bindBuffer(35345,$),e.bufferData(35345,v,x),e.bindBuffer(35345,null),e.bindBufferBase(35345,g,$),$),n[d.id]=m,d.addEventListener("dispose",c));let y=p.program;r.updateUBOMapping(d,y);let b=t.render.frame;s[d.id]!==b&&(function t(i){let r=n[i.id],s=i.uniforms,a=i.__cache;e.bindBuffer(35345,r);for(let l=0,u=s.length;l<u;l++){let c=s[l];if(!0===h(c,l,a)){let d=c.value,p=c.__offset;"number"==typeof d?(c.__data[0]=d,e.bufferSubData(35345,p,c.__data)):(c.value.isMatrix3?(c.__data[0]=c.value.elements[0],c.__data[1]=c.value.elements[1],c.__data[2]=c.value.elements[2],c.__data[3]=c.value.elements[0],c.__data[4]=c.value.elements[3],c.__data[5]=c.value.elements[4],c.__data[6]=c.value.elements[5],c.__data[7]=c.value.elements[0],c.__data[8]=c.value.elements[6],c.__data[9]=c.value.elements[7],c.__data[10]=c.value.elements[8],c.__data[11]=c.value.elements[0]):d.toArray(c.__data),e.bufferSubData(35345,p,c.__data))}}e.bindBuffer(35345,null)}(d),s[d.id]=b)},dispose:function t(){for(let i in n)e.deleteBuffer(n[i]);a=[],n={},s={}}}}function X0(){let e=Bs("canvas");return e.style.display="block",e}function Y0(e={}){this.isWebGLRenderer=!0;let t=void 0!==e.canvas?e.canvas:X0(),i=void 0!==e.context?e.context:null,r=void 0===e.depth||e.depth,n=void 0===e.stencil||e.stencil,s=void 0!==e.antialias&&e.antialias,a=void 0===e.premultipliedAlpha||e.premultipliedAlpha,l=void 0!==e.preserveDrawingBuffer&&e.preserveDrawingBuffer,h=void 0!==e.powerPreference?e.powerPreference:"default",u=void 0!==e.failIfMajorPerformanceCaveat&&e.failIfMajorPerformanceCaveat,c;c=null!==i?i.getContextAttributes().alpha:void 0!==e.alpha&&e.alpha;let d=null,p=null,f=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=di,this.physicallyCorrectLights=!1,this.toneMapping=vn,this.toneMappingExposure=1;let g=this,$=!1,v=0,x=0,y=null,b=-1,_=null,S=new Ue,w=new Ue,M=null,E=t.width,A=t.height,C=1,L=null,R=null,P=new Ue(0,0,E,A),I=new Ue(0,0,E,A),D=!1,N=new ks,O=!1,z=!1,U=null,B=new me,F=new se,k=new T,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function V(){return null===y?C:1}let G=i;function W(e,i){for(let r=0;r<e.length;r++){let n=e[r],s=t.getContext(n,i);if(null!==s)return s}return null}try{if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dc}`),t.addEventListener("webglcontextlost",eN,!1),t.addEventListener("webglcontextrestored",eO,!1),t.addEventListener("webglcontextcreationerror",ez,!1),null===G){let q=["webgl2","webgl","experimental-webgl"];if(!0===g.isWebGL1Renderer&&q.shift(),G=W(q,{alpha:!0,depth:r,stencil:n,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u}),null===G)throw W(q)?Error("Error creating WebGL context with your selected attributes."):Error("Error creating WebGL context.")}void 0===G.getShaderPrecisionFormat&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(j){throw console.error("THREE.WebGLRenderer: "+j.message),j}let X,Y,K,J,Z,Q,ee,ei,e$,ev,e8,ey,eb,eS,ew,eT,eM,eE,e1,eA,eC,eL,eR,eP;function eI(){X=new fg(G),Y=new ag(G,X,e),X.init(Y),eL=new H0(G,X,Y),K=new k0(G,X,Y),J=new gg,Z=new C0,Q=new V0(G,X,K,Z,Y,eL,J),ee=new lg(g),ei=new dg(g),e$=new Tf(G,Y),eR=new rg(G,X,e$,Y),ev=new pg(G,e$,J,eR),e8=new vg(G,ev,e$,J),e1=new yg(G,Y,Q),eT=new cg(Z),ey=new E0(g,ee,ei,X,Y,eR,eT),eb=new W0(g,Z),eS=new R0,ew=new O0(X,Y),eE=new sg(g,ee,ei,K,e8,c,a),eM=new U0(g,e8,Y),eP=new q0(G,J,Y,K),eA=new og(G,X,J,Y),eC=new mg(G,X,J,Y),J.programs=ey.programs,g.capabilities=Y,g.extensions=X,g.properties=Z,g.renderLists=eS,g.shadowMap=eM,g.state=K,g.info=J}eI();let eD=new Ha(g,G);function eN(e){e.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),$=!0}function eO(){console.log("THREE.WebGLRenderer: Context Restored."),$=!1;let e=J.autoReset,t=eM.enabled,i=eM.autoUpdate,r=eM.needsUpdate,n=eM.type;eI(),J.autoReset=e,eM.enabled=t,eM.autoUpdate=i,eM.needsUpdate=r,eM.type=n}function ez(e){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",e.statusMessage)}function eU(e){var t,i;let r=e.target,n;r.removeEventListener("dispose",eU),i=t=r,void 0!==(n=Z.get(i).programs)&&(n.forEach(function(e){ey.releaseProgram(e)}),i.isShaderMaterial&&ey.releaseShaderCache(i)),Z.remove(t)}this.xr=eD,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let e=X.get("WEBGL_lose_context");e&&e.loseContext()},this.forceContextRestore=function(){let e=X.get("WEBGL_lose_context");e&&e.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(e){void 0!==e&&(C=e,this.setSize(E,A,!1))},this.getSize=function(e){return e.set(E,A)},this.setSize=function(e,i,r){if(eD.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=e,A=i,t.width=Math.floor(e*C),t.height=Math.floor(i*C),!1!==r&&(t.style.width=e+"px",t.style.height=i+"px"),this.setViewport(0,0,e,i)},this.getDrawingBufferSize=function(e){return e.set(E*C,A*C).floor()},this.setDrawingBufferSize=function(e,i,r){E=e,A=i,C=r,t.width=Math.floor(e*r),t.height=Math.floor(i*r),this.setViewport(0,0,e,i)},this.getCurrentViewport=function(e){return e.copy(S)},this.getViewport=function(e){return e.copy(P)},this.setViewport=function(e,t,i,r){e.isVector4?P.set(e.x,e.y,e.z,e.w):P.set(e,t,i,r),K.viewport(S.copy(P).multiplyScalar(C).floor())},this.getScissor=function(e){return e.copy(I)},this.setScissor=function(e,t,i,r){e.isVector4?I.set(e.x,e.y,e.z,e.w):I.set(e,t,i,r),K.scissor(w.copy(I).multiplyScalar(C).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(e){K.setScissorTest(D=e)},this.setOpaqueSort=function(e){L=e},this.setTransparentSort=function(e){R=e},this.getClearColor=function(e){return e.copy(eE.getClearColor())},this.setClearColor=function(){eE.setClearColor.apply(eE,arguments)},this.getClearAlpha=function(){return eE.getClearAlpha()},this.setClearAlpha=function(){eE.setClearAlpha.apply(eE,arguments)},this.clear=function(e=!0,t=!0,i=!0){let r=0;e&&(r|=16384),t&&(r|=256),i&&(r|=1024),G.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",eN,!1),t.removeEventListener("webglcontextrestored",eO,!1),t.removeEventListener("webglcontextcreationerror",ez,!1),eS.dispose(),ew.dispose(),Z.dispose(),ee.dispose(),ei.dispose(),e8.dispose(),eR.dispose(),eP.dispose(),ey.dispose(),eD.dispose(),eD.removeEventListener("sessionstart",eF),eD.removeEventListener("sessionend",e2),U&&(U.dispose(),U=null),e3.stop()},this.renderBufferDirect=function(e,t,i,r,n,s){null===t&&(t=H);let a=n.isMesh&&0>n.matrixWorld.determinant(),l=function e(t,i,r,n,s){var a,l;!0!==i.isScene&&(i=H),Q.resetTextureUnits();let h=i.fog,u=n.isMeshStandardMaterial?i.environment:null,c=null===y?g.outputEncoding:!0===y.isXRRenderTarget?y.texture.encoding:di,d=(n.isMeshStandardMaterial?ei:ee).get(n.envMap||u),f=!0===n.vertexColors&&!!r.attributes.color&&4===r.attributes.color.itemSize,m=!!n.normalMap&&!!r.attributes.tangent,$=!!r.morphAttributes.position,v=!!r.morphAttributes.normal,x=!!r.morphAttributes.color,S=n.toneMapped?g.toneMapping:vn,w=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,M=void 0!==w?w.length:0,E=Z.get(n),L=p.state.lights;if(!0===O&&(!0===z||t!==_)){let R=t===_&&n.id===b;eT.setState(n,t,R)}let P=!1;n.version===E.__version?(E.needsLights&&E.lightsStateVersion!==L.state.version||E.outputEncoding!==c||s.isInstancedMesh&&!1===E.instancing||!s.isInstancedMesh&&!0===E.instancing||s.isSkinnedMesh&&!1===E.skinning||!s.isSkinnedMesh&&!0===E.skinning||E.envMap!==d||!0===n.fog&&E.fog!==h||void 0!==E.numClippingPlanes&&(E.numClippingPlanes!==eT.numPlanes||E.numIntersection!==eT.numIntersection)||E.vertexAlphas!==f||E.vertexTangents!==m||E.morphTargets!==$||E.morphNormals!==v||E.morphColors!==x||E.toneMapping!==S||!0===Y.isWebGL2&&E.morphTargetsCount!==M)&&(P=!0):(P=!0,E.__version=n.version);let I=E.currentProgram;!0===P&&(I=eV(n,i,s));let D=!1,N=!1,B=!1,F=I.getUniforms(),V=E.uniforms;if(K.useProgram(I.program)&&(D=!0,N=!0,B=!0),n.id!==b&&(b=n.id,N=!0),D||_!==t){if(F.setValue(G,"projectionMatrix",t.projectionMatrix),Y.logarithmicDepthBuffer&&F.setValue(G,"logDepthBufFC",2/(Math.log(t.far+1)/Math.LN2)),_!==t&&(_=t,N=!0,B=!0),n.isShaderMaterial||n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshStandardMaterial||n.envMap){let W=F.map.cameraPosition;void 0!==W&&W.setValue(G,k.setFromMatrixPosition(t.matrixWorld))}(n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial)&&F.setValue(G,"isOrthographic",!0===t.isOrthographicCamera),(n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial||n.isShadowMaterial||s.isSkinnedMesh)&&F.setValue(G,"viewMatrix",t.matrixWorldInverse)}if(s.isSkinnedMesh){F.setOptional(G,s,"bindMatrix"),F.setOptional(G,s,"bindMatrixInverse");let q=s.skeleton;q&&(Y.floatVertexTextures?(null===q.boneTexture&&q.computeBoneTexture(),F.setValue(G,"boneTexture",q.boneTexture,Q),F.setValue(G,"boneTextureSize",q.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let j=r.morphAttributes;if((void 0!==j.position||void 0!==j.normal||void 0!==j.color&&!0===Y.isWebGL2)&&e1.update(s,r,n,I),(N||E.receiveShadow!==s.receiveShadow)&&(E.receiveShadow=s.receiveShadow,F.setValue(G,"receiveShadow",s.receiveShadow)),n.isMeshGouraudMaterial&&null!==n.envMap&&(V.envMap.value=d,V.flipEnvMap.value=d.isCubeTexture&&!1===d.isRenderTargetTexture?-1:1),N&&(F.setValue(G,"toneMappingExposure",g.toneMappingExposure),E.needsLights&&(a=V,l=B,a.ambientLightColor.needsUpdate=l,a.lightProbe.needsUpdate=l,a.directionalLights.needsUpdate=l,a.directionalLightShadows.needsUpdate=l,a.pointLights.needsUpdate=l,a.pointLightShadows.needsUpdate=l,a.spotLights.needsUpdate=l,a.spotLightShadows.needsUpdate=l,a.rectAreaLights.needsUpdate=l,a.hemisphereLights.needsUpdate=l),h&&!0===n.fog&&eb.refreshFogUniforms(V,h),eb.refreshMaterialUniforms(V,n,C,A,U),Wi.upload(G,E.uniformsList,V,Q)),n.isShaderMaterial&&!0===n.uniformsNeedUpdate&&(Wi.upload(G,E.uniformsList,V,Q),n.uniformsNeedUpdate=!1),n.isSpriteMaterial&&F.setValue(G,"center",s.center),F.setValue(G,"modelViewMatrix",s.modelViewMatrix),F.setValue(G,"normalMatrix",s.normalMatrix),F.setValue(G,"modelMatrix",s.matrixWorld),n.isShaderMaterial||n.isRawShaderMaterial){let X=n.uniformsGroups;for(let J=0,e$=X.length;J<e$;J++)if(Y.isWebGL2){let ev=X[J];eP.update(ev,I),eP.bind(ev,I)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return I}(e,t,i,r,n);K.setMaterial(r,a);let h=i.index,u=1;!0===r.wireframe&&(h=ev.getWireframeAttribute(i),u=2);let c=i.drawRange,d=i.attributes.position,f=c.start*u,m=(c.start+c.count)*u;null!==s&&(f=Math.max(f,s.start*u),m=Math.min(m,(s.start+s.count)*u)),null!==h?(f=Math.max(f,0),m=Math.min(m,h.count)):null!=d&&(f=Math.max(f,0),m=Math.min(m,d.count));let $=m-f;if($<0||$===1/0)return;eR.setup(n,r,l,i,h);let v,x=eA;if(null!==h&&(v=e$.get(h),(x=eC).setIndex(v)),n.isMesh)!0===r.wireframe?(K.setLineWidth(r.wireframeLinewidth*V()),x.setMode(1)):x.setMode(4);else if(n.isLine){let S=r.linewidth;void 0===S&&(S=1),K.setLineWidth(S*V()),n.isLineSegments?x.setMode(1):n.isLineLoop?x.setMode(2):x.setMode(3)}else n.isPoints?x.setMode(0):n.isSprite&&x.setMode(4);if(n.isInstancedMesh)x.renderInstances(f,$,n.count);else if(i.isInstancedBufferGeometry){let w=void 0!==i._maxInstanceCount?i._maxInstanceCount:1/0,M=Math.min(i.instanceCount,w);x.renderInstances(f,$,M)}else x.render(f,$)},this.compile=function(e,t){function i(e,t,i){!0===e.transparent&&e.side===St?(e.side=Tt,e.needsUpdate=!0,eV(e,t,i),e.side=Qt,e.needsUpdate=!0,eV(e,t,i),e.side=St):eV(e,t,i)}(p=ew.get(e)).init(),m.push(p),e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(p.pushLight(e),e.castShadow&&p.pushShadow(e))}),p.setupLights(g.physicallyCorrectLights),e.traverse(function(t){let r=t.material;if(r){if(Array.isArray(r))for(let n=0;n<r.length;n++)i(r[n],e,t);else i(r,e,t)}}),m.pop(),p=null};let eB=null;function eF(){e3.stop()}function e2(){e3.start()}let e3=new ou;function ek(e,t,i,r){var n,a,l;let h=e.opaque,u=e.transmissive,c=e.transparent,d,f,m;p.setupLightsView(i),u.length>0&&(n=h,a=t,l=i,d=Y.isWebGL2,null===U&&(U=new Mn(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?Fs:hi,minFilter:gi,samples:d&&!0===s?4:0})),g.getDrawingBufferSize(F),d?U.setSize(F.x,F.y):U.setSize(kr(F.x),kr(F.y)),f=g.getRenderTarget(),g.setRenderTarget(U),g.clear(),m=g.toneMapping,g.toneMapping=vn,e4(n,a,l),g.toneMapping=m,Q.updateMultisampleRenderTarget(U),Q.updateRenderTargetMipmap(U),g.setRenderTarget(f)),r&&K.viewport(S.copy(r)),h.length>0&&e4(h,t,i),u.length>0&&e4(u,t,i),c.length>0&&e4(c,t,i),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function e4(e,t,i){let r=!0===t.isScene?t.overrideMaterial:null;for(let n=0,s=e.length;n<s;n++){let a=e[n],l=a.object,h=a.geometry,u=null===r?a.material:r,c=a.group;l.layers.test(i.layers)&&eH(l,t,i,h,u,c)}}function eH(e,t,i,r,n,s){e.onBeforeRender(g,t,i,r,n,s),e.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),n.onBeforeRender(g,t,i,r,e,s),!0===n.transparent&&n.side===St?(n.side=Tt,n.needsUpdate=!0,g.renderBufferDirect(i,t,r,n,e,s),n.side=Qt,n.needsUpdate=!0,g.renderBufferDirect(i,t,r,n,e,s),n.side=St):g.renderBufferDirect(i,t,r,n,e,s),e.onAfterRender(g,t,i,r,n,s)}function eV(e,t,i){var r;!0!==t.isScene&&(t=H);let n=Z.get(e),s=p.state.lights,a=p.state.shadowsArray,l=s.state.version,h=ey.getParameters(e,s.state,a,t,i),u=ey.getProgramCacheKey(h),c=n.programs;n.environment=e.isMeshStandardMaterial?t.environment:null,n.fog=t.fog,n.envMap=(e.isMeshStandardMaterial?ei:ee).get(e.envMap||n.environment),void 0===c&&(e.addEventListener("dispose",eU),c=new Map,n.programs=c);let d=c.get(u);if(void 0!==d){if(n.currentProgram===d&&n.lightsStateVersion===l)return eG(e,h),d}else h.uniforms=ey.getUniforms(e),e.onBuild(i,h,g),e.onBeforeCompile(h,g),d=ey.acquireProgram(h,u),c.set(u,d),n.uniforms=h.uniforms;let f=n.uniforms;(e.isShaderMaterial||e.isRawShaderMaterial)&&!0!==e.clipping||(f.clippingPlanes=eT.uniform),eG(e,h),n.needsLights=(r=e,r.isMeshLambertMaterial||r.isMeshToonMaterial||r.isMeshPhongMaterial||r.isMeshStandardMaterial||r.isShadowMaterial||r.isShaderMaterial&&!0===r.lights),n.lightsStateVersion=l,n.needsLights&&(f.ambientLightColor.value=s.state.ambient,f.lightProbe.value=s.state.probe,f.directionalLights.value=s.state.directional,f.directionalLightShadows.value=s.state.directionalShadow,f.spotLights.value=s.state.spot,f.spotLightShadows.value=s.state.spotShadow,f.rectAreaLights.value=s.state.rectArea,f.ltc_1.value=s.state.rectAreaLTC1,f.ltc_2.value=s.state.rectAreaLTC2,f.pointLights.value=s.state.point,f.pointLightShadows.value=s.state.pointShadow,f.hemisphereLights.value=s.state.hemi,f.directionalShadowMap.value=s.state.directionalShadowMap,f.directionalShadowMatrix.value=s.state.directionalShadowMatrix,f.spotShadowMap.value=s.state.spotShadowMap,f.spotLightMatrix.value=s.state.spotLightMatrix,f.spotLightMap.value=s.state.spotLightMap,f.pointShadowMap.value=s.state.pointShadowMap,f.pointShadowMatrix.value=s.state.pointShadowMatrix);let m=d.getUniforms(),$=Wi.seqWithValue(m.seq,f);return n.currentProgram=d,n.uniformsList=$,d}function eG(e,t){let i=Z.get(e);i.outputEncoding=t.outputEncoding,i.instancing=t.instancing,i.skinning=t.skinning,i.morphTargets=t.morphTargets,i.morphNormals=t.morphNormals,i.morphColors=t.morphColors,i.morphTargetsCount=t.morphTargetsCount,i.numClippingPlanes=t.numClippingPlanes,i.numIntersection=t.numClipIntersection,i.vertexAlphas=t.vertexAlphas,i.vertexTangents=t.vertexTangents,i.toneMapping=t.toneMapping}e3.setAnimationLoop(function e(t){eB&&eB(t)}),"undefined"!=typeof self&&e3.setContext(self),this.setAnimationLoop=function(e){eB=e,eD.setAnimationLoop(e),null===e?e3.stop():e3.start()},eD.addEventListener("sessionstart",eF),eD.addEventListener("sessionend",e2),this.render=function(e,t){if(void 0!==t&&!0!==t.isCamera){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(!0===$)return;!0===e.matrixWorldAutoUpdate&&e.updateMatrixWorld(),null===t.parent&&!0===t.matrixWorldAutoUpdate&&t.updateMatrixWorld(),!0===eD.enabled&&!0===eD.isPresenting&&(!0===eD.cameraAutoUpdate&&eD.updateCamera(t),t=eD.getCamera()),!0===e.isScene&&e.onBeforeRender(g,e,t,y),(p=ew.get(e,m.length)).init(),m.push(p),B.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),N.setFromProjectionMatrix(B),z=this.localClippingEnabled,O=eT.init(this.clippingPlanes,z,t),(d=eS.get(e,f.length)).init(),f.push(d),function e(t,i,r,n){if(!1===t.visible)return;if(t.layers.test(i.layers)){if(t.isGroup)r=t.renderOrder;else if(t.isLOD)!0===t.autoUpdate&&t.update(i);else if(t.isLight)p.pushLight(t),t.castShadow&&p.pushShadow(t);else if(t.isSprite){if(!t.frustumCulled||N.intersectsSprite(t)){n&&k.setFromMatrixPosition(t.matrixWorld).applyMatrix4(B);let s=e8.update(t),a=t.material;a.visible&&d.push(t,s,a,r,k.z,null)}}else if((t.isMesh||t.isLine||t.isPoints)&&(t.isSkinnedMesh&&t.skeleton.frame!==J.render.frame&&(t.skeleton.update(),t.skeleton.frame=J.render.frame),!t.frustumCulled||N.intersectsObject(t))){n&&k.setFromMatrixPosition(t.matrixWorld).applyMatrix4(B);let l=e8.update(t),h=t.material;if(Array.isArray(h)){let u=l.groups;for(let c=0,f=u.length;c<f;c++){let m=u[c],g=h[m.materialIndex];g&&g.visible&&d.push(t,l,g,r,k.z,m)}}else h.visible&&d.push(t,l,h,r,k.z,null)}}let $=t.children;for(let v=0,x=$.length;v<x;v++)e($[v],i,r,n)}(e,t,0,g.sortObjects),d.finish(),!0===g.sortObjects&&d.sort(L,R),!0===O&&eT.beginShadows();let i=p.state.shadowsArray;if(eM.render(i,e,t),!0===O&&eT.endShadows(),!0===this.info.autoReset&&this.info.reset(),eE.render(d,e),p.setupLights(g.physicallyCorrectLights),t.isArrayCamera){let r=t.cameras;for(let n=0,s=r.length;n<s;n++){let a=r[n];ek(d,e,a,a.viewport)}}else ek(d,e,t);null!==y&&(Q.updateMultisampleRenderTarget(y),Q.updateRenderTargetMipmap(y)),!0===e.isScene&&e.onAfterRender(g,e,t),eR.resetDefaultState(),b=-1,_=null,m.pop(),p=m.length>0?m[m.length-1]:null,f.pop(),d=f.length>0?f[f.length-1]:null},this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(e,t,i){Z.get(e.texture).__webglTexture=t,Z.get(e.depthTexture).__webglTexture=i;let r=Z.get(e);r.__hasExternalTextures=!0,r.__hasExternalTextures&&(r.__autoAllocateDepthBuffer=void 0===i,r.__autoAllocateDepthBuffer||!0===X.has("WEBGL_multisampled_render_to_texture")&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),r.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(e,t){let i=Z.get(e);i.__webglFramebuffer=t,i.__useDefaultFramebuffer=void 0===t},this.setRenderTarget=function(e,t=0,i=0){y=e,v=t,x=i;let r=!0,n=null,s=!1,a=!1;if(e){let l=Z.get(e);void 0!==l.__useDefaultFramebuffer?(K.bindFramebuffer(36160,null),r=!1):void 0===l.__webglFramebuffer?Q.setupRenderTarget(e):l.__hasExternalTextures&&Q.rebindTextures(e,Z.get(e.texture).__webglTexture,Z.get(e.depthTexture).__webglTexture);let h=e.texture;(h.isData3DTexture||h.isDataArrayTexture||h.isCompressedArrayTexture)&&(a=!0);let u=Z.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(n=u[t],s=!0):n=Y.isWebGL2&&e.samples>0&&!1===Q.useMultisampledRTT(e)?Z.get(e).__webglMultisampledFramebuffer:u,S.copy(e.viewport),w.copy(e.scissor),M=e.scissorTest}else S.copy(P).multiplyScalar(C).floor(),w.copy(I).multiplyScalar(C).floor(),M=D;if(K.bindFramebuffer(36160,n)&&Y.drawBuffers&&r&&K.drawBuffers(e,n),K.viewport(S),K.scissor(w),K.setScissorTest(M),s){let c=Z.get(e.texture);G.framebufferTexture2D(36160,36064,34069+t,c.__webglTexture,i)}else if(a){let d=Z.get(e.texture);G.framebufferTextureLayer(36160,36064,d.__webglTexture,i||0,t||0)}b=-1},this.readRenderTargetPixels=function(e,t,i,r,n,s,a){if(!(e&&e.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let l=Z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&void 0!==a&&(l=l[a]),l){K.bindFramebuffer(36160,l);try{let h=e.texture,u=h.format,c=h.type;if(u!==Ht&&eL.convert(u)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let d=c===Fs&&(X.has("EXT_color_buffer_half_float")||Y.isWebGL2&&X.has("EXT_color_buffer_float"));if(c!==hi&&eL.convert(c)!==G.getParameter(35738)&&!(c===Nn&&(Y.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!d){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}t>=0&&t<=e.width-r&&i>=0&&i<=e.height-n&&G.readPixels(t,i,r,n,eL.convert(u),eL.convert(c),s)}finally{let p=null!==y?Z.get(y).__webglFramebuffer:null;K.bindFramebuffer(36160,p)}}},this.copyFramebufferToTexture=function(e,t,i=0){let r=Math.pow(2,-i),n=Math.floor(t.image.width*r),s=Math.floor(t.image.height*r);Q.setTexture2D(t,0),G.copyTexSubImage2D(3553,i,0,0,e.x,e.y,n,s),K.unbindTexture()},this.copyTextureToTexture=function(e,t,i,r=0){let n=t.image.width,s=t.image.height,a=eL.convert(i.format),l=eL.convert(i.type);Q.setTexture2D(i,0),G.pixelStorei(37440,i.flipY),G.pixelStorei(37441,i.premultiplyAlpha),G.pixelStorei(3317,i.unpackAlignment),t.isDataTexture?G.texSubImage2D(3553,r,e.x,e.y,n,s,a,l,t.image.data):t.isCompressedTexture?G.compressedTexSubImage2D(3553,r,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,a,t.mipmaps[0].data):G.texSubImage2D(3553,r,e.x,e.y,a,l,t.image),0===r&&i.generateMipmaps&&G.generateMipmap(3553),K.unbindTexture()},this.copyTextureToTexture3D=function(e,t,i,r,n=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let s=e.max.x-e.min.x+1,a=e.max.y-e.min.y+1,l=e.max.z-e.min.z+1,h=eL.convert(r.format),u=eL.convert(r.type),c;if(r.isData3DTexture)Q.setTexture3D(r,0),c=32879;else if(r.isDataArrayTexture)Q.setTexture2DArray(r,0),c=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,r.flipY),G.pixelStorei(37441,r.premultiplyAlpha),G.pixelStorei(3317,r.unpackAlignment);let d=G.getParameter(3314),p=G.getParameter(32878),f=G.getParameter(3316),m=G.getParameter(3315),$=G.getParameter(32877),v=i.isCompressedTexture?i.mipmaps[0]:i.image;G.pixelStorei(3314,v.width),G.pixelStorei(32878,v.height),G.pixelStorei(3316,e.min.x),G.pixelStorei(3315,e.min.y),G.pixelStorei(32877,e.min.z),i.isDataTexture||i.isData3DTexture?G.texSubImage3D(c,n,t.x,t.y,t.z,s,a,l,h,u,v.data):i.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(c,n,t.x,t.y,t.z,s,a,l,h,v.data)):G.texSubImage3D(c,n,t.x,t.y,t.z,s,a,l,h,u,v),G.pixelStorei(3314,d),G.pixelStorei(32878,p),G.pixelStorei(3316,f),G.pixelStorei(3315,m),G.pixelStorei(32877,$),0===n&&r.generateMipmaps&&G.generateMipmap(c),K.unbindTexture()},this.initTexture=function(e){e.isCubeTexture?Q.setTextureCube(e,0):e.isData3DTexture?Q.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Q.setTexture2DArray(e,0):Q.setTexture2D(e,0),K.unbindTexture()},this.resetState=function(){v=0,x=0,y=null,K.reset(),eR.reset()},"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var Ga=class extends Y0{};Ga.prototype.isWebGL1Renderer=!0;var Ni,Hs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=void 0!==e?e.length/t:0,this.usage=Aa,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=$t()}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,n=this.stride;r<n;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){void 0===e.arrayBuffers&&(e.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=$t()),void 0===e.arrayBuffers[this.array.buffer._uuid]&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return void 0===e.arrayBuffers&&(e.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=$t()),void 0===e.arrayBuffers[this.array.buffer._uuid]&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bt=new T,zn=class{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=!0===r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}setX(e,t){return this.normalized&&(t=He(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=He(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=He(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=He(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=He(t,this.array),i=He(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=He(t,this.array),i=He(i,this.array),r=He(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=He(t,this.array),i=He(i,this.array),r=He(r,this.array),n=He(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=n,this}clone(e){if(void 0!==e)return void 0===e.interleavedBuffers&&(e.interleavedBuffers={}),void 0===e.interleavedBuffers[this.data.uuid]&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized);{console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return new Ye(new this.array.constructor(t),this.itemSize,this.normalized)}}toJSON(e){if(void 0!==e)return void 0===e.interleavedBuffers&&(e.interleavedBuffers={}),void 0===e.interleavedBuffers[this.data.uuid]&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized};{console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}}},mi=class extends Et{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ms=new T,Fi=new T,Oi=new T,zi=new se,ws=new se,uu=new me,Tr=new T,Ss=new T,Ar=new T,wh=new se,ga=new se,Sh=new se,Ki=class extends Oe{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",void 0===Ni){Ni=new ht;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Hs(t,5);Ni.setIndex([0,1,2,0,2,3]),Ni.setAttribute("position",new zn(i,3,0,!1)),Ni.setAttribute("uv",new zn(i,2,3,!1))}this.geometry=Ni,this.material=void 0!==e?e:new mi,this.center=new se(.5,.5)}raycast(e,t){null===e.camera&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),uu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&!1===this.material.sizeAttenuation&&Fi.multiplyScalar(-Oi.z);let i=this.material.rotation,r,n;0!==i&&(n=Math.cos(i),r=Math.sin(i));let s=this.center;Er(Tr.set(-.5,-.5,0),Oi,s,Fi,r,n),Er(Ss.set(.5,-.5,0),Oi,s,Fi,r,n),Er(Ar.set(.5,.5,0),Oi,s,Fi,r,n),wh.set(0,0),ga.set(1,0),Sh.set(1,1);let a=e.ray.intersectTriangle(Tr,Ss,Ar,!1,Ms);if(null===a&&(Er(Ss.set(-.5,.5,0),Oi,s,Fi,r,n),ga.set(0,1),null===(a=e.ray.intersectTriangle(Tr,Ar,Ss,!1,Ms))))return;let l=e.ray.origin.distanceTo(Ms);l<e.near||l>e.far||t.push({distance:l,point:Ms.clone(),uv:ft.getUV(Ms,Tr,Ss,Ar,wh,ga,Sh,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),void 0!==e.center&&this.center.copy(e.center),this.material=e.material,this}};function Er(e,t,i,r,n,s){zi.subVectors(e,i).addScalar(.5).multiply(r),void 0!==n?(ws.x=s*zi.x-n*zi.y,ws.y=n*zi.x+s*zi.y):ws.copy(zi),e.copy(t),e.x+=ws.x,e.y+=ws.y,e.applyMatrix4(uu)}var Th=new T,Ah=new Ue,Eh=new Ue,Z0=new T,Ch=new me,Jr=class extends Ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new me,this.bindMatrixInverse=new me}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,void 0===t&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ue,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let n=1/e.manhattanLength();n!==1/0?e.multiplyScalar(n):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),"attached"===this.bindMode?this.bindMatrixInverse.copy(this.matrixWorld).invert():"detached"===this.bindMode?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let i=this.skeleton,r=this.geometry;Ah.fromBufferAttribute(r.attributes.skinIndex,e),Eh.fromBufferAttribute(r.attributes.skinWeight,e),Th.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let n=0;n<4;n++){let s=Eh.getComponent(n);if(0!==s){let a=Ah.getComponent(n);Ch.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Z0.copy(Th).applyMatrix4(Ch),s)}}return t.applyMatrix4(this.bindMatrixInverse)}},Gs=class extends Oe{constructor(){super(),this.isBone=!0,this.type="Bone"}},Wa=class extends qe{constructor(e=null,t=1,i=1,r,n,s,a,l,h=ct,u=ct,c,d){super(null,s,a,l,h,u,r,n,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ph=new me,J0=new me,$i=class{constructor(e=[],t=[]){this.uuid=$t(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),0===t.length)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new me)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new me;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let r=0,n=this.bones.length;r<n;r++){let s=this.bones[r];s&&(s.parent&&s.parent.isBone?(s.matrix.copy(s.parent.matrixWorld).invert(),s.matrix.multiply(s.matrixWorld)):s.matrix.copy(s.matrixWorld),s.matrix.decompose(s.position,s.quaternion,s.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let n=0,s=e.length;n<s;n++){let a=e[n]?e[n].matrixWorld:J0;Ph.multiplyMatrices(a,t[n]),Ph.toArray(i,16*n)}null!==r&&(r.needsUpdate=!0)}clone(){return new $i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=Math.max(e=tu(e),4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Wa(t,e,e,Ht,Nn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){null!==this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){let n=e.bones[i],s=t[n];void 0===s&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),s=new Gs),this.bones.push(s),this.boneInverses.push(new me().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let r=0,n=t.length;r<n;r++){let s=t[r];e.bones.push(s.uuid);let a=i[r];e.boneInverses.push(a.toArray())}return e}},jr=class extends Ye{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Rh=new me,Lh=new me,Cr=[],j0=new me,Ts=new Ze,Kr=class extends Ze{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jr(new Float32Array(16*i),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let r=0;r<i;r++)this.setMatrixAt(r,j0)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),null!==e.instanceColor&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Ts.geometry=this.geometry,Ts.material=this.material,void 0!==Ts.material)for(let n=0;n<r;n++){this.getMatrixAt(n,Rh),Lh.multiplyMatrices(i,Rh),Ts.matrixWorld=Lh,Ts.raycast(e,Cr);for(let s=0,a=Cr.length;s<a;s++){let l=Cr[s];l.instanceId=n,l.object=this,t.push(l)}Cr.length=0}}setColorAt(e,t){null===this.instanceColor&&(this.instanceColor=new jr(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Ws=class extends Et{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ih=new T,Dh=new T,Nh=new me,xa=new On,Pr=new en,Qi=class extends Oe{constructor(e=new ht,t=new Ws){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(null===e.index){let t=e.attributes.position,i=[0];for(let r=1,n=t.count;r<n;r++)Ih.fromBufferAttribute(t,r-1),Dh.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ih.distanceTo(Dh);e.setAttribute("lineDistance",new At(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,n=e.params.Line.threshold,s=i.drawRange;if(null===i.boundingSphere&&i.computeBoundingSphere(),Pr.copy(i.boundingSphere),Pr.applyMatrix4(r),Pr.radius+=n,!1===e.ray.intersectsSphere(Pr))return;Nh.copy(r).invert(),xa.copy(e.ray).applyMatrix4(Nh);let a=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=new T,u=new T,c=new T,d=new T,p=this.isLineSegments?2:1,f=i.index,m=i.attributes.position;if(null!==f){let g=Math.max(0,s.start),$=Math.min(f.count,s.start+s.count);for(let v=g,x=$-1;v<x;v+=p){let y=f.getX(v),b=f.getX(v+1);if(h.fromBufferAttribute(m,y),u.fromBufferAttribute(m,b),xa.distanceSqToSegment(h,u,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);let _=e.ray.origin.distanceTo(d);_<e.near||_>e.far||t.push({distance:_,point:c.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let S=Math.max(0,s.start),w=Math.min(m.count,s.start+s.count);for(let M=S,E=w-1;M<E;M+=p){if(h.fromBufferAttribute(m,M),u.fromBufferAttribute(m,M+1),xa.distanceSqToSegment(h,u,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);let A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:c.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}},Fh=new T,Oh=new T,$r=class extends Qi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(null===e.index){let t=e.attributes.position,i=[];for(let r=0,n=t.count;r<n;r+=2)Fh.fromBufferAttribute(t,r),Oh.fromBufferAttribute(t,r+1),i[r]=0===r?0:i[r-1],i[r+1]=i[r]+Fh.distanceTo(Oh);e.setAttribute("lineDistance",new At(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Qr=class extends Qi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},qs=class extends Et{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zh=new me,qa=new On,Rr=new en,Lr=new T,eo=class extends Oe{constructor(e=new ht,t=new qs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,n=e.params.Points.threshold,s=i.drawRange;if(null===i.boundingSphere&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(r),Rr.radius+=n,!1===e.ray.intersectsSphere(Rr))return;zh.copy(r).invert(),qa.copy(e.ray).applyMatrix4(zh);let a=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=i.index,u=i.attributes.position;if(null!==h){let c=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let p=c,f=d;p<f;p++){let m=h.getX(p);Lr.fromBufferAttribute(u,m),Bh(Lr,m,l,r,e,t,this)}}else{let g=Math.max(0,s.start),$=Math.min(u.count,s.start+s.count);for(let v=g,x=$;v<x;v++)Lr.fromBufferAttribute(u,v),Bh(Lr,v,l,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}};function Bh(e,t,i,r,n,s,a){let l=qa.distanceSqToPoint(e);if(l<i){let h=new T;qa.closestPointToPoint(e,h),h.applyMatrix4(r);let u=n.ray.origin.distanceTo(h);if(u<n.near||u>n.far)return;s.push({distance:u,distanceToRay:Math.sqrt(l),point:h,index:t,face:null,object:a})}}var tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),n=0;t.push(0);for(let s=1;s<=e;s++)t.push(n+=(i=this.getPoint(s/e)).distanceTo(r)),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,n=i.length,s;s=t||e*i[n-1];let a=0,l=n-1,h;for(;a<=l;)if((h=i[r=Math.floor(a+(l-a)/2)]-s)<0)a=r+1;else if(h>0)l=r-1;else{l=r;break}if(i[r=l]===s)return r/(n-1);let u=i[r],c=i[r+1]-u;return(r+(s-u)/c)/(n-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let n=this.getPoint(i),s=this.getPoint(r),a=t||(n.isVector2?new se:new T);return a.copy(s).sub(n).normalize(),a}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new T,r=[],n=[],s=[],a=new T,l=new me;for(let h=0;h<=e;h++){let u=h/e;r[h]=this.getTangentAt(u,new T)}n[0]=new T,s[0]=new T;let c=Number.MAX_VALUE,d=Math.abs(r[0].x),p=Math.abs(r[0].y),f=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),n[0].crossVectors(r[0],a),s[0].crossVectors(r[0],n[0]);for(let m=1;m<=e;m++){if(n[m]=n[m-1].clone(),s[m]=s[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(lt(r[m-1].dot(r[m]),-1,1));n[m].applyMatrix4(l.makeRotationAxis(a,g))}s[m].crossVectors(r[m],n[m])}if(!0===t){let $=Math.acos(lt(n[0].dot(n[e]),-1,1));$/=e,r[0].dot(a.crossVectors(n[0],n[e]))>0&&($=-$);for(let v=1;v<=e;v++)n[v].applyMatrix4(l.makeRotationAxis(r[v],$*v)),s[v].crossVectors(r[v],n[v])}return{tangents:r,normals:n,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},to=class extends tn{constructor(e=0,t=0,i=1,r=1,n=0,s=2*Math.PI,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=n,this.aEndAngle=s,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new se,r=2*Math.PI,n=this.aEndAngle-this.aStartAngle,s=Math.abs(n)<Number.EPSILON;for(;n<0;)n+=r;for(;n>r;)n-=r;n<Number.EPSILON&&(n=s?0:r),!0!==this.aClockwise||s||(n===r?n=-r:n-=r);let a=this.aStartAngle+e*n,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(0!==this.aRotation){let u=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=l-this.aX,p=h-this.aY;l=d*u-p*c+this.aX,h=d*c+p*u+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xa=class extends to{constructor(e,t,i,r,n,s){super(e,t,i,i,r,n,s),this.isArcCurve=!0,this.type="ArcCurve"}};function _c(){let e=0,t=0,i=0,r=0;function n(n,s,a,l){e=n,t=a,i=-3*n+3*s-2*a-l,r=2*n-2*s+a+l}return{initCatmullRom:function(e,t,i,r,s){n(t,i,s*(i-e),s*(r-t))},initNonuniformCatmullRom:function(e,t,i,r,s,a,l){let h=(t-e)/s-(i-e)/(s+a)+(i-t)/a,u=(i-t)/a-(r-t)/(a+l)+(r-i)/l;n(t,i,h*=a,u*=a)},calc:function(n){let s=n*n;return e+t*n+i*s+r*(s*n)}}}var Ir=new T,_a=new _c,ya=new _c,va=new _c,Ya=class extends tn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new T){let i=t,r=this.points,n=r.length,s=(n-(this.closed?0:1))*e,a=Math.floor(s),l=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/n)+1)*n:0===l&&a===n-1&&(a=n-2,l=1);let h,u;this.closed||a>0?h=r[(a-1)%n]:(Ir.subVectors(r[0],r[1]).add(r[0]),h=Ir);let c=r[a%n],d=r[(a+1)%n];if(this.closed||a+2<n?u=r[(a+2)%n]:(Ir.subVectors(r[n-1],r[n-2]).add(r[n-1]),u=Ir),"centripetal"===this.curveType||"chordal"===this.curveType){let p="chordal"===this.curveType?.5:.25,f=Math.pow(h.distanceToSquared(c),p),m=Math.pow(c.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p);m<1e-4&&(m=1),f<1e-4&&(f=m),g<1e-4&&(g=m),_a.initNonuniformCatmullRom(h.x,c.x,d.x,u.x,f,m,g),ya.initNonuniformCatmullRom(h.y,c.y,d.y,u.y,f,m,g),va.initNonuniformCatmullRom(h.z,c.z,d.z,u.z,f,m,g)}else"catmullrom"===this.curveType&&(_a.initCatmullRom(h.x,c.x,d.x,u.x,this.tension),ya.initCatmullRom(h.y,c.y,d.y,u.y,this.tension),va.initCatmullRom(h.z,c.z,d.z,u.z,this.tension));return i.set(_a.calc(l),ya.calc(l),va.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new T().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Uh(e,t,i,r,n){let s=(r-t)*.5,a=(n-i)*.5,l=e*e;return(2*i-2*r+s+a)*(e*l)+(-3*i+3*r-2*s-a)*l+s*e+i}function K0(e,t){let i=1-e;return i*i*t}function $0(e,t){return 2*(1-e)*e*t}function Q0(e,t){return e*e*t}function Is(e,t,i,r){return K0(e,t)+$0(e,i)+Q0(e,r)}function ex(e,t){let i=1-e;return i*i*i*t}function tx(e,t){let i=1-e;return 3*i*i*e*t}function nx(e,t){return 3*(1-e)*e*e*t}function ix(e,t){return e*e*e*t}function Ds(e,t,i,r,n){return ex(e,t)+tx(e,i)+nx(e,r)+ix(e,n)}var Za=class extends tn{constructor(e=new se,t=new se,i=new se,r=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new se){let i=t,r=this.v0,n=this.v1,s=this.v2,a=this.v3;return i.set(Ds(e,r.x,n.x,s.x,a.x),Ds(e,r.y,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ja=class extends tn{constructor(e=new T,t=new T,i=new T,r=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new T){let i=t,r=this.v0,n=this.v1,s=this.v2,a=this.v3;return i.set(Ds(e,r.x,n.x,s.x,a.x),Ds(e,r.y,n.y,s.y,a.y),Ds(e,r.z,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ja=class extends tn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let i=t;return 1===e?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let i=t||new se;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xs=class extends tn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let i=t;return 1===e?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ka=class extends tn{constructor(e=new se,t=new se,i=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new se){let i=t,r=this.v0,n=this.v1,s=this.v2;return i.set(Is(e,r.x,n.x,s.x),Is(e,r.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},no=class extends tn{constructor(e=new T,t=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new T){let i=t,r=this.v0,n=this.v1,s=this.v2;return i.set(Is(e,r.x,n.x,s.x),Is(e,r.y,n.y,s.y),Is(e,r.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$a=class extends tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let i=t,r=this.points,n=(r.length-1)*e,s=Math.floor(n),a=n-s,l=r[0===s?s:s-1],h=r[s],u=r[s>r.length-2?r.length-1:s+1],c=r[s>r.length-3?r.length-1:s+2];return i.set(Uh(a,l.x,h.x,u.x,c.x),Uh(a,l.y,h.y,u.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new se().fromArray(r))}return this}},sx=Object.freeze({__proto__:null,ArcCurve:Xa,CatmullRomCurve3:Ya,CubicBezierCurve:Za,CubicBezierCurve3:Ja,EllipseCurve:to,LineCurve:ja,LineCurve3:Xs,QuadraticBezierCurve:Ka,QuadraticBezierCurve3:no,SplineCurve:$a}),es=class extends ht{constructor(e=new no(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,i=1,r=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:n};let s=e.computeFrenetFrames(t,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let a=new T,l=new T,h=new se,u=new T,c=[],d=[],p=[],f=[];function m(){for(let e=0;e<t;e++)g(e);g(!1===n?t:0),v(),$()}function g(n){u=e.getPointAt(n/t,u);let h=s.normals[n],p=s.binormals[n];for(let f=0;f<=r;f++){let m=f/r*Math.PI*2,g=Math.sin(m),$=-Math.cos(m);l.x=$*h.x+g*p.x,l.y=$*h.y+g*p.y,l.z=$*h.z+g*p.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,c.push(a.x,a.y,a.z)}}function $(){for(let e=1;e<=t;e++)for(let i=1;i<=r;i++){let n=(r+1)*(e-1)+(i-1),s=(r+1)*e+(i-1),a=(r+1)*e+i,l=(r+1)*(e-1)+i;f.push(n,s,l),f.push(s,a,l)}}function v(){for(let e=0;e<=t;e++)for(let i=0;i<=r;i++)h.x=e/t,h.y=i/r,p.push(h.x,h.y)}m(),this.setIndex(f),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(d,3)),this.setAttribute("uv",new At(p,2))}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new es(new sx[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},ts=class extends Et{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eu,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},on=class extends ts{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Dn(e,t,i){return du(e)?new e.constructor(e.subarray(t,void 0!==i?i:e.length)):e.slice(t,i)}function Dr(e,t,i){return e&&(i||e.constructor!==t)?"number"==typeof t.BYTES_PER_ELEMENT?new t(e):Array.prototype.slice.call(e):e}function du(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function rx(e){let t=e.length,i=Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(function t(i,r){return e[i]-e[r]}),i}function kh(e,t,i){let r=e.length,n=new e.constructor(r);for(let s=0,a=0;a!==r;++s){let l=i[s]*t;for(let h=0;h!==t;++h)n[a++]=e[l+h]}return n}function fu(e,t,i,r){let n=1,s=e[0];for(;void 0!==s&&void 0===s[r];)s=e[n++];if(void 0===s)return;let a=s[r];if(void 0!==a){if(Array.isArray(a))do void 0!==(a=s[r])&&(t.push(s.time),i.push.apply(i,a)),s=e[n++];while(void 0!==s);else if(void 0!==a.toArray)do void 0!==(a=s[r])&&(t.push(s.time),a.toArray(i,i.length)),s=e[n++];while(void 0!==s);else do void 0!==(a=s[r])&&(t.push(s.time),i.push(a)),s=e[n++];while(void 0!==s)}}var Bn=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=void 0!==r?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],n=t[i-1];e:{t:{let s;n:{i:if(!(e<r)){for(let a=i+2;;){if(void 0===r){if(e<n)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(n=r,e<(r=t[++i]))break t}s=t.length;break n}if(!(e>=n)){let l=t[1];e<l&&(i=2,n=l);for(let h=i-2;;){if(void 0===n)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(r=n,e>=(n=t[--i-1]))break t}s=i,i=0;break n}break e}for(;i<s;){let u=i+s>>>1;e<t[u]?s=u:i=u+1}if(r=t[i],void 0===(n=t[i-1]))return this._cachedIndex=0,this.copySampleValue_(0);if(void 0===r)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,r)}return this.interpolate_(i,n,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r;for(let s=0;s!==r;++s)t[s]=i[n+s];return t}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}},Qa=class extends Bn{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ui,endingEnd:Ui}}intervalChanged_(e,t,i){let r=this.parameterPositions,n=e-2,s=e+1,a=r[n],l=r[s];if(void 0===a)switch(this.getSettings_().endingStart){case ki:n=e,a=2*t-i;break;case Ur:a=t+r[n=r.length-2]-r[n+1];break;default:n=e,a=i}if(void 0===l)switch(this.getSettings_().endingEnd){case ki:s=e,l=2*i-t;break;case Ur:s=1,l=i+r[1]-r[0];break;default:s=e-1,l=t}let h=(i-t)*.5,u=this.valueSize;this._weightPrev=h/(t-a),this._weightNext=h/(l-i),this._offsetPrev=n*u,this._offsetNext=s*u}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,u=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(i-t)/(r-t),m=f*f,g=m*f,$=-d*g+2*d*m-d*f,v=(1+d)*g+(-1.5-2*d)*m+(-.5+d)*f+1,x=(-1-p)*g+(1.5+p)*m+.5*f,y=p*g-p*m;for(let b=0;b!==a;++b)n[b]=$*s[u+b]+v*s[h+b]+x*s[l+b]+y*s[c+b];return n}},io=class extends Bn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,u=(i-t)/(r-t),c=1-u;for(let d=0;d!==a;++d)n[d]=s[h+d]*c+s[l+d]*u;return n}},ec=class extends Bn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Wt=class{constructor(e,t,i,r){if(void 0===e)throw Error("THREE.KeyframeTrack: track name is undefined");if(void 0===t||0===t.length)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dr(t,this.TimeBufferType),this.values=Dr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Dr(e.times,Array),values:Dr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zi:t=this.InterpolantFactoryMethodDiscrete;break;case ui:t=this.InterpolantFactoryMethodLinear;break;case Go:t=this.InterpolantFactoryMethodSmooth}if(void 0===t){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zi;case this.InterpolantFactoryMethodLinear:return ui;case this.InterpolantFactoryMethodSmooth:return Go}}getValueSize(){return this.values.length/this.times.length}shift(e){if(0!==e){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(1!==e){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,n=0,s=r-1;for(;n!==r&&i[n]<e;)++n;for(;-1!==s&&i[s]>t;)--s;if(++s,0!==n||s!==r){n>=s&&(n=(s=Math.max(s,1))-1);let a=this.getValueSize();this.times=Dn(i,n,s),this.values=Dn(this.values,n*a,s*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,n=i.length;0===n&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==n;a++){let l=i[a];if("number"==typeof l&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(null!==s&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,s),e=!1;break}s=l}if(void 0!==r&&du(r))for(let h=0,u=r.length;h!==u;++h){let c=r[h];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,c),e=!1;break}}return e}optimize(){let e=Dn(this.times),t=Dn(this.values),i=this.getValueSize(),r=this.getInterpolation()===Go,n=e.length-1,s=1;for(let a=1;a<n;++a){let l=!1,h=e[a];if(h!==e[a+1]&&(1!==a||h!==e[0])){if(r)l=!0;else{let u=a*i,c=u-i,d=u+i;for(let p=0;p!==i;++p){let f=t[u+p];if(f!==t[c+p]||f!==t[d+p]){l=!0;break}}}}if(l){if(a!==s){e[s]=e[a];let m=a*i,g=s*i;for(let $=0;$!==i;++$)t[g+$]=t[m+$]}++s}}if(n>0){e[s]=e[n];for(let v=n*i,x=s*i,y=0;y!==i;++y)t[x+y]=t[v+y];++s}return s!==e.length?(this.times=Dn(e,0,s),this.values=Dn(t,0,s*i)):(this.times=e,this.values=t),this}clone(){let e=Dn(this.times,0),t=Dn(this.values,0),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Wt.prototype.TimeBufferType=Float32Array,Wt.prototype.ValueBufferType=Float32Array,Wt.prototype.DefaultInterpolation=ui;var Un=class extends Wt{};Un.prototype.ValueTypeName="bool",Un.prototype.ValueBufferType=Array,Un.prototype.DefaultInterpolation=Zi,Un.prototype.InterpolantFactoryMethodLinear=void 0,Un.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends Wt{};so.prototype.ValueTypeName="color";var kn=class extends Wt{};kn.prototype.ValueTypeName="number";var tc=class extends Bn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),h=e*a;for(let u=h+a;h!==u;h+=4)et.slerpFlat(n,0,s,h-a,s,h,l);return n}},an=class extends Wt{InterpolantFactoryMethodLinear(e){return new tc(this.times,this.values,this.getValueSize(),e)}};an.prototype.ValueTypeName="quaternion",an.prototype.DefaultInterpolation=ui,an.prototype.InterpolantFactoryMethodSmooth=void 0;var Vn=class extends Wt{};Vn.prototype.ValueTypeName="string",Vn.prototype.ValueBufferType=Array,Vn.prototype.DefaultInterpolation=Zi,Vn.prototype.InterpolantFactoryMethodLinear=void 0,Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var Hn=class extends Wt{};Hn.prototype.ValueTypeName="vector";var ns=class{constructor(e,t=-1,i,r=pc){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=$t(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let n=0,s=i.length;n!==s;++n)t.push(ax(i[n]).scale(r));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let n=0,s=i.length;n!==s;++n)t.push(Wt.toJSON(i[n]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let n=t.length,s=[];for(let a=0;a<n;a++){let l=[],h=[];l.push((a+n-1)%n,a,(a+1)%n),h.push(0,1,0);let u=rx(l);l=kh(l,1,u),h=kh(h,1,u),r||0!==l[0]||(l.push(n),h.push(h[0])),s.push(new kn(".morphTargetInfluences["+t[a].name+"]",l,h).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},n=/^([\w-]*?)([\d]+)$/;for(let s=0,a=e.length;s<a;s++){let l=e[s],h=l.name.match(n);if(h&&h.length>1){let u=h[1],c=r[u];c||(r[u]=c=[]),c.push(l)}}let d=[];for(let p in r)d.push(this.CreateFromMorphTargetSequence(p,r[p],t,i));return d}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(e,t,i,r,n){if(0!==i.length){let s=[],a=[];fu(i,s,a,r),0!==s.length&&n.push(new e(t,s,a))}},r=[],n=e.name||"default",s=e.fps||30,a=e.blendMode,l=e.length||-1,h=e.hierarchy||[];for(let u=0;u<h.length;u++){let c=h[u].keys;if(!(!c||0===c.length)){if(c[0].morphTargets){let d={},p;for(p=0;p<c.length;p++)if(c[p].morphTargets)for(let f=0;f<c[p].morphTargets.length;f++)d[c[p].morphTargets[f]]=-1;for(let m in d){let g=[],$=[];for(let v=0;v!==c[p].morphTargets.length;++v){let x=c[p];g.push(x.time),$.push(x.morphTarget===m?1:0)}r.push(new kn(".morphTargetInfluence["+m+"]",g,$))}l=d.length*s}else{let y=".bones["+t[u].name+"]";i(Hn,y+".position",c,"pos",r),i(an,y+".quaternion",c,"rot",r),i(Hn,y+".scale",c,"scl",r)}}}return 0===r.length?null:new this(n,l,r,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let n=this.tracks[i];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function ox(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return kn;case"vector":case"vector2":case"vector3":case"vector4":return Hn;case"color":return so;case"quaternion":return an;case"bool":case"boolean":return Un;case"string":return Vn}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function ax(e){if(void 0===e.type)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=ox(e.type);if(void 0===e.times){let i=[],r=[];fu(e.keys,i,r,"value"),e.times=i,e.values=r}return void 0!==t.parse?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}var is={enabled:!1,files:{},add:function(e,t){!1!==this.enabled&&(this.files[e]=t)},get:function(e){if(!1!==this.enabled)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},nc=class{constructor(e,t,i){let r=this,n=!1,s=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(e){a++,!1===n&&void 0!==r.onStart&&r.onStart(e,s,a),n=!0},this.itemEnd=function(e){s++,void 0!==r.onProgress&&r.onProgress(e,s,a),s===a&&(n=!1,void 0!==r.onLoad&&r.onLoad())},this.itemError=function(e){void 0!==r.onError&&r.onError(e)},this.resolveURL=function(e){return l?l(e):e},this.setURLModifier=function(e){return l=e,this},this.addHandler=function(e,t){return h.push(e,t),this},this.removeHandler=function(e){let t=h.indexOf(e);return -1!==t&&h.splice(t,2),this},this.getHandler=function(e){for(let t=0,i=h.length;t<i;t+=2){let r=h[t],n=h[t+1];if(r.global&&(r.lastIndex=0),r.test(e))return n}return null}}},cx=new nc,Gn=class{constructor(e){this.manager=void 0!==e?e:cx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},_n={},ic=class extends Error{constructor(e,t){super(e),this.response=t}},Ys=class extends Gn{constructor(e){super(e)}load(e,t,i,r){void 0===e&&(e=""),void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);let n=is.get(e);if(void 0!==n)return this.manager.itemStart(e),setTimeout(()=>{t&&t(n),this.manager.itemEnd(e)},0),n;if(void 0!==_n[e]){_n[e].push({onLoad:t,onProgress:i,onError:r});return}_n[e]=[],_n[e].push({onLoad:t,onProgress:i,onError:r});let s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(t=>{if(200===t.status||0===t.status){if(0===t.status&&console.warn("THREE.FileLoader: HTTP Status 0 received."),"undefined"==typeof ReadableStream||void 0===t.body||void 0===t.body.getReader)return t;let i=_n[e],r=t.body.getReader(),n=t.headers.get("Content-Length")||t.headers.get("X-File-Size"),s=n?parseInt(n):0,a=0!==s,l=0,h=new ReadableStream({start(e){(function t(){r.read().then(({done:r,value:n})=>{if(r)e.close();else{l+=n.byteLength;let h=new ProgressEvent("progress",{lengthComputable:a,loaded:l,total:s});for(let u=0,c=i.length;u<c;u++){let d=i[u];d.onProgress&&d.onProgress(h)}e.enqueue(n),t()}})})()}});return new Response(h)}throw new ic(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(l){case"arraybuffer":return e.arrayBuffer();case"blob":return e.blob();case"document":return e.text().then(e=>new DOMParser().parseFromString(e,a));case"json":return e.json();default:if(void 0===a)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(a),i=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(i);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{is.add(e,t);let i=_n[e];delete _n[e];for(let r=0,n=i.length;r<n;r++){let s=i[r];s.onLoad&&s.onLoad(t)}}).catch(t=>{let i=_n[e];if(void 0===i)throw this.manager.itemError(e),t;delete _n[e];for(let r=0,n=i.length;r<n;r++){let s=i[r];s.onError&&s.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},sc=class extends Gn{constructor(e){super(e)}load(e,t,i,r){void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);let n=this,s=is.get(e);if(void 0!==s)return n.manager.itemStart(e),setTimeout(function(){t&&t(s),n.manager.itemEnd(e)},0),s;let a=Bs("img");function l(){u(),is.add(e,this),t&&t(this),n.manager.itemEnd(e)}function h(t){u(),r&&r(t),n.manager.itemError(e),n.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),"data:"!==e.slice(0,5)&&void 0!==this.crossOrigin&&(a.crossOrigin=this.crossOrigin),n.manager.itemStart(e),a.src=e,a}},ss=class extends Gn{constructor(e){super(e)}load(e,t,i,r){let n=new qe,s=new sc(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(e){n.image=e,n.needsUpdate=!0,void 0!==t&&t(n)},i,r),n}},Zs=class extends Oe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,void 0!==this.groundColor&&(t.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(t.object.distance=this.distance),void 0!==this.angle&&(t.object.angle=this.angle),void 0!==this.decay&&(t.object.decay=this.decay),void 0!==this.penumbra&&(t.object.penumbra=this.penumbra),void 0!==this.shadow&&(t.object.shadow=this.shadow.toJSON()),t}},ba=new me,Vh=new T,Hh=new T,Js=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ks,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Vh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vh),Hh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hh),t.updateMatrixWorld(),ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return 0!==this.bias&&(e.bias=this.bias),0!==this.normalBias&&(e.normalBias=this.normalBias),1!==this.radius&&(e.radius=this.radius),(512!==this.mapSize.x||512!==this.mapSize.y)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},rc=class extends Js{constructor(){super(new dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=2*zs*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,n=e.distance||t.far;(i!==t.fov||r!==t.aspect||n!==t.far)&&(t.fov=i,t.aspect=r,t.far=n,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ro=class extends Zs{constructor(e,t,i=0,r=Math.PI/3,n=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Oe.DefaultUp),this.updateMatrix(),this.target=new Oe,this.distance=i,this.angle=r,this.penumbra=n,this.decay=s,this.map=null,this.shadow=new rc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Gh=new me,As=new T,Ma=new T,oc=class extends Js{constructor(){super(new dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,n=e.distance||i.far;n!==i.far&&(i.far=n,i.updateProjectionMatrix()),As.setFromMatrixPosition(e.matrixWorld),i.position.copy(As),Ma.copy(i.position),Ma.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ma),i.updateMatrixWorld(),r.makeTranslation(-As.x,-As.y,-As.z),Gh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh)}},oo=class extends Zs{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new oc}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ac=class extends Js{constructor(){super(new ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ao=class extends Zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DefaultUp),this.updateMatrix(),this.target=new Oe,this.shadow=new ac}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},cn=class{static decodeText(e){if("undefined"!=typeof TextDecoder)return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return -1===t?"./":e.slice(0,t+1)}static resolveURL(e,t){return"string"!=typeof e||""===e?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},co=class extends Gn{constructor(e){super(e),this.isImageBitmapLoader=!0,"undefined"==typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),"undefined"==typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){void 0===e&&(e=""),void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);let n=this,s=is.get(e);if(void 0!==s)return n.manager.itemStart(e),setTimeout(function(){t&&t(s),n.manager.itemEnd(e)},0),s;let a={};a.credentials="anonymous"===this.crossOrigin?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(n.options,{colorSpaceConversion:"none"}))}).then(function(i){is.add(e,i),t&&t(i),n.manager.itemEnd(e)}).catch(function(t){r&&r(t),n.manager.itemError(e),n.manager.itemEnd(e)}),n.manager.itemStart(e)}},Wn=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Wh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Wh(){return("undefined"==typeof performance?Date:performance).now()}var cc=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,n,s;switch(t){case"quaternion":r=this._slerp,n=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*i),this._workIndex=5;break;case"string":case"bool":r=this._select,n=this._select,s=this._setAdditiveIdentityOther,this.buffer=Array(5*i);break;default:r=this._lerp,n=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*i)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=n,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,r=this.valueSize,n=e*r+r,s=this.cumulativeWeight;if(0===s){for(let a=0;a!==r;++a)i[n+a]=i[a];s=t}else{s+=t;let l=t/s;this._mixBufferRegion(i,n,0,l,r)}this.cumulativeWeight=s}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,r=i*this._addIndex;0===this.cumulativeWeightAdditive&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,r=e*t+t,n=this.cumulativeWeight,s=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,n<1){let l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-n,t)}s>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let h=t,u=t+t;h!==u;++h)if(i[h]!==i[h+t]){a.setValue(i,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let n=i,s=r;n!==s;++n)t[n]=t[r+n%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,n){if(r>=.5)for(let s=0;s!==n;++s)e[t+s]=e[i+s]}_slerp(e,t,i,r){et.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,n){let s=this._workIndex*n;et.multiplyQuaternionsFlat(e,s,e,t,e,i),et.slerpFlat(e,t,e,t,e,s,r)}_lerp(e,t,i,r,n){let s=1-r;for(let a=0;a!==n;++a){let l=t+a;e[l]=e[l]*s+e[i+a]*r}}_lerpAdditive(e,t,i,r,n){for(let s=0;s!==n;++s){let a=t+s;e[a]=e[a]+e[i+s]*r}}},yc="\\[\\]\\.:\\/",lx=RegExp("["+yc+"]","g"),vc="[^"+yc+"]",hx="[^"+yc.replace("\\.","")+"]",ux=/((?:WC+[\/:])*)/.source.replace("WC",vc),dx=/(WCOD+)?/.source.replace("WCOD",hx),fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),px=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),mx=RegExp("^"+ux+dx+fx+px+"$"),gx=["material","materials","bones","map"],lc=class{constructor(e,t,i){let r=i||Ie.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];void 0!==r&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,n=i.length;r!==n;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ie=class{constructor(e,t,i){this.path=t,this.parsedPath=i||Ie.parseTrackName(t),this.node=Ie.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ie.Composite(e,t,i):new Ie(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lx,"")}static parseTrackName(e){let t=mx.exec(e);if(null===t)throw Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(void 0!==r&&-1!==r){let n=i.nodeName.substring(r+1);-1!==gx.indexOf(n)&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=n)}if(null===i.propertyName||0===i.propertyName.length)throw Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(void 0===t||""===t||"."===t||-1===t||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(void 0!==i)return i}if(e.children){let r=function(e){for(let i=0;i<e.length;i++){let n=e[i];if(n.name===t||n.uuid===t)return n;let s=r(n.children);if(s)return s}return null},n=r(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,n=t.propertyIndex;if(e||(e=Ie.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let s=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let a=0;a<e.length;a++)if(e[a].name===s){s=a;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(void 0===e[i]){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(void 0!==s){if(void 0===e[s]){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[s]}}let l=e[r];if(void 0===l){let h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,void 0!==e.needsUpdate?u=this.Versioning.NeedsUpdate:void 0!==e.matrixWorldNeedsUpdate&&(u=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(void 0!==n){if("morphTargetInfluences"===r){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}void 0!==e.morphTargetDictionary[n]&&(n=e.morphTargetDictionary[n])}c=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=n}else void 0!==l.fromArray&&void 0!==l.toArray?(c=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(c=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=lc,Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray],Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hc=class{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;let n=t.tracks,s=n.length,a=Array(s),l={endingStart:Ui,endingEnd:Ui};for(let h=0;h!==s;++h){let u=n[h].createInterpolant(null);a[h]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Vd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let r=this._clip.duration,n=e._clip.duration;e.warp(1,n/r,t),this.warp(r/n,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return null!==e&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let r=this._mixer,n=r.time,s=this.timeScale,a=this._timeScaleInterpolant;null===a&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,h=a.sampleValues;return l[0]=n,l[1]=n+i,h[0]=e/s,h[1]=t/s,this}stopWarping(){let e=this._timeScaleInterpolant;return null!==e&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}let n=this._startTime;if(null!==n){let s=(e-n)*i;s<0||0===i?t=0:(this._startTime=null,t=i*s)}t*=this._updateTimeScale(e);let a=this._updateTime(t),l=this._updateWeight(e);if(l>0){let h=this._interpolants,u=this._propertyBindings;if(this.blendMode===Gd)for(let c=0,d=h.length;c!==d;++c)h[c].evaluate(a),u[c].accumulateAdditive(l);else for(let p=0,f=h.length;p!==f;++p)h[p].evaluate(a),u[p].accumulate(r,l)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(null!==i){let r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),0===r&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;null!==i&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),0===t?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,r=this.time+e,n=this._loopCount,s=i===Hd;if(0===e)return -1===n?r:s&&(1&n)==1?t-r:r;if(i===kd){-1===n&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(-1===n&&(e>=0?(n=0,this._setEndings(!0,0===this.repetitions,s)):this._setEndings(0===this.repetitions,!0,s)),r>=t||r<0){let a=Math.floor(r/t);r-=t*a,n+=Math.abs(a);let l=this.repetitions-n;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(1===l){let h=e<0;this._setEndings(h,!h,s)}else this._setEndings(!1,!1,s);this._loopCount=n,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(s&&(1&n)==1)return t-r}return r}_setEndings(e,t,i){let r=this._interpolantSettings;i?(r.endingStart=ki,r.endingEnd=ki):(e?r.endingStart=this.zeroSlopeAtStart?ki:Ui:r.endingStart=Ur,t?r.endingEnd=this.zeroSlopeAtEnd?ki:Ui:r.endingEnd=Ur)}_scheduleFading(e,t,i){let r=this._mixer,n=r.time,s=this._weightInterpolant;null===s&&(s=r._lendControlInterpolant(),this._weightInterpolant=s);let a=s.parameterPositions,l=s.sampleValues;return a[0]=n,l[0]=t,a[1]=n+e,l[1]=i,this}},xx=new Float32Array(1),lo=class extends bn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let i=e._localRoot||this._root,r=e._clip.tracks,n=r.length,s=e._propertyBindings,a=e._interpolants,l=i.uuid,h=this._bindingsByRootAndName,u=h[l];void 0===u&&(u={},h[l]=u);for(let c=0;c!==n;++c){let d=r[c],p=d.name,f=u[p];if(void 0!==f)++f.referenceCount,s[c]=f;else{if(void 0!==(f=s[c])){null===f._cacheIndex&&(++f.referenceCount,this._addInactiveBinding(f,l,p));continue}let m=t&&t._propertyBindings[c].binding.parsedPath;f=new cc(Ie.create(i,p,m),d.ValueTypeName,d.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,p),s[c]=f}a[c].resultBuffer=f.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(null===e._cacheIndex){let t=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,t)}let n=e._propertyBindings;for(let s=0,a=n.length;s!==a;++s){let l=n[s];0==l.useCount++&&(this._lendBinding(l),l.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let n=t[i];0==--n.useCount&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0,this.stats={actions:{get total(){return this._actions.length},get inUse(){return this._nActiveActions}},bindings:{get total(){return this._bindings.length},get inUse(){return this._nActiveBindings}},controlInterpolants:{get total(){return this._controlInterpolants.length},get inUse(){return this._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return null!==t&&t<this._nActiveActions}_addInactiveAction(e,t,i){let r=this._actions,n=this._actionsByClip,s=n[t];if(void 0===s)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,n[t]=s;else{let a=s.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),s.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;let n=e._clip.uuid,s=this._actionsByClip,a=s[n],l=a.knownActions,h=l[l.length-1],u=e._byClipCacheIndex;h._byClipCacheIndex=u,l[u]=h,l.pop(),e._byClipCacheIndex=null;let c;delete a.actionByRoot[(e._localRoot||this._root).uuid],0===l.length&&delete s[n],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let n=t[i];0==--n.referenceCount&&this._removeInactiveBinding(n)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_addInactiveBinding(e,t,i){let r=this._bindingsByRootAndName,n=this._bindings,s=r[t];void 0===s&&(s={},r[t]=s),s[i]=e,e._cacheIndex=n.length,n.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,r=i.rootNode.uuid,n=i.path,s=this._bindingsByRootAndName,a=s[r],l=t[t.length-1],h=e._cacheIndex;l._cacheIndex=h,t[h]=l,t.pop(),delete a[n],0===Object.keys(a).length&&delete s[r]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return void 0===i&&((i=new io(new Float32Array(2),new Float32Array(2),1,xx)).__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,n=t[r];e.__cacheIndex=r,t[r]=e,n.__cacheIndex=i,t[i]=n}clipAction(e,t,i){let r=t||this._root,n=r.uuid,s="string"==typeof e?ns.findByName(r,e):e,a=null!==s?s.uuid:e,l=this._actionsByClip[a],h=null;if(void 0===i&&(i=null!==s?s.blendMode:pc),void 0!==l){let u=l.actionByRoot[n];if(void 0!==u&&u.blendMode===i)return u;h=l.knownActions[0],null===s&&(s=h._clip)}if(null===s)return null;let c=new hc(this,s,t,i);return this._bindAction(c,h),this._addInactiveAction(c,a,n),c}existingAction(e,t){let i=t||this._root,r=i.uuid,n="string"==typeof e?ns.findByName(i,e):e,s=n?n.uuid:e,a=this._actionsByClip[s];return void 0!==a&&a.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,r=this.time+=e,n=Math.sign(e),s=this._accuIndex^=1;for(let a=0;a!==i;++a)t[a]._update(r,e,n,s);let l=this._bindings,h=this._nActiveBindings;for(let u=0;u!==h;++u)l[u].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,r=this._actionsByClip,n=r[i];if(void 0!==n){let s=n.knownActions;for(let a=0,l=s.length;a!==l;++a){let h=s[a];this._deactivateAction(h);let u=h._cacheIndex,c=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,c._cacheIndex=u,t[u]=c,t.pop(),this._removeInactiveBindingsForAction(h)}delete r[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let r in i){let n=i[r].actionByRoot[t];void 0!==n&&(this._deactivateAction(n),this._removeInactiveAction(n))}let s=this._bindingsByRootAndName[t];if(void 0!==s)for(let a in s){let l=s[a];l.restoreOriginalState(),this._removeInactiveBinding(l)}}uncacheAction(e,t){let i=this.existingAction(e,t);null!==i&&(this._deactivateAction(i),this._removeInactiveAction(i))}},ho=class{constructor(e,t,i=0,r=1/0){this.ray=new On(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return uc(e,this,i,t),i.sort(qh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,n=e.length;r<n;r++)uc(e[r],this,i,t);return i.sort(qh),i}};function qh(e,t){return e.distance-t.distance}function uc(e,t,i,r){if(e.layers.test(t.layers)&&e.raycast(t,i),!0===r){let n=e.children;for(let s=0,a=n.length;s<a;s++)uc(n[s],t,i,!0)}}var Xh=new T,Nr=new T,Ct=class{constructor(e=new T,t=new T){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Xh.subVectors(e,this.start),Nr.subVectors(this.end,this.start);let i=Nr.dot(Nr),r=Nr.dot(Xh)/i;return t&&(r=lt(r,0,1)),r}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dc}})),"undefined"!=typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dc);var pu=5960464477539063e-23,xi=class{constructor(){}};function qt(e,t,i){return i.min.x=t[e],i.min.y=t[e+1],i.min.z=t[e+2],i.max.x=t[e+3],i.max.y=t[e+4],i.max.z=t[e+5],i}function bc(e){let t=-1,i=-1/0;for(let r=0;r<3;r++){let n=e[r+3]-e[r];n>i&&(i=n,t=r)}return t}function Mc(e,t){t.set(e)}function wc(e,t,i){let r,n;for(let s=0;s<3;s++){let a=s+3;r=e[s],n=t[s],i[s]=r<n?r:n,r=e[a],n=t[a],i[a]=r>n?r:n}}function js(e,t,i){for(let r=0;r<3;r++){let n=t[e+2*r],s=t[e+2*r+1],a=n-s,l=n+s;a<i[r]&&(i[r]=a),l>i[r+3]&&(i[r+3]=l)}}function os(e){let t=e[3]-e[0],i=e[4]-e[1],r=e[5]-e[2];return 2*(t*i+i*r+r*t)}function bx(e,t){if(!e.index){let i=e.attributes.position.count,r=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n;n=i>65535?new Uint32Array(new r(4*i)):new Uint16Array(new r(2*i)),e.setIndex(new Ye(n,1));for(let s=0;s<i;s++)n[s]=s}}function Mx(e){if(!e.groups||!e.groups.length)return[{offset:0,count:e.index.count/3}];let t=[],i=new Set;for(let r of e.groups)i.add(r.start),i.add(r.start+r.count);let n=Array.from(i.values()).sort((e,t)=>e-t);for(let s=0;s<n.length-1;s++){let a=n[s],l=n[s+1];t.push({offset:a/3,count:(l-a)/3})}return t}function Tc(e,t,i,r,n=null){let s=1/0,a=1/0,l=1/0,h=-1/0,u=-1/0,c=-1/0,d=1/0,p=1/0,f=1/0,m=-1/0,g=-1/0,$=-1/0,v=null!==n;for(let x=6*t,y=(t+i)*6;x<y;x+=6){let b=e[x+0],_=e[x+1],S=b-_,w=b+_;S<s&&(s=S),w>h&&(h=w),v&&b<d&&(d=b),v&&b>m&&(m=b);let M=e[x+2],E=e[x+3],A=M-E,C=M+E;A<a&&(a=A),C>u&&(u=C),v&&M<p&&(p=M),v&&M>g&&(g=M);let L=e[x+4],R=e[x+5],P=L-R,I=L+R;P<l&&(l=P),I>c&&(c=I),v&&L<f&&(f=L),v&&L>$&&($=L)}r[0]=s,r[1]=a,r[2]=l,r[3]=h,r[4]=u,r[5]=c,v&&(n[0]=d,n[1]=p,n[2]=f,n[3]=m,n[4]=g,n[5]=$)}function wx(e,t,i,r){let n=1/0,s=1/0,a=1/0,l=-1/0,h=-1/0,u=-1/0;for(let c=6*t,d=(t+i)*6;c<d;c+=6){let p=e[c+0];p<n&&(n=p),p>l&&(l=p);let f=e[c+2];f<s&&(s=f),f>h&&(h=f);let m=e[c+4];m<a&&(a=m),m>u&&(u=m)}r[0]=n,r[1]=s,r[2]=a,r[3]=l,r[4]=h,r[5]=u}function Sx(e,t,i,r,n){let s=i,a=i+r-1,l=n.pos,h=2*n.axis;for(;;){for(;s<=a&&t[6*s+h]<l;)s++;for(;s<=a&&t[6*a+h]>=l;)a--;if(!(s<a))return s;for(let u=0;u<3;u++){let c=e[3*s+u];e[3*s+u]=e[3*a+u],e[3*a+u]=c;let d=t[6*s+2*u+0];t[6*s+2*u+0]=t[6*a+2*u+0],t[6*a+2*u+0]=d;let p=t[6*s+2*u+1];t[6*s+2*u+1]=t[6*a+2*u+1],t[6*a+2*u+1]=p}s++,a--}}var Sn=32,Tx=(e,t)=>e.candidate-t.candidate,qn=Array(Sn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),po=new Float32Array(6);function Ax(e,t,i,r,n,s){let a=-1,l=0;if(0===s)-1!==(a=bc(t))&&(l=(t[a]+t[a+3])/2);else if(1===s)-1!==(a=bc(e))&&(l=Ex(i,r,n,a));else if(2===s){let h=os(e),u=1.25*n,c=6*r,d=(r+n)*6;for(let p=0;p<3;p++){let f=t[p],m=(t[p+3]-f)/Sn;if(n<Sn/4){let g=[...qn];g.length=n;let $=0;for(let v=c;v<d;v+=6,$++){let x=g[$];x.candidate=i[v+2*p],x.count=0;let{bounds:y,leftCacheBounds:b,rightCacheBounds:_}=x;for(let S=0;S<3;S++)_[S]=1/0,_[S+3]=-1/0,b[S]=1/0,b[S+3]=-1/0,y[S]=1/0,y[S+3]=-1/0;js(v,i,y)}g.sort(Tx);let w=n;for(let M=0;M<w;M++){let E=g[M];for(;M+1<w&&g[M+1].candidate===E.candidate;)g.splice(M+1,1),w--}for(let A=c;A<d;A+=6){let C=i[A+2*p];for(let L=0;L<w;L++){let R=g[L];C>=R.candidate?js(A,i,R.rightCacheBounds):(js(A,i,R.leftCacheBounds),R.count++)}}for(let P=0;P<w;P++){let I=g[P],D=I.count,N=n-I.count,O=I.leftCacheBounds,z=I.rightCacheBounds,U=0;0!==D&&(U=os(O)/h);let B=0;0!==N&&(B=os(z)/h);let F=1+1.25*(U*D+B*N);F<u&&(a=p,u=F,l=I.candidate)}}else{for(let k=0;k<Sn;k++){let H=qn[k];H.count=0,H.candidate=f+m+k*m;let V=H.bounds;for(let G=0;G<3;G++)V[G]=1/0,V[G+3]=-1/0}for(let W=c;W<d;W+=6){let q=~~((i[W+2*p]-f)/m);q>=Sn&&(q=Sn-1);let j=qn[q];j.count++,js(W,i,j.bounds)}let X=qn[Sn-1];Mc(X.bounds,X.rightCacheBounds);for(let Y=Sn-2;Y>=0;Y--){let K=qn[Y],J=qn[Y+1];wc(K.bounds,J.rightCacheBounds,K.rightCacheBounds)}let Z=0;for(let Q=0;Q<Sn-1;Q++){let ee=qn[Q],ei=ee.count,e$=ee.bounds,ev=qn[Q+1].rightCacheBounds;0!==ei&&(0===Z?Mc(e$,po):wc(e$,po,po));let e8=0,ey=0;0!==(Z+=ei)&&(e8=os(po)/h);let eb=n-Z;0!==eb&&(ey=os(ev)/h);let eS=1+1.25*(e8*Z+ey*eb);eS<u&&(a=p,u=eS,l=ee.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:a,pos:l}}function Ex(e,t,i,r){let n=0;for(let s=t,a=t+i;s<a;s++)n+=e[6*s+2*r];return n/i}function Cx(e,t){let i=e.attributes.position,r=e.index.array,n=r.length/3,s=new Float32Array(6*n),a=i.normalized,l=i.array,h=i.offset||0,u=3;i.isInterleavedBufferAttribute&&(u=i.data.stride);let c=["getX","getY","getZ"];for(let d=0;d<n;d++){let p=3*d,f=6*d,m,g,$;a?(m=r[p+0],g=r[p+1],$=r[p+2]):(m=r[p+0]*u+h,g=r[p+1]*u+h,$=r[p+2]*u+h);for(let v=0;v<3;v++){let x,y,b;a?(x=i[c[v]](m),y=i[c[v]](g),b=i[c[v]]($)):(x=l[m+v],y=l[g+v],b=l[$+v]);let _=x;y<_&&(_=y),b<_&&(_=b);let S=x;y>S&&(S=y),b>S&&(S=b);let w=(S-_)/2,M=2*v;s[f+M+0]=_+w,s[f+M+1]=w+(Math.abs(_)+w)*pu,_<t[v]&&(t[v]=_),S>t[v+3]&&(t[v+3]=S)}}return s}function Px(e,t){function i(e){p&&p(e/f)}function r(t,n,p,f=null,g=0){if(!m&&g>=h&&(m=!0,u&&(console.warn(`MeshBVH: Max depth of ${h} reached when generating BVH. Consider increasing maxDepth.`),console.warn(e))),p<=c||g>=h)return i(n+p),t.offset=n,t.count=p,t;let $=Ax(t.boundingData,f,a,n,p,d);if(-1===$.axis)return i(n+p),t.offset=n,t.count=p,t;let v=Sx(l,a,n,p,$);if(v===n||v===n+p)i(n+p),t.offset=n,t.count=p;else{t.splitAxis=$.axis;let x=new xi,y=n,b=v-n;t.left=x,x.boundingData=new Float32Array(6),Tc(a,y,b,x.boundingData,s),r(x,y,b,s,g+1);let _=new xi,S=v,w=p-b;t.right=_,_.boundingData=new Float32Array(6),Tc(a,S,w,_.boundingData,s),r(_,S,w,s,g+1)}return t}bx(e,t);let n=new Float32Array(6),s=new Float32Array(6),a=Cx(e,n),l=e.index.array,h=t.maxDepth,u=t.verbose,c=t.maxLeafTris,d=t.strategy,p=t.onProgress,f=e.index.count/3,m=!1,g=[],$=Mx(e);if(1===$.length){let v=$[0],x=new xi;x.boundingData=n,wx(a,v.offset,v.count,s),r(x,v.offset,v.count,s),g.push(x)}else for(let y of $){let b=new xi;b.boundingData=new Float32Array(6),Tc(a,y.offset,y.count,b.boundingData,s),r(b,y.offset,y.count,s),g.push(b)}return g}function xu(e,t){let i=Px(e,t),r,n,s,a=[],l=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;for(let h=0;h<i.length;h++){let u=i[h],c=p(u),d=new l(32*c);r=new Float32Array(d),n=new Uint32Array(d),s=new Uint16Array(d),f(0,u),a.push(d)}return a;function p(e){return e.count?1:1+p(e.left)+p(e.right)}function f(e,t){let i=e/4,a=e/2,l=!!t.count,h=t.boundingData;for(let u=0;u<6;u++)r[i+u]=h[u];if(l){let c=t.offset,d=t.count;return n[i+6]=c,s[a+14]=d,s[a+15]=65535,e+32}{let p=t.left,m=t.right,g=t.splitAxis,$;if(($=f(e+32,p))/4>4294967296)throw Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return n[i+6]=$/4,$=f($,m),n[i+7]=g,$}}}var Pt=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let i=1/0,r=-1/0;for(let n=0,s=e.length;n<s;n++){let a=e[n][t];i=a<i?a:i,r=a>r?a:r}this.min=i,this.max=r}setFromPoints(e,t){let i=1/0,r=-1/0;for(let n=0,s=t.length;n<s;n++){let a=t[n],l=e.dot(a);i=l<i?l:i,r=l>r?l:r}this.min=i,this.max=r}isSeparated(e){return this.min>e.max||e.min>this.max}};Pt.prototype.setFromBox=function(){let e=new T;return function(t,i){let r=i.min,n=i.max,s=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){e.x=r.x*l+n.x*(1-l),e.y=r.y*h+n.y*(1-h),e.z=r.z*u+n.z*(1-u);let c=t.dot(e);s=Math.min(c,s),a=Math.max(c,a)}this.min=s,this.max=a}}();var v_=function(){let e=new Pt;return function(t,i){let r=t.points,n=t.satAxes,s=t.satBounds,a=i.points,l=i.satAxes,h=i.satBounds;for(let u=0;u<3;u++){let c=s[u],d=n[u];if(e.setFromPoints(d,a),c.isSeparated(e))return!1}for(let p=0;p<3;p++){let f=h[p],m=l[p];if(e.setFromPoints(m,r),f.isSeparated(e))return!1}}}(),Rx=function(){let e=new T,t=new T,i=new T;return function(r,n,s){let a=r.start,l=e,h=n.start,u=t;i.subVectors(a,h),e.subVectors(r.end,r.start),t.subVectors(n.end,n.start);let c=i.dot(u),d=u.dot(l),p=u.dot(u),f=i.dot(l),m=l.dot(l)*p-d*d,g,$;g=0!==m?(c*d-f*p)/m:0,$=(c+g*d)/p,s.x=g,s.y=$}}(),Ks=function(){let e=new se,t=new T,i=new T;return function(r,n,s,a){Rx(r,n,e);let l=e.x,h=e.y;if(l>=0&&l<=1&&h>=0&&h<=1){r.at(l,s),n.at(h,a);return}if(l>=0&&l<=1){h<0?n.at(0,a):n.at(1,a),r.closestPointToPoint(a,!0,s);return}if(h>=0&&h<=1){l<0?r.at(0,s):r.at(1,s),n.closestPointToPoint(s,!0,a);return}{let u;u=l<0?r.start:r.end;let c;c=h<0?n.start:n.end;let d=t,p=i;if(r.closestPointToPoint(c,!0,t),n.closestPointToPoint(u,!0,i),d.distanceToSquared(c)<=p.distanceToSquared(u)){s.copy(d),a.copy(c);return}s.copy(u),a.copy(p);return}}}(),_u=function(){let e=new T,t=new T,i=new Ot,r=new Ct;return function(n,s){let{radius:a,center:l}=n,{a:h,b:u,c:c}=s;if(r.start=h,r.end=u,r.closestPointToPoint(l,!0,e).distanceTo(l)<=a||(r.start=h,r.end=c,r.closestPointToPoint(l,!0,e).distanceTo(l)<=a)||(r.start=u,r.end=c,r.closestPointToPoint(l,!0,e).distanceTo(l)<=a))return!0;let d=s.getPlane(i);if(Math.abs(d.distanceToPoint(l))<=a){let p=d.projectPoint(l,t);if(s.containsPoint(p))return!0}return!1}}(),Lx=1e-15;function as(e){return Math.abs(e)<Lx}var Rt=class extends ft{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=[,,,,].fill().map(()=>new T),this.satBounds=[,,,,].fill().map(()=>new Pt),this.points=[this.a,this.b,this.c],this.sphere=new en,this.plane=new Ot,this.needsUpdate=!0}intersectsSphere(e){return _u(e,this)}update(){let e=this.a,t=this.b,i=this.c,r=this.points,n=this.satAxes,s=this.satBounds,a=n[0],l=s[0];this.getNormal(a),l.setFromPoints(a,r);let h=n[1],u=s[1];h.subVectors(e,t),u.setFromPoints(h,r);let c=n[2],d=s[2];c.subVectors(t,i),d.setFromPoints(c,r);let p=n[3],f=s[3];p.subVectors(i,e),f.setFromPoints(p,r),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}};Rt.prototype.closestPointToSegment=function(){let e=new T,t=new T,i=new Ct;return function(r,n=null,s=null){let{start:a,end:l}=r,h=this.points,u,c=1/0;for(let d=0;d<3;d++){let p=(d+1)%3;i.start.copy(h[d]),i.end.copy(h[p]),Ks(i,r,e,t),(u=e.distanceToSquared(t))<c&&(c=u,n&&n.copy(e),s&&s.copy(t))}return this.closestPointToPoint(a,e),(u=a.distanceToSquared(e))<c&&(c=u,n&&n.copy(e),s&&s.copy(a)),this.closestPointToPoint(l,e),(u=l.distanceToSquared(e))<c&&(c=u,n&&n.copy(e),s&&s.copy(l)),Math.sqrt(c)}}(),Rt.prototype.intersectsTriangle=function(){let e=new Rt,t=[,,,],i=[,,,],r=new Pt,n=new Pt,s=new T,a=new T,l=new T,h=new T,u=new Ct,c=new Ct,d=new Ct;return function(p,f=null,m=!1){this.needsUpdate&&this.update(),p.isExtendedTriangle?p.needsUpdate&&p.update():(e.copy(p),e.update(),p=e);let g=this.plane,$=p.plane;if(Math.abs(g.normal.dot($.normal))>1-1e-10){let v=this.satBounds,x=this.satAxes;i[0]=p.a,i[1]=p.b,i[2]=p.c;for(let y=0;y<4;y++){let b=v[y],_=x[y];if(r.setFromPoints(_,i),b.isSeparated(r))return!1}let S=p.satBounds,w=p.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let M=0;M<4;M++){let E=S[M],A=w[M];if(r.setFromPoints(A,t),E.isSeparated(r))return!1}for(let C=0;C<4;C++){let L=x[C];for(let R=0;R<4;R++){let P=w[R];if(s.crossVectors(L,P),r.setFromPoints(s,t),n.setFromPoints(s,i),r.isSeparated(n))return!1}}return f&&(m||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),f.start.set(0,0,0),f.end.set(0,0,0)),!0}{let I=this.points,D=!1,N=0;for(let O=0;O<3;O++){let z=I[O],U=I[(O+1)%3];u.start.copy(z),u.end.copy(U),u.delta(a);let B=D?c.start:c.end,F=as($.distanceToPoint(z));if(as($.normal.dot(a))&&F){c.copy(u),N=2;break}if(($.intersectLine(u,B)||F)&&!as(B.distanceTo(U))){if(N++,D)break;D=!0}}if(1===N&&p.containsPoint(c.end))return f&&(f.start.copy(c.end),f.end.copy(c.end)),!0;if(2!==N)return!1;let k=p.points,H=!1,V=0;for(let G=0;G<3;G++){let W=k[G],q=k[(G+1)%3];u.start.copy(W),u.end.copy(q),u.delta(l);let j=H?d.start:d.end,X=as(g.distanceToPoint(W));if(as(g.normal.dot(l))&&X){d.copy(u),V=2;break}if((g.intersectLine(u,j)||X)&&!as(j.distanceTo(q))){if(V++,H)break;H=!0}}if(1===V&&this.containsPoint(d.end))return f&&(f.start.copy(d.end),f.end.copy(d.end)),!0;if(2!==V)return!1;if(c.delta(a),d.delta(l),0>a.dot(l)){let Y=d.start;d.start=d.end,d.end=Y}let K=c.start.dot(a),J=c.end.dot(a),Z=d.start.dot(a),Q=d.end.dot(a);return(K===Q||Z===J||J<Z!=K<Q)&&(f&&(h.subVectors(c.start,d.start),h.dot(a)>0?f.start.copy(c.start):f.start.copy(d.start),h.subVectors(c.end,d.end),0>h.dot(a)?f.end.copy(c.end):f.end.copy(d.end)),!0)}}}(),Rt.prototype.distanceToPoint=function(){let e=new T;return function(t){return this.closestPointToPoint(t,e),t.distanceTo(e)}}(),Rt.prototype.distanceToTriangle=function(){let e=new T,t=new T,i=["a","b","c"],r=new Ct,n=new Ct;return function(s,a=null,l=null){let h=a||l?r:null;if(this.intersectsTriangle(s,h))return(a||l)&&(a&&h.getCenter(a),l&&h.getCenter(l)),0;let u=1/0;for(let c=0;c<3;c++){let d,p=i[c],f=s[p];this.closestPointToPoint(f,e),(d=f.distanceToSquared(e))<u&&(u=d,a&&a.copy(e),l&&l.copy(f));let m=this[p];s.closestPointToPoint(m,e),(d=m.distanceToSquared(e))<u&&(u=d,a&&a.copy(m),l&&l.copy(e))}for(let g=0;g<3;g++){let $=i[g],v=i[(g+1)%3];r.set(this[$],this[v]);for(let x=0;x<3;x++){let y=i[x],b=i[(x+1)%3];n.set(s[y],s[b]),Ks(r,n,e,t);let _=e.distanceToSquared(t);_<u&&(u=_,a&&a.copy(e),l&&l.copy(t))}}return Math.sqrt(u)}}();var Lt=class{constructor(e,t,i){this.isOrientedBox=!0,this.min=new T,this.max=new T,this.matrix=new me,this.invMatrix=new me,this.points=Array(8).fill().map(()=>new T),this.satAxes=[,,,].fill().map(()=>new T),this.satBounds=[,,,].fill().map(()=>new Pt),this.alignedSatBounds=[,,,].fill().map(()=>new Pt),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),i&&this.matrix.copy(i)}set(e,t,i){this.min.copy(e),this.max.copy(t),this.matrix.copy(i),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};Lt.prototype.update=function(){let e=this.matrix,t=this.min,i=this.max,r=this.points;for(let n=0;n<=1;n++)for(let s=0;s<=1;s++)for(let a=0;a<=1;a++){let l=r[1*n|2*s|4*a];l.x=n?i.x:t.x,l.y=s?i.y:t.y,l.z=a?i.z:t.z,l.applyMatrix4(e)}let h=this.satBounds,u=this.satAxes,c=r[0];for(let d=0;d<3;d++){let p=u[d],f=h[d],m=r[1<<d];p.subVectors(c,m),f.setFromPoints(p,r)}let g=this.alignedSatBounds;g[0].setFromPointsField(r,"x"),g[1].setFromPointsField(r,"y"),g[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1},Lt.prototype.intersectsBox=function(){let e=new Pt;return function(t){this.needsUpdate&&this.update();let i=t.min,r=t.max,n=this.satBounds,s=this.satAxes,a=this.alignedSatBounds;if(e.min=i.x,e.max=r.x,a[0].isSeparated(e)||(e.min=i.y,e.max=r.y,a[1].isSeparated(e))||(e.min=i.z,e.max=r.z,a[2].isSeparated(e)))return!1;for(let l=0;l<3;l++){let h=s[l],u=n[l];if(e.setFromBox(h,t),u.isSeparated(e))return!1}return!0}}(),Lt.prototype.intersectsTriangle=function(){let e=new Rt,t=[,,,],i=new Pt,r=new Pt,n=new T;return function(s){this.needsUpdate&&this.update(),s.isExtendedTriangle?s.needsUpdate&&s.update():(e.copy(s),e.update(),s=e);let a=this.satBounds,l=this.satAxes;t[0]=s.a,t[1]=s.b,t[2]=s.c;for(let h=0;h<3;h++){let u=a[h],c=l[h];if(i.setFromPoints(c,t),u.isSeparated(i))return!1}let d=s.satBounds,p=s.satAxes,f=this.points;for(let m=0;m<3;m++){let g=d[m],$=p[m];if(i.setFromPoints($,f),g.isSeparated(i))return!1}for(let v=0;v<3;v++){let x=l[v];for(let y=0;y<4;y++){let b=p[y];if(n.crossVectors(x,b),i.setFromPoints(n,t),r.setFromPoints(n,f),i.isSeparated(r))return!1}}return!0}}(),Lt.prototype.closestPointToPoint=function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t},Lt.prototype.distanceToPoint=function(){let e=new T;return function(t){return this.closestPointToPoint(t,e),t.distanceTo(e)}}(),Lt.prototype.distanceToBox=function(){let e=["x","y","z"],t=Array(12).fill().map(()=>new Ct),i=Array(12).fill().map(()=>new Ct),r=new T,n=new T;return function(s,a=0,l=null,h=null){if(this.needsUpdate&&this.update(),this.intersectsBox(s))return(l||h)&&(s.getCenter(n),this.closestPointToPoint(n,r),s.closestPointToPoint(r,n),l&&l.copy(r),h&&h.copy(n)),0;let u=a*a,c=s.min,d=s.max,p=this.points,f=1/0;for(let m=0;m<8;m++){let g=p[m];n.copy(g).clamp(c,d);let $=g.distanceToSquared(n);if($<f&&(f=$,l&&l.copy(g),h&&h.copy(n),$<u))return Math.sqrt($)}let v=0;for(let x=0;x<3;x++)for(let y=0;y<=1;y++)for(let b=0;b<=1;b++){let _=(x+1)%3,S=(x+2)%3,w=y<<_|b<<S,M=1<<x|y<<_|b<<S,E=p[w],A=p[M];t[v].set(E,A);let C=e[x],L=e[_],R=e[S],P=i[v],I=P.start,D=P.end;I[C]=c[C],I[L]=y?c[L]:d[L],I[R]=b?c[R]:d[L],D[C]=d[C],D[L]=y?c[L]:d[L],D[R]=b?c[R]:d[L],v++}for(let N=0;N<=1;N++)for(let O=0;O<=1;O++)for(let z=0;z<=1;z++){n.x=N?d.x:c.x,n.y=O?d.y:c.y,n.z=z?d.z:c.z,this.closestPointToPoint(n,r);let U=n.distanceToSquared(r);if(U<f&&(f=U,l&&l.copy(r),h&&h.copy(n),U<u))return Math.sqrt(U)}for(let B=0;B<12;B++){let F=t[B];for(let k=0;k<12;k++){Ks(F,i[k],r,n);let H=r.distanceToSquared(n);if(H<f&&(f=H,l&&l.copy(r),h&&h.copy(n),H<u))return Math.sqrt(H)}}return Math.sqrt(f)}}();var go=new T,xo=new T,_o=new T,yu=new se,vu=new se,bu=new se,Mu=new T;function Ix(e,t,i,r,n,s){let a;return null===(a=s===Tt?e.intersectTriangle(r,i,t,!0,n):e.intersectTriangle(t,i,r,s!==St,n))?null:{distance:e.origin.distanceTo(n),point:n.clone()}}function Dx(e,t,i,r,n,s,a){go.fromBufferAttribute(t,r),xo.fromBufferAttribute(t,n),_o.fromBufferAttribute(t,s);let l=Ix(e,go,xo,_o,Mu,a);if(l){i&&(yu.fromBufferAttribute(i,r),vu.fromBufferAttribute(i,n),bu.fromBufferAttribute(i,s),l.uv=ft.getUV(Mu,go,xo,_o,yu,vu,bu,new se));let h={a:r,b:n,c:s,normal:new T,materialIndex:0};ft.getNormal(go,xo,_o,h.normal),l.face=h,l.faceIndex=r}return l}function Ec(e,t,i,r,n){let s=3*r,a=e.index.getX(s),l=e.index.getX(s+1),h=e.index.getX(s+2),u=Dx(i,e.attributes.position,e.attributes.uv,a,l,h,t);return u?(u.faceIndex=r,n&&n.push(u),u):null}function wu(e,t,i,r,n,s){for(let a=r,l=r+n;a<l;a++)Ec(e,t,i,a,s)}function Su(e,t,i,r,n){let s=1/0,a=null;for(let l=r,h=r+n;l<h;l++){let u=Ec(e,t,i,l);u&&u.distance<s&&(a=u,s=u.distance)}return a}function Cc(e,t,i){return null===e||(e.point.applyMatrix4(t.matrixWorld),e.distance=e.point.distanceTo(i.ray.origin),e.object=t,e.distance<i.near||e.distance>i.far)?null:e}function Xt(e,t,i,r){let n=e.a,s=e.b,a=e.c,l=t,h=t+1,u=t+2;i&&(l=i.getX(t),h=i.getX(t+1),u=i.getX(t+2)),n.x=r.getX(l),n.y=r.getY(l),n.z=r.getZ(l),s.x=r.getX(h),s.y=r.getY(h),s.z=r.getZ(h),a.x=r.getX(u),a.y=r.getY(u),a.z=r.getZ(u)}function Pc(e,t,i,r,n,s,a){let l=i.index,h=i.attributes.position;for(let u=e,c=t+e;u<c;u++)if(Xt(a,3*u,l,h),a.needsUpdate=!0,r(a,u,n,s))return!0;return!1}var cs=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return 0===e.length?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}};function Tn(e,t){return 65535===t[e+15]}function _i(e,t){return t[e+6]}function ls(e,t){return t[e+14]}function hs(e){return e+8}function us(e,t){return t[e+6]}function Tu(e,t){return t[e+7]}var ds=new tt,vo=new T,Fx=["x","y","z"];function bo(e,t,i,r,n){let s=2*e,a=fs,l=Xn,h=Yn;if(Tn(s,l)){let u=_i(e,h),c=ls(s,l);wu(t,i,r,u,c,n)}else{let d=hs(e);wo(d,a,r,vo)&&bo(d,t,i,r,n);let p=us(e,h);wo(p,a,r,vo)&&bo(p,t,i,r,n)}}function Mo(e,t,i,r){let n=2*e,s=fs,a=Xn,l=Yn;if(Tn(n,a)){let h=_i(e,l),u=ls(n,a);return Su(t,i,r,h,u)}{let c=Tu(e,l),d=Fx[c],p=r.direction[d]>=0,f,m;p?(f=hs(e),m=us(e,l)):(f=us(e,l),m=hs(e));let g=wo(f,s,r,vo)?Mo(f,t,i,r):null;if(g){let $=g.point[d];if(p?$<=s[m+c]:$>=s[m+c+3])return g}let v=wo(m,s,r,vo)?Mo(m,t,i,r):null;return g&&v?g.distance<=v.distance?g:v:g||v||null}}var Au=function(){let e,t,i=[],r=new cs(()=>new tt);return function(...n){e=r.getPrimitive(),t=r.getPrimitive(),i.push(e,t);let s=function i(r,n,s,a,l=null,h=0,u=0){function c(e){let t=2*e,i=Xn,r=Yn;for(;!Tn(t,i);)t=2*(e=hs(e));return _i(e,r)}function d(e){let t=2*e,i=Xn,r=Yn;for(;!Tn(t,i);)t=2*(e=us(e,r));return _i(e,r)+ls(t,i)}let p=2*r,f=fs,m=Xn,g=Yn;if(Tn(p,m)){let $=_i(r,g),v=ls(p,m);return qt(r,f,e),a($,v,!1,u,h+r,e)}{let x=hs(r),y=us(r,g),b=x,_=y,S,w,M,E;if(l&&(M=e,E=t,qt(b,f,M),qt(_,f,E),S=l(M),(w=l(E))<S)){b=y,_=x;let A=S;S=w,w=A,M=E}M||qt(b,f,M=e);let C=Tn(2*b,m),L=s(M,C,S,u+1,h+b),R;if(2===L){let P=c(b),I=d(b)-P;R=a(P,I,!0,u+1,h+b,M)}else R=L&&i(b,n,s,a,l,h,u+1);if(R)return!0;qt(_,f,E=t);let D=Tn(2*_,m),N=s(E,D,w,u+1,h+_),O;if(2===N){let z=c(_),U=d(_)-z;O=a(z,U,!0,u+1,h+_,E)}else O=N&&i(_,n,s,a,l,h,u+1);return!!O}}(...n);r.releasePrimitive(e),r.releasePrimitive(t),i.pop(),i.pop();let a=i.length;return a>0&&(t=i[a-1],e=i[a-2]),s}}(),Eu=function(){let e=new Rt,t=new Rt,i=new me,r=new Lt,n=new Lt;return function s(a,l,h,u,c=null){let d=2*a,p=fs,f=Xn,m=Yn;if(null===c&&(h.boundingBox||h.computeBoundingBox(),r.set(h.boundingBox.min,h.boundingBox.max,u),c=r),Tn(d,f)){let g=l,$=g.index,v=g.attributes.position,x=h.index,y=h.attributes.position,b=_i(a,m),_=ls(d,f);if(i.copy(u).invert(),h.boundsTree)return qt(a,p,n),n.matrix.copy(i),n.needsUpdate=!0,h.boundsTree.shapecast({intersectsBounds:e=>n.intersectsBox(e),intersectsTriangle(e){e.a.applyMatrix4(u),e.b.applyMatrix4(u),e.c.applyMatrix4(u),e.needsUpdate=!0;for(let i=3*b,r=(_+b)*3;i<r;i+=3)if(Xt(t,i,$,v),t.needsUpdate=!0,e.intersectsTriangle(t))return!0;return!1}});for(let S=3*b,w=_+3*b;S<w;S+=3){Xt(e,S,$,v),e.a.applyMatrix4(i),e.b.applyMatrix4(i),e.c.applyMatrix4(i),e.needsUpdate=!0;for(let M=0,E=x.count;M<E;M+=3)if(Xt(t,M,x,y),t.needsUpdate=!0,e.intersectsTriangle(t))return!0}}else{let A=a+8,C=m[a+6];return qt(A,p,ds),!!(c.intersectsBox(ds)&&s(A,l,h,u,c)||(qt(C,p,ds),c.intersectsBox(ds)&&s(C,l,h,u,c)))}}}();function wo(e,t,i,r){return qt(e,t,ds),i.intersectBox(ds,r)}var yo,fs,Xn,Yn,Rc=[];function ps(e){yo&&Rc.push(yo),yo=e,fs=new Float32Array(e),Xn=new Uint16Array(e),Yn=new Uint32Array(e)}function $s(){yo=null,fs=null,Xn=null,Yn=null,Rc.length&&ps(Rc.pop())}var Lc=Symbol("skip tree generation"),Ic=new tt,Dc=new tt,ms=new me,yi=new Lt,Qs=new Lt,er=new T,So=new T,Ox=new T,zx=new T,Bx=new T,Cu=new tt,ln=new cs(()=>new Rt),Zn=class{static serialize(e,t={}){if(t.isBufferGeometry)return console.warn("MeshBVH.serialize: The arguments for the function have changed. See documentation for new signature."),Zn.serialize(arguments[0],{cloneBuffers:void 0===arguments[2]||arguments[2]});t=sr({cloneBuffers:!0},t);let i=e.geometry,r=e._roots,n=i.getIndex();return t.cloneBuffers?{roots:r.map(e=>e.slice()),index:n.array.slice()}:{roots:r,index:n.array}}static deserialize(e,t,i={}){if("boolean"==typeof i)return console.warn("MeshBVH.deserialize: The arguments for the function have changed. See documentation for new signature."),Zn.deserialize(arguments[0],arguments[1],{setIndex:void 0===arguments[2]||arguments[2]});i=sr({setIndex:!0},i);let{index:r,roots:n}=e,s=new Zn(t,xl(sr({},i),{[Lc]:!0}));if(s._roots=n,i.setIndex){let a=t.getIndex();if(null===a){let l=new Ye(e.index,1,!1);t.setIndex(l)}else a.array!==r&&(a.array.set(r),a.needsUpdate=!0)}return s}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw Error("MeshBVH: Only BufferGeometries are supported.");if((t=Object.assign({strategy:0,maxDepth:40,maxLeafTris:10,verbose:!0,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,[Lc]:!1},t)).useSharedArrayBuffer&&"undefined"==typeof SharedArrayBuffer)throw Error("MeshBVH: SharedArrayBuffer is not available.");this._roots=null,t[Lc]||(this._roots=xu(e,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new tt))),this.geometry=e}refit(e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=this.geometry,i=t.index.array,r=t.attributes.position,n,s,a,l,h=0,u=this._roots;for(let c=0,d=u.length;c<d;c++)n=u[c],s=new Uint32Array(n),a=new Uint16Array(n),l=new Float32Array(n),p(0,h),h+=n.byteLength;function p(t,n,h=!1){let u=2*t;if(65535===a[u+15]){let c=s[t+6],d=a[u+14],f=1/0,m=1/0,g=1/0,$=-1/0,v=-1/0,x=-1/0;for(let y=3*c,b=3*(c+d);y<b;y++){let _=i[y],S=r.getX(_),w=r.getY(_),M=r.getZ(_);S<f&&(f=S),S>$&&($=S),w<m&&(m=w),w>v&&(v=w),M<g&&(g=M),M>x&&(x=M)}return(l[t+0]!==f||l[t+1]!==m||l[t+2]!==g||l[t+3]!==$||l[t+4]!==v||l[t+5]!==x)&&(l[t+0]=f,l[t+1]=m,l[t+2]=g,l[t+3]=$,l[t+4]=v,l[t+5]=x,!0)}{let E=t+8,A=s[t+6],C=h,L=!1,R=!1;e?C||(L=e.has(E+n),R=e.has(A+n),C=!L&&!R):(L=!0,R=!0);let P=C||L,I=C||R,D=!1;P&&(D=p(E,n,C));let N=!1;I&&(N=p(A,n,C));let O=D||N;if(O)for(let z=0;z<3;z++){let U=E+z,B=A+z,F=l[U],k=l[U+3],H=l[B],V=l[B+3];l[t+z]=F<H?F:H,l[t+z+3]=k>V?k:V}return O}}}traverse(e,t=0){let i=this._roots[t],r=new Uint32Array(i),n=new Uint16Array(i);!function t(s,a=0){let l=2*s,h=65535===n[l+15];if(h){let u=r[s+6],c=n[l+14];e(a,h,new Float32Array(i,4*s,6),u,c)}else{let d=r[s+6],p=r[s+7];e(a,h,new Float32Array(i,4*s,6),p)||(t(s+8,a+1),t(d,a+1))}}(0)}raycast(e,t=Qt){let i=this._roots,r=this.geometry,n=[],s=t.isMaterial,a=Array.isArray(t),l=r.groups,h=s?t.side:t;for(let u=0,c=i.length;u<c;u++){let d=a?t[l[u].materialIndex].side:h,p=n.length;if(ps(i[u]),bo(0,r,d,e,n),$s(),a){let f=l[u].materialIndex;for(let m=p,g=n.length;m<g;m++)n[m].face.materialIndex=f}}return n}raycastFirst(e,t=Qt){let i=this._roots,r=this.geometry,n=t.isMaterial,s=Array.isArray(t),a=null,l=r.groups,h=n?t.side:t;for(let u=0,c=i.length;u<c;u++){let d=s?t[l[u].materialIndex].side:h;ps(i[u]);let p=Mo(0,r,d,e);$s(),null!=p&&(null==a||p.distance<a.distance)&&(a=p,s&&(p.face.materialIndex=l[u].materialIndex))}return a}intersectsGeometry(e,t){let i=this.geometry,r=!1;for(let n of this._roots)if(ps(n),r=Eu(0,i,e,t),$s(),r)break;return r}shapecast(e,t,i){let r=this.geometry;if(e instanceof Function){if(t){let n=t;t=(e,t,i,r)=>{let s=3*t;return n(e,s,s+1,s+2,i,r)}}e={boundsTraverseOrder:i,intersectsBounds:e,intersectsTriangle:t,intersectsRange:null},console.warn("MeshBVH: Shapecast function signature has changed and now takes an object of callbacks as a second argument. See docs for new signature.")}let s=ln.getPrimitive(),{boundsTraverseOrder:a,intersectsBounds:l,intersectsRange:h,intersectsTriangle:u}=e;if(h&&u){let c=h;h=(e,t,i,n,a)=>!!c(e,t,i,n,a)||Pc(e,t,r,u,i,n,s)}else h||(h=u?(e,t,i,n)=>Pc(e,t,r,u,i,n,s):(e,t,i)=>i);let d=!1,p=0;for(let f of this._roots){if(ps(f),d=Au(0,r,l,h,a,p),$s(),d)break;p+=f.byteLength}return ln.releasePrimitive(s),d}bvhcast(e,t,i){let{intersectsRanges:r,intersectsTriangles:n}=i,s=this.geometry.index,a=this.geometry.attributes.position,l=e.geometry.index,h=e.geometry.attributes.position;ms.copy(t).invert();let u=ln.getPrimitive(),c=ln.getPrimitive();if(n){let d=function(e,i,r,d,p,f,m,g){for(let $=r,v=r+d;$<v;$++){Xt(c,3*$,l,h),c.a.applyMatrix4(t),c.b.applyMatrix4(t),c.c.applyMatrix4(t),c.needsUpdate=!0;for(let x=e,y=e+i;x<y;x++)if(Xt(u,3*x,s,a),u.needsUpdate=!0,n(u,c,x,$,p,f,m,g))return!0}return!1};if(r){let p=r;r=function(e,t,i,r,n,s,a,l){return!!p(e,t,i,r,n,s,a,l)||d(e,t,i,r,n,s,a,l)}}else r=d}e.getBoundingBox(Dc),Dc.applyMatrix4(t);let f=this.shapecast({intersectsBounds:e=>Dc.intersectsBox(e),intersectsRange:(t,i,n,s,a,l)=>(Ic.copy(l),Ic.applyMatrix4(ms),e.shapecast({intersectsBounds:e=>Ic.intersectsBox(e),intersectsRange:(e,n,l,h,u)=>r(t,i,e,n,s,a,h,u)}))});return ln.releasePrimitive(u),ln.releasePrimitive(c),f}intersectsBox(e,t){return yi.set(e.min,e.max,t),yi.needsUpdate=!0,this.shapecast({intersectsBounds:e=>yi.intersectsBox(e),intersectsTriangle:e=>yi.intersectsTriangle(e)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,i={},r={},n=0,s=1/0){e.boundingBox||e.computeBoundingBox(),yi.set(e.boundingBox.min,e.boundingBox.max,t),yi.needsUpdate=!0;let a=this.geometry,l=a.attributes.position,h=a.index,u=e.attributes.position,c=e.index,d=ln.getPrimitive(),p=ln.getPrimitive(),f=So,m=Ox,g=null,$=null;r&&(g=zx,$=Bx);let v=1/0,x=null,y=null;return ms.copy(t).invert(),Qs.matrix.copy(ms),this.shapecast({boundsTraverseOrder:e=>yi.distanceToBox(e),intersectsBounds:(e,t,i)=>i<v&&i<s&&(t&&(Qs.min.copy(e.min),Qs.max.copy(e.max),Qs.needsUpdate=!0),!0),intersectsRange(i,r){if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:e=>Qs.distanceToBox(e),intersectsBounds:(e,t,i)=>i<v&&i<s,intersectsRange(e,s){for(let a=3*e,b=(e+s)*3;a<b;a+=3){Xt(p,a,c,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let _=3*i,S=(i+r)*3;_<S;_+=3){Xt(d,_,h,l),d.needsUpdate=!0;let w=d.distanceToTriangle(p,f,g);if(w<v&&(m.copy(f),$&&$.copy(g),v=w,x=_/3,y=a/3),w<n)return!0}}}});{let a=c?c.count:u.count;for(let b=0,_=a;b<_;b+=3){Xt(p,b,c,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let S=3*i,w=(i+r)*3;S<w;S+=3){Xt(d,S,h,l),d.needsUpdate=!0;let M=d.distanceToTriangle(p,f,g);if(M<v&&(m.copy(f),$&&$.copy(g),v=M,x=S/3,y=b/3),M<n)return!0}}}}}),ln.releasePrimitive(d),ln.releasePrimitive(p),v===1/0?null:(i.point?i.point.copy(m):i.point=m.clone(),i.distance=v,i.faceIndex=x,r&&(r.point?r.point.copy($):r.point=$.clone(),r.point.applyMatrix4(ms),m.applyMatrix4(ms),r.distance=m.sub(r.point).length(),r.faceIndex=y),i)}closestPointToPoint(e,t={},i=0,r=1/0){let n=i*i,s=r*r,a=1/0,l=null;if(this.shapecast({boundsTraverseOrder:t=>(er.copy(e).clamp(t.min,t.max),er.distanceToSquared(e)),intersectsBounds:(e,t,i)=>i<a&&i<s,intersectsTriangle(t,i){t.closestPointToPoint(e,er);let r=e.distanceToSquared(er);return r<a&&(So.copy(er),a=r,l=i),r<n}}),a===1/0)return null;let h=Math.sqrt(a);return t.point?t.point.copy(So):t.point=So.clone(),t.distance=h,t.faceIndex=l,t}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(t=>{qt(0,new Float32Array(t),Cu),e.union(Cu)}),e}},Nc=new On,Pu=new me,Ux=Ze.prototype.raycast;function Fc(e,t){if(this.geometry.boundsTree){if(void 0===this.material)return;Pu.copy(this.matrixWorld).invert(),Nc.copy(e.ray).applyMatrix4(Pu);let i=this.geometry.boundsTree;if(!0===e.firstHitOnly){let r=Cc(i.raycastFirst(Nc,this.material),this,e);r&&t.push(r)}else{let n=i.raycast(Nc,this.material);for(let s=0,a=n.length;s<a;s++){let l=Cc(n[s],this,e);l&&t.push(l)}}}else Ux.call(this,e,t)}function Oc(e){return this.boundsTree=new Zn(this,e),this.boundsTree}function zc(){this.boundsTree=null}var Bt=((o=Bt||{})[o["#F4CE00"]=0]="#F4CE00",o[o["#31E0B0"]=1]="#31E0B0",o[o["#FF5E10"]=2]="#FF5E10",o[o["#00ABF7"]=3]="#00ABF7",o[o["#FF00BB"]=4]="#FF00BB",o[o["#9C29FF"]=5]="#9C29FF",o[o["#6FDD00"]=6]="#6FDD00",o[o["#E30000"]=7]="#E30000",o[o["#304AFF"]=8]="#304AFF",o[o["#FF89C4"]=9]="#FF89C4",o[o["#D597FF"]=10]="#D597FF",o[o["#C6EC5C"]=11]="#C6EC5C",o[o["#FFA115"]=12]="#FFA115",o[o["#75DEFE"]=13]="#75DEFE",o[o["#FAA291"]=14]="#FAA291",o[o["#BB813F"]=15]="#BB813F",o[o["#878291"]=16]="#878291",o),To=["#000000","#000000","#FFFFFF","#000000","#FFFFFF","#FFFFFF","#000000","#FFFFFF","#FFFFFF","#000000","#000000","#000000","#000000","#000000","#000000","#FFFFFF","#FFFFFF"],Ao=class extends Gn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Gc(e)}),this.register(function(e){return new jc(e)}),this.register(function(e){return new Kc(e)}),this.register(function(e){return new qc(e)}),this.register(function(e){return new Xc(e)}),this.register(function(e){return new Yc(e)}),this.register(function(e){return new Zc(e)}),this.register(function(e){return new Hc(e)}),this.register(function(e){return new Jc(e)}),this.register(function(e){return new Wc(e)}),this.register(function(e){return new kc(e)}),this.register(function(e){return new $c(e)}),this.register(function(e){return new Qc(e)})}load(e,t,i,r){let n=this,s;s=""!==this.resourcePath?this.resourcePath:""!==this.path?this.path:cn.extractUrlBase(e),this.manager.itemStart(e);let a=function(t){r?r(t):console.error(t),n.manager.itemError(e),n.manager.itemEnd(e)},l=new Ys(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(i){try{n.parse(i,s,function(i){t(i),n.manager.itemEnd(e)},a)}catch(r){a(r)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return -1===this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.push(e),this}unregister(e){return -1!==this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let n,s={},a={};if("string"==typeof e)n=JSON.parse(e);else if(e instanceof ArrayBuffer){if(cn.decodeText(new Uint8Array(e,0,4))===Ou){try{s[De.KHR_BINARY_GLTF]=new el(e)}catch(l){r&&r(l);return}n=JSON.parse(s[De.KHR_BINARY_GLTF].content)}else n=JSON.parse(cn.decodeText(new Uint8Array(e)))}else n=e;if(void 0===n.asset||n.asset.version[0]<2){r&&r(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let h=new al(n,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let c=this.pluginCallbacks[u](h);a[c.name]=c,s[c.name]=!0}if(n.extensionsUsed)for(let d=0;d<n.extensionsUsed.length;++d){let p=n.extensionsUsed[d],f=n.extensionsRequired||[];switch(p){case De.KHR_MATERIALS_UNLIT:s[p]=new Vc;break;case De.KHR_DRACO_MESH_COMPRESSION:s[p]=new tl(n,this.dracoLoader);break;case De.KHR_TEXTURE_TRANSFORM:s[p]=new nl;break;case De.KHR_MESH_QUANTIZATION:s[p]=new il;break;default:f.indexOf(p)>=0&&void 0===a[p]&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}h.setExtensions(s),h.setPlugins(a),h.parse(i,r)}parseAsync(e,t){let i=this;return new Promise(function(r,n){i.parse(e,t,r,n)})}};function kx(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}var De={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},kc=class{constructor(e){this.parser=e,this.name=De.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){let n=t[i];n.extensions&&n.extensions[this.name]&&void 0!==n.extensions[this.name].light&&e._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,r=t.cache.get(i);if(r)return r;let n=t.json,s=((n.extensions&&n.extensions[this.name]||{}).lights||[])[e],a,l=new ye(16777215);void 0!==s.color&&l.fromArray(s.color);let h=void 0!==s.range?s.range:0;switch(s.type){case"directional":(a=new ao(l)).target.position.set(0,0,-1),a.add(a.target);break;case"point":(a=new oo(l)).distance=h;break;case"spot":(a=new ro(l)).distance=h,s.spot=s.spot||{},s.spot.innerConeAngle=void 0!==s.spot.innerConeAngle?s.spot.innerConeAngle:0,s.spot.outerConeAngle=void 0!==s.spot.outerConeAngle?s.spot.outerConeAngle:Math.PI/4,a.angle=s.spot.outerConeAngle,a.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,a.target.position.set(0,0,-1),a.add(a.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}return a.position.set(0,0,0),a.decay=2,jn(a,s),void 0!==s.intensity&&(a.intensity=s.intensity),a.name=t.createUniqueName(s.name||"light_"+e),r=Promise.resolve(a),t.cache.add(i,r),r}getDependency(e,t){if("light"===e)return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],n=(r.extensions&&r.extensions[this.name]||{}).light;return void 0===n?null:this._loadLight(n).then(function(e){return i._getNodeRef(t.cache,n,e)})}},Vc=class{constructor(){this.name=De.KHR_MATERIALS_UNLIT}getMaterialType(){return Gt}extendParams(e,t,i){let r=[];e.color=new ye(1,1,1),e.opacity=1;let n=t.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){let s=n.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}void 0!==n.baseColorTexture&&r.push(i.assignTexture(e,"map",n.baseColorTexture,Be))}return Promise.all(r)}},Hc=class{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return void 0!==r&&(t.emissiveIntensity=r),Promise.resolve()}},Gc=class{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?on:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let n=[],s=r.extensions[this.name];if(void 0!==s.clearcoatFactor&&(t.clearcoat=s.clearcoatFactor),void 0!==s.clearcoatTexture&&n.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),void 0!==s.clearcoatRoughnessFactor&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),void 0!==s.clearcoatRoughnessTexture&&n.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),void 0!==s.clearcoatNormalTexture&&(n.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),void 0!==s.clearcoatNormalTexture.scale)){let a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(a,a)}return Promise.all(n)}},Wc=class{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?on:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let n=[],s=r.extensions[this.name];return void 0!==s.iridescenceFactor&&(t.iridescence=s.iridescenceFactor),void 0!==s.iridescenceTexture&&n.push(i.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),void 0!==s.iridescenceIor&&(t.iridescenceIOR=s.iridescenceIor),void 0===t.iridescenceThicknessRange&&(t.iridescenceThicknessRange=[100,400]),void 0!==s.iridescenceThicknessMinimum&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),void 0!==s.iridescenceThicknessMaximum&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),void 0!==s.iridescenceThicknessTexture&&n.push(i.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(n)}},qc=class{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_SHEEN}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?on:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let n=[];t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1;let s=r.extensions[this.name];return void 0!==s.sheenColorFactor&&t.sheenColor.fromArray(s.sheenColorFactor),void 0!==s.sheenRoughnessFactor&&(t.sheenRoughness=s.sheenRoughnessFactor),void 0!==s.sheenColorTexture&&n.push(i.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Be)),void 0!==s.sheenRoughnessTexture&&n.push(i.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(n)}},Xc=class{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?on:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let n=[],s=r.extensions[this.name];return void 0!==s.transmissionFactor&&(t.transmission=s.transmissionFactor),void 0!==s.transmissionTexture&&n.push(i.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(n)}},Yc=class{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_VOLUME}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?on:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let n=[],s=r.extensions[this.name];t.thickness=void 0!==s.thicknessFactor?s.thicknessFactor:0,void 0!==s.thicknessTexture&&n.push(i.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;let a=s.attenuationColor||[1,1,1];return t.attenuationColor=new ye(a[0],a[1],a[2]),Promise.all(n)}},Zc=class{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_IOR}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?on:null}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=void 0!==r.ior?r.ior:1.5,Promise.resolve()}},Jc=class{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_SPECULAR}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?on:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let n=[],s=r.extensions[this.name];t.specularIntensity=void 0!==s.specularFactor?s.specularFactor:1,void 0!==s.specularTexture&&n.push(i.assignTexture(t,"specularIntensityMap",s.specularTexture));let a=s.specularColorFactor||[1,1,1];return t.specularColor=new ye(a[0],a[1],a[2]),void 0!==s.specularColorTexture&&n.push(i.assignTexture(t,"specularColorMap",s.specularColorTexture,Be)),Promise.all(n)}},jc=class{constructor(e){this.parser=e,this.name=De.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let n=r.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,n.source,s)}},Kc=class{constructor(e){this.parser=e,this.name=De.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,r=i.json,n=r.textures[e];if(!n.extensions||!n.extensions[t])return null;let s=n.extensions[t],a=r.images[s.source],l=i.textureLoader;if(a.uri){let h=i.options.manager.getHandler(a.uri);null!==h&&(l=h)}return this.detectSupport().then(function(n){if(n)return i.loadTextureImage(e,s.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(1===t.height)}})),this.isSupported}},$c=class{constructor(e){this.name=De.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(!i.extensions||!i.extensions[this.name])return null;{let r=i.extensions[this.name],n=this.parser.getDependency("buffer",r.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return n.then(function(e){let t=r.byteOffset||0,i=r.byteLength||0,n=r.count,a=r.byteStride,l=new Uint8Array(e,t,i);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(n,a,l,r.mode,r.filter).then(function(e){return e.buffer}):s.ready.then(function(){let e=new ArrayBuffer(n*a);return s.decodeGltfBuffer(new Uint8Array(e),n,a,l,r.mode,r.filter),e})})}}},Qc=class{constructor(e){this.name=De.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||void 0===i.mesh)return null;let r=t.meshes[i.mesh];for(let n of r.primitives)if(n.mode!==Yt.TRIANGLES&&n.mode!==Yt.TRIANGLE_STRIP&&n.mode!==Yt.TRIANGLE_FAN&&void 0!==n.mode)return null;let s=i.extensions[this.name].attributes,a=[],l={};for(let h in s)a.push(this.parser.getDependency("accessor",s[h]).then(e=>(l[h]=e,l[h])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),i=t.isGroup?t.children:[t],r=e[0].count,n=[];for(let s of i){let a=new me,h=new T,u=new et,c=new T(1,1,1),d=new Kr(s.geometry,s.material,r);for(let p=0;p<r;p++)l.TRANSLATION&&h.fromBufferAttribute(l.TRANSLATION,p),l.ROTATION&&u.fromBufferAttribute(l.ROTATION,p),l.SCALE&&c.fromBufferAttribute(l.SCALE,p),d.setMatrixAt(p,a.compose(h,u,c));for(let f in l)"TRANSLATION"!==f&&"ROTATION"!==f&&"SCALE"!==f&&s.geometry.setAttribute(f,l[f]);Oe.prototype.copy.call(d,s),d.frustumCulled=!1,this.parser.assignFinalMaterial(d),n.push(d)}return t.isGroup?(t.clear(),t.add(...n),t):n[0]}))}},Ou="glTF",tr=12,Ru={JSON:1313821514,BIN:5130562},el=class{constructor(e){this.name=De.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,tr);if(this.header={magic:cn.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ou)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-tr,r=new DataView(e,tr),n=0;for(;n<i;){let s=r.getUint32(n,!0);n+=4;let a=r.getUint32(n,!0);if(n+=4,a===Ru.JSON){let l=new Uint8Array(e,tr+n,s);this.content=cn.decodeText(l)}else if(a===Ru.BIN){let h=tr+n;this.body=e.slice(h,h+s)}n+=s}if(null===this.content)throw Error("THREE.GLTFLoader: JSON content not found.")}},tl=class{constructor(e,t){if(!t)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=De.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,n=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},l={},h={};for(let u in s)a[rl[u]||u.toLowerCase()]=s[u];for(let c in e.attributes){let d=rl[c]||c.toLowerCase();if(void 0!==s[c]){let p=i.accessors[e.attributes[c]],f=gs[p.componentType];h[d]=f.name,l[d]=!0===p.normalized}}return t.getDependency("bufferView",n).then(function(e){return new Promise(function(t){r.decodeDracoFile(e,function(e){for(let i in e.attributes){let r=e.attributes[i],n=l[i];void 0!==n&&(r.normalized=n)}t(e)},a,h)})})}},nl=class{constructor(){this.name=De.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return void 0!==t.texCoord&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),void 0===t.offset&&void 0===t.rotation&&void 0===t.scale||(e=e.clone(),void 0!==t.offset&&e.offset.fromArray(t.offset),void 0!==t.rotation&&(e.rotation=t.rotation),void 0!==t.scale&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},il=class{constructor(){this.name=De.KHR_MESH_QUANTIZATION}},Eo=class extends Bn{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r*3+r;for(let s=0;s!==r;s++)t[s]=i[n+s];return t}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=2*a,h=3*a,u=r-t,c=(i-t)/u,d=c*c,p=d*c,f=e*h,m=f-h,g=-2*p+3*d,$=p-d,v=1-g,x=$-d+c;for(let y=0;y!==a;y++){let b=s[m+y+a],_=s[m+y+l]*u,S=s[f+y+a],w=s[f+y]*u;n[y]=v*b+x*_+g*S+$*w}return n}},Vx=new et,sl=class extends Eo{interpolate_(e,t,i,r){let n=super.interpolate_(e,t,i,r);return Vx.fromArray(n).normalize().toArray(n),n}},Yt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lu={9728:ct,9729:ut,9984:zr,9985:fc,9986:Br,9987:gi},Iu={33071:zt,33648:Ns,10497:li},Bc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Hx={CUBICSPLINE:void 0,LINEAR:ui,STEP:Zi},Uc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Gx(e){return void 0===e.DefaultMaterial&&(e.DefaultMaterial=new ts({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qt})),e.DefaultMaterial}function nr(e,t,i){for(let r in i.extensions)void 0===e[r]&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=i.extensions[r])}function jn(e,t){void 0!==t.extras&&("object"==typeof t.extras?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Wx(e,t,i){let r=!1,n=!1,s=!1;for(let a=0,l=t.length;a<l;a++){let h=t[a];if(void 0!==h.POSITION&&(r=!0),void 0!==h.NORMAL&&(n=!0),void 0!==h.COLOR_0&&(s=!0),r&&n&&s)break}if(!r&&!n&&!s)return Promise.resolve(e);let u=[],c=[],d=[];for(let p=0,f=t.length;p<f;p++){let m=t[p];if(r){let g=void 0!==m.POSITION?i.getDependency("accessor",m.POSITION):e.attributes.position;u.push(g)}if(n){let $=void 0!==m.NORMAL?i.getDependency("accessor",m.NORMAL):e.attributes.normal;c.push($)}if(s){let v=void 0!==m.COLOR_0?i.getDependency("accessor",m.COLOR_0):e.attributes.color;d.push(v)}}return Promise.all([Promise.all(u),Promise.all(c),Promise.all(d)]).then(function(t){let i=t[0],a=t[1],l=t[2];return r&&(e.morphAttributes.position=i),n&&(e.morphAttributes.normal=a),s&&(e.morphAttributes.color=l),e.morphTargetsRelative=!0,e})}function qx(e,t){if(e.updateMorphTargets(),void 0!==t.weights)for(let i=0,r=t.weights.length;i<r;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++)e.morphTargetDictionary[n[s]]=s}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Xx(e){let t=e.extensions&&e.extensions[De.KHR_DRACO_MESH_COMPRESSION];return t?"draco:"+t.bufferView+":"+t.indices+":"+Du(t.attributes):e.indices+":"+Du(e.attributes)+":"+e.mode}function Du(e){let t="",i=Object.keys(e).sort();for(let r=0,n=i.length;r<n;r++)t+=i[r]+":"+e[i[r]]+";";return t}function ol(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Yx(e){return e.search(/\.jpe?g($|\?)/i)>0||0===e.search(/^data\:image\/jpeg/)?"image/jpeg":e.search(/\.webp($|\?)/i)>0||0===e.search(/^data\:image\/webp/)?"image/webp":"image/png"}var al=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new kx,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,n=-1;"undefined"!=typeof navigator&&(i=!0===/^((?!chrome|android).)*safari/i.test(navigator.userAgent),n=(r=navigator.userAgent.indexOf("Firefox")>-1)?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),"undefined"==typeof createImageBitmap||i||r&&n<98?this.textureLoader=new ss(this.options.manager):this.textureLoader=new co(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ys(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),"use-credentials"===this.options.crossOrigin&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,r=this.json,n=this.extensions;this.cache.removeAll(),this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(t){let s={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:i,userData:{}};nr(n,s,r),jn(s,r),Promise.all(i._invokeAll(function(e){return e.afterRoot&&e.afterRoot(s)})).then(function(){e(s)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,n=t.length;r<n;r++){let s=t[r].joints;for(let a=0,l=s.length;a<l;a++)e[s[a]].isBone=!0}for(let h=0,u=e.length;h<u;h++){let c=e[h];void 0!==c.mesh&&(this._addNodeRef(this.meshCache,c.mesh),void 0!==c.skin&&(i[c.mesh].isSkinnedMesh=!0)),void 0!==c.camera&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){void 0!==t&&(void 0===e.refs[t]&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let r=i.clone(),n=(e,t)=>{let i=this.associations.get(e);for(let[r,s]of(null!=i&&this.associations.set(t,i),e.children.entries()))n(s,t.children[r])};return n(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let r=e(t[i]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let r=0;r<t.length;r++){let n=e(t[r]);n&&i.push(n)}return i}getDependency(e,t){let i=e+":"+t,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this.loadNode(t);break;case"mesh":r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(!(r=this._invokeOne(function(i){return i!=this&&i.getDependency&&i.getDependency(e,t)})))throw Error("Unknown type: "+e)}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this;t=Promise.all((this.json[e+("mesh"===e?"es":"s")]||[]).map(function(t,r){return i.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&"arraybuffer"!==t.type)throw Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(void 0===t.uri&&0===e)return Promise.resolve(this.extensions[De.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,n){i.load(cn.resolveURL(t.uri,r.path),e,void 0,function(){n(Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(e){let i=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+i)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(void 0===r.bufferView&&void 0===r.sparse){let n=Bc[r.type],s=gs[r.componentType],a=!0===r.normalized,l=new s(r.count*n);return Promise.resolve(new Ye(l,n,a))}let h=[];return void 0!==r.bufferView?h.push(this.getDependency("bufferView",r.bufferView)):h.push(null),void 0!==r.sparse&&(h.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),h.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(h).then(function(e){let n=e[0],s=Bc[r.type],a=gs[r.componentType],l=a.BYTES_PER_ELEMENT,h=r.byteOffset||0,u=void 0!==r.bufferView?i.bufferViews[r.bufferView].byteStride:void 0,c=!0===r.normalized,d,p;if(u&&u!==l*s){let f=Math.floor(h/u),m="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count,g=t.cache.get(m);g||(d=new a(n,f*u,r.count*u/l),g=new Hs(d,u/l),t.cache.add(m,g)),p=new zn(g,s,h%u/l,c)}else d=null===n?new a(r.count*s):new a(n,h,r.count*s),p=new Ye(d,s,c);if(void 0!==r.sparse){let $=Bc.SCALAR,v=gs[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,b=new v(e[1],x,r.sparse.count*$),_=new a(e[2],y,r.sparse.count*s);null!==n&&(p=new Ye(p.array.slice(),p.itemSize,p.normalized));for(let S=0,w=b.length;S<w;S++){let M=b[S];if(p.setX(M,_[S*s]),s>=2&&p.setY(M,_[S*s+1]),s>=3&&p.setZ(M,_[S*s+2]),s>=4&&p.setW(M,_[S*s+3]),s>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,n=t.images[r],s=this.textureLoader;if(n.uri){let a=i.manager.getHandler(n.uri);null!==a&&(s=a)}return this.loadTextureImage(e,r,s)}loadTextureImage(e,t,i){let r=this,n=this.json,s=n.textures[e],a=n.images[t],l=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];let h=this.loadImageSource(t,i).then(function(t){t.flipY=!1,t.name=s.name||a.name||"";let i=(n.samplers||{})[s.sampler]||{};return t.magFilter=Lu[i.magFilter]||ut,t.minFilter=Lu[i.minFilter]||gi,t.wrapS=Iu[i.wrapS]||li,t.wrapT=Iu[i.wrapT]||li,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){let i=this.json,r=this.options;if(void 0!==this.sourceCache[e])return this.sourceCache[e].then(e=>e.clone());let n=i.images[e],s=self.URL||self.webkitURL,a=n.uri||"",l=!1;if(void 0!==n.bufferView)a=this.getDependency("bufferView",n.bufferView).then(function(e){l=!0;let t=new Blob([e],{type:n.mimeType});return a=s.createObjectURL(t)});else if(void 0===n.uri)throw Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(a).then(function(e){return new Promise(function(i,n){let s=i;!0===t.isImageBitmapLoader&&(s=function(e){let t=new qe(e);t.needsUpdate=!0,i(t)}),t.load(cn.resolveURL(e,r.path),s,void 0,n)})}).then(function(e){return!0===l&&s.revokeObjectURL(a),e.userData.mimeType=n.mimeType||Yx(n.uri),e}).catch(function(e){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),e});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){let n=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(void 0===i.texCoord||0==i.texCoord||"aoMap"===t&&1==i.texCoord||console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+t+" not yet supported."),n.extensions[De.KHR_TEXTURE_TRANSFORM]){let a=void 0!==i.extensions?i.extensions[De.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=n.associations.get(s);s=n.extensions[De.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),n.associations.set(s,l)}}return void 0!==r&&(s.encoding=r),e[t]=s,s})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=void 0===t.attributes.tangent,n=void 0!==t.attributes.color,s=void 0===t.attributes.normal;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new qs,Et.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let h="LineBasicMaterial:"+i.uuid,u=this.cache.get(h);u||(u=new Ws,Et.prototype.copy.call(u,i),u.color.copy(i.color),this.cache.add(h,u)),i=u}if(r||n||s){let c="ClonedMaterial:"+i.uuid+":";r&&(c+="derivative-tangents:"),n&&(c+="vertex-colors:"),s&&(c+="flat-shading:");let d=this.cache.get(c);d||(d=i.clone(),n&&(d.vertexColors=!0),s&&(d.flatShading=!0),r&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(c,d),this.associations.set(d,this.associations.get(i))),i=d}i.aoMap&&void 0===t.attributes.uv2&&void 0!==t.attributes.uv&&t.setAttribute("uv2",t.attributes.uv),e.material=i}getMaterialType(){return ts}loadMaterial(e){let t=this,i=this.json,r=this.extensions,n=i.materials[e],s,a={},l=n.extensions||{},h=[];if(l[De.KHR_MATERIALS_UNLIT]){let u=r[De.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),h.push(u.extendParams(a,n,t))}else{let c=n.pbrMetallicRoughness||{};if(a.color=new ye(1,1,1),a.opacity=1,Array.isArray(c.baseColorFactor)){let d=c.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}void 0!==c.baseColorTexture&&h.push(t.assignTexture(a,"map",c.baseColorTexture,Be)),a.metalness=void 0!==c.metallicFactor?c.metallicFactor:1,a.roughness=void 0!==c.roughnessFactor?c.roughnessFactor:1,void 0!==c.metallicRoughnessTexture&&(h.push(t.assignTexture(a,"metalnessMap",c.metallicRoughnessTexture)),h.push(t.assignTexture(a,"roughnessMap",c.metallicRoughnessTexture))),s=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,a)})))}!0===n.doubleSided&&(a.side=St);let p=n.alphaMode||Uc.OPAQUE;if(p===Uc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,p===Uc.MASK&&(a.alphaTest=void 0!==n.alphaCutoff?n.alphaCutoff:.5)),void 0!==n.normalTexture&&s!==Gt&&(h.push(t.assignTexture(a,"normalMap",n.normalTexture)),a.normalScale=new se(1,1),void 0!==n.normalTexture.scale)){let f=n.normalTexture.scale;a.normalScale.set(f,f)}return void 0!==n.occlusionTexture&&s!==Gt&&(h.push(t.assignTexture(a,"aoMap",n.occlusionTexture)),void 0!==n.occlusionTexture.strength&&(a.aoMapIntensity=n.occlusionTexture.strength)),void 0!==n.emissiveFactor&&s!==Gt&&(a.emissive=new ye().fromArray(n.emissiveFactor)),void 0!==n.emissiveTexture&&s!==Gt&&h.push(t.assignTexture(a,"emissiveMap",n.emissiveTexture,Be)),Promise.all(h).then(function(){let i=new s(a);return n.name&&(i.name=n.name),jn(i,n),t.associations.set(i,{materials:e}),n.extensions&&nr(r,i,n),i})}createUniqueName(e){let t=Ie.sanitizeNodeName(e||""),i=t;for(let r=1;this.nodeNamesUsed[i];++r)i=t+"_"+r;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache;function n(e){return i[De.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(i){return Nu(i,e,t)})}let s=[];for(let a=0,l=e.length;a<l;a++){let h=e[a],u=Xx(h),c=r[u];if(c)s.push(c.promise);else{let d;d=h.extensions&&h.extensions[De.KHR_DRACO_MESH_COMPRESSION]?n(h):Nu(new ht,h,t),r[u]={primitive:h,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){let t=this,i=this.json,r=this.extensions,n=i.meshes[e],s=n.primitives,a=[];for(let l=0,h=s.length;l<h;l++){let u=void 0===s[l].material?Gx(this.cache):this.getDependency("material",s[l].material);a.push(u)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(i){let a=i.slice(0,i.length-1),l=i[i.length-1],h=[];for(let u=0,c=l.length;u<c;u++){let d=l[u],p=s[u],f,m=a[u];if(p.mode===Yt.TRIANGLES||p.mode===Yt.TRIANGLE_STRIP||p.mode===Yt.TRIANGLE_FAN||void 0===p.mode)!0!==(f=!0===n.isSkinnedMesh?new Jr(d,m):new Ze(d,m)).isSkinnedMesh||f.geometry.attributes.skinWeight.normalized||f.normalizeSkinWeights(),p.mode===Yt.TRIANGLE_STRIP?f.geometry=Fu(f.geometry,Qh):p.mode===Yt.TRIANGLE_FAN&&(f.geometry=Fu(f.geometry,mc));else if(p.mode===Yt.LINES)f=new $r(d,m);else if(p.mode===Yt.LINE_STRIP)f=new Qi(d,m);else if(p.mode===Yt.LINE_LOOP)f=new Qr(d,m);else if(p.mode===Yt.POINTS)f=new eo(d,m);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(f.geometry.morphAttributes).length>0&&qx(f,n),f.name=t.createUniqueName(n.name||"mesh_"+e),jn(f,n),p.extensions&&nr(r,f,p),t.assignFinalMaterial(f),h.push(f)}for(let g=0,$=h.length;g<$;g++)t.associations.set(h[g],{meshes:e,primitives:g});if(1===h.length)return h[0];let v=new rn;t.associations.set(v,{meshes:e});for(let x=0,y=h.length;x<y;x++)v.add(h[x]);return v})}loadCamera(e){let t,i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return"perspective"===i.type?t=new dt(nu.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):"orthographic"===i.type&&(t=new ji(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),jn(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let r=0,n=t.joints.length;r<n;r++)i.push(this.getDependency("node",t.joints[r]));return void 0!==t.inverseBindMatrices?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(e){let i=e.pop(),r=e,n=[],s=[];for(let a=0,l=r.length;a<l;a++){let h=r[a];if(h){n.push(h);let u=new me;null!==i&&u.fromArray(i.array,16*a),s.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[a])}return new $i(n,s)})}loadAnimation(e){let t=this.json.animations[e],i=[],r=[],n=[],s=[],a=[];for(let l=0,h=t.channels.length;l<h;l++){let u=t.channels[l],c=t.samplers[u.sampler],d=u.target,p=d.node,f=void 0!==t.parameters?t.parameters[c.input]:c.input,m=void 0!==t.parameters?t.parameters[c.output]:c.output;i.push(this.getDependency("node",p)),r.push(this.getDependency("accessor",f)),n.push(this.getDependency("accessor",m)),s.push(c),a.push(d)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(n),Promise.all(s),Promise.all(a)]).then(function(i){let r=i[0],n=i[1],s=i[2],a=i[3],l=i[4],h=[];for(let u=0,c=r.length;u<c;u++){let d=r[u],p=n[u],f=s[u],m=a[u],g=l[u];if(void 0===d)continue;d.updateMatrix();let $;switch(Jn[g.path]){case Jn.weights:$=kn;break;case Jn.rotation:$=an;break;case Jn.position:case Jn.scale:default:$=Hn}let v=d.name?d.name:d.uuid,x=void 0!==m.interpolation?Hx[m.interpolation]:ui,y=[];Jn[g.path]===Jn.weights?d.traverse(function(e){e.morphTargetInfluences&&y.push(e.name?e.name:e.uuid)}):y.push(v);let b=f.array;if(f.normalized){let _=ol(b.constructor),S=new Float32Array(b.length);for(let w=0,M=b.length;w<M;w++)S[w]=b[w]*_;b=S}for(let E=0,A=y.length;E<A;E++){let C=new $(y[E]+"."+Jn[g.path],p.array,b,x);"CUBICSPLINE"===m.interpolation&&(C.createInterpolant=function(e){return new(this instanceof an?sl:Eo)(this.times,this.values,this.getValueSize()/3,e)},C.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),h.push(C)}}let L=t.name?t.name:"animation_"+e;return new ns(L,void 0,h)})}createNodeMesh(e){let t=this.json,i=this,r=t.nodes[e];return void 0===r.mesh?null:i.getDependency("mesh",r.mesh).then(function(e){let t=i._getNodeRef(i.meshCache,r.mesh,e);return void 0!==r.weights&&t.traverse(function(e){if(e.isMesh)for(let t=0,i=r.weights.length;t<i;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,i=this.extensions,r=this,n=t.nodes[e],s=n.name?r.createUniqueName(n.name):"",a,l;return(a=[],(l=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)}))&&a.push(l),void 0!==n.camera&&a.push(r.getDependency("camera",n.camera).then(function(e){return r._getNodeRef(r.cameraCache,n.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){a.push(e)}),Promise.all(a)).then(function(t){let a;if((a=!0===n.isBone?new Gs:t.length>1?new rn:1===t.length?t[0]:new Oe)!==t[0])for(let l=0,h=t.length;l<h;l++)a.add(t[l]);if(n.name&&(a.userData.name=n.name,a.name=s),jn(a,n),n.extensions&&nr(i,a,n),void 0!==n.matrix){let u=new me;u.fromArray(n.matrix),a.applyMatrix4(u)}else void 0!==n.translation&&a.position.fromArray(n.translation),void 0!==n.rotation&&a.quaternion.fromArray(n.rotation),void 0!==n.scale&&a.scale.fromArray(n.scale);return r.associations.has(a)||r.associations.set(a,{}),r.associations.get(a).nodes=e,a})}loadScene(e){let t=this.json,i=this.extensions,r=this.json.scenes[e],n=this,s=new rn;r.name&&(s.name=n.createUniqueName(r.name)),jn(s,r),r.extensions&&nr(i,s,r);let a=r.nodes||[],l=[];for(let h=0,u=a.length;h<u;h++)l.push(zu(a[h],s,t,n));return Promise.all(l).then(function(){return n.associations=(e=>{let t=new Map;for(let[i,r]of n.associations)(i instanceof Et||i instanceof qe)&&t.set(i,r);return e.traverse(e=>{let i=n.associations.get(e);null!=i&&t.set(e,i)}),t})(s),s})}};function zu(e,t,i,r){let n=i.nodes[e];return r.getDependency("node",e).then(function(e){return void 0===n.skin?e:r.getDependency("skin",n.skin).then(function(t){return e.traverse(function(e){e.isSkinnedMesh&&e.bind(t,e.matrixWorld)}),e})}).then(function(e){t.add(e);let s=[];if(n.children){let a=n.children;for(let l=0,h=a.length;l<h;l++){let u=a[l];s.push(zu(u,e,i,r))}}return Promise.all(s)})}function Zx(e,t,i){let r=t.attributes,n=new tt;if(void 0===r.POSITION)return;{let s=i.json.accessors[r.POSITION],a=s.min,l=s.max;if(void 0!==a&&void 0!==l){if(n.set(new T(a[0],a[1],a[2]),new T(l[0],l[1],l[2])),s.normalized){let h=ol(gs[s.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}let u=t.targets;if(void 0!==u){let c=new T,d=new T;for(let p=0,f=u.length;p<f;p++){let m=u[p];if(void 0!==m.POSITION){let g=i.json.accessors[m.POSITION],$=g.min,v=g.max;if(void 0!==$&&void 0!==v){if(d.setX(Math.max(Math.abs($[0]),Math.abs(v[0]))),d.setY(Math.max(Math.abs($[1]),Math.abs(v[1]))),d.setZ(Math.max(Math.abs($[2]),Math.abs(v[2]))),g.normalized){let x=ol(gs[g.componentType]);d.multiplyScalar(x)}c.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(c)}e.boundingBox=n;let y=new en;n.getCenter(y.center),y.radius=n.min.distanceTo(n.max)/2,e.boundingSphere=y}function Nu(e,t,i){let r=t.attributes,n=[];function s(t,r){return i.getDependency("accessor",t).then(function(t){e.setAttribute(r,t)})}for(let a in r){let l=rl[a]||a.toLowerCase();l in e.attributes||n.push(s(r[a],l))}if(void 0!==t.indices&&!e.index){let h=i.getDependency("accessor",t.indices).then(function(t){e.setIndex(t)});n.push(h)}return jn(e,t),Zx(e,t,i),Promise.all(n).then(function(){return void 0!==t.targets?Wx(e,t.targets,i):e})}function Fu(e,t){let i=e.getIndex();if(null===i){let r=[],n=e.getAttribute("position");if(void 0===n)return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e;for(let s=0;s<n.count;s++)r.push(s);e.setIndex(r),i=e.getIndex()}let a=i.count-2,l=[];if(t===mc)for(let h=1;h<=a;h++)l.push(i.getX(0)),l.push(i.getX(h)),l.push(i.getX(h+1));else for(let u=0;u<a;u++)u%2==0?(l.push(i.getX(u)),l.push(i.getX(u+1)),l.push(i.getX(u+2))):(l.push(i.getX(u+2)),l.push(i.getX(u+1)),l.push(i.getX(u)));l.length/3!==a&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let c=e.clone();return c.setIndex(l),c}var Co=class{constructor(e,t,i,r){this.animations={},this.position=new T(0,0,0),this.lastPosition=new T(0,0,0),this.quaternion=null,this.isOwnAvatar=!1,this.currentAnimation=null,this.lastWorldModelPos=new T(0,0,0),this.load=function(){return Xe(this,null,function*(){let e=new Ao;return new Promise((t,i)=>{e.load(this.url,e=>Xe(this,null,function*(){this.mixer=new lo(e.scene),e.animations.forEach(e=>{let t=this.mixer.clipAction(e);this.animations[e.name]=t,this.animations[e.name].paused=!0}),e.scene.scale.set(this.scale,this.scale,this.scale),e.scene.rotation.set(0,3.14,0),e.scene.position.set(0,this.height,0);let i=new Oe;i.add(e.scene),this.model=e.scene,this.root=i,t(this.root)}),e=>{console.log(`${e.loaded/e.total*100} % loaded`)},e=>{console.error("An error happened loading the avatar",e),i(e)})})})},this.url=e,this.scale=t,this.height=i,this.clock=new Wn,this.mixer=null,this.isOwnAvatar=r,this.animations={},this.isMoving=!1,this.isMovingCounter=0,this.lerpAnimationFrame=requestAnimationFrame(this.animate.bind(this))}setPosition(e){this.position.set(e.x,e.y,e.z)}setQuaternion(e){this.quaternion=new et(e.x,e.y,e.z,e.w)}destroy(){cancelAnimationFrame(this.lerpAnimationFrame),this.root.parent.remove(this.root)}animate(){if(requestAnimationFrame(this.animate.bind(this)),!this.position||!this.quaternion)return;this.lastPosition.set(this.position.x,this.position.y,this.position.z);let e=this.clock.getDelta(),t=this.isOwnAvatar?6:2,i=this.root.position.clone();i.lerp(this.position,t*e),this.root.position.set(i.x,i.y,i.z);let r=this.root.quaternion.clone();r.slerp(this.quaternion,t*e),this.root.quaternion.set(r.x,r.y,r.z,r.w),this.mixer.update(e);let n=new T(0,0,0);this.model.getWorldPosition(n);let s=this.isOwnAvatar?.001:.004,a=this.isOwnAvatar?10:30;this.lastWorldModelPos.distanceTo(n)<s?(this.isMovingCounter++,this.isMovingCounter>a&&(this.isMoving=!1,this.isMovingCounter=0)):this.isMoving=!0,this.model.getWorldPosition(this.lastWorldModelPos)}playAnimation(e){if(!this.animations[e])return;let t=this.animations[e];if(t&&this.currentAnimation!==e){if(t.paused=!1,t.enabled=!0,t.play(),this.currentAnimation&&this.animations[this.currentAnimation]){let i=this.isOwnAvatar?.3:.7;this.animations[this.currentAnimation].crossFadeTo(t,i,!0)}this.currentAnimation=e}}stopAnimation(e){this.animations[e]&&(this.animations[e].paused=!0)}stopAllAnimations(){Object.values(this.animations).forEach(e=>{e.paused=!0})}};function Jx(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var r,n,s,a,l=[],h=!0,u=!1;try{if(s=(i=i.call(e)).next,0===t){if(Object(i)!==i)return;h=!1}else for(;!(h=(r=s.call(i)).done)&&(l.push(r.value),l.length!==t);h=!0);}catch(c){u=!0,n=c}finally{try{if(!h&&null!=i.return&&(a=i.return(),Object(a)!==a))return}finally{if(u)throw n}}return l}}function jx(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function Bu(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,l_(r.key),r)}}function Kx(e,t,i){return t&&Bu(e.prototype,t),i&&Bu(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function $x(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&cl(e,t)}function Ro(e){return(Ro=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function cl(e,t){return(cl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function Qx(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function e_(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function t_(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return e_(e)}function n_(e){var t=Qx();return function(){var i,r=Ro(e);if(t){var n=Ro(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return t_(this,i)}}function Uu(e,t){return s_(e)||Jx(e,t)||ku(e,t)||a_()}function Po(e){return i_(e)||r_(e)||ku(e)||o_()}function i_(e){if(Array.isArray(e))return ll(e)}function s_(e){if(Array.isArray(e))return e}function r_(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function ku(e,t){if(e){if("string"==typeof e)return ll(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return ll(e,t)}}function ll(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=Array(t);i<t;i++)r[i]=e[i];return r}function o_(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a_(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c_(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function l_(e){var t=c_(e,"string");return"symbol"==typeof t?t:String(t)}var ir="undefined"!=typeof window&&window.THREE?window.THREE:{LinearFilter:ut,Sprite:Ki,SpriteMaterial:mi,Texture:qe},Lo=function(e){$x(i,e);var t=n_(i);function i(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rgba(255, 255, 255, 1)";return jx(this,i),(e=t.call(this,new ir.SpriteMaterial))._text="".concat(r),e._textHeight=n,e._color=s,e._backgroundColor=!1,e._padding=0,e._borderWidth=0,e._borderRadius=0,e._borderColor="white",e._strokeWidth=0,e._strokeColor="white",e._fontFace="Arial",e._fontSize=90,e._fontWeight="normal",e._canvas=document.createElement("canvas"),e._genCanvas(),e}return Kx(i,[{key:"text",get:function(){return this._text},set:function(e){this._text=e,this._genCanvas()}},{key:"textHeight",get:function(){return this._textHeight},set:function(e){this._textHeight=e,this._genCanvas()}},{key:"color",get:function(){return this._color},set:function(e){this._color=e,this._genCanvas()}},{key:"backgroundColor",get:function(){return this._backgroundColor},set:function(e){this._backgroundColor=e,this._genCanvas()}},{key:"padding",get:function(){return this._padding},set:function(e){this._padding=e,this._genCanvas()}},{key:"borderWidth",get:function(){return this._borderWidth},set:function(e){this._borderWidth=e,this._genCanvas()}},{key:"borderRadius",get:function(){return this._borderRadius},set:function(e){this._borderRadius=e,this._genCanvas()}},{key:"borderColor",get:function(){return this._borderColor},set:function(e){this._borderColor=e,this._genCanvas()}},{key:"fontFace",get:function(){return this._fontFace},set:function(e){this._fontFace=e,this._genCanvas()}},{key:"fontSize",get:function(){return this._fontSize},set:function(e){this._fontSize=e,this._genCanvas()}},{key:"fontWeight",get:function(){return this._fontWeight},set:function(e){this._fontWeight=e,this._genCanvas()}},{key:"strokeWidth",get:function(){return this._strokeWidth},set:function(e){this._strokeWidth=e,this._genCanvas()}},{key:"strokeColor",get:function(){return this._strokeColor},set:function(e){this._strokeColor=e,this._genCanvas()}},{key:"_genCanvas",value:function(){var e=this,t=this._canvas,i=t.getContext("2d"),r=Array.isArray(this.borderWidth)?this.borderWidth:[this.borderWidth,this.borderWidth],n=r.map(function(t){return t*e.fontSize*.1}),s=(Array.isArray(this.borderRadius)?this.borderRadius:[this.borderRadius,this.borderRadius,this.borderRadius,this.borderRadius]).map(function(t){return t*e.fontSize*.1}),a=Array.isArray(this.padding)?this.padding:[this.padding,this.padding],l=a.map(function(t){return t*e.fontSize*.1}),h=this.text.split(`
`),u="".concat(this.fontWeight," ").concat(this.fontSize,"px ").concat(this.fontFace);i.font=u;var c=Math.max.apply(Math,Po(h.map(function(e){return i.measureText(e).width}))),d=this.fontSize*h.length;if(t.width=c+2*n[0]+2*l[0],t.height=d+2*n[1]+2*l[1],this.borderWidth){if(i.strokeStyle=this.borderColor,n[0]){var p=n[0]/2;i.lineWidth=n[0],i.beginPath(),i.moveTo(p,s[0]),i.lineTo(p,t.height-s[3]),i.moveTo(t.width-p,s[1]),i.lineTo(t.width-p,t.height-s[2]),i.stroke()}if(n[1]){var f=n[1]/2;i.lineWidth=n[1],i.beginPath(),i.moveTo(Math.max(n[0],s[0]),f),i.lineTo(t.width-Math.max(n[0],s[1]),f),i.moveTo(Math.max(n[0],s[3]),t.height-f),i.lineTo(t.width-Math.max(n[0],s[2]),t.height-f),i.stroke()}if(this.borderRadius){var m=Math.max.apply(Math,Po(n)),g=m/2;i.lineWidth=m,i.beginPath(),[!!s[0]&&[s[0],g,g,s[0]],!!s[1]&&[t.width-s[1],t.width-g,g,s[1]],!!s[2]&&[t.width-s[2],t.width-g,t.height-g,t.height-s[2]],!!s[3]&&[s[3],g,t.height-g,t.height-s[3]]].filter(function(e){return e}).forEach(function(e){var t=Uu(e,4),r=t[0],n=t[1],s=t[2],a=t[3];i.moveTo(r,s),i.quadraticCurveTo(n,s,n,a)}),i.stroke()}}this.backgroundColor&&(i.fillStyle=this.backgroundColor,this.borderRadius?(i.beginPath(),i.moveTo(n[0],s[0]),[[n[0],s[0],t.width-s[1],n[1],n[1],n[1]],[t.width-n[0],t.width-n[0],t.width-n[0],n[1],s[1],t.height-s[2]],[t.width-n[0],t.width-s[2],s[3],t.height-n[1],t.height-n[1],t.height-n[1]],[n[0],n[0],n[0],t.height-n[1],t.height-s[3],s[0]]].forEach(function(e){var t=Uu(e,6),r=t[0],n=t[1],s=t[2],a=t[3],l=t[4],h=t[5];i.quadraticCurveTo(r,a,n,l),i.lineTo(s,h)}),i.closePath(),i.fill()):i.fillRect(n[0],n[1],t.width-2*n[0],t.height-2*n[1])),i.translate.apply(i,Po(n)),i.translate.apply(i,Po(l)),i.font=u,i.fillStyle=this.color,i.textBaseline="bottom";var $=this.strokeWidth>0;$&&(i.lineWidth=this.strokeWidth*this.fontSize/10,i.strokeStyle=this.strokeColor),h.forEach(function(t,r){var n=(c-i.measureText(t).width)/2,s=(r+1)*e.fontSize;$&&i.strokeText(t,n,s),i.fillText(t,n,s)}),this.material.map&&this.material.map.dispose();var v=this.material.map=new ir.Texture(t);v.minFilter=ir.LinearFilter,v.needsUpdate=!0;var x=this.textHeight*h.length+2*r[1]+2*a[1];this.scale.set(x*t.width/t.height,x,0)}},{key:"clone",value:function(){return new this.constructor(this.text,this.textHeight,this.color).copy(this)}},{key:"copy",value:function(e){return ir.Sprite.prototype.copy.call(this,e),this.color=e.color,this.backgroundColor=e.backgroundColor,this.padding=e.padding,this.borderWidth=e.borderWidth,this.borderColor=e.borderColor,this.fontFace=e.fontFace,this.fontSize=e.fontSize,this.fontWeight=e.fontWeight,this.strokeWidth=e.strokeWidth,this.strokeColor=e.strokeColor,this}}]),i}(ir.Sprite),Io=class{constructor(e,t,i){if(this.load=()=>Xe(this,null,function*(){let e=this.height,t=new FontFace("OpenSans-SemiBold","url(https://superviz2homologmediaserver.s3.amazonaws.com/static/fonts/OpenSans-SemiBold.woff)");return yield t.load(),document.fonts.add(t),this.model=this.createTextGeometry(this.name,this.color),this.model.position.set(0,e+.2,0),this.model}),this.createTextGeometry=(e,t)=>{let i=To[this.slot],r=t,n=new Lo(e,.1);return n.color=i,n.padding=2,n.backgroundColor=r,n.fontFace="OpenSans-SemiBold",n.fontSize=120,n.scale.set(.05*n.scale.x,.05*n.scale.y,.05*n.scale.z),n},this.name=e,t)this.color=Bt[t];else{let r=Bt[0];this.color=r}this.height=i,this.slot=t}},Do=class{constructor(e,t,i){this.destPos=new T(0,0,0),this.curPos=new T(0,0,0),this.startPos=new T(0,0,0),this.counter=0,this.colorIndex=0,this.lastColorIndex=0,this.lastDestPos=new T(1e3,1e3,1e3),this.lastStartPos=new T(1e3,1e3,1e3),this.createdMaterial=!1,this.tempStartVec=new T(0,0,0),this.update=(function(e,t,i,r=0){this.colorIndex=r,this.destPos.x=t.x,this.destPos.y=t.y,this.destPos.z=t.z,this.tempStartVec.copy(this.origin),this.tempStartVec.applyQuaternion(i),this.startPos.copy(e),this.startPos.add(this.tempStartVec),this.counter=0}).bind(this),this.clock=new Wn,this.origin=i,this.lerpAnimationFrame=requestAnimationFrame(this.animate.bind(this))}load(){this.createMaterial(),this.root=new Oe}animate(){if(this.lerpAnimationFrame=requestAnimationFrame(this.animate.bind(this)),!this.createdMaterial)return;let e=this.clock.getDelta();if(!(this.counter>30&&this.lastDestPos.equals(this.destPos)&&.2>this.lastStartPos.distanceTo(this.startPos))){if(this.counter++,this.lastColorIndex!==this.colorIndex){let t=Bt[this.colorIndex];this.material&&(this.material.color.set(t),this.lastColorIndex=this.colorIndex)}this.curPos.lerp(this.destPos,e/1e3*1e4),this.lastDestPos.x=this.destPos.x,this.lastDestPos.y=this.destPos.y,this.lastDestPos.z=this.destPos.z,this.lastStartPos.x=this.startPos.x,this.lastStartPos.y=this.startPos.y,this.lastStartPos.z=this.startPos.z,this.updateMesh(this.startPos,this.curPos)}}destroy(){this.material&&this.material.dispose(),cancelAnimationFrame(this.lerpAnimationFrame),this.root.parent&&this.root.parent.remove(this.root)}createMaterial(){let e=this.createTextureCanvas(),t=new qe(e);t.needsUpdate=!0;let i=Bt[this.colorIndex];this.material=new Gt({map:t,blending:Or,color:i,side:St,depthWrite:!0,transparent:!0}),this.createdMaterial=!0}updateMesh(e,t){let i=new Xs(e,t);this.mesh&&this.mesh.geometry&&(this.mesh.geometry.dispose(),this.root.remove(this.mesh));let r=new es(i,1,.003,4,!1);this.material&&(this.mesh=new Ze(r,this.material),this.root.add(this.mesh))}createTextureCanvas(){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=1,e.height=64;let i=t.createLinearGradient(0,0,e.width,e.height);return i.addColorStop(0,"rgba(  0,  0,  0,0.1)"),i.addColorStop(.1,"rgba(160,160,160,0.3)"),i.addColorStop(.5,"rgba(255,255,255,0.5)"),i.addColorStop(.9,"rgba(160,160,160,0.3)"),i.addColorStop(1,"rgba(  0,  0,  0,0.1)"),t.fillStyle=i,t.fillRect(0,0,e.width,e.height),e}},No=class{constructor(e){this.destPos=new T(0,0,0),this.curPos=new T(0,0,0),this.counter=0,this.colorIndex=0,this.lastColorIndex=0,this.lastDestPos=new T(1e3,1e3,1e3),this.update=(function(e,t=0){void 0!==t&&(this.colorIndex=t),this.destPos.x=e.x,this.destPos.y=e.y,this.destPos.z=e.z,this.counter=0}).bind(this),this.createTextGeometry=(e,t)=>{let i=To[this.colorIndex],r=t,n=new Lo(e,.1);return n.color=i,n.padding=2,n.backgroundColor=r,n.fontFace="OpenSans-SemiBold",n.fontSize=120,n.scale.set(.005*n.scale.x,.005*n.scale.y,.005*n.scale.z),n.material.sizeAttenuation=!1,n.material.depthTest=!1,n.center.set(-.35,1),n},this.createArrowGeometry=e=>Xe(this,null,function*(){return new Promise(t=>{let i=`https://superviz2homologmediaserver.s3.amazonaws.com/static/pointers/${e}.svg`,r;(new ss).load(i,e=>{r=e;let i=new mi({map:r,color:16777215,fog:!1,sizeAttenuation:!1}),n=new Ki(i);n.scale.set(.02,.02,.02),n.center.set(.2,.23),t(n)})})}),this.clock=new Wn,this.scene=e,this.lerpAnimationFrame=requestAnimationFrame(this.animate.bind(this))}load(e,t){return Xe(this,null,function*(){this.root=new Oe,this.colorIndex=t;let i=new FontFace("OpenSans-SemiBold","url(https://superviz2homologmediaserver.s3.amazonaws.com/static/fonts/OpenSans-SemiBold.woff)");return yield i.load(),document.fonts.add(i),this.textMesh=yield this.createTextGeometry(e,Bt[t]),this.arrowMesh=yield this.createArrowGeometry(t),this.textMesh.position.set(0,0,0),this.root.add(this.arrowMesh),this.root.add(this.textMesh),this.scene.add(this.root),this.root})}animate(){return Xe(this,null,function*(){this.lerpAnimationFrame=requestAnimationFrame(this.animate.bind(this));let e=this.clock.getDelta();if(!(this.counter>30&&this.lastDestPos.equals(this.destPos))){if(this.counter++,void 0!==this.colorIndex&&this.lastColorIndex!==this.colorIndex&&this.backgroundMaterial){let t=new ye(Bt[this.colorIndex]);this.backgroundMaterial.color.set(t),this.lastColorIndex=this.colorIndex,this.root.remove(this.arrowMesh),this.arrowMesh=yield this.createArrowGeometry(this.colorIndex),this.root.add(this.arrowMesh)}this.curPos.lerp(this.destPos,e/1e3*1e4),this.lastDestPos.x=this.destPos.x,this.lastDestPos.y=this.destPos.y,this.lastDestPos.z=this.destPos.z,this.root.position.copy(this.curPos)}})}destroy(){this.backgroundMaterial&&this.backgroundMaterial.dispose(),cancelAnimationFrame(this.lerpAnimationFrame),this.root.parent&&this.root.parent.remove(this.root)}},hl=class{constructor(e,t,i){this.initialized=!1,this.currentLocalPointerDest=new T(0,0,0),this.avatars={},this.lasers={},this.mouses={},this.names={},this.laserUpdateIntervals={},this.syncInterval=null,this.tempQuat=new et(0,0,0,0),this.onParticipantUpdated=e=>{if(!this.initialized||e.clientId===this.localParticipantId)return;let t=e.clientId,i=this.avatars[t];if(!i)return;let{position:r,quaternion:n,pointer:s}=e.data;r&&n&&this.updateAvatar(i,r,n);let a=this.lasers[t];i.root.getWorldQuaternion(this.tempQuat);let l=this.realtime.getParticipantSlot(t);this.names[t]&&void 0!==l&&this.names[t].slot!==l&&(this.names[t].slot=l,this.names[t].backgroundMaterial.color=new ye(Bt[l]),this.names[t].backgroundMaterial.needsUpdate=!0),a&&(this.laserUpdateIntervals[t]&&clearInterval(this.laserUpdateIntervals[t]),this.laserUpdateIntervals[t]=setInterval(()=>{this.updateLaser(a,i.root.position,s,this.tempQuat,l)},30)),this.mouses[t]&&this.mouses[t].update(s,l)},ht.prototype.computeBoundsTree=Oc,ht.prototype.disposeBoundsTree=zc,Ze.prototype.raycast=Fc,this.createdPointerMoveEvent=!1,this.scene=e,this.camera=t,this.player=i,this.syncInterval=window.setInterval(this.checkPlayerChanges.bind(this),30)}createAvatar(e){return Xe(this,null,function*(){return this.initialized?(e.id!==this.localParticipantId&&this.realtime.subscribeToParticipantUpdate(e.id,this.onParticipantUpdated),yield this._createAvatar(e)):void 0})}destroyAvatar(e){return Xe(this,null,function*(){this.avatars[e.id]&&(this.mouses[e.id]&&this.mouses[e.id].destroy(),this.avatars[e.id].destroy(),delete this.avatars[e.id],this.avatars[e.id]=null,this.mouses[e.id]=null),this.realtime.unsubscribeToParticipantUpdate(e.id,this.onParticipantUpdated)})}createLaser(e){return Xe(this,null,function*(){this.initialized&&this._createLaser(e)})}destroyLaser(e){return Xe(this,null,function*(){this.lasers[e.id]&&(this.lasers[e.id].destroy(),delete this.lasers[e.id],this.lasers[e.id]=null)})}createMouse(e){return Xe(this,null,function*(){this.initialized&&this._createMouse(e)})}destroyMouse(e){return Xe(this,null,function*(){this.mouses[e.id]&&(this.mouses[e.id].destroy(),delete this.mouses[e.id],this.mouses[e.id]=null)})}createName(e,t){return Xe(this,null,function*(){this._createName(e,t)})}goToParticipant(e){if(e===this.localParticipantId||!this.avatars[e])return;let t=this.avatars[e].root.position,i=this.avatars[e].root.quaternion,r=setInterval(()=>{let e=this.player.position.clone();e.lerp(t,.1),this.player.position.set(e.x,e.y,e.z);let r=this.player.quaternion.clone();r.slerp(i,.1),this.player.quaternion.set(r.x,r.y,r.z,r.w)},1);setTimeout(()=>{clearInterval(r)},1e3)}getAvatars(){return this.avatars}init(e,t){this.localParticipantId=t.id,this.realtime=e,this.initialized=!0}destroy(){this.initialized=!1,Object.keys(this.lasers).forEach(e=>{this.lasers[e]&&(this.lasers[e].destroy(),delete this.lasers[e])}),Object.keys(this.mouses).forEach(e=>{this.mouses[e]&&(this.mouses[e].destroy(),delete this.mouses[e])}),Object.keys(this.names).forEach(e=>{this.names[e]=null,delete this.names[e]}),Object.keys(this.avatars).forEach(e=>{this.avatars[e]&&(this.avatars[e].destroy(),this.avatars[e]=null)}),Object.keys(this.laserUpdateIntervals).forEach(e=>{clearInterval(this.laserUpdateIntervals[e])}),window.removeEventListener("pointermove",this.onPointerMove),clearInterval(this.syncInterval),this.laserUpdateIntervals={},this.avatars={},this.lasers={}}_createAvatar(e){return Xe(this,null,function*(){var t,i,r,n;this.avatars[e.id]&&this.avatars[e.id].destroy();let s=e.id===this.localParticipantId,a=1,l=0;null!=(t=e.avatarConfig)&&t.scale&&(a=e.avatarConfig.scale),null!=(i=e.avatarConfig)&&i.height&&(l=e.avatarConfig.height);let h=null!=(n=null==(r=e.avatar)?void 0:r.model)?n:"https://dev.storage.superviz.com/readyplayerme/0.glb",u=new Co(h,a,l,s),c=yield u.load();return this.avatars[e.id]&&this.avatars[e.id].root.parent.remove(this.avatars[e.id].root),this.scene.add(c),this.avatars[e.id]=u,this.lasers[e.id]&&this.scene.add(this.lasers[e.id].root),s&&(this.myAvatar=u),c})}_createName(e,t){return Xe(this,null,function*(){var i,r,n,s;let a=new tt().setFromObject(t),l=new T(0,0,0);a.getSize(l);let h=this.realtime.getParticipantSlot(e.id),u=null!=(i=e.avatarConfig)&&i.height?e.avatarConfig.height:0,c=!(null!=(r=e.avatar)&&r.model)||(null==(s=null==(n=e.avatar)?void 0:n.model)?void 0:s.includes("readyplayerme")),d=l.y/2+parseFloat(String(u));c&&(d=.9*e.avatarConfig.scale);let p=new Io(e.name,h,d),f=yield p.load();t.add(f),this.names[e.id]=p})}_createLaser(e){return Xe(this,null,function*(){var t;let i=new T(0,0,0);null!=(t=e.avatarConfig)&&t.laserOrigin&&(i=new T(e.avatarConfig.laserOrigin.x,e.avatarConfig.laserOrigin.y,e.avatarConfig.laserOrigin.z));let r=new Do(this.camera,this.scene,i);this.lasers[e.id]=r,r.load(),this.createdPointerMoveEvent||(this.createdPointerMoveEvent=!0,window.addEventListener("pointermove",this.onPointerMove.bind(this)))})}_createMouse(e){let t=new No(this.scene);this.mouses[e.id]=t;let i=this.realtime.getParticipantSlot(e.id);t.load(e.name,i),this.raycaster=new ho,this.createdPointerMoveEvent||(this.createdPointerMoveEvent=!0,window.addEventListener("pointermove",this.onPointerMove.bind(this)))}onPointerMove(e){let t=new se;t.x=e.clientX/window.innerWidth*2-1,t.y=-(2*(e.clientY/window.innerHeight))+1,this.raycaster.setFromCamera(t,this.camera);let i=this.raycaster.intersectObjects(this.scene.children,!0);if(i.length>0){let{point:r}=i[0],n=new T(0,0,0);this.camera.getWorldPosition(n),r.lerp(n,.005),this.currentLocalPointerDest=r}}checkPlayerChanges(){if(this.realtime){let e=new T(0,0,0);this.player.getWorldPosition(e);let t=new et(0,0,0,0);this.player.getWorldQuaternion(t);let i={position:e,quaternion:{x:t.x,y:t.y,z:t.z,w:t.w},pointer:this.currentLocalPointerDest};this.realtime.updateMyProperties(i);let r=this.avatars[this.localParticipantId];if(r){this.updateAvatar(r,e,t);let n=new T(0,0,0);r.model.getWorldPosition(n),r.model.getWorldQuaternion(this.tempQuat);let s=this.realtime.getParticipantSlot(this.localParticipantId);this.names[this.localParticipantId]&&void 0!==s&&this.names[this.localParticipantId].slot!==s&&this.names[this.localParticipantId].backgroundMaterial&&(this.names[this.localParticipantId].slot=s,this.names[this.localParticipantId].backgroundMaterial.color=new ye(Bt[s]),this.names[this.localParticipantId].backgroundMaterial.needsUpdate=!0),this.lasers[this.localParticipantId]&&this.updateLaser(this.lasers[this.localParticipantId],n,this.currentLocalPointerDest,this.tempQuat,s),this.mouses[this.localParticipantId]&&this.mouses[this.localParticipantId].update(this.currentLocalPointerDest,s)}}}updateAvatar(e,t,i){this.initialized&&(e.setPosition(t),e.setQuaternion(i))}updateLaser(e,t,i,r,n){e.update(t,i,r,n)}};window&&(window.ThreeJsPlugin=hl);export{hl as ThreeJsPlugin}; /**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ 