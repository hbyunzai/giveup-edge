import "core-js/stable";
import "regenerator-runtime/runtime";

import {main} from "./browser";

window.onload = function () {
    // 下次是否继续提示
    if (localStorage.getItem("giveup-edge") === '0') {

    } else if (!localStorage.getItem("giveup-edge")) {
        main();
    }
}

