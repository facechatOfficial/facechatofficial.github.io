$name=$_GET['name'];
              $score=$_GET['score'];   
              $f ="$name|$score\n";

              $test=fwrite($file, $f);
                  if($test) {
                  echo "ศว ใๆÝÞํส หศส ิฯ";       
                  }
                  else{
                  echo "ใิแํ ฯั หศส วใสํวา ๆฬๆฯ ฯวัฯ";
                  }
                  
                  
              }else{
              echo "ไวใ ๆ วใสํวา ใฺสศั ไใํศวิฯ";
              }
        }
        
        
         public function get_scores() {
               $s = "score.txt";
               $lines = file($s);
             $x=0;
               foreach($lines as $line) {
               $line=explode("|",$line);

              if($line[0]) {
              $name=$line[0];
              $score=$line[1];
              $x++;         
             echo "$x _ $name : $score";
 
                      
                      
                      
                  }else{
                    echo "err!";
                  }
              }
 
    
    
    
   
        }

              
}
 
?>