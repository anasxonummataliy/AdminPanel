const form = document.getElementById('login');

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = form.querySelector('input[type="text"]').value;
    const password = form.querySelector('input[type="password"]').value;

    try {
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        });

        const data = await response.json();
        console.log("Server javobi:", data);

        if (data.message === "True") { 
            window.location.href = "../public_html/admin/secret.html";
        } else {
            console.log("Xatolik:", data.message);
            alert("Xatolik: Email yoki parol xato");
        }

    } catch (error) {
        console.log(error)
    }
});