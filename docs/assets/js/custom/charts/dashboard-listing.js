(function ($) {
  "use strict";

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var color = Chart.helpers.color;

  // creating chart shadow
  var draw = Chart.controllers.line.prototype.draw;
  Chart.controllers.line = Chart.controllers.line.extend({
    draw: function () {
      draw.apply(this, arguments);
      var ctx = this.chart.chart.ctx;

      var showShadow = ($(ctx.canvas).data('shadow')) ? $(ctx.canvas).data('shadow') : 'no';
      var chartType = ($(ctx.canvas).data('type')) ? $(ctx.canvas).data('type') : 'area';

      if (showShadow == 'yes' && chartType == 'area') {
        var _fill = ctx.fill;
        ctx.fill = function () {
          ctx.save();
          ctx.shadowColor = color('#5c5c5c').alpha(0.5).rgbString();
          ctx.shadowBlur = 16;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          _fill.apply(this, arguments);
          ctx.restore();
        }
      } else if (showShadow == 'yes' && chartType == 'line') {
        var _stroke = ctx.stroke;
        ctx.stroke = function () {
          ctx.save();
          ctx.shadowColor = '#07C';
          ctx.shadowBlur = 10;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 4;
          _stroke.apply(this, arguments);
          ctx.restore();
        }
      }
    }
  });

  var defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    layout: {
      padding: 0
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    }
  };

  // Properties
  var optsProperties = $.extend({}, defaultOptions);
  optsProperties.elements = {
    line: {
      tension: 0, // disables bezier curves
    }
  };

  // var ctxProperties = document.getElementById('chart-properties').getContext('2d');
  // new Chart(ctxProperties, {
  //     type: 'line',
  //     data: {
  //         labels: ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F", "Page G"],
  //         datasets: [{
  //                 label: 'Properties',
  //                 data: [70, 425, 263, 820, 290, 1060, 230],
  //                 pointRadius: 0,
  //             backgroundColor: color('#092453').alpha(0.9).rgbString(),
  //             borderColor: color('#092453').alpha(0.9).rgbString(),
  //             hoverBorderColor: color('#092453').alpha(0.9).rgbString(),
  //                 pointBorderWidth: 0,
  //                 pointHoverBorderWidth: 0,
  //             }]
  //     },
  //     options: optsProperties
  // });

  // Cities
  // var optsCities = $.extend({}, defaultOptions);

  // var ctxCities = document.getElementById('chart-cities').getContext('2d');
  // new Chart(ctxCities, {
  //     type: 'line',
  //     data: {
  //         labels: ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F", "Page G"],
  //         datasets: [{
  //                 label: 'Cities',
  //                 data: [70, 325, 163, 620, 190, 860, 230],
  //                 pointRadius: 0,
  //                 backgroundColor: color('#b47928').alpha(0.9).rgbString(),
  //                 borderColor: color('#b47928').alpha(0.9).rgbString(),
  //                 hoverBorderColor: color('#b47928').alpha(0.9).rgbString(),
  //                 pointBorderWidth: 0,
  //                 pointHoverBorderWidth: 0,
  //             }]
  //     },
  //     options: optsCities
  // });

  // Online Visits
  // var optsOnlineVisits = $.extend({}, defaultOptions);
  // optsOnlineVisits.elements = {
  //     line: {
  //         tension: 0, // disables bezier curves
  //     }
  // };

  // var ctxOnlineVisits = document.getElementById('chart-online-visits').getContext('2d');
  // new Chart(ctxOnlineVisits, {
  //     type: 'line',
  //     data: {
  //         labels: ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F", "Page G"],
  //         datasets: [{
  //                 label: 'Online Visits',
  //                 data: [170, 450, 163, 720, 190, 860, 230],
  //                 pointRadius: 0,
  //                 backgroundColor: color('#078d79').alpha(0.9).rgbString(),
  //                 borderColor: color('#078d79').alpha(0.9).rgbString(),
  //                 hoverBorderColor: color('#078d79').alpha(0.9).rgbString(),
  //                 pointBorderWidth: 0,
  //                 pointHoverBorderWidth: 0,
  //             }]
  //     },
  //     options: optsOnlineVisits
  // });

  // Online Queries
  // var optsOnlineQueries = $.extend({}, defaultOptions);
  // optsOnlineQueries.elements = {
  //     line: {
  //         tension: 0, // disables bezier curves
  //     }
  // };

  // var ctxOnlineQueries = document.getElementById('chart-online-queries').getContext('2d');
  // new Chart(ctxOnlineQueries, {
  //     type: 'line',
  //     data: {
  //         labels: ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F", "Page G"],
  //         datasets: [{
  //                 label: 'Online Queries',
  //                 data: [170, 450, 163, 720, 190, 860, 230],
  //                 pointRadius: 0,
  //                 backgroundColor: color('#a14776').alpha(0.9).rgbString(),
  //                 borderColor: color('#a14776').alpha(0.9).rgbString(),
  //                 hoverBorderColor: color('#a14776').alpha(0.9).rgbString(),
  //                 pointBorderWidth: 0,
  //                 pointHoverBorderWidth: 0,
  //             }]
  //     },
  //     options: optsOnlineQueries
  // });

  // Deals
  // var ctxDeals = document.getElementById('chart-deals').getContext('2d');

  // var optsDeals = $.extend({}, defaultOptions);
  // optsDeals.scales = {
  //     xAxes: [
  //         {
  //             gridLines: {
  //                 display: true
  //             },
  //             display: true,
  //             stacked: true,
  //             categoryPercentage: 1.0,
  //             barPercentage: 0.4
  //         }
  //     ],
  //     yAxes: [
  //         {
  //             gridLines: {
  //                 display: true
  //             },
  //             display: true,
  //             stacked: true
  //         }
  //     ]
  // };

  // optsDeals.tooltips = {
  //     callbacks: {
  //         title: function (tooltipItem, data) {
  //             var tindex = tooltipItem[0].index;
  //             return months[tindex];
  //         }
  //     }
  // };

  // new Chart(ctxDeals, {
  //     type: 'bar',
  //     data: {
  //         labels: ['Elderly Care Taker', 'Practical Score', 'Test Score', 'Test Before', 'Offine Applicants'],
  //         datasets: [
  //             {
  //                 label: 'Fail',
  //                 data: [2, 4, 6, 2, 1, 1],
  //                 backgroundColor: '#F5222D',
  //                 hoverBackgroundColor: '#F5222D',
  //             },
  //             {
  //                 label: 'Remaining',
  //                 data: [1, 2, 3, 2, 3, 1],
  //                 backgroundColor: '#ff9800',
  //                 hoverBackgroundColor: '#ff9800',
  //             },
  //             {
  //                 label: 'Pass',
  //                 data: [2, 3, 1, 2, 3, 1],
  //                 backgroundColor: '#52C41A',
  //                 hoverBackgroundColor: '#52C41A',
  //             },
  //         ]
  //     },
  //     options: optsDeals
  // });
  // // Bar chart
  // new Chart(document.getElementById("chart-deals"), {
  //     type: 'bar',
  //     data: {
  //         labels: ['Elderly Care Taker', 'Practical Score', 'Test Score', 'Test Before', 'Offine Applicants', ],
  //         datasets: [
  //             {
  //                 label: 'Fail',
  //                 data: [2, 4, 6, 2, 1, 1],
  //                 backgroundColor: '#F5222D',
  //                 hoverBackgroundColor: '#F5222D',
  //             },
  //             {
  //                 label: 'Remaining',
  //                 data: [1, 2, 3, 2, 3, 1],
  //                 backgroundColor: '#ff9800',
  //                 hoverBackgroundColor: '#ff9800',
  //             },
  //             {
  //                 label: 'Pass',
  //                 data: [2, 3, 1, 2, 3, 1],
  //                 backgroundColor: '#52C41A',
  //                 hoverBackgroundColor: '#52C41A',
  //             }
  //         ]
  //     },
  //     options: {
  //         legend: { display: false },
  //         title: {
  //             display: true,
  //         },
  //         xAxes: [
  //             {
  //                 stacked: true,
  //                 categoryPercentage: 1.0,
  //                 barPercentage: 0.4
  //             }
  //         ],
  //         yAxes: [

  //             {
  //                 stacked: true
  //             }

  //         ]
  //     }
  // });



  // var barChartData = {
  //     // labels: schedule_name,
  //     labels: ['Elderly Care Taker', 'Practical Score', 'Test Score', 'Test Before', 'Offine Applicants', 'IS/DELHI/O'],
  //     datasets: [
  //         {
  //             label: 'Fail',
  //             backgroundColor: '#ff4f57',
  //             // data: total_fail_candidate
  //             data: [1, 2, 3, 2, 3, 1],
  //         },
  //         {
  //             label: 'Remaning Candidates',
  //             backgroundColor: '#ffc654',
  //             // data: total_remaning_candidate,
  //             data: [1, 2, 3, 2, 3, 1],
  //         },
  //         {
  //             label: 'Pass',
  //             backgroundColor: '#1baa6f',
  //             // data: total_pass_candidate
  //             data: [2, 4, 6, 2, 1, 1],
  //         },

  //     ]

  // };


  // var ctx = document.getElementById('dashboardGraph').getContext('2d');

  // window.myBar = new Chart(ctx, {
  //     type: 'bar',
  //     data: barChartData,
  //     options: {
  //         legend: {
  //             display:false,

  //         },
  //         tooltips: {
  //             mode: 'index',
  //             intersect: true,
  //             backgroundColor: 'rgba(0, 0, 0, 0.7)',
  //             reversed: true,
  //             itemSort: function(a, b) 
  //             {return b.datasetIndex - a.datasetIndex}


  //         },
  //         responsive: true,
  //         scales: {
  //             xAxes: [{
  //                 stacked: true,
  //                 categoryPercentage: 1.0,
  //                 barPercentage: 0.5,
  //                 ticks: {
  //                     stepSize: 1,
  //                     min: 0,
  //                     autoSkip: false
  //                 }
  //             }],
  //             yAxes: [{
  //                 stacked: 'reverse'
  //             }]
  //         }
  //     }
  // });
  // new Chart(document.getElementById("dashboardDoughnut"), {
  //     type: 'doughnut',
  //     data: {
  //       labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
  //       datasets: [
  //         {
  //           label: "Population (millions)",
  //           backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
  //           data: [2478,5267,734,784,433]
  //         }
  //       ]
  //     },
  //     options: {

  //     }
  // });

  //Bar Graph
  var optionsBar = {
    chart: {
      type: 'bar',
      height: 380,
      width: '100%',
      stacked: true,
      foreColor: '#999',

    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '14px',
        color: '#545454',
        fontFamily: 'inherit',
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    colors: ["#00C5A4", '#f1fc76', '#025265'],
    series: [{
      name: "Fail",
      data: [15, 10, 14, 29, 24, 22],
    },
    {
      name: "Remaining",
      data: [20, 16, 20, 24, 27, 22],
    },
    {
      name: "Pass",
      data: [25, 18, 10, 21, 22, 22],
    }],
    labels: ['Elderly Care Taker', 'Practical Score', 'Test Score', 'Test Before', 'Offine Applicants', 'IS/DELHI/O'],
    xaxis: {
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        show: false
      },
      labels: {
        show: true,
        style: {
          fontSize: '14px',
          color: '#545454',
          fontFamily: 'inherit',
        },
        trim: false
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        },
      },
      yaxis: {
        lines: {
          show: false
        },
      }
    },
    yaxis: {
      axisBorder: {
        show: true
      },
      labels: {
        show: true,
        style: {
          fontSize: '14px',
          fontFamily: 'inherit',
        },
      },
    },
    legend: {
      floating: true,
      position: 'top',
      horizontalAlign: 'right',
      offsetY: -10
    },
    title: {
      text: 'Recent Assessment Report',
      align: 'left',
      style: {
        fontSize: '16px',
        fontFamily: 'inherit',
      },
    },
    tooltip: {
      shared: true,
      inverseOrder: true
    }

  }
  var chartBar = new ApexCharts(document.querySelector('#dashboardBarGraph'), optionsBar);
  chartBar.render();

  //Donut Graph
  var optionsDonutTop = {
    chart: {
      height: 380,
      type: 'donut',
      foreColor: '#999',
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
          customIcons: []
        },
        autoSelected: 'zoom'
      },

    },
    plotOptions: {
      pie: {
        size: 150,
        donut: {
          size: '70%',
        },

      },
      dataLabels: {
        enabled: false
      }
    },
    colors: ['#025265', '#2c6183', '#468498', '#00c0a2'],
    title: {
      text: 'Visitors Source'
    },
    series: [20, 27, 15, 35],
    labels: ['Elderly Care Taker', 'Lead Carpainter', 'Press Shop Operator', 'Retail Sales Associate'],
    legend: {
      floating: true,
      position: 'top',
      horizontalAlign: 'right',
      offsetY: 0,
      style: {
        fontFamily: 'inherit',
      },
    },
    title: {
      text: 'Assessments in Job Roles',
      align: 'left',
      style: {
        fontSize: '16px',
        fontFamily: 'inherit',
      }
    },
  }

  var chartDonut2 = new ApexCharts(document.querySelector('#dashboardDonutGraph'), optionsDonutTop);
  chartDonut2.render().then(function () {
    // window.setInterval(function () {
    //   chartDonut2.updateSeries([getRandom(), getRandom(), getRandom()])
    // }, 1000)
  });

  var optionsLine = {
    chart: {
      height: 350,
      type: 'area',
      foreColor: '#999'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    colors: ["#00C5A4"],
    series: [{
      name: 'Total Assessments',
      data: [31, 40, 28, 51, 42, 109, 100]
    }],

    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    title: {
      text: 'Number of Daily Assessments Done',
      align: 'left',
      style: {
        fontSize: '16px',
        fontFamily: 'inherit',
      }
    },
  }

  var chart = new ApexCharts(document.querySelector("#dashboardLineGraph"), optionsLine); chart.render();

  $('.dt-chart .action-btn').each(function () {
    $(this).on('click', function () {
      wieldy.addClass(this, '.dt-chart', 'dt-chart__reveal')
    });
  });

  $('.dt-chart .close-btn').each(function () {
    $(this).on('click', function () {
      wieldy.removeClass(this, '.dt-chart', 'dt-chart__reveal')
    });
  });

  // $(".dt-slider .owl-carousel").owlCarousel({
  //     items: 1
  // });
})(jQuery);