var loop=[];

function increment() {
    

for(var count=0;count<=50;count++){
    if(count%3===0 && count%5===0){
        loop.push("fizzbuzz");

    }else if(count % 3===0){
        loop.push("fizz");

    }else{
        loop.push(count);
    }

}
console.log(loop);
}

increment();


