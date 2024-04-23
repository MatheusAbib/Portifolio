document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
  
    links.forEach(link => {
      link.addEventListener('click', clickHandler);
    });
  
    function clickHandler(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const offsetTop = document.querySelector(href).offsetTop;
  
      scroll({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const profileContainer = document.querySelector('.profile-container');
    const profileImage = document.querySelector('.profile-image');
    const profileDescription = document.querySelector('.profile-description');
  
    profileContainer.addEventListener('mousemove', function(event) {
      const x = event.clientX - profileContainer.offsetLeft;
      const y = event.clientY - profileContainer.offsetTop;
  
      profileImage.style.transform = `translate(${x}px, ${y}px)`;
      profileDescription.style.transform = `translate(-${x}px, -${y}px)`;
    });
  
    profileContainer.addEventListener('mouseout', function() {
      profileImage.style.transform = '';
      profileDescription.style.transform = '';
    });
  });
  const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos'); //declramos a variavel constante com o nome de BotaoMostrarProjetos//
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)'); //o all busca todos os elementos que tem essa classe, diferente do que nao tem All, ele so busca uma classe. Mostrar projeto e :nao(not) os do tipo ativo(.ativo)'//

botaoMostrarProjetos.addEventListener('click', () => {
projetosInativos.forEach(projetoInativo => {
    projetoInativo.classList.add('ativo'); //ClassList pega todas as classes de uma div//
});
   botaoMostrarProjetos.classList.add('remover');
}); //adicionar uma "esculta" no botao, se o usuario clicou no botão, adicionar um evento ao click//
document.addEventListener('DOMContentLoaded', function() {
  var image = document.querySelector('.profile-image img');
  var zoomed = false;

  image.addEventListener('click', function() {
    if (!zoomed) {
      image.style.transform = 'scale(1.3)';
      zoomed = true;

      // Define um tempo para remover o zoom
      setTimeout(function() {
        image.style.transform = 'scale(1)';
        zoomed = false;
      }, 6000); // Tempo em milissegundos (2 segundos neste exemplo)
    }
  });

});

// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  var image = document.querySelector('.profile-image img');
  var zoomed = false;

  image.addEventListener('click', function() {
    if (!zoomed) {
      image.style.transform = 'scale(1.4)';
      zoomed = true;

      // Define um tempo para remover o zoom
      setTimeout(function() {
        image.style.transform = 'scale(1)';
        zoomed = false;
      }, 6000); // Tempo em milissegundos (2 segundos neste exemplo)
    }
  });

  // Adiciona um evento de toque para dispositivos móveis
  image.addEventListener('touchstart', function() {
    if (!zoomed) {
      image.style.transform = 'scale(1.4)';
      zoomed = true;

      // Define um tempo para remover o zoom
      setTimeout(function() {
        image.style.transform = 'scale(1)';
        zoomed = false;
      }, 6000); // Tempo em milissegundos (2 segundos neste exemplo)
    }
  });
});
