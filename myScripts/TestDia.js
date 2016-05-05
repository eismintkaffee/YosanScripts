#pragma strict
//var crossHair : UI.Image;
var speak : UI.Text;
function Start(){

speak.enabled = false;

}

function OnTriggerEnter(col : Collider) {
	if(col.gameObject.tag == "Player") {
speak.enabled = true;
	//crossHair.enabled = true;
//	
//	if(Input.GetKeyDown(KeyCode.E)){
//	speak.text = "Hi I would like to but this item";
//	}
//	}
	Debug.Log("In trigger");
}
}
function OnTriggerExit(col : Collider) {
	if(col.gameObject.tag == "Player") {
	//speak.text = "";
	speak.enabled = false;
	}
	Debug.Log("out trigger");
}