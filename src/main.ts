import "core-js";
import "regenerator-runtime/runtime";
import {main} from "./browser";
import {test} from "./test";

window.onload = function () {
    main();
    test();
}

