/*
jQWidgets v4.5.2 (2017-May)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(a){a.extend(a.jqx._jqxGrid.prototype,{savestate:function(b){var c=this.getstate();return void 0===b||a.isEmptyObject(b)||(b.indexOf("sort")==-1&&(delete c.sortcolumn,delete c.sortdirection),b.indexOf("pager")==-1&&(delete c.pagenum,delete c.pagesizeoptions,delete c.pagesize),b.indexOf("selection")==-1&&(delete c.selectedcells,delete c.selectedrowindexes,delete c.selectedrowindex),b.indexOf("grouping")==-1&&delete c.groups,b.indexOf("filter")==-1&&delete c.filters,a.each(this.columns.records,function(a){var d=c.columns[this.datafield];b.indexOf("hidden_columns")==-1&&delete d.hidden,b.indexOf("reorder")==-1&&delete d.index,b.indexOf("columns_width")==-1&&delete d.width,b.indexOf("columns_text")==-1&&delete d.text,b.indexOf("alignment")==-1&&(delete d.align,delete d.cellsalign)})),window.localStorage&&(window.localStorage["jqxGrid"+this.element.id]=this._stringify(c)),this._savedstate=c,c},loadstate:function(b,c){var d="";if(void 0!=b&&void 0!=b.width)d=b;else if(window.localStorage){var e=window.localStorage["jqxGrid"+this.element.id];if(e)var d=a.parseJSON(window.localStorage["jqxGrid"+this.element.id])}else if(this._savedstate)var d=this._savedstate;if(null!=d&&""!==d){(this.virtualmode||this.source._source.url&&""!=this.source._source.url)&&this.source.beginUpdate();var f=d;if(void 0!==f.width&&(this.width=f.width),void 0!==f.height&&(this.height=f.height),this.pageable&&(void 0!=f.pagesize&&(this.pagesize=f.pagesize,this.dataview.pagesize=f.pagesize),void 0!=f.pagenum&&(this.dataview.pagenum=f.pagenum),void 0!=f.pagesizeoptions&&(this.pagesizeoptions=f.pagesizeoptions),this.pagesizeoptions)){for(var g=0,h=0;h<this.pagesizeoptions.length;h++)this.pagesize>=this.pagesizeoptions[h]&&(g=h);this.pagershowrowscombo&&this.pagershowrowscombo.jqxDropDownList({selectedIndex:g})}if(this.sortable)if(this._loading&&(this._loading=!1),f.sortdirection){if(f.sortdirection.ascending||f.sortdirection.descending){this.dataview.sortfield=f.sortcolumn;var i=f.sortdirection.ascending?"asc":"desc";this.dataview.sortfielddirection=i,this.source.sortcolumn=f.sortcolumn,this.source.sortdirection=i,this.sortby(f.sortcolumn,i)}}else null==this.dataview.sortfield||"asc"!=this.dataview.sortfielddirection&&"desc"!=this.dataview.sortfielddirection||this.sortby(this.dataview.sortfield,null);this.groupable&&f.groups&&(this.dataview.groups=f.groups,this.groups=f.groups),this.loadingstate=!0,this.virtualsizeinfo&&this._loadselectionandcolumnwidths(f),this.loadingstate=!1,(this.virtualmode||this.source._source.url&&""!=this.source._source.url)&&(1==c?this.source.endUpdate(!1):(this.source.endUpdate(!1),(this.virtualmode||this.source._source.filter||this.source._source.sort)&&this.updatebounddata("state")))}},_loadselectionandcolumnwidths:function(b){this.loadingstate=!0;var c="";if(void 0!=b&&void 0!=b.width)c=b;else if(window.localStorage){if(window.localStorage["jqxGrid"+this.element.id])var c=a.parseJSON(window.localStorage["jqxGrid"+this.element.id])}else if(this._savedstate)var c=this._savedstate;if(null!=c&&""!=c){var d=this._loading;this._loading=!1;var e=c,f=this,g=!1,h=[];h.length=0;if(a.each(this.columns.records,function(a){var b=e.columns[this.datafield];if(void 0!=b){if(this.text!=b.text&&(g=!0),this.hidden!=b.hidden&&(g=!0),void 0!==b.width&&(this.width=b.width,this._width&&(this._width=null),this._percentagewidth&&(this._percentagewidth=null)),void 0!==b.hidden&&(this.hidden=b.hidden),void 0!==b.pinned&&(this.pinned=b.pinned),void 0!==b.groupable&&(this.groupable=b.groupable),void 0!==b.resizable&&(this.resizable=b.resizable),this.draggable=b.draggable,void 0!==b.text&&(this.text=b.text),void 0!==b.align&&(this.align=b.align),void 0!==b.cellsalign&&(this.cellsalign=b.cellsalign),f._columns)for(var c=0;c<f._columns.length;c++)f._columns[c].datafield==this.datafield&&(void 0!==b.hidden&&(f._columns[c].hidden=b.hidden),void 0!==b.width&&(f._columns[c].width=b.width));void 0!==b.index&&(h[this.datafield]=b.index,h.length++)}}),h.length>0){if(this.setcolumnindex){var i=this.rowdetails?1:0;i+=this.groupable?this.groups.length:0;for(var j=new Array,k=0;k<this.columns.records.length;k++)j.push(this.columns.records[k]);for(var l=0,m=new Array,k=0;k<j.length;k++){var n=j[k],o=h[n.datafield];if(this.groupable&&n.grouped)l++;else if(0==k&&this.rowdetails)l++;else if(k!==o||this.groupable||this.rowdetails){var p=l+o;m.push({column:n,key:p})}}m.sort(function(a,b){return a.key<b.key?-1:a.key>b.key?1:0}),m.reverse(),a.each(m,function(a,b){var c=this.key;f.setcolumnindex(this.column.datafield,c,!1)})}this.prerenderrequired=!0,this.groupable&&this._refreshdataview(),this.rendergridcontent(!0),this._updatefilterrowui&&this.filterable&&this.showfilterrow&&this._updatefilterrowui(),this._renderrows(this.virtualsizeinfo)}if(this.filterable&&void 0!==e.filters){this.clearfilters&&(this._loading=!1,this.clearfilters(!1));for(var q="",r=new a.jqx.filter,k=0;k<e.filters.filterscount;k++){var s=e.filters["filtercondition"+k],t=e.filters["filterdatafield"+k],n=this.getcolumn(t);if(t!=q&&(r=new a.jqx.filter),q=t,n&&n.filterable){var u=e.filters["filtervalue"+k],v=e.filters["filteroperator"+k],w=e.filters["filtertype"+k];if("datefilter"==w)var x=r.createfilter(w,u,s,null,n.cellsformat,this.gridlocalization);else var x=r.createfilter(w,u,s);if(r.addfilter(v,x),this.showfilterrow){var y=n._filterwidget,z=n._filterwidget.parent();if(null!=y)switch(n.filtertype){case"number":if(z.find("input").val(u),this.host.jqxDropDownList){var A=r.getoperatorsbyfiltertype("numericfilter");y.find(".filter").jqxDropDownList("selectIndex",A.indexOf(s))}break;case"date":this.host.jqxDateTimeInput?a(z.children()[0]).jqxDateTimeInput("setDate",u):y.val(u);break;case"range":if(this.host.jqxDateTimeInput){var B=e.filters["filtervalue"+(k+1)],w=e.filters["filtertype"+k],x=r.createfilter(w,B,"LESS_THAN_OR_EQUAL");r.addfilter(v,x);var C=new Date(u),D=new Date(B);isNaN(C)&&(C=a.jqx.dataFormat.tryparsedate(u)),isNaN(D)&&(D=a.jqx.dataFormat.tryparsedate(u)),a(z.children()[0]).jqxDateTimeInput("setRange",C,D),k++}else y.val(u);break;case"textbox":case"default":y.val(u),f["_oldWriteText"+y[0].id]=u;break;case"list":if(this.host.jqxDropDownList){var E=a(z.children()[0]).jqxDropDownList("getItems"),o=-1;a.each(E,function(a){if(this.value==u)return o=a,!1}),a(z.children()[0]).jqxDropDownList("selectIndex",o)}else y.val(u);break;case"checkedlist":this.host.jqxDropDownList||y.val(u);break;case"bool":case"boolean":this.host.jqxCheckBox?a(z.children()[0]).jqxCheckBox({checked:u}):y.val(u)}}this.addfilter(t,r)}}e.filters&&e.filters.filterscount>0&&(this.applyfilters(),this.showfilterrow&&a.each(this.columns.records,function(){if("checkedlist"==this.filtertype&&this.filterable&&f.host.jqxDropDownList){var b=this,c=b._filterwidget,d=(c.jqxDropDownList("getItems"),c.jqxDropDownList("listBox"));if(d.checkAll(!1),b.filter){d.uncheckAll(!1);for(var e=b.filter.getfilters(),g=0;g<d.items.length;g++){var h=d.items[g].label;a.each(e,function(){return"NOT_EQUAL"==this.condition||void(h==this.value&&d.checkIndex(g,!1,!1))})}d._updateCheckedItems();var i=d.getCheckedItems().length;d.items.length!=i&&i>0&&d.host.jqxListBox("indeterminateIndex",0,!0,!1)}}})),this.pageable&&void 0!==e.pagenum&&(this.gotopage&&!this.virtualmode?(this.dataview.pagenum=-1,this.gotopage(e.pagenum)):this.gotopage&&this.virtualmode&&this.gotopage(e.pagenum))}if(e.selectedrowindexes&&e.selectedrowindexes&&e.selectedrowindexes.length>0&&(this.selectedrowindexes=e.selectedrowindexes,this.selectedrowindex=e.selectedrowindex,"checkbox"===this.selectionmode&&this._updatecheckboxselection()),e.selectedcells&&this._applycellselection&&a.each(e.selectedcells,function(){f._applycellselection(this.rowindex,this.datafield,!0,!1)}),this.groupable&&void 0!==e.groups)return this._refreshdataview(),this.render(),this._loading=d,void(this.loadingstate=!1);if(g){if(this.prerenderrequired=!0,this.rendergridcontent(!0),this._loading=d,this.loadingstate=!1,this.updating())return!1}else this._loading=d,this._updatecolumnwidths(),this._updatecellwidths(),this.loadingstate=!1;this.loadingstate=!1,this._loading=d,this._renderrows(this.virtualsizeinfo)}this.loadingstate=!1},getstate:function(){var b=this.getdatainformation(),c={};if(c.width=this.width,c.height=this.height,c.pagenum=b.paginginformation.pagenum,c.pagesize=b.paginginformation.pagesize,c.pagesizeoptions=this.pagesizeoptions,c.sortcolumn=b.sortinformation.sortcolumn,c.sortdirection=b.sortinformation.sortdirection,null!=this.selectionmode&&this.getselectedcells)if(this.selectionmode.toString().indexOf("cell")!=-1){var d=this.getselectedcells(),e=new Array;a.each(d,function(){e.push({datafield:this.datafield,rowindex:this.rowindex})}),c.selectedcells=e}else{var f=this.getselectedrowindexes();c.selectedrowindexes=f,c.selectedrowindex=this.selectedrowindex}var g={},h=0;if(this.dataview.filters)for(var i=0;i<this.dataview.filters.length;i++){var j=this.dataview.filters[i].datafield,k=this.dataview.filters[i].filter,l=k.getfilters();g[j+"operator"]=k.operator;for(var m=0;m<l.length;m++){if(l[m].datafield=j,"datefilter"==l[m].type)if(l[m].value&&l[m].value.toLocaleString){var n=this.getcolumn(l[m].datafield);if(n.cellsformat){var o=this.source.formatDate(l[m].value,n.cellsformat,this.gridlocalization);o?g["filtervalue"+h]=o:g["filtervalue"+h]=l[m].value.toLocaleString()}else g["filtervalue"+h]=l[m].value.toLocaleString()}else g["filtervalue"+h]=l[m].value;else g["filtervalue"+h]=l[m].value;g["filtercondition"+h]=l[m].condition,g["filteroperator"+h]=l[m].operator,g["filterdatafield"+h]=j,g["filtertype"+h]=l[m].type,h++}}g.filterscount=h,c.filters=g,c.groups=this.groups,c.columns={};var p=0;return this.columns.records&&a.each(this.columns.records,function(a,b){if(!this.datafield)return!0;var d={};d.width=this.width,d.hidden=this.hidden,d.pinned=this.pinned,d.groupable=this.groupable,d.resizable=this.resizable,d.draggable=this.draggable,d.text=this.text,d.align=this.align,d.cellsalign=this.cellsalign,d.index=p++,c.columns[this.datafield]=d}),c},_stringify:function(a){if(window.JSON&&"function"==typeof window.JSON.stringify){var b=this,c="";try{c=window.JSON.stringify(a)}catch(c){return b._str("",{"":a})}return c}var c=this._str("",{"":a});return c},_quote:function(a){var b=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,c={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return'"'+a.replace(b,function(a){var b=c[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"'},_stringifyArray:function(a){for(var b,c=a.length,d=[],b=0;b<c;b++)d.push(this._str(b,a)||"null");return"["+d.join(",")+"]"},_stringifyObject:function(a){var b,c,d=[],e=this;for(b in a)Object.prototype.hasOwnProperty.call(a,b)&&(c=e._str(b,a),c&&d.push(e._quote(b)+":"+c));return"{"+d.join(",")+"}"},_stringifyReference:function(a){switch(Object.prototype.toString.call(a)){case"[object Array]":return this._stringifyArray(a)}return this._stringifyObject(a)},_stringifyPrimitive:function(a,b){switch(b){case"string":return this._quote(a);case"number":return isFinite(a)?a:"null";case"boolean":return a}return"null"},_str:function(a,b){var c=b[a],d=typeof c;return c&&"object"==typeof c&&"function"==typeof c.toJSON&&(c=c.toJSON(a),d=typeof c),/(number|string|boolean)/.test(d)||!c&&"object"===d?this._stringifyPrimitive(c,d):this._stringifyReference(c)}})}(jqxBaseFramework);

