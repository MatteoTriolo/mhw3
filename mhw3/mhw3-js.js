
//cambia sfondo
function visualizza(event)
{
  
    
   const barra=document.querySelector('#barra');
   barra.classList.remove('hidden');
   
}


function nascondi(event)
{
   const barra=document.querySelector('#barra');
   barra.classList.add('hidden');
}






//carrello
function visualizzaCarrello(event)
{

   
   carrello.addEventListener('click',nascondiCarrello);
   carrello.removeEventListener('click',visualizzaCarrello);
   
   const carrelloDaVisualizzare=document.querySelector('#shop');
   carrelloDaVisualizzare.classList.add('hidden');
    

}


function nascondiCarrello(event)
{

  
   carrello.addEventListener('click',visualizzaCarrello);
   carrello.removeEventListener('click',nascondiCarrello);
   
   const carrelloDaVisualizzare=document.querySelector('#shop');
   carrelloDaVisualizzare.classList.remove('hidden');

}



//selezionare le specifiche 
//apre la modale 
function specifiche(event)
{
       
      
   
   const chiudi=document.createElement('h1');
   chiudi.textContent="X";
   chiudi.classList.add('chiudi');
   chiudi.addEventListener('click',chiudiSpecifiche);
   modale.classList.remove('hidden');
   modale.appendChild(chiudi);    
   document.body.classList.add('no-scroll');
   aggiungiSpecifiche(event.currentTarget);
   

   
}

//chiude la modale
function chiudiSpecifiche(event){
   modale.classList.add('hidden');
   modale.innerHTML='';
   document.body.classList.remove('no-scroll');

}
//fine selezione specifiche

//funzione che divide specifiche in base al box selezionato
function aggiungiSpecifiche(user)
{
   console.log(user);
   const index = parseInt(user.dataset.index);
   if(index===1)
   {

     menuOrizontaleCuffie()
     
   }
   if(index===2)
   {
      menuOrizontaleSedie()
   }
   if(index===3)
   {
      menuOrizontaleMause()
   }
   if(index===4)
   {
      menuOrizontaleLampade()
   }
   if(index===5)
   {
      menuOrizontaleTastiera()
   }
   if(index===6)
   {
     menuOrizontaleSet()
   }

           
}


// da un div con dentro un prezzo casuale 
//il div verra inserito nel box degli articoli
function boxPrezzo(proprietario,min,max)
{

    const boxP=document.createElement('div');
    const testo=document.createElement('h1');
    const prezzo=dammiPrezzo(min,max);
    
    testo.textContent='acquista a: ' + prezzo +'€';
    testo.classList.add('testoPersonalizzato');
    
    boxP.appendChild(testo);
    proprietario.appendChild(boxP);
   
    return boxP;
}


//torna un prezzo casuale
function dammiPrezzo(min,max)
{
   const numeroCasuale = Math.floor(Math.random() * (max - min + 1)) + min;

   // Converte il numero casuale in una stringa e lo ritorna
   return numeroCasuale.toString();
}

//funzione che inserisce i vari box nel carrello
function Acquista(cliccato,propietario)
{   
   const togli=document.createElement('h1');
   togli.textContent='X';

  

   cliccato.classList.add('testoPersonalizzato');
   cliccato.textContent='aggiunto al carrello';

  const immagine=document.createElement('img');
  const box=document.createElement('div');

  box.classList.add('articoloCarrello');
  togli.classList.add('articoloCarrello');

  immagine.src=propietario.url;

  box.appendChild(immagine);
  box.appendChild(togli);
 
  

  const principale=document.querySelector(' #aggiunto');

  principale.appendChild(box);
  //serve per il carrello


  togli.addEventListener('click',function()
  {
   togliDalCarrello(principale,box);
   
  });
   
   
}

function togliDalCarrello(dove,cosa)
{
   dove.removeChild(cosa);

}

function esciUnPrezzo(event)
{
   const scrivi=document.createElement('h3');
   scrivi.textContent="calcola-totale";
   inserire.innerHTML="";
   inserire.append(scrivi);
   console.log('cliccato');
   const subtotale=document.createElement('h3');
   subtotale.textContent=dammiPrezzo(100,500);

   inserire.append(subtotale);
}

