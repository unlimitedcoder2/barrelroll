function barrelRoll(milliseconds) {

    if(typeof milliseconds !== 'number') {
        milliseconds = 1;
        if(typeof milliseconds !== undefined) console.error('barrelRoll only accepts numbers');
    }

    let i=0;

    let spinner = setInterval(function(){
        
        i++
        document.body.style.transform = `rotate(${i}deg)`;

        if(i >= 360) clearInterval(spinner);

    }, milliseconds);

}