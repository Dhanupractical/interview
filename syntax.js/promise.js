const myPromise = new Promise((resolve, reject)=>{
    let x=0;

    if(x===0){
        resolve('yes resolved')
    } else {
        reject('not yet resolved, error occured')
    }
})

myPromise.then((data)=>{console.log(data)}).catch((error)=>console.log('catch error', error))
// or
myPromise.then((data)=>{console.log(data)}, (error)=>{console.log(error)}) 