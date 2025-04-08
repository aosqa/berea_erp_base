/** @odoo-module **/
import { Component, xml, useState, onMounted , onWillStart} from "@odoo/owl";
import { useService,useBus } from "@web/core/utils/hooks";

export class SideBar extends Component {
    setup() {
        this.state = Array.from({ length: 100 }, (_, i) => i);
        this.menuService = useService("menu");
        this.onMenuSelection = this.onMenuSelection.bind(this);
        this.state = useState({
            'current_menu':0,
            'fullscreen':false,
        })
        useBus(this.env.bus, "ACTION_MANAGER:UI-UPDATED", ({ detail: mode }) => {
            if (mode !== "new") {
                this.state.fullscreen = mode === "fullscreen";
            }
        });

    }

    getMenuItemHref(payload) {
        const parts = [`menu_id=${payload.id}`];
        if (payload.actionID) {
            parts.push(`action=${payload.actionID}`);
        }
        return "#" + parts.join("&");
    }
    getIconLink(menu){
        return menu.webIcon.replace(',','/')
    }
    
    async onMenuSelection(menu) {
        if (menu) {
            await this.menuService.selectMenu(menu);
        }
        this.menuService.getCurrentApp()
        this.state.current_menu+=1
    }
    get isMobile() {    
        return window.innerWidth <= 768; // Adjust breakpoint
    }
}
SideBar.template='berekasystems_theme.sidebar'