como usuario de la aplicación			
quiero cargar las imagenes cómo archivos (no con URL)			
para evitar el trabajo de subir las imagenes en algún servidor de imágenes
Utilizando Firebase

Primer paso 
*se debe instalar la libreria de firebase 
*npm install firebase

Segundo paso 
*crear un nuevo proyecto en Firebase
*configurar firebase copiando las configuraciones que te brinda al momento de crear el proyecto en un archivo js

Tercer paso
*Utilziar servicio de Storage de Firebase
*Importar servicio de Storage en la carpera de js con las configuraciones

Cuato paso(Opcional)
*Una vez creado el Storage se pueden crear carpetas a donde va a ir redirigida los archivos

Quinto paso
*Utilizamos getStorage para conectarnos al backend, lo guardamos en una constante y lo exportamos

Sexto paso
*Crear una funcion asyncrona que tenga dos parametros, el primero el archivo a enviar y el segundo la direccion donde va a ir alojado.
*Se crea una referencia donde va a ir alojado el archivo utilizando Ref y tambien se le envian dos parametros, el primero es el storage que ya se habia obtenido y el segundo la direccion y el nombre del archivo que se va a guardar.
*importar para utilizar "uploadBytes" necesita dos parametros, el primero es el storageRef que se habia capturado del ref y el segundo el archivo a subir
*Para obtener la url de el archivo subido importamos "getDownloadURL" que tiene como parametro el storageRef y lo guardamos en una constante
*Por ultimo retornamos la url que vamos a utilizar mas adelante

Septimo paso
*Para implementar el firebase importamos la funcion uploadFile en la pagina a trabajar
*Para subir archivos se utiliza un imput tipo "file" el cual va a tener un onChange que va a ejecutar la funcion asyncrona que va a llevar como parametro el archivo a subir camputado del "evento.target.files" ese resultado se guarda en una constante que se va a guardar un una variable utilizando un useState del resultado
*El resultado obtenido en esa variable es la url de el archivo que se usbio a firebase y puede ser utilizado para enviar una peticion tipo post.