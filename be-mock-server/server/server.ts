import * as express from 'express';
import { Application } from 'express';
import * as proxy from 'express-http-proxy';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import {
  ANNOUNCEMENTS,
  ANNOUNCEMENTS_SERVICES_LIST,
  BSK_LIST,
  CHANGE_LOG,
  CHANGE_LOG_SERVICES_LIST,
  DESTINATION_NUMBERS,
  GENERATE_ANNOUNCEMENTS,
  GENERATE_ANNOUNCEMENTS_SERVICES_LIST,
  GENERATE_BSK_LIST,
  GENERATE_CHANGE_LOG,
  GENERATE_CHANGE_LOG_SERVICES_LIST,
  GENERATE_DESTINATION_NUMBERS,
  GENERATE_HOLIDAYS_LIST,
  GENERATE_N_DIGIT_NUMBER,
  GENERATE_ROUTING_TREES,
  HOLIDAYS_LIST,
  INITIALIZE_DATABASE,
  ROUTING_TREES,
  USERS,
} from './db-data';
import { ANNOUNCEMENT, CHANGE_LOG_ENTRY, DESTINATION_NUMBER, LIST_OPTION, LIST_RESPONSE, ROUTING_TREE } from './model/model';

const app: Application = express();
const baseURL = '/cts-vms/v1/';

app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());

function dynamicSort(order, property, subProperty = null) {
  let sortOrder = order === 'desc' ? 1 : -1;

  return function (a, b) {
    // next line works with strings and numbers
    let result;
    if (subProperty) {
      result = a[property][subProperty] < b[property][subProperty] ? -1 : a[property][subProperty] > b[property][subProperty] ? 1 : 0;
    } else {
      result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    }
    return result * sortOrder;
  };
}


// ANNOUNCEMENTS
app.get(baseURL + 'announcements', (req, res) => {
  // const direction = req.query.direction || 'desc';
  // const sort = req.query.sort || 'name';
  // const subSort = sort === 'usedIn' ? 'name' : null;
  console.log("JESTEM");
  setTimeout(() => {
    let clones = JSON.parse(JSON.stringify(ANNOUNCEMENTS));
    // let announcements = clones.map((value: ANNOUNCEMENT) => value).sort(dynamicSort(direction, sort, subSort));
    let announcements = clones.map((value: ANNOUNCEMENT) => value)
    const response: LIST_RESPONSE<ANNOUNCEMENT> = {
      page: {
        number: 1,
        size: 5,
        totalElements: 49,
        totalPages: 49,
      },
      content: announcements,
    };
    res.status(200).json(response);
  }, 5000);
});

app.get(baseURL + 'announcements/:id', (req, res) => {
  setTimeout(() => {
    const template = ANNOUNCEMENTS.find((value) => value.id === req.params.id);
    if (template) {
      res.status(200).json(template);
    } else {
      res.status(404).json();
    }
  }, 1000);
});



app.put(baseURL + 'announcements/:id', (req, res) => {
  setTimeout(() => {
    ANNOUNCEMENTS.splice(
      ANNOUNCEMENTS.findIndex((tree) => tree.id == req.body.id),
      1,
      req.body
    );
    res.status(200).json();
  }, 1000);
});

app.post(baseURL + 'announcements', (req, res) => {
  setTimeout(() => {
    ANNOUNCEMENTS.push({ ...req.body, id: GENERATE_N_DIGIT_NUMBER(5) });
    res.status(200).json();
  }, 1000);
});

app.get(baseURL + 'announcements-services', (req, res) => {
  setTimeout(() => {
    let clones = JSON.parse(JSON.stringify(ANNOUNCEMENTS_SERVICES_LIST));
    let servicesList = clones.map((value: LIST_OPTION) => {
      return value;
    });
    res.status(200).json(servicesList);
  }, 1000);
});

// if no mocked REST API is found, the request gets forward to real backend.
const proxyBackend = 'http://localhost:1234';

app.use(
  '/',
  proxy(proxyBackend, {
    proxyReqPathResolver: function (req, res) {
      return require('url').parse(req.url).path;
    },
  })
);
const httpServer = app.listen(8012, function () {
  console.log(JSON.stringify(httpServer.address()));
  console.log('HTTP REST API Server running at http://localhost:8012');

  console.log('INITIALIZING DATABASE');
  const database = INITIALIZE_DATABASE();
  // @ts-ignore
  USERS = database.users;
  console.log('INITIALIZED DATABASE');

  console.log('PRELOADING ROUTING_TREES');
  // @ts-ignore
  ROUTING_TREES = GENERATE_ROUTING_TREES();
  console.log('PRELOADED ROUTING_TREES');

  console.log('PRELOADING HOLIDAYS_LIST');
  // @ts-ignore
  HOLIDAYS_LIST = GENERATE_HOLIDAYS_LIST();
  console.log('PRELOADED HOLIDAYS_LIST');

  console.log('PRELOADING CHANGE_LOG');
  // @ts-ignore
  CHANGE_LOG = GENERATE_CHANGE_LOG();
  console.log('PRELOADED CHANGE_LOG');

  console.log('PRELOADING CHANGE_LOG SERVICES');
  // @ts-ignore
  CHANGE_LOG_SERVICES_LIST = GENERATE_CHANGE_LOG_SERVICES_LIST();
  console.log('PRELOADED CHANGE_LOG SERVICES');

  console.log('PRELOADING ANNOUNCEMENTS');
  // @ts-ignore
  ANNOUNCEMENTS = GENERATE_ANNOUNCEMENTS();
  console.log('PRELOADED ANNOUNCEMENTS');

  console.log('PRELOADING ANNOUNCEMENTS SERVICES');
  // @ts-ignore
  ANNOUNCEMENTS_SERVICES_LIST = GENERATE_ANNOUNCEMENTS_SERVICES_LIST();
  console.log('PRELOADED ANNOUNCEMENTS SERVICES');

  console.log('PRELOADING BSK LIST');
  // @ts-ignore
  BSK_LIST = GENERATE_BSK_LIST();
  console.log('PRELOADED BSK LIST');

  console.log('PRELOADING DESTINATION_NUMBERS');
  // @ts-ignore
  DESTINATION_NUMBERS = GENERATE_DESTINATION_NUMBERS();
  console.log('PRELOADED DESTINATION_NUMBERS');
});
