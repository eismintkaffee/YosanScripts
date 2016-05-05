#pragma strict

var cam1 : Camera;
var cam2 : Camera;
//var cam3 : Camera;
 
function Start() {
    cam1.enabled = true;
    cam2.enabled = false;
    //cam3.enabled = false;
    
}
 
function Update() {
 
    if (Input.GetKeyDown(KeyCode.Tab)) {
        cam1.enabled = !cam1.enabled;
        cam2.enabled = !cam2.enabled;
    }
 	if (Input.GetKeyDown(KeyCode.Z)){
 		cam1.enabled = !cam1.enabled;
 		//cam3.enabled = !cam3.enabled;
 	}
}