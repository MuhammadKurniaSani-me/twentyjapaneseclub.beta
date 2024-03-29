<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../../images/icons/logo_icon.png" type="image/x-icon">
    <link rel="stylesheet" href="../../stylesheets/index.css">
    <link rel="stylesheet" href="../../stylesheets/responsive.css">
    <link rel="stylesheet" href="../../stylesheets/choose_user.css">
    <script src="../../javascripts/index.js" defer></script>
    <script src="../../javascripts/choose_user.js" defer></script>
    <title>Sign In</title>
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
                Pilih Akun
                <p>
                    あなた は 誰 ですか
                </p>
            </h1>
        </section>
        <sec class="user_container">
            <h1>Siapakah Anda?</h1>
            <section class="users">
                <h2 class="hidden"></h2>
                <section id="student" class="user-section">
                    <h3 class="hidden"></h3>
                    <figure class="user-icon">
                        <img src="../../images/pictures/students.svg" alt="Student">
                    </figure>
                    <figcaption class="user-description">
                        <h4 class="user-type">
                            Pelajar
                        </h4>
                    </figcaption>
                </section>
                <section id="teacher" class="user-section">
                    <h3 class="hidden"></h3>
                    <figure class="user-icon">
                        <img src="../../images/pictures/teacher.svg" alt="Teacher">
                    </figure>
                    <figcaption class="user-description">
                        <h4 class="user-type">
                            Pengajar
                        </h4>
                    </figcaption>
                </section>
            </section>
        </sec>
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