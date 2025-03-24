function showPersegi() {
    document.getElementById('persegi').style.display = 'block';
    document.getElementById('panjang').style.display = 'none';
}

function showPersegiPanjang() {
    document.getElementById('panjang').style.display = 'block';
    document.getElementById('persegi').style.display = 'none';
}
document.getElementById('hitung').addEventListener('click', function() {
    let sisi = document.getElementById('sisi').value;
    if (sisi) {
        let luas = sisi * sisi;
        document.getElementById('hasil').innerHTML = `
            L = S x S <br>
            L = ${sisi} x ${sisi} <br>
            L = ${luas}
        `;
    } else {
        document.getElementById('hasil').textContent = "Masukkan nilai sisi!";
    }
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('sisi').value = '';
    document.getElementById('hasil').innerHTML = ''; // Menggunakan innerHTML agar tag <br> direset
});

document.getElementById('hitungkeliling').addEventListener('click', function() {
    let sisi = document.getElementById('sisikeliling').value;
    if (sisi) {
        let keliling = 4 * sisi; // Perhitungan keliling persegi
        document.getElementById('hasilkeliling').innerHTML = `
            K = 4 x S <br>
            K = 4 x ${sisi} <br>
            K = ${keliling}
        `;
    } else {
        document.getElementById('hasilkeliling').textContent = "Masukkan nilai sisi!";
    }
});

document.getElementById('resetkeliling').addEventListener('click', function() {
    document.getElementById('sisikeliling').value = '';
    document.getElementById('hasilkeliling').innerHTML = '';
});