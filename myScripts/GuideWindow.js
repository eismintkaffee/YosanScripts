#pragma strict

var button : GameObject;
var panel : GameObject;

function Start () 
{
    button.SetActive(true);
    panel.SetActive(true);
}

function Update () 
{

}

function closeWindow()
{
    panel.SetActive(false);
    button.SetActive(false);
}