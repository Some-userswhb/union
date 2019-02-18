//以下为修改jQuery Validation插件兼容Bootstrap的方法，没有直接写在插件中是为了便于插件升级
        $.validator.setDefaults({
            highlight: function (element) {
                $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
            },
            success: function (element) {
                element.closest('.form-group').removeClass('has-error').addClass('has-success');
            },
            errorElement: "span",
            errorPlacement: function (error, element) {
                if (element.is(":radio") || element.is(":checkbox")) {
                    error.appendTo(element.parent().parent().parent());
                } else {
                    error.appendTo(element.parent());
                }
            },
            errorClass: "help-block m-b-none",
            validClass: "help-block m-b-none"
        });

        //以下为官方示例
        $().ready(function () {
            // validate the comment form when it is submitted
            $("#commentForm").validate();

            // validate signup form on keyup and submit
            var icon = "<i class='fa fa-times-circle'></i> ";
            $("#signupForm").validate({
                rules: {
                    firstname: "required",
                    lastname: "required",
                    username: {
                        required: true,
                        minlength: 2
                    },
                    password: {
                        required: true,
                        minlength: 5
                    },
                    confirm_password: {
                        required: true,
                        minlength: 5,
                        equalTo: "#password"
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    emailq: {
                        required: true,
                        emailq: true
                    },
                    topic: {
                        required: "#newsletter:checked",
                        minlength: 2
                    },
                    area:{
                        required: true,
                        minlength: 5,
                    },
                    agree: "required"
                },
                messages: {
                    firstname: icon + "请输入上级工会",
                    lastname: icon + "请选择工会分类",
                    username: {
                        required: icon + "请选择工会类型",
                    },
                    password: {
                        required: icon + "请输入工会名称",
                        minlength: icon + "名称必须5个字符以上"
                    },
                    confirm_password: {
                        required: icon + "请选择建会时间",
                    },
                    email: icon + "请输入工会编号",
                    emailq: icon + "请输入工会编号",
                    agree: {
                        required: icon + "必须同意协议后才能注册",
                        element: '#agree-error'
                    },
                    area: {
                        required: icon + "请选择行政区划",
                        minlength: icon + "名称必须5个字符以上"
                    },
                }
            });

            // propose username by combining first- and lastname
            $("#username").focus(function () {
                var firstname = $("#firstname").val();
                var lastname = $("#lastname").val();
                if (firstname && lastname && !this.value) {
                    this.value = firstname + "." + lastname;
                }
            });
        });
