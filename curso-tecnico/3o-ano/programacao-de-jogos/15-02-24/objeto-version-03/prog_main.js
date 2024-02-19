let des = document.getElementById('des').getContext("2d");

console.log(des)

const quad = new Obj(10,10,100,100, 'orange')
const quad2 = new Obj(180,180,150,150, 'blue')

quad.des_obj()
quad2.des_quad()

const carro = new Obj(220, 400, 100, 200, 'white')

carro.desenha_carro()