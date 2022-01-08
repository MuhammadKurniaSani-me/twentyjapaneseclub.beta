<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../../images/icons/logo_icon.png" type="image/x-icon">
    <link rel="stylesheet" href="../../stylesheets/index.css">
    <link rel="stylesheet" href="../../stylesheets/responsive.css">
    <script src="../../javascripts/index.js" defer></script>
    <script src="../../javascripts/hiragana.js" defer></script>
    <title>Hiragana</title>
</head>

<body>
    <header id="header-main-page">
        <nav class="navbar">
            <figure class="logo">
                <a href="../../index.php">
                    <img src="../../images/icons/word_icon.svg" alt="Logo">
                </a>
            </figure>
            <div class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <div class="navbar-links">
                <ul>
                    <li>
                        <a class="nav-link" href="../../index.php">Beranda</a>
                    </li>
                    <li>
                        <a class="nav-link" href="../about.php">Tentang</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <section class="hero">
            <h1>
                Hiragana
                <p>
                    ひらがな
                </p>
            </h1>
        </section>
        <section class="letter-container">
            <h1 class="hidden"></h1>
            <div class="wrapper">
                <div class="title-letter-container">
                    <span class="title-bar"></span>
                    <h2 class="title-letter">Huruf Dasar</h2>
                    <span class="title-bar"></span>
                </div>
                <ul id="none" class="letter-card-container">
                    <li class="letter-card">
                        <article>
                            <h3 class="kana-char"></h3>
                            <p class="letter"></p>
                        </article>
                    </li>
                </ul>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <figure class="logo">
                <a href="../../index.php">
                    <img src="../../images/icons/word_icon.svg" alt="Logo">
                </a>
            </figure>
            <div class="copyright">
                <p>
                    japanese club
                    <br>
                    <span id="school">sman</span> 20 surabaya
                    <br>
                    &copy; all right reserved
                </p>
            </div>
        </div>
    </footer>
</body>

</html>