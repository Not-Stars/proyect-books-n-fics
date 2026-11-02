import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
import {getFirestore, collection, getDocs} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";
const firebaseConfig = {
	apiKey: "AIzaSyAwN_f46Q4oFfesC1vTJDPBaE7OgvFV8Xk",
	authDomain: "archive-of-our-storys.firebaseapp.com",
	projectId: "archive-of-our-storys",
	storageBucket: "archive-of-our-storys.firebasestorage.app",
	messagingSenderId: "698326758708",
	appId: "1:698326758708:web:c4eca49b3520426a076161"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function publishstory(){
	try{
		const StoryRef = await addDoc(collection(db, "Story"), {
			tittle: document.getElementById("input-tittle").value,
			fandom: document.getElementById("input-fandom").value,
			resumen: document.getElementById("input-resumen").value,
			tags: ["Romance", "Drama"]
			datecreation: new Date()
		});

		await addDoc(collection(db, 'Story/${StoryRef.id}/Chapters`), {
			numberchapr:1,
			contenido: document.getElementById("input-content").value,
		});

		alert ("Capitulo subido con exito");
	}catch (error){
		console.error("hubo un error al publicar tu historia: ", error);
		alert("Hubo un error al guardar, revisa la consola.");
	}
}

document.getElementById("btn-publish").addEventListener("click", PublisFanfic);