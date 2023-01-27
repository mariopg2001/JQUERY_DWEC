/**
	@file Contiene el modelo de la vista de inicio
	@author Miguel Jaque <mjaque@migueljaque.com>
	@license GPL-3.0-or-later
**/
import {Campeon} from './Campeon.js'
import {Vista} from './vista.js'


/**
	Implementa una vista de inicio.
**/
export class Vistaanadir extends Vista{
	/**
		Constructor de la clase.
		@param div {HtmlDivElement} Div de HTML en el que se desplegará la vista.
	**/
	constructor(div, controlador){
		super(div)
		
		this.fechaa=$("#fechacreacion")
		this.fechaa.datepicker()
		this.desc=$("#descripcioncampeon")
		this.desc.tooltip()

		this.btnacep=$("#prueba")
		this.btnacep.button()

		this.btnacep=$("#volver")
		this.btnacep.button()

		
		
		
		console.log(this.fechaa)
		this.controlador = controlador
		this.btn1 = $('#prueba')
		this.imagen=$('#inputcampeon')
		this.imagencamp=null
		this.imagen.on('change', e =>{
			const archivo= this.imagen[0].files[0]
			const lector= new FileReader()
			lector.addEventListener('load',()=>{
				this.imagencamp=lector.result
			})
			lector.readAsDataURL(archivo)
		})

		this.btn1.click(this.pulsar1.bind(this))
	}
	
	


	pulsar1(){
		//Leer y validar los datos del formulario
		
		this.nombrecampeon=$('#nombrecampeon')
		this.descripcioncampeon=$('#descripcioncampeon')
		this.posicion1= $('#posicion1')
		this.posicion2= $('#posicion2')
		this.posicion3= $('#posicion3')
		this.posicion4= $('#posicion4')
		this.posicion5= $('#posicion5')
		

		
		this.opcion1=$('#opcion1')
		this.opcion2=$('#opcion2')
		this.opcion3=$('#opcion3')
		this.opcion4=$('#opcion4')
		this.fecha=$("#fechacreacion");
		


		let fechac=this.fecha.val()
		let nombre=this.nombrecampeon.val()
		let descripcion=this.descripcioncampeon.val()

		//let imagen=this.imagen.files[0]
		//let imagen=this.imagen.value
		//let imagen.createObjectURL(this.imagen)
		
		let opciones=[]
			opciones.push(this.opcion1.is(":checked"))
			opciones.push(this.opcion2.is(":checked"))
			opciones.push(this.opcion3.is(":checked"))
			opciones.push(this.opcion4.is(":checked"))

			
			
			if(opciones[0] ==true){
				opciones[0]= 'Mago'
			}
			
			if(opciones[1] ==true){
				opciones[1]= 'Asesino'
			}
			
			if(opciones[2] ==true){
				opciones[2]= 'Tanque'
			}
			
			if(opciones[3] ==true){
				opciones[3]= 'Guerrero'
			}
		let posiciones= []
		
			posiciones.push(this.posicion1.is(":checked"))
			posiciones.push(this.posicion2.is(":checked"))
			posiciones.push(this.posicion3.is(":checked"))
			posiciones.push(this.posicion4.is(":checked"))
			posiciones.push(this.posicion5.is(":checked"))
		
		if(posiciones[0] ==true){
			posiciones[0]= 'ADC'
		}
		
		if(posiciones[1] ==true){
			posiciones[1]= 'sup'
		}
		
		if(posiciones[2] ==true){
			posiciones[2]= 'jung'
		}
		
		if(posiciones[3] ==true){
			posiciones[3]= 'top'
		}
		
		if(posiciones[4] ==true){
			posiciones[4]= 'mid'
		}
		//Construyo el objeto
		let objeto = new Campeon(nombre,descripcion,posiciones,this.imagencamp,opciones, fechac)
		this.controlador.insertar(objeto)
	}
	
	/**
		Atención a la pulsación sobre el enlace de Juego
	**/

}
