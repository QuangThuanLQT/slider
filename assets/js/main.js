$(document).ready(function () {

    var src_img_click = $('#list-thumb li:first-child a').children('img').attr('src') //Lấy giá trị src mặc định
    $('#show img').attr('src', src_img_click)   //Gán giá trị cho #show img
    $('#list-thumb li:first-child').addClass('active'); //Thiết lập active đầu tiên cho #list-thumb li

    $('#list-thumb li a').click(function () {   //Tạo sự kiện click
        src_img_click = $(this).children('img').attr('src');  //Lấy giá trị src cho mỗi lần click vào
        $('#show img').attr('src', src_img_click);   //Gán giá trị cho #show img
        $('#list-thumb li').removeClass('active');  //Nếu có active remove đi
        $(this).parent('li').addClass('active');   // Thêm active cho #list-thumb li

        return false;   // Không load lại trang

    });

    $('.next_left').click(function () {
        $('.active').removeClass('active').addClass('prev-active'); //remove active đi tạo class pre-active
        if ($('.prev-active').is(':first-child')) { //Nếu class pre-active là phần tử con đầu tiên #list-thumb li
            $('#list-thumb li:last-child').addClass('active');  //addClass active cho phần tử cuối của #list-thumb li
        } else {
            $('.prev-active').prev().addClass('active');    //Ngược lại, class active được thêm vào phần tử đứng ngay trước phần tử có class pre-active
        }

        var src_img_prev = $('#list-thumb li.active a').children('img').attr('src');
        $('#show img').attr('src', src_img_prev);
        $('#list-thumb li').removeClass('prev-active');

        return false;

    });

    $('.next_right').click(function () {
        $('.active').removeClass('active').addClass('next-active');
        if ($('.next-active').is(':last-child')) {
            $('#list-thumb li:first-child').addClass('active');
        } else {
            $('.next-active').next().addClass('active');
        }

        var src_img_prev = $('#list-thumb li.active a').children('img').attr('src');
        $('#show img').attr('src', src_img_prev);
        $('#list-thumb li').removeClass('next-active');

        return false;

    });

    
    $('#content').scroll(function () {
        var scrollTop
        scrollTop = $('#content').scrollTop()
        // console.log(scrollTop);
        if (scrollTop > 20) {
            $('#scroll-btn-top').css('display', 'block');
        } else {
            $('#scroll-btn-top').css('display', 'none');
        }
    });
    $('#scroll-btn-top').click(function () {
        scrollTop = $('#content').animate({scrollTop:0}, '500');
    });
})