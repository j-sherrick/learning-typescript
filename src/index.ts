import { MapDemo } from './MapDemo.js';

export async function initFooBar(): Promise<void> {
   const { Map, InfoWindow } = (await google.maps.importLibrary(
      'maps'
   )) as google.maps.MapsLibrary;
   const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      'marker'
   )) as google.maps.MarkerLibrary;
   const gmapId = '2d523448c471c5d1';
   const gmap = new MapDemo(gmapId, 'map', 5);
}


initFooBar();
