**1. Apa perbedaan antara static web server dan dynamic web server?**
```
Static web server hanya berupa html css biasa tidak ada perubahan data yang diproses pada server, contohnya website seperti company profile.Sedangkan dynamic web server terdapat pengolahan data, Html yang ditampilkan memiliki data yang dinamis, Dan didalamnya nya terdapat input data processing data. Terdapat application server dan disertai database

```
**2. Jelaskan arsitektur static site dan dynamic site**
```
- Static Site, client side meminta http request kemudian diterima oleh web server dimana terdapat file seperti html css javascript, dan responese yang ditampilkan hanya berupa file file tadi. tidak ada processing data di webserver
- Dynamic site, Client side meminta GET request dan akan masuk ke web server dan selanjutnya masuk ke dalam web application. kemudian didalam web application dilakukan processing data dari database dan akan dibawa ke web server dan dilakukan response sehingga tampilah di dalam browser.
```
**3. Apa saja yang dapat kita buat pada sisi server?**
```
a. Dapat melakukan efisiensi pada storage
b. Dapat Customised user experience
c. Dapat mengkontrol akses ke content
d. Dapat menyimpan informasi session atau state
e. Dapat mengirimkan Notifcation dan berkomunikasi sepert email SMS dan lainnya
f. Dapat melakukan data analisis
```
**4. Mohon jelaskan apa itu RESTful?**
```
REST (Representational State Trasfer) adalah sebuah standar arsitektur komunikasi berbasis web. REST umumnya menggunakan HTTP sebagai protokol komunikasi datanya. Yang dimana berfungsi untuk memudahkan system dalam berkomunikasi satu sama lain. Pada Restful sendiri dikarakterkan dari bagaimana client dan server dipisahkan dan stateless. Pada REST, implementasi antara client dan server dapat dilakukan sendiri sendiri tanpa tau satu sama lain, yang artinya code pada client side dapat diubah kapanpun tanpa mempengaruhi Server side.
```
**5. Apa saja jenis HTTP verbs yang ada (jelaskan fungsinya masing-masing)**
```
a. GET berfungsi untuk mengambil resource semisal by id atau mengambil collection dari resources
b. POST berfungsi untuk membuat resource baru
c. PUT berfungsi untuk mengubah spesifik resource
d. DELETE berfungsi untuk menghapus spesifik resource
```
**6. Apa fungsi dari Response Codes?**
```
Fungsi dari response code adalah untuk memberikan respon kepada client berupa informasi atas requuest yang telah dilakukan, setiap response code memberikan informasi yang berbeda, seperti 200 berarti Ok atau sukses, 201 berarti berhasil create, 404 berarti Not Found, sehingga dengan adanya response code kita jadi tahu apakah request berhasil atau tidak dan sebagainya.
```