let number01 = [1, 2, 3, 4, 5]
let number02 = []
let index = 0
let enemys = ['enemy01', 'enemy02', 'enemy03', 'enemy04']
let shots = ['shot01', 'shot02', 'shot03', 'shot04']

number01.forEach((en) => {
    console.log(enemys.indexOf(en))
    shots.forEach(tr => {
        console.log(shots.indexOf(tr))
    });
})