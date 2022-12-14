import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Imagenes } from 'src/app/interfaces/imgInterface';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

const URL = environment.urlServer;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'registroFacial';

  rostro: any = {

    nombre: "",
    apellido: "",
    cedula: "",
    tipo: "",

  };

  @ViewChild('imagesList', {static: true}) imagesList?: ElementRef;

  constructor(private http: HttpClient, private renderer: Renderer2) { }

  ngOnInit(){

    // this.mostrarImg();

  }

  imgURL = '/assets/noimage.png';

  imagenes: any = [];

  btnActive = false;

  // Obtener imagen desde el input de archivos y proyectarlo en el body
  selectImage(event: any){

    if(event.target.files.length > 0){

      // Obtener archivo de imagen
      const file = event.target.files[0];

      // fileReader lee los datos del archivo adjuntado
      const reader = new FileReader();

      //Extraer url de la imagen
      reader.readAsDataURL(file);
      reader.onload = (event: any) => {

        // Proyectar imagen en el body
        this.imgURL = event.target.result;

      }

      console.log(file)
      // this.rostro.images = file;
      this.btnActive = false;

    }

  }

  onSubmit(){

    if(this.rostro.nombre.length > 0 && this.rostro.cedula.length > 0){

      // crear estructura de datos obtenidos en el form, para ser enviados al servidor

      let body = {

        "Name": `${this.rostro.nombre}`,
        "Apellido": `${this.rostro.apellido}`,
        "Cedula": `${this.rostro.cedula}`,
        "TypeUser": `${this.rostro.tipo}`,

      }

      console.log(body);

      const headers =  new HttpHeaders({

        'x-keys-to-add-id': '["IdUser"]',
        'x-keys-of-arrays': '[]',
        'x-relations': 'false',
        'Content-Type': 'application/json'

      });

      // mandar peticion http al servidor
      this.http.post<any>(`${URL}create-info/thomas_facedb/Fa_Users`, body, {headers}).subscribe( res => {

        if(res){

          location.reload();
          console.log("Datos registrados con exito.");

        }

      });

    }


  }

  getData(){

    this.http.get<any>(`${URL}find-all-info/thomas_facedb/Fa_Users`).subscribe( res => {

      console.log(res)

    });

  }

  mostrarImg(){

    this.http.get<any>(`${URL}find-all-info/thomas_facedb/Fa_Faces`).subscribe( res => {

      console.log(res)

      this.imagenes = res;

      this.imagenes.forEach(async(imagen: any) => {

        let imageElement = document.createElement('img');

        imageElement.classList.add('imageContainer');

        imageElement.setAttribute("style", "width: 50%; margin: 1em;");
        imageElement.src = `${URL}/${imagen.Face}`;
        imageElement.crossOrigin = 'anonymous';


        // renderer es la libreria para traer objetos del DOM de forma segura, (elemento del dom, elemento a insertar en el elemento del dom);
        this.renderer.appendChild(this.imagesList?.nativeElement, imageElement);


      });
    });


  }

  editData() {



  }


}

function err() {
  throw new Error('Function not implemented.');
}

