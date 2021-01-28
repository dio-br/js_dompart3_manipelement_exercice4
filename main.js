let competences = {
    HTML: '71%',
    CSS: '95%',
    JS : '50%',
    React: '35%',
    Laravel: '100%'
}


let h2 = document.querySelectorAll('#liste-competences>h2')

console.log(h2);


let i = 0
for (let el in competences) {
    let titre = h2[i]
    titre.innerText += `: ${competences[el]}`

    let competenceLenght = competences[el].length 
    let verif = competences[el].substr(0, competenceLenght -1 )

    if (verif > 50 && verif < 100  && verif != 50) {
        titre.style.backgroundColor = 'green'
        titre.style.color = 'white'
    } else if (verif == 100){
        titre.style.backgroundColor = 'gold'
    } else if (verif < 50){
        titre.style.backgroundColor = 'red'
    }
    titre.style.width = `${verif}%`
    i++
}

