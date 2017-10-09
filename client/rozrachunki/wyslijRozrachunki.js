
Template.wyslijRozrachunki.events({
  'submit form': function(e) {
    e.preventDefault();




//    Rozrachunki.remove({});
    Meteor.call('removeAllPosts')


    str = $(e.target).find('[name=message]').val();
    e.target.message.value='';
    res = str.split("\n");
      if (res.length>1) {
          linia=res[1].split("\t")
          post = {
           symbol:linia[5],
          }
          tmp = Klienci.insert(post);

    for (var i = 1; i < res.length-1; i++) {
        linia = res[i].split("\t");

        try {
          klientMango=Klienci.find({symbol:linia[5]}).fetch()[0].symbol;
        }
        catch(err) {
          post = {
           symbol:linia[5],
          }
          tmp = Klienci.insert(post);
        }


          // if (true) {
          //   alert(linia[5]+"+++"+klientMango);
          // }


      // document.getElementById("demo").innerHTML = linia[5];


       post = {
        typ:linia[0],
        data:linia[1],
        dokument:linia[2],
        spoznienie:linia[3],
        symbol:linia[5],
        naleznosc:linia[7],
        zobowiazanie:linia[8],
        splataNaleznosci:linia[9],
        splataZobowiazania:linia[10],
        waluta:linia[12]
      }
        tmp1 = Rozrachunki.insert(post);

         delete linia;
         delete post;
    }



    // Blaze.saveAsPDF(Template.szablonPDF, {
    //     filename: "mojpdf.pdf" //, // optional, default is "document.pdf"
    //   // data: myData, // optional, render the template with this data context
    //   // x: 0, // optional, left starting position on resulting PDF, default is 4 units
    //   // y: 0, // optional, top starting position on resulting PDF, default is 4 units
    //   // orientation: "landscape", // optional, "landscape" or "portrait" (default)
    //   // unit: "mm", // optional, unit for coordinates, one of "pt", "mm" (default), "cm", or "in"
    //   // format: "a4" // optional, see Page Formats, default is "a4"
    // });

  //  Blaze.outputAsPDF(Template.szablonPDF, 'dataurlnewwindow');
    // document.getElementById("demo").innerHTML = linia[0];
  }
  }
});
