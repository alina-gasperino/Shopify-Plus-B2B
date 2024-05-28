
                if (!window.beaePageJS) {
                    window.beaePageJS = [];
                }
                let jsHandle_t6p6p03qm7 = () => {
                    
                        if (document.querySelector('.beae-try0dmbv:not([data-beae-bind])')) {
                            (function() {if(!this.isLive)return;let i=window.innerWidth,_=()=>{this.$el&&this.$el.querySelector(".beae-section-background-video")&&typeof handleVideoBg<"u"?(handleVideoBg.bind(this)(),window.addEventListener("resize",()=>{window.innerWidth!=i&&(i=window.innerWidth,handleVideoBg.bind(this)())})):setTimeout(()=>_(),500)};_()}).call({
                                $el: document.querySelector('.beae-try0dmbv:not([data-beae-bind])'),
                                
                                id: 'beae-try0dmbv',
                                isLive: true
                            });
                            document.querySelector('.beae-try0dmbv:not([data-beae-bind])').setAttribute('data-beae-bind', true);
                        }
                
                        if (document.querySelector('.beae-sx3trwlg:not([data-beae-bind])')) {
                            (function() {if(this.$el){let e=function(){if(!s)return;let o={};if(n.forEach((r,l)=>{let c=!1,d=l==n.length-1;if(l==0)c=window.matchMedia(`only screen and(min-width:${r.min+1}px)`);else{let m=`only screen and(max-width:${r.width}px)${d?"":`and(min-width:${r.min+1}px)`}`;c=window.matchMedia(m)}c&&c.matches&&(o=r)}),Object.keys(o).length){let r=t.querySelector("[data-beae-popup]"),l={},c=this.settings_image.image;if(!r)return;this.settings_image.link==="lightbox"?(this.settings_image.lightbox==="yes"&&(l["data-beae-popup"]="beae-"+Math.random().toString(36).substr(2,8),o.name=="desktop"?l["data-beae-popup-src"]=c.value:l["data-beae-popup-src"]=c[`value__${o.name}`]),o.name=="desktop"?l.href=c.value:l.href=c[`value__${o.name}`]):link==="custom"&&this.settings_image.customLink&&this.settings_image.customLink.href&&Object.assign(l,this.settings_image.customLink),Object.keys(l).length&&Object.keys(l).forEach(d=>{l[d]&&r.setAttribute(d,l[d])})}},t=this.$el,a=t.querySelector(".beae-container-image[data-screens]"),n=[],s="";a&&(s=a.getAttribute("data-screens"),s&&(n=JSON.parse(s))),this.isLive&&this.settings_image&&this.settings_image.link!="none"&&(e.bind(this),window.addEventListener("resize",e.bind(this))),this.settings_image&&this.settings_image.link==="lightbox"&&this.settings_image.lightbox==="yes"&&window.beaejQuery(t).find("[data-beae-popup]").beaePopup({type:"image"})}}).call({
                                $el: document.querySelector('.beae-sx3trwlg:not([data-beae-bind])'),
                                settings_image: {"image":{"value":"/images/placeholder.png","id":"icpJlbvM","audit":{"type":"image","src":"/images/placeholder.png","elmid":"beae-sx3trwlg","size":13917,"width":1200,"height":800}},"link":"none","lightbox":"no"},
                                id: 'beae-sx3trwlg',
                                isLive: true
                            });
                            document.querySelector('.beae-sx3trwlg:not([data-beae-bind])').setAttribute('data-beae-bind', true);
                        }
                
                }
                if (window.beaejQuery) {
                    jsHandle_t6p6p03qm7()
                } else {
                    window.beaePageJS.push(jsHandle_t6p6p03qm7)
                }
            
            if(window.location.search.indexOf("beae-token=") < 0)
            {
                document.querySelector("#beae-builder").innerHTML = "<h3>This template for preview purposes only</h3>";
                document.querySelector("body").style.opacity= "0.7";
            }
        