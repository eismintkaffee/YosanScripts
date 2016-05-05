#pragma strict

var target : Transform;
 
function Update () {
 
}
 
function OnTriggerEnter (col : Collider) {
 
    if(col.gameObject.tag == "teleportDownstairs") {
        this.transform.position = target.position;
    }
}