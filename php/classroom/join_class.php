<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../stylesheets/index.css">
    <link rel="stylesheet" href="../../stylesheets/responsive.css">
    <link rel="stylesheet" href="../../stylesheets/join_class.css">
    <script src="../../javascripts/index.js" defer></script>
    <title>Gabung Ruang Kelas</title>
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
                        <a class="nav-link" href="./class.php">Class Room</a>
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
            <h1>Gabung Google Meet
                <p>Google Meet に 参加する</p>
            </h1>
        </section>
        <section class="form sections">
            <h1>Gabung Kelas</h1>
            <!-- <p>Belum memiliki akun? <a id="sign-up" href="./sign_up.php">Daftar!</a></p> -->
            <form class="forms-container" name="form_sign_in" action="https://meet.google.com/fpv-ydjt-hfb" method="POST" onsubmit="">
                <div class="input-container">
                    <!-- Username -->
                    <div class="username-container">
                        <div class="label-container">
                            <h4>
                                <label for="username">Nama Siswa</label>
                            </h4>
                        </div>
                        <div class="input-box">
                            <input type="text" name="username" id="username" onkeypress="checkName()"; placeholder="Nama Lengkap" />

                            <!-- peringatan -->
                            <div class="validasi_data">
                                <!-- peringatan pertama jika masukan nama kosong -->
                                <div class="empty-cheker" id="emptyUsername">
                                    Username tidak boleh kosong
                                </div>

                                <!-- peringatan kedua jika jumlah digit karakter kurang -->
                                <div class="invalid-cheker" id="invalidUsername">
                                    Panjang karakter minimal 8 huruf
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- NIS -->
                    <div class="student-id-container">
                        <div class="label-container">
                            <h4>
                                <label for="student-id">Nomor Induk Siswa</label>
                            </h4>
                        </div>
                        <div class="input-box">
                            <input type="text" name="student-id" id="student-id" onkeypress="checkName()"; placeholder="Nomor Induk Siswa 4 Digit" />

                            <!-- peringatan -->
                            <div class="validasi_data">
                                <!-- peringatan pertama jika masukan nama kosong -->
                                <div class="empty-cheker" id="emptyStudentId">
                                    Nomor induk siswa tidak boleh kosong
                                </div>

                                <!-- peringatan kedua jika jumlah digit karakter kurang -->
                                <div class="invalid-cheker" id="invalidStudentId">
                                    Panjang karakter adalah 4 angka
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="submit-button-container">
                    <div class="join-google-meet-box">
                        <button id="join-google-meet" type="submit">
                            <p>
                                <img src="../../images/icons/Google_Meet_text_logo_(2020).svg" alt="Google Meet" id="google-meet-icon">
                                Gabung Google Meet
                            </p>
                        </button>
                    </div>
                </div>
            </form>
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
