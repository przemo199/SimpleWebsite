"use strict";

function addElements() {
  window.addEventListener("DOMContentLoaded", (async () => {
    try {
      let navbar = await fetch("common/navbar.html");
      let footer = await fetch("common/footer.html");
      document.getElementById("navbar").innerHTML = await navbar.text();
      document.getElementById("footer").innerHTML = await footer.text();
    } catch (e) {
      console.error(e);
    }
  }));


  {
    let elements = [
      '<link rel="icon" type="image/svg+xml" href="img/favicon/favicon.svg"/>',
      '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet ' +
      'integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous">',
      '<link href="css/style.css" rel="stylesheet">',
      //'<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>'
    ];

    for (const element of elements) {
      document.head.innerHTML = document.head.innerHTML + element;
    }
    document.write('<script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>');
  }
}

addElements();

