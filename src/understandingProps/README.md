# Kesimpulan

props dapat digunakan untuk menyampaikan data dari komponen ke komponen lain dengan syarat komponen tersebut menyediakan props untuk diisi oleh props yang akan mengirim datanya.

## Permasalahan pada props biasa

untuk mengirim data ke suatu komponen yang berada di **dalam** komponen lain (nested component), komponen pengirim harus memberikan data ke komponen teratas terlebih dahulu, baru data dapat disampaikan ke komponen yang ada dituju.

## Perkiraan
render props harusnya bisa menyelesaikan masalah ini dengan sistem: komponen pengirim bisa mengirim data secara langsung ke komponen yang dituju, dimanapun komponen itu berada.