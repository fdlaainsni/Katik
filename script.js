// Fungsi untuk menampilkan bagian yang dipilih
function showSection(id) {
    document.getElementById("persegi").style.display = "none";
    document.getElementById("persegiPanjang").style.display = "none";
    document.getElementById(id).style.display = "block";
}

// Hitung Luas Persegi
function hitungLuasPersegi() {
    let sisi = document.getElementById("sisi").value;
    if (sisi) {
        let luas = sisi * sisi;
        document.getElementById("hasilLuasPersegi").innerText = "Luas Persegi: " + luas;
    } else {
        alert("Masukkan nilai sisi terlebih dahulu!");
    }
}

// Hitung Keliling Persegi
function hitungKelilingPersegi() {
    let sisi = document.getElementById("sisi").value;
    if (sisi) {
        let keliling = 4 * sisi;
        document.getElementById("hasilKelilingPersegi").innerText = "Keliling Persegi: " + keliling;
    } else {
        alert("Masukkan nilai sisi terlebih dahulu!");
    }
}

// Reset input dan hasil persegi
function resetPersegi() {
    document.getElementById("sisi").value = "";
    document.getElementById("hasilLuasPersegi").innerText = "";
    document.getElementById("hasilKelilingPersegi").innerText = "";
}

// Hitung Luas Persegi Panjang
function hitungLuasPanjang() {
    let panjang = document.getElementById("panjang").value;
    let lebar = document.getElementById("lebar").value;
    if (panjang && lebar) {
        let luas = panjang * lebar;
        document.getElementById("hasilLuasPanjang").innerText = "Luas Persegi Panjang: " + luas;
    } else {
        alert("Masukkan panjang dan lebar terlebih dahulu!");
    }
}

// Hitung Keliling Persegi Panjang
function hitungKelilingPanjang() {
    let panjang = document.getElementById("panjang").value;
    let lebar = document.getElementById("lebar").value;
    if (panjang && lebar) {
        let keliling = 2 * (parseInt(panjang) + parseInt(lebar));
        document.getElementById("hasilKelilingPanjang").innerText = "Keliling Persegi Panjang: " + keliling;
    } else {
        alert("Masukkan panjang dan lebar terlebih dahulu!");
    }
}

// Reset input dan hasil persegi panjang
function resetPanjang() {
    document.getElementById("panjang").value = "";
    document.getElementById("lebar").value = "";
    document.getElementById("hasilLuasPanjang").innerText = "";
    document.getElementById("hasilKelilingPanjang").innerText = "";
}
