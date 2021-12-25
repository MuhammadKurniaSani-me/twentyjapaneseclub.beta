function chooseUser() {
    // container 
    const cards = document.querySelectorAll(".user-section");

    //  user type
    const student_id = document.getElementById("student").id;
    const teacher_id = document.getElementById("teacher").id;

    // console.log(card);
    cards.forEach( card => {
        let card_id = card.id;
        card.addEventListener("click", ()=> {
            // console.log(card_id);
            if (card_id == student_id) {
                window.location.href = "../account/student/student_sign_in.php";
            } else {
                window.location.href = "../account/teacher/teacher_sign_in.php";
            }
        });
    } );


};

chooseUser();