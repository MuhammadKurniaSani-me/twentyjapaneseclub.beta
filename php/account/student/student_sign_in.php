<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../../stylesheets/index.css">
    <link rel="stylesheet" href="../../../stylesheets/responsive.css">
    <link rel="stylesheet" href="../../../stylesheets/sign_in.css">
    <script src="../../../javascripts/index.js" defer></script>
    <title>Sign In</title>
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
                        <a class="nav-link" href="../../../index.php">Home</a>
                    </li>
                    <li>
                        <a class="nav-link" href="../../about.php">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>    

    <main>
        <section class="hero">
            <h1>
                Halo! Pelajar!
                <p>
                    こんにちは！ 学生！
                </p>
            </h1>
        </section>
        <section class="form sections">
            <h1>Masuk Sebagai Pelajar</h1>
            <p>Belum memiliki akun? <a id="sign-up" href="./student_sign_up.php">Daftar!</a></p>
            <form class="forms-container" name="form_sign_in" action="../classroom/class.php" method="POST" onsubmit="">
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
                    <!-- Password -->
                    <div class="password-container">
                        <div class="label-container">
                            <h4>
                                <label for="password">Password</label>
                            </h4>
                        </div>
                        <div class="input-box">
                            <input type="password" name="password" onkeypress="checkPassword()"; id="password"
                                placeholder="Karakter dan Angka Acak" />

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
                </div>
                <div class="submit-button-container">
                    <div class="create-account-box">
                        <button id="create-account" type="submit">
                            <p>
                                <img src="../../../images/icons/Log in.svg" alt="Login" id="login-icon">
                                Masuk!
                            </p>
                        </button>
                    </div>
                    <div class="google-login-box">
                        <button id="google-login" type="button">
                            <p>
                                <img src="../../../images/icons/Google_ G _Logo.svg" alt="Google" id="google-G-icon">
                                Masuk dengan Google
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
