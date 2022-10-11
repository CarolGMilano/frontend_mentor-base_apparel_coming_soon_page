let btn = document.querySelector('.btn__submit');
let email = document.querySelector('.informacoes__email');
let msg = document.querySelector('.msg');
let erro = document.querySelector('.icone__erro');

function sumirElementos () {
    msg.innerHTML = ``;
    msg.style.color = 'var(--vermelho_pastel)';
    erro.classList.remove('aparecer');
    email.classList.add('borda__normal');
    email.classList.remove('borda__erro');
}

btn.addEventListener('click', function () {
    if (email.value == "") {
        msg.innerHTML = `<p>Please, provide some email</p>`;
        erro.classList.add('aparecer');
        email.classList.remove('borda__normal');
        email.classList.add('borda__erro');

        setTimeout(sumirElementos, 4000);
    } else {
        if (email.checkValidity()) {
            msg.innerHTML = `<p>Thank you for provide your email.</p>`;
            msg.style.color = '#40E0D0';
            email.value = ``;

            setTimeout(sumirElementos, 6000);
        } else {
            msg.innerHTML = `<p>Please, provide a valid email</p>`;
            erro.classList.add('aparecer');
            email.classList.remove('borda__normal');
            email.classList.add('borda__erro');

            setTimeout(sumirElementos, 6000);
        }
    }
})