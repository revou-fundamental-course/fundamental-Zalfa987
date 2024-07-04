// Menambahkan event listener untuk mengisi data nama
document.addEventListener('DOMContentLoaded', function() {
    // Meminta pengguna memasukkan nama melalui prompt
    let userName = prompt("Silahkan masukkan nama anda:");

    // Jika nama pengguna diisi, tampilkan nama tersebut
    if (userName) {
        document.getElementById('name').innerText = userName;
    } else {
        // Jika tidak diisi, tampilkan "Pengunjung"
        document.getElementById('name').innerText = "Pengunjung";
    }
});

// Fungsi untuk menampilkan output dari formulir Message us
function displayOutput() {
    // Mengambil nilai dari input nama lengkap
    var fullName = document.getElementById("fullName").value;
    // Mengambil nilai dari input tanggal lahir
    var dob = document.getElementById("dob").value;
    // Mengambil nilai dari input radio jenis kelamin yang dipilih
    var gender = document.querySelector('input[name="gender"]:checked');
    // Mengambil nilai dari input pesan
    var message = document.getElementById("message").value;

    // Mengambil elemen untuk pesan kesalahan
    var errorMessage = document.getElementById("error-message");
    // Mengosongkan pesan kesalahan
    errorMessage.textContent = "";

    // Validasi untuk memastikan tidak ada data yang kosong
    if (fullName === "" || dob === "" || gender === null || message === "") {
        // Jika ada data yang kosong, tampilkan pesan kesalahan
        errorMessage.textContent = "Data tidak boleh kosong!";
        return;
    }

    // Menampilkan nilai input di bagian output
    document.getElementById("outputFullName").textContent = fullName;
    document.getElementById("outputDob").textContent = dob;
    document.getElementById("outputGender").textContent = gender.value;
    document.getElementById("outputMessage").textContent = message;
}