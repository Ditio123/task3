const flashData = $('.flash-data').data('flashdata');

if( flashData) {
    Swal.fire({
        title: 'Data Mahasiswa ',
        text: 'Berhasil ' + flashData,
        icon: 'success'
    });
}

// tombol-hapus
$('.tombol-hapus').on('click', function (e) {

    e.preventDefault();
    const href = $(this).attr('href'); 

    Swal.fire({
            title: 'Wes yakin opo gorong,lek wes hapusen',
            text: "data mahasiswa akan dihapus!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Hapus data!'
          }).then((result) => {
            if (result.isConfirmed) {
                document.location.href = href;
          }
    })

});