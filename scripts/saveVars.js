/*save game*/
function saveGame(){
    var gameSave = {
        /*player*/
        hackerName: User,
        cyptoCoins: cyptoCoins
    }
    localStorage.setItem("mainFrameSave", JSON.stringify(gameSave));
}
