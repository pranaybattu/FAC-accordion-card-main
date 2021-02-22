 document.querySelectorAll(".questions").forEach((questions) => questions.addEventListener("click", () => {
     if(questions.parentNode.classList.contains("active")) {
         questions.parentNode.classList.toggle("active")
     }
     else {
        document.querySelectorAll(".questions").forEach(questions => questions.parentNode.classList.remove("active"))

        questions.parentNode.classList.add("active")
     }

 }))