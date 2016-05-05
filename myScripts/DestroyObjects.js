#pragma strict
var item : GameObject;
var itemName : String;
function OnTriggerEnter(col : Collider) {
	if(col.gameObject.tag == "Item"){
		item = GameObject.FindGameObjectWithTag("Item");
		itemName = item.gameObject.name;
		
	}      
     {
         Destroy(gameObject);
         
     }        
}

