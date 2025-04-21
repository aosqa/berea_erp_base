/** @odoo-module **/

import { loadJS } from "@web/core/assets";
import { useService } from "@web/core/utils/hooks";
import { registry } from "@web/core/registry";
import { Component, onWillStart, useRef, useEffect, onWillUnmount , onMounted} from "@odoo/owl";
import { Card } from "./card";

export class DashboardRenderer extends Component {
 setup(){
    this.chartRef = useRef("chart_one");
    this.chartReftwo = useRef("chart_two");

    this.chartRefthree = useRef("chart_three");

    this.actionService = useService("action");
    onWillStart(async () => await loadJS(["/web/static/lib/Chart/Chart.js"]));
    onMounted(()=>this.renderChart())


 }

 renderChart(){
    new Chart(this.chartRef.el,
    {
      type: "bar",
      data: {
        labels: [
            'Red',
            'Blue',
            'Yellow'
          ],
          datasets: [
          {
            label: 'My First Dataset',
            data: [300, 50, 100],
            hoverOffset: 4
          },{
            label: 'My Second Dataset',
            data: [100, 70, 150],
            hoverOffset: 4
          }]
      },
     
    }
  );


  new Chart(this.chartReftwo.el,
    {
      type: "bar",
      data: {
        labels: [
            'Red',
            'Blue',
            'Yellow'
          ],
          datasets: [
          {
            label: 'My First Dataset',
            data: [300, 50, 100],
            hoverOffset: 4
          },{
            label: 'My Second Dataset',
            data: [100, 70, 150],
            hoverOffset: 4
          }]
      },
     
    }
  );
  new Chart(this.chartRefthree.el,
    {
      type: "bar",
      data: {
        labels: [
            'Red',
            'Blue',
            'Yellow'
          ],
          datasets: [
          {
            label: 'My First Dataset',
            data: [300, 50, 100],
            hoverOffset: 4
          },{
            label: 'My Second Dataset',
            data: [100, 70, 150],
            hoverOffset: 4
          }]
      },
     
    }
  );
}

}
DashboardRenderer.components = {Card}
DashboardRenderer.template = "berekasystems_hr.hr_Dashboard";
registry.category("actions").add("berekasystems_hr.hr_dashboard", DashboardRenderer);
