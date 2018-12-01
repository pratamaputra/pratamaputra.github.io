// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/array dojo/dom-class dojo/dom-construct dojo/dom-style dijit/form/CheckBox dijit/form/NumberTextBox dijit/form/Select dijit/form/TextBox ../generalUtils ./SettingSimpleTable".split(" "),function(h,k,e,p,q,r,t,u,v,w){var d={container:function(a,b,c){var g,f=d._createDiv(a||"");Array.isArray(c)&&0<c.length&&(g=c.length-1,h.forEach(c,function(a,c){e.place(a,f);c<g&&b&&k.add(a,b)}));return f},fieldsetContainer:function(a,b,c,g,f){var l,m=d._createDiv(b||""),n;b=e.create("fieldset",
{"class":"fieldset"},m);a&&e.create("legend",{"class":"fieldsetLegend",innerHTML:a},b);n=d._createDiv(("fieldsetMainContainer "+(c||"")).trim(),b);Array.isArray(f)&&0<f.length&&(l=f.length-1,h.forEach(f,function(a,b){e.place(a,n);b<l&&g&&k.add(a,g)}));return m},addTextButtonDropdownCtl:function(a,b,c){var g,f;a=d._createDiv(("addTextButton-button "+(a||"")).trim());g=d._createDiv("button",a);d._createSpan("button-text",g).innerHTML=b;b=f=e.create("ul",{"class":"addTextButton-menu"},a);h.forEach(c,
function(a){e.create("li",{"class":"addTextButton-item",innerHTML:a},f)});return{div:a,ctl:b}},checkboxCtl:function(a,b){a=d._createDiv(a);b=new q({style:"margin-top: 3px;",checked:b});e.place(b.domNode,a);b.startup();return{div:a,ctl:b}},dropdownCtl:function(a,b,c){a=d._createDiv(a);return{div:a,ctl:d.dropdown(a,b,c)}},dropdown:function(a,b,c){b=new t({options:c,"class":b});e.place(b.domNode,a);b.startup();return b},iconButton:function(a,b){a=d._createDiv(a);p.set(a,"display","inline-block");a.title=
b;return a},numberInputCtl:function(a,b,c){a=d._createDiv(a);b={style:"width: 100%;",required:!0,placeHolder:b};c&&(b.constraints=c);c=new r(b);c.startup();e.place(c.domNode,a);return{div:a,ctl:c}},tableCtl:function(a,b,c){a=d._createDiv(a);b=new w(b);b.placeAt(a);b.startup();Array.isArray(c)&&0<c.length&&b.addRows(c);return{div:a,ctl:b}},text:function(a,b){a=d._createDiv(a||"");a.innerHTML=v.sanitizeNoTags(b||"");return a},textButton:function(a,b,c){a=d._createDiv(("jimu-btn "+(a||"")).trim());a.innerHTML=
b;c&&(a.title=c);return a},textInputCtl:function(a,b){var c;a=d._createDiv(a||"");c={style:"width:100%;"};b&&(c.placeholder=b);b=new u(c);b.startup();e.place(b.domNode,a);return{div:a,ctl:b}},_createSpan:function(a,b){return d._createSpanDiv(!0,a,b)},_createDiv:function(a,b){return d._createSpanDiv(!1,a,b)},_createSpanDiv:function(a,b,c){var d={};b&&(d["class"]=b);a=e.create(a?"span":"div",d);c&&e.place(a,c);return a}};return d});