var zt=Object.defineProperty,Qt=Object.getOwnPropertyNames,R=(t,r)=>function(){return t&&(r=(0,t[Qt(t)[0]])(t=0)),r},tt=(t,r)=>{for(var e in r)zt(t,e,{get:r[e],enumerable:!0})};function v(t){const r=t/255;return r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)}function w(t){const r=t<=.0031308?12.92*t:1.055*Math.pow(t,.4166666666666667)-.055;return Math.round(Math.max(0,Math.min(255,r*255)))}function ot(t,r){const e=[[0,0,0],[0,0,0],[0,0,0]];for(let n=0;n<3;n++)for(let o=0;o<3;o++)e[n][o]=t[n][0]*r[0][o]+t[n][1]*r[1][o]+t[n][2]*r[2][o];return e}function Q(t){const[r,e,n]=t[0],[o,i,s]=t[1],[a,u,c]=t[2],l=i*c-s*u,h=-(o*c-s*a),g=o*u-i*a,f=1/(r*l+e*h+n*g);return[[l*f,(n*u-e*c)*f,(e*s-n*i)*f],[h*f,(r*c-n*a)*f,(n*o-r*s)*f],[g*f,(e*a-r*u)*f,(r*i-e*o)*f]]}function q(t,r,e,n){return[t[0][0]*r+t[0][1]*e+t[0][2]*n,t[1][0]*r+t[1][1]*e+t[1][2]*n,t[2][0]*r+t[2][1]*e+t[2][2]*n]}function Xt(t,r,e){const n=.2104542553*t+.793617785*r-.0040720468*e,o=1.9779984951*t-2.428592205*r+.4505937099*e,i=.0259040371*t+.7827717662*r-.808675766*e,s=Math.sqrt(o*o+i*i);let a=Math.atan2(i,o)*(180/Math.PI);return a<0&&(a+=360),{l:n,c:s,h:a}}function Zt(t,r,e){const[n,o,i]=q(K,v(t),v(r),v(e));return Xt(Math.cbrt(n),Math.cbrt(o),Math.cbrt(i))}function It(t,r,e,n="srgb"){if(n==="display-p3")return Zt(t,r,e);const o=v(t),i=v(r),s=v(e),a=.4122214708*o+.5363325363*i+.0514459929*s,u=.2119034982*o+.6806995451*i+.1073969566*s,c=.0883024619*o+.2817188376*i+.6299787005*s,l=Math.cbrt(a),h=Math.cbrt(u),g=Math.cbrt(c),f=.2104542553*l+.793617785*h-.0040720468*g,d=1.9779984951*l-2.428592205*h+.4505937099*g,p=.0259040371*l+.7827717662*h-.808675766*g,O=Math.sqrt(d*d+p*p);let S=Math.atan2(p,d)*(180/Math.PI);return S<0&&(S+=360),{l:f,c:O,h:S}}function Yt(t,r,e){const n=e*(Math.PI/180),o=r*Math.cos(n),i=r*Math.sin(n),s=t+.3963377774*o+.2158037573*i,a=t-.1055613458*o-.0638541728*i,u=t-.0894841775*o-1.291485548*i;return[s*s*s,a*a*a,u*u*u]}function Jt(t,r,e){const[n,o,i]=Yt(t,r,e),[s,a,u]=q(Mt,n,o,i);return[w(s),w(a),w(u)]}function Kt(t,r,e,n="srgb"){if(n==="display-p3")return Jt(t,r,e);const o=e*(Math.PI/180),i=r*Math.cos(o),s=r*Math.sin(o),a=t+.3963377774*i+.2158037573*s,u=t-.1055613458*i-.0638541728*s,c=t-.0894841775*i-1.291485548*s,l=a*a*a,h=u*u*u,g=c*c*c,f=4.0767416621*l-3.3077115913*h+.2309699292*g,d=-1.2684380046*l+2.6097574011*h-.3413193965*g,p=-.0041960863*l-.7034186147*h+1.707614701*g;return[w(f),w(d),w(p)]}function tr(t,r="srgb"){const e=new Array(t.length);for(let n=0;n<t.length;n++){const[o,i,s]=t[n],{l:a,c:u,h:c}=It(o,i,s,r);e[n]=[Math.round(a*255),Math.round(u/.4*255),Math.round(c/360*255)]}return e}function rr(t,r="srgb"){return t.map(({color:[e,n,o],population:i})=>({color:Kt(e/255,n/255*.4,o/255*360,r),population:i}))}function rt(t,r,e){const[n,o,i]=q(U,v(t),v(r),v(e));return[w(n),w(o),w(i)]}function er(t,r,e){const[n,o,i]=q(Ct,v(t),v(r),v(e));return[w(n),w(o),w(i)]}function nr(t,r,e){const[n,o,i]=q(U,v(t),v(r),v(e));return n<-E||n>1+E||o<-E||o>1+E||i<-E||i>1+E}function or(t,r,e,n="srgb"){const o=v(t),i=v(r),s=v(e),[a,u,c]=n==="display-p3"?V[1]:kt;return a*o+u*i+c*s}var it,V,st,K,Mt,at,U,Ct,kt,E,et=R({"src/color-space.ts"(){"use strict";it=[[.8189330101,.3618667424,-.1288597137],[.0329845436,.9293118715,.0361456387],[.0482003018,.2643662691,.633851707]],V=[[.4865709486,.2656676932,.1982172852],[.2289745641,.6917385218,.0792869141],[0,.0451133819,1.0439443689]],st=[[.4123907993,.3575843394,.1804807884],[.2126390059,.7151686788,.0721923154],[.0193308187,.1191947798,.9505321522]],K=ot(it,V),Mt=Q(K),at=Q(st),U=ot(at,V),Ct=Q(U),kt=[.2126,.7152,.0722],E=.001}});function ir(t,r,e){const n=t/255,o=r/255,i=e/255,s=Math.max(n,o,i),a=Math.min(n,o,i),u=(s+a)/2;let c=0,l=0;if(s!==a){const h=s-a;l=u>.5?h/(2-s-a):h/(s+a),s===n?c=((o-i)/h+(o<i?6:0))/6:s===o?c=((i-n)/h+2)/6:c=((n-o)/h+4)/6}return{h:Math.round(c*360),s:Math.round(l*100),l:Math.round(u*100)}}function ut(t,r){const e=Math.max(t,r),n=Math.min(t,r);return(e+.05)/(n+.05)}function H(t,r,e,n,o=0,i="srgb"){return new Tt(t,r,e,n,o,i)}var Tt,z=R({"src/color.ts"(){"use strict";et(),Tt=class{constructor(t,r,e,n,o,i="srgb"){this._r=t,this._g=r,this._b=e,this.gamut=i,this.population=n,this.proportion=o}get srgb(){return this._srgb||(this._srgb=this.gamut==="display-p3"?rt(this._r,this._g,this._b):[this._r,this._g,this._b]),this._srgb}rgb(t="srgb"){if(t===this.gamut)return{r:this._r,g:this._g,b:this._b};const[r,e,n]=t==="display-p3"?er(this._r,this._g,this._b):this.srgb;return{r,g:e,b:n}}hex(){const[t,r,e]=this.srgb,n=o=>o.toString(16).padStart(2,"0");return`#${n(t)}${n(r)}${n(e)}`}hsl(){if(!this._hsl){const[t,r,e]=this.srgb;this._hsl=ir(t,r,e)}return this._hsl}oklch(){return this._oklch||(this._oklch=It(this._r,this._g,this._b,this.gamut)),this._oklch}css(t){if(t===void 0){if(this.gamut==="display-p3"){const r=e=>+(e/255).toFixed(4);return`color(display-p3 ${r(this._r)} ${r(this._g)} ${r(this._b)})`}t="rgb"}switch(t){case"hsl":{const{h:r,s:e,l:n}=this.hsl();return`hsl(${r}, ${e}%, ${n}%)`}case"oklch":{const{l:r,c:e,h:n}=this.oklch();return`oklch(${r.toFixed(3)} ${e.toFixed(3)} ${n.toFixed(1)})`}default:{const[r,e,n]=this.srgb;return`rgb(${r}, ${e}, ${n})`}}}array(){return[...this.srgb]}toString(){return this.hex()}get textColor(){return this.isDark?"#ffffff":"#000000"}get luminance(){return this._luminance===void 0&&(this._luminance=or(this._r,this._g,this._b,this.gamut)),this._luminance}get isDark(){return this.luminance<=.179}get isLight(){return!this.isDark}get contrast(){if(!this._contrast){const t=this.luminance,r=ut(t,1),e=ut(t,0),n=this.isDark?H(255,255,255,0,0):H(0,0,0,0,0);this._contrast={white:Math.round(r*100)/100,black:Math.round(e*100)/100,foreground:n}}return this._contrast}}}}),sr={};tt(sr,{computeFallbackColor:()=>Et,createPixelArray:()=>B,extractPalette:()=>Ht,resolveOutputGamut:()=>Lt,validateOptions:()=>St});function St(t){let{colorCount:r,quality:e}=t;if(typeof r>"u"||!Number.isInteger(r))r=10;else{if(r===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");r=Math.max(r,2),r=Math.min(r,20)}(typeof e>"u"||!Number.isInteger(e)||e<1)&&(e=10);const n=t.ignoreWhite!==void 0?!!t.ignoreWhite:!0,o=typeof t.whiteThreshold=="number"?t.whiteThreshold:250,i=typeof t.alphaThreshold=="number"?t.alphaThreshold:125,s=typeof t.minSaturation=="number"?Math.max(0,Math.min(1,t.minSaturation)):0,a=t.colorSpace??"oklch",u=t.gamut??"srgb";return{colorCount:r,quality:e,ignoreWhite:n,whiteThreshold:o,alphaThreshold:i,minSaturation:s,colorSpace:a,gamut:u}}function Lt(t,r,e){return e==="srgb"||r!=="display-p3"?"srgb":e==="auto"?t.some(([n,o,i])=>nr(n,o,i))?"display-p3":"srgb":"display-p3"}function B(t,r,e,n){const{ignoreWhite:o=!0,whiteThreshold:i=250,alphaThreshold:s=125,minSaturation:a=0}=n,u=[];for(let c=0;c<r;c+=e){const l=c*4,h=t[l],g=t[l+1],f=t[l+2],d=t[l+3];if(!(d!==void 0&&d<s)&&!(o&&h>i&&g>i&&f>i)){if(a>0){const p=Math.max(h,g,f);if(p===0||(p-Math.min(h,g,f))/p<a)continue}u.push([h,g,f])}}return u}function Et(t,r,e){let n=0,o=0,i=0,s=0;for(let a=0;a<r;a+=e){const u=a*4;n+=t[u],o+=t[u+1],i+=t[u+2],s++}return s===0?null:[Math.round(n/s),Math.round(o/s),Math.round(i/s)]}function Ht(t,r,e,n,o,i="srgb"){const s=r*e,a={ignoreWhite:n.ignoreWhite,whiteThreshold:n.whiteThreshold,alphaThreshold:n.alphaThreshold,minSaturation:n.minSaturation};let u=B(t,s,n.quality,a);u.length===0&&(u=B(t,s,n.quality,{...a,ignoreWhite:!1})),u.length===0&&(u=B(t,s,n.quality,{...a,ignoreWhite:!1,alphaThreshold:0}));const c=i,l=Lt(u,c,n.gamut),h=m=>c===l?m:rt(m[0],m[1],m[2]);let g;const f=new Set,d=[];for(const m of u){const _=m.join(",");if(!f.has(_)&&(f.add(_),d.push(m),d.length>n.colorCount))break}if(d.length<=n.colorCount){const m=new Map;for(const _ of u){const L=_.join(",");m.set(L,(m.get(L)||0)+1)}g=d.map(_=>({color:_,population:m.get(_.join(","))}))}else if(n.colorSpace==="oklch"){const m=tr(u,c);g=rr(o.quantize(m,n.colorCount),c)}else g=o.quantize(u,n.colorCount);if(g.length>0){const m=g.reduce((_,L)=>_+L.population,0);return g.map(({color:_,population:L})=>{const[Ut,$t,Gt]=h(_);return H(Ut,$t,Gt,L,m>0?L/m:0,l)})}const p=Et(t,s,n.quality);if(!p)return null;const[O,S,I]=h(p);return[H(O,S,I,1,1,l)]}var nt=R({"src/pipeline.ts"(){"use strict";z(),et()}});function ar(){if(W!==void 0)return W;try{const t=document.createElement("canvas").getContext("2d",{colorSpace:"display-p3"});W=!!t&&t.getContextAttributes?.().colorSpace==="display-p3"}catch{W=!1}return W}function ur(t){return t==="display-p3"||t==="auto"}function Rt(t){return ur(t)&&ar()?"display-p3":"srgb"}function Ot(t,r,e,n){try{return n==="display-p3"?t.getImageData(0,0,r,e,{colorSpace:"display-p3"}):t.getImageData(0,0,r,e)}catch(o){if(o instanceof DOMException&&o.name==="SecurityError"){const i=new Error('Image is tainted by cross-origin data. Add crossorigin="anonymous" to the <img> tag and ensure the server sends appropriate CORS headers.');throw i.cause=o,i}throw o}}function j(t,r,e,n){const o=Rt(e),i=document.createElement("canvas");i.width=t,i.height=r;const s=o==="display-p3"?i.getContext("2d",{colorSpace:"display-p3"}):i.getContext("2d");return n(s),{data:Ot(s,t,r,o).data,width:t,height:r,colorSpace:o}}function $(t,r,e,n){const o=Rt(n);return{data:Ot(t,r,e,o).data,width:r,height:e,colorSpace:o}}var W,Pt=R({"src/loaders/canvas-utils.ts"(){"use strict"}}),lr={};tt(lr,{BrowserPixelLoader:()=>jt});var jt,Dr=R({"src/loaders/browser.ts"(){"use strict";Pt(),jt=class{async load(t,r,e="srgb"){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement)return this.loadFromImage(t,e);if(typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement)return this.loadFromCanvas(t,e);if(typeof ImageData<"u"&&t instanceof ImageData)return{data:t.data,width:t.width,height:t.height,colorSpace:t.colorSpace??"srgb"};if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)return this.loadFromVideo(t,e);if(typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return this.loadFromImageBitmap(t,e);if(typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)return this.loadFromOffscreenCanvas(t,e);throw new Error("Unsupported source type. Expected HTMLImageElement, HTMLCanvasElement, HTMLVideoElement, ImageData, ImageBitmap, or OffscreenCanvas.")}loadFromImage(t,r){if(!t.complete)throw new Error('Image has not finished loading. Wait for the "load" event before calling getColor/getPalette.');if(!t.naturalWidth)throw new Error("Image has no dimensions. It may not have loaded successfully.");return j(t.naturalWidth,t.naturalHeight,r,e=>e.drawImage(t,0,0,t.naturalWidth,t.naturalHeight))}loadFromCanvas(t,r){return $(t.getContext("2d"),t.width,t.height,r)}loadFromVideo(t,r){if(t.readyState<2)throw new Error('Video is not ready. Wait for the "loadeddata" or "canplay" event before calling getColor/getPalette.');const e=t.videoWidth,n=t.videoHeight;if(!e||!n)throw new Error("Video has no dimensions. It may not have loaded successfully.");return j(e,n,r,o=>o.drawImage(t,0,0,e,n))}loadFromOffscreenCanvas(t,r){const e=t.getContext("2d");if(!e)throw new Error("Could not get 2D context from OffscreenCanvas.");return $(e,t.width,t.height,r)}loadFromImageBitmap(t,r){return j(t.width,t.height,r,e=>e.drawImage(t,0,0))}}}}),At,cr=R({"src/worker/worker-script.ts"(){"use strict";At=`
'use strict';

// -------------------------------------------------------------------------
// Inlined MMCQ (Modified Median Cut Quantization)
// -------------------------------------------------------------------------

var SIGBITS = 5;
var RSHIFT = 3;
var MAX_ITER = 1000;
var FRACT_POP = 0.75;
var HISTO_SIZE = 32768;

function colorIndex(r, g, b) {
    return (r << 10) + (g << 5) + b;
}

function getHisto(pixels) {
    var h = new Uint32Array(HISTO_SIZE);
    for (var i = 0; i < pixels.length; i++) {
        var p = pixels[i];
        h[colorIndex(p[0] >> RSHIFT, p[1] >> RSHIFT, p[2] >> RSHIFT)]++;
    }
    return h;
}

function VBox(r1, r2, g1, g2, b1, b2, histo) {
    this.r1 = r1; this.r2 = r2;
    this.g1 = g1; this.g2 = g2;
    this.b1 = b1; this.b2 = b2;
    this.histo = histo;
    this._count = -1;
    this._volume = -1;
    this._avg = null;
}

VBox.prototype.volume = function(force) {
    if (this._volume < 0 || force) {
        this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1);
    }
    return this._volume;
};

VBox.prototype.count = function(force) {
    if (this._count < 0 || force) {
        var n = 0;
        for (var i = this.r1; i <= this.r2; i++)
            for (var j = this.g1; j <= this.g2; j++)
                for (var k = this.b1; k <= this.b2; k++)
                    n += this.histo[colorIndex(i, j, k)] || 0;
        this._count = n;
    }
    return this._count;
};

VBox.prototype.copy = function() {
    return new VBox(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo);
};

VBox.prototype.avg = function(force) {
    if (!this._avg || force) {
        var mult = 1 << RSHIFT;
        if (this.r1 === this.r2 && this.g1 === this.g2 && this.b1 === this.b2) {
            this._avg = [this.r1 << RSHIFT, this.g1 << RSHIFT, this.b1 << RSHIFT];
        } else {
            var ntot = 0, rsum = 0, gsum = 0, bsum = 0;
            for (var i = this.r1; i <= this.r2; i++)
                for (var j = this.g1; j <= this.g2; j++)
                    for (var k = this.b1; k <= this.b2; k++) {
                        var hval = this.histo[colorIndex(i, j, k)] || 0;
                        ntot += hval;
                        rsum += hval * (i + 0.5) * mult;
                        gsum += hval * (j + 0.5) * mult;
                        bsum += hval * (k + 0.5) * mult;
                    }
            this._avg = ntot
                ? [~~(rsum / ntot), ~~(gsum / ntot), ~~(bsum / ntot)]
                : [~~(mult * (this.r1 + this.r2 + 1) / 2), ~~(mult * (this.g1 + this.g2 + 1) / 2), ~~(mult * (this.b1 + this.b2 + 1) / 2)];
        }
    }
    return this._avg;
};

function PQueue(comparator) {
    this.contents = [];
    this.sorted = false;
    this.comparator = comparator;
}

PQueue.prototype.push = function(item) { this.contents.push(item); this.sorted = false; };
PQueue.prototype.pop = function() {
    if (!this.sorted) { this.contents.sort(this.comparator); this.sorted = true; }
    return this.contents.pop();
};
PQueue.prototype.size = function() { return this.contents.length; };

function vboxFromPixels(pixels, histo) {
    var rmin = 1e6, rmax = 0, gmin = 1e6, gmax = 0, bmin = 1e6, bmax = 0;
    for (var i = 0; i < pixels.length; i++) {
        var p = pixels[i];
        var rv = p[0] >> RSHIFT, gv = p[1] >> RSHIFT, bv = p[2] >> RSHIFT;
        if (rv < rmin) rmin = rv; if (rv > rmax) rmax = rv;
        if (gv < gmin) gmin = gv; if (gv > gmax) gmax = gv;
        if (bv < bmin) bmin = bv; if (bv > bmax) bmax = bv;
    }
    return new VBox(rmin, rmax, gmin, gmax, bmin, bmax, histo);
}

function medianCutApply(histo, vbox) {
    if (!vbox.count()) return undefined;
    if (vbox.count() === 1) return [vbox.copy(), null];

    var rw = vbox.r2 - vbox.r1 + 1;
    var gw = vbox.g2 - vbox.g1 + 1;
    var bw = vbox.b2 - vbox.b1 + 1;
    var maxw = Math.max(rw, gw, bw);
    var total = 0;
    var partialsum = [];
    var lookaheadsum = [];
    var i, j, k, sum;

    if (maxw === rw) {
        for (i = vbox.r1; i <= vbox.r2; i++) {
            sum = 0;
            for (j = vbox.g1; j <= vbox.g2; j++)
                for (k = vbox.b1; k <= vbox.b2; k++)
                    sum += histo[colorIndex(i, j, k)] || 0;
            total += sum; partialsum[i] = total;
        }
    } else if (maxw === gw) {
        for (i = vbox.g1; i <= vbox.g2; i++) {
            sum = 0;
            for (j = vbox.r1; j <= vbox.r2; j++)
                for (k = vbox.b1; k <= vbox.b2; k++)
                    sum += histo[colorIndex(j, i, k)] || 0;
            total += sum; partialsum[i] = total;
        }
    } else {
        for (i = vbox.b1; i <= vbox.b2; i++) {
            sum = 0;
            for (j = vbox.r1; j <= vbox.r2; j++)
                for (k = vbox.g1; k <= vbox.g2; k++)
                    sum += histo[colorIndex(j, k, i)] || 0;
            total += sum; partialsum[i] = total;
        }
    }

    partialsum.forEach(function(d, idx) { lookaheadsum[idx] = total - d; });

    function doCut(color) {
        var dim1 = color + '1', dim2 = color + '2';
        for (var i = vbox[dim1]; i <= vbox[dim2]; i++) {
            if (partialsum[i] > total / 2) {
                var vbox1 = vbox.copy(), vbox2 = vbox.copy();
                var left = i - vbox[dim1], right = vbox[dim2] - i;
                var d2 = left <= right
                    ? Math.min(vbox[dim2] - 1, ~~(i + right / 2))
                    : Math.max(vbox[dim1], ~~(i - 1 - left / 2));
                while (!partialsum[d2]) d2++;
                var count2 = lookaheadsum[d2];
                while (!count2 && partialsum[d2 - 1]) count2 = lookaheadsum[--d2];
                vbox1[dim2] = d2;
                vbox2[dim1] = d2 + 1;
                return [vbox1, vbox2];
            }
        }
    }

    if (maxw === rw) return doCut('r');
    if (maxw === gw) return doCut('g');
    return doCut('b');
}

function iterate(pq, target, histo) {
    var ncolors = pq.size(), niters = 0;
    while (niters < MAX_ITER) {
        if (ncolors >= target) return;
        niters++;
        var vbox = pq.pop();
        if (!vbox.count()) { pq.push(vbox); continue; }
        var result = medianCutApply(histo, vbox);
        if (!result || !result[0]) return;
        pq.push(result[0]);
        if (result[1]) { pq.push(result[1]); ncolors++; }
    }
}

function quantize(pixels, maxColors) {
    if (!pixels.length || maxColors < 2 || maxColors > 256) return [];

    var histo = getHisto(pixels);
    var vbox = vboxFromPixels(pixels, histo);
    var pq = new PQueue(function(a, b) { return a.count() - b.count(); });
    pq.push(vbox);
    iterate(pq, FRACT_POP * maxColors, histo);

    var pq2 = new PQueue(function(a, b) { return a.count() * a.volume() - b.count() * b.volume(); });
    while (pq.size()) pq2.push(pq.pop());
    iterate(pq2, maxColors, histo);

    var results = [];
    while (pq2.size()) {
        var box = pq2.pop();
        results.push({ color: box.avg(), population: box.count() });
    }
    return results;
}

// -------------------------------------------------------------------------
// Worker message handler
// -------------------------------------------------------------------------

self.onmessage = function (e) {
    var data = e.data;
    var id = data.id;
    try {
        var palette = quantize(data.pixels, data.maxColors);
        self.postMessage({ id: id, palette: palette });
    } catch (err) {
        self.postMessage({ id: id, error: err.message || 'Unknown worker error' });
    }
};
`}}),hr={};tt(hr,{extractInWorker:()=>gr,isWorkerSupported:()=>Ft,terminateWorker:()=>dr});function Ft(){return typeof Worker<"u"}function fr(){if(M)return M;if(!Ft())throw new Error("Web Workers are not supported in this environment.");return A=URL.createObjectURL(new Blob([At],{type:"application/javascript"})),M=new Worker(A),M.onmessage=t=>{const{id:r,palette:e,error:n}=t.data,o=C.get(r);if(o)if(C.delete(r),n)o.reject(new Error(n));else{const i=e,{nativeGamut:s,outputGamut:a}=o,u=i.reduce((l,h)=>l+h.population,0),c=i.map(({color:l,population:h})=>{const[g,f,d]=s===a?l:rt(l[0],l[1],l[2]);return H(g,f,d,h,u>0?h/u:0,a)});o.resolve(c)}},M.onerror=t=>{for(const[,r]of C)r.reject(new Error(t.message));C.clear()},M}function gr(t,r,e,n="srgb",o="srgb"){return new Promise((i,s)=>{if(e?.aborted){s(e.reason??new DOMException("Aborted","AbortError"));return}const a=Wt++;C.set(a,{resolve:i,reject:s,nativeGamut:n,outputGamut:o});const u=()=>{C.delete(a),s(e.reason??new DOMException("Aborted","AbortError"))};e?.addEventListener("abort",u,{once:!0});try{fr().postMessage({id:a,pixels:t,maxColors:r})}catch(c){C.delete(a),e?.removeEventListener("abort",u),s(c)}})}function dr(){M&&(M.terminate(),M=null),A&&(URL.revokeObjectURL(A),A=null);for(const[,t]of C)t.reject(new Error("Worker terminated"));C.clear()}var M,A,Wt,C,Vr=R({"src/worker/manager.ts"(){"use strict";z(),et(),cr(),M=null,A=null,Wt=0,C=new Map}});nt();nt();z();var X=[{role:"Vibrant",targetL:.65,minL:.4,maxL:.85,targetC:.2,minC:.08},{role:"Muted",targetL:.65,minL:.4,maxL:.85,targetC:.04,minC:0},{role:"DarkVibrant",targetL:.3,minL:0,maxL:.45,targetC:.2,minC:.08},{role:"DarkMuted",targetL:.3,minL:0,maxL:.45,targetC:.04,minC:0},{role:"LightVibrant",targetL:.85,minL:.7,maxL:1,targetC:.2,minC:.08},{role:"LightMuted",targetL:.85,minL:.7,maxL:1,targetC:.04,minC:0}],pr=6,mr=3,br=1;function lt(t,r,e){const{l:n,c:o}=t.oklch();if(n<r.minL||n>r.maxL||o<r.minC)return-1/0;const i=1-Math.abs(n-r.targetL),s=1-Math.min(Math.abs(o-r.targetC)/.2,1),a=e>0?t.population/e:0;return i*pr+s*mr+a*br}var ct=H(255,255,255,0),ht=H(0,0,0,0);function ft(t){return{title:t.isDark?ct:ht,body:t.isDark?ct:ht}}function vr(t){const r=Math.max(...t.map(i=>i.population),1),e=[];for(const i of X){let s=null,a=-1/0;for(const u of t){const c=lt(u,i,r);c>a&&(a=c,s=u)}s&&a>-1/0&&e.push({role:i.role,color:s,score:a})}const n=new Set,o={};e.sort((i,s)=>s.score-i.score);for(const i of e)if(n.has(i.color)){const s=X.find(c=>c.role===i.role);let a=null,u=-1/0;for(const c of t){if(n.has(c))continue;const l=lt(c,s,r);l>u&&(u=l,a=c)}if(a&&u>-1/0){n.add(a);const{title:c,body:l}=ft(a);o[i.role]={color:a,role:i.role,titleTextColor:c,bodyTextColor:l}}else o[i.role]=null}else{n.add(i.color);const{title:s,body:a}=ft(i.color);o[i.role]={color:i.color,role:i.role,titleTextColor:s,bodyTextColor:a}}for(const i of X)i.role in o||(o[i.role]=null);return o}var G=5,k=8-G,xr=1e3,yr=.75,wr=1<<3*G;function F(t,r,e){return(t<<2*G)+(r<<G)+e}var _r=class Nt{constructor(r,e,n,o,i,s,a){this.r1=r,this.r2=e,this.g1=n,this.g2=o,this.b1=i,this.b2=s,this.histo=a}volume(r=!1){return(this._volume===void 0||r)&&(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume}count(r=!1){if(this._count===void 0||r){let e=0;for(let n=this.r1;n<=this.r2;n++)for(let o=this.g1;o<=this.g2;o++)for(let i=this.b1;i<=this.b2;i++)e+=this.histo[F(n,o,i)]||0;this._count=e}return this._count}copy(){return new Nt(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)}avg(r=!1){if(this._avg===void 0||r){const e=1<<k;if(this.r1===this.r2&&this.g1===this.g2&&this.b1===this.b2)this._avg=[this.r1<<k,this.g1<<k,this.b1<<k];else{let n=0,o=0,i=0,s=0;for(let a=this.r1;a<=this.r2;a++)for(let u=this.g1;u<=this.g2;u++)for(let c=this.b1;c<=this.b2;c++){const l=this.histo[F(a,u,c)]||0;n+=l,o+=l*(a+.5)*e,i+=l*(u+.5)*e,s+=l*(c+.5)*e}n?this._avg=[~~(o/n),~~(i/n),~~(s/n)]:this._avg=[~~(e*(this.r1+this.r2+1)/2),~~(e*(this.g1+this.g2+1)/2),~~(e*(this.b1+this.b2+1)/2)]}}return this._avg}},gt=class{constructor(t){this.comparator=t,this.contents=[],this.sorted=!1}sort(){this.contents.sort(this.comparator),this.sorted=!0}push(t){this.contents.push(t),this.sorted=!1}peek(t){return this.sorted||this.sort(),this.contents[t??this.contents.length-1]}pop(){return this.sorted||this.sort(),this.contents.pop()}size(){return this.contents.length}map(t){return this.contents.map(t)}};function Ir(t){const r=new Uint32Array(wr);for(const e of t){const n=e[0]>>k,o=e[1]>>k,i=e[2]>>k;r[F(n,o,i)]++}return r}function Mr(t,r){let e=1e6,n=0,o=1e6,i=0,s=1e6,a=0;for(const u of t){const c=u[0]>>k,l=u[1]>>k,h=u[2]>>k;c<e?e=c:c>n&&(n=c),l<o?o=l:l>i&&(i=l),h<s?s=h:h>a&&(a=h)}return new _r(e,n,o,i,s,a,r)}function Cr(t,r){if(!r.count())return;if(r.count()===1)return[r.copy(),null];const e=r.r2-r.r1+1,n=r.g2-r.g1+1,o=r.b2-r.b1+1,i=Math.max(e,n,o);let s=0;const a=[],u=[];if(i===e)for(let l=r.r1;l<=r.r2;l++){let h=0;for(let g=r.g1;g<=r.g2;g++)for(let f=r.b1;f<=r.b2;f++)h+=t[F(l,g,f)]||0;s+=h,a[l]=s}else if(i===n)for(let l=r.g1;l<=r.g2;l++){let h=0;for(let g=r.r1;g<=r.r2;g++)for(let f=r.b1;f<=r.b2;f++)h+=t[F(g,l,f)]||0;s+=h,a[l]=s}else for(let l=r.b1;l<=r.b2;l++){let h=0;for(let g=r.r1;g<=r.r2;g++)for(let f=r.g1;f<=r.g2;f++)h+=t[F(g,f,l)]||0;s+=h,a[l]=s}a.forEach((l,h)=>{u[h]=s-l});function c(l){const h=l+"1",g=l+"2";for(let f=r[h];f<=r[g];f++)if(a[f]>s/2){const d=r.copy(),p=r.copy(),O=f-r[h],S=r[g]-f;let I;for(O<=S?I=Math.min(r[g]-1,~~(f+S/2)):I=Math.max(r[h],~~(f-1-O/2));!a[I];)I++;let m=u[I];for(;!m&&a[I-1];)m=u[--I];return d[g]=I,p[h]=d[g]+1,[d,p]}}return c(i===e?"r":i===n?"g":"b")}function dt(t,r,e){let n=t.size(),o=0;for(;o<xr;){if(n>=r)return;o++;const i=t.pop();if(!i.count()){t.push(i);continue}const s=Cr(e,i);if(!s||!s[0])return;t.push(s[0]),s[1]&&(t.push(s[1]),n++)}}function kr(t,r){if(!t.length||r<2||r>256)return[];const e=Ir(t),n=Mr(t,e),o=new gt((a,u)=>a.count()-u.count());o.push(n),dt(o,yr*r,e);const i=new gt((a,u)=>a.count()*a.volume()-u.count()*u.volume());for(;o.size();)i.push(o.pop());dt(i,r,e);const s=[];for(;i.size();){const a=i.pop();s.push({color:a.avg(),population:a.count()})}return s}var Tr=class{async init(){}quantize(t,r){return kr(t,r)}};nt();Pt();var Sr=new Tr;function Lr(t,r){const e=qt(t,{colorCount:5,...r});return e?e[0]:null}function qt(t,r){const e=St(r??{}),n=r?.quantizer??Sr,o=Hr(t,e.gamut);return Ht(o.data,o.width,o.height,e,n,o.colorSpace??"srgb")}function Er(t,r){return vr(qt(t,{colorCount:16,...r})??[])}function Hr(t,r){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement)return Rr(t,r);if(typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement)return $(t.getContext("2d"),t.width,t.height,r);if(typeof ImageData<"u"&&t instanceof ImageData)return{data:t.data,width:t.width,height:t.height,colorSpace:t.colorSpace??"srgb"};if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)return Or(t,r);if(typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return j(t.width,t.height,r,e=>e.drawImage(t,0,0));if(typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas){const e=t.getContext("2d");if(!e)throw new Error("Could not get 2D context from OffscreenCanvas.");return $(e,t.width,t.height,r)}throw new Error("Unsupported source type. Expected HTMLImageElement, HTMLCanvasElement, HTMLVideoElement, ImageData, ImageBitmap, or OffscreenCanvas.")}function Rr(t,r){if(!t.complete)throw new Error('Image has not finished loading. Wait for the "load" event before calling getColorSync/getPaletteSync.');if(!t.naturalWidth)throw new Error("Image has no dimensions. It may not have loaded successfully.");return j(t.naturalWidth,t.naturalHeight,r,e=>e.drawImage(t,0,0,t.naturalWidth,t.naturalHeight))}function Or(t,r){if(t.readyState<2)throw new Error('Video is not ready. Wait for the "loadeddata" or "canplay" event before calling getColorSync/getPaletteSync.');const e=t.videoWidth,n=t.videoHeight;if(!e||!n)throw new Error("Video has no dimensions. It may not have loaded successfully.");return j(e,n,r,o=>o.drawImage(t,0,0,e,n))}z();var Pr={grad:.9,turn:360,rad:360/(2*Math.PI)},T=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},b=function(t,r,e){return r===void 0&&(r=0),e===void 0&&(e=Math.pow(10,r)),Math.round(e*t)/e+0},y=function(t,r,e){return r===void 0&&(r=0),e===void 0&&(e=1),t>e?e:t>r?t:r},Dt=function(t){return(t=isFinite(t)?t%360:0)>0?t:t+360},pt=function(t){return{r:y(t.r,0,255),g:y(t.g,0,255),b:y(t.b,0,255),a:y(t.a)}},Z=function(t){return{r:b(t.r),g:b(t.g),b:b(t.b),a:b(t.a,3)}},jr=/^#([0-9a-f]{3,8})$/i,D=function(t){var r=t.toString(16);return r.length<2?"0"+r:r},Vt=function(t){var r=t.r,e=t.g,n=t.b,o=t.a,i=Math.max(r,e,n),s=i-Math.min(r,e,n),a=s?i===r?(e-n)/s:i===e?2+(n-r)/s:4+(r-e)/s:0;return{h:60*(a<0?a+6:a),s:i?s/i*100:0,v:i/255*100,a:o}},Bt=function(t){var r=t.h,e=t.s,n=t.v,o=t.a;r=r/360*6,e/=100,n/=100;var i=Math.floor(r),s=n*(1-e),a=n*(1-(r-i)*e),u=n*(1-(1-r+i)*e),c=i%6;return{r:255*[n,a,s,s,u,n][c],g:255*[u,n,n,a,s,s][c],b:255*[s,s,u,n,n,a][c],a:o}},mt=function(t){return{h:Dt(t.h),s:y(t.s,0,100),l:y(t.l,0,100),a:y(t.a)}},bt=function(t){return{h:b(t.h),s:b(t.s),l:b(t.l),a:b(t.a,3)}},vt=function(t){return Bt((e=(r=t).s,{h:r.h,s:(e*=((n=r.l)<50?n:100-n)/100)>0?2*e/(n+e)*100:0,v:n+e,a:r.a}));var r,e,n},N=function(t){return{h:(r=Vt(t)).h,s:(o=(200-(e=r.s))*(n=r.v)/100)>0&&o<200?e*n/100/(o<=100?o:200-o)*100:0,l:o/2,a:r.a};var r,e,n,o},Ar=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Fr=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Wr=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Nr=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,xt={string:[[function(t){var r=jr.exec(t);return r?(t=r[1]).length<=4?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?b(parseInt(t[3]+t[3],16)/255,2):1}:t.length===6||t.length===8?{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:t.length===8?b(parseInt(t.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(t){var r=Wr.exec(t)||Nr.exec(t);return r?r[2]!==r[4]||r[4]!==r[6]?null:pt({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:r[7]===void 0?1:Number(r[7])/(r[8]?100:1)}):null},"rgb"],[function(t){var r=Ar.exec(t)||Fr.exec(t);if(!r)return null;var e,n;return vt(mt({h:(e=r[1],n=r[2],n===void 0&&(n="deg"),Number(e)*(Pr[n]||1)),s:Number(r[3]),l:Number(r[4]),a:r[5]===void 0?1:Number(r[5])/(r[6]?100:1)}))},"hsl"]],object:[[function(t){var r=t.r,e=t.g,n=t.b,o=t.a,i=o===void 0?1:o;return T(r)&&T(e)&&T(n)?pt({r:Number(r),g:Number(e),b:Number(n),a:Number(i)}):null},"rgb"],[function(t){var r=t.h,e=t.s,n=t.l,o=t.a,i=o===void 0?1:o;return!T(r)||!T(e)||!T(n)?null:vt(mt({h:Number(r),s:Number(e),l:Number(n),a:Number(i)}))},"hsl"],[function(t){var r=t.h,e=t.s,n=t.v,o=t.a,i=o===void 0?1:o;return!T(r)||!T(e)||!T(n)?null:Bt((function(s){return{h:Dt(s.h),s:y(s.s,0,100),v:y(s.v,0,100),a:y(s.a)}})({h:Number(r),s:Number(e),v:Number(n),a:Number(i)}))},"hsv"]]},yt=function(t,r){for(var e=0;e<r.length;e++){var n=r[e][0](t);if(n)return[n,r[e][1]]}return[null,void 0]},qr=function(t){return typeof t=="string"?yt(t.trim(),xt.string):typeof t=="object"&&t!==null?yt(t,xt.object):[null,void 0]};var Y=function(t,r){var e=N(t);return{h:e.h,s:y(e.s+100*r,0,100),l:e.l,a:e.a}},J=function(t){return(299*t.r+587*t.g+114*t.b)/1e3/255},wt=function(t,r){var e=N(t);return{h:e.h,s:e.s,l:y(e.l+100*r,0,100),a:e.a}},_t=(function(){function t(r){this.parsed=qr(r)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return t.prototype.isValid=function(){return this.parsed!==null},t.prototype.brightness=function(){return b(J(this.rgba),2)},t.prototype.isDark=function(){return J(this.rgba)<.5},t.prototype.isLight=function(){return J(this.rgba)>=.5},t.prototype.toHex=function(){return r=Z(this.rgba),e=r.r,n=r.g,o=r.b,s=(i=r.a)<1?D(b(255*i)):"","#"+D(e)+D(n)+D(o)+s;var r,e,n,o,i,s},t.prototype.toRgb=function(){return Z(this.rgba)},t.prototype.toRgbString=function(){return r=Z(this.rgba),e=r.r,n=r.g,o=r.b,(i=r.a)<1?"rgba("+e+", "+n+", "+o+", "+i+")":"rgb("+e+", "+n+", "+o+")";var r,e,n,o,i},t.prototype.toHsl=function(){return bt(N(this.rgba))},t.prototype.toHslString=function(){return r=bt(N(this.rgba)),e=r.h,n=r.s,o=r.l,(i=r.a)<1?"hsla("+e+", "+n+"%, "+o+"%, "+i+")":"hsl("+e+", "+n+"%, "+o+"%)";var r,e,n,o,i},t.prototype.toHsv=function(){return r=Vt(this.rgba),{h:b(r.h),s:b(r.s),v:b(r.v),a:b(r.a,3)};var r},t.prototype.invert=function(){return x({r:255-(r=this.rgba).r,g:255-r.g,b:255-r.b,a:r.a});var r},t.prototype.saturate=function(r){return r===void 0&&(r=.1),x(Y(this.rgba,r))},t.prototype.desaturate=function(r){return r===void 0&&(r=.1),x(Y(this.rgba,-r))},t.prototype.grayscale=function(){return x(Y(this.rgba,-1))},t.prototype.lighten=function(r){return r===void 0&&(r=.1),x(wt(this.rgba,r))},t.prototype.darken=function(r){return r===void 0&&(r=.1),x(wt(this.rgba,-r))},t.prototype.rotate=function(r){return r===void 0&&(r=15),this.hue(this.hue()+r)},t.prototype.alpha=function(r){return typeof r=="number"?x({r:(e=this.rgba).r,g:e.g,b:e.b,a:r}):b(this.rgba.a,3);var e},t.prototype.hue=function(r){var e=N(this.rgba);return typeof r=="number"?x({h:r,s:e.s,l:e.l,a:e.a}):b(e.h)},t.prototype.isEqual=function(r){return this.toHex()===x(r).toHex()},t})(),x=function(t){return t instanceof _t?t:new _t(t)};async function Br(t,r){if(!t)return P(r);try{const e=await fetch(t);if(!e.ok)return P(r);const n=await e.blob(),o=URL.createObjectURL(n);return new Promise(i=>{const s=new Image;s.crossOrigin="Anonymous",s.onload=()=>{try{const a=Er(s);URL.revokeObjectURL(o);const u=a.Vibrant?.color||a.LightVibrant?.color||a.Muted?.color||a.DarkVibrant?.color||Lr(s),c=a.DarkVibrant?.color||a.Muted?.color||a.DarkMuted?.color||a.LightMuted?.color||u;if(u){const l=u.rgb(),h=c?c.rgb():l;let g=x(l),f=x(h);g.isDark()&&g.toHsl().l<.35&&(g=g.lighten(.35).saturate(.3)),f.isDark()&&f.toHsl().l<.25&&(f=f.lighten(.3).saturate(.2));const d=g.toRgb(),p=f.toRgb();i({primary:[d.r,d.g,d.b],secondary:[p.r,p.g,p.b],primaryHex:g.toHex(),secondaryHex:f.toHex()})}else i(P(r))}catch{URL.revokeObjectURL(o),i(P(r))}},s.onerror=()=>{URL.revokeObjectURL(o),i(P(r))},s.src=o})}catch{return P(r)}}function P(t){let r=0;for(let u=0;u<t.length;u++)r=t.charCodeAt(u)+((r<<5)-r);const e=Math.abs(r)%360,n=(e+40)%360,o=x({h:e,s:75,l:60}),i=x({h:n,s:70,l:50}),s=o.toRgb(),a=i.toRgb();return{primary:[s.r,s.g,s.b],secondary:[a.r,a.g,a.b],primaryHex:o.toHex(),secondaryHex:i.toHex()}}export{Br as t};
