/**
	@file Contiene el modelo de la aplicación
	@author Mario Pérez <mperezgarcia.guadalupe@alumnado.fundacionloyola.es>
	@license GPL-3.0-or-later
**/
import {Idb} from './idb.js'

/**
	Clase Modelo
	Gestiona los datos de la aplicación.
**/
export class Modelo{
	/**
		Constructor de la clase
	**/
	constructor(controlador){
		
		this.lista = [] //Array de datos
		this.callbacks = [] //Array de callbacks para implementar el observador
		this.controlador = controlador
		this.idb = new Idb()
		tiempo()
		
		
	}
	/**
	 * Registra un objeto para informarle de los cambios en el Modelo
	 * @param {Function} Función de callback que será llamada cuando cambien los datos
	 **/
	
	/**
	 * Ejecuta todos los callback registrados.
	 **/
	avisar(){
	    for(let callback of this.callbacks)
	    callback()
	}
	insertar(objeto, callback){
		this.idb.insertar(objeto, callback)
	}
	listar(callback){
		this.idb.listar(callback)
	}
	
	
	

	
	

}


/**
* Contiene las validaciones de las torres
*/

function tiempo(){

   let myArr

   /**** Parte de AEMET ****/
   var settings = {
	   "async": true,
	   "crossDomain": true,
	   "url": "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/06015?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbnRvbmlvY2FybG9zbW9ydW5vZ29tZXouZ3VhZGFsdXBlQGFsdW1uYWRvLmZ1bmRhY2lvbmxveW9sYS5uZXQiLCJqdGkiOiI2YjEzOWY1OS0xYmYyLTQ2ZDItYWQwMS0yYTdkMTJlMTVjZWYiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTY3MDI2NTU4NywidXNlcklkIjoiNmIxMzlmNTktMWJmMi00NmQyLWFkMDEtMmE3ZDEyZTE1Y2VmIiwicm9sZSI6IiJ9.P8lK0K7lft9YT96TkgvU_ywD2TdxQ51MXqLAR8C-Uc4",
	   "method": "GET",
	   "headers": {
	   "cache-control": "no-cache"
	   }
   }

   console.log(settings)
   
   $.ajax(settings).done(function (response) {

	   var settings2 = {
	   "async": true,
	   "crossDomain": true,
	   "url": response.datos,
	   "method": "GET",
	   "headers": {
		   "cache-control": "no-cache"
	   }

	   }

	   $.ajax(settings2).done(function (response2) {
	   console.log(response2)
	   myArr = JSON.parse(response2);
	   
	   aemet()
	   
	   });

   });

   function aemet(){
	   let td1 = document.getElementsByTagName('td')[0]
	   td1.appendChild(document.createTextNode(myArr[0].provincia))
	   let td2 = document.getElementsByTagName('td')[1]
	   td2.appendChild(document.createTextNode(myArr[0].prediccion.dia[0].estadoCielo[0].descripcion))
	   let td3 = document.getElementsByTagName('td')[2]
	   td3.appendChild(document.createTextNode(myArr[0].prediccion.dia[0].temperatura.minima+' ºC'))
	   let td4 = document.getElementsByTagName('td')[3]
	   td4.appendChild(document.createTextNode(myArr[0].prediccion.dia[0].temperatura.maxima+' ºC'))

	  
   }
   
}