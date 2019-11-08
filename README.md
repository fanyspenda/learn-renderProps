# Kesimpulan percobaan props

props dapat digunakan untuk menyampaikan data dari komponen ke komponen lain dengan syarat komponen tersebut menyediakan props untuk diisi oleh props yang akan mengirim datanya.

## Permasalahan pada props biasa

untuk mengirim data ke suatu komponen yang berada di **dalam** komponen lain (nested component), komponen pengirim harus memberikan data ke komponen teratas terlebih dahulu, baru data dapat disampaikan ke komponen yang ada dituju.

## Perkiraan
render props harusnya bisa menyelesaikan masalah ini dengan sistem: komponen pengirim bisa mengirim data secara langsung ke komponen yang dituju, dimanapun komponen itu berada.

# Render Props

secara singkat, `render props` adalah suatu props berupa fungsi yang digunakan komponen untuk menentukan apa yang harus dirender.

nama default dari fungsi yang dibuat bernama `children`.

## Cara Kerja

misal, komponen 1 membuat `{this.render.[namaFungsi](parameter)}`. Parameter disini bermakna data yang akan dikirimkan ke komponen lain.

ketika kita akan memanggil, misal, komponen 2 dan membutuhkan data dari komponen 1, kita bisa memanggil props dari komponen 1 dengan cara memanggil komponen 1, lalu mengisi props yang sudah dibuat.

karena props yang dibuat merupakan sebuah fungsi, maka kita bisa mereturn komponen 2 di dalam fungsi props komponen 1.

sehingga, kita bisa memberikan data dari komponen 1 ke komponen 2 melalui props dari komponen 1 sebagai fungsi.

untuk mempersingkat dan memperjelas pemahaman sekaligus cara pakai dari render props, perhatikan langkah berikut:

1. buat props berisi fungsi di komponen 1 yang memiliki parameter berupa data yang akan diberikan
2. ketika komponen lain, misal komponen 9 membutuhkan data tersebut, panggil komponen 1. lalu, isi propsnya dengan fungsi yang mereturn komponen 9.
3. pemberian data dari komponen 1 ke komponen 9 dilakukan melalui props dari komponen 9.

> **note:**  
> - nama fungsi default yang diberikan sebagai fungsi `render props` adalah `children`.  
> - ketika menggunakan nama default, maka kita bisa langsung memanggil fungsi tanpa harus menuliskan `children = {}` (silahkan lihat contoh pada folder *understandingProps*).
