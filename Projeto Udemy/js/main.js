/*let botao = document.querySelector('.menu-principal__btn');
let menuPrincipal = document.querySelector('.menu-principal');
botao.addEventListener("click", abreFechaMenu);

function abreFechaMenu(evento){
    menuPrincipal.classList.toggle('menu-principal--fechado');
}*/
//jquery
$(document).ready(function(){
    //Botão do menu
    $('.menu-principal__btn').click(function(){
        $('.menu-principal').toggleClass('.menu-principal--fechado')
    });
    //Slide depoimentos
    $('.depoimentos__caixa').slick({
        autoplay: true, 
        arrows: false,
        dots: true
    });

    //Validação do campo de contato
    $('.formulario').validate({
        rules: {
            nome: 'required',
            email: {
                required: true,
                email: true
            },
            mensagem: 'required'
        },
        messages: {
            nome: "Campo Obrigatório",
            email: {
                required: 'Campo Obrigatório',
                email: 'Informe um e-mail válido'
            },
            mensagem: "Campo Obrigatório"
        }
    });
});