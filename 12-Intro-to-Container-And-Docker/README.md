1. Jelaskan apa yang dimaksud dengan container pada docker !

```
Docker Container merupakan Wadah yang digunakan untuk mengemas serta menjalankan
aplikasi yang mencakup kode, runtime, system tools, dan pengaturan. Container hanya
bisa mengakses resource yang telah ditentukan dalam Docker image.
```
2. Jelaskan apa perbedaan antara konsep container dengan virtual machine !

```
VM(Viritual Machine) sendiri memakan banyak resource dan waktu booting karena virtualisasi dilakukan pada host hardwarenya.
Sedangkan container berkebalikan dengan VM dimana container melakukan viritualisasi pada host operating system (OS) nya.
```

| Viritul Machine     | Container |
|:----:| :----:|
| Viritualisasi di host hardware | Viritualisasi di host Operating System (OS)|
| Memakan banyak waktu dan resource| Lebih cepat dan efisien|
| Performa terbatas pada konfigurasi VM | Performa maksimum tergantung pada hardware fisik |
| Terisolasi penuh pada level hardware sehingga lebih aman | Terisolasi pada level proses |
| Membutuhkan Hypervisor | Tidak Membutuhkan Hypervisor |
| Dapat Mengakses Kernel | Tidak Dapat Mengakses Kernel |

3. Apa yang dimaksud dengan docker file ?
```
Docker file adalah blueprint text document yang dimana berisi semua
perintah yang dapat dipanggil user pada baris perintah untuk membangun
atau membentuk image
```
4. Apa yang dimaksud dengan docker registery ?
```
Docker registery pada dasarnya adalah tempat untuk upload atau download
image dimana docker registery ini merupakan sistem penyimpanan dan
distribusi untuk docker image dan tersedia di berbagai versi tag
```
5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung !

```
Agar dapat menjalankan multiple container, dapat digunakan docker compose. 
Docker compose sendiri adalah tool yang menjalankan vbanyak container pada aplikasi-aplikasi docker.
Dengan compose, digunakan YAML file untuk mengkonfigurasi layanan aplikasi kita,
yang kemudian dengan single command, kita dapat create dan start semua layanan dari configurasi kita.
```