class Sentence{
    constructor(data){
        this.data = data;
    }
    wordCount(){
        return this.data.split(' ').length;
    }
    hasLetter(ltr){
       const found = this.data.split('').find(function(char){
        return char === ltr;
       });
       return found !== undefined;
    }
    numberOfTimes(ltr){
        return this.data
        .split('')
        .filter(function(char){
            return char === ltr;
        }).length;

    }
}
const s1 = new Sentence('a quick brown fox jumped over the fence');
console.log(s1.wordCount());
console.log(s1.hasLetter('x'));
console.log(s1.hasLetter('z'));
console.log(s1.numberOfTimes('e'));