/*
jQWidgets v4.5.2 (2017-May)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(a){a.jqx.jqxWidget("jqxDropDownButton","",{}),a.extend(a.jqx._jqxDropDownButton.prototype,{defineInstance:function(){var b={disabled:!1,width:null,height:null,arrowSize:19,enableHover:!0,openDelay:250,closeDelay:300,animationType:"default",enableBrowserBoundsDetection:!1,dropDownHorizontalAlignment:"left",dropDownVerticalAlignment:"bottom",popupZIndex:2e4,dropDownContainer:"default",autoOpen:!1,rtl:!1,initContent:null,dropDownWidth:null,dropDownHeight:null,focusable:!0,template:"default",touchMode:!1,aria:{"aria-disabled":{name:"disabled",type:"boolean"}},events:["open","close","opening","closing"]};return this===a.jqx._jqxDropDownButton.prototype?b:(a.extend(!0,this,b),b)},createInstance:function(b){var c=this;c.width||(c.width=200),c.height||(c.height=25),c.isanimating=!1,c.setupInstance();var d=a("<div style='background-color: transparent; -webkit-appearance: none; outline: none; width:100%; height: 100%; padding: 0px; margin: 0px; border: 0px; position: relative;'><div id='dropDownButtonWrapper' style='outline: none; background-color: transparent; border: none; float: left; width:100%; height: 100%; position: relative;'><div id='dropDownButtonContent' unselectable='on' style='outline: none; background-color: transparent; border: none; float: left; position: relative;'/><div id='dropDownButtonArrow' unselectable='on'  style='background-color: transparent; border: none; float: right; position: relative;'><div unselectable='on'></div></div></div></div>");c.host.attr("tabindex")?(d.attr("tabindex",c.host.attr("tabindex")),c.host.removeAttr("tabindex")):d.attr("tabindex",0),c.focusable||d.removeAttr("tabIndex"),a.jqx.aria(this),c.popupContent=c.host.children(),c.host.attr("role","button"),0==c.popupContent.length?(c.popupContent=a("<div>"+c.host.text()+"</div>"),c.popupContent.css("display","block"),c.element.innerHTML=""):c.popupContent.detach();var e=this;c.addHandler(c.host,"loadContent",function(a){e._arrange()});try{var f="dropDownButtonPopup"+c.element.id,g=a(a.find("#"+f));g.length>0&&g.remove(),a.jqx.aria(this,"aria-haspopup",!0),a.jqx.aria(this,"aria-owns",f);var h=a("<div class='dropDownButton' style='overflow: hidden; left: -1000px; top: -1000px; position: absolute;' id='dropDownButtonPopup"+c.element.id+"'></div>");h.addClass(c.toThemeProperty("jqx-widget-content")),h.addClass(c.toThemeProperty("jqx-dropdownbutton-popup")),h.addClass(c.toThemeProperty("jqx-popup")),h.addClass(c.toThemeProperty("jqx-rc-all")),"element"!=c.dropDownContainer&&h.css("z-index",c.popupZIndex),a.jqx.browser.msie&&h.addClass(c.toThemeProperty("jqx-noshadow")),c.popupContent.appendTo(h),"element"==c.dropDownContainer?h.appendTo(c.host):h.appendTo(document.body),c.container=h,c.container.css("visibility","hidden")}catch(a){}c.touch=a.jqx.mobile.isTouchDevice(),c.dropDownButtonStructure=d,c.host.append(d),c.dropDownButtonWrapper=c.host.find("#dropDownButtonWrapper"),c.firstDiv=c.dropDownButtonWrapper.parent(),c.dropDownButtonArrow=c.host.find("#dropDownButtonArrow"),c.arrow=a(c.dropDownButtonArrow.children()[0]),c.dropDownButtonContent=c.host.find("#dropDownButtonContent"),c.dropDownButtonContent.addClass(c.toThemeProperty("jqx-dropdownlist-content")),c.dropDownButtonWrapper.addClass(c.toThemeProperty("jqx-disableselect")),c.rtl&&c.dropDownButtonContent.addClass(c.toThemeProperty("jqx-rtl"));var i=this;c.host.parents()&&c.addHandler(c.host.parents(),"scroll.dropdownbutton"+c.element.id,function(a){var b=i.isOpened();b&&i.close()}),c.addHandler(c.dropDownButtonWrapper,"selectstart",function(){return!1}),c.dropDownButtonWrapper[0].id="dropDownButtonWrapper"+c.element.id,c.dropDownButtonArrow[0].id="dropDownButtonArrow"+c.element.id,c.dropDownButtonContent[0].id="dropDownButtonContent"+c.element.id;var i=this;c.propertyChangeMap.disabled=function(b,c,d,e){e?(b.host.addClass(i.toThemeProperty("jqx-dropdownlist-state-disabled")),b.host.addClass(i.toThemeProperty("jqx-fill-state-disabled")),b.dropDownButtonContent.addClass(i.toThemeProperty("jqx-dropdownlist-content-disabled"))):(b.host.removeClass(i.toThemeProperty("jqx-dropdownlist-state-disabled")),b.host.removeClass(i.toThemeProperty("jqx-fill-state-disabled")),b.dropDownButtonContent.removeClass(i.toThemeProperty("jqx-dropdownlist-content-disabled"))),a.jqx.aria(b,"aria-disabled",b.disabled)},c.disabled&&(c.host.addClass(c.toThemeProperty("jqx-dropdownlist-state-disabled")),c.host.addClass(c.toThemeProperty("jqx-fill-state-disabled")),c.dropDownButtonContent.addClass(c.toThemeProperty("jqx-dropdownlist-content-disabled")));var j=c.toThemeProperty("jqx-rc-all")+" "+c.toThemeProperty("jqx-fill-state-normal")+" "+c.toThemeProperty("jqx-widget")+" "+c.toThemeProperty("jqx-widget-content")+" "+c.toThemeProperty("jqx-dropdownlist-state-normal");if(c.host.addClass(j),c.arrow.addClass(c.toThemeProperty("jqx-icon-arrow-down")),c.arrow.addClass(c.toThemeProperty("jqx-icon")),c.template&&c.host.addClass(c.toThemeProperty("jqx-"+c.template)),c._setSize(),c.render(),a.jqx.browser.msie&&a.jqx.browser.version<8&&(c.container.css("display","none"),c.host.parents(".jqx-window").length>0)){var k=c.host.parents(".jqx-window").css("z-index");h.css("z-index",k+10),c.container.css("z-index",k+10)}},setupInstance:function(){var b=this,c={setContent:function(a){b.dropDownButtonContent.children().remove(),b.dropDownButtonContent[0].innerHTML="",b.dropDownButtonContent.append(a)},val:function(a){return 0==arguments.length||"object"==typeof a?b.dropDownButtonContent.text():void b.dropDownButtonContent.html(a)},getContent:function(){return b.dropDownButtonContent.children().length>0?b.dropDownButtonContent.children():b.dropDownButtonContent.text()},_setSize:function(){null!=b.width&&b.width.toString().indexOf("px")!=-1?b.host[0].style.width=b.width:void 0==b.width||isNaN(b.width)||(b.host[0].style.width=parseInt(b.width)+"px"),null!=b.height&&b.height.toString().indexOf("px")!=-1?b.host[0].style.height=b.height:void 0==b.height||isNaN(b.height)||(b.host[0].style.height=parseInt(b.height)+"px");var c=!1;null!=b.width&&b.width.toString().indexOf("%")!=-1&&(c=!0,b.host.width(b.width)),null!=b.height&&b.height.toString().indexOf("%")!=-1&&(c=!0,b.host.height(b.height));var d=this;c&&b.refresh(!1),a.jqx.utilities.resize(b.host,function(){d._arrange()})},isOpened:function(){var b=this,c=a.data(document.body,"openedJQXButton"+b.element.id);return null!=c&&c==b.popupContent},focus:function(){try{b.host.focus()}catch(a){}},render:function(){b.removeHandlers();var c=this,d=!1;b.touch||(b.addHandler(b.host,"mouseenter",function(){!c.disabled&&c.enableHover&&(d=!0,c.host.addClass(c.toThemeProperty("jqx-dropdownlist-state-hover")),c.arrow.addClass(c.toThemeProperty("jqx-icon-arrow-down-hover")),c.host.addClass(c.toThemeProperty("jqx-fill-state-hover")))}),b.addHandler(b.host,"mouseleave",function(){!c.disabled&&c.enableHover&&(c.host.removeClass(c.toThemeProperty("jqx-dropdownlist-state-hover")),c.host.removeClass(c.toThemeProperty("jqx-fill-state-hover")),c.arrow.removeClass(c.toThemeProperty("jqx-icon-arrow-down-hover")),d=!1)})),c.autoOpen&&(b.addHandler(b.host,"mouseenter",function(){var a=c.isOpened();!a&&c.autoOpen&&(c.open(),c.host.focus())}),b.addHandler(a(document),"mousemove."+c.element.id,function(a){var b=c.isOpened();if(b&&c.autoOpen){var d=c.host.coord(),e=d.top,f=d.left,g=c.container.coord(),h=g.left,i=g.top;canClose=!0,a.pageY>=e&&a.pageY<=e+c.host.height()&&a.pageX>=f&&a.pageX<f+c.host.width()&&(canClose=!1),a.pageY>=i&&a.pageY<=i+c.container.height()&&a.pageX>=h&&a.pageX<h+c.container.width()&&(canClose=!1),canClose&&c.close()}})),b.addHandler(b.dropDownButtonWrapper,"mousedown",function(a){if(!c.disabled){var b="visible"==c.container.css("visibility");if(!c.isanimating){if(b)return c.close(),!1;c.open(),c.focusable||a.preventDefault&&a.preventDefault()}}}),b.touch&&b.addHandler(a(document),a.jqx.mobile.getTouchEventName("touchstart")+"."+b.element.id,c.closeOpenedDropDown,{me:this,popup:b.container,id:b.element.id}),b.addHandler(a(document),"mousedown."+b.element.id,c.closeOpenedDropDown,{me:this,popup:b.container,id:b.element.id}),b.addHandler(b.host,"keydown",function(a){var b="visible"==c.container.css("visibility");return"none"==c.host.css("display")||("13"==a.keyCode&&(c.isanimating||b&&c.close()),115==a.keyCode?(c.isanimating||(c.isOpened()?c.isOpened()&&c.close():c.open()),!1):(a.altKey&&"block"==c.host.css("display")&&(38==a.keyCode?c.isOpened()&&c.close():40==a.keyCode&&(c.isOpened()||c.open())),void("27"==a.keyCode&&(c.ishiding||(c.close(),void 0!=c.tempSelectedIndex&&c.selectIndex(c.tempSelectedIndex))))))}),b.addHandler(b.firstDiv,"focus",function(){c.host.addClass(c.toThemeProperty("jqx-dropdownlist-state-focus")),c.host.addClass(c.toThemeProperty("jqx-fill-state-focus"))}),b.addHandler(b.firstDiv,"blur",function(){c.host.removeClass(c.toThemeProperty("jqx-dropdownlist-state-focus")),c.host.removeClass(c.toThemeProperty("jqx-fill-state-focus"))})},removeHandlers:function(){var c=this;b.removeHandler(b.dropDownButtonWrapper,"mousedown"),b.removeHandler(b.host,"keydown"),b.removeHandler(b.firstDiv,"focus"),b.removeHandler(b.firstDiv,"blur"),b.removeHandler(b.host,"mouseenter"),b.removeHandler(b.host,"mouseleave"),b.autoOpen&&(b.removeHandler(b.host,"mouseenter"),b.removeHandler(b.host,"mouseleave")),b.removeHandler(a(document),"mousemove."+c.element.id)},_findPos:function(b){for(;b&&("hidden"==b.type||1!=b.nodeType||a.expr.filters.hidden(b));)b=b.nextSibling;var c=a(b).coord(!0);return[c.left,c.top]},testOffset:function(c,d,e){var f=c.outerWidth(),g=c.outerHeight(),h=a(window).width()+a(window).scrollLeft(),i=a(window).height()+a(window).scrollTop();if(d.left+f>h&&f>b.host.width()){var j=b.host.coord().left,k=f-b.host.width();d.left=j-k+2}return d.left<0&&(d.left=parseInt(b.host.coord().left)+"px"),d.top-=Math.min(d.top,d.top+g>i&&i>g?Math.abs(g+e+22):0),d},_getBodyOffset:function(){var b=0,c=0;return"0px"!=a("body").css("border-top-width")&&(b=parseInt(a("body").css("border-top-width")),isNaN(b)&&(b=0)),"0px"!=a("body").css("border-left-width")&&(c=parseInt(a("body").css("border-left-width")),isNaN(c)&&(c=0)),{left:c,top:b}},open:function(){a.jqx.aria(this,"aria-expanded",!0);var b=this,c=this;if((null==b.dropDownWidth||"auto"==b.dropDownWidth)&&null!=b.width&&b.width.indexOf&&b.width.indexOf("%")!=-1){var d=b.host.width();b.container.width(parseInt(d))}c._raiseEvent("2");var e,f=b.popupContent,g=(a(window).scrollTop(),a(window).scrollLeft(),parseInt(b._findPos(b.host[0])[1])+parseInt(b.host.outerHeight())-1+"px"),h=parseInt(Math.round(b.host.coord(!0).left));e=h+"px";var i=a.jqx.mobile.isSafariMobileBrowser()||a.jqx.mobile.isWindowsPhone();b.ishiding=!1,b.tempSelectedIndex=b.selectedIndex,null!=i&&i&&(e=a.jqx.mobile.getLeftPos(b.element),g=a.jqx.mobile.getTopPos(b.element)+parseInt(b.host.outerHeight()),"0px"!=a("body").css("border-top-width")&&(g=parseInt(g)-b._getBodyOffset().top+"px"),"0px"!=a("body").css("border-left-width")&&(e=parseInt(e)-b._getBodyOffset().left+"px")),f.stop(),b.host.addClass(b.toThemeProperty("jqx-dropdownlist-state-selected")),b.host.addClass(b.toThemeProperty("jqx-fill-state-pressed")),b.arrow.addClass(b.toThemeProperty("jqx-icon-arrow-down-selected"));var j=!1;a.jqx.browser.msie&&a.jqx.browser.version<8&&(j=!0),j&&b.container.css("display","block"),b.container.css("left",e),b.container.css("top",g);var k=!1,l=function(){if("right"==b.dropDownHorizontalAlignment||b.rtl){var a=b.container.width(),c=Math.abs(a-b.host.width());a>b.host.width()?b.container.css("left",parseInt(Math.round(h))-c+"px"):b.container.css("left",parseInt(Math.round(h))+c+"px")}};if(l.call(this),"top"==b.dropDownVerticalAlignment){var m=f.height();k=!0,b.container.height(f.outerHeight()),f.addClass(this.toThemeProperty("jqx-popup-up"));var n=parseInt(b.host.outerHeight()),o=parseInt(g)-Math.abs(m+n);b.interval&&clearInterval(b.interval),b.interval=setInterval(function(){if(f.outerHeight()!=b.container.height()){b.container.height(f.outerHeight());var a=parseInt(g)-Math.abs(f.height()+n);b.container.css("top",a)}},50),f.css("top",23),b.container.css("top",o)}if(b.enableBrowserBoundsDetection){var p=b.testOffset(f,{left:parseInt(b.container.css("left")),top:parseInt(g)},parseInt(b.host.outerHeight()));parseInt(b.container.css("top"))!=p.top?(k=!0,b.container.height(f.outerHeight()),f.css("top",23),b.interval&&clearInterval(b.interval),b.interval=setInterval(function(){if(f.outerHeight()!=c.container.height()){var a=c.testOffset(f,{left:parseInt(b.container.css("left")),top:parseInt(g)},parseInt(b.host.outerHeight()));b.container.css("top",a.top),b.container.height(f.outerHeight())}},50)):f.css("top",0),b.container.css("top",p.top),parseInt(b.container.css("left"))!=p.left&&b.container.css("left",p.left)}if("none"==b.animationType)b.container.css("visibility","visible"),a.data(document.body,"openedJQXButtonParent",c),a.data(document.body,"openedJQXButton"+b.element.id,f),f.css("margin-top",0),f.css("opacity",1),b._raiseEvent("0"),l.call(c);else{b.container.css("visibility","visible");var q=f.outerHeight();c.isanimating=!0,"fade"==b.animationType?(f.css("margin-top",0),f.css("opacity",0),f.animate({opacity:1},b.openDelay,function(){a.data(document.body,"openedJQXButtonParent",c),a.data(document.body,"openedJQXButton"+c.element.id,f),c.ishiding=!1,c.isanimating=!1,c._raiseEvent("0")}),l.call(c)):(f.css("opacity",1),k?f.css("margin-top",q):f.css("margin-top",-q),l.call(c),k?f.animate({"margin-top":0},b.openDelay,function(){a.data(document.body,"openedJQXButtonParent",c),a.data(document.body,"openedJQXButton"+c.element.id,f),c.ishiding=!1,c.isanimating=!1,c._raiseEvent("0")}):f.animate({"margin-top":0},b.openDelay,function(){a.data(document.body,"openedJQXButtonParent",c),a.data(document.body,"openedJQXButton"+c.element.id,f),c.ishiding=!1,c.isanimating=!1,c._raiseEvent("0")}))}k?(b.host.addClass(b.toThemeProperty("jqx-rc-t-expanded")),b.container.addClass(b.toThemeProperty("jqx-rc-b-expanded"))):(b.host.addClass(b.toThemeProperty("jqx-rc-b-expanded")),b.container.addClass(b.toThemeProperty("jqx-rc-t-expanded"))),b.focusable&&(b.firstDiv.focus(),setTimeout(function(){c.firstDiv.focus()},10)),b.container.addClass(b.toThemeProperty("jqx-fill-state-focus")),b.host.addClass(c.toThemeProperty("jqx-dropdownlist-state-focus")),b.host.addClass(c.toThemeProperty("jqx-fill-state-focus"))},close:function(){a.jqx.aria(this,"aria-expanded",!1);var b=this,c=b.popupContent,d=b.container,e=this;e._raiseEvent("3");var f=!1;if(a.jqx.browser.msie&&a.jqx.browser.version<8&&(f=!0),b.isOpened()){if(a.data(document.body,"openedJQXButton"+b.element.id,null),"none"==b.animationType)b.container.css("visibility","hidden"),f&&b.container.css("display","none");else if(!e.ishiding){e.isanimating=!0,c.stop();var g=c.outerHeight();c.css("margin-top",0);var h=-g;parseInt(b.container.coord().top)<parseInt(b.host.coord().top)&&(h=g),"fade"==b.animationType?(c.css({opacity:1}),c.animate({opacity:0},b.closeDelay,function(){d.css("visibility","hidden"),e.isanimating=!1,e.ishiding=!1,f&&d.css("display","none")})):c.animate({"margin-top":h},b.closeDelay,function(){d.css("visibility","hidden"),e.isanimating=!1,e.ishiding=!1,f&&d.css("display","none")})}b.ishiding=!0,b.host.removeClass(b.toThemeProperty("jqx-dropdownlist-state-selected")),b.host.removeClass(b.toThemeProperty("jqx-fill-state-pressed")),b.arrow.removeClass(b.toThemeProperty("jqx-icon-arrow-down-selected")),b.host.removeClass(b.toThemeProperty("jqx-rc-b-expanded")),b.container.removeClass(b.toThemeProperty("jqx-rc-t-expanded")),b.host.removeClass(b.toThemeProperty("jqx-rc-t-expanded")),b.container.removeClass(b.toThemeProperty("jqx-rc-b-expanded")),b.container.removeClass(b.toThemeProperty("jqx-fill-state-focus")),b.host.removeClass(b.toThemeProperty("jqx-dropdownlist-state-focus")),b.host.removeClass(b.toThemeProperty("jqx-fill-state-focus")),b._raiseEvent("1")}},closeOpenedDropDown:function(b){var c=b.data.me,d=a(b.target);if(a(b.target).ischildof(b.data.me.host))return!0;if(a(b.target).ischildof(b.data.me.popupContent))return!0;var e=!1;return a.each(d.parents(),function(){if("undefined"!=this.className){if(this.className.indexOf&&this.className.indexOf("dropDownButton")!=-1)return e=!0,!1;if(this.className.indexOf&&this.className.indexOf("jqx-popup")!=-1)return e=!0,!1}}),e||c.close(),!0},refresh:function(){b._arrange()},_arrange:function(){var a=this,b=parseInt(a.host.width()),c=parseInt(a.host.height()),d=(a.arrowSize,a.arrowSize),e=3,f=b-d-2*e;if(f>0&&(a.dropDownButtonContent[0].style.width=f+"px"),a.dropDownButtonContent[0].style.height=parseInt(c)+"px",a.dropDownButtonContent[0].style.left="0px",a.dropDownButtonContent[0].style.top="0px",a.dropDownButtonArrow[0].style.width=parseInt(d)+"px",a.dropDownButtonArrow[0].style.height=parseInt(c)+"px",a.rtl&&(a.dropDownButtonArrow.css("float","left"),a.dropDownButtonContent.css("float","right"),a.dropDownButtonContent.css("left",-e)),null!=a.dropDownWidth)if(a.dropDownWidth.toString().indexOf("%")>=0){var b=parseInt(a.dropDownWidth)*a.host.width()/100;a.container.width(b)}else a.container.width(a.dropDownWidth);null!=a.dropDownHeight&&a.container.height(a.dropDownHeight)},destroy:function(){a.jqx.utilities.resize(this.host,null,!0);var b=this;b.interval&&clearInterval(b.interval),b.removeHandler(b.dropDownButtonWrapper,"selectstart"),b.removeHandler(b.dropDownButtonWrapper,"mousedown"),b.removeHandler(b.host,"keydown"),b.host.removeClass(),b.removeHandler(a(document),"mousedown."+b.element.id,self.closeOpenedDropDown),b.host.remove(),b.container.remove()},_raiseEvent:function(c,d){void 0==d&&(d={owner:null}),2!=c||b.contentInitialized||b.initContent&&(b.initContent(),b.contentInitialized=!0);var e=b.events[c];args=d,args.owner=this;var f=new a.Event(e);f.owner=this,2!=c&&3!=c&&4!=c||(f.args=d);var g=b.host.trigger(f);return g},resize:function(a,c){b.width=a,b.height=c,b._setSize(),b._arrange()},propertiesChangedHandler:function(a,b,c){c.width&&c.height&&2==Object.keys(c).length&&(a._setSize(),a._arrange(),a.close())},propertyChangedHandler:function(c,d,e,f){void 0!=b.isInitialized&&0!=b.isInitialized&&(c.batchUpdate&&c.batchUpdate.width&&c.batchUpdate.height&&2==Object.keys(c.batchUpdate).length||("template"==d&&(c.host.removeClass(c.toThemeProperty("jqx-"+e)),c.host.addClass(c.toThemeProperty("jqx-"+c.template))),"rtl"==d&&(f?(c.dropDownButtonArrow.css("float","left"),c.dropDownButtonContent.css("float","right")):(c.dropDownButtonArrow.css("float","right"),c.dropDownButtonContent.css("float","left"))),"autoOpen"==d&&c.render(),"theme"==d&&null!=f&&a.jqx.utilities.setTheme(e,f,c.host),"width"!=d&&"height"!=d||(c._setSize(),c._arrange())))}};a.extend(!0,this,c)}})}(jqxBaseFramework);

