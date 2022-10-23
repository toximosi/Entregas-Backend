process.on('message', (cant=10000, max=9) => { 
    let randomNum;
    const randoms = [];
    for (let i = 0; i < cant; i++) { 
        randomNum = Math.random(Math.ceil(Math.random() * max));
        randoms.push(randomNum);
    }
    process.send(randoms);
})


