#pragma strict

var sellDone : UI.Text;
var sellDoneBackground : UI.Image;

function Start () 
{
sellDone.enabled = false;
    	sellDoneBackground.enabled = false;
}

function Update () 
{
    var sale = PlayerPrefs.GetInt("Day3SaleMade");
    if(sale == 1)
    {
       sellDone.enabled = true;
    	sellDoneBackground.enabled = true;
    }
}