#pragma strict

var keyMenu : UI.Text;

 
function Start() {
    keyMenu.enabled = true;
    
}
 
function Update() {
 
    if (Input.GetKeyDown(KeyCode.K)) {
        keyMenu.enabled = !keyMenu.enabled;
    }
}