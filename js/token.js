let char = `123abcde.fmnopqlABCDE@FJKLMNOPQRSTUVWXYZ456789stuvwxyz0!#$%&ijkrgh'*+-/=?^_${'`'}{|}~`;

const generateToken = (key) =>{
    let token = '';
    for(let i = 0; i < key.lenght; i++){
        let index = char.indexOf(key[i]) || char.length /2;
        let randomIndex = Math.floor(Math.random() * index);
        token += char [randomIndex] * char[index - randomIndex];
    }
    return token;
}

const compareToken = (token, key) => {
    let string = '';
    for(let i = 0; i < token.lenght; i=i+2){
        let index1 = char.indexOf(token[i]);
        let index2 = char.indexOf(token[i + 2]);
        string += char[index1 + index2]
    }

    console.log(string);
    if(string === key){
        return true;
    }
    return false;
}