class Creature{
    constructor(x,y){
       this.x = x 
       this.y = y
      

    }
    startExperiment(){
        rect(this.x,this.y,50,50)
        
    }
    reproduce(){
        if(frameCount %40 == 0){
            var creaturePositionsX = [200,600,200,600,300,300]
            var creaturePositionsY = [100,100,200,200,150,150]
            var creatureSizeW = [20,40,60,50,70,80]
            var creatureSizeH = [20,40,60,50,70,80]
            
            randomNum1 = Math.round(random(0,6))
            randomNum2 = Math.round(random(0,6))
            colorNum = Math.round(random(0,7))
            lifeNum = Math.round(random(100,500))
            var temp_pos_x = creaturePositionsX[randomNum1]
            var temp_pos_y = creaturePositionsY[randomNum2]
            var temp_Width = creatureSizeW[randomNum1]
            var temp_Height = creatureSizeH[randomNum2]
            creature = createSprite(temp_pos_x,temp_pos_y,temp_Width,temp_Height)
            
            creature.lifetime = lifeNum
            creature.velocityX= movementNum
            creature.velocityY= movementNum

            switch(colorNum) {
                case 1: creature.shapeColor="pink";
                        break;
                case 2: creature.shapeColor="orange";
                        break;
                case 3: creature.shapeColor="yellow";
                        break;
                case 4: creature.shapeColor="blue";
                        break;
                case 5: creature.shapeColor="white";
                        break;
                case 6: creature.shapeColor="red";
                        break;
                default: break;
            }
            
            movementNum = Math.round(random(-0.5,0.5))

            creatures.push(creature)
            //console.log(creatures)
            drawSprites()
        }
    }

    mutate(){
        mutationNum = Math.random(0,6)
        sizeNum = Math.random(20,200)
        if(mutationNum === 4){
            creatures[i].width = 10
        }
        if(mutationNum === 6){
            creatures[i] = new Enemy(400,200)
        }
    }
    
    
}