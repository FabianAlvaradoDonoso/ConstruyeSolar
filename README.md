# ConstruyeSolar
Desarrollo de App Movil para Proyecto Construye Solar

- Ejecutar en Browser (Si no esta instalado Angular/CLI, se pedira instalar)
	```bash
	$ ionic serve
	```
- Opcional, para usar funciones de vistas tanto en browser y/o en App Movil (hay que instalar Lab para usar o aceptar cuando se ejecuta el codigo siguiente)
	```bash
	$ ionic serve --lab --devapp
	```
- Para crear el .apk para Android, se debe tener instalado Android Studio (SDK), Java y Gradle, teniendo todo instalado y poniendo las rutas del SDK y Java en el PATH se debe crear el apk con el siguiente comando:
	```bash
		$ ionic cordova build android
	```
	Creara y guardara el apk en la carpeta: *"platforms/android/app/build/outputs/apk/debug"*
