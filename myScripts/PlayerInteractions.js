#pragma strict
//var crossHair : UI.Image;
var textHints : UI.Text;
var item : GameObject[];
var itemName : String;
function OnTriggerEnter(col : Collider) {
	if(col.gameObject.tag == "Item"){
		item = GameObject.FindGameObjectsWithTag("Item");
		itemName = gameObject.name;
		Debug.Log(itemName);
	}
	
	//if(col.gameObject.tag == "Customer") {
	//CoconutThrower.canThrow=true;
	//crossHair.enabled = true;
	
	//if(!CoconutWin.haveWon) {
	if(Input.GetKey(KeyCode.E)){
		//if(col.gameObject.tag == "Item"){
		//item = GameObject.FindGameObjectsWithTag("Item");
		textHints.text = "Okay " + itemName;
		Debug.Log("e is pressed");
	}
	
	
	
	}

function OnTriggerExit(col : Collider) {
	if(col.gameObject.tag == "Customer") {
	//CoconutThrower.canThrow=false;
	//crossHair.enabled = false;
	textHints.text = "";
	}
}

//function Start () {
//
//}
//
//function Update () {
//
//}