#pragma strict

var target : Transform;
 
function Update () {
 
}
 
function OnTriggerEnter (col : Collider) {
 
    if(col.gameObject.tag == "teleportUpstairs") {
        this.transform.position = target.position;
    }
}