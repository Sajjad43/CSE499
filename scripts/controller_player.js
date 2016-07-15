var app=angular.module('player',[])

  .controller('pagination',['$scope',function($scope){

        $scope.page='./views/player_bat_1.html';

        $scope.changePage=function(name){
            $scope.page='./views/'+name;
            console.log(name);
        }


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
    
    
    
    .controller('player_bat_2',['$scope',function($scope){
        
        Highcharts.chart('player_bat_2',{
            
            title:{
                text:"Best performance of the batsmen on the respective batting position"
            },
            xAxis:{
             
                type:'category',
                title:{
                    
                    text:'Position'
                }
            },
            tooltip:{
              shared:true  
            },
            yAxis:[{
                title:{
                    text:'No of times batted',
                    style:{
                     color:Highcharts.getOptions().colors[3]
                    }
                },
                labels:{
                    style:{
                     color:Highcharts.getOptions().colors[3]
                    }
                }
            },{
                title:{
                    text:'Batting Average',
                    style:{
                     color:Highcharts.getOptions().colors[8]
                    }
                } ,
                labels:{
                    style:{
                     color:Highcharts.getOptions().colors[3]
                    }
                },
                opposite:true
            }],
            series:[{
                name:'No of times played',
                color:Highcharts.getOptions().colors[3],
                data:[20,40,50,4,5,34,35,45]
            },{
                name:'Batting Average',
                color:Highcharts.getOptions().colors[8],
                data:[20,20,40,14,5,45,2,12],
                yAxis:1
            }]
            
            
            
        })
        
        
    }])
    
    
    .controller('player_bowl_1',['$scope',function($scope){
        
        Highcharts.chart('player_bowl_1',{
            
            title:{
                text:'Bowling Performance'
            },
            xAxis:{
                categories:['1','2','3','4','5'],
                title:{
                    text:'Match'
                }
            },
            yAxis:[
                {
                    labels:{
                      style:{
                         color:Highcharts.getOptions().colors[7]
                      } 
                    },
                    title:{
                        text:'Run',
                        style:{
                            color:Highcharts.getOptions().colors[7] 
                        }
                    }
                },{
                    labels:{
                      style:{
                         color: Highcharts.getOptions().colors[3] 
                      } 
                    },
                    title:{
                        text:'Over',
                        style:{
                              color:  Highcharts.getOptions().colors[3] 
                              } 
                    },
                    opposite:true
                },{
                   labels:{
                      style:{
                         color:Highcharts.getOptions().colors[0]
                      } 
                    },
                    title:{
                        text:'Wicket',
                        style:{
                           color:Highcharts.getOptions().colors[0]
                        } 
                    } ,
                    opposite:true
                }
            ],
            tooltip:{
                shared:true
            },
            series:[{
                type:'column',
                name:'Run',
                data:[23,43,54,65,57],
                color:   Highcharts.getOptions().colors[7] 
            },{
                type:'column',
                name:'Over',
                data:[4,5,7,4,10],
                yAxis:1,
                
                    color:   Highcharts.getOptions().colors[3] 
                
            },{
                name:'wicket',
                data:[2,3,4,1,6],
                yAxis:2
                
            }]
            
        })
        
        
    }])
    
    
    
    
    
    
    .controller('player_bat_1',function($scope){
        
        Highcharts.chart('player_bat_1',{
           
            title:{
                text:'Team Batting performance for consecutive matches'
            },
            xAxis:{
                categories:['1','2','3','4','5'],
                title:{
                    text:'Matches'
                }
            },
            yAxis:[
                {
                   labels:{
                       style:{
                        color:Highcharts.getOptions().colors[1]            
                       }
                   },
                   title:{
                        text:'Runs',
                        style:{
                            color:Highcharts.getOptions().colors[1] 
                        }
                     }
                    
                },{
                   labels:{
                       style:{
                            color:Highcharts.getOptions().colors[0]            
                       }
                   },
                   title:{
                        text:'Balls',
                        style:{
                            color:Highcharts.getOptions().colors[0] 
                        }
                    },
                    opposite:true
                    
                }],
            tooltip:{
              shared:true  
            },
            series:[{
                name:'Balls',
                type:'column',
              
                data:[30,50,6,7,18],
                yAxis:1
            },{
                name:'Runs',
               type:'column',
              
                data:[50,22,16,37,48]
            }]
                
            
            
        });
        
    })
    
