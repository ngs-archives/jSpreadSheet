#jSpreadSheet
Easily access Google Spreadsheet JSONP API.  
Importing [Google's jsapi](http://code.google.com/apis/loader/) and calling "[google.load](http://code.google.com/loader/#GoogleLoad)" method are nessesary.

    var SS_URL = "http://spreadsheets.google.com/tq?key=0ArNMycobpXr3ckJybUNHVDZ0cEU0SjZvb0prVDhGS2c";
    $.ss(SS_URL)
      .setQuery("select * where B like 'test%'")
      .setField("time,title,address,foo,bar,baz,hoge,piyo")
      .send(function(success){
        if(!success) return;
        this.each(function(i){
          console.log(i,this);
         })
      });


