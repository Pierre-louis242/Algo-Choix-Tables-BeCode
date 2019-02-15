
window.onload = () => {

    let js = ["ARMAND Djedou Arnaud", "BINON Frédéric", "BROODCOORENS Maxime", "MANSORI Magid Jbari", "MONDT Alexandre", "PICARD Pierre-Louis", "RENDA Elisa", "RIPET Julien", "AFKIR Younes", "BAQUET Mathilde", "BIALAIS Emilie", "BOTTA Maxime", "CCOYLLO Jussi", "GAINA Corneliu", "GOLDESTEIN Andrés", "MASSART François", "MEURANT Matthieu", "MOL Estelle", "RODRIGUEZ Amalia"];
    let table = [[" bite"],["2 "],["3 "]]
    let php = table[0];
    let html = table[1];
    let css = table[2];
    let buttonRdm = document.getElementById("buttonRdm");
    let noMore=true;


    function randomize(){
      for (i=0; i<3; i++){
        for (j=0; j<5; j++){
          let random=Math.floor(Math.random()*js.length);
          console.log(random);
          table[i][j]=js[random];
          js.splice(random,1);
        };
      };
      console.log(table);
      console.log(js);
      noMore=false;
    }

    buttonRdm.addEventListener("click", function(e){
      e.preventDefault();
      if (noMore==true){
        randomize();
      }
    })

};
