{
  "version": "2.0",
  "metadata": {
    "apiVersion": "2018-05-10",
    "endpointPrefix": "iotroborunner",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceFullName": "AWS IoT RoboRunner",
    "serviceId": "IoT RoboRunner",
    "signatureVersion": "v4",
    "signingName": "iotroborunner",
    "uid": "iot-roborunner-2018-05-10"
  },
  "operations": {
    "CreateDestination": {
      "http": {
        "requestUri": "/createDestination",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "name",
          "site"
        ],
        "members": {
          "clientToken": {
            "idempotencyToken": true
          },
          "name": {},
          "site": {},
          "state": {},
          "additionalFixedProperties": {}
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "arn",
          "id",
          "createdAt",
          "updatedAt",
          "state"
        ],
        "members": {
          "arn": {},
          "id": {},
          "createdAt": {
            "type": "timestamp"
          },
          "updatedAt": {
            "type": "timestamp"
          },
          "state": {}
        }
      },
      "idempotent": true
    },
    "CreateSite": {
      "http": {
        "requestUri": "/createSite",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "name",
          "countryCode"
        ],
        "members": {
          "clientToken": {
            "idempotencyToken": true
          },
          "name": {},
          "countryCode": {},
          "description": {}
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "arn",
          "id",
          "createdAt",
          "updatedAt"
        ],
        "members": {
          "arn": {},
          "id": {},
          "createdAt": {
            "type": "timestamp"
          },
          "updatedAt": {
            "type": "timestamp"
          }
        }
      },
      "idempotent": true
    },
    "CreateWorker": {
      "http": {
        "requestUri": "/createWorker",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "name",
          "fleet"
        ],
        "members": {
          "clientToken": {
            "idempotencyToken": true
          },
          "name": {},
          "fleet": {},
          "additionalTransientProperties": {},
          "additionalFixedProperties": {},
          "vendorProperties": {
            "shape": "Sm"
          },
          "position": {
            "shape": "Sr"
          },
          "orientation": {
            "shape": "Su"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "arn",
          "id",
          "createdAt",
          "updatedAt",
          "site"
        ],
        "members": {
          "arn": {},
          "id": {},
          "createdAt": {
            "type": "timestamp"
          },
          "updatedAt": {
            "type": "timestamp"
          },
          "site": {}
        }
      },
      "idempotent": true
    },
    "CreateWorkerFleet": {
      "http": {
        "requestUri": "/createWorkerFleet",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "name",
          "site"
        ],
        "members": {
          "clientToken": {
            "idempotencyToken": true
          },
          "name": {},
          "site": {},
          "additionalFixedProperties": {}
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "arn",
          "id",
          "createdAt",
          "updatedAt"
        ],
        "members": {
          "arn": {},
          "id": {},
          "createdAt": {
            "type": "timestamp"
          },
          "updatedAt": {
            "type": "timestamp"
          }
        }
      },
      "idempotent": true
    },
    "DeleteDestination": {
      "http": {
        "requestUri": "/deleteDestination",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "id"
        ],
        "members": {
          "id": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "DeleteSite": {
      "http": {
        "requestUri": "/deleteSite",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "id"
        ],
        "members": {
          "id": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "DeleteWorker": {
      "http": {
        "requestUri": "/deleteWorker",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "id"
        ],
        "members": {
          "id": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "DeleteWorkerFleet": {
      "http": {
        "requestUri": "/deleteWorkerFleet",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "id"
        ],
        "members": {
          "id": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "GetDestination": {
      "http": {
        "method": "GET",
        "requestUri": "/getDestination",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "id"
        ],
        "members": {
          "id": {
            "location": "querystring",
            "locationName": "id"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "arn",
          "id",
          "name",
          "site",
          "createdAt",
          "updatedAt",
          "state"
        ],
        "members": {
          "arn": {},
          "id": {},
          "name": {},
          "site": {},
          "createdAt": {
            "type": "timestamp"
          },
          "updatedAt": {
            "type": "timestamp"
          },
          "state": {},
          "additionalFixedProperties": {}
        }
      }
    },
    "GetSite": {
      "http": {
        "method": "GET",
        "requestUri": "/getSite",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "id"
        ],
        "members": {
          "id": {
            "location": "querystring",
            "locationName": "id"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "arn",
          "id",
          "name",
          "countryCode",
          "createdAt",
          "updatedAt"
        ],
        "members": {
          "arn": {},
          "id": {},
          "name": {},
          "countryCode": {},
          "description": {},
          "createdAt": {
            "type": "timestamp"
          },
          "updatedAt": {
            "type": "timestamp"
          }
        }
      }
    },
    "GetWorker": {
      "http": {
        "method": "GET",
        "requestUri": "/getWorker",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "id"
        ],
        "members": {
          "id": {
            "location": "querystring",
            "locationName": "id"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "arn",
          "id",
          "fleet",
          "site",
          "createdAt",
          "updatedAt",
          "name"
        ],
        "members": {
          "arn": {},
          "id": {},
          "fleet": {},
          "site": {},
          "createdAt": {
            "type": "timestamp"
          },
          "updatedAt": {
            "type": "timestamp"
          },
          "name": {},
          "additionalTransientProperties": {},
          "additionalFixedProperties": {},
          "vendorProperties": {
            "shape": "Sm"
          },
          "position": {
            "shape": "Sr"
          },
          "orientation": {
            "shape": "Su"
          }
        }
      }
    },
    "GetWorkerFleet": {
      "http": {
        "method": "GET",
        "requestUri": "/getWorkerFleet",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "id"
        ],
        "members": {
          "id": {
            "location": "querystring",
            "locationName": "id"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "id",
          "arn",
          "name",
          "site",
          "createdAt",
          "updatedAt"
        ],
        "members": {
          "id": {},
          "arn": {},
          "name": {},
          "site": {},
          "createdAt": {
            "type": "timestamp"
          },
          "updatedAt": {
            "type": "timestamp"
          },
          "additionalFixedProperties": {}
        }
      }
    },
    "ListDestinations": {
      "http": {
        "method": "GET",
        "requestUri": "/listDestinations",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "site"
        ],
        "members": {
          "site": {
            "location": "querystring",
            "locationName": "site"
          },
          "maxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          },
          "nextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "state": {
            "location": "querystring",
            "locationName": "state"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "nextToken": {},
          "destinations": {
            "type": "list",
            "member": {
              "type": "structure",
              "required": [
                "arn",
                "id",
                "name",
                "site",
                "createdAt",
                "updatedAt",
                "state"
              ],
              "members": {
                "arn": {},
                "id": {},
                "name": {},
                "site": {},
                "createdAt": {
                  "type": "timestamp"
                },
                "updatedAt": {
                  "type": "timestamp"
                },
                "state": {},
                "additionalFixedProperties": {}
              }
            }
          }
        }
      }
    },
    "ListSites": {
      "http": {
        "method": "GET",
        "requestUri": "/listSites",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "members": {
          "maxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          },
          "nextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "nextToken": {},
          "sites": {
            "type": "list",
            "member": {
              "type": "structure",
              "required": [
                "arn",
                "name",
                "countryCode",
                "createdAt"
              ],
              "members": {
                "arn": {},
                "name": {},
                "countryCode": {},
                "createdAt": {
                  "type": "timestamp"
                }
              }
            }
          }
        }
      }
    },
    "ListWorkerFleets": {
      "http": {
        "method": "GET",
        "requestUri": "/listWorkerFleets",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "site"
        ],
        "members": {
          "site": {
            "location": "querystring",
            "locationName": "site"
          },
          "maxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          },
          "nextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "nextToken": {},
          "workerFleets": {
            "type": "list",
            "member": {
              "type": "structure",
              "required": [
                "arn",
                "id",
                "name",
                "site",
                "createdAt",
                "updatedAt"
              ],
              "members": {
                "arn": {},
                "id": {},
                "name": {},
                "site": {},
                "createdAt": {
                  "type": "timestamp"
                },
                "updatedAt": {
                  "type": "timestamp"
                },
                "additionalFixedProperties": {}
              }
            }
          }
        }
      }
    },
    "ListWorkers": {
      "http": {
        "method": "GET",
        "requestUri": "/listWorkers",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "site"
        ],
        "members": {
          "site": {
            "location": "querystring",
            "locationName": "site"
          },
          "maxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          },
          "nextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "fleet": {
            "location": "querystring",
            "locationName": "fleet"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "nextToken": {},
          "workers": {
            "type": "list",
            "member": {
              "type": "structure",
              "required": [
                "arn",
                "id",
                "fleet",
                "createdAt",
                "updatedAt",
                "name",
                "site"
              ],
              "members": {
                "arn": {},
                "id": {},
                "fleet": {},
                "createdAt": {
                  "type": "timestamp"
                },
                "updatedAt": {
                  "type": "timestamp"
                },
                "name": {},
                "site": {},
                "additionalTransientProperties": {},
                "additionalFixedProperties": {},
                "vendorProperties": {
                  "shape": "Sm"
                },
                "position": {
                  "shape": "Sr"
                },
                "orientation": {
                  "shape": "Su"
                }
              }
            }
          }
        }
      }
    },
    "UpdateDestination": {
      "http": {
        "requestUri": "/updateDestination",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "id"
        ],
        "members": {
          "id": {},
          "name": {},
          "state": {},
          "additionalFixedProperties": {}
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "arn",
          "id",
          "name",
          "updatedAt",
          "state"
        ],
        "members": {
          "arn": {},
          "id": {},
          "name": {},
          "updatedAt": {
            "type": "timestamp"
          },
          "state": {},
          "additionalFixedProperties": {}
        }
      }
    },
    "UpdateSite": {
      "http": {
        "requestUri": "/updateSite",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "id"
        ],
        "members": {
          "id": {},
          "name": {},
          "countryCode": {},
          "description": {}
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "arn",
          "id",
          "name",
          "updatedAt"
        ],
        "members": {
          "arn": {},
          "id": {},
          "name": {},
          "countryCode": {},
          "description": {},
          "updatedAt": {
            "type": "timestamp"
          }
        }
      }
    },
    "UpdateWorker": {
      "http": {
        "requestUri": "/updateWorker",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "id"
        ],
        "members": {
          "id": {},
          "name": {},
          "additionalTransientProperties": {},
          "additionalFixedProperties": {},
          "vendorProperties": {
            "shape": "Sm"
          },
          "position": {
            "shape": "Sr"
          },
          "orientation": {
            "shape": "Su"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "arn",
          "id",
          "fleet",
          "updatedAt",
          "name"
        ],
        "members": {
          "arn": {},
          "id": {},
          "fleet": {},
          "updatedAt": {
            "type": "timestamp"
          },
          "name": {},
          "additionalTransientProperties": {},
          "additionalFixedProperties": {},
          "orientation": {
            "shape": "Su"
          },
          "vendorProperties": {
            "shape": "Sm"
          },
          "position": {
            "shape": "Sr"
          }
        }
   