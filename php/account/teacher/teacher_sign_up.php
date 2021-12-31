<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../../../images/icons/logo_icon.png" type="image/x-icon">
    <link rel="stylesheet" href="../../../stylesheets/index.css">
    <link rel="stylesheet" href="../../../stylesheets/responsive.css">
    <link rel="stylesheet" href="../../../stylesheets/teacher_sign_up.css">
    <script src="../../../javascripts/index.js" defer></script>
    <script src="../../../javascripts/dropdown.js" defer></script>
    <title>Daftar</title>
</head>

<body>
    <header id="header-main-page">
        <nav class="navbar">
            <figure class="logo">
                <a href="../../../index.php">
                    <img src="../../../images/icons/word_icon.svg" alt="Logo">
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
                        <a class="nav-link" href="../../../index.php">Beranda</a>
                    </li>
                    <li>
                        <a class="nav-link" href="../../about.php">Tentang</a>
                    </li>
                    <li>
                        <a class="nav-link" href="../../users/choose_user.php">Akun</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <section class="hero">
            <h1>
                Halo! Guru!
                <p>
                    こんにちは！ 先生！
                </p>
            </h1>
        </section>
        <section class="form sections">
            <h1>Daftar Sebagai Pengajar</h1>
            <p>Sudah memiliki akun? <a id="sign-up" href="./teacher_sign_in.php">Masuk!</a></p>
            <form class="forms-container" name="form_sign_up" action="./student_sign_in.php" method="POST" onsubmit="">
                <div class="input-container">
                    <!-- Username -->
                    <div class="username-container">
                        <div class="label-container">
                            <h4>
                                <label for="username">Nama Pengajar</label>
                            </h4>
                        </div>
                        <div class="input-box">
                            <input type="text" name="username" id="username" onkeypress="checkName()" ; placeholder="Nama Lengkap" />

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
                    <!-- Intansi Pengajar -->
                    <div class="teacher-agency-container">
                        <div class="label-container">
                            <h4>
                                <label for="teacher-agency">Instansi Pengajar</label>
                            </h4>
                        </div>
                        <div class="input-box">
                            <input type="text" name="teacher-agency" id="teacher-agency" onkeypress="checkName()" ; placeholder="Instansi/Universitas Pengajar" />

                            <!-- peringatan -->
                            <div class="validasi_data">
                                <!-- peringatan pertama jika masukan nama kosong -->
                                <div class="empty-cheker" id="emptyTeacherAgency">
                                    Instansi tidak boleh kosong
                                </div>

                                <!-- peringatan kedua jika jumlah digit karakter kurang -->
                                <div class="invalid-cheker" id="invalidTeacherAgency">
                                    Panjang karakter adalah 4 karakter
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Password -->
                    <div class="password-container">
                        <div class="label-container">
                            <h4>
                                <label for="password">Password</label>
                            </h4>
                        </div>
                        <div class="input-box">
                            <input type="password" name="password" onkeypress="checkPassword()" ; id="password" placeholder="Karakter dan Angka Acak" />

                            <!-- peringatan -->
                            <div class="validasi_data">
                                <!-- peringatan pertama jika masukan nama kosong -->
                                <div class="empty-cheker" id="emptyPassword">
                                    Password tidak boleh kosong
                                </div>

                                <!-- peringatan kedua jika jumlah digit karakter kurang -->
                                <div class="invalid-cheker" id="invalidPassword">
                                    Panjang karakter minimal 8 huruf
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Confirm Password -->
                    <div class="confirm-password-container">
                        <div class="label-container">
                            <h4>
                                <label for="confirm-password">Konfirmasi Password</label>
                            </h4>
                        </div>
                        <div class="input-box">
                            <input type="password" name="confirm-password" onkeypress="checkPassword()" ; id="confirm-password" placeholder="Karakter dan Angka Acak" />

                            <!-- peringatan -->
                            <div class="validasi_data">
                                <!-- peringatan pertama jika masukan nama kosong -->
                                <div class="empty-cheker" id="emptyPassword">
                                    Konfirmasi Password tidak boleh kosong
                                </div>

                                <!-- peringatan kedua jika jumlah digit karakter kurang -->
                                <div class="invalid-cheker" id="invalidPassword">
                                    Panjang karakter minimal 8 huruf
                                </div>

                                <!-- peringatan ketiga jika password tidak sama -->
                                <div class="wrong-password-cheker" id="wrongPassword">
                                    Password tidak sama
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="submit-button-container">
                    <div class="create-account-box">
                        <button id="create-account" type="submit">
                            <p>
                                <img src="../../../images/icons/add_data.svg" alt="Login" id="login-icon">
                                Daftar!
                            </p>
                        </button>
                    </div>
                    <div class="google-login-box">
                        <button id="google-login" type="button">
                            <p>
                                <img src="../../../images/icons/Google_ G _Logo.svg" alt="Google" id="google-G-icon">
                                Daftar dengan Google
                            </p>
                        </button>
                    </div>
                </div>
            </form>
        </section>
    </main>

    <footer>
        <div class="container">
            <figure class="logo">
                <a href="../../../index.php">
                    <img src="../../../images/icons/word_icon.svg" alt="Logo">
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