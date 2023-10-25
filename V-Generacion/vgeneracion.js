const decodUrl = (message, serieNums) => {
    const formatMessage = message.toLowerCase()
        .normalize('NFD')
        .replace(/\s/g, '')
        .replace(/[\u0300-\u036f]/g, '');
    
    let urlArray = [];
    
    for (let i = 0; i < serieNums.length; i++) {
        urlArray[serieNums[i]] = formatMessage[i];
    }
    
    let urlDecrypt = urlArray.join('');
    return urlDecrypt;
}

console.log(decodUrl('Cómo será dar con Nekgikis V...',
    [23, 24, 25, 18, 19, 5, 6, 7, 20, 15, 17, 8, 10, 11, 4, 3, 12, 2, 16, 14, 9, 21, 0, 1, 13, 22]));
