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
    var sale = PlayerPrefs.GetInt("Day2SaleMade");
    if(sale ==3)
    {
       sellDone.enabled = true;
    	sellDoneBackground.enabled = true;
    }
}



