/**
	@file Contiene el modelo de la vista de inicio
	@author Miguel Jaque <mjaque@migueljaque.com>
	@license GPL-3.0-or-later
**/

import { Vista } from './vista.js'

/**
	Implementa una vista de inicio.
**/
export class Vistaadmin extends Vista {
	/**
		Constructor de la clase.
		@param div {HtmlDivElement} Div de HTML en el que se desplegará la vista.
	**/
	constructor(div, controlador) {
		super(div)
		
		this.controlador = controlador
		this.img=$("#draggable")
		this.img.draggable()
		this.dialogo=$("#dialog")
		this.dialogo.dialog()
		this.btnlistar = $('#listar')
		this.divindex = $('#cont1')
		this.btnbuscar= $('#buscar')

		this.btnlistar.click( this.listar.bind(this))
		
		this.listar()

	}
	listar() {
		this.controlador.listar()
	}
	cargarlista(campeones) {
		this.divindex.textContent = ''
		// console.log(this.divindex)
		campeones.forEach(element => {

			//crear tarjetas

			//contenedor de la tarjeta
			this.divtarjeta=$("<div class='contenedorimagen'>")
			this.divindex.append(this.divtarjeta)

			//imagen
			this.imagen=$("<img class='champ' >")
			this.imagen.attr("src", element.imagen)
			this.divtarjeta.append(this.imagen)


			//contenedor de los iconos
			this.divicono=$('<div class="contenedoricono">')
			this.divtarjeta.append(this.divicono)

			//icono modificar
			this.spanedit=$('<span class="icono" id="mod">')
			this.divicono.append(this.spanedit)
			this.iconoedit=$('<i class="fa-solid fa-pen">')
			this.spanedit.append(this.iconoedit)

			//icono eliminar
			this.spanborrar=$('<span class="icono">')
			this.divicono.append(this.spanborrar)
			this.iconoborrar=$('<i class="fa-sharp fa-solid fa-trash">')
			this.spanborrar.append(this.iconoborrar)

			//icono lupa
			this.spanlupa=$('<span class="icono">')
			this.divicono.append(this.spanlupa)
			this.iconolupa=$('<i class=" fa-sharp fa-solid fa-magnifying-glass">')
			this.spanlupa.append(this.iconolupa)
		});
		/*


		Otra forma de hacerlo

				while (this.divindex.first)
				this.divindex.first.remove()
				  	
		   
				   for(let campeon of campeones){
					   this.divimagen=$("<div")
					   this.divimagen.classList.add("contenedorimagen")
					   this.divindex.append(this.divimagen)
					   this.imagen=$('<img')
					   this.imagen.classList.add("champ")
					   this.imagen.src= campeon['imagen']
					   this.divimagen.append(this.imagen)
					   this.divicono=$('<div')
					   this.divicono.classList.add( 'contenedoricono')
					   this.divimagen.append(this.divicono)
					   this.spanedit=$('<span')
					   this.spanedit.classList.add('icono')
					   this.spanedit.setAttribute("id", "mod")
					   this.divicono.append(this.spanedit)
		
					   this.iconoedit=$('<i')
					   this.iconoedit.classList.add('fa-solid')
					   this.iconoedit.classList.add('fa-pen')
					   this.spanedit.append(this.iconoedit)
		
					   this.spanborrar=$('<span')
					   this.spanborrar.classList.add('icono')
					   this.divicono.append(this.spanborrar)
					   this.iconoborrar=$('<i')
					   this.iconoborrar.classList.add('fa-sharp')
					   this.iconoborrar.classList.add('fa-solid')
					   this.iconoborrar.classList.add('fa-trash')
					   this.spanborrar.append(this.iconoborrar)
		
					   this.spanlupa=$('<span')
					   this.spanlupa.classList.add('icono')
					   this.divicono.append(this.spanlupa)
					   this.iconolupa=$('<i')
					   this.iconolupa.classList.add('fa-sharp')
					   this.iconolupa.classList.add('fa-solid')
					   this.iconolupa.classList.add('fa-magnifying-glass')
					   this.spanlupa.append(this.iconolupa)
					   
				   }
				   
			   }
		
			   */
	}

}
