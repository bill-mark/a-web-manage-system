	function previewImage(file,callback){//file为plupload事件监听函数参数中的file对象,callback为预览图片准备完成的回调函数
            if(!file || !/image\//.test(file.type)) return; //确保文件是图片
            if(file.type=='image/gif'){//gif使用FileReader进行预览,因为mOxie.Image只支持jpg和png
                var fr = new mOxie.FileReader();
                fr.onload = function(){
                    callback(fr.result);
                    fr.destroy();
                    fr = null;
                }
                fr.readAsDataURL(file.getSource());
            }else{
                var preloader = new mOxie.Image();
                preloader.onload = function() {
                    preloader.downsize( 300, 300 );//先压缩一下要预览的图片,宽300，高300
                    var imgsrc = preloader.type=='image/jpeg' ? preloader.getAsDataURL('image/jpeg',80) : preloader.getAsDataURL(); //得到图片src,实质为一个base64编码的数据

                    callback && callback(imgsrc); //callback传入的参数为预览图片的url
                    preloader.destroy();
                    preloader = null;
                };
                preloader.load( file.getSource() );
            }   
        }
	//实例化一个plupload上传对象
	    var uploader = new plupload.Uploader({
	        browse_button : 'browse', //触发文件选择对话框的按钮，为那个元素id
	        url : 'demo.html', //服务器端的上传页面地址
	        filters:{
	        	mime_type :[
	        		{title : '图片类型', extensions: "jpg,gif,png"}
	        	],
	        	max_file_size : '10mb',
	        	prevent_duplicates : true //不允许选取重复文件
	        }
	    });
	     //在实例对象上调用init()方法进行初始化
    	uploader.init();
    	//绑定上传图片事件
	    uploader.bind('FilesAdded',function(uploader,files){
			for(var i = 0, len = files.length; i<len; i++){
				var file_name = files[i].name; //文件名
				var html = 
						'<tr>'+
							'<td width="40%">'+
							 	file_name+ ' (' + plupload.formatSize(files[i].size) + ') <b></b>'+
							'</td>'+
							'<td width="40%">'+
							 	'<input style="width:15em;" type="text" placeholder="请附加标题">'+
							'</td>'+
							'<td style="padding-left: 2em;">'+
							 	'<i onclick="removeImg(this)" name="'+files[i].id+'" class="fa fa-trash-o"><i>'+
							'</td>'+
						'</tr>';
				$(html).appendTo('#imgtable');
				//给图片src进行隐藏赋值
				!function(i){
					previewImage(files[i],function(imgsrc){
						$('#imgDIv').append('<img id="'+files[i].id+'" style="display:none;" src="'+ imgsrc +'" alt="'+file_name+'"/>');
					});
			    }(i);
			}
	    });
	 	//绑定上传图片的事件
	    /*uploader.bind('UploadProgress',function(uploader,file){
	      document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";	      
	    });*/
		//最后给"开始上传"按钮注册事件
		document.getElementById('start_upload').onclick = function(){
		    uploader.start(); //调用实例对象的start()方法开始上传文件，当然你也可以在其他地方调用该方法
		}
		/*$("#formId").validate({
				rules: {
				   policTitle: {
				   	 required: true,
				   	 maxlength: 30
				   },
				   policContent: "required",
				},
				submitHandler: function(form){
					alert("开始提交表单");
					//调用实例对象的start()方法开始上传文件
					uploader.start();
					form.submit();
				}

		});*/
		function yuLan(){
    		 $.jBox.open("iframe:policYuLan.html", "", 1200,
                        550, {
                            buttons : {},
                            title: "政策法规预览",
                            closed: function () { 
                               /* winReload();*/
                            },
                            loaded : function(h) {
                                $(".jbox-content", top.document).css("overflow-y",
                                        "hidden");
                            }
                });
    	}
