//nodejs'te eventler tanımlayabiliyoruz. o event tetiklendiğinde istediğimiz bir şeyi yaptırabiliyoruz.
const events = require('events');
const eventEmitter = new events.EventEmitter();

//selamla eventini tanımladık.
eventEmitter.on('selamla', (object) => { //ilk parametre eventin adı.
    console.log(`Merhaba ${object.name} ${object.surname}`);
});

//nasıl tetikleniyor?
eventEmitter.emit('selamla', { name: 'Aziz', surname: 'Algüllü' }); //trigger ettik, emit ettik, yaydık, tetikledik.

//------

eventEmitter.once('selamla2', (object) => {
    console.log(`Yalnızca 1 defa merhaba derim sana => ${object.name} ${object.surname}`);
})

eventEmitter.emit('selamla2', { name: 'Mehmet Aziz', surname: 'Algüllü' });

//on ile once farkı ne ? => on: tetiklendikçe kullanılır. once: bir kerelik kullanılır.