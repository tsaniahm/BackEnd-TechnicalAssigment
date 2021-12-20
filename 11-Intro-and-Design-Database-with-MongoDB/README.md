1. Buatlah skema untuk kebutuhan data profile pengguna aplikasi Skiljek dan relasi apakah yang tepat untuk data tersebut? Data yang dibutuhkan adalah:
- Full Name
- Email
- Phone Number

JAWABAN : 

**Relasi -> ONE-TO-ONE**

```
{
    "_id": "ObjectId('AAA')",
    "fullName": "Tsaniah MUnfidah",
    "email": "munfidahtsaniah@gmail.com",
    "phoneNumber": "087737325134"
}
```

2. Buatlah skema untuk kebutuhan data alamat pengguna SkilShop dimana alamat yang dapat didaftarkan maksimal 2 alamat. Jelaskan juga relasi apakah yang tepat untuk data tersebut? Data yang dibutuhkan adalah:
- Full Name
- Phone Number
- Address (Max 2)

JAWABAN : 

**Relasi -> ONE-TO-MANY**

```
{
   "_id": "ObjectId('AAA')",
   "fullName": "Tsaniah MUnfidah",
   "phoneNumber": "087737325134",
   "addresses": [
                {
                  "street": "5th Avenue Manhattan",
                  "city": "New York",
                  "state": "NY",
                  "zip": "12345"
                },
                {
                  "street": "West Hollywood 124",
                  "city": "Los Angeles",
                  "state": "CA",
                  "zip": "12341"
                }
              ]
 }
```

3. Buatlah skema untuk kebutuhan data dari suatu Products yang akan mempunyai banyak varian dari aplikasi SkilShop. Jelasskan juga relasi apakah yang tepat untuk data tersebut? Contoh data yang dibutuhkan adalah:

JAWABAN : 

**Relasi -> ONE-TO-MANY**

```
{
    "_id": "ObjectId('AAA')",
    "productName": "Kaos Polos",
    "brandName": "SkilShirt",
    "variants": ["ObjectId('AAA1')", "ObjectId('AAA2')"]
},
{
    "_id": "ObjectId('AAA1')",
    "nameVariant": "kaos Polos Hitam",
    "color": "Hitam",
    "quantity": 12,
    "price": 99000
},
{
    "_id": "ObjectId('AAA2')",
    "nameVariant": "kaos Polos Navy",
    "color": "Navy",
    "quantity": 10,
    "price": 99000
}
```

4. Buatlah skema untuk kebutuhan data dari suatu aplikasi bioskop bernama SkilFlix. Data yang ingin ditampilkan adalah List Bioskop pada suatu Kota dan Film yang ditayangkan pada Setiap Bioskop tersebut. Jelaskan juga relasi apakah yang tepat untuk data tersebut?

JAWABAN : 

**Relasi -> ONE-TO-MANY**

```
{
    "_id": "ObjectId('AAA1')",
    "cinemaName": "CGF",
    "location": "Pondok Indah Mall",
    "films": [
        {
            "_id": "ObjectId('BBB1')",
            "movieTitle":"Venom 2"
        },
        {
            "_id": "ObjectId('BBB2')",
            "movieTitle": "Spiderman No Way Home"
        }
    ]
},
{
    "_id": "ObjectId('AAA2')",
    "cinemaName": "Cinema31",
    "location": "Mall Kelapa Gading"
    "films": [
        {
            "_id": "ObjectId('BBB1')",
            "movieTitle":"Venom 2"
        },
        {
            "_id": "ObjectId('BBB2')",
            "movieTitle": "Spiderman No Way Home"
        }
    ]
}
```