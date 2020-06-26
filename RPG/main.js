let mapArray, ctx, currentImgMainX, currentImgMainY;
let imgMountain, imgMain, imgEnemy;

$(document).ready(function(){
    mapArray=[0,1,1,0,0,0,3,1,2];
    ctx=$("#myCanvas")[0].getContext("2d");

    imgMain=new Image();
    imgMain.src = "RPG/images/spriteSheet.png";
    currentImgMainX = 0;
    currentImgMainY = 0;
    imgMain.onload=function(){
        ctx.drawImage(imgMain, 0, 0, 80, 130, currentImgMainX, currentImgMainY, 200, 200)
    };

    imgMountain = new Image();
    imgMountain.src = "RPG/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "RPG/images/Enemy.png";
    imgMountain.onload = function(){
        imgEnemy.onload = function(){
            for(let x in mapArray){
                if(mapArray[x] == 1){
                    ctx.drawImage(imgMountain,32,65,32,32,x%3*200,Math.floor(x/3)*200,200,200);
                }else if(mapArray[x] == 3){
                    ctx.drawImage(imgEnemy,7,40,104,135,x%3*200,Math.floor(x/3)*200,200,200);
                }
            }
        }
    };
});

$(document).keydown(function(event)
{
    let targetImgMainX, targetImgMainY, targetBlock, cutImagePostionX;
    event.preventDefault();

    switch(event.which)
    {
        case 37:
            targetImgMainX = currentImgMainX - 200;
            targetImgMainY = currentImgMainY;
            cutImagePostionX = 175;
            break;
        case 38:
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY - 200;
            cutImagePostionX = 355;
            break;
        case 39:       
            targetImgMainX = currentImgMainX + 200;
            targetImgMainY = currentImgMainY;
            cutImagePostionX = 540;
            break;
        case 40:       
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY + 200;
            cutImagePostionX = 0;
            break;
        default:
            return;
    }

    if(targetImgMainX<=400 && targetImgMainX>=0 && targetImgMainY<=400 &&targetImgMainY>=0)
    {
        targetBlock = targetImgMainX/200 + targetImgMainY/200*3;
    }
    else
    {
        targetBlock = -1;
    }

    ctx.clearRect(currentImgMainX, currentImgMainY, 200, 200);
    if(targetBlock == -1 || mapArray[targetBlock] == 1 || mapArray[targetBlock] == 3)
    {
    }
    else
    {
        $("#talkBox").empty();
        currentImgMainX = targetImgMainX;
        currentImgMainY = targetImgMainY;
    }
    ctx.drawImage(imgMain,cutImagePostionX,0,80,130,currentImgMainX,currentImgMainY,200,200);

    switch(mapArray[targetBlock])
    {
        case undefined:
            $("#talkBox").text("邊界");
            break;
        case 1:
            $("#taikBox").text("有山");
            break;
        case 2:
            $("#talkBox").text("抵達終點");
            break;
        case 3:
            $("#talkBox").text("哈囉");
            break;
    }
});