/*save game*/
function saveGame(){
    var gameSave = {
        /*player*/
        hackerName: hackerName,
        cyptoCoins: cyptoCoins
    }
    localStorage.setItem("mainFrameSave", JSON.stringify(gameSave));
}
