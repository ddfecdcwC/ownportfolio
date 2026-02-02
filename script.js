

// Scroall reveal 

window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(e => {
        if (e.getBoundingClientRect().top < innerHeight - 100) e.classList.add("active");
    });
       document.getElementById("progress").style.width =
        (scrollY / (document.body.scrollHeight - innerHeight)) * 100 + "%";
});




// EmailJS Contact Form

        // 🔑 EmailJS init
        emailjs.init("gn-SQVP3TlVKzq82B");

        const form = document.getElementById("contact-form");
        const status = document.getElementById("status");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            status.textContent = "Sending...";
            status.className = "text-yellow-500 text-[0.9rem] rounded p-1 bg-white text-center text-[10px] mt-4 m-auto justify-center w-1/2 ";

            emailjs
                .sendForm(
                    "service_xhk3bxr",
                    "template_a6xswp7",
                    form
                )
                .then(
                    function () {
                        status.textContent = "Message sent successfully✅";
                        status.className = "text-green-500 text-[0.9rem] rounded p-1 bg-white text-center text-[10px] mt-4 m-auto justify-center w-1/2 ";
                        form.reset();
                    },
                    function (error) {
                        console.log(error);
                        status.textContent = "Failed to send message ❌";
                        status.className = "text-red-500 text-[0.9rem] rounded p-1 bg-white text-center text-[10px] mt-4 m-auto justify-center w-1/2 ";
                    }
                );
        });
  