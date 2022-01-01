/*setup base vars*/
//player
var hackerName = "User";
var cyptoCoins = 0;
//items

/*load vars from cookies*/
var savedGame = JSON.parse(localStorage.getItem("mainFrameSave"));
//player
if (typeof savedGame.hackerName !== "undefined") hackerName = savedGame.hackerName;
if (typeof savedGame.cyptoCoins !== "undefined") cyptoCoins = savedGame.cyptoCoins;

//todo: add load game function so the game knows to update visuals