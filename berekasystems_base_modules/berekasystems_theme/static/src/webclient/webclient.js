/** @odoo-module **/
import { Component, xml, useState, onMounted , onWillStart} from "@odoo/owl";
import {WebClient} from "@web/webclient/webclient";
import { SideBar } from "@berekasystems_theme/webclient/sidebar/sidebar";
import { patch } from '@web/core/utils/patch';

patch(WebClient,{
    
    components:{
        ...WebClient.components,
        SideBar

    }
})