// Data tempat nongkrong NONGKIS
const categories = {
    NONGKRONG: 'nongkrong',
    TUGAS: 'tugas', 
    DISKUSI: 'diskusi'
};

const facilities = {
    WIFI: 'Wi-Fi Gratis',
    POWER: 'Colokan Listrik',
    QUIET: 'Suasana Tenang',
    SPACIOUS: 'Luas dan Nyaman',
    PARKING: 'Parkir Luas',
    AFFORDABLE: 'Harga Terjangkau',
    GROUP: 'Cocok untuk Grup',
    INDOOR: 'Area Indoor',
    OUTDOOR: 'Area Outdoor',
    AC: 'AC',
    MEETING: 'Ruang Meeting',
    PRIVATE: 'Area Private',
    FOOD: 'Makanan Enak',
    DRINKS: 'Minuman Variatif',
    MUSIC: 'Live Music',
    GARDEN: 'Taman Outdoor',
    VIEW: 'Pemandangan Bagus',
    ART: 'Dekorasi Artistik'
};

const placesData = [
    {
        id: 1,
        nama_tempat: "Taman Universitas Tadulako",
        alamat: "Jl. Soekarno Hatta No.KM.9, Tondo, Kec. Mantikulore, Kota Palu, Sulawesi Tengah 94148",
        kategori: categories.NONGKRONG,
        jam_buka: "Setiap Hari",
        deskripsi: "Tempat nongkrong paling adem di area kampus Universitas Tadulako. Dikelilingi pepohonan hijau dan suasana tenang, taman ini jadi spot favorit buat ngobrol, nugas bareng, atau sekadar nyantai sore bareng teman.",
        map_url: "https://www.google.com/maps/place/Taman+Gerbang+Untad/@-0.8362639,119.8893799,19z/data=!4m6!3m5!1s0x2d8be95da79bdd19:0x528cc71286d215b6!8m2!3d-0.836327!4d119.8901326!16s%2Fg%2F11g8kw9gv0?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D",
        fasilitas: [facilities.VIEW, facilities.SPACIOUS, facilities.GROUP, facilities.PARKING],
        foto: "images/places/tamanuntad.jpg"
    },
    {
        id: 2,
        nama_tempat: "Kopte Soetta",
        alamat: "Jl. Soekarno Hatta, Tondo, Kec. Mantikulore, Kota Palu, Sulawesi Tengah 94118",
        kategori: categories.TUGAS,
        jam_buka: "07:00 - 22:00",
        deskripsi: "Kopte adalah kafe dengan suasana hangat dan nyaman, cocok buat nongkrong, nugas, atau bersantai sambil menikmati secangkir kopi. Menyajikan berbagai menu minuman dan camilan lezat, tempat ini jadi pilihan pas buat ngisi waktu santai bareng teman atau sendiri.",
        map_url: "https://www.google.com/maps/place/KOPTE+SOETTA+X+GREEN+LAUNDRY/@-0.8446718,119.8909775,20.88z/data=!4m6!3m5!1s0x2d8be9004f947597:0x88074e812e7cfe0d!8m2!3d-0.8446345!4d119.8911005!16s%2Fg%2F11w4gty40v?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D",
        fasilitas: [facilities.WIFI, facilities.AC, facilities.DRINKS, facilities.INDOOR, facilities.ART],
        foto: "images/places/koptesoetta.png"
    },
    {
        id: 3,
        nama_tempat: "Citraland Palu",
        alamat: "Jl. RE Martadinata Jl. Trans Sulawesi, Tondo, Kota Palu, Sulawesi Tengah 94148",
        kategori: categories.NONGKRONG,
        jam_buka: "18:00 - 00:00",
        deskripsi: "Citraland Palu merupakan area modern dengan suasana tenang dan pemandangan yang indah. Tempat ini sering jadi spot favorit buat jalan sore, nongkrong santai, atau hunting foto karena suasananya yang bersih dan tertata rapi.",
        map_url: "https://maps.app.goo.gl/xDJnoYGZYvr3PFBB7",
        fasilitas: [facilities.SPACIOUS, facilities.PARKING, facilities.GROUP, facilities.OUTDOOR, facilities.FOOD,facilities.DRINKS,facilities.VIEW],
        foto: "images/places/citraland.png"
    },
    {
        id: 4,
        nama_tempat: "Sin Cafe Soetta",
        alamat: "Jl. Flora No. 89, Taman Kota",
        kategori: categories.DISKUSI,
        jam_buka: "09:00 - 22:00",
        deskripsi: "Sin cafe dengan taman outdoor yang asri dan sejuk, cocok untuk nongkrong di alam terbuka sambil menikmati hijauannya.",
        map_url: "https://maps.app.goo.gl/DxbeGCza4cq7CZM77",
        fasilitas: [facilities.POWER, facilities.OUTDOOR, facilities.GARDEN, facilities.GROUP,],
        foto: "images/places/sincafe.png"
    },
    {
        id: 5,
        nama_tempat: "Perpustakaan Universitas Tadulako",
        alamat: "UNIVERSITAS TADULAKO, Jl. Soekarno Hatta, Tondo, Kec. Mantikulore, Kota Palu, Sulawesi Tengah 94148",
        kategori: categories.TUGAS,
        jam_buka: "08:00 - 16:00",
        deskripsi: "Perpustakaan Universitas Tadulako menawarkan suasana tenang dan nyaman untuk membaca maupun belajar. Dengan koleksi buku yang lengkap dan fasilitas modern, tempat ini jadi pilihan tepat buat menambah wawasan atau sekadar menikmati waktu produktif di lingkungan kampus.",
        map_url: "https://maps.app.goo.gl/YjCaaWBE7nRUUY1Z6",
        fasilitas: [facilities.WIFI, facilities.POWER, facilities.QUIET, facilities.AC, facilities.PRIVATE,facilities.ART, facilities.INDOOR],
        foto: "images/places/perpusuntad.png"
    },
    {
        id: 6,
        nama_tempat: "Jalur Dua Space",
        alamat: " Jl. Prof. Moh. Yamin, Lolu Utara, Kec. Palu Sel., Kota Palu, Sulawesi Tengah 94222",
        kategori: categories.DISKUSI,
        jam_buka: "08:30 - 00:00",
        deskripsi: "Jalur Dua Space adalah kafe dengan konsep modern dan estetik yang menawarkan area indoor dan outdoor nyaman untuk nongkrong atau kerja santai. Dikenal dengan suasana tenang dan desain tempat yang kekinian, kafe ini sering jadi pilihan buat ngopi, diskusi, hingga belajar bareng teman. Menu makanan dan minumannya juga beragam — dari kopi hangat, camilan ringan, sampai hidangan utama yang menggugah selera.",
        map_url: "https://maps.app.goo.gl/kbizJswbghfPd2nK8",
        fasilitas: [facilities.WIFI, facilities.POWER, facilities.MEETING, facilities.GROUP, facilities.ART, facilities.DRINKS],
        foto: "images/places/jalurdua.png"
    },
    {
        id: 7,
        nama_tempat: "Taman Mebere",
        alamat: "Lasoani, Kec. Mantikulore, Kota Palu, Sulawesi Tengah 94111",
        kategori: categories.DISKUSI,
        jam_buka: "Setiap Saat",
        deskripsi: "Taman ini dikenal dengan suasana alami dan udara yang sejuk, dikelilingi pepohonan hijau serta aliran air yang jernih. Jadi tempat pas buat refreshing, piknik kecil, atau sekadar menikmati ketenangan alam di tengah kesibukan kota.",
        map_url: "https://maps.app.goo.gl/uskAG6vmqGrBXW6H6",
        fasilitas: [facilities.VIEW, facilities.SPACIOUS, facilities.OUTDOOR, facilities.GARDEN, facilities.QUIET],
        foto: "images/places/tamanlasoani.png"
    },
    {
        id: 8,
        nama_tempat: "Bumi Nyiur Swalayan",
        alamat: " Jl. Letjen Jl. S. Parman No.44 lt.3, Besusu Tengah, Palu Timur, Palu City, Sulawesi Tengah 94111",
        kategori: categories.NONGKRONG,
        jam_buka: "08:00-22:00",
        deskripsi: "BNS bukan cuma tempat belanja, tapi juga spot santai buat nongkrong bareng teman. Dengan area yang luas, bersih, dan tersedia tempat makan di sekitarnya, BNS jadi pilihan pas buat hangout ringan sambil belanja kebutuhan harian.",
        map_url: "https://maps.google.com/?q=Silent+Study+Room+Jakarta",
        fasilitas: [facilities.AC, facilities.FOOD, facilities.DRINKS, facilities.INDOOR, facilities.MUSIC, facilities.AFFORDABLE, facilities.GROUP],
        foto: "images/places/bnspusat.png"
    },
    {
        id: 9,
        nama_tempat: "Taman Vatulemo",
        alamat: " Jl. Balai Kota Timur Tanamodindi Mantikulore, Lolu Utara, Kec. Palu Sel., Kota Palu, Sulawesi Tengah 94111",
        kategori: categories.NONGKRONG,
        jam_buka: "24 jam",
        deskripsi: "Taman Vatulemo adalah ruang terbuka hijau di pusat Kota Palu yang punya suasana ramai tapi tetap asri. Jadi tempat favorit buat jalan sore, nongkrong santai, atau menikmati suasana kota di malam hari.",
        map_url: "https://maps.app.goo.gl/QaxGqD39V38khiTk7",
        fasilitas: [facilities.SPACIOUS, facilities.OUTDOOR, facilities.FOOD, facilities.DRINKS, facilities.GARDEN, facilities.VIEW, facilities.AFFORDABLE, facilities.GROUP],
        foto: "images/places/walkot.jpg"
    },
    {
        id: 10,
        nama_tempat: "4U Balai Kota",
        alamat: "Jl. Seni No. 11, Art District",
        kategori: categories.DISKUSI,
        jam_buka: "10:00 - 23:00",
        deskripsi: "4U Balai Kota adalah tempat nongkrong sekaligus spot belanja yang nyaman dan luas. Dengan area kafe modern serta berbagai toko dan gerai di sekitarnya, tempat ini cocok buat ngopi santai, hangout bareng teman, atau belanja ringan sambil menikmati suasana kota.",
        map_url: "https://maps.app.goo.gl/4LGhQAUMt29DiFJ89",
        fasilitas: [facilities.WIFI, facilities.POWER, facilities.FOOD, facilities.DRINKS, facilities.SPACIOUS, facilities.MUSIC, facilities.AFFORDABLE, facilities.OUTDOOR, facilities.VIEW],
        foto: "images/places/4u.png"
    },
    {
        id: 11,
        nama_tempat: "Taman Bundaran Hasanuddin",
        alamat: "Lolu Utara, Kec. Palu Sel., Kota Palu, Sulawesi Tengah 94111",
        kategori: categories.NONGKRONG,
        jam_buka: "24 jam",
        deskripsi: "Taman Bundaran Hasanuddin jadi salah satu spot populer di Palu buat nongkrong santai atau jalan sore. Dengan suasana terbuka, lampu kota yang indah di malam hari, dan area yang strategis, tempat ini selalu rame dan jadi pilihan favorit buat bersantai.",
        map_url: "https://maps.app.goo.gl/NzzqGk58YLS61wKB6",
        fasilitas: [facilities.SPACIOUS, facilities.OUTDOOR, facilities.GARDEN, facilities.VIEW],
        foto: "images/places/tamanbundaran.png"
    },
    {
        id: 12,
        nama_tempat: "Perpustakaan Kota Palu",
        alamat: "Jl. Bukit Cina, Talise, Kec. Mantikulore, Kota Palu, Sulawesi Tengah",
        kategori: categories.TUGAS,
        jam_buka: "09:00 - 16:00",
        deskripsi: "Perpustakaan Kota Palu menawarkan suasana tenang dan nyaman untuk membaca maupun belajar. Dengan koleksi buku yang beragam dan fasilitas modern, tempat ini cocok buat menghabiskan waktu produktif sambil menikmati ketenangan di tengah kota.",
        map_url: "https://maps.app.goo.gl/rdB8kWboDjHuC1qe6",
        fasilitas: [facilities.POWER, facilities.MEETING, facilities.PRIVATE, facilities.WIFI, facilities.ART, facilities.INDOOR, facilities.QUIET, facilities.AC],
        foto: "images/places/perpuskota.png"
    },
    {
        id: 13,
        nama_tempat: "Taman Hutan Kota Palu",
        alamat: " Talise, Kec. Palu Tim., Kota Palu, Sulawesi Tengah 94118",
        kategori: categories.DISKUSI,
        jam_buka: "24 jam",
        deskripsi: "Taman Hutan Kota Palu punya suasana adem dengan area rumput sintetis yang sering dipakai untuk diskusi atau nongkrong santai. Dikelilingi pepohonan rindang dan udara segar, tempat ini cocok banget buat nyari ketenangan sambil ngobrol bareng teman.",
        map_url: "https://maps.app.goo.gl/RXYVa9EvP3insyfR8",
        fasilitas: [facilities.QUIET, facilities.GROUP, facilities.MEETING, facilities.VIEW, facilities.OUTDOOR, facilities.SPACIOUS, facilities.GARDEN],
        foto: "images/places/hutankota.jpg"
    },
    {
        id: 14,
        nama_tempat: "POSKOTA (POS KOPI TADULAKO)",
        alamat: "Jl. Untad I, Tondo, Kec. Mantikulore, Kota Palu, Sulawesi Tengah 94119",
        kategori: categories.NONGKRONG,
        jam_buka: "09:00 - 00:00",
        deskripsi: "Kafe ini punya suasana tenang dengan fasilitas lengkap yang mendukung aktivitas seperti belajar, rapat kecil, atau sekadar bersantai. Dilengkapi Wi-Fi kencang, colokan di setiap meja, serta pilihan menu kopi dan makanan ringan yang variatif. Tempatnya nyaman, bersih, dan cocok buat ngumpul bareng teman tanpa terganggu suasana ramai.",
        map_url: "https://maps.app.goo.gl/xwh6yi7Zs8cuSDsT8",
        fasilitas: [facilities.WIFI, facilities.POWER, facilities.OUTDOOR, facilities.AFFORDABLE, facilities.FOOD, facilities.ART],
        foto: "images/places/poskota.png"
    },
    {
        id: 15,
        nama_tempat: "Taman GOR",
        alamat: "Besusu Tengah, Kec. Palu Tim., Kota Palu, Sulawesi Tengah 94111",
        kategori: categories.NONGKRONG,
        jam_buka: "24 jam",
        deskripsi: "Taman GOR Palu jadi salah satu spot populer buat nongkrong, olahraga ringan, atau jalan sore. Dengan area luas dan suasana ramai tapi tetap nyaman, tempat ini sering dipilih buat kumpul bareng teman sambil menikmati jajanan di sekitar.",
        map_url: "https://maps.app.goo.gl/eTWaPw34tXMnFnRP7",
        fasilitas: [facilities.QUIET, facilities.SPACIOUS, facilities.OUTDOOR, facilities.GARDEN, facilities.VIEW],
        foto: "images/places/tamangor.png"
    },
    {
        id: 16,
        nama_tempat: "Kampung Nelayan",
        alamat: " Talise, Kec. Mantikulore, Kota Palu, Sulawesi Tengah",
        kategori: categories.NONGKRONG,
        jam_buka: "24 jam",
        deskripsi: "Kampung Nelayan dikenal sebagai spot santai di tepi laut yang punya pemandangan indah dan suasana tenang. Di sini, pengunjung bisa menikmati angin laut sambil mencicipi beragam kuliner segar yang dijual di warung sekitar. Saat sore hari, tempat ini jadi favorit buat menikmati matahari terbenam dan ngobrol santai bareng teman di pinggir pantai.",
        map_url: "https://maps.app.goo.gl/rUr3o97sUXNs41LB6",
        fasilitas: [facilities.QUIET, facilities.VIEW, facilities.AFFORDABLE, facilities.FOOD, facilities.GROUP, facilities.SPACIOUS],
        foto: "images/places/kamnel.png"
    },
    {
        id: 17,
        nama_tempat: "A`ROBI PRIME",
        alamat: "Jl. Balai Kota Sel., Tanamodindi, Kec. Palu Sel., Kota Palu, Sulawesi Tengah 94111",
        kategori: categories.DISKUSI,
        jam_buka: "07:00 - 00:00",
        deskripsi: "Café A`Robi Prime menawarkan suasana modern dan nyaman dengan desain interior yang elegan. Dikenal dengan cita rasa kopinya yang khas serta pilihan makanan yang lezat, tempat ini cocok buat nongkrong santai, meeting ringan, atau sekadar menikmati waktu tenang dengan suasana premium.",
        map_url: "https://maps.app.goo.gl/Btv5tffFzvpK7iHP7",
        fasilitas: [facilities.WIFI, facilities.POWER, facilities.GROUP, facilities.INDOOR, facilities.AC, facilities.ART, facilities.DRINKS],
        foto: "images/places/arobiprime.jpg"
    },
    {
        id: 18,
        nama_tempat: "Huntap Talise",
        alamat: "Talise, Kec. Mantikulore., Kota Palu, Sulawesi Tengah",
        kategori: categories.NONGKRONG,
        jam_buka: "24 jam",
        deskripsi: "Huntap Talise merupakan kawasan perumahan yang tertata rapi dengan suasana tenang dan nyaman. Di dalamnya terdapat taman hijau yang luas dan indah, sering dijadikan tempat bersantai, jalan sore, atau nongkrong ringan bareng teman. Perpaduan lingkungan bersih, udara segar, dan pemandangan asri bikin area ini terasa damai dan cocok buat melepas penat.",
        map_url: "https://maps.app.goo.gl/GLr9d8XqRqwku5fZ9",
        fasilitas: [facilities.GARDEN, facilities.OUTDOOR, facilities.FOOD, facilities.DRINKS, facilities.VIEW, facilities.SPACIOUS, facilities.AFFORDABLE],
        foto: "images/places/huntaptalise.jpg"
    },
    {
        id: 19,
        nama_tempat: "Taman Air Terjun GBK",
        alamat: "Talise, Kec. Mantikulore, Kota Palu, Sulawesi Tengah",
        kategori: categories.NONGKRONG,
        jam_buka: "24 jam",
        deskripsi: "Taman Air Terjun GBK sebuah taman baru di Kota Palu yang berlokasi di depan Gelora Bumi Kaktus (GBK) tepatnya di persimpangan Jalan Yos Sudarso dan Hang Tuah, Taman ini memiliki air terjun buatan berdinding batu alam sebagai ikon utama, dan juga dilengkapi lampu-lampu hias yang membuatnya indah di malam hari",
        map_url: "https://maps.app.goo.gl/vqncXhhea5RmKtHS8",
        fasilitas: [facilities.VIEW, facilities.GARDEN, facilities.QUIET],
        foto: "images/places/depangbk.jpg"
    },
    {
        id: 20,
        nama_tempat: "Taman Patung Kuda Bumi Bahari",
        alamat: "Jl. Bantilan, Lere, Kec. Palu Bar., Kota Palu, Sulawesi Tengah 94221",
        kategori: categories.NONGKRONG,
        jam_buka: "24 jam",
        deskripsi: "Taman ini menawarkan ruang terbuka hijau yang asri di tengah hiruk pikuk perkotaan, serta menjadi tempat berkumpul yang menyenangkan bagi keluarga. titik fokus utama taman ini adalah dua buah patung kuda yang seolah melompat keluar dari kolam. Patung-patung ini menjadi ikon yang sangat dikenal dan sering dijadikan spot foto oleh pengunjung.",
        map_url: "https://maps.app.goo.gl/VJ2YshT9aMtCBgm28",
        fasilitas: [facilities.SPACIOUS, facilities.VIEW, facilities.GARDEN, facilities.GROUP],
        foto: "images/places/tamanlasoso.jpg"
    },
    {
        id: 21,
        nama_tempat: "Indomaret Imam Bonjol",
        alamat: "Jl. Imam Bonjol, Siranindi, Kec. Palu Bar., Kota Palu, Sulawesi Tengah",
        kategori: categories.DISKUSI,
        jam_buka: "07:00 - 22:00",
        deskripsi: "Indomaret ini terletak di Jl. Imam Bonjol, Siranindi, Kec. Palu Bar., Kota Palu, Sulawesi Tengah,dengan fasilitas tempat duduk yang bisadigunakan bersantai dan terdapat juga minuman seperti point coffie dan makanan berat lainnya",
        map_url: "https://maps.app.goo.gl/e8tDhEDjqKFSjeZm7",
        fasilitas: [facilities.OUTDOOR, facilities.WIFI, facilities.FOOD, facilities.DRINKS, facilities.PRIVATE],
        foto: "images/places/indomaretimambonjol.jpg"
    },
    {
        id: 22,
        nama_tempat: "Indomaret Sisingamangaraja",
        alamat: "Jl. Sisingamangaraja, Besusu Tim., Kec. Mantikulore., Kota Palu, Sulawesi Tengah 94118",
        kategori: categories.DISKUSI,
        jam_buka: "24 jam",
        deskripsi: "Indomaret ini dekat dengan mie gacoan, terdapat fasilitas tempat duduk yang bisa digunakan bersantai dan terdapat juga minuman seperti coffie Ja-di dan makanan berat lainnya.",
        map_url: "https://maps.app.goo.gl/eoBzBvVs9TQnLgEJ6",
        fasilitas: [facilities.OUTDOOR, facilities.WIFI, facilities.FOOD, facilities.DRINKS, facilities.PRIVATE],
        foto: "images/places/indomaretsigma.jpg"
    },
    {
        id: 23,
        nama_tempat: "MAFAZA Cafe & Eatery",
        alamat: "Jl. Soekarno-Hatta, Talise, Kec. Mantikulore, Kota Palu, Sulawesi Tengah 94118",
        kategori: categories.TUGAS,
        jam_buka: "10:00 - 00:00",
        deskripsi: "Tempat ini menawarkan suasana yang estetik dengan area indoor, outdoor, dan tempat lesehan yang nyaman. Selain menyajikan berbagai makanan seperti bebek paleko, mie goreng, dan ayam cabe hijau, juga tersedia aneka minuman yang menyegarkan. Dengan suasana tenang dan fasilitas yang mendukung, tempat ini juga cocok banget untuk belajar atau mengerjakan tugas sambil menikmati hidangan favorit.",
        map_url: "https://maps.app.goo.gl/4S9scZDwV8JG7HUY9",
        fasilitas: [facilities.WIFI, facilities.POWER, facilities.INDOOR, facilities.OUTDOOR, facilities.ART, facilities.AC, facilities.GROUP, facilities.FOOD,facilities.DRINKS],
        foto: "images/places/mafaza.jpg"
    },
    {
        id: 24,
        nama_tempat: "Indomaret R.A Kartini",
        alamat: "Jl. R.A. Kartini No.10, Lolu Sel., Kec. Palu Sel., Kota Palu, Sulawesi Tengah 94111",
        kategori: categories.DISKUSI,
        jam_buka: "08:00 - 22:00",
        deskripsi: "Indomaret terletak di R.A Kartini dengan fasilitas tempat duduk yang bisa digunakan bersantai dan terdapat juga minuman seperti point coffie dan makanan berat lainnya, kita juga bisa menikmati mie instan hangat di meja yang telah disediakan.",
        map_url: "https://maps.app.goo.gl/fWAzF3tY2nz5Ztgw8",
        fasilitas: [facilities.OUTDOOR, facilities.WIFI, facilities.FOOD, facilities.DRINKS, facilities.PRIVATE],
        foto: "images/places/indomaretkartini.jpg"
    },
    {
        id: 25,
        nama_tempat: "Tanaris Coffe",
        alamat: "Jl. Juanda No.26, Lolu Utara, Kec. Palu Tim., Kota Palu, Sulawesi Tengah 94112",
        kategori: categories.TUGAS,
        jam_buka: "10:00 - 00:00",
        deskripsi: "Tanaris Coffee Palu adalah salah satu kafe populer di Kota Palu yang berlokasi di Jl. Juanda No. 26. Kafe ini dikenal dengan konsep warkop modern yang nyaman dan luas, cocok untuk nongkrong, bekerja, atau bersantai bersama teman. Menyajikan berbagai pilihan kopi, jus, dan camilan ringan seperti roti maryam, Tanaris juga sering menghadirkan suasana hangat dengan live music di waktu tertentu.",
        map_url: "https://maps.app.goo.gl/EKPdipqRPCfhfhb29",
        fasilitas: [facilities.WIFI, facilities.POWER, facilities.OUTDOOR,facilities.INDOOR,facilities.AC, facilities.GROUP, facilities.ART,facilities.FOOD, facilities.DRINKS, facilities.MUSIC,facilities.SPACIOUS],
        foto: "images/places/tanaris.jpg"
    },
    {
        id: 26,
        nama_tempat: "My Kopi O!",
        alamat: "Jl. R.A. Kartini, Lolu Sel., Kec. Palu Tim., Kota Palu, Sulawesi Tengah 94235",
        kategori: categories.TUGAS,
        jam_buka: "11:00 - 23:00",
        deskripsi: "Tempat favorit mahasiswa untuk mengerjakan tugas kelompok, dan juga menyajikan berbagai pilihan kopi, jus, dan camilan ringan seperti roti maryam dengan harga ramah kantong dan atmosfer kekinian.",
        map_url: "https://maps.app.goo.gl/8brpMM4qQPEneR4q6",
        fasilitas: [facilities.WIFI, facilities.POWER, facilities.OUTDOOR,facilities.INDOOR,facilities.AC, facilities.GROUP, facilities.ART,facilities.FOOD, facilities.DRINKS, facilities.MUSIC,facilities.SPACIOUS],
        foto: "images/places/kopikartini.jpg"
    },
    {
        id: 27,
        nama_tempat: "Taman Taiganja Kalukubula",
        alamat: "Jl. Kelor, Kalukubula, Kec. Sigi Biromaru, Kabupaten Sigi, Sulawesi Tengah 94236",
        kategori: categories.NONGKRONG,
        jam_buka: "24 jam",
        deskripsi: "Taman ini menjadi ikon wisata baru dengan suasana sejuk di tepi Sungai Palu. Dilengkapi area bermain, panggung seni, dan lapak UMKM, Taman Taiganja menjadi tempat favorit warga untuk bersantai dan beraktivitas. Nama “Taiganja” sendiri berasal dari simbol budaya Kaili yang melambangkan kesuburan, kekuatan, dan kemakmuran, menjadikannya tidak hanya indah secara visual tetapi juga sarat makna budaya.",
        map_url: "https://maps.app.goo.gl/NY9KYj73XfLVqG6A6",
        fasilitas: [facilities.SPACIOUS, facilities.GROUP, facilities.GARDEN, facilities.VIEW, facilities.PARKING],
        foto: "images/places/tamantaiganja.jpg"
    },
    {
        id: 28,
        nama_tempat: "Rasa Kopi",
        alamat: "Jl. Kuliner No. 216, Food District",
        kategori: categories.NONGKRONG,
        jam_buka: "09:00 - 00:00",
        deskripsi: "Tempat ini menyajikan berbagai pilihan kopi racikan khas, seperti latte, es kopi, dan varian minuman modern lainnya dengan harga terjangkau. Suasananya tenang dan hangat, cocok untuk nongkrong santai, bekerja, atau sekadar menikmati kopi bersama teman. Dengan pelayanan ramah dan cita rasa kopi yang kuat, Rasa Kopi menjadi salah satu tempat ngopi favorit di Palu.",
        map_url: "https://maps.app.goo.gl/h8B8x85VE5gYN3L66",
        fasilitas: [facilities.WIFI, facilities.POWER, facilities.GROUP, facilities.AFFORDABLE, facilities.OUTDOOR, facilities.ART, facilities.DRINKS],
        foto: "images/places/rasakopi.jpg"
    },
    {
        id: 29,
        nama_tempat: "Momoyo Tondo",
        alamat: "Jl. RE Martadinata, Tondo, Kec. Mantikulore, Kota Palu, Sulawesi Tengah 94148",
        kategori: categories.DISKUSI,
        jam_buka: "09:00 - 22:00",
        deskripsi: "Tempat ini dikenal dengan sajian ice cream, fruit tea, milk tea, dan kopi yang menyegarkan dengan berbagai varian rasa. Suasananya ceria dan nyaman, cocok untuk nongkrong santai, kumpul teman, atau menikmati dessert ringan. Dengan harga terjangkau dan pelayanan cepat, Momoyo Tondo menjadi salah satu tempat favorit anak muda di Palu.",
        map_url: "https://maps.app.goo.gl/TuWSoaEhXRL59yyN9",
        fasilitas: [facilities.PRIVATE, facilities.DRINKS, facilities.INDOOR, facilities.ART, facilities.QUIET],
        foto: "images/places/momoyo.jpg"
    },
    {
        id: 30,
        nama_tempat: "Warkop Celebes Kampoeng Nelayan",
        alamat: "Jl. Kp. Nelayan, Talise, Kec. Palu Tim., Kota Palu, Sulawesi Tengah 94118",
        kategori: categories.NONGKRONG,
        jam_buka: "16:00 - 23:00",
        deskripsi: "Warkop Celebes Kamnel menawarkan suasana santai dan nyaman. Dikenal dengan sajian kopi khas dan camilan ringan, tempat ini juga sering mengadakan live music dan nonton bareng, menjadikannya spot favorit anak muda untuk berkumpul. Dengan fasilitas free Wi-Fi dan pelayanan ramah, Warkop Celebes menjadi pilihan tepat untuk bersantai atau menghabiskan waktu bersama teman",
        map_url: "https://maps.app.goo.gl/DZ9KyteFUDC3uifr7",
        fasilitas: [facilities.GROUP, facilities.QUIET, facilities.FOOD, facilities.DRINKS, facilities.ART, facilities.VIEW, facilities.OUTDOOR, facilities.POWER],
        foto: "images/places/warkopcelebes.jpg"
    }
];

// Helper functions
function getPlacesByCategory(category = '') {
    if (!category) return placesData;
    return placesData.filter(place => place.kategori === category);
}

function searchPlaces(query = '') {
    if (!query) return placesData;
    const lowerQuery = query.toLowerCase();
    return placesData.filter(place => 
        place.nama_tempat.toLowerCase().includes(lowerQuery) ||
        place.alamat.toLowerCase().includes(lowerQuery) ||
        place.deskripsi.toLowerCase().includes(lowerQuery)
    );
}

function getFilteredPlaces(category = '', search = '') {
    let filtered = placesData;
    
    if (category) {
        filtered = filtered.filter(place => place.kategori === category);
    }
    
    if (search) {
        const lowerSearch = search.toLowerCase();
        filtered = filtered.filter(place => 
            place.nama_tempat.toLowerCase().includes(lowerSearch) ||
            place.alamat.toLowerCase().includes(lowerSearch) ||
            place.deskripsi.toLowerCase().includes(lowerSearch)
        );
    }
    
    return filtered;
}