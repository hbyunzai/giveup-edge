import "core-js";
import "regenerator-runtime/runtime";
require('core-js/features/object/define-property');
require('core-js/features/object/create');
require('core-js/features/object/assign');
require('core-js/features/array/for-each');
require('core-js/features/array/index-of');
require('core-js/features/function/bind');
require('core-js/features/promise');

import {main} from "./browser";

window.onload = function () {
    // 下次是否继续提示
    if (localStorage.getItem("giveup-edge") === '0') {

    } else if (!localStorage.getItem("giveup-edge")) {
        main();
    }
}

