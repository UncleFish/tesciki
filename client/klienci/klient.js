  Template.klient.events({
      'click': function(e){
        e.preventDefault();


        console.log(e.target.name);

        var str = e.target.name;
        alert(str);
        // Define the pdf-document
        var docDefinition = {
          pageSize: 'A4',
          pageMargins: [ 30, 25, 30, 25 ],

          // Content with styles
          content: [
            {text:"Kraków, dnia: 25.10.1986 r.", style: ['listItem', 'listText','right']},
            {
              image: 'data:logo.png;base64,...encodedContent...'
            },
            { columns:[
              {width: '20%', text:[
                {text: "TUNA SP. Z O.O.\n", style: ['listItem', 'listLabel']},
                {text: "UL. KRZYWDA 37\n", style: ['listItem', 'listLabel']},
                {text: "30-710 KRAKÓW\n", style: ['listItem', 'listLabel']},
                {text: "NIP: PL 679 311 50 65\n", style: ['listItem', 'listLabel']}
              ]},
                {width: '40%', text:[
                {text: "PŁATNOŚĆ W PLN:\n", style: ['listItem', 'listLabel']},
                {text: "Bank Pekao SA, I Oddział w Krakowie\n", style: ['listItem', 'listText']},
                {text: "PL 78 1240 4650 1111 0010 6455 7659\n", style: ['listItem', 'listText']}
              ]},
                {width: '40%', text:[
                {text: "FOR PAYMENT IN EUR:\n", style: ['listItem', 'listLabel']},
                {text: "Bank Pekao SA, I Oddział w Krakowie\n", style: ['listItem', 'listText']},
                {text: "PL 86 1240 4650 1978 0010 6455 7718\n", style: ['listItem', 'listText']},
                {text: "SWIFT/BIC: PKOPPLPWXXX\n", style: ['listItem', 'listText']}
              ]}

],
            columnGap: 10},

            { columns:[
              {width: '50%', text:[
                {text: "PŁATNOŚĆ W PLN:\n", style: ['listItem', 'listLabel']},
                {text: "Bank Pekao SA, I Oddział w Krakowie\n", style: ['listItem', 'listText']},
                {text: "PL 78 1240 4650 1111 0010 6455 7659\n", style: ['listItem', 'listText']}
              ]},
              {width: '50%', text:[
                {text: str+"\n", style: ['rightSide', 'listLabel']},
                {text: "Linia tekstu jakiegoś\n", style: ['listItem', 'listLabel']},
                {text: "Linia tekstu jakiegoś\n", style: ['listItem', 'listLabel']},
                {text: "Linia tekstu jakiegoś\n", style: ['listItem', 'listLabel']},
                {text: "Linia tekstu jakiegoś\n", style: ['listItem', 'listLabel']}
              ]}],
            columnGap: 10},



            {text:"PRZYPOMNIENIE O PŁATNOŚCIACH", style:['headline']},

            { text: "customerAdress" },
            { text: "currentUser" }
          ],

          // Style dictionary
          styles: {
            right:{alignment: 'right'},
            left:{alignment: 'left'},
            headline: { fontSize: 20, bold: true, margin: [0, 0, 0, 25], alignment: 'center'},
            listItem: { fontSize: 10, margin: [0, 0, 0, 5] },
            listLabel: { bold: true },
            listText: { italic: true }
          }
        };

        // Start the pdf-generation process
        console.log(pdfMake.createPdf(docDefinition).open());



      }
  });
