const cat = {
name: 'Murzik',
health: 10,
energy: 5,
mood: 10,
meal: 3,
clawSharpness: {
clawSize: 1,
Sharpness: 4,
},
eating: function() {
if (this.meal === 0) {
this.meal++
console.log('Мурзик поел')
} else if (this.meal === 0) {
this.mood--
console.log('Мурзик не смог найти добычу')
} else if (this.meal > 2) {
    console.log('Не сильно проголодался')
}
},
sleep: function() {
if (this.energy === 0) {
this.energy++
console.log('Мурзик поспал')
} else if (this.energy < 2) {
this.health--
console.log('Мурзику не хватило сна')
} else if (this.energy > 2) {
    console.log('У Мурзика хватает энергии')
}
},
play: function () {
if (this.mood === 0) {
this.mood++
console.log('Мурзик поиграл')
} else if (this.mood < 2) {
this.health--
 console.log('У Мурзика депрессия :(')
} else if (this.mood > 2) {
    console.log('Нормальное настроение')
}
},
stroll: function () {
if (this.mood === 0) {
this.mood++
console.log('Мурзик погулял')
}
},
sharpenСlaws: function () {
if (this.clawSharpness.Sharpness === 0) {
this.clawSharpness.Sharpness++
console.log('Мурзик поточил когти')
}
},
hurt: function () {
    if(this.health === 0){
    console.log('Плохое самочувствие')
} else if (this.health < 2) {
    console.log('Отравление')
    } else if (this.health > 2) {
        console.log('Самочувствие не ухудшилось')
    }
},
}

