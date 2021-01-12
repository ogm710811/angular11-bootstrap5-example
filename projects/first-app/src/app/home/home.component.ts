import {Component, OnInit} from '@angular/core';
import {AgChartOptions} from 'ag-charts-community';
import {CustomCardColors} from '../../../../lib-demo/src/lib/enums/custom-card-colors.enum';
import {CustomCardSizes} from '../../../../lib-demo/src/lib/enums/custom-card-sizes.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  optionsDoughnut: AgChartOptions;
  optionsSimpleLine: AgChartOptions;

  customCardSettings1 = {
    bgColor: ['bg-card-primary'],
    cardWidth: ['pill-w-s', 'pill-h-s'],
    hasNotification: false,
    hasIconBadge: false,
    bodyAlignment: ['flex-column', 'align-items-center', 'justify-content-around']
  };
  customCardSettings2 = {
    bgColor: ['bg-card-default'],
    cardWidth: ['pill-w-s', 'pill-h-s'],
    hasNotification: false,
    hasIconBadge: true,
    bodyAlignment: ['flex-column', 'align-items-center', 'justify-content-around']
  };
  customCardSettings3 = {
    bgColor: ['bg-card-default'],
    cardWidth: ['pill-w-s', 'pill-h-s'],
    hasNotification: false,
    hasIconBadge: false,
    bodyAlignment: ['flex-column', 'align-items-center', 'justify-content-around']
  };
  customCardSettings4 = {
    bgColor: ['bg-card-default'],
    cardWidth: ['pill-w-s', 'pill-h-s'],
    hasNotification: false,
    hasIconBadge: false,
    bodyAlignment: ['flex-column', 'align-items-center', 'justify-content-around']
  };
  customCardSettings5 = {
    bgColor: ['bg-card-default'],
    cardWidth: ['pill-w-s', 'pill-h-s'],
    hasNotification: true,
    hasIconBadge: false,
    bodyAlignment: ['flex-column', 'align-items-center', 'justify-content-around']
  };
  customCardSettings6 = {
    bgColor: ['bg-card-default'],
    cardWidth: ['pill-w-xl', 'pill-h-m'],
    hasNotification: false,
    hasIconBadge: false,
    bodyAlignment: ['flex-column', 'align-items-center', 'justify-content-around']
  };
  customCardSettings7 = {
    bgColor: ['bg-card-secondary'],
    cardWidth: ['pill-w-xl', 'pill-w-lg-l', 'pill-h-s'],
    hasNotification: false,
    hasIconBadge: false,
    bodyAlignment: ['flex-column', 'justify-content-end']
  };
  customCardSettings8 = {
    bgColor: ['bg-card-tertiary'],
    cardWidth: ['pill-w-s', 'pill-h-s'],
    hasNotification: false,
    hasIconBadge: false,
    bodyAlignment: ['align-items-end']
  };
  customCardSettings9 = {
    bgColor: ['bg-card-primary'],
    cardWidth: ['pill-w-s', 'pill-h-s'],
    hasNotification: false,
    hasIconBadge: false,
    bodyAlignment: ['flex-column', 'align-items-center', 'justify-content-around']
  };

  dataDoughnut = [
    {
      type: 'retirement',
      2020: 87
    },
    {
      type: 'retirement',
      2020: 13
    }
  ];
  dataSimpleLine = [
    { month: '1', revenue: 155, profit: 33 },
    { month: '2', revenue: 123, profit: 35.50 },
    { month: '3', revenue: 152.50, profit: 41 },
    { month: '4', revenue: 94, profit: 29 },
    { month: '5', revenue: 112.50, profit: 37 },
    { month: '6', revenue: 100, profit: 85.50 },
    { month: '7', revenue: 95, profit: 95 },
    { month: '8', revenue: 91, profit: 105.50 },
    { month: '9', revenue: 85.50, profit: 118.50 },
    { month: '10', revenue: 94, profit: 97.40 },
    { month: '11', revenue: 112.50, profit: 37 },
    { month: '12', revenue: 148, profit: 41.50 },
  ];

  doughnutTheme = {
    baseTheme: 'ag-default-dark',
    palette: {
      fills: ['#75b798', '#fff'],
      strokes: ['transparent'],
    }
  };

  constructor() {
    this.optionsDoughnut = {
      theme: this.doughnutTheme as any,
      autoSize: false,
      background: {
        visible: false
      },
      width: 140,
      height: 140,
      padding: {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
      },
      data: this.dataDoughnut,
      title: { enabled: false },
      subtitle: { enabled: false },
      series: [
        {
          type: 'pie',
          labelKey: 'type',
          angleKey: '2020',
          label: { enabled: false },
          title: { enabled: false },
          innerRadiusOffset: -8,
          showInLegend: false
        }
      ],
    };
    this.optionsSimpleLine = {
      autoSize: false,
      background: {
        visible: false
      },
      width: 304,
      height: 76,
      padding: {
        top: 5,
        right: -18,
        bottom: 5,
        left: -18
      },
      data: this.dataSimpleLine,
      legend: { enabled: false },
      axes: [
        {
          type: 'category',
          position: 'bottom',
          line: {
            width: 0
          },
          tick: {
            width: 0,
            count: 0
          },
          label: {
            color: 'transparent'
          }
        },
        {
          type: 'number',
          position: 'left',
          line: {
            width: 0
          },
          tick: {
            width: 0,
            count: 0
          },
          title: {
            enabled: false
          }
        }
      ],
      series: [
        {
          type: 'line',
          xKey: 'month',
          yKey: 'revenue',
          marker: {
            size: 3
          }
        },
        {
          type: 'line',
          xKey: 'month',
          yKey: 'profit',
          marker: {
            size: 3
          }
        },
      ],
    };
  }

  ngOnInit(): void {
  }

}
