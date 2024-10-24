const schedulesMock = [
  {
    subjectName: 'Matematicas I',
    comissionName: 'MAT-C1',
    classroomId: '206',
    startDate: '13:00'
  },
  {
    subjectName: 'Matematicas I',
    comissionName: 'MAT-C1',
    classroomId: '206',
    startDate: '13:00'
  },
  {
    subjectName: 'Matematicas I',
    comissionName: 'MAT-C1',
    classroomId: '206',
    startDate: '13:00'
  },
  {
    subjectName: 'Matematicas I',
    comissionName: 'MAT-C1',
    classroomId: '206',
    startDate: '13:00'
  },
  {
    subjectName: 'Matematicas I',
    comissionName: 'MAT-C1',
    classroomId: '206',
    startDate: '13:00'
  },
  {
    subjectName: 'Matematicas I',
    comissionName: 'MAT-C1',
    classroomId: '206',
    startDate: '13:00'
  },
]

const coursesMock = [
  {
      "id": 5,
      "name": "Comision 5",
      "createdAt": "2024-10-17T03:38:47.721Z",
      "updatedAt": "2024-10-17T03:38:47.721Z",
      "deletedAt": null,
      "classroom": {
          "id": 5,
          "name": "MA-05",
          "createdAt": "2024-10-17T03:38:47.697Z",
          "updatedAt": "2024-10-17T03:38:47.697Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 5,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-29T03:00:00.000Z",
          "startHour": "2023-10-06T11:00:00.000Z",
          "endHour": "2023-10-06T15:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:38:47.707Z",
          "updatedAt": "2024-10-17T03:38:47.707Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 5,
          "name": "Mate 5",
          "createdAt": "2024-10-17T03:38:47.680Z",
          "updatedAt": "2024-10-17T03:38:47.680Z",
          "deletedAt": null
      }
  },
  {
      "id": 11,
      "name": "Comision 11",
      "createdAt": "2024-10-17T03:38:47.721Z",
      "updatedAt": "2024-10-17T03:38:47.721Z",
      "deletedAt": null,
      "classroom": {
          "id": 11,
          "name": "MA-11",
          "createdAt": "2024-10-17T03:38:47.697Z",
          "updatedAt": "2024-10-17T03:38:47.697Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 11,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-29T03:00:00.000Z",
          "startHour": "2023-10-06T11:00:00.000Z",
          "endHour": "2023-10-06T15:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:38:47.707Z",
          "updatedAt": "2024-10-17T03:38:47.707Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 11,
          "name": "Mate 11",
          "createdAt": "2024-10-17T03:38:47.680Z",
          "updatedAt": "2024-10-17T03:38:47.680Z",
          "deletedAt": null
      }
  },
  {
      "id": 17,
      "name": "Comision 17",
      "createdAt": "2024-10-17T03:38:47.721Z",
      "updatedAt": "2024-10-17T03:38:47.721Z",
      "deletedAt": null,
      "classroom": {
          "id": 17,
          "name": "MA-17",
          "createdAt": "2024-10-17T03:38:47.697Z",
          "updatedAt": "2024-10-17T03:38:47.697Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 17,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-29T03:00:00.000Z",
          "startHour": "2023-10-06T11:00:00.000Z",
          "endHour": "2023-10-06T15:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:38:47.707Z",
          "updatedAt": "2024-10-17T03:38:47.707Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 17,
          "name": "Mate 17",
          "createdAt": "2024-10-17T03:38:47.680Z",
          "updatedAt": "2024-10-17T03:38:47.680Z",
          "deletedAt": null
      }
  },
  {
      "id": 23,
      "name": "Comision 23",
      "createdAt": "2024-10-17T03:38:47.721Z",
      "updatedAt": "2024-10-17T03:38:47.721Z",
      "deletedAt": null,
      "classroom": {
          "id": 23,
          "name": "MA-23",
          "createdAt": "2024-10-17T03:38:47.697Z",
          "updatedAt": "2024-10-17T03:38:47.697Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 23,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-29T03:00:00.000Z",
          "startHour": "2023-10-06T11:00:00.000Z",
          "endHour": "2023-10-06T15:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:38:47.707Z",
          "updatedAt": "2024-10-17T03:38:47.707Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 23,
          "name": "Mate 23",
          "createdAt": "2024-10-17T03:38:47.680Z",
          "updatedAt": "2024-10-17T03:38:47.680Z",
          "deletedAt": null
      }
  },
  {
      "id": 29,
      "name": "Comision 29",
      "createdAt": "2024-10-17T03:38:47.721Z",
      "updatedAt": "2024-10-17T03:38:47.721Z",
      "deletedAt": null,
      "classroom": {
          "id": 29,
          "name": "MA-29",
          "createdAt": "2024-10-17T03:38:47.697Z",
          "updatedAt": "2024-10-17T03:38:47.697Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 29,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-29T03:00:00.000Z",
          "startHour": "2023-10-06T11:00:00.000Z",
          "endHour": "2023-10-06T15:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:38:47.707Z",
          "updatedAt": "2024-10-17T03:38:47.707Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 29,
          "name": "Mate 29",
          "createdAt": "2024-10-17T03:38:47.680Z",
          "updatedAt": "2024-10-17T03:38:47.680Z",
          "deletedAt": null
      }
  },
  {
      "id": 35,
      "name": "Comision 5",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 5,
          "name": "MA-05",
          "createdAt": "2024-10-17T03:38:47.697Z",
          "updatedAt": "2024-10-17T03:38:47.697Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 35,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T11:00:00.000Z",
          "endHour": "2023-10-06T15:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 5,
          "name": "Mate 5",
          "createdAt": "2024-10-17T03:38:47.680Z",
          "updatedAt": "2024-10-17T03:38:47.680Z",
          "deletedAt": null
      }
  },
  {
      "id": 41,
      "name": "Comision 11",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 11,
          "name": "MA-11",
          "createdAt": "2024-10-17T03:38:47.697Z",
          "updatedAt": "2024-10-17T03:38:47.697Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 41,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T11:00:00.000Z",
          "endHour": "2023-10-06T15:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 11,
          "name": "Mate 11",
          "createdAt": "2024-10-17T03:38:47.680Z",
          "updatedAt": "2024-10-17T03:38:47.680Z",
          "deletedAt": null
      }
  },
  {
      "id": 47,
      "name": "Comision 17",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 17,
          "name": "MA-17",
          "createdAt": "2024-10-17T03:38:47.697Z",
          "updatedAt": "2024-10-17T03:38:47.697Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 47,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T11:00:00.000Z",
          "endHour": "2023-10-06T15:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 17,
          "name": "Mate 17",
          "createdAt": "2024-10-17T03:38:47.680Z",
          "updatedAt": "2024-10-17T03:38:47.680Z",
          "deletedAt": null
      }
  },
  {
      "id": 53,
      "name": "Comision 23",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 23,
          "name": "MA-23",
          "createdAt": "2024-10-17T03:38:47.697Z",
          "updatedAt": "2024-10-17T03:38:47.697Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 53,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T11:00:00.000Z",
          "endHour": "2023-10-06T15:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 23,
          "name": "Mate 23",
          "createdAt": "2024-10-17T03:38:47.680Z",
          "updatedAt": "2024-10-17T03:38:47.680Z",
          "deletedAt": null
      }
  },
  {
      "id": 59,
      "name": "Comision 29",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 29,
          "name": "MA-29",
          "createdAt": "2024-10-17T03:38:47.697Z",
          "updatedAt": "2024-10-17T03:38:47.697Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 59,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T11:00:00.000Z",
          "endHour": "2023-10-06T15:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 29,
          "name": "Mate 29",
          "createdAt": "2024-10-17T03:38:47.680Z",
          "updatedAt": "2024-10-17T03:38:47.680Z",
          "deletedAt": null
      }
  },
  {
      "id": 65,
      "name": "Comision 35",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 35,
          "name": "MA-35",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 65,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T11:00:00.000Z",
          "endHour": "2023-10-06T15:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 35,
          "name": "Mate 35",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 71,
      "name": "Comision 41",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 41,
          "name": "MA-41",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 71,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T21:00:00.000Z",
          "endHour": "2023-10-07T01:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 41,
          "name": "Mate 41",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 77,
      "name": "Comision 47",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 47,
          "name": "MA-47",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 77,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T21:00:00.000Z",
          "endHour": "2023-10-07T01:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 47,
          "name": "Mate 47",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 83,
      "name": "Comision 53",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 53,
          "name": "MA-53",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 83,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T21:00:00.000Z",
          "endHour": "2023-10-07T01:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 53,
          "name": "Mate 53",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 89,
      "name": "Comision 59",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 59,
          "name": "MA-59",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 89,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T21:00:00.000Z",
          "endHour": "2023-10-07T01:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 59,
          "name": "Mate 59",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 95,
      "name": "Comision 65",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 65,
          "name": "MA-65",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 95,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T21:00:00.000Z",
          "endHour": "2023-10-07T01:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 65,
          "name": "Mate 65",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 101,
      "name": "Comision 71",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 71,
          "name": "MA-71",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 101,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T21:00:00.000Z",
          "endHour": "2023-10-07T01:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 71,
          "name": "Mate 71",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 107,
      "name": "Comision 77",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 77,
          "name": "MA-77",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 107,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T21:00:00.000Z",
          "endHour": "2023-10-07T01:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 77,
          "name": "Mate 77",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 113,
      "name": "Comision 83",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 83,
          "name": "MA-83",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 113,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T21:00:00.000Z",
          "endHour": "2023-10-07T01:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 83,
          "name": "Mate 83",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 119,
      "name": "Comision 89",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 89,
          "name": "MA-89",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 119,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T21:00:00.000Z",
          "endHour": "2023-10-07T01:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 89,
          "name": "Mate 89",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 125,
      "name": "Comision 95",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 95,
          "name": "MA-95",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 125,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T21:00:00.000Z",
          "endHour": "2023-10-07T01:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 95,
          "name": "Mate 95",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 137,
      "name": "Comision 107",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 107,
          "name": "MA-107",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 137,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T21:00:00.000Z",
          "endHour": "2023-10-07T01:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 107,
          "name": "Mate 107",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 143,
      "name": "Comision 113",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 113,
          "name": "MA-113",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 143,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T21:00:00.000Z",
          "endHour": "2023-10-07T01:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 113,
          "name": "Mate 113",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 149,
      "name": "Comision 119",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 119,
          "name": "MA-119",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 149,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T21:00:00.000Z",
          "endHour": "2023-10-07T01:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 119,
          "name": "Mate 119",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 155,
      "name": "Comision 125",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 125,
          "name": "MA-125",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 155,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T21:00:00.000Z",
          "endHour": "2023-10-07T01:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 125,
          "name": "Mate 125",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 161,
      "name": "Comision 131",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 131,
          "name": "MA-131",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 161,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T21:00:00.000Z",
          "endHour": "2023-10-07T01:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 131,
          "name": "Mate 131",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 167,
      "name": "Comision 137",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 137,
          "name": "MA-137",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 167,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T21:00:00.000Z",
          "endHour": "2023-10-07T01:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 137,
          "name": "Mate 137",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 173,
      "name": "Comision 143",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 143,
          "name": "MA-143",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 173,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 143,
          "name": "Mate 143",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 179,
      "name": "Comision 149",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 149,
          "name": "MA-149",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 179,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 149,
          "name": "Mate 149",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 185,
      "name": "Comision 155",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 155,
          "name": "MA-155",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 185,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 155,
          "name": "Mate 155",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 191,
      "name": "Comision 161",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 161,
          "name": "MA-161",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 191,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 161,
          "name": "Mate 161",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 197,
      "name": "Comision 167",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 167,
          "name": "MA-167",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 197,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 167,
          "name": "Mate 167",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 203,
      "name": "Comision 173",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 173,
          "name": "MA-173",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 203,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 173,
          "name": "Mate 173",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 209,
      "name": "Comision 179",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 179,
          "name": "MA-179",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 209,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 179,
          "name": "Mate 179",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 215,
      "name": "Comision 185",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 185,
          "name": "MA-185",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 215,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 185,
          "name": "Mate 185",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 221,
      "name": "Comision 191",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 191,
          "name": "MA-191",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 221,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 191,
          "name": "Mate 191",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 227,
      "name": "Comision 197",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 197,
          "name": "MA-197",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 227,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 197,
          "name": "Mate 197",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 233,
      "name": "Comision 203",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 203,
          "name": "MA-203",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 233,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 203,
          "name": "Mate 203",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 239,
      "name": "Comision 209",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 209,
          "name": "MA-209",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 239,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 209,
          "name": "Mate 209",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 245,
      "name": "Comision 215",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 215,
          "name": "MA-215",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 245,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 215,
          "name": "Mate 215",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 251,
      "name": "Comision 221",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 221,
          "name": "MA-221",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 251,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 221,
          "name": "Mate 221",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 257,
      "name": "Comision 227",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 227,
          "name": "MA-227",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 257,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 227,
          "name": "Mate 227",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 263,
      "name": "Comision 233",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 233,
          "name": "MA-233",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 263,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 233,
          "name": "Mate 233",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 269,
      "name": "Comision 239",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 239,
          "name": "MA-239",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 269,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 239,
          "name": "Mate 239",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 275,
      "name": "Comision 245",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 245,
          "name": "MA-245",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 275,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 245,
          "name": "Mate 245",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 281,
      "name": "Comision 251",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 251,
          "name": "MA-251",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 281,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 251,
          "name": "Mate 251",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 287,
      "name": "Comision 257",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 257,
          "name": "MA-257",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 287,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 257,
          "name": "Mate 257",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 293,
      "name": "Comision 263",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 263,
          "name": "MA-263",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 293,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 263,
          "name": "Mate 263",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 299,
      "name": "Comision 269",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 269,
          "name": "MA-269",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 299,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 269,
          "name": "Mate 269",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 305,
      "name": "Comision 275",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 275,
          "name": "MA-275",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 305,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 275,
          "name": "Mate 275",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 311,
      "name": "Comision 281",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 281,
          "name": "MA-281",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 311,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 281,
          "name": "Mate 281",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 317,
      "name": "Comision 287",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 287,
          "name": "MA-287",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 317,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 287,
          "name": "Mate 287",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 323,
      "name": "Comision 293",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 293,
          "name": "MA-293",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 323,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 293,
          "name": "Mate 293",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 329,
      "name": "Comision 299",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 299,
          "name": "MA-299",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 329,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 299,
          "name": "Mate 299",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 335,
      "name": "Comision 305",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 305,
          "name": "MA-305",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 335,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 305,
          "name": "Mate 305",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 341,
      "name": "Comision 311",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 311,
          "name": "MA-311",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 341,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 311,
          "name": "Mate 311",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 347,
      "name": "Comision 317",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 317,
          "name": "MA-317",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 347,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 317,
          "name": "Mate 317",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 353,
      "name": "Comision 323",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 323,
          "name": "MA-323",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 353,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 323,
          "name": "Mate 323",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 359,
      "name": "Comision 329",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 329,
          "name": "MA-329",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 359,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 329,
          "name": "Mate 329",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 365,
      "name": "Comision 335",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 335,
          "name": "MA-335",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 365,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 335,
          "name": "Mate 335",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 371,
      "name": "Comision 341",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 341,
          "name": "MA-341",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 371,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 341,
          "name": "Mate 341",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 377,
      "name": "Comision 347",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 347,
          "name": "MA-347",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 377,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 347,
          "name": "Mate 347",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 383,
      "name": "Comision 353",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 353,
          "name": "MA-353",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 383,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 353,
          "name": "Mate 353",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 389,
      "name": "Comision 359",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 359,
          "name": "MA-359",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 389,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 359,
          "name": "Mate 359",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 395,
      "name": "Comision 365",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 365,
          "name": "MA-365",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 395,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 365,
          "name": "Mate 365",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 401,
      "name": "Comision 371",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 371,
          "name": "MA-371",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 401,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 371,
          "name": "Mate 371",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 407,
      "name": "Comision 377",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 377,
          "name": "MA-377",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 407,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 377,
          "name": "Mate 377",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 413,
      "name": "Comision 383",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 383,
          "name": "MA-383",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 413,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 383,
          "name": "Mate 383",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 419,
      "name": "Comision 389",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 389,
          "name": "MA-389",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 419,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 389,
          "name": "Mate 389",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 425,
      "name": "Comision 395",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 395,
          "name": "MA-395",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 425,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 395,
          "name": "Mate 395",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 431,
      "name": "Comision 401",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 401,
          "name": "MA-401",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 431,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 401,
          "name": "Mate 401",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 437,
      "name": "Comision 407",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 407,
          "name": "MA-407",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 437,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 407,
          "name": "Mate 407",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  },
  {
      "id": 443,
      "name": "Comision 413",
      "createdAt": "2024-10-17T03:42:36.314Z",
      "updatedAt": "2024-10-17T03:42:36.314Z",
      "deletedAt": null,
      "classroom": {
          "id": 413,
          "name": "MA-413",
          "createdAt": "2024-10-17T03:42:35.858Z",
          "updatedAt": "2024-10-17T03:42:35.858Z",
          "deletedAt": null
      },
      "schedule": {
          "id": 443,
          "startDate": "2024-10-17T03:00:00.000Z",
          "endDate": "2024-10-30T03:00:00.000Z",
          "startHour": "2023-10-06T17:00:00.000Z",
          "endHour": "2023-10-06T21:00:00.000Z",
          "dayCode": "LU",
          "createdAt": "2024-10-17T03:42:35.930Z",
          "updatedAt": "2024-10-17T03:42:35.930Z",
          "deletedAt": null
      },
      "sector": {
          "id": 1,
          "name": "Malvinas Argentinas",
          "topic": "ma",
          "createdAt": "2024-10-17T03:37:02.117Z",
          "updatedAt": "2024-10-17T03:37:02.117Z",
          "deletedAt": null
      },
      "subject": {
          "id": 413,
          "name": "Mate 413",
          "createdAt": "2024-10-17T03:42:35.736Z",
          "updatedAt": "2024-10-17T03:42:35.736Z",
          "deletedAt": null
      }
  }
]

export { schedulesMock, coursesMock }