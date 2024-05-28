
                if (!window.beaePageJS) {
                    window.beaePageJS = [];
                }
                let jsHandle_9v3ygddqyw = () => {
                    
                        if (document.querySelector('.beae-4v2my1e4:not([data-beae-bind])')) {
                            (function() {if(!this.isLive)return;let i=window.innerWidth,_=()=>{this.$el&&this.$el.querySelector(".beae-section-background-video")&&typeof handleVideoBg<"u"?(handleVideoBg.bind(this)(),window.addEventListener("resize",()=>{window.innerWidth!=i&&(i=window.innerWidth,handleVideoBg.bind(this)())})):setTimeout(()=>_(),500)};_()}).call({
                                $el: document.querySelector('.beae-4v2my1e4:not([data-beae-bind])'),
                                
                                id: 'beae-4v2my1e4',
                                isLive: true
                            });
                            document.querySelector('.beae-4v2my1e4:not([data-beae-bind])').setAttribute('data-beae-bind', true);
                        }
                
                        if (document.querySelector('.beae-kgdqhlc1:not([data-beae-bind])')) {
                            (function() {let e=this.$el,t=this.settings_text.type,a=e.querySelector(".beae-mce__text.text-content"),n=this.settings_text.limit?parseInt(this.settings_text.limit):0,s=this.settings_text.view_more_text,o=this.settings_text.content,r="",l=this.settings_text.view_less_text,c=this.settings_text.height;a&&o&&t=="short"&&(r=o.split(" ").filter((m,_)=>_<=n-1).join(" "),r+="...",a.innerHTML=r),setTimeout(()=>{d()},100);function d(){let m=e.querySelector(".beae-element-base-text-view-more");!s||!m||m.addEventListener("click",function(){l&&l.length>0?t=="short"?a.innerHTML.split(" ").length>n?(a.innerHTML=r,m.innerHTML=s):(a.innerHTML=o,m.innerHTML=l):a.style.maxHeight&&a.style.maxHeight!=c?(a.style.maxHeight=c,m.innerHTML=s):(a.style.maxHeight="unset",m.innerHTML=l):(a.innerHTML=o,m.remove())})}}).call({
                                $el: document.querySelector('.beae-kgdqhlc1:not([data-beae-bind])'),
                                settings_text: {"type":"full","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                                id: 'beae-kgdqhlc1',
                                isLive: true
                            });
                            document.querySelector('.beae-kgdqhlc1:not([data-beae-bind])').setAttribute('data-beae-bind', true);
                        }
                
                        if (document.querySelector('.beae-fisf0c5m:not([data-beae-bind])')) {
                            (function() {if(!this.isLive)return;let i=window.innerWidth,_=()=>{this.$el&&this.$el.querySelector(".beae-section-background-video")&&typeof handleVideoBg<"u"?(handleVideoBg.bind(this)(),window.addEventListener("resize",()=>{window.innerWidth!=i&&(i=window.innerWidth,handleVideoBg.bind(this)())})):setTimeout(()=>_(),500)};_()}).call({
                                $el: document.querySelector('.beae-fisf0c5m:not([data-beae-bind])'),
                                
                                id: 'beae-fisf0c5m',
                                isLive: true
                            });
                            document.querySelector('.beae-fisf0c5m:not([data-beae-bind])').setAttribute('data-beae-bind', true);
                        }
                
                }
                if (window.beaejQuery) {
                    jsHandle_9v3ygddqyw()
                } else {
                    window.beaePageJS.push(jsHandle_9v3ygddqyw)
                }
            
            if(window.location.search.indexOf("beae-token=") < 0)
            {
                document.querySelector("#beae-builder").innerHTML = "<h3>This template for preview purposes only</h3>";
                document.querySelector("body").style.opacity= "0.7";
            }
        