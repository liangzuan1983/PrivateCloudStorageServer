define("util/upload",["jquery","api","util/user","util/cookie","util/ajax","util/hash","util/file","util/adaptor"],function(a){function b(){this.init=function(){var a=d(i),b={status:0,type:"file"};d("body").append(a),a.find("input[type=file]").on("change",function(){var h=d(this),i=c(h.val()),j="/",k=g.get().path;k&&0!=k.length?j=j+k.join("/")+"/"+i:j+=i,b.name=i,b.path=j;var l=e.upload+"&token="+f.token+"&path="+j;a.find("form").attr("action",l)}),a.find("input[type=submit]").on("click",function(){d(this).parent().addClass("loading")}),a.find("#uploadtg").on("load",function(){a.remove(),h.add(b)})}}function c(a){var b=/[^\\\/]*[\\\/]+/g;return a=a.replace(b,"")}var d=a("jquery"),e=a("api"),f=a("util/user"),g=a("util/hash"),h=a("util/file"),i='<div class="popup"><div class="pop-upload"><form method="post" enctype="multipart/form-data" target="uploadtg"><input type="file" name="file" /><div class="upsubmit"><input type="submit" value="上传" class="load-hidden" /><img class="loading-img" src="images/loading.gif" /></div></form><iframe name="uploadtg" id="uploadtg" width="0" height="0"></iframe><a href="javascript:;" class="close">x</a></div></div>';return new b});