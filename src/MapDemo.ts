import { GMap, Marker, LatLngLiteral } from './googleMapsTypes.js'

export class MapDemo {
   
   private gMapId: string;

   private center: LatLngLiteral;
   
   private zoom: number;
   
   private gMap: GMap;

   private markers: Marker[];

   private static ngsCenter: LatLngLiteral = {
      lat: 39.8282,
      lng: -98.5796
   }  // National Geographic Survey center of the United States

   constructor(
      gMapId: string,
      cssID: string,
      zoom?: number,
      center?: LatLngLiteral) {
      this.gMapId = gMapId;
      this.center = center ?? MapDemo.ngsCenter;
      this.zoom = zoom ?? 10;
      this.markers = [];
      this.gMap = new google.maps.Map(
         document.getElementById(cssID) as HTMLElement,
         {
            center: this.center,
            zoom: this.zoom,
            mapId: this.gMapId
         }
      )
   }


}