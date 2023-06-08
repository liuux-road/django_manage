class AcGameMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
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
            <div class="container-menu">

                <div class="form ac-game-menu-field">
                    <form>
                        <div class="inputBox ac-game-menu-field-item ac-game-menu-field-item-single-mode">
                            <button type="button">单人模式</button>
                        </div>
                        <div class="inputBox ac-game-menu-field-item ac-game-menu-field-item-multi-mode">
                            <button type="button">多人模式</button>
                        </div>
                        <div class="inputBox ac-game-menu-field-item ac-game-menu-field-item-settings-mode">
                            <button type="button">退出</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
`);
        // 先不直接显示menu，而是登陆成功在显示menu
        this.$menu.hide();
        this.root.$ac_game.append(this.$menu);
        this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single-mode');
        this.$multi_mode = this.$menu.find('.ac-game-menu-field-item-multi-mode');
        this.$settings_mode = this.$menu.find('.ac-game-menu-field-item-settings-mode');

        this.start();
    }
    start() {
        this.add_listening_events();
    }
    add_listening_events() {
        let outer = this;
        this.$single_mode.click(function () {
            outer.hide();   // 关闭主页面
            outer.root.playground.show("single mode");   // 打开游戏界面
        });

        this.$multi_mode.click(function () {
            outer.hide();   // 关闭主页面
            outer.root.playground.show("multi mode");   // 打开游戏界面
        });

        this.$settings_mode.click(function () {
            outer.root.settings.logout_on_remote();
        });
    }

    show() {    //显示menu界面
        this.$menu.show();
    }
    hide() {    //隐藏menu界面
        this.$menu.hide();
    }
}