//inizioi creazione delle funzioni che tramite le mappe create nel file mappe.js
//scorrono la mappa e creano i vari box che contengono gli articoli
//i box vengono inseriti nella modale 
//tramite il pulsante acquista essi vengono inseriti all'interno del carrello 
function menuOrizontaleCuffie()
{   
    
   console.log('eseguo')
   
      
      for (const chiave in mappaCuffie) {

        
             let cuffia = mappaCuffie[chiave];
             const contenitore=document.createElement('div');
             const imgElement = document.createElement('img');
       
             const spec=document.createElement('span');
             const testo=document.createElement('span');
       
             imgElement.src=cuffia.url;
             testo.textContent=cuffia.titolo;
             spec.textContent=cuffia.specifiche;
       
             spec.classList.add('descrizione');
             testo.classList.add('descrizione');
             contenitore.classList.add('inlinea');
       
             contenitore.appendChild(imgElement);
             contenitore.appendChild(testo);
             contenitore.appendChild(spec);

             
             // Aggiungi l'immagine al contenitore
             const ritorno=boxPrezzo(contenitore,50,250);
             ritorno.addEventListener('click', function() {
               Acquista(ritorno,cuffia);
            });
             
             
             modale.appendChild(contenitore);
     }
      
      


}


function menuOrizontaleMause()
{   

   
   for (const chiave in mappaMause) {

        
      let cuffia = mappaMause[chiave];
      const contenitore=document.createElement('div');
      const imgElement = document.createElement('img');

      const spec=document.createElement('span');
      const testo=document.createElement('span');

      imgElement.src=cuffia.url;
      testo.textContent=cuffia.titolo;
      spec.textContent=cuffia.specifiche;

      spec.classList.add('descrizione');
      testo.classList.add('descrizione');
      contenitore.classList.add('inlinea');

      contenitore.appendChild(imgElement);
      contenitore.appendChild(testo);
      contenitore.appendChild(spec);
      
      // Aggiungi l'immagine al contenitore
      const ritorno=boxPrezzo(contenitore,50,250);
      ritorno.addEventListener('click', function() {
         Acquista(ritorno,cuffia);
      });
      modale.appendChild(contenitore);
      
}

}

function menuOrizontaleSedie()
{   

   
   for (const chiave in mappaSedia) {

        
      let cuffia = mappaSedia[chiave];
      const contenitore=document.createElement('div');
      const imgElement = document.createElement('img');

      const spec=document.createElement('span');
      const testo=document.createElement('span');

      imgElement.src=cuffia.url;
      testo.textContent=cuffia.titolo;
      spec.textContent=cuffia.specifiche;

      spec.classList.add('descrizione');
      testo.classList.add('descrizione');
      contenitore.classList.add('inlinea');

      contenitore.appendChild(imgElement);
      contenitore.appendChild(testo);
      contenitore.appendChild(spec);
      
      // Aggiungi l'immagine al contenitore
      const ritorno=boxPrezzo(contenitore,50,250);
      ritorno.addEventListener('click', function() {
         Acquista(ritorno,cuffia);
      });
      modale.appendChild(contenitore);
      
}

}

function menuOrizontaleLampade()
{   

   
   for (const chiave in mappaLampada) {

        
      let cuffia = mappaLampada[chiave];
      const contenitore=document.createElement('div');
      const imgElement = document.createElement('img');

      const spec=document.createElement('span');
      const testo=document.createElement('span');

      imgElement.src=cuffia.url;
      testo.textContent=cuffia.titolo;
      spec.textContent=cuffia.specifiche;

      spec.classList.add('descrizione');
      testo.classList.add('descrizione');
      contenitore.classList.add('inlinea');

      contenitore.appendChild(imgElement);
      contenitore.appendChild(testo);
      contenitore.appendChild(spec);
      
      // Aggiungi l'immagine al contenitore
      const ritorno=boxPrezzo(contenitore,50,250);
      ritorno.addEventListener('click', function() {
         Acquista(ritorno,cuffia);
      });
      modale.appendChild(contenitore);
}
}

function menuOrizontaleTastiera()
{   

   for (const chiave in mappaTastiera) {

        
      let cuffia = mappaTastiera[chiave];
      const contenitore=document.createElement('div');
      const imgElement = document.createElement('img');

      const spec=document.createElement('span');
      const testo=document.createElement('span');

      imgElement.src=cuffia.url;
      testo.textContent=cuffia.titolo;
      spec.textContent=cuffia.specifiche;

      spec.classList.add('descrizione');
      testo.classList.add('descrizione');
      contenitore.classList.add('inlinea');

      contenitore.appendChild(imgElement);
      contenitore.appendChild(testo);
      contenitore.appendChild(spec);
      
      // Aggiungi l'immagine al contenitore
      const ritorno=boxPrezzo(contenitore,50,250);
      ritorno.addEventListener('click', function() {
         Acquista(ritorno,cuffia);
      });
      modale.appendChild(contenitore);
      
}
}

function menuOrizontaleSet()
{   

   
   for (const chiave in mappaSet) {

        
      let cuffia = mappaSet[chiave];
      const contenitore=document.createElement('div');
      const imgElement = document.createElement('img');

      const spec=document.createElement('span');
      const testo=document.createElement('span');
      
      imgElement.src=cuffia.url;
      testo.textContent=cuffia.titolo;
      spec.textContent=cuffia.specifiche;

      spec.classList.add('descrizione');
      testo.classList.add('descrizione');
      contenitore.classList.add('inlinea');

      contenitore.appendChild(imgElement);
      contenitore.appendChild(testo);
      contenitore.appendChild(spec);
      
      // Aggiungi l'immagine al contenitore
      const ritorno=boxPrezzo(contenitore,50,250);
      ritorno.addEventListener('click', function() {
         Acquista(ritorno,cuffia);
      });
      modale.appendChild(contenitore);
     
}

}
// fine delle specifiche per box



//menu

function appariMenu(event)
{

     const cliccato=event.currentTarget;
     cliccato.addEventListener('click',chiudiMenu);
     cliccato.removeEventListener('click',appariMenu);
     

     const elemento=document.querySelector('#menuAscomparsa');
     elemento.classList.remove('nascondi-tendina');
     document.body.classList.add('no-scroll');
}

function chiudiMenu(event)
{

     const cliccato=event.currentTarget;
     cliccato.addEventListener('click',appariMenu);
     cliccato.removeEventListener('click',chiudiMenu);
     

     const elemento=document.querySelector('#menuAscomparsa');
     elemento.classList.add('nascondi-tendina');
     document.body.classList.remove('no-scroll');


}








//API AB ABSTRACT VERIFICA EMAIL INSERITA NEL CHECK BOX



function onResponse(response) {
   console.log('Risposta ricevuta');
   
  
   return response.json();
 }

 function onJson(onJson) {
   
   if(onJson.is_disposable_email.value) {
      alert('L\'indirizzo email é temporaneo.');
       
       // Puoi fare qualche altra azione qui, se necessario
   }
   else if(onJson.is_valid_format.value) {
      alert('L\'indirizzo email é  valido.');
      // Puoi fare qualche altra azione qui, se necessario
  }
}


// const chiave primaria abstract
function search(event)
{

   console.log('fetch')
   const apiKey = '2c70cc2f43f844638c6c4a809f172c1e';
   const apiUrl = 'https://emailvalidation.abstractapi.com/v1/?';
   

  // Impedisci il submit del form
  event.preventDefault();
  // Leggi valore del campo di testo
  const email=document.querySelector('#email');
  const email_value=encodeURIComponent(email.value);
  console.log('Eseguo ricerca: ' + email_value );
  // Esegui la richiesta
  fetch(apiUrl+'api_key='+apiKey+'&email='+email_value).then(onResponse).then(onJson);
  email.value="";
}
//fine search


//inizio funzione che mi ritorna spotify


function onResponsespotify(response)
{
   console.log('Risposta ricevuta');
   
  
   return response.json();

}


function onJsonspotify_playlist(onJson)
{

   console.log('JSON ricevuto');
   const contenitore_spotify=document.querySelector('#album-view');
   contenitore_spotify.innerHTML="";
   console.log(onJson);
   const results = onJson.playlists.items;
  let num_results = results.length;
  
  if(num_results > 4)
    num_results = 4;
  // Processa ciascun risultato
  for(let i=0; i<num_results; i++)
  {
    // Leggi il documento
    const album_data = results[i]
    // Leggiamo info
    const title = album_data.name;
    const selected_image = album_data.images[0].url;
    // Creiamo il div che conterrà immagine e didascalia
    const album = document.createElement('div');
    album.classList.add('album');
    // Creiamo l'immagine
    const img = document.createElement('img');
    img.src = selected_image;
    // Creiamo la didascalia
    const caption = document.createElement('span');
    caption.textContent = title;
    // Aggiungiamo immagine e didascalia al div
    album.appendChild(img);
    album.appendChild(caption);
    // Aggiungiamo il div alla libreria
    contenitore_spotify.appendChild(album);
  }
  }



   








function onJsonspotify_podcast(onJson)
{

   console.log('JSON ricevuto');
   const contenitore_spotify=document.querySelector('#album-view');
   contenitore_spotify.innerHTML="";
   console.log(onJson);
   const results = onJson.shows;
  let num_results = results.length;
  // Mostriamone al massimo 10
 
  // Processa ciascun risultato
  for(let i=0; i<num_results; i++)
  {
    // Leggi il documento
    const album_data = results[i]
    // Leggiamo info
    const title = album_data.name;
    const selected_image = album_data.images[0].url;
    // Creiamo il div che conterrà immagine e didascalia
    const album = document.createElement('div');
    album.classList.add('album');
    // Creiamo l'immagine
    const img = document.createElement('img');
    img.src = selected_image;
    // Creiamo la didascalia
    const caption = document.createElement('span');
    caption.textContent = title;
    // Aggiungiamo immagine e didascalia al div
    album.appendChild(img);
    album.appendChild(caption);
    // Aggiungiamo il div alla libreria
    contenitore_spotify.appendChild(album);
    contenitore_spotify.classList.add('riduci');
  }





}








//funzione di search


function searchSpotify(event)
{
  // Impedisci il submit del form
  event.preventDefault();
  // Leggi valore del campo di testo
  const contenuto_cercato = document.querySelector('#argomento');
  const contenuto_value = encodeURIComponent(contenuto_cercato.value);
  console.log('Eseguo ricerca: ' + contenuto_value);

   const tipo_cercato=document.querySelector('#tipo');
   const tipo_value = encodeURIComponent(tipo_cercato.value);
   console.log('Eseguo ricerca: ' + tipo_value);
   
   const url_plailyst='https://api.spotify.com/v1/search?type=playlist&q=';
   const url_podcast='https://api.spotify.com/v1/shows?ids=';
   

  // Esegui la richiesta
  if(tipo_value==='playlist')
   {
  fetch(url_plailyst + contenuto_value,
    {
      headers:
      {
        'Authorization': 'Bearer ' + token
      }
    }
  ).then(onResponsespotify).then(onJsonspotify_playlist);
 }
 else if(tipo_value==='show')
   { 
      
      const id_podcast_consigliati='2I72c5bfalDb4PqUn6iSJb,0FWx4LB4lW9fDBGAyoWzPU,4dMgU59UYggroUU4eqjCgF';
      fetch(url_podcast+id_podcast_consigliati,
         {
           headers:
           {
             'Authorization': 'Bearer ' + token
           }
         }
       ).then(onResponsespotify).then(onJsonspotify_podcast);
      }
      
      

   }


















// api spotify richiesta token 

function onTokenJson(json)
{
  // Imposta il token global
  console.log('token associato');
  token = json.access_token;
}

function onTokenResponse(response)
{
   console.log('token_ricevuto');
  return response.json();
}

// OAuth credentials --- > ho rimosso le mie da inserire per far funzionare 
const client_id = '';
const client_secret = '';
// Dichiara variabile token
let token;
// All'apertura della pagina, richiediamo il token
console.log('richiedo token');
fetch("https://accounts.spotify.com/api/token",
	{
   method: "post",
   body: 'grant_type=client_credentials',
   headers:
   {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
   }
  }
).then(onTokenResponse).then(onTokenJson);


// Aggiungi event listener al form di spotify
const formSpotify = document.querySelector('#search_content');
formSpotify.addEventListener('submit', searchSpotify);



// varibile che aggiunge al form il listener per la funzione di validazione delle email
const form = document.querySelector('#emailForm');
form.addEventListener('submit', search);

//dichiarazione costanti
const botton=document.querySelector('#u');
botton.addEventListener('click',visualizza);

const barra=document.querySelector('#ab');
barra.addEventListener('click',nascondi);





//const per aprire il carrello 
const carrello=document.querySelector('.kart');
carrello.addEventListener('click',visualizzaCarrello);


//seleziono i vari box che mi permettono di aprire la modale 
const box=document.querySelectorAll('.box img');
for(let i = 0; i < box.length; i++) {
   box[i].addEventListener('click',specifiche);
   
 }


//modale 
 const modale=document.querySelector('#modal-view');

 
 //menu a tendina 
 const menuTendina=document.querySelector('#tentina');
 menuTendina.addEventListener('click',appariMenu);

 //apertura carrello
 const inserire=document.querySelector('#apri-carrello');
 inserire.addEventListener('click',esciUnPrezzo);
 
