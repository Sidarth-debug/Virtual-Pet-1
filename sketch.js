//Create variables here
var dog,dogImg,happyDog,database,foodS,foodStock;
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
  
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();
  foodStock = database.ref('/');
  foodStock.on("value",readStock);
  dog = createSprite(200,200,50,50);
  dog.addImage(dogImg);
}


function draw() {  
background(46,139,87);
  drawSprites();
  textSize(20);
  fill("white");
  text("Food Stock" + foodStock,10,50);
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    food : x
  })
  
}


