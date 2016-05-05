#pragma strict

var target : Transform;

function Start () 
{

}
function Update () 
{
 
}
// Changes the scene to the cave if the character enters the portal
function OnTriggerEnter (col : Collider) 
{
    if(col.gameObject.tag == "Player") 
    {
        Application.LoadLevel("Cave1");
    }
}