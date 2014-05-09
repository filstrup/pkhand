function hand (list){

  cards12 = new int[13];
  for(int i = 0; i < 13; i++)
    cards12[i] = 0;

  cards3 = new int[4];
  for(int i = 0; i < 4; i++)
    cards3[i] = 0;

  for(int i = 0; i < list.length; i++){
    cards12[i] += 1;
    cont = cards12[list[i][1]];
    cards12[list[i][1]] += 1;
    increase3(cont);
  }

  bestplay(cards12, cards3);
}


function increase3(number){
  switch(number){

    case 0:
      cards3[0] += 1;
      break;

    case 1:
      cards3[0] -= 1;
      cards3[1] += 1;
      break;

    case 2:
      cards3[1] -= 1;
      cards3[2] += 1;
      break;

    case 3:
      cards3[2] -= 1;
      cards3[3] += 1;
      break;

    default:
      error;
      break;
  }
}

function bestplay(cards, count){
  switch(cards[0]){
    case 5:
      if (count == [1,0,0,1])
      {
        
      }
      else if (count == [0,1,1,0])
      {
        
      }
      else if (count == [2,0,1,0])
      {
        
      }
      else if (count == [1,2,0,0])
      {
        
      }
      else if (count == [3,1,0,0])
      {
        
      }

      break;

    case 6:
      if (count == [2,0,0,1])
      {
        
      }
      else if (count == [1,1,1,0])
      {
        
      }
      else if (count == [3,0,1,0])
      {
        
      }
      else if (count == [2,2,0,0])
      {
        
      }
      else if (count == [4,1,0,0])
      {
        
      }
 
      break;

    case 7:
      if (count == [3,0,0,1])
      {
        
      }
      else if (count == [2,1,1,0])
      {
        
      }
      else if (count == [4,0,1,0])
      {
        
      }
      else if (count == [3,2,0,0])
      {
        
      }
      else if (count == [5,1,0,0])
      {
        
      }

      break;
 
    default:
      error;
      break;
  }
}
