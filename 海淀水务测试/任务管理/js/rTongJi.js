 //一天15px
		var data01 = [['10','15','150','15'],['160','15','150','15'],['310','15','150','15']];
		var data02 = [['10','45','150','15'],['160','45','150','15'],['310','45','150','15']];
		var data03 = [['10','75','150','15'],['160','75','150','15'],['310','75','150','15']];
		var data04 = [['10','105','150','15'],['160','105','150','15'],['310','105','150','15']];
		var data05 = [['10','135','150','15'],['160','135','150','15'],['310','135','150','15']];
		var data06 = [['10','165','150','15'],['160','165','150','15'],['310','165','150','15']];

		var canvas01 = document.getElementById('canvas01');
		var ctx01 = canvas01.getContext('2d'); //定义2d画笔
	  //           for (var i = 1; i < 7; i++) {
	  //              for(var j=0;j<4;j++)
	  //              	var mm='data0'+j;
		// 	ctx01.beginPath(·);
		// 	ctx01.rect('data0'+i+'[0][0]','data0'+i+'[0][1]','data0'+i+'[0][2]','data0'+i+'[0][3]');
		// 	ctx01.fillStyle='blue';
		// 	ctx01.fill();

		// 	ctx01.beginPath();
		// 	ctx01.rect('data0'+i+'[1][0]','data0'+i+'[1][1]','data0'+i+'[1][2]','data0'+i+'[1][3]');
		// 	ctx01.fillStyle='#52cc3d';
		// 	ctx01.fill();

		// 	ctx01.beginPath();
		// 	ctx01.rect('data0'+i+'[2][0]','data0'+i+'[2][1]','data0'+i+'[2][2]','data0'+i+'[2][3]');
		// 	ctx01.fillStyle='black';
		// 	ctx01.fill();
		//    }	
		// }
        ctx01.beginPath()
        ctx01.strokeStyle="#708090";
        ctx01.lineWidth = 2;
        ctx01.moveTo(10,10);
        ctx01.lineTo(10,200);
        ctx01.lineTo(480,200)
        ctx01.stroke();//描边
        ctx01.beginPath();
		ctx01.rect(55,195,2,5);
		ctx01.fillStyle='#708090';
		ctx01.fill();
		ctx01.beginPath();
		ctx01.rect(100,195,2,5);
		ctx01.fillStyle='#708090';
		ctx01.fill();
		ctx01.beginPath();
		ctx01.rect(145,195,2,5);
		ctx01.fillStyle='#708090';
		ctx01.fill();
		ctx01.beginPath();
		ctx01.rect(190,195,2,5);
		ctx01.fillStyle='#708090';
		ctx01.fill();
		ctx01.beginPath();
		ctx01.rect(235,195,2,5);
		ctx01.fillStyle='#708090';
		ctx01.fill();
		ctx01.beginPath();
		ctx01.rect(280,195,2,5);
		ctx01.fillStyle='#708090';
		ctx01.fill();
		ctx01.beginPath();
		ctx01.rect(325,195,2,5);
		ctx01.fillStyle='#708090';
		ctx01.fill();
        ctx01.beginPath();
		ctx01.rect(370,195,2,5);
		ctx01.fillStyle='#708090';
		ctx01.fill();
		ctx01.beginPath();
		ctx01.rect(415,195,2,5);
		ctx01.fillStyle='#708090';
		ctx01.fill();
		ctx01.beginPath();
		ctx01.rect(460,195,2,5);
		ctx01.fillStyle='#708090';
		ctx01.fill();

        ctx01.beginPath() //左上箭头
        ctx01.strokeStyle="#708090";
        ctx01.lineWidth = 2;
        ctx01.moveTo(10,2);
        ctx01.lineTo(6,10);
        ctx01.lineTo(14,10);
        ctx01.fill();
        
        ctx01.beginPath()//右下箭头
        ctx01.strokeStyle="#708090";
        ctx01.lineWidth = 2;
        ctx01.moveTo(485,200);
        ctx01.lineTo(480,195);
        ctx01.lineTo(480,205);
        ctx01.fill();
          


		ctx01.beginPath()
		ctx01.rect(data01[0][0],data01[0][1],data01[0][2],data01[0][3]);
		ctx01.fillStyle='#5264c8';
		ctx01.fill();
		ctx01.beginPath();
		ctx01.rect(data01[1][0],data01[1][1],data01[1][2],data01[1][3]);
		ctx01.fillStyle='#52cc3d';
		ctx01.fill();   	
		ctx01.beginPath();
		ctx01.rect(data01[2][0],data01[2][1],data01[2][2],data01[2][3]);
		ctx01.fillStyle='red';
		ctx01.fill();
		ctx01.beginPath();
		ctx01.rect(10,35,5,2);
		ctx01.fillStyle='#708090';
		ctx01.fill();
  
		ctx01.beginPath()
		ctx01.rect(data02[0][0],data02[0][1],data02[0][2],data02[0][3]);
		ctx01.fillStyle='#5264c8';
		ctx01.fill();
		ctx01.beginPath();
		ctx01.rect(data02[1][0],data02[1][1],data02[1][2],data02[1][3]);
		ctx01.fillStyle='#52cc3d';
		ctx01.fill();   	
		ctx01.beginPath();
		ctx01.rect(data02[2][0],data02[2][1],data02[2][2],data02[2][3]);
		ctx01.fillStyle='red';
		ctx01.fill();
		ctx01.beginPath();
		ctx01.rect(10,65,5,2);
		ctx01.fillStyle='#708090';
		ctx01.fill();
 
        ctx01.beginPath()
		ctx01.rect(data03[0][0],data03[0][1],data03[0][2],data03[0][3]);
		ctx01.fillStyle='#5264c8';
		ctx01.fill();
		ctx01.beginPath();
		ctx01.rect(data03[1][0],data03[1][1],data03[1][2],data03[1][3]);
		ctx01.fillStyle='#52cc3d';
		ctx01.fill();   	
		ctx01.beginPath();
		ctx01.rect(data03[2][0],data03[2][1],data03[2][2],data03[2][3]);
		ctx01.fillStyle='red';
		ctx01.fill();
		ctx01.beginPath();
		ctx01.rect(10,95,5,2);
		ctx01.fillStyle='#708090';
		ctx01.fill();
		
		ctx01.beginPath()
		ctx01.rect(data04[0][0],data04[0][1],data04[0][2],data04[0][3]);
		ctx01.fillStyle='#5264c8';
		ctx01.fill();
		ctx01.beginPath();
		ctx01.rect(data04[1][0],data04[1][1],data04[1][2],data04[1][3]);
		ctx01.fillStyle='#52cc3d';
		ctx01.fill();   	
		ctx01.beginPath();
		ctx01.rect(data04[2][0],data04[2][1],data04[2][2],data04[2][3]);
		ctx01.fillStyle='red';
		ctx01.fill();
		ctx01.beginPath();
		ctx01.rect(10,125,5,2);
		ctx01.fillStyle='#708090';
		ctx01.fill();

		ctx01.beginPath()
		ctx01.rect(data05[0][0],data05[0][1],data05[0][2],data05[0][3]);
		ctx01.fillStyle='#5264c8';
		ctx01.fill();
		ctx01.beginPath();
		ctx01.rect(data05[1][0],data05[1][1],data05[1][2],data05[1][3]);
		ctx01.fillStyle='#52cc3d';
		ctx01.fill();   	
		ctx01.beginPath();
		ctx01.rect(data05[2][0],data05[2][1],data05[2][2],data05[2][3]);
		ctx01.fillStyle='red';
		ctx01.fill();
		ctx01.beginPath();
		ctx01.rect(10,155,5,2);
		ctx01.fillStyle='#708090';
		ctx01.fill();

		ctx01.beginPath()
		ctx01.rect(data06[0][0],data06[0][1],data06[0][2],data06[0][3]);
		ctx01.fillStyle='#5264c8';
		ctx01.fill();
		ctx01.beginPath();
		ctx01.rect(data06[1][0],data06[1][1],data06[1][2],data06[1][3]);
		ctx01.fillStyle='#52cc3d';
		ctx01.fill();   	
		ctx01.beginPath();
		ctx01.rect(data06[2][0],data06[2][1],data06[2][2],data06[2][3]);
		ctx01.fillStyle='red';
		ctx01.fill();