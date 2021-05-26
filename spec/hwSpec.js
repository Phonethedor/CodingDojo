//Devuelve la suma de 1 a N. Por ejemplo,  Sum1toN(3) devolverá la suma de 1+2+3, la cual es 6
//sum1toN(255) devuelve la suma de todos los números de 1 a 255
function Sum1toN(n){
    if(typeof(n)=="number"){
        let sum = 0;
        for(let c = 1; c<=n; c++){
            sum +=c;
        }
        return sum;
    }else{
        return "ingrese un numero"
    }
}
//devuelve la suma del primer y último número en el array
function sumFirstLast(arr){
    let first = arr[0];
    let last = arr[arr.length-1];
    return first+last;
}

//devuelve la suma del mayor y el menor numero en el array
function sumMinMax(arr){
    let min = arr[0];
    let max = arr[0];
    for(let x = 0; x<arr.length;x++){
        if(arr[x]<min){
            min = arr[x];
        }
        if(arr[x]>max){
            max = arr[x];
        }
    }
    return min + max;
}
    
describe("Sum1toN", function() { 
    it("should return 3 when we pass 2 as an argument", function() { 
        expect(Sum1toN(2)).toEqual(3); 
    }); 
    it("should return 6 when we pass 3 as an argument", function() { 
        expect(Sum1toN(3)).toEqual(6); 
    }); 
    it("should return 10 when we pass 4 as an argument", function() { 
        expect(Sum1toN(4)).toEqual(10); 
    }); 
    it("should return 15 when we pass 5 as an argument", function() {
        expect(Sum1toN(5)).toEqual(15); 
    });
});
    
describe("sumFirstLast", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(sumFirstLast([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(sumFirstLast([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(sumFirstLast([-6,23,3,-4])).toEqual(-10); 
    }); 
    it("should return 4 when we pass [1,2,3] as an argument", function() {
        expect(sumFirstLast([1,2,3])).toEqual(4);
    });
});

describe("sumMinMax", function(){
it("should return 4 when we pass [1,2,3] as an argument", function(){
    expect(sumMinMax([1,2,3])).toEqual(4);
});
}) 