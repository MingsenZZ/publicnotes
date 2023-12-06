import{ad as I,av as o,z as y,aw as $,e as b,ai as l,k as C,az as T,am as d,l as E,aC as A}from"./vidstack-Q8NlvF8c-KYILC4Pl.js";import{R}from"./vidstack-WmYumZve-I5uPWwvq.js";import{E as q,t as w}from"./vidstack-3J-5HTAo-1aWL5dUa.js";import"./app-WqupPmHg.js";const G=["bufferend","bufferstart","durationchange","ended","enterpictureinpicture","error","fullscreenchange","leavepictureinpicture","loaded","pause","play","playbackratechange","qualitychange","seeked","seeking","timeupdate","volumechange","waiting"],c=class c extends q{constructor(){super(...arguments),this.scope=I(),this.M=0,this.N=new o(0,0),this.la=new o(0,0),this.G=null,this.H=null,this.na=null,this.J=y(""),this.ma=y(!1),this.oa=null,this.C=null,this.ta=null,this.pa=new R(this.ua.bind(this)),this.$$PROVIDER_TYPE="VIMEO",this.cookies=!1,this.title=!0,this.byline=!0,this.portrait=!0,this.color="00ADEF"}get A(){return this.F.delegate.A}get type(){return"video"}get currentSrc(){return this.C}get videoId(){return this.J()}get hash(){return this.oa}get isPro(){return this.ma()}preconnect(){const t=[this.P(),"https://i.vimeocdn.com","https://f.vimeocdn.com","https://fresnel.vimeocdn.com"];for(const e of t)$(e,"preconnect")}setup(t){this.F=t,super.setup(t),b(this.T.bind(this)),b(this.va.bind(this)),b(this.wa.bind(this)),this.A("provider-setup",this)}destroy(){this.j(),this.I("destroy")}async play(){const{paused:t}=this.F.$state;if(l(t))return this.G||(this.G=w(()=>{if(this.G=null,t())return"Timed out."}),this.I("play")),this.G.promise}async pause(){const{paused:t}=this.F.$state;if(!l(t))return this.H||(this.H=w(()=>{if(this.H=null,!t())return"Timed out."}),this.I("pause")),this.H.promise}setMuted(t){this.I("setMuted",t)}setCurrentTime(t){this.I("seekTo",t)}setVolume(t){this.I("setVolume",t)}setPlaybackRate(t){this.I("setPlaybackRate",t)}async loadSource(t){if(!C(t.src)){this.C=null,this.oa=null,this.J.set("");return}const e=t.src.match(c.S),s=e==null?void 0:e[1],i=e==null?void 0:e[2];this.J.set(s??""),this.oa=i??null,this.C=t}T(){this.j();const t=this.J();if(!t){this.V.set("");return}this.V.set(`${this.P()}/video/${t}`)}va(){const t=this.V(),e=this.J(),s=c.sa,i=s.get(e);if(!e)return;const a=T();if(this.na=a,i){a.resolve(i);return}const n=`https://vimeo.com/api/oembed.json?url=${t}`,r=new AbortController;return window.fetch(n,{mode:"cors",signal:r.signal}).then(h=>h.json()).then(h=>{var v,k;const p=/vimeocdn.com\/video\/(.*)?_/,u=(k=(v=h==null?void 0:h.thumbnail_url)==null?void 0:v.match(p))==null?void 0:k[1],f=u?`https://i.vimeocdn.com/video/${u}_1920x1080.webp`:"",m={title:(h==null?void 0:h.title)??"",duration:(h==null?void 0:h.duration)??0,poster:f,pro:h.account_type!=="basic"};s.set(e,m),a.resolve(m)}).catch(h=>{a.reject(),this.A("error",{message:`Failed to fetch vimeo video info from \`${n}\`.`,code:1})}),()=>{a.reject(),r.abort()}}wa(){const t=this.ma(),{$state:e,qualities:s}=this.F;if(e.canSetPlaybackRate.set(t),s[d.g](!t),t)return E(s,"change",()=>{var a;if(s.auto)return;const i=(a=s.selected)==null?void 0:a.id;i&&this.I("setQuality",i)})}P(){return"https://player.vimeo.com"}ea(){const{$iosControls:t}=this.F,{keyDisabled:e}=this.F.$props,{controls:s,muted:i,playsinline:a}=this.F.$state,n=s()||t();return{title:this.title,byline:this.byline,color:this.color,portrait:this.portrait,controls:n,h:this.hash,keyboard:n&&!e(),transparent:!0,muted:i(),playsinline:a(),dnt:!this.cookies}}ua(){this.I("getCurrentTime")}$(t,e){const{currentTime:s,paused:i,bufferedEnd:a}=this.F.$state;if(s()===t)return;const n=s(),r={currentTime:t,played:this.M>=t?this.N:this.N=new o(0,this.M)};this.A("time-update",r,e),Math.abs(n-t)>1.5&&(this.A("seeking",t,e),!i()&&a()<t&&this.A("waiting",void 0,e))}R(t,e){this.A("seeked",t,e)}Z(t){var s;const e=this.J();(s=this.na)==null||s.promise.then(i=>{if(!i)return;const{title:a,poster:n,duration:r,pro:h}=i;this.pa.Ja(),this.ma.set(h),this.la=new o(0,r),this.A("poster-change",n,t),this.A("title-change",a,t),this.A("duration-change",r,t);const p={buffered:new o(0,0),seekable:this.la,duration:r};this.F.delegate.ga(p,t);const{$iosControls:u}=this.F,{controls:f}=this.F.$state;f()||u()||this.I("_hideOverlay"),this.I("getQualities")}).catch(i=>{e===this.J()&&this.A("error",{message:`Failed to fetch oembed data: ${i}`,code:2})})}xa(t,e,s){switch(t){case"getCurrentTime":this.$(e,s);break;case"setMuted":this.qa(l(this.F.$state.volume),e,s);break;case"getChapters":break;case"getQualities":this.ya(e,s);break}}za(){for(const t of G)this.I("addEventListener",t)}_(t){var e;this.A("pause",void 0,t),(e=this.H)==null||e.resolve(),this.H=null}Aa(t){var e;this.A("play",void 0,t),(e=this.G)==null||e.resolve(),this.G=null}Ba(t){const{paused:e}=this.F.$state;e()||this.A("playing",void 0,t)}Ca(t,e){const s={buffered:new o(0,t),seekable:this.la};this.A("progress",s,e)}Da(t){this.A("waiting",void 0,t)}Ea(t){const{paused:e}=this.F.$state;e()||this.A("playing",void 0,t)}Fa(t){const{paused:e}=this.F.$state;e()&&this.A("play",void 0,t),this.A("waiting",void 0,t)}qa(t,e,s){const i={volume:t,muted:e};this.A("volume-change",i,s)}ya(t,e){this.F.qualities[A.Ka]=t.some(s=>s.id==="auto")?()=>{this.I("setQuality","auto")}:void 0;for(const s of t){if(s.id==="auto")continue;const i=+s.id.slice(0,-1);isNaN(i)||this.F.qualities[d.h]({id:s.id,width:i*(16/9),height:i,codec:"avc1,h.264",bitrate:-1},e)}this.ra(t.find(s=>s.active),e)}ra({id:t}={},e){if(!t)return;const s=t==="auto",i=this.F.qualities.toArray().find(a=>a.id===t);s?(this.F.qualities[A.La](s,e),this.F.qualities[d.Ga](void 0,!0,e)):this.F.qualities[d.Ga](i,!0,e)}Ha(t,e,s){switch(t){case"ready":this.za();break;case"loaded":this.Z(s);break;case"play":this.Aa(s);break;case"playprogress":this.Ba(s);break;case"pause":this._(s);break;case"loadprogress":this.Ca(e.seconds,s);break;case"waiting":this.Fa(s);break;case"bufferstart":this.Da(s);break;case"bufferend":this.Ea(s);break;case"volumechange":this.qa(e.volume,l(this.F.$state.muted),s);break;case"durationchange":this.la=new o(0,e.duration),this.A("duration-change",e.duration,s);break;case"playbackratechange":this.A("rate-change",e.playbackRate,s);break;case"qualitychange":this.ra(e,s);break;case"fullscreenchange":this.A("fullscreen-change",e.fullscreen,s);break;case"enterpictureinpicture":this.A("picture-in-picture-change",!0,s);break;case"leavepictureinpicture":this.A("picture-in-picture-change",!1,s);break;case"ended":this.A("end",void 0,s);break;case"error":this.Ia(e,s);break;case"seeked":this.R(e.seconds,s);break}}Ia(t,e){var s;if(t.method==="play"){(s=this.G)==null||s.reject(t.message);return}}ka(t,e){t.event?this.Ha(t.event,t.data,e):t.method&&this.xa(t.method,t.value,e)}fa(){}I(t,e){return this.Y({method:t,value:e})}j(){this.pa.Ma(),this.M=0,this.N=new o(0,0),this.la=new o(0,0),this.G=null,this.H=null,this.na=null,this.ta=null,this.ma.set(!1)}};c.S=/(?:https:\/\/)?(?:player\.)?vimeo(?:\.com)?\/(?:video\/)?(\d+)(?:\?hash=(.*))?/,c.sa=new Map;let F=c;export{F as VimeoProvider};
