
(function(){
// set up the timeout variable
var t;
// setup the sizing function,
// with an argument that tells the chart to animate or not
function size(animate){
    // If we are resizing, we don't want the charts drawing on every resize event.
    // This clears the timeout so that we only run the sizing function
    // when we are done resizing the window
    clearTimeout(t);
    // This will reset the timeout right after clearing it.
    t = setTimeout(function(){
        $("canvas").each(function(i,el){
            // Set the canvas element's height and width to it's parent's height and width.
            // The parent element is the div.canvas-container
            $(el).attr({
                "width":$(el).parent().width(),
                "height":$(el).parent().outerHeight()
            });
        });
        // kickoff the redraw function, which builds all of the charts.
        redraw(animate);

        // loop through the widgets and find the tallest one, and set all of them to that height.
        var m = 0;
        // we have to remove any inline height setting first so that we get the automatic height.
        $(".widget").height("");
        $(".widget").each(function(i,el){ m = Math.max(m,$(el).height()); });
        $(".widget").height(m);

    }, 100); // the timeout should run after 100 milliseconds
}
$(window).on('resize', size);
function redraw(animation){
    var options = {};
    if (!animation){
        options.animation = false;
    } else {
        options.animation = true;
    }
    // ....
        // the rest of our chart drawing will happen here
    // ....
}
size(); // this kicks off the first drawing; note that the first call to size will animate the charts in.
});

var options = 100;
var data = [
    {
        value: 20,
        color:"#637b85"
    },
    {
        value : 30,
        color : "#2c9c69"
    },
    {
        value : 40,
        color : "#dbba34"
    },
    {
        value : 10,
        color : "#c62f29"
    }

];
var canvas = document.getElementById("hours");
var ctx = canvas.getContext("2d");
new Chart(ctx).Doughnut(data);

/*

$(document).ready(function() {
    //fetch text file
    $.get('Output.txt', function(data) {
        //split on new lines
        var lines = data.split('\n');
        //create select
        var dropdown = $('<select>');
        //iterate over lines of file and create a option element
        for(var i=0;i<lines.length;i++) {
            //create option
            var el = $('<option value="'+i+'">'+lines[i]+'</option>');
            //append option to select
            $(dropdown).append(el);
        }
        //append select to page
        $('body').append(dropdown);
    });
});
*/

var data = {
    labels : ["Fri","Sat","Sun","Mon","Tue","Wed","Thu"],
    datasets : [
        {
            fillColor : "rgba(99,123,133,0.4)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [272,187,185,331,322,346,261]
        },
        {
            fillColor : "rgba(219,186,52,0.4)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [259,179,190,313,279,333,230]
        },
    ]
}
var canvas = document.getElementById("shipments");
var ctx = canvas.getContext("2d");
new Chart(ctx).Line(data, options);

var data = {
    labels : ["Helpful","Simple","Useful","Fast","Slow","Frustrating"],
    datasets : [
        {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "#637b85",
            pointColor : "#dbba34",
            pointStrokeColor : "#637b85",
            data : [65,59,90,81,30,56]
        }
    ]
}
var canvas = document.getElementById("departments");
var ctx = canvas.getContext("2d");
new Chart(ctx).Radar(data, options);
