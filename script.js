function carregar() {
    var container = document.getElementById('container')
    var imga = document.getElementById('imga')
    var boa = document.getElementById('boa')
    var body = document.getElementsByTagName('body')[0]
    var data = new Date()
    var hora = data.getHours()
    container.innerHTML = `<p>Agora são ${hora} horas!</p>`
    if (hora >= 0 && hora <= 12) {
        imga.src = 'fotomanha.png'
        boa.innerHTML = `Tenha um bom dia!`
        body.style.backgroundColor = 'rgb(240, 156, 77)'
    } else if (hora > 12 && hora <= 18) {
        imga.src = 'fototarde.png'
        boa.innerHTML = `Tenha uma boa tarde!`
        body.style.backgroundColor = 'rgb(233, 132, 38)'
    } else {
        imga.src = 'fotonoite.png'
        boa.innerHTML = `Tenha uma boa noite!`
        body.style.backgroundColor = 'rgb(37, 37, 37)'
    }
}