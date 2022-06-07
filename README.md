# cloneflix-backend

Hola, el backend esta hecho con nodejs, express, bodyparser, y la data esta almacenada en la base de datos, 
todos los endpoints estan protegidos con un token que se genera al iniciar sesion y dependiendo de si el usuario es admin o no, tendra acceso
a ciertos endpoints como crear usuarios, categorias, y contenidos,
en el tema de los contenidos, pense en guardar la direccion de el video y la imagen del thumbnail en el servidor en lugar de convertir
un video en una cadena de bytes y subirla al servidor mysql como blob pero opte por guardar la direccion.

La base de datos es mysql.
