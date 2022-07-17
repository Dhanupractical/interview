function personFactory(name){
    return {
        talk(){
            return `hello my name is ${name}`
        }
    }
}

const me = personFactory( 'dhanu' )
console.log(me.talk())




// application
// function createElement(type, text, color){
//     const el =document.createElement(type)
//     el.innerText = text
//     el.style.color = color
//     document.body.append(el)
//     return {
//         el,
//         setText(text){
//             el.innerText = text
//         },
//         setColor(color){
//             el.style.color = color
//         }
//     }
// }

// const h1 = createElement('h1', 'hey guys', 'red')
// h1