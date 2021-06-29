import setUrl from '../assets/test.csv';
import minv from '../assets/masterInventory.csv';
var  ncount = 0;
export async function getData() {
    const dataS = [];
    const row = []
    const statCount = []
    const statusA = []
    const uniqueStatus = []
    const resp = await fetch(setUrl);
    const rev = await resp.text();
    const col = rev.split('\n');
    ncount = col.length;
    for (var i = 0; i < col.length; i++) {
        row.push(col[i]);
    }
    for (let i = 0; i < row.length; i++) {
        const stat = row[i].split(',');
        statusA.push(stat[1]);
        if (!uniqueStatus.includes(stat[1])) {
            uniqueStatus.push(stat[1]);
        }
    }
    uniqueStatus.shift();
    for (let i = 0; i < uniqueStatus.length; i++) {
        var count = 0
        for (let j = 0; j < statusA.length; j++) {
            if (uniqueStatus[i] === (statusA[j])) {
                count++;
            }
        }
        statCount[i] = count;
    }
    dataS.push(uniqueStatus);
    dataS.push(statCount);
    return dataS
}

export async function getDataDough(){
    const resp = await fetch(minv);
    const rev = await resp.text();
    const col = rev.split('\n');
    const count = col.length;
    return [count,ncount]
    
}