/**
	@file Contiene el modelo de la vista de menú de navegación de la aplicación
	@author Miguel Jaque <mjaque@migueljaque.com>
	@license GPL-3.0-or-later
**/

/**
	Implementa una vista del menú de navegación.
**/
export class VistaNav{
	/**
		Constructor de la clase.
		@param controlador {Controlador} Controlador de la vista.
		@param nav {HtmlNavElement} Nav de HTML en el que se desplegará la vista.
	**/
	constructor(controlador, nav){
		this.controlador = controlador
		this.nav = nav
		this.liadmin =$('#logo')
        this.lianadir = $('#anadir')
		// this.anadir= document.getElementById('anadir')
		this.mod=$('#mod')

        this.limod =$('#mod')

		
		this.mod.click(this.pulsarmod.bind(this))
		// this.anadir.onclick=this.pulsaranadir.bind(this)

		this.liadmin.click( this.pulsaradmin.bind(this))
		this.lianadir.click(this.pulsaranadir.bind(this))
		this.limod.click( this.pulsarmod.bind(this))
	}
	/**
		Atención a la pulsación sobre el enlace de Inicio
	**/
	pulsaradmin(){
		this.controlador.pulsarNavadmin()
	}
	/**
		Atención a la pulsación sobre el enlace de CRUD
	**/
	pulsaranadir(){
		this.controlador.pulsarNavanadir()
	}
	/**
		Atención a la pulsación sobre el enlace de Juego
	**/
	pulsarmod(){
		this.controlador.pulsarNavmod()
	}
}
