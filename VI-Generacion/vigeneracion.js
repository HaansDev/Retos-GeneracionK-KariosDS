class Decrypt {
    constructor(encriptedMessage, gridPosBase) {
        this.encriptedMessage = encriptedMessage;
        this.gridPosBase = gridPosBase;
    }
    
    decrypt() {
        const gridMessage = [];
        let lineaGridMessage = [];
        const arrayDecrypted = [];
        let grid = [];
        let gridLinea = [];
        const arrayMessage = Array.from(this.encriptedMessage);
        const sideSize = 6;
        
        for (let li = 0; li < sideSize; li++) {
            for (let col = 0; col < sideSize; col++) {
                const valor = [col + 1, li + 1];
                gridLinea.push(valor);
            }
            grid.push(gridLinea);
            gridLinea = [];
        }
        
        for (let giros = 0; giros < 4; giros++) {
            arrayMessage.forEach((item, i) => {
                if (lineaGridMessage.length < sideSize) {
                    lineaGridMessage.push(item);
                } else {
                    gridMessage.push(lineaGridMessage);
                    lineaGridMessage = [item];
                }
            });
            
            grid.forEach((gridRow, j) => {
                gridRow.forEach((gridCell, k) => {
                    this.gridPosBase.forEach((base) => {
                        if (
                            gridCell[0] === base[0] &&
                            gridCell[1] === base[1]
                        ) {
                            arrayDecrypted.push(gridMessage[j][k]);
                        }
                    });
                });
            });
            
            if (arrayDecrypted.length < arrayMessage.length) {
                grid.reverse();
                
                for (let n = 0; n < grid.length; n++) {
                    for (let p = 0; p < n; p++) {
                        const temp = grid[n][p];
                        grid[n][p] = grid[p][n];
                        grid[p][n] = temp;
                    }
                }
            }
        }
        
        return arrayDecrypted.join("");
    }
}
const gridPosBase = [
    [1, 1],[4, 1],[2, 2],
    [6, 2],[5, 3],[1, 4],
    [4, 4],[3, 5],[6, 5]
];
const encriptedMessage = 'lróaon. sg sdersoildsu.:.cc kiomamii';

const decryptInstance = new Decrypt(encriptedMessage, gridPosBase);
const decryptedMessage = decryptInstance.decrypt();

console.log(decryptedMessage)