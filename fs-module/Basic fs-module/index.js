const fs = require('fs');

/*
//write a file

async function writeFileAsync(){
    try{
        await fs.writeFileSync('example.text', 'MERN B07');

    }
    catch(error){
        console.error('Error writing file:', error);
    }
}


writeFileAsync();

*/


// read a file


/* async function readFileAsync(){
    try{
        const data = await fs.readFileSync('example.text', 'utf8');
        console.log(data);
    }
        catch(error) {
            console.error('Error reading file:', error);
        }
}

readFileAsync(); */



/* // FIle rename 
async function renameFileAsync(){
    try{
        const data = await fs.renameSync('example.text', 'new.text');
        console.log(data);
    }
        catch(error) {
            console.error('Error reading file:', error);
        }
}

renameFileAsync(); */



// FIle update 
async function updateFileAsync(){
    try{
       /*  const data = await fs.writeFileSync('new.text', 'Mern Stack Batch 07'); */

       const data = await fs.appendFileSync('new.text', '\nBatch 07');
        console.log(data);
    }
        catch(error) {
            console.error('Error reading file:', error);
        }
}

updateFileAsync();


