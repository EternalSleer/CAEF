app.controller("MenuController",["$scope","$http","$location",function(t,o,u){t.usuarioAutenticado={},t.urlActual="/"+decodeURIComponent(u.absUrl().split("/")[3]),console.log(t.urlActual),t.obtenerUsuarioAutenticado=function(){o.get("/UsuarioActual").then(function(o){t.usuarioAutenticado=o.data})},t.isActive=function(o){return o===t.urlActual},t.obtenerUsuarioAutenticado()}]);