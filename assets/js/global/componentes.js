document.addEventListener("DOMContentLoaded", function () {
    
    const carrosselHtml = `
    <!-- Carrossel -->
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
            
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://asvptaquaritinga.wordpress.com/wp-content/uploads/2013/06/6087_273496662750098_810615361_n.jpg"
                        class="d-block w-100" alt="Imagem 1">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Bem-vindo ao Lar São Vicente de Paulo</h5>
                        <p>Cuidando com amor, carinho e dedicação dos nossos idosos</p>
                        <a href="sobre.html" class="btn btn-primary btn-lg">Conheça Nossa História</a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/511172349_682711494730143_4412416869394310891_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=2a1932&_nc_ohc=YQoScBbobwoQ7kNvwH_9AmU&_nc_oc=Adrnev6fCQb9_5sAUfMot5w7xgH4SxMNYrnzOYVmqe6JU4MzIqDrCQ7A7KdVH_tol2M&_nc_zt=23&_nc_ht=scontent-gru2-2.xx&_nc_gid=y0G6pzfO5FoE6qVIg292cA&_nc_ss=7a30f&oh=00_AfwNwYVrz5qKoGYiEIqHZxfvl4sM6MHamOH4uTM0CvLw8g&oe=69CCA445"
                        class="d-block w-100" alt="Imagem 2">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Ajude-nos</h5>
                        <p>Nosso compromisso é oferecer um ambiente acolhedor e de qualidade de vida para os nossos residentes.</p>
                        <a href="doar.html" class="btn btn-primary btn-lg">Doe Agora</a>
                    </div>
                </div>
            </div>


            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Próximo</span>
            </button>
        </div>
    `;
    document.getElementById('carousel-placeholder').innerHTML = carrosselHtml;
    const headerHtml = `
    
    <header class="global-header">
    <a href="index.html" class="logo">
        <img src="https://www.ssvpbrasil.org.br/source/files/c/833/Logo_horizontal_SSVP_Brasil-357851_166-64-0-0.jpg">
    </a>
    <nav>
        <ul>
            <li><a href="index.html">INÍCIO</a></li>
            <li><a href="sobre.html">QUEM SOMOS</a></li>
            <li><a href="doar.html">DOAR</a></li>
            <li><a href="contato.html">FALE CONOSCO</a></li>
            <li><a href="transparencia.html">TRANSPARÊNCIA</a></li>
        </ul>
    </nav>
    <button class="menu-toggle" onclick="toggleMenu()" aria-label="Abrir menu">
        <i class="bi bi-list"></i>
    </button>
    <!-- Overlay -->
    <div class="overlay" id="overlay" onclick="toggleMenu()"></div>

    <!-- Sidebar Mobile -->
    <div class="sidebar" id="sidebar">
        <button class="sidebar-close" onclick="toggleMenu()" aria-label="Fechar menu">
            <i class="bi bi-x"></i>
        </button>
        <ul>
            <li><a href="index.html" onclick="toggleMenu()">INÍCIO</a></li>
            <li><a href="sobre.html" onclick="toggleMenu()">QUEM SOMOS</a></li>
            <li><a href="doar.html" onclick="toggleMenu()">DOAR</a></li>
            <li><a href="contato.html" onclick="toggleMenu()">FALE CONOSCO</a></li>
            <li><a href="transparencia.html" onclick="toggleMenu()">TRANSPARÊNCIA</a></li>
        </ul>
    </div>
</header>
  `;
    document.getElementById('header-placeholder').innerHTML = headerHtml;

    // Conteúdo do rodapé
    const footerHtml = `
    <!-- WhatsApp Floating Button -->
    <a href="https://wa.me/5516991128704" target="_blank" class="whatsapp-float" aria-label="WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
    </a>
    <footer class="site-footer pt-5">
        <div class="container">
            <div class="row g-4 g-lg-5">

                <div class="col-lg-4 col-md-6 footer-about text-center text-md-start">
                    <h5>SOCIEDADE DE SÃO VICENTE DE PAULA</h5>
                    <p class="pe-3">Há mais de 192 anos proporcionando esperança e dignidade.</p>
                    <a href="sobre.html" class="btn btn-sm btn-saiba-mais mt-2">Saiba Mais</a>
                </div>

                <div class="col-lg-3 col-md-6 footer-links text-center text-md-start">
                    <h5>Institucional</h5>
                    <ul class="list-unstyled footer-links-list">
                        <li><a href="index.html">Início</a></li>
                        <li><a href="sobre.html">Sobre Nós</a></li>
                        <li><a href="doar.html">Doe via pix</a></li>
                        <li><a href="transparencia.html">Transparência</a></li>
                        <li><a href="contato.html">Contato</a></li>
                    </ul>
                </div>

                <div class="col-lg-5 col-md-12 footer-contact text-center text-md-start">
                    <h5>Contato</h5>
                    <ul class="list-unstyled  footer-contact-list">
                        <li>
                            <a href="tel: 5516991128704" target="_blank" rel="noopener noreferrer" class="text-decoration-none text-white">
                                <i class="bi bi-telephone-fill"></i>
                                (16) 99112-8704
                            </a>
                        </li>
                        <li>
                            <a
                            href="https://mail.google.com/mail/u/0/?hl=pt-BR#search/asilotaquaritinga%40hotmail.com?compose=new"
                            target="_blank" rel="noopener noreferrer" class="text-decoration-none text-white">
                                <i class="bi bi-envelope-at-fill"></i>
                                asilotaquaritinga@hotmail.com
                            </a>
                        </li>
                        <li>
                            <a
                            href="https://www.google.com/maps/place/Lar+S%C3%A3o+Vicente+de+Paulo/@-21.403773,-48.506282,257m/data=!3m1!1e3!4m6!3m5!1s0x94b9396c54979ad9:0x24f576fc8085ac03!8m2!3d-21.4036416!4d-48.5061347!16s%2Fg%2F11f1kj47jq?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                            target="_blank" rel="noopener noreferrer" class="text-decoration-none text-white">
                                <i class="bi bi-geo-alt-fill"></i>
                                Rua São José, 1149 15900009 Taquaritinga, SP
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

        <div class="footer-bottom mt-5 py-4">
            <div class="container">
                <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    
                    <div class="text-center text-md-start mb-3 mb-md-0">
                        <p>&copy; 2026 Lar São Vicente de Paulo. Todos os direitos reservados.</p>
                    </div>
                    
                    <div class="social-icons text-center text-md-end">
                        <a href="https://wa.me/5516991128704" target="_blank" class="social-icon-circle" aria-label="WhatsApp">
                            <i class="bi bi-whatsapp"></i>
                        </a>
                        <a href="https://www.facebook.com/asilotaquaritinga/" target="_blank" class="social-icon-circle" aria-label="Facebook">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/asilo.taquaritinga.ssvp" target="_blank" class="social-icon-circle" aria-label="Instagram">
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </footer>
  `;
    document.getElementById('footer-placeholder').innerHTML = footerHtml;
});
