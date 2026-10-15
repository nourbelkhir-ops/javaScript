const fruitsrouge=["fraise","cerise","pomme"];

for (let fruit of fruitsrouge) 
    {
    console.log(`la  ${fruit} cest bon!`);
    } 

    fruitsrouge.forEach((fruit) => 
        console.log(`la  ${fruit} cest bon!`));
    
    const nombres= [12,3,4,10];
    let doubles=nombres.map(n=>n*2);
    console.log(doubles);
    let d2=nombres.forEach(n=>console.log(n*2));
    let paire=nombres.filter(n=>n%2==0);
    console.log(paire);

