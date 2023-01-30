// klassisk funktion
function classic() {
    // gör något
    console.log('classic');
};

// användning av .then i funktion
function containsThen() {
    console.log('Först ett hej').then( () => data);
};


const data = 'data';

// async await
async function containsAsync() {
    let localData = await data
    console.log(localData);
};

classic();
containsThen();
containsAsync();