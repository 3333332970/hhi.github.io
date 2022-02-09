(function() {

    'use strict';
  
    var m = document.querySelector("main"),
      h = document.querySelector("header"),
      c = document.querySelector(".counter"),
      counter = 0,
      hHeight;
  
    function setTopPadding() {
      hHeight = h.offsetHeight;
      m.style.paddingTop = hHeight + "px";
    }
  
    function onScroll() {
  
      window.addEventListener("scroll", _.throttle(callbackFunc, 200));
      /**
       * Replace the line above with the following one 
       * to see how many more times the "callbackFunc" is executed
       */
      // window.addEventListener("scroll", callbackFunc);
  
      function callbackFunc() {
        c.style.visibility = "visible";
        c.innerHTML = counter++;
        var y = window.pageYOffset;
        if (y > 150) {
          h.classList.add("scroll");
        } else {
          h.classList.remove("scroll");
        }
      }
    }
  
    window.onload = function() {
      setTopPadding();
      onScroll();
    };
  
    window.onresize = function() {
      setTopPadding();
    };
  })();
  $(document).ready(function()
{
    // Hàm active tab nào đó
    function activeTab(obj)
    {
        // Xóa class active tất cả các tab
        $('.tab-wrapper ul li').removeClass('active');

        // Thêm class active vòa tab đang click
        $(obj).addClass('active');

        // Lấy href của tab để show content tương ứng
        var id = $(obj).find('a').attr('href');

        // Ẩn hết nội dung các tab đang hiển thị
        $('.tab-item').hide();

        // Hiển thị nội dung của tab hiện tại
        $(id) .show();
    }

    // Sự kiện click đổi tab
    $('.tab li').click(function(){
        activeTab(this);
        return false;
    });

    // Active tab đầu tiên khi trang web được chạy
    activeTab($('.tab li:first-child'));
});