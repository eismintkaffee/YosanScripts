#pragma strict

var cam1 : Camera;

var overviewPanel : GameObject;
var overviewDialog1 : GameObject;
var overviewDialog2 : GameObject;
var overviewDialog3 : GameObject;
var overviewDialog4 : GameObject;
var overviewDialog5 : GameObject;
var okbutton1 : GameObject;

var dialogState = 0;

function Start () 
{
    overviewPanel.SetActive(true);
}

function Update () 
{
    if(dialogState == 0)
    {
        cam1.enabled = true;
        overviewPanel.SetActive(true);
         overviewDialog1.SetActive(true);
          overviewDialog2.SetActive(false);
           overviewDialog3.SetActive(false);
         overviewDialog4.SetActive(false);
        overviewDialog5.SetActive(false);
       
    }
    if(dialogState == 1)
    {
           cam1.enabled = true;
        overviewPanel.SetActive(true);
           overviewDialog1.SetActive(false);
          	overviewDialog2.SetActive(true);
           overviewDialog3.SetActive(false);
         overviewDialog4.SetActive(false);
        overviewDialog5.SetActive(false);
        Debug.Log(overviewDialog2);
    }
    if(dialogState == 2)
    {
                cam1.enabled = true;
        overviewPanel.SetActive(true);
        overviewDialog1.SetActive(false);
          overviewDialog2.SetActive(false);
           overviewDialog3.SetActive(true);
         overviewDialog4.SetActive(false);
        overviewDialog5.SetActive(false);
    }
    if(dialogState == 3)
    {
    cam1.enabled = true;
        overviewPanel.SetActive(true);
        overviewDialog1.SetActive(false);
          overviewDialog2.SetActive(false);
           overviewDialog3.SetActive(false);
         overviewDialog4.SetActive(true);
        overviewDialog5.SetActive(false);
      
       
    }
    if(dialogState == 4)
    {
  cam1.enabled = true;
        overviewPanel.SetActive(true);
         overviewDialog1.SetActive(false);
          overviewDialog2.SetActive(false);
           overviewDialog3.SetActive(false);
         overviewDialog4.SetActive(false);
        overviewDialog5.SetActive(true);
        

    }
    if(dialogState == 5)
    {
        Application.LoadLevel("PowerSell Intro");
    }
}
function AdvanceDialog()
{
    dialogState++;
}
