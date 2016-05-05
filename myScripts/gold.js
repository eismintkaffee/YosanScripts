#pragma strict
var playerGoldGui : UI.Text;
//var goldBackground: UI.Image;
//gold variables
public var gold : int = 500;
//var target : GameObject;

function Start () {
	playerGoldGui.enabled = true;
	//goldBackground.enabled = true;
}

function Update () {
    playerGoldGui.text = gold + " G";
    PlayerPrefs.SetInt("Gold", gold);
}