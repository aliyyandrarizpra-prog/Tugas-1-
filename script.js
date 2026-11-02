function Sepeda(merk, jenis, warna) {
    this.merk = merk;
    this.jenis = jenis;
    this.warna = warna;

    this.infoSepeda = function() {
        return "Merk: " + this.merk +
               ", Jenis: " + this.jenis +
               ", Warna: " + this.warna;
    };

    this.tampilkanInfo = function() {
        document.write(this.infoSepeda() + "<br>");
    };
}

let sepeda1 = new Sepeda("Polygon", "Mountain Bike", "Hitam");
let sepeda2 = new Sepeda("United", "Road Bike", "Merah");

sepeda1.tampilkanInfo();
sepeda2.tampilkanInfo();