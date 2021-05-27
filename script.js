function verificar() {
    var data = new Date();
    var ano = data.getUTCFullYear();
    var fAno = window.document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fSex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', ('foto'))

        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 13) {
                img.setAttribute('src', 'img\\babyboy.png');
            } else if (idade >= 14 && idade <= 21) {
                img.setAttribute('src', 'img\\youngboy.png');
            } else if (idade <= 50) {
                img.setAttribute('src', 'img\\adultmen.png');
            } else {
                img.setAttribute('src', 'img\\oldmen.png');
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 13) {
                img.setAttribute('src', 'img\\babygirl.png');
            } else if (idade >= 14 && idade <= 21) {
                img.setAttribute('src', 'img\\younggirl.png');
            } else if (idade >= 22 && idade <= 50) {
                img.setAttribute('src', 'img\\adultwoman.png');
            } else {
                img.setAttribute('src', '\img\\oldwoman.png');
            }
        }

        res.style.textAlign = 'center';

        if (idade > 1) {
            res.innerHTML = `Você é um ${genero} com ${idade} anos. </br>`;

        } else {

            res.innerHTML = `Você é um ${genero} com ${idade} ano. </br>`

        }

        if (idade > 110) {
            img.setAttribute('src', 'img\\turtle.png');
            res.innerHTML = `Você é uma tartaruga com ${idade} anos :) </br>`;
        }

        res.appendChild(img);

    }

}