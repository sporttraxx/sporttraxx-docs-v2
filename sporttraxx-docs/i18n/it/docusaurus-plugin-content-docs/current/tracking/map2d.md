---
id: map2d
title: Map2D
sidebar_label: Map2D
custom_edit_url: null
---
Questa pagina mostra il live-tracking dell'evento su tipologie di mappa diverse, oltre a fornire un'interazione basilare con i dispositivi di tracking.

![Map2D Page](/img/screenshots/map2d.png)
## Barra di ricerca
### Menu
COn il menu a tendina della barra di ricerca, si ha accesso alle seguenti opzioni:
* _**Map Type**_: Permette la scelta di diverse tipologie di mappa, comprese di mappa bianca da stampare/usare per screenshot.
* _**Other settings**_: **Toggle places** mostra sulla mappa la posizione degli [Orologi Sporttraxx](../hardware/clock), mettendo in evidenza la posizione dove 'dovrebbero' essere. Ciò aiuta nell'identificare un errore nel posizionare l'equipaggiamento sul tracciato di gara. **Toggle ruler** apre lo strumento Ruler che permette di misurare distanze tra punti e opens a ruler tool that allows measurements between points and indicazioni di rotta, utili per eventuali interventi rapidi di un elicottero.
* _**Links**_: Link alla [Overview](overview).
### Campo di ricerca
Per centrare la mappa su uno specifico concorrente, digitare il suo nome o numero di gara nel campo di ricerca.
Un riquadro con le informazioni del concorrente cercato verrà aperto nella parte inferiore della mappa. Lo stesso risultato viene ottenuto selezionando l'icona del concorrente nella mappa.
## Icone
Le icone dei veicoli hanno **forme** diverse:
* <span class="outer-shape outer-dot"><span class="shape dot"><span class="second-shape second-dot blue"><span class="number">101</span></span></span></span> Rotonde, per i concorrenti 
* <span class="outer-shape outer-square"><span class="shape square"><span class="second-shape second-square blue"><span class="number">101</span></span></span></span> Quadrate, per i veicoli di servizio. Questi non sono visibili agli utenti non loggati. 
Inoltre, i veicoli "nascosti" non sono visibili al pubblico.  

Il **colore** dell'icona di un concorrente è essenziale nel comprendere il suo stato attuale:  

* <span class="outer-shape outer-dot"><span class="shape dot"><span class="second-shape second-dot green"><span class="number">101</span></span></span></span> Verde quando in movimento (velocità > 7 km/h).

* <span class="outer-shape outer-dot"><span class="shape dot"><span class="second-shape second-dot blue"><span class="number">101</span></span></span></span> Blu quando fermo.
* <span class="outer-shape outer-dot"><span class="shape dot"><span class="second-shape second-dot yellow"><span class="number">101</span></span></span></span> Giallo quando il pulsante OK è stato premuto (fino a reset manuale).
* <span class="outer-shape outer-dot"><span class="shape dot"><span class="second-shape second-dot red"><span class="number">101</span></span></span></span> Rosso quando è stato premuto il pulsante di SOS (fino a reset manuale).
* <span class="outer-shape outer-dot"><span class="shape dot"><span class="second-shape second-dot gray"><span class="number">101</span></span></span></span> Grigio se il concorrente si è ritirato (fino a reset manuale).
* <span class="outer-shape outer-dot"><span class="shape dot"><span class="second-shape second-dot orange"><span class="number">101</span></span></span></span> Arancione se la macchina si trova in una zona ADA (Approaching Dangerous Area).
* <span class="outer-shape outer-dot"><span class="shape dot"><span class="second-shape second-dot light-blue"><span class="number">101</span></span></span></span> Azzurro mentre manda/riceve una richiesta GMW (Give Me Way).

Il colore di un'icona può essere:  

* <span class="outer-shape outer-dot"><span class="shape dot"><span class="second-shape second-dot blue"><span class="number">101</span></span></span></span> Acceso finchè la posizione viene aggiornata (trasmissione non pi vecchia di 20 secondi.  
* <span class="outer-shape outer-dot"><span class="shape dot"><span class="second-shape second-dot blue-faded"><span class="number">101</span></span></span></span> Sbiadire in maniera graduale man mano che la posizione diventa vecchia (trasmissione più vecchia di 20 secondi).  

**Attenzione**: assicurarsi che l'ora del proprio PC sia sincronizzata con l'ora GPS/Internet, poiché il livello di dissolvenza può esserne influenzato.

A seconda delle impostazioni del tracker, se il veicolo è fermo e quindi non trasmettente, il livello di trasparenza può persistere fino ad una richiesta di posizione manuale.  
Se nella Overview è stata selezionata l'opzione **Auto. rec. pos.**, verrà chiesta la posizione a tutti i dispositivi ogni 4 minuti, in modo da tenere sotto controllo i livelli di trasparenza delle icone.

**Attenzione**: trasmissione forzate possono influenzare la durata delle batterie dei tracker.

## Riquadro del concorrente
![Bottom box](/img/screenshots/bottombar.png)
Le informazioni mostrate sono:
* _**Number and name of competitor/service vehicle**_
* _**Actual speed**_
* _**GPS validity**_ (Spostando il cursore su questo campo verranno mostrate le coordinate attuali, da poter copiare negli appunti se necessario
* _**Age of last transmitted position**_
* Un box viola chiamato **NMV flag** mostra un non movimento rilevato dal sensore di moviemtno integrato nel tracker.

### Comandi
* _**Toggle track**_: mostra/nasconde una coda con le ultime 300 posizioni del concorrente.
* _**Request position**_: effettua una richiesta di posizione. In seguito di una NMV flag, richiedere la posizione forza il tracker a confermare lo status di NMV.
* _**Req. Call/ACK**_: richiede un callback o conferma la ricezione di un SOS. **Solamente sui [GL300](../hardware/gl300)** viene azioanata la vibrazione del dispositivo.

### Checkbox
* _**SOS**_: mostra/nasconde un SOS.
* _**OK**_: mostra/nasconde un OK.
* _**ADA**_: mostra/nasconde l'avviso ADA. Sulla mappa verrà mostrata approssimativamente l'area influenzata attorno all'icona del veicolo.
* _**GMW**_: riporta l'azionamento da parte del veicolo della funzione GMW. Si resetta automaticamente dopo 15 secondi.
* _**OUT**_: selezionandolo, l'icona del concorrente diventerà grigia (ritirato).
* _**HIDDEN**_: selezionare per nascondere un concorrente.

Selezionando un'icona diversa verrà sostituito il riquadro con quello del nuovo concorrente.
## Funzioni nascoste (combinazioni di tasti)
* _**Passare da Google Maps a MapBox e viceversa**_ :
Digitando _**Shift + s m**_ si passerà ad una versione differente della [Map2D](map2d), con opzioni di mappa 3D diverse.
* _**Mostrare le connessioni GPRS**_:
Digitando _**s c**_ il colore delle icone diventerà verde (connesso) o rosso (disconnesso).
* _**Ruler**_:
Digitando _**r**_ si aprirà/chiuderà lo strumento Ruler.
* _**Menu**_:
Digitando _**m**_ o _**.**_ verrà aperto/chiuso il menu della barra di ricerca.
* _**Mostra code concorrenti**_:
Digitando _**t t a**_ tutti i concorrenti avranno d'ora in avanti una coda colorata sulla mappa.
* _**Mostra IMEI**_:
Digitando _**s i**_ tutte le icone mostreranno l'IMEI che ha trasmesso l'ultima posizione. Utile nel caso di tracker Alias che lavorano in parallelo in un veicolo.