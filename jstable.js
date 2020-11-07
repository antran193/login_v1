var newdata = [];
var result = [];
var a = [];
var data1 = [];
var truefalse = 0;
document.getElementById("loader").style.display= "block";
$.ajax({
    // url:"https://run.mocky.io/v3/cf411600-0159-4df5-80b9-273780655ff8",
    url: "https://5f6599069385b80016c5f7d2.mockapi.io/api/login/usertable", // gửi ajax đến file result.php
    type: "get", // chọn phương thức gửi là get
    dateType: "application/json", // dữ liệu trả về dạng text
    success: function (result1) {
        // Sau khi gửi và kết quả trả về thành công thì gán nội dung trả về
        // authen(result);
        console.log(result1);
        var data = [];
        for (var i = 0; i < result1.length; i++) {
            var datafake = [result1[i].id, result1[i].username, result1[i].password];
            data.push(datafake);

        }
        // debugger
        console.log(data);
        buidtable(data);
        result = data;
        document.getElementById("loader").style.display= "none";
    }
});




function buidtable(data) {
    $('#example').DataTable({
        data: data,
        columns: [
            { title: "id" },
            { title: "name" },
            { title: "pass" }
        ]
    });
    var table = $('#example').DataTable();
    $('#example tbody').on('click', 'tr', function () {
        data1 = table.row(this).data();
        $(this).removeClass('selected')
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
        divedit();
    })
}


function newuser(){
    document.getElementById("modalexam").style.display = "block";
    var u = result.length;
    var rowu=result[u-1];
    newdata[0] = parseInt(rowu[0])+1;
    truefalse = 1;
    // document.getElementById("id").value = newdata[0];
}

function editrow() {
    document.getElementById("modalexam").style.display = "block";
    // document.getElementById("id").value = data1[0];
    document.getElementById("name").value = data1[1];
    document.getElementById("pass").value = data1[2];
    truefalse = 0;
    // newdata[0]=data1[0];
    newdata = data1;
}

function deleteuser(){
    var urldelete = "https://5f6599069385b80016c5f7d2.mockapi.io/api/login/usertable/"+data1[0];
    document.getElementById("loader").style.display= "block";
    $.ajax({
        url: urldelete, // gửi ajax đến file result.php
        type: "delete", // chọn phương thức gửi là get
        // dataType: "application/json", // dữ liệu trả về dạng text
        data:
            { id: data1[0], username: data1[1], password: data1[2] },
        success: function (result) {
            console.log(result);
            var table = $('#example').DataTable();
            table.destroy();
            updatetable();
            document.getElementById("loader").style.display= "none";
        },

    });
    

}

function divedit() {
    var edi = document.getElementById("editors")
    edi.style.display = "block";

}


function close1() {
    document.getElementById("modalexam").style.display = "none";
}

function updatedata() {
    for (var i = 0; i < result.length; i++) {
        var arrinarr = result[i];
        if (arrinarr[0] == newdata[0]) {
            arrinarr[1] = newdata[1];
            arrinarr[2] = newdata[2];
            a = [arrinarr[0], arrinarr[1], arrinarr[2]];
            updaterow(a);
            break;
        }
    }
}
function updatedata1()
{
    var newuserpass = [];
    newuserpass[0]= newdata[0];
    newuserpass[1]=newdata[1];
    newuserpass[2]=newdata[2];
    newrow(newuserpass);
}


function savechange1() {
    // newdata[0] = ;
    newdata[1] = document.getElementById("name").value;
    newdata[2] = document.getElementById("pass").value;
    document.getElementById("modalexam").style.display = "none";
    document.getElementById("loader").style.display= "block";
    if(truefalse==1)
    {
        updatedata1();
    }
    else updatedata();
    
    
}

function updaterow(a){
    var urlput = "https://5f6599069385b80016c5f7d2.mockapi.io/api/login/usertable/" + a[0];
    console.log(urlput);

    $.ajax({
        url: urlput, // gửi ajax đến file result.php
        type: "put", // chọn phương thức gửi là get
        // dataType: "application/json", // dữ liệu trả về dạng text
        data:
            { id: a[0], username: a[1], password: a[2] },
        success: function (result) {
            console.log(result);
            var table = $('#example').DataTable();
            table.destroy();
            updatetable();
            document.getElementById("loader").style.display= "none";
        },

    });

}

function newrow(a){
    $.ajax({
        url: "https://5f6599069385b80016c5f7d2.mockapi.io/api/login/usertable", // gửi ajax đến file result.php
        type: "post", // chọn phương thức gửi là get
        // dataType: "application/json", // dữ liệu trả về dạng text
        data:
            { id: a[0], username: a[1], password: a[2] },
        success: function (result) {
            console.log(result);
            var table = $('#example').DataTable();
            table.destroy();
            updatetable();
            document.getElementById("loader").style.display= "none";
        },

    });

}

function updatetable() {
    $.ajax({
        // url:"https://run.mocky.io/v3/cf411600-0159-4df5-80b9-273780655ff8",
        url: "https://5f6599069385b80016c5f7d2.mockapi.io/api/login/usertable", // gửi ajax đến file result.php
        type: "get", // chọn phương thức gửi là get
        dateType: "application/json", // dữ liệu trả về dạng text
        success: function (result1) {
            // Sau khi gửi và kết quả trả về thành công thì gán nội dung trả về
            // authen(result);
            console.log(result1);
            var datanew = [];
            for (var i = 0; i < result1.length; i++) {
                var datafake = [result1[i].id, result1[i].username, result1[i].password];
                datanew.push(datafake);

            }
            // debugger
            console.log(datanew);
            buidtable(datanew);
            // result = data;
        }
    });
}

