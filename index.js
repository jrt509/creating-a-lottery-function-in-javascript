

const weights = {
    winning: 1,
    losing: 1000
    }
function lotteryGenerator(keys) {
    let emptyArray = [];
    Object.keys(weights).forEach(key => {
        for (let i = 0; i < weights[key]; i ++){
            emptyArray.push(key);
            
        }
    })
    return emptyArray = [Math.floor(Math.random() * emptyArray.length)]
   
}



lotteryGenerator(weights);

