
asyncTest("spreadsheet 1", function() {
    $.ss("http://spreadsheets.google.com/tq?key=0ArNMycobpXr3ckJybUNHVDZ0cEU0SjZvb0prVDhGS2c")
        .setQuery("select * where B like 'qunit-test%'")
        .setField("time,title,address,foo,bar,buz,hoge,fuga")
        .send(function(success){

            ok(success,"success");
            ok(this.length>=2,"length is "+this.length)

            equals("function", typeof this.each,"is typeof this.each");

            same({
                address : "‚ ‚ ‚ ",
                bar     : "‚¢‚¤‚¢‚¢",
                buz     : "‚¦‚¦‚¦‚¦‚¦",
                foo     : "‚¤‚¤‚¤",
                fuga    : "",
                hoge    : "‚¨‚¨‚¨‚¨‚¨",
                time    : new Date("Tue May 12 2009 15:09:44 GMT+0900 (JST)"),
                title   : "qunit-test hhogehoge"
            },this[0],"same as line 1");

            same({
                address: "foo",
                bar: "baz",
                buz: "qux",
                foo: "bar",
                fuga: "",
                hoge: "qux",
                time: new Date("Tue May 12 2009 15:09:44 GMT+0900 (JST)"),
                title: "qunit-test fugafuga"
            },this[1],"same as line 1");

            start();
        });
});