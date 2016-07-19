var app=angular.module('team',[])

    .controller('pagination',function($scope){

        $scope.page='./views/team_bat_1.html';
        
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

    .controller('team_bat_3',function($scope){
        
        Highcharts.chart('team_bat_3',{
               chart:{
                   type:'heatmap',
                   marginTop:'40',
                   marginBottom:'80',
                   plotBorderWidth:1
                   
               },
                title:{
                    text:'Individual batting performance'
                },
                xAxis:{
                    categories:['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon'],
                    title:{
                        text:'Player'
                    }
                    
                },
                yAxis:{
                     categories: ['Aus', 'Bng', 'Ind', 'Sri', 'Pak'],
                     title:{
                            text:'Match'
                        }
                },
                colorAxis:{
                   
                    minColor:'#FFFFFF',
                    maxColor:'#33cc33'
                },
                legend:{
                    align:'right',
                    verticalAlign:'top',
                    symbolHeight:280,
                    y:25,
                    layout:'vertical'
                },
                series:[
                    {
                        name:'Run',
                        data:[
                                [0,0,23],[0,1,43],[0,2,34],[0,3,43],[0,4,44],
                                [1,0,23],[1,1,43],[1,2,34],[1,3,33],[1,4,54],
                                [2,0,34],[2,1,13],[2,2,34],[2,3,93],[2,4,4],
                                [3,0,73],[3,1,43],[3,2,24],[3,3,63],[3,4,24],
                                [4,0,32],[4,1,53],[4,2,14],[4,3,93],[4,4,14],
                             ],
                        dataLabels:{
                            enabled:true,
                            color: '#000000'
                        },
                        borderWidth:1
                    }]
            
            
        })
        
    })

    .controller('team_bowl_1',function($scope){
        
        Highcharts.chart('team_bowl_1',{
                chart:{
                    //type:'column'
                },
                title:{
                    text:"Bowling performance of the team"
                },
                xAxis:{
                    categories:['Aus','Ind','Bng','Zmb']
                },
                yAxis:[
                    {
                      min:0,
                      labels:{
                              style:{
                                 color:Highcharts.getOptions().colors[3]
                              }
                      },
                      title:{
                          text:"Run",
                          style:{
                              color:Highcharts.getOptions().colors[3]
                          }
                      }    
                    },{
                        title:{
                            text:'Balls',
                            style:{
                              color:Highcharts.getOptions().colors[4]
                          },
                        },
                        labels:{
                              style:{
                                 color:Highcharts.getOptions().colors[4]
                              }
                          },
                        opposite:true
                    },{
                        title:{
                            text:'Wickets',
                             style:{
                              color:Highcharts.getOptions().colors[5]
                          }
                        },
                        labels:{
                              style:{
                                 color:Highcharts.getOptions().colors[5]
                              }
                          },
                       
                        opposite:true,
                        min:0,
                        max:11
                    }
                ],
                tooltip:{
                   
                },
                plotOptions:{
                    column:{
                        grouping:false,
                        shadow:false,
                        borderWidth:1
                    }
                },
                series:[
                    {   type:'column',
                        name:"Runs concded",
                        color:Highcharts.getOptions().colors[6],
                        data:[34,54,54,45],
                        pointPadding:0.3,
                        pointPlacement:-0.2
                        
                    },{
                        type:'column',
                        name:"Extras",
                        color:Highcharts.getOptions().colors[3],
                        data:[30,60,80,15],
                        pointPadding:0.4,
                        pointPlacement:-0.2
                    },{
                        type:'column',
                        name:"Boundary Balls",
                        color:Highcharts.getOptions().colors[10],
                        data:[12,34,45,44],
                        pointPadding:0.3,
                        pointPlacement:0.2,
                        yAxis:1
                    },{
                        type:'column',
                        name:"Dot Balls",
                        color:Highcharts.getOptions().colors[9],
                        data:[24,34,4,85],
                        pointPadding:0.4,
                        pointPlacement:0.2,
                        yAxis:1
                    },{
                        type:'line',
                        name:"wickets",
                        color:Highcharts.getOptions().colors[5],
                        data:[24,34,4,85]
                    }]
            
        })
        
        
    })


    .controller('team_bat_1',function($scope){
        
        
        Highcharts.chart('team_bat_1',{
            
            title: {
                text: 'Team Statistics',
                
            },
           colors:['#009933','#ff6600','#999966','#ff9933'],
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