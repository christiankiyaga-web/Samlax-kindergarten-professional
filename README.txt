SAMLAX KINDERGARTEN - APP BUILD KIT
====================================
Inside this kit:
  www/index.html   the school system (the same file you already use)
  desktop/         builds the Windows installer (.exe)
  mobile/          builds the Android app (.apk)
  .github/         lets GitHub build both for you, for free
  .gitignore       keeps generated files out of your repository

OPTION A - BUILD IN THE CLOUD (nothing to install)
1. Make a free account at github.com and create a new repository.
2. Upload everything from this folder into it (Add file > Upload files).
   If the hidden ".github" folder does not upload, choose Add file >
   Create new file, type  .github/workflows/build.yml  as the name and
   paste in the contents of that file.
3. Open the Actions tab > "Build Samlax apps" > Run workflow.
4. After about 10 minutes, open the finished run and download:
     Samlax-Windows  -> the .exe installer and a portable .exe
     Samlax-Android  -> app-debug.apk

OPTION B - BUILD ON YOUR OWN COMPUTER
Windows .exe: install Node.js (nodejs.org), then in the "desktop" folder run
     npm install
     npm run build
  The installer appears in desktop/dist.
Android .apk: needs Node.js, Java 17 and Android Studio. In the "mobile" folder:
     mkdir www
     copy ..\www\index.html www\index.html
     npm install
     npx cap add android
     npx cap sync android
  then open the "android" folder in Android Studio and choose
  Build > Build APK(s).

INSTALLING THE APK
Copy app-debug.apk to the phone, open it and allow "Install unknown apps"
when asked. This APK is for installing directly; it is not for Google Play.

IMPORTANT
- Data is kept inside each app on each device. The .exe, the APK and the
  browser each have their own separate records. Use Backup & Restore to
  move records between them.
- On the Android app, Backup download and Print may not work. Do those
  from the Windows app.
- To use your own app icon, replace desktop/build/icon.png with a square
  PNG of 512x512 pixels.
