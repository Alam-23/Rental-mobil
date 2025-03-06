document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const confirmButton = document.getElementById("confirm-sewa");
    const cancelButton = document.getElementById("cancel-sewa");

    document.querySelectorAll('.sewa-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            modal.style.display = "flex"; 
        });
    });

    confirmButton.addEventListener('click', function () {
        alert("Mobil berhasil disewa!");
        modal.style.display = "none"; 
    });

    cancelButton.addEventListener('click', function () {
        modal.style.display = "none"; 
    });
});
