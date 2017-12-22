<template>
  <div class="map" style="height:100%;witdh:100%">
        <NavBar   :isBack="false" fixed="true" title="事件分布" />
        <main class="main"  style="height:100%;witdh:100%">
           	  <div id="allmap"></div>
        </main>
  </div>
</template>

<script>
import NavBar  from '../../components/NavBar/NavBar'
import { options } from '../../api/common'
export default {
 
  data () {
    return {
    
    }
  },
  mounted(){
   //this.getGaoMap();
  this.getDataMap();
  },

  methods:{

    getGaoMap(x,y,buildMaps){
          console.log(buildMaps);
    var mapObj = new AMap.Map('allmap', {
          pitch:50,
          viewMode:'3D',
          zoom: 17,
          expandZoomRange:true,
          zooms:[3,20],
          center:[x,y]
        });
      // let buildMaps=[{"buildingNo":2,"buildingCode":"BJ-201700002","buildingName":"2号楼","mapAxis":"120.158763","mapAyis":"30.179951"},{"buildingNo":4,"buildingCode":"BJ-201700004","buildingName":"4号楼","mapAxis":"120.156449","mapAyis":"30.180382"},{"buildingNo":5,"buildingCode":"BJ-201700005","buildingName":"9号楼","mapAxis":"120.160658","mapAyis":"30.181882"},{"buildingNo":6,"buildingCode":"BJ-201700006","buildingName":"7号楼","mapAxis":"120.157349","mapAyis":"30.180993"},{"buildingNo":7,"buildingCode":"BJ-201700007","buildingName":"8号楼","mapAxis":"120.15861","mapAyis":"30.181137"},{"buildingNo":8,"buildingCode":"BJ-201700008","buildingName":"6号楼","mapAxis":"120.156732","mapAyis":"30.180876"},{"buildingNo":9,"buildingCode":"BJ-201700009","buildingName":"6-8号楼连廊","mapAxis":"120.156692","mapAyis":"30.181047"},{"buildingNo":10,"buildingCode":"BJ-201700010","buildingName":"7-9号楼连廊","mapAxis":"120.157397","mapAyis":"30.181215"},{"buildingNo":11,"buildingCode":"BJ-201700011","buildingName":"14号楼","mapAxis":"120.154464","mapAyis":"30.18207"},{"buildingNo":12,"buildingCode":"BJ-201700012","buildingName":"20号楼","mapAxis":"120.154249","mapAyis":"30.182647"},{"buildingNo":13,"buildingCode":"BJ-201700013","buildingName":"21号楼","mapAxis":"120.154091","mapAyis":"30.18303"},{"buildingNo":14,"buildingCode":"BJ-201700014","buildingName":"5号楼","mapAxis":"120.157073","mapAyis":"30.179843"},{"buildingNo":15,"buildingCode":"BJ-201700015","buildingName":"13号楼","mapAxis":"120.154498","mapAyis":"30.17952"},{"buildingNo":16,"buildingCode":"FC-201700016","buildingName":"16号楼","mapAxis":"120.153988","mapAyis":"30.179447"},{"buildingNo":17,"buildingCode":"FC-201700017","buildingName":"11号楼","mapAxis":"120.155012","mapAyis":"30.181145"},{"buildingNo":18,"buildingCode":"FC-201700018","buildingName":"12号楼","mapAxis":"120.157096","mapAyis":"30.1818"},{"buildingNo":19,"buildingCode":"FC-201700019","buildingName":"22号楼","mapAxis":"120.154383","mapAyis":"30.18341"},{"buildingNo":20,"buildingCode":"FC-201700020","buildingName":"23号楼","mapAxis":"120.154912","mapAyis":"30.18372"},{"buildingNo":21,"buildingCode":"FC-201700021","buildingName":"10号楼","mapAxis":"120.155551","mapAyis":"30.182179"},{"buildingNo":22,"buildingCode":"FC-201700022","buildingName":"1号楼","mapAxis":"120.15547","mapAyis":"30.179451"},{"buildingNo":23,"buildingCode":"FC-201700023","buildingName":"15号楼","mapAxis":"120.15666","mapAyis":"30.182456"},{"buildingNo":24,"buildingCode":"FC-201700024","buildingName":"17号楼","mapAxis":"120.156879","mapAyis":"30.183083"},{"buildingNo":25,"buildingCode":"FC-201700025","buildingName":"24号楼","mapAxis":"120.157096","mapAyis":"30.183744"},{"buildingNo":26,"buildingCode":"ZZ-201700026","buildingName":"18号楼","mapAxis":"120.15632","mapAyis":"30.183501"},{"buildingNo":27,"buildingCode":"ZZ-201700027","buildingName":"19号楼","mapAxis":"120.156097","mapAyis":"30.183784"},{"buildingNo":29,"buildingCode":"ZZ-201700029","buildingName":"3号楼","mapAxis":"120.155264","mapAyis":"30.179994"}];

     buildMaps.map((item,index)=>{
       if(item.jingWei!=''){

           let   marker = new AMap.Marker({
         
            position:item.jingWei.split(','),
            animation:'AMAP_ANIMATION_DROP',
            clickable:true
            });
            marker.setMap(mapObj);
       }
     
     })
      //  for (var i = 0; i < buildMaps.length; i ++) {
      //    console.log(buildMaps[i].jingWei);
      //   let   marker = new AMap.Marker({
      //        position:buildMaps[i].jingWei.jion(','),
      //        animation:'AMAP_ANIMATION_DROP'
      //     });
      //      marker.setMap(mapObj);
	    //   }
    
    },
    getDataMap(){
      let  list=[];
     this.$http.get(options.searchManageAll)
      .then(data=>{
     
            list=data.data.sjList;
            //  list.map((item,idnex)=>{
            //      item={jingWei:item.jingWei,ids:item.ids}
            //  })
         
           this.getGaoMap(list[0].jingWei.split(',')[0],list[0].jingWei.split(',')[1],list);
       })
      
     
    },
   setmap(centerX,centerY,mapList){
      console.log(centerY);
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(centerX,centerY);
        map.centerAndZoom(point, 18);
        // 编写自定义函数,创建标注
        function addMarker(point,str){
          var marker = new BMap.Marker(point);

          var opts = {
	  position : point,    // 指定文本标注所在的地理位置
	  offset   : new BMap.Size(-20,-50)    //设置文本偏移量
	}
	var label = new BMap.Label(str, opts);  // 创建文本标注对象
		label.setStyle({
			 color : "red",
			 fontSize : "12px",
			 height : "20px",
			 lineHeight : "20px",
			 fontFamily:"微软雅黑"
		 });
          map.addOverlay(marker);
           map.addOverlay(label);
        }
      
     
        for (var i = 0; i < mapList.length; i ++) {
          var point = new BMap.Point(mapList[i]['mapAxis'],mapList[i]['mapAyis']);
          addMarker(point,mapList[i]['buildingName']);
	      }
    }
  },
  components:{
      NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#allmap{
  height:100%;
  width:100%;
}
</style>
