var app=angular.module('team',[])

    .controller('pagination',function($scope){

        $scope.page='./views/team_bat_2.html';
        
        $scope.changePage=function(name){
            $scope.page='./views/'+name;
        }
    })

    

    .controller('map',function($scope){
        AmCharts.makeChart( "map", {
               
                    "type": "map",
                    "dataProvider": {
                      "map": "worldLow",
                      "getAreasFromMap": true
                    },
                    "areasSettings": {
                        "autoZoom": true,
                        "selectedColor": "#CC0000"
                    },
                    
                    "smallMap": {}
                  });
    })

    .controller('team_bat_1',function($scope){
        
        
        Highcharts.chart('team_bat_1',{
            
            title: {
                text: 'Team Statistics',
                
            },
           xAxis: {
                categories: ['10', '20', '30', '40', '50'],
                title: {
                    text: 'Over'
                }
            },
            yAxis: {
                title: {
                    text: 'Runs'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: 'runs'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Match 1',
                data: [10, 25, 8, 17, 31]
            }, {
                name: 'Match 2',
                data: [2, 15, 27, 19, 24]
            }, {
                name: 'Match 3',
                data: [0, 6 , 15, 30, 24]
            },]

        })
    })

    .controller('team_bat_2',function($scope){
        Highcharts.chart('team_bat_2',{
           chart: {
               type: 'bar'
            },
            title: {
                text: 'Batting Partnership Number'
            },

            xAxis: {
                categories: ['1', '2', '3'],
                title: {
                    text: 'Partnership',
                    style:{
                        color:Highcharts.getOptions().colors[7]
                    }
                },
                
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Run',
                    align: 'high',
                     style:{
                        color:Highcharts.getOptions().colors[7]
                    }
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' runs'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: 10,
                y: 80,
                floating: true,
                borderWidth: 1,
                backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Match-1',
                data: [107, 50, 104]
            }, {
                name: 'Match-2',
                data: [33, 78, 100]
            }, {
                name: 'Match-3',
                data: [75, 110, 65]
            }]
    
        })
    })