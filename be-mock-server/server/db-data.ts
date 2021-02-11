import {
  ANNOUNCEMENT,
  BE_ACCESS_ROLES,
  CHANGE_LOG_ENTRY,
  DESTINATION_NUMBER,
  LANGUAGE_FILE,
  LIST_OPTION,
  ROUTING_TREE,
  USER,
} from './model/model';

export let ROUTING_TREES: ROUTING_TREE[] = [];
export let USERS: USER[] = [];
export let HOLIDAYS_LIST: LIST_OPTION[] = [];
export let CHANGE_LOG_SERVICES_LIST: LIST_OPTION[] = [];
export let CHANGE_LOG: CHANGE_LOG_ENTRY[] = [];
export let ANNOUNCEMENTS: ANNOUNCEMENT[] = [];
export let ANNOUNCEMENTS_SERVICES_LIST: LIST_OPTION[] = [];
export let BSK_LIST: string[] = [];
export let DESTINATION_NUMBERS: DESTINATION_NUMBER[] = [];

export const NUMBER_OF_VALUES = 50;

export function INITIALIZE_DATABASE(): { users: USER[] } {
  const users: USER[] = [];

  users.push({
    id: 'admin',
    email: 'admin',
    token: 'admin',
    role: BE_ACCESS_ROLES.BUSINESS_ADMIN,
    password: 'admin',
    createdAt: new Date(),
  });
  return {
    users: users,
  };
}

export function GENERATE_ROUTING_TREES(): ROUTING_TREE[] {
  const routingTrees: ROUTING_TREE[] = [];
  const statuses: ROUTING_TREE['status'][] = ['USED', 'NOT_USED'];
  for (let i = 1; i < NUMBER_OF_VALUES; i++) {
    routingTrees.push({
      id: '' + i,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      name: 'Routing tree 1001' + (i < 10 ? '0' + i : i),
      announcement: {
        id: '' + i,
        name: 'Announcement ' + i,
      },
      bsk: '1001' + (i < 10 ? '0' + i : i),
      customer: 'Customer ' + i,
      usedIn: `+800 ${GENERATE_N_DIGIT_NUMBER(4)} ${GENERATE_N_DIGIT_NUMBER(4)}`,
      destinationNumber: {
        id: '' + i,
        number: `044 ${GENERATE_N_DIGIT_NUMBER(3)} ${GENERATE_N_DIGIT_NUMBER(2)} ${GENERATE_N_DIGIT_NUMBER(2)}`,
      },
      activeFrom: new Date(),
    });
  }
  return routingTrees;
}

export function GENERATE_HOLIDAYS_LIST(): LIST_OPTION[] {
  return [
    { id: 0, name: "New Year's Day (01.01.)" },
    { id: 1, name: 'Bärchtoldstag (02.01.)' },
    { id: 2, name: 'Twelfth Day (06.01.)' },
    { id: 3, name: 'Schmutziger Donnerstag' },
    { id: 4, name: 'Ash Wednesday' },
    { id: 5, name: 'St. Josef (19.03.)' },
  ];
}

export function GENERATE_CHANGE_LOG(): CHANGE_LOG_ENTRY[] {
  const changeLogEntries: CHANGE_LOG_ENTRY[] = [];
  const statuses = ['OK', 'INFORMATION', 'ERROR'];
  const operationObjects = [
    { operation: 'CNU_CHANGE', user: 'GS-User', changeDescription: '' },
    { operation: 'DST_NEW', user: 'GS-User', changeDescription: '' },
    { operation: 'CFG_NEW', user: 'GS-User', changeDescription: '' },
    { operation: 'CFG_PROV', user: 'Swisscom BNAS_ESP', changeDescription: 'Status: PENDING' },
    { operation: 'CFG_ACTIV', user: 'Swisscom BNAS_EAC', changeDescription: 'Status: ACTIVE' },
  ];
  for (let i = 1; i < NUMBER_OF_VALUES; i++) {
    const randomOperationUserPair = operationObjects[Math.floor(Math.random() * operationObjects.length)];
    changeLogEntries.push({
      id: '' + i,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      date: new Date(),
      businessNumbers: [`058C${GENERATE_N_DIGIT_NUMBER(6)}`],
      operation: randomOperationUserPair.operation,
      changeDescription: randomOperationUserPair.changeDescription,
      description: 'Description ' + i,
      user: randomOperationUserPair.user,
    });
  }
  return changeLogEntries;
}

export function GENERATE_CHANGE_LOG_SERVICES_LIST(): LIST_OPTION[] {
  return [
    { id: 0, name: 'BNU_NEW' },
    { id: 1, name: 'BNU_DELETE' },
    { id: 2, name: 'BNU_CHANGE' },
    { id: 3, name: 'BNU_LOCK' },
    { id: 4, name: 'BNU_UNLOCK' },
    { id: 5, name: 'DST_NEW' },
    { id: 6, name: 'DST_DELETE' },
    { id: 7, name: 'DST_RENAME' },
    { id: 8, name: 'DST_CHANGE' },
  ];
}

export function GENERATE_ANNOUNCEMENTS(): ANNOUNCEMENT[] {
  const announcements: ANNOUNCEMENT[] = [];

  for (let i = 1; i < NUMBER_OF_VALUES; i++) {
    announcements.push({
      id: '' + i,
      title: 'Announcement ' + i,
      description: 'Description ' + i,
      author: 'Author  '  + i,
      rate: ''+i,
      activeFrom: new Date(),
      imagePath: "https://starecat.com/content/wp-content/uploads/tesla-cybertruck-when-backend-dev-goes-frontend.jpg"
    });
  }
  return announcements;
}

export function GENERATE_LANGUAGE_FILE(language: string): LANGUAGE_FILE {
  const languageOptions: LANGUAGE_FILE[] = [
    {
      type: 'file',
      file: `GOTemplate_${language}.wav`,
      wording: 'Calls from your location are not accepted.',
      useLanguage: null,
    },
    {
      type: 'language',
      file: null,
      wording: null,
      useLanguage: 'german',
    },
  ];

  if (language === 'german') {
    return languageOptions[0];
  }
  return languageOptions[Math.floor(Math.random() * languageOptions.length)];
}

export function GENERATE_ANNOUNCEMENTS_SERVICES_LIST(): LIST_OPTION[] {
  return [
    { id: 0, name: 'Corporate numbers' },
    { id: 1, name: 'Business numbers' },
  ];
}

export function GENERATE_BSK_LIST(): string[] {
  const bskList: string[] = [];
  for (let i = 1; i < NUMBER_OF_VALUES; i++) {
    bskList.push('1001' + (i < 10 ? '0' + i : i));
  }
  return bskList;
}

// DESTINATION NUMBERS
export function GENERATE_DESTINATION_NUMBERS(): DESTINATION_NUMBER[] {
  const routingTrees: DESTINATION_NUMBER[] = [];
  const statuses: DESTINATION_NUMBER['status'][] = ['USED', 'NOT_USED', 'INVALID', 'DELETED'];
  for (let i = 1; i < NUMBER_OF_VALUES; i++) {
    routingTrees.push({
      id: '' + i,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      number: `044 ${GENERATE_N_DIGIT_NUMBER(3)} ${GENERATE_N_DIGIT_NUMBER(2)} ${GENERATE_N_DIGIT_NUMBER(2)}`,
      name: 'Destination number ' + i,
      bsk: '1001' + (i < 10 ? '0' + i : i),
      customer: 'Customer ' + i,
      usedIn: { id: '' + i, name: 'Routing tree 1001' + (i < 10 ? '0' + i : i) },
      activeFrom: new Date(),
      variableEntry: true,
      deactivatePlausibilityCheck: false,
    });
  }
  return routingTrees;
}

export function GENERATE_N_DIGIT_NUMBER(n: number) {
  return ('' + Math.random()).substring(2, 2 + n);
}
