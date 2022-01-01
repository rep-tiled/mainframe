/*setup base vars*/
//player
var hackerName = "User";
var cyptoCoins = 0;
//items

/*load vars from cookies*/
var savedGame = JSON.parse(localStorage.getItem("mainFrameSave"))
if(savedGame !== null){
    //player
    hackerName = savedGame.hackerName
    cyptoCoins = savedGame.cyptoCoins
}

//todo: add load game function so the game knows to update visuals