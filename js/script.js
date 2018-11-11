	var config = {
	    apiKey: "AIzaSyBOkMOXPFT3wJOJfeUCCsvobquUFna_ghM",
	    authDomain: "micol-20152947.firebaseapp.com",
	    databaseURL: "https://micol-20152947.firebaseio.com",
	    projectId: "micol-20152947",
	    storageBucket: "",
	    messagingSenderId: "592066245324"
	  };
	  firebase.initializeApp(config);



var usuario = null;
function IniciarSesion(){
    correo = document.getElementById('correo').value;
    clave = document.getElementById('clave').value;
            
    firebase.auth().signInWithEmailAndPassword(correo, clave).then(function (usuario){
        sessionStorage.setItem('usuario', correo);
        
        window.location = "index.html?i=select";
                
    }).catch(function(error){
    	swal(
 		 'Oops...',
 		 error.message,
 		 'error'
		)
    });
            
    sessionStorage.setItem('usuario', JSON.stringify(usuario));
                  
}    
