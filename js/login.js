var ctx="http://127.0.0.1:8010";
layer.config({skin: 'my-skin'});
$(function() {
    validateRule();
});
//提交前验证
$.validator.setDefaults({
    submitHandler: function() {
		login();
    }
});
//忘记密码
function bb() {
	$.modal.alert("忘记密码请联系当地所属管理工会重置修改","modal_status.WARNING");
}
//登录
function login() {
	$.modal.loading($("#btnSubmit").data("loading"));
	var username = $.common.trim($("input[name='username']").val());
    var password = $.common.trim($("input[name='password']").val());
    var systemCode = $.common.trim($("input[name='systemCode']").val());
    $.ajax({
        type: "post",
        url: ctx+"/sso/ssoUser/login/name",
        data: {
            "userName": username,
            "password": password,
            "systemCode": systemCode
        },
        cache: false,  //禁用缓存
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function(r) {
            if (r.code == 0) {
            	if(r.data=='PASSWORD_ERROR'){
            		$.modal.closeLoading();
                	$.modal.msgError("用户名密码不匹配");
            	}else if(r.data=='USER_NAME_NOT_EXIST'){
            		$.modal.closeLoading();
                	$.modal.msgError("用户名不存在");
            	}else{
            		location.href = 'index.html';
            	}
            } else {
            	$.modal.closeLoading();
            	$.modal.msgError("用户名密码不匹配");
            }
        },
        error: function(r) {
        	console.log(r);
        }
    });
}
//用户名密码验证
function validateRule() {
    var icon = "<i class='fa fa-times-circle'></i> ";
    $("#signupForm").validate({
        rules: {
            username: {
                required: true
            },
            password: {
                required: true
            }
        },
        messages: {
            username: {
                required: icon + "请输入您的用户名",
            },
            password: {
                required: icon + "请输入您的密码",
            }
        }
    })
}
