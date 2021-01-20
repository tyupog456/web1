$(document).ready(function(){//시작부분

    //상단 메인메뉴에 마우스를 갖다댈때
    $("header li>a").on("mouseenter click",function(){
       $("header+div").stop().animate({height:"150px"});
       $("nav").fadeIn();
    });
    //상단 서브메뉴에서 마우스를 뗄때
    $("header ul").mouseleave(function(){
       $("header+div").stop().animate({height:0});
       $("nav").hide();
    });
    //상단 서브메뉴 마지막 항목을 'Tab'할때 (포커스를 잃을때)
    $("header li:last-child>nav>a:last-child").blur(function(){
       $("header+div").stop().animate({height:0});
       $("nav").hide();
    });
    
    //슬라이드 이미지
    setInterval(fading , 2000);
    const $img = $("#slideArea img");
    let i = 2;
    function fading(){
       if(i>0){
          $img.eq(i).fadeOut();
          i--;
       }else{
          $img.fadeIn();
          i=2;
       }
    }
    //하단 펼침메뉴
    $("footer select").change(function(){
       if(this.value!="#"){window.open(this.value);}
    });
    
    //공지사항 1번째 항목 팝업 링크
    $("#notice li:first-child a").click(function(){
       $("#black").fadeIn();
    });
    //팝업 공지사항 창닫기
    $("#black input").click(function(){
       $("#black").fadeOut();
    });
    //esc키를 클릭하여 팝업 공지사항 창닫기
    //키번호 enter는 '13', esc는 '27'
    $(document).keydown(function(ev){
       if(ev.keyCode==27){
          $("#black").fadeOut();
       }
    });
    
    
 });//끝부분
 
 
 