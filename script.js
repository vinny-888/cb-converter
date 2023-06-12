const toHumanBtn = document.getElementById('toHuman');
const toCyberBtn = document.getElementById('toCyber');

// CyberBroker units in seconds
const unitsInSec = {
    cycle: 100 * 4 * 6 * 60 * 60,
    cirxit: 4 * 6 * 60 * 60,
    syx: 6 * 60 * 60,
    stax: 60 * 60,
    blox: 60,
    tix: 1
};

// Human units in seconds
const humanInSec = {
    years: 365 * 24 * 60 * 60,
    days: 24 * 60 * 60,
    hours: 60 * 60,
    seconds: 1
};

function convertToHuman() {
    let totalSec = 0;
    for (let unit in unitsInSec) {
        const value = parseInt(document.getElementById(unit).value) || 0;
        totalSec += value * unitsInSec[unit];
    }

    document.getElementById('years').value = Math.floor(totalSec / humanInSec.years);
    totalSec %= humanInSec.years;
    document.getElementById('days').value = Math.floor(totalSec / humanInSec.days);
    totalSec %= humanInSec.days;
    document.getElementById('hours').value = Math.floor(totalSec / humanInSec.hours);
    totalSec %= humanInSec.hours;
    document.getElementById('seconds').value = totalSec;
}

function convertToCyber() {
    let totalSec = 0;
    for (let unit in humanInSec) {
        const value = parseInt(document.getElementById(unit).value) || 0;
        totalSec += value * humanInSec[unit];
    }

    document.getElementById('cycle').value = Math.floor(totalSec / unitsInSec.cycle);
    totalSec %= unitsInSec.cycle;
    document.getElementById('cirxit').value = Math.floor(totalSec / unitsInSec.cirxit);
    totalSec %= unitsInSec.cirxit;
    document.getElementById('syx').value = Math.floor(totalSec / unitsInSec.syx);
    totalSec %= unitsInSec.syx;
    document.getElementById('stax').value = Math.floor(totalSec / unitsInSec.stax);
    totalSec %= unitsInSec.stax;
    document.getElementById('blox').value = Math.floor(totalSec / unitsInSec.blox);
    totalSec %= unitsInSec.blox;
    document.getElementById('tix').value = totalSec;
}

toHumanBtn.addEventListener('click', convertToHuman);
toCyberBtn.addEventListener('click', convertToCyber);
