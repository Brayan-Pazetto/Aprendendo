let p = document.querySelector('p')
let input = document.querySelector('input')

const contacts = [
    {name: 'Brayan', number: '(54) 99183-5038' },
    {name: 'Braya', number: '(54) 99183-5938' },
    {name: 'Bryan', number: '(54) 99183-5538' },
    {name: 'Bayan', number: '(54) 99183-5138' },
]

function search(){
    
for(let i = 0; i < contacts.length ; i++){

if(input.value === contacts[i].name){

p.innerHTML = `Nome encontrado, contato:${ contacts[i].number}`

}
if(input.value === contacts[i].number){

    p.innerHTML = `Contato encontrado, Nome:${ contacts[i].name}`
    
    }
}

}