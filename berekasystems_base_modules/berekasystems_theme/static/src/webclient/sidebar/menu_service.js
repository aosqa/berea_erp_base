/** @odoo-module **/

import { registry } from "@web/core/registry";

const myService = {
    dependencies: ["notification"],
    start(env, { notification }) {
        return {
            getNotification(){
    }
}
}
};

registry.category("services").add("myService", myService);