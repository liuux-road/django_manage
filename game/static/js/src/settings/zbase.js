class Settings {
    constructor(root) {
        this.root = root;
        this.platform = "WEB";
        if (this.root.AcWingOS) this.platform = "ACAPP";

        this.username = "";
        this.photo = "";


        this.$settings = $(`
        <div class="ac-game-settings">
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
        <div class="box">
            <div class="square" style="--i:0;"></div>
            <div class="square" style="--i:1;"></div>
            <div class="square" style="--i:2;"></div>
            <div class="square" style="--i:3;"></div>
            <div class="square" style="--i:4;"></div>
            <div class="container">
            <div class="form ac-game-settings-login">
            <h2>登录</h2>
            <form>
                <div class="inputBox ac-game-settings-username">
                    <input type="text" placeholder="用户名">
                </div>
                <div class="inputBox ac-game-settings-password">
                    <input type="password" placeholder="密码">
                </div>
                <div class="inputBox ac-game-settings-submit">
                    <div class="ac-game-settings-item">
                        <button type="button">登录</button>
                    </div>
                </div>
                <!-- <p class="forget" style="text-align: right;">忘记密码？<a href="">点我</a></p> -->
                <div class="ac-game-settings-error-message"></div>
                <p class="forget" style="text-align: right;">还未注册？
                    <a href="" onclick="return false;" class="ac-game-settings-option">注册</a>
                </p>
            </form>
        </div>
        <div class="form ac-game-settings-register">
            <h2>注册</h2>
            <div class="inputBox ac-game-settings-username">
                <input type="text" placeholder="用户名">
            </div>
            <div class="inputBox ac-game-settings-password ac-game-settings-password-first">
                <input type="password" placeholder="密码">
            </div>
            <div class="inputBox ac-game-settings-password ac-game-settings-password-second">
                <input type="password" placeholder="确认密码">
            </div>
            <div class="inputBox ac-game-settings-submit">
                <div class="ac-game-settings-item">
                    <button type="button">注册</button>
                </div>
            </div>
            <div class="ac-game-settings-error-message">
            </div>
            <p class="forget" style="text-align: right;">
                <a href="" onclick="return false;" class="ac-game-settings-option">登录</a>
            </p>
        </div>
            </div>
        </div>
    </div>
`);
        this.$login = this.$settings.find(".ac-game-settings-login");
        this.$login_username = this.$login.find(".ac-game-settings-username input");
        this.$login_password = this.$login.find(".ac-game-settings-password input");
        this.$login_submit = this.$login.find(".ac-game-settings-submit button");
        this.$login_error_message = this.$login.find(".ac-game-settings-error-message");
        this.$login_register = this.$login.find(".ac-game-settings-option");
        this.$login.hide(); // 默认关闭

        this.$register = this.$settings.find(".ac-game-settings-register");
        this.$register_username = this.$register.find(".ac-game-settings-username input");
        this.$register_password = this.$register.find(".ac-game-settings-password-first input");
        this.$register_password_confirm = this.$register.find(".ac-game-settings-password-second input");
        this.$register_submit = this.$register.find(".ac-game-settings-submit button");
        this.$register_error_message = this.$register.find(".ac-game-settings-error-message");
        this.$register_login = this.$register.find(".ac-game-settings-option");
        this.$register.hide(); // 默认关闭


        this.$acwing_login = this.$settings.find('.ac-game-settings-acwing img');

        this.root.$ac_game.append(this.$settings);

        this.start();
    }
    start() {
        // 判断当前端口，acapp直接获取账号信息，web获取账号信息同时绘制登陆端口
        if (this.platform === "ACAPP") {
            this.getinfo_acapp();
        }
        else {
            // 从服务器端获取信息
            this.getinfo_web();
            // 监听触发了什么事件
            this.add_listening_events();
        }
    }
    add_listening_events() {    // 监听触发了什么事件
        let outer = this;
        this.add_listening_events_login();
        this.add_listening_events_register();

        // 申请授权码code
        this.$acwing_login.click(function () {
            outer.acwing_login();
        });
    }
    add_listening_events_login() {   //跳到注册界面
        let outer = this;
        this.$login_register.click(function () {
            outer.register();
        });
        this.$login_submit.click(function () {
            outer.login_on_remote();
        });
    }
    add_listening_events_register() {      //跳到登录界面
        let outer = this;
        this.$register_login.click(function () {
            outer.login();
        })
        this.$register_submit.click(function () {
            outer.register_on_remote();
        });
    }


    // 申请授权码code
    acwing_login() {
        $.ajax({
            url: "https://liuux.top/game/settings/acwing/web/apply_code/",
            type: "GET",
            success: function (resp) {
                // console.log(resp);
                if (resp.result === "success") {
                    window.location.replace(resp.apply_code_url);
                }
            }
        })
    }

    register() {    //打开注册界面
        this.$login.hide();
        this.$register.show();
    }
    login() {       //打开登录界面
        this.$register.hide();
        this.$login.show();
    }

    // acapp 申请授权
    acapp_login(appid, redirect_uri, scope, state) {
        let outer = this;
        // 这里调用acapp的API，简单修改一下参数
        // AcWingOS.api.oauth2.authorize(appid, redirect_uri, scope, state, callback);
        // 这里写的回调函数是自己的resp.redirect_urreceive_codei的返回值，resp.redirect_uri在apply_code文件中写的，实际就是receive_code，我们实现的是返回用户名和头像
        this.root.AcWingOS.api.oauth2.authorize(appid, redirect_uri, scope, state, function (resp) {
            // console.log(resp);
            if (resp.result === "success") {
                // 获取到登陆账号的用户名和头像
                outer.username = resp.username;
                outer.photo = resp.photo;

                //登录成功，关闭登录界面，打开主菜单
                outer.hide();
                outer.root.menu.show();
            }
            // else {
            //     outer.login();
            // }
        });
    }

    // 从acapp服务器端获取信息
    getinfo_acapp() {
        let outer = this;
        $.ajax({
            url: "https://liuux.top/game/settings/acwing/acapp/apply_code/",
            type: "GET",
            success: function (resp) {
                if (resp.result === "success") {
                    outer.acapp_login(resp.appid, resp.redirect_uri, resp.scope, resp.state);
                }
            }
        });
    }


    // 从web服务器端获取信息
    getinfo_web() {
        let outer = this;
        $.ajax({
            url: "https://liuux.top/game/settings/getinfo/",
            type: "GET",
            data: {
                platform: outer.platform,
            },
            success: function (resp) {
                // console.log(resp);
                if (resp.result === "success") {
                    // 获取到登陆账号的用户名和头像
                    outer.username = resp.username;
                    outer.photo = resp.photo;

                    //登录成功，关闭登录界面，打开主菜单
                    outer.hide();
                    outer.root.menu.show();
                } else {
                    outer.login();
                }
            }
        });
    }

    login_on_remote() {     //在远程服务器上登录
        let outer = this;
        let username = this.$login_username.val();
        let password = this.$login_password.val();
        this.$login_error_message.empty();
        $.ajax({
            url: "https://liuux.top/game/settings/login/",
            type: "GET",
            data: {
                username: username,
                password: password,
            },
            success: function (resp) {
                // console.log(resp);
                if (resp.result === "success") {
                    location.reload();
                } else {
                    outer.$login_error_message.html(resp.result);
                }
            }
        });
    }

    register_on_remote() {  //在远程服务器上注册
        let outer = this;
        let username = this.$register_username.val();
        let password = this.$register_password.val();
        let password_confirm = this.$register_password_confirm.val();
        this.$register_error_message.empty();

        $.ajax({
            url: "https://liuux.top/game/settings/register/",
            type: "GET",
            data: {
                username: username,
                password: password,
                password_confirm: password_confirm,
            },
            success: function (resp) {
                // console.log(resp);
                if (resp.result === "success") {
                    location.reload();
                } else {
                    outer.$register_error_message.html(resp.result);
                }
            }
        });
    }

    logout_on_remote() {     //在远程服务器上登出
        if (this.platform === "ACAPP") {
            this.root.AcWingOS.api.window.close();
        }
        else {
            $.ajax({
                url: "https://liuux.top/game/settings/logout/",
                type: "GET",
                success: function (resp) {
                    // console.log(resp);
                    if (resp.result === "success") {
                        location.reload();
                    }
                }
            });
        }
    }


    hide() {
        this.$settings.hide();
    }
    show() {
        this.$settings.show();
    }
}
