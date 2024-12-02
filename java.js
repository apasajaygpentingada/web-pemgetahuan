const contentSection = document.querySelector('.hero-content');

    links.forEach(link => {
      link.addEventListener('mouseover', function() {
        this.style.color = 'blue'; // Mengubah warna saat hover
      });

      link.addEventListener('mouseout', function() {
        this.style.color = ''; // Mengembalikan warna saat mouse keluar
      });

      link.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah link default
        const newContent = getContentForLink(this.textContent);
        contentSection.innerHTML = newContent; // Mengganti konten dinamis
      });
    });

    function getContentForLink(linkText) {
      switch(linkText) {
        case 'HTML':
          return `<h1>HTML</h1><p>HTML adalah bahasa markup standar untuk membuat halaman web.</p>`;
        case 'CSS':
          return `<h1>CSS</h1><p>CSS adalah bahasa untuk mendesain tampilan halaman web.</p>`;
        case 'JAVA':
          return `<h1>JAVA</h1><p>JAVA adalah bahasa pemrograman yang banyak digunakan untuk pengembangan aplikasi.</p>`;
        case 'PYTON':
          return `<h1>PYTHON</h1><p>PYTHON adalah bahasa pemrograman yang mudah dipelajari dan banyak digunakan dalam berbagai bidang.</p>`;
        default:
          return `<h1>HTML</h1><p>HTML adalah bahasa markup standar untuk membuat halaman web.</p>`;
      }
    }


