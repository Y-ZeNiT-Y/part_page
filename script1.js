document.addEventListener('DOMContentLoaded', () => {
    // Seleciona a seção 'hero' onde o carrossel de fundo será aplicado
    const heroSection = document.getElementById('hero');

    // URLs das suas imagens de background.
    // As imagens estão na pasta 'img' no mesmo nível do arquivo HTML e JS.
    // Lembre-se de verificar os nomes exatos dos arquivos e suas extensões.
    const backgroundImages = [
        'img/16 Pro Max.webp',   // Imagem do "16 Pro Max"
        'img/Edge 60.webp',      // Imagem do "Edge 60"
        'img/Note 14.jpg',       // Imagem do "Note 14"
        'img/Note 60.webp',      // Imagem do "Note 60"
        'img/S25 ultra.jpg'      // Imagem do "S25 ultra"
    ];

    let currentImageIndex = 0; // Índice da imagem atual no array
    const transitionDuration = 1500; // Duração da transição CSS em milissegundos (1.5 segundos)
    const displayDuration = 5000; // Tempo que cada imagem fica visível antes de mudar (5 segundos)

    function changeBackground() {
        // 1. Remove a classe 'active' da imagem atual, se houver, para iniciar a transição de saída
        const oldImage = heroSection.querySelector('.hero-background-image.active');
        if (oldImage) {
            oldImage.classList.remove('active');
            // Remove a imagem antiga do DOM após a duração da transição.
            setTimeout(() => {
                if (oldImage.parentNode === heroSection) {
                    oldImage.remove();
                }
            }, transitionDuration + 100);
        }

        // 2. Cria um novo elemento div para a próxima imagem de fundo
        const newImage = document.createElement('div');
        newImage.classList.add('hero-background-image');
        newImage.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;

        // 3. Insere a nova imagem na seção 'hero'
        heroSection.insertBefore(newImage, heroSection.querySelector('.container'));

        // 4. Força o navegador a recalcular o layout (reflow)
        void newImage.offsetWidth;

        // 5. Adiciona a classe 'active' para a nova imagem
        newImage.classList.add('active');

        // 6. Atualiza o índice para a próxima imagem
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    }

    // Chama a função para mudar o background pela primeira vez assim que o DOM estiver pronto
    changeBackground();

    // Configura um intervalo para chamar a função 'changeBackground' repetidamente
    setInterval(changeBackground, displayDuration);
});