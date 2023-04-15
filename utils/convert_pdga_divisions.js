// Run this script in the browser console on the idiscgolf PDGA Export page
// https://idiscgolf.cz/turnaje/vysledky/export/NNNN
// to convert the MAx codes to the PDGA color codes

t = document.getElementsByTagName('table')
r = t[0].rows

function convert_code(ma_code) {
    switch (ma_code) {
        case 'MA1':
            return 'RAH'
            break
        case 'MA2':
            return 'RAE'
            break
        case 'MA3':
            return 'RAF'
            break
        case 'MA4':
            return 'RAG'
            break
        default:
            return ma_code
    }
}

for (let i = 0; i < r.length; i++) {
    const cell = r[i].cells[0];
    cell.innerHTML = convert_code(cell.innerHTML)    
}