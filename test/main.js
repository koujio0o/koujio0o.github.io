//xxxx
const X1_BASE = 100 + 300 * Math.random();
const X1 = X1_BASE + X1_BASE * Math.random();
const X2 = X1_BASE + 200 + 300 * Math.random();
const Y1 = X1_BASE + X1_BASE * Math.random();
const Y2 = Y1 + 300 * Math.random();
const Y3 = 300;
const Y4 = 70 + 100 * Math.random(); //green

const ARC1 = 20;
const ARC2 = 40;

var p1 = new Point(); // 
var p2 = new Point(); // orange
var p3 = new Point(); // brue
var p4 = new Point(); // green
var p5 = new Point();
var p_inter = new Point();
var p_base = new Point();

var stage;
var penline;
var isDraw = false;


window.addEventListener("load", init);


function init() {

	stage = new createjs.Stage("myCanvas");
  // stage.enableMouse0ver();
        // タッチ操作をサポートしているブラウザーならば
    if (createjs.Touch.isSupported() == true) {
    // タッチ操作を有効にします。
    createjs.Touch.enable(stage)
}


    stage.addEventListener("stagemousedown", handleDown);
    stage.addEventListener("stagemouseup", handleUp);
    stage.addEventListener("stagemousemove", handleMove);

    p1.set(X1,100,'red');
    p2.set(X2,Y2,'orange');
    p4.set(X2,Y4,'green');
    p3.set(X1,Y3,'brue');

      p_inter   = CalcIntersectionPoint(p1, p2, p3, p4) ;
      var p_tmp = CalcIntersectionPoint(p1, p4, p2, p3);
      p5.x = p_inter.x;
      p5.y = p_inter.y;
      p5.set(p5.x, p5.y,'yellow');

      p_base.x = p_tmp.x;
      p_base.y = p_tmp.y;
      p_base.set(p_base.x, p_base.y, 'gray');


    var draw = drawInter(stage); //クロージャー
	$('#btn_inter').click(function(){
        draw();
	});

    console.log('p5 > ' + p5.x + '-' + p5.y);
    console.log('hi');
      // Stageオブジェクトを作成します
      

      // 円を作成します
      var shape = new createjs.Shape();

      shape.graphics.beginStroke('DarkRed');
      shape.graphics.setStrokeStyle(3);
      // shape.graphics.moveTo(p1.x,p1.y).lineTo(p2.x,p2.y).lineTo(p3.x,p3.y).lineTo(p4.x,p4.y).lineTo(p1.x,p1.y);
      shape.graphics.moveTo(p1.x,p1.y).lineTo(p3.x,p3.y).lineTo(p2.x,p2.y).lineTo(p4.x,p4.y).lineTo(p1.x, p1.y);


      stage.addChild(p1.drawx());
      stage.addChild(p2.drawx());
      stage.addChild(p3.drawx());
      stage.addChild(p4.drawx());
      // stage.addChild(p5.drawx());
      // stage.addChild(p_base.drawx());

      stage.addChild(shape); // 表示リストに追加
      // Stageの描画を更新します
      stage.update();
  }      



  function handleDown(event){

    /* if(event.type == "mousedown") {
    // mousedownの時は処理を行わない
        return;
    }
    */

    isDraw = true;
    console.log('down' + 2 * Math.random()) ;
    penline = new createjs.Shape();
    penline.graphics.beginStroke('DarkRed');

}

function handleUp(event){
    console.log('up');
// stage.addChild(penline);
//   stage.update();
    isDraw = false;
    lastPosition.x = null;
    lastPosition.y = null;

}

var lastPosition = {x:null, y:null};
function handleMove(event){
    if(!isDraw){return;}
    if(lastPosition.x != null){
        penline.graphics.moveTo(lastPosition.x, lastPosition.y).lineTo(stage.mouseX, stage.mouseY); 
        stage.addChild(penline);
        stage.update();    
    }

    console.log('move');
    lastPosition.x = stage.mouseX;
    lastPosition.y = stage.mouseY;
}



// 中点算出
var drawInter = function( stage ){	
    var isDisplay = false;
    return function(){
        if(!isDisplay){        	
            stage.addChild(p5.drawx());
            stage.addChild(p_base.drawx());
            isDisplay = true;
            console.log('false');
        }else{
            console.log('true');
            stage.removeChild(stage.addChild[3]);
            isDisplay = false;
        }
        stage.update();
    }
    // stage.addChild(shape); 
}

function drawCircle(){
}



