﻿(function(b){b.dialog.add("section",function(a){a=a.lang.section;return{title:a.title,resizable:b.DIALOG_RESIZE_BOTH,minWidth:250,minHeight:100,contents:[{id:"info",label:a.info,elements:[{id:"css",type:"select",label:a.css,setup:function(a){this.setValue(a.data.css)},commit:function(a){a.setData("css",this.getValue())}}]}]}})})(CKEDITOR);