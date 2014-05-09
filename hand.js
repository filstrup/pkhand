/*
  Straight flush > Four > Full > Flush > Straight > Three > Two pair > Pair > High card
*/

function generate_card(matrix)
{
  charset2 = "abcd";
  charset1 = "1234567890JQK";
  i;
  j;

  while(!result)
  {
    i = Math.floor(Math.random() * 13);
    j = Math.floor(Math.random() * 4);
    i = charset1.charAt(i);
    j = charset2.charAt(j);
    if(matrix[i][j] != 1)
    {
      result = true;
    }
  }

  if(j == "a")
    j = "spades";
  else if(j == "b")
    j = "hearts";
  else if(j == "c")
    j = "diamonds";
  else if(j == "d")
    j = "clubs";
  
  if(i == "0")
    i = "10";
  else if(i == "J")
    i = "11";
  else if(i == "Q")
    i = "12";
  else if(i == "K")
    i = "13";
  
  i = parseInt(i);
  
  return [i, j];
}



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
        hc = 0;
        for(int i = 1; !result; i++)
        {
          result = (i == 4);
          hc = i;
        }
        play = "Poker de " + hc;
        console.log(play);
      }

      else if (count == [0,1,1,0])
      {
        hc = 0;
        hc2 = 0;
        for(int i = 1; !result && !result2 ; i++)
        {
          if(i == 3)
          {
           result = true;
           hc = i; 
          }
          if(i == 2)
          {
           result2 = true;
           hc2 = i; 
          }
        }
        play = "Full de " + hc + "(trio) y " + hc2 + "pareja";
        console.log(play);
      }

      else if (count == [2,0,1,0])
      {
        hc = 0;
        for(int i = 1; !result; i++)
        {
          result = (i == 3);
          hc = i;
        }
        play = "Trio de " + hc;
        console.log(play);
      }

      else if (count == [1,2,0,0])
      {
        hc = 0;
        hc2 = 0;
        for(int i = 1; !result && !result2 ; i++)
        {
          if(i == 2)
          {
           result = true;
           hc = i; 
          }
          if(i == 2 && result)
          {
           result2 = true;
           hc2 = i; 
          }
        }
        play = "Parejas dobles " + hc + "y " + hc2;
        console.log(play);
      }

      else if (count == [3,1,0,0])
      {
        hc = 0;
        for(int i = 1; !result; i++)
        {
          result = (i == 2);
          hc = i;
        }
        play = "Pareja de " + hc;
        console.log(play);
      }

      break;

    case 6:
      if (count == [2,0,0,1])
      {
        hc = 0;
        for(int i = 1; !result; i++)
        {
          result = (i == 4);
          hc = i;
        }
        play = "Poker de " + hc;
        console.log(play);
      }
      else if (count == [1,1,1,0])
      {
        hc = 0;
        hc2 = 0;
        for(int i = 1; !result && !result2 ; i++)
        {
          if(i == 3)
          {
           result = true;
           hc = i; 
          }
          if(i == 2)
          {
           result2 = true;
           hc2 = i; 
          }
        }
        play = "Full de " + hc + "(trio) y " + hc2 + "pareja";
        console.log(play);
      }
      else if (count == [3,0,1,0])
      {
        hc = 0;
        for(int i = 1; !result; i++)
        {
          result = (i == 3);
          hc = i;
        }
        play = "Trio de " + hc;
        console.log(play);
      }
      else if (count == [2,2,0,0])
      {
        hc = 0;
        hc2 = 0;
        for(int i = 1; !result && !result2 ; i++)
        {
          if(i == 2)
          {
           result = true;
           hc = i; 
          }
          if(i == 2 && result)
          {
           result2 = true;
           hc2 = i; 
          }
        }
        play = "Parejas dobles " + hc + "y " + hc2;
        console.log(play);
      }
      else if (count == [4,1,0,0])
      {
        hc = 0;
        for(int i = 1; !result; i++)
        {
          result = (i == 2);
          hc = i;
        }
        play = "Pareja de " + hc;
        console.log(play);
      }
 
      break;

    case 7:
      if (count == [3,0,0,1])
      {
        hc = 0;
        for(int i = 1; !result; i++)
        {
          result = (i == 4);
          hc = i;
        }
        play = "Poker de " + hc;
        console.log(play);
      }
      else if (count == [2,1,1,0])
      {
        hc = 0;
        hc2 = 0;
        for(int i = 1; !result && !result2 ; i++)
        {
          if(i == 3)
          {
           result = true;
           hc = i; 
          }
          if(i == 2)
          {
           result2 = true;
           hc2 = i; 
          }
        }
        play = "Full de " + hc + "(trio) y " + hc2 + "pareja";
        console.log(play);
      }
      else if (count == [4,0,1,0])
      {
        hc = 0;
        for(int i = 1; !result; i++)
        {
          result = (i == 3);
          hc = i;
        }
        play = "Trio de " + hc;
        console.log(play);
      }
      else if (count == [3,2,0,0])
      {
        hc = 0;
        hc2 = 0;
        for(int i = 1; !result && !result2 ; i++)
        {
          if(i == 2)
          {
           result = true;
           hc = i; 
          }
          if(i == 2 && result)
          {
           result2 = true;
           hc2 = i; 
          }
        }
        play = "Parejas dobles " + hc + "y " + hc2;
        console.log(play);
      }
      else if (count == [5,1,0,0])
      {
        hc = 0;
        for(int i = 1; !result; i++)
        {
          result = (i == 2);
          hc = i;
        }
        play = "Pareja de " + hc;
        console.log(play);
      }

      break;
 
    default:
      error;
      break;
  }
}
