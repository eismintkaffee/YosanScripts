using UnityEngine;
using System.Collections;

public class testdialogue : MonoBehaviour
{
	public bool isClicked = false;
	public string name = "Some name";
	
	public void Start()
	{
			gameObject.AddComponent(typeof(BoxCollider));
	}
	
	public void OnMouseDown()
	{
		isClicked = true;
	}
	
	public void OnMouseUp()
	{
		isClicked = false;
	}
	
	public void OnGUI()
	{
		if(isClicked)
			GUI.Label(new Rect(5,5,400,100), "This is " + this.name);
	}
}