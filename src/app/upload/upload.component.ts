import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  @Input() legendTitle: string | undefined;
  constructor() {}

  ngOnInit(): void {}

  // Um die hochgeladene Datei auf dem Server zu speichern, müssen Sie eine entsprechende API auf dem Server bereitstellen.
  // In diesem Beispiel verwende ich eine RESTful-API, die den "Express"-Webframework von Node.js verwendet. Die API verarbeitet
  // die hochgeladene Datei und speichert sie im Dateisystem ab. Hier ist ein Beispielcode für den Server, der die hochgeladene
  // Datei empfängt und speichert:

  //   const express = require('express');
  // const fileUpload = require('express-fileupload');
  // const app = express();

  // app.use(fileUpload());

  // app.post('/upload', function(req, res) {
  //   if (!req.files || Object.keys(req.files).length === 0) {
  //     return res.status(400).send('Keine Datei hochgeladen');
  //   }

  //   let sampleFile = req.files.file;

  //   sampleFile.mv('/pfad/zum/speichern/' + sampleFile.name, function(err) {
  //     if (err) {
  //       return res.status(500).send(err);
  //     }

  //     res.send('Datei hochgeladen');
  //   });
  // });

  // app.listen(3000, function() {
  //   console.log('Server gestartet auf Port 3000');
  // });
  // In diesem Beispiel verwendet die API das "express-fileupload"-Middleware, um die hochgeladene Datei in der "req.files"-Eigenschaft
  //zu erhalten. Wenn keine Datei hochgeladen wurde, wird ein Fehler zurückgegeben. Andernfalls wird die hochgeladene Datei im Dateisystem
  //unter dem angegebenen Pfad gespeichert und eine Bestätigungsnachricht an den Client zurückgegeben.
}
