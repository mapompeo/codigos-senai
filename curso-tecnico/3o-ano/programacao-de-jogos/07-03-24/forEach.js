// exemplo do laço ForEach com array para o game
cont_enemy = -1
cont_tiro = -1
let enemy = ['inimigo 1', 'inimigo 2', 'inimigo 3', 'inimigo 4']
let tiro = ['tiro 1 ', 'tiro 2', 'tiro 3', 'tiro 4'] 

enemy.forEach((en)=>{
    console.log('inimigo = ',enemy.indexOf(en))
    cont_enemy +=1
    tiro.forEach((tr)=>{
        cont_tiro +=1
        console.log('tiro = ',tiro.indexOf(tr))
        if(cont_enemy == cont_tiro){
            enemy.pop()
            console.log(enemy)
        }
    })
    cont_tiro = -1
})