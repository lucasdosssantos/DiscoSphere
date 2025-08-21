//Conectar com a API utilizando o FETCH
function apertar1() {
    fetch('dados.json').then(resposta => resposta.json()).then(corpo => {
        console.log(corpo)
    
        //FRONT_END
        document.getElementById('imagem').innerHTML = corpo.img;
        document.getElementById('nome').innerHTML = corpo.nome;
        document.getElementById('disco').innerHTML = corpo.album;
        document.getElementById('estilo').innerHTML = corpo.style;
        document.getElementById('preco').innerHTML = corpo.price;
    })
}

function apertar2() {
    fetch('dados.json').then(resposta => resposta.json()).then(corpo => {
        console.log(corpo)
    
        //FRONT_END
        document.getElementById('imagem').innerHTML = corpo.img2;
        document.getElementById('nome').innerHTML = corpo.nome2;
        document.getElementById('disco').innerHTML = corpo.album2;
        document.getElementById('estilo').innerHTML = corpo.style2;
        document.getElementById('preco').innerHTML = corpo.price2;
        
    })
}

function apertar3() {
    fetch('dados.json').then(resposta => resposta.json()).then(corpo => {
        console.log(corpo)
    
        //FRONT_END

        document.getElementById('imagem').innerHTML = corpo.img3;
        document.getElementById('nome').innerHTML = corpo.nome3;
        document.getElementById('disco').innerHTML = corpo.album3;
        document.getElementById('estilo').innerHTML = corpo.style3;
        document.getElementById('preco').innerHTML = corpo.price3;
        
    })
}

function apertou() {
    let nomeDisco = document.getElementById('disco').innerHTML;
    alert(`Você comprou ${nomeDisco}`);
}