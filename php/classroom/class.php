<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../stylesheets/index.css">
    <link rel="stylesheet" href="../../stylesheets/responsive.css">
    <script src="../../javascripts/index.js" defer></script>
    <title>Japanese Club</title>
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
                        <a class="nav-link" href="../../index.php">Home</a>
                    </li>
                    <li>
                        <a class="nav-link" href="../about.php">About</a>
                    </li>
                    <li>
                        <a class="nav-link" href="sign_out.php">Sign Out</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>    

    <main class="main">
        <section class="hero">
            <h1>Ruang Kelas
                <p>教室</p>
            </h1>
        </section>
        <section class="menus-container">
            <h1 class="hidden"></h1>
            <div class="card-container">

                <section class="card lesson" id="hiragana">
                    <h1 class="title-card hidden">sasas</h1>
                    <article class="description">
                        <h2>hiragana</h2>
                        <a href="../lessons/hiragana.php" class="button">
                            <p>pelajari</p>
                        </a>
                    </article>
                </section>

                <section class="card lesson" id="katakana">
                    <h1 class="title-card hidden">sasas</h1>
                    <article class="description">
                        <h2>katakana</h2>
                        <a href="../php/lessons/katakana.php" class="button">
                            <p>pelajari</p>
                        </a>
                    </article>
                </section>

                <section class="card lesson" id="kanji">
                    <h1 class="title-card hidden">sasas</h1>
                    <article class="description">
                        <h2>Kanji</h2>
                        <a href="../php/lessons/kanji.php" class="button">
                            <p>pelajari</p>
                        </a>
                    </article>
                </section>

                <section class="card lesson" id="classroom">
                    <h1 class="title-card hidden">sasas</h1>
                    <article class="description">
                        <h2>Ruang Kelas</h2>
                        <a href="./join_class.php" class="button">
                            <p>Gabung</p>
                        </a>
                    </article>
                </section>
            </div>
        </section>
    </main>

    <footer class="footer">
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
