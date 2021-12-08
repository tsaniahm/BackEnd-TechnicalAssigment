**1. Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript?**
```
a. Node.js merupakan open-source, kemudian cross-platform, dan juga back-end
javascript runtime environment yang bekerja atau berjalan pada V8 engine
dan mengkeksekusi kode-kode javascript diluar sebuah web browser.
b. Perbedaan Node.js dengan Javascript adalah Javascript merupakan bahasa
pemrogramman sedangkan node.js adalah runtime environment untuk javascript
```
**2. Mohon jelaskan arsitektur dari Node.js?**
```
Berdasarkan bagan arsitektur pada slide pembelajaran,
arsitektur pada node.js terdiri dari aplication dimana terdapat
file file dengan kode kode javascript, kemudian source code tadi
akan dijalankan di runtimenya javascript yaitu V8 Engine, kemudian akan
di bindings ke dalam NODE API dan akan dioperasikan ke dalam library LIBUV milik Node.js.
Dimana didalamnya semua operasi akan di anterikan kedalam EVENT QUEUE dan 
kemudian akan dijalankan, apabila operasi masih lama maka akan diskip
dan mengambil antrian berikutnya.Apabila telah selesai CALLBACK akan dieksekusi.
```
**3. Ape perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?**
```
a. Built-in module merupakan set module bawaan yang dimana dapat digunakan 
tanpa instalasi lebih lanjut dan dapat langsung digunakan

b. Extrenal module merupakan modul dari pihak ketiga yang harus kita instal
terlebih dahulu sebelum digunakan. Biasanya digunakan syntak npm install nama_module 
untuk melakukan instalasi. misal npm install express

c CUstom module merupakan module yang dapat dicustom atau kita buat sendiri
dan dapat dimasukkan kedalam aplikasi kita
```
**4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?**
```
a. Bulit-in Module : http, url, path, util
b. External Module : express dan  lodash
c. Custome Module :
    exports.myDateTime = function () {
    return Date();
    };
```