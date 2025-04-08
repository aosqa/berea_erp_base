/** @odoo-module **/
import {WebClient} from "@web/webclient/webclient";
import { SideBar } from "@berekasystems_theme/webclient/sidebar/sidebar";
import { patch } from '@web/core/utils/patch';
import { useService } from "@web/core/utils/hooks";

patch(WebClient.prototype,{
    setup() {
        super.setup();
        const titleService = useService("title");
        titleService.setParts({ zopenerp: "" });
    },
    
})

WebClient.components={
    ...WebClient.components,
    SideBar

}