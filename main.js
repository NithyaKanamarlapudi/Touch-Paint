var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    var width = screen.width;
    newwidth = screen.width - 70;
    newheight = screen.height - 300;
    if(width < 992)
    {
        document.getElementById("myCanvas").width = newwidth;
        document.getElementById("myCanvas").height = newheight;
        document.body.style.overflow ="hidden" 
    }

    canvas.addEventListener("touchstart", my_touchstart)

    function my_touchstart(e)
    {
        console.log("touchstart");
        last_position_of_x = e.touches[0].clientY - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.log ("touchmove")

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = "pink";
        ctx.lineWidth = 1;

        ctx.moveTo(last_position_of_x, last_position_of_y);

        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke()

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }
