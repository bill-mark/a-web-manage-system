window.onload=function(){
  var biaozhi;//声明后台返回的标志
  switch(biaozhi){
    case 0:
       alert('用户名错误'); 
       break;  
    case 1:
        alert('密码错误');
        break;
    case 2:
         alert('验证码错误');
         break;                
  }
}

// function tijiao(){  //判断输入是否为空
//   var name=document.getElementById('inputBox1');
//   var password=document.getElementById('inputBox1');
//   var yanzheng=document.getElementById('inputBox1');

//   if(name == null || name =='' ||){
//       alert('用户名不能为空');
//       return false;
//   }else{
//        if(password == null || password==''){
//           alert('密码不能为空');
//           return false;
//        }else{
//              if(yanzheng==null||yanzheng==''){
//                  alert('验证码不能为空');
//                  return false;
//              }
//        }
//   };
   
// }

//演示函数
// function tijiao(){
//   // alert('lll');
//   window.location.href="index.html"; 
// }