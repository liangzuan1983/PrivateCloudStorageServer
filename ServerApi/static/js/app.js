define("app",["jquery","lib/jquery.hashchange","util/hash","util/user","util/cookie","util/ajax","api","util/login","util/work","util/file","util/adaptor","util/upload","util/tool"],function(a){var b=a("jquery");a("lib/jquery.hashchange")(b);var c=a("util/hash"),d=a("util/user"),e=a("util/login"),f=a("util/work"),g=a("util/upload");a("util/tool"),b(window).hashchange(function(){var a=c.get();switch(a.type){case"login":d.isLogin()?c.set("work"):e.show();break;case"work":d.isLogin()?(b(".wrapper").show(),b(".userArea span").html(d.username),f.init(a.path)):c.set("login");break;default:c.set("work")}}),b(".jsLogout").on("click",function(){d.logout()}),b(".jsBack").on("click",function(){if(!b(this).hasClass("disable")){var a=c.get().path;a.pop(),c.set("work/"+a.join("/"))}}),b(".upload a").on("click",function(){g.init()}),b("body").on("click",".popup .close",function(){b(this).parents(".popup").remove()}),b(window).hashchange()});