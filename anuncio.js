document.getElementById('searchButton').addEventListener('click', function() {
    var searchInput = document.getElementById('searchInput').value;
    var searchResult = document.getElementById('searchResult');
    
    // Verifique se há algum texto na barra de pesquisa
    if (searchInput.trim() !== '') {
        // Atualize o conteúdo da guia de pesquisa com base na entrada do usuário
        searchResult.innerHTML = 'Resultados da pesquisa para: ' + searchInput;
        // Exiba a guia de pesquisa
        searchResult.style.display = 'block';
    }
});

// Feche a guia de pesquisa quando o usuário clicar fora dela
document.addEventListener('click', function(event) {
    var searchResult = document.getElementById('searchResult');
    if (!searchResult.contains(event.target)) {
        searchResult.style.display = 'none';
    }
});

function mostrarModal() {
    const modalCadastro = document.getElementById("modalCadastro");
    modalCadastro.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function mostrarModal2() {
    const modalCadastro = document.getElementById("modalCadastro2");
    modalCadastro.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function mostrarModal3() {
    const modalCadastro = document.getElementById("modalCadastro3");
    modalCadastro.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function mostrarModal4() {
    const modalCadastro = document.getElementById("modalCadastro4");
    modalCadastro.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}


function fecharModal() {
    const modalCadastro = document.getElementById("modalCadastro");
    modalCadastro.classList.add("hidden");
    document.body.style.overflow = "auto";
}

function fecharModal2() {
    const modalCadastro = document.getElementById("modalCadastro2");
    modalCadastro.classList.add("hidden");
    document.body.style.overflow = "auto";
}

function fecharModal3() {
    const modalCadastro = document.getElementById("modalCadastro3");
    modalCadastro.classList.add("hidden");
    document.body.style.overflow = "auto";
}

function fecharModal4() {
    const modalCadastro = document.getElementById("modalCadastro4");
    modalCadastro.classList.add("hidden");
    document.body.style.overflow = "auto";
}
  

function openFileInput() {
  document.getElementById('flImage').click();
}

  function updateImage(event) {
    const imgElement = document.getElementById('imgPhoto');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            imgElement.src = e.target.result;
        }

        reader.readAsDataURL(file);
    }
}

function openFileInput2() {
    document.getElementById('flImage2').click();
  }
  
    function updateImage2(event) {
      const imgElement = document.getElementById('imgPhoto2');
      const file = event.target.files[0];
  
      if (file) {
          const reader = new FileReader();
  
          reader.onload = function(e) {
              imgElement.src = e.target.result;
          }
  
          reader.readAsDataURL(file);
      }
  }

  function openFileInput3() {
    document.getElementById('flImage3').click();
  }
  
    function updateImage3(event) {
      const imgElement = document.getElementById('imgPhoto3');
      const file = event.target.files[0];
  
      if (file) {
          const reader = new FileReader();
  
          reader.onload = function(e) {
              imgElement.src = e.target.result;
          }
  
          reader.readAsDataURL(file);
      }
  }

  function openFileInput4() {
    document.getElementById('flImage4').click();
  }
  
    function updateImage4(event) {
      const imgElement = document.getElementById('imgPhoto4');
      const file = event.target.files[0];
  
      if (file) {
          const reader = new FileReader();
  
          reader.onload = function(e) {
              imgElement.src = e.target.result;
          }
  
          reader.readAsDataURL(file);
      }
  }
  

function mostrarAlerta(){
    alert("ANUNCIO CRIADO!");
    window.location.href = "/anunciar/anuncio.html"
}