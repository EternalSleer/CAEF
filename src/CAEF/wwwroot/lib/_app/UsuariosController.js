app.controller("UsuariosController",["$scope","$location","$window","$http","ModalService",function(o,e,n,t,r){o.usuarios={},o.error="",o.roles={},o.usuarioAutenticado={},o.obtenerUsuarios=function(){t.get("/Usuarios/Listar").then(function(e){console.log(e.data),o.usuarios=e.data},function(e){o.error="Error al obtener usuarios: "+e})},o.obtenerRoles=function(){t.get("/CAEF/Roles").then(function(e){o.roles=e.data},function(e){o.error="Error al obtener roles: "+e})},o.editarUsuario=function(e,l){o.error="",r.showModal({templateUrl:"views/editarUsuario.html",controller:"EditarController",inputs:{usuario:e,roles:l}}).then(function(o){o.element.modal(),o.close.then(function(o){e.rol.nombre!=o.nombre&&(console.log(o),e.rolId=o.id,t.post("/Usuarios/Editar",e).then(function(o){r.showModal({templateUrl:"views/mensajeGenerico.html",controller:"MensajeController",inputs:{mensaje:o.data}}).then(function(o){o.element.modal(),o.close.then(function(){n.location="/Usuarios"})})},function(o){r.showModal({templateUrl:"views/mensajeGenerico.html",controller:"MensajeController",inputs:{mensaje:o.data}}).then(function(o){o.element.modal(),o.close.then(function(){n.location="/Usuarios"})})}))})})},o.borrarUsuario=function(e){o.error="",console.log("Quieres borrar usuario:"+e.correo),r.showModal({templateUrl:"views/borrarUsuario.html",controller:"BorrarController"}).then(function(o){o.element.modal(),o.close.then(function(o){o&&t.post("/Usuarios/Borrar",e).then(function(o){r.showModal({templateUrl:"views/mensajeGenerico.html",controller:"MensajeController",inputs:{mensaje:o.data}}).then(function(o){o.element.modal(),o.close.then(function(){n.location="/Usuarios"})})},function(o){r.showModal({templateUrl:"views/mensajeGenerico.html",controller:"MensajeController",inputs:{mensaje:o.data}}).then(function(o){o.element.modal(),o.close.then(function(){n.location="/Usuarios"})})})})})},o.obtenerUsuarioAutenticado=function(){t.get("/UsuarioActual").then(function(e){console.log(e.data),o.usuarioAutenticado=e.data,console.log(o.usuarioAutenticado)})},o.obtenerUsuarios(),o.obtenerRoles(),o.obtenerUsuarioAutenticado()}]),app.controller("AgregarController",["$scope","$http","$window","$location","ModalService",function(o,e,n,t,r){o.roles={},o.usuario={},o.roles={},o.agregar=function(){console.log(o.usuario),e.post("/Usuarios/Agregar",o.usuario).then(function(o){console.log("Success"),console.log(o),r.showModal({templateUrl:"views/mensajeGenerico.html",controller:"MensajeController",inputs:{mensaje:o.data}}).then(function(o){o.element.modal(),o.close.then(function(){n.location="/Usuarios"})})},function(o){console.log(o),r.showModal({templateUrl:"views/mensajeGenerico.html",controller:"MensajeController",inputs:{mensaje:o.data}}).then(function(o){o.element.modal(),o.close.then(function(){})})})},o.obtenerRoles=function(){e.get("/CAEF/Roles").then(function(e){o.roles=e.data},function(e){o.error="Error al obtener roles: "+e})},o.obtenerRoles()}]),app.controller("BorrarController",["$scope","close",function(o,e){o.close=function(o){e(o,500)}}]),app.controller("EditarController",["$scope","$element","usuario","roles","close",function(o,e,n,t,r){console.log(n),o.usuario=n,o.rolActual=n.rol,o.listaRoles=t,o.rolSeleccionado=o.rolActual,o.accept=function(){console.log("Escogiste rol: "+o.rolSeleccionado.nombre),r(o.rolSeleccionado,500)},o.cancel=function(){console.log("Escogiste rol: "+o.rolSeleccionado.nombre),r(o.rolActual,500)}}]);