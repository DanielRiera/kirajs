/****
 * KiraJS
 * @author Daniel Riera <danielriera.p@gmail.com>
 * @version 0.0.1
 * 
 */
(function(){
    
    function init(selector) {
        if (typeof selector == 'string'){
            if (apiJS.objs[selector]){
                apiJS.objs[selector].obj.get(selector);
                return apiJS.objs[selector]['obj'];
            }else {
            
                apiJS.objs[selector]={};
                apiJS.objs[selector]['obj'] = new classKira(selector);
                apiJS.objs[selector]['selector'] = selector;
                apiJS.objs[selector]['animate'] = {};
                apiJS.objs[selector]['events'] = {};
                
                return apiJS.objs[selector]['obj'];
            }
        }
    }

    var classKira = function(selector) {
            this.objs = new Array();
            this.eventsList = new Array();
            if (selector){
                this.selector = document.querySelectorAll(selector);
            }
            this.detectnavigator = function (){    
                if (navigator.userAgent.indexOf('OmniWeb')!=-1) this.navign=0;
                else if (navigator.userAgent.indexOf('Opera')!=-1) this.navign=4;
                else if (navigator.userAgent.indexOf('Safari')!=-1) this.navign=3;
                else if (navigator.userAgent.indexOf('Firefox')!=-1) this.navign=2;
                else if (navigator.userAgent.indexOf('MSIE')!=-1) this.navign=1;
                if (this.navign==null)this.navign=1;            
            }
            /*LOGIC*/
            this.get = function(selector) {
                return document.querySelectorAll(selector);
            }
            this.on = function(type, callback){
                //Warn multievent listener
                if(this.eventsList.indexOf(this.selector) != -1)
                    console.warn("KiraJS - The element has a event");
    
                this.eventsList.push(this.selector);
                //console.log(this.selector);
                if(this.selector.length > 1) {
                    for(var i=0;i<this.selector.length;i++) {
                        this.selector[i].addEventListener(type,callback, false);
                    }
                    return;
                }

                this.selector[0].addEventListener(type,callback, false);
            }
            this.css = function(key, value){
                if(value) {
                    this.selector.style[key] = value;
                    return;
                }
                return this.selector.style[key];
            }
            this.attr = function(key, value){
                if(value) {
                    this.selector.setAttribute(key, value);
                    return;
                }
                return this.selector.getAttribute(key);
            }
            this.text = function(value){
                if(value) {
                    this.selector.innerText = value;
                    return;
                }
                return this.selector.innerText;
            }
            this.click = function(callback) {
                if(!callback) {
                    this.selector.click();
                    return;
                }
                callback(this.selector);
            }
            this.eq = function(i) {
                
            }


            /* EXPORT*/
            this.detectnavigator();

            
          
    }
    apiJS = new classKira();
    apiJS.objs = {};

    window.$$ = init;
}());

/**
 * on = function(type, element, callback){
                var el = document.querySelector(element);
    
                //Warn multievent listener
                if(eventsList.indexOf(el) != -1)
                    console.warn("KiraJS - The element has a event");
    
                eventsList.push(el);
                el.addEventListener(type,callback, false);
            }
 */