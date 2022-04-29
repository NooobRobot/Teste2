import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';
import { bindCallback } from 'rxjs';

declare var google;

@Component({
  selector: "app-home",
  templateUrl: "dashboard.page.html",
  styleUrls: ["dashboard.page.scss"]
})


export class DashboardPage {
  constructor(public navCtrl: NavController){}
    showChart(){
      // Tabela, criação
      var data = new google.visualization.DataTable();
          data.addColumn('string', 'Topping');
          data.addColumn('number', 'Slices');
          data.addRows([
                          ['Renda', 50],
                          ['Gastos', 30],
                          ['Conta Bancária',20],
                        ]);

      // Opções
      var options = {'title':'Gráfico',
                      'width':800,
                      'height':600,
                      is3D: true,
                      colors: ['#1E96C8', '#198ac2', '#3dc2ff'],
                      
                    };
                    

      var chart = new google.visualization.PieChart(document.getElementById('grafico'));
      chart.draw(data, options);
    }
}
