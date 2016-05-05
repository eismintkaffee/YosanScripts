#pragma strict
var playerGoldGui : UI.Text;
//var goldBackground: UI.Image;
//gold variables
public var gold;
//var target : GameObject;

function Start () {
	playerGoldGui.enabled = true;
	gold = PlayerPrefs.GetInt("Gold");
	//goldBackground.enabled = true;
}

function Update () {
	gold = PlayerPrefs.GetInt("Gold");
    playerGoldGui.text = gold + " ";
}