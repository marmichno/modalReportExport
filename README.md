# modal report export

![modalExportReport](https://user-images.githubusercontent.com/72525469/155384260-9a967b33-16f0-413f-a3c9-27b3ff676c5e.gif)

## About project

Simple modal form for exporting and scheduling.

## Tech

- react.
- typeScript - type checking.
- axios - consuming api.
- styled-components - css in js.
- react-hook-form - managing form inputs.
- jest with react-testing-library - unit tests.

## Installation

Run those comands in project directory:
```sh
git clone https://github.com/marmichno/modalReportExport.git
cd modalReportExport
npm install
```

## Available Scripts

For app to work correctly json-server must run on port 3000.<br>
db.json file is available in data folder.<br>

To run mock api server use:
```sh
json-server --watch db.json
```

To start app in development mode use:
```sh
npm start
```

To run tests:
```sh
npm test
```
