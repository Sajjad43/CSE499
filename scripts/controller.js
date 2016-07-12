'use strict';

var myApp = angular.module('cricket', []);

    myApp.controller('team',['$scope',function($scope){
        Highcharts.chart('container', {

				    xAxis: {
				        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
				            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
				    },

				    series: [{
				        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
				    }],
                   title:{
                       text:"Team Performance"
                   }
				});
    }])
        
    .controller('pagination',['$scope',function($scope){
        
        $scope.page='graph-1.html';
        
        $scope.changePage=function(name){
            $scope.page=name;
            console.log(name);
        }
        
        
    }])
        
        
        
        
    .controller('graph-4',['$scope',function($scope){
        
        Highcharts.chart('graph-4',{
            
            title:{
              text:"Run comparison analysis"  
            },
            
            
            xAxis:{
              
                title:{
                    text:'Overs'
                },
                  categories: ['10', '20', '30', '40', '50']
            },
            yAxis:{
                title:{
                    text:'Runs'
                }
            },
       
            
            series:[
                {
                    name:'team 1',
                    data:[2,27,43,55,66]
                    
                },{
                    name:'team 2',
                    data:[35,43,56,80,90]
                    
                
                },{
                    name:'wicket fall of team 1',
                    type:'scatter',
                    color: 'rgba(223, 83, 83, .5)',
                    data:[
                        [0,20],[1,34],[0,34],[4,32]
                        
                    ]
                },{
                    name:'wicket fall of team 2',
                    type:'scatter',
                    color: 'rgba(65, 25, 253, .5)',
                    data:[
                        [0,25],[1,44],[0,54],[4,62]
                        
                    ]
                }
                
            ]
            
            
            
            
            
        });
        
        
        
        
    }])
    
    
    
     .controller('graph-3',['$scope',function($scope){
        
        Highcharts.chart('graph-3',{
                    chart:{
                        type:'bar'
                    },
            
                    title:{
                        text:'Run concede by each bowler over the 10overs interval'
                    },
                    
                    xAxis: {
                        
                        categories: ['10', '20', '30', '40', '50'],
                        title:{
                           text:'Over No'
                        }
                    },  
                    yAxis:{
                        minTickInterval:10,
                        title:{
                            text:'Runs'
                        }
                    },
                            
                     plotOptions: {
                        series: {
                            stacking: 'normal'
                        }
                    },

				    series: [{
                            name:"Shoaib",
                            data:[2,4,0,0,0]
                        },{
                             name:"Inzamam",
                            data:[0,4,25,134,0]
                        },{
                             name:"Shoaib khan",
                            data:[0,4,34,41,4]
            
                        }]
            });
        
        
    }])
    
    
    
    .controller('graph-2',['$scope',function($scope){
        
        Highcharts.chart('graph-2',{
                    chart:{
                        type:'bar'
                    },
            
                    title:{
                        text:'Partnership Analysis of the team'
                    },
                    
                    xAxis: {
                        type:'linear',
                        title:{
                           text:'Partnership No'
                        }
                    },  
                    yAxis:{
                        minTickInterval:10,
                        title:{
                            text:'Runs'
                        }
                    },
                            
                     plotOptions: {
                        series: {
                            stacking: 'normal'
                        }
                    },

				    series: [{
                            name:"Shoaib",
                            data:[2,4,0,0,0]
                        },{
                             name:"Inzamam",
                            data:[0,4,25,134,0]
                        },{
                             name:"Shoaib khan",
                            data:[0,4,34,41,4]
            
                        }]
            });
        
        
    }])
    
    
    
    
    .controller('graph-1',['$scope',function($scope){
       
        Highcharts.chart('graph-1', {
                        
                    chart:{
                        type:'column'
                    },
            
                    title:{
                        text:'Run contribution of each batsman'
                    },
                    
                    xAxis: {
                        categories: ['10', '20', '30', '40', '50']
                    },
                    yAxis:{
                       type:'linear',
                        title:{
                            text:'Runs'
                        }
                    },
                            
                     plotOptions: {
                        column: {
                            stacking: 'normal'
                        }
                    },

				    series: [{
                            name:"Shoaib",
                            data:[2,4,0,0,0]
                        },{
                             name:"Inzamam",
                            data:[0,4,5,3,0]
                        },{
                             name:"Shoaib khan",
                            data:[0,4,0,4,4]
            
                        }]
				});
        
    }])
    
    
    
    

     .controller('match_team1',['$scope',function($scope){
           Highcharts.chart('team1', {

				   chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Historic World Population by Region'
                    },
                    subtitle: {
                        text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
                    },
                    xAxis: {
                        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                        title: {
                            text: null
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Population (millions)',
                            align: 'high'
                        },
                        labels: {
                            overflow: 'justify'
                        }
                    },
                    tooltip: {
                        valueSuffix: ' millions'
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
                    x: -40,
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
                    name: 'Year 1800',
                    data: [107, 31, 635, 203, 2]
                }, {
                    name: 'Year 1900',
                    data: [133, 156, 947, 408, 6]
                }, {
                    name: 'Year 2012',
                    data: [1052, 954, 4250, 740, 38]
                }]
           });
         Highcharts.chart('team2',{
              chart: {
                  type: 'column'
                },
                title: {
                    text: 'Monthly Average Rainfall'
                },
                subtitle: {
                    text: 'Source: WorldClimate.com'
                },
                xAxis: {
                    categories: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Rainfall (mm)'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: 'Tokyo',
                    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

                }, {
                    name: 'New York',
                    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

                }, {
                    name: 'London',
                    data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

                }, {
                    name: 'Berlin',
                    data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

                }]
         });

     }])
    .controller('home',['$scope',function($scope){

            AmCharts.makeChart( "mapdiv", {
                    /**
                     * this tells amCharts it's a map
                     */
                    "type": "map",

                    /**
                     * create data provider object
                     * map property is usually the same as the name of the map file.
                     * getAreasFromMap indicates that amMap should read all the areas available
                     * in the map data and treat them as they are included in your data provider.
                     * in case you don't set it to true, all the areas except listed in data
                     * provider will be treated as unlisted.
                     */
                    "dataProvider": {
                      "map": "worldLow",
                      "getAreasFromMap": true
                    },

                    /**
                     * create areas settings
                     * autoZoom set to true means that the map will zoom-in when clicked on the area
                     * selectedColor indicates color of the clicked area.
                     */
                    "areasSettings": {
                      "autoZoom": true,
                      "selectedColor": "#CC0000"
                    },

                    /**
                     * let's say we want a small map to be displayed, so let's create it
                     */
                    "smallMap": {}
                  } );

    }])
    .controller('player',function(){
        Highcharts.chart('container',{
             chart: {
                type: 'column'
             },

            title: {
                text: 'Batting Performance'
            },

            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },

            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Number of fruits'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },

            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },

            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2],
                stack: 'male'
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5],
                stack: 'male'
            }, {
                name: 'Jane',
                data: [2, 5, 6, 2, 1],
                stack: 'female'
            }, {
                name: 'Janet',
                data: [3, 0, 4, 4, 3],
                stack: 'female'
            }]
        
    });
        
    });
