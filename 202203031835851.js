//左边
var left_img='<a href=http://www.knowsky.com/ target=_blank><img src=1.gif border=0></a><br><br><a href="http://www.knowsky.com" target=_blank><img src=2.gif border=0></a>';

//上边是两个左边的图片效果，不够可以继续加，代码就是“<br><a href="http://www.knowsky.com" target=_blank><img src=2.gif border=0></a>”

//右边
var right_img='<a href=http://www.knowsky.com target=_blank><img src=1.gif border=0></a><br><br><a href="http://www.knowsky.com/" target=_blank><img src=2.gif border=0></a>';
//var right_img='<EMBED src=1.swf quality=high  WIDTH=80 HEIGHT=170 TYPE="application/x-shockwave-flash"></EMBED>';
var delta=0.05
var collection;
function floaters() {
  this.items = [];
  this.addItem = function(id,x,y,content)
      {
     document.write('<DIV id='+id+' style="Z-INDEX: 10; POSITION: absolute;  width:80px; height:60px;left:'+(typeof(x)=='string'?eval(x):x)+';top:'+(typeof(y)=='string'?eval(y):y)+'">'+content+'</DIV>');
     
     var newItem    = {};
     newItem.object   = document.getElementById(id);
     newItem.x    = x;
     newItem.y    = y;

     this.items[this.items.length]  = newItem;
      }
  this.play = function()
      {
     collection    = this.items
     setInterval('play()',10);
      }
  }
  function play()
  {

   for(var i=0;i<collection.length;i++)
   {
    var followObj  = collection[i].object;
    var followObj_x  = (typeof(collection[i].x)=='string'?eval(collection[i].x):collection[i].x);
    var followObj_y  = (typeof(collection[i].y)=='string'?eval(collection[i].y):collection[i].y);

    if(followObj.offsetLeft!=(document.body.scrollLeft+followObj_x)) {
     var dx=(document.body.scrollLeft+followObj_x-followObj.offsetLeft)*delta;
     dx=(dx>0?1:-1)*Math.ceil(Math.abs(dx));
     followObj.style.left=followObj.offsetLeft+dx;
     }

    if(followObj.offsetTop!=(document.body.scrollTop+followObj_y)) {
     var dy=(document.body.scrollTop+followObj_y-followObj.offsetTop)*delta;
     dy=(dy>0?1:-1)*Math.ceil(Math.abs(dy));
     followObj.style.top=followObj.offsetTop+dy;
     }
    followObj.style.display = '';
   }
  } 
  
var theFloaters  = new floaters();
theFloaters.addItem('followDiv1','document.body.clientWidth-100',230,''+right_img+'');
theFloaters.addItem('followDiv2',20,230,''+left_img+'');
theFloaters.play();
