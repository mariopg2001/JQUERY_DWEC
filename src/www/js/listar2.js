

	listar(){
		while (this.divindex.firstChild)
		     this.divindex.firstChild.remove()
		console.log('ksakkskakska')
	    const solicitud = window.indexedDB.open('LoL')
		solicitud.onsuccess = (evento) =>{
			this.bd = evento.target.result;
			console.log('Base de datos cargada')
			const objectStore = this.bd.transaction('Campeones', 'readonly').objectStore('Campeones')
			const solicitud = objectStore.getAll() 
		    solicitud.onsuccess = (function(){ 
				this.lista = solicitud.result
				
				console.log(this.lista)
				
				let i=0
				for(let listas of this.lista){
					this.divimagen=document.createElement("div")
					this.divimagen.classList.add("contenedorimagen")
					this.divindex.appendChild(this.divimagen)
					this.imagen=document.createElement('img')
					this.imagen.classList.add("champ")
					this.imagen.src= this.lista[i]['imagen']
					this.divimagen.appendChild(this.imagen)
					this.divicono=document.createElement('div')
					this.divicono.classList.add( 'contenedoricono')
					this.divimagen.appendChild(this.divicono)
					this.spanedit=document.createElement('span')
					this.spanedit.classList.add('icono')
					this.spanedit.setAttribute("id", "mod")
					this.divicono.appendChild(this.spanedit)

					this.iconoedit=document.createElement('i')
					this.iconoedit.classList.add('fa-solid')
					this.iconoedit.classList.add('fa-pen')
					this.spanedit.appendChild(this.iconoedit)

					this.spanborrar=document.createElement('span')
					this.spanborrar.classList.add('icono')
					this.divicono.appendChild(this.spanborrar)
					this.iconoborrar=document.createElement('i')
					this.iconoborrar.classList.add('fa-sharp')
					this.iconoborrar.classList.add('fa-solid')
					this.iconoborrar.classList.add('fa-trash')
					this.spanborrar.appendChild(this.iconoborrar)

					this.spanlupa=document.createElement('span')
					this.spanlupa.classList.add('icono')
					this.divicono.appendChild(this.spanlupa)
					this.iconolupa=document.createElement('i')
					this.iconolupa.classList.add('fa-sharp')
					this.iconolupa.classList.add('fa-solid')
					this.iconolupa.classList.add('fa-magnifying-glass')
					this.spanlupa.appendChild(this.iconolupa)
					i++
				}
				
			}).bind(this)

			
		}     
	