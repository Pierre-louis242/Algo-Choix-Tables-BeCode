
window.onload = () => {

    let learners = ["ARMAND Djedou Arnaud", "BINON Frédéric", "BROODCOORENS Maxime", "MANSORI Magid Jbari", "MONDT Alexandre", "PICARD Pierre-Louis", "RENDA Elisa", "RIPET Julien", "AFKIR Younes", "BAQUET Mathilde", "BIALAIS Emilie", "BOTTA Maxime", "CCOYLLO Jussi", "GAINA Corneliu", "GOLDESTEIN Andrés", "MASSART François", "MEURANT Matthieu", "MOL Estelle", "RODRIGUEZ Amalia"];
    let table = [[" bite"],["2 "],["3 "]]
    let php = table[0];
    let html = table[1];
    let css = table[2];
    let js = [];

    for (i=0; i<3; i++){
      for (j=0; j<5; j++){
        let random=Math.floor(Math.random()*learners.length);
        console.log(random);
        table[i][j]=learners[random];
        learners.splice(random,1);
       };
    };
    console.log(table);
            console.log(learners);

};
