ure",
          "members": {
            "dataSourceUrl": {
              "type": "string",
              "sensitive": true
            }
          }
        }
      }
    },
    "S1n": {
      "type": "map",
      "key": {
        "type": "string",
        "sensitive": true
      },
      "value": {
        "type": "structure",
        "required": [
          "rawValue"
        ],
        "members": {
          "rawValue": {}
        },
        "sensitive": true
      },
      "sensitive": true
    },
    "S1v": {
      "type": "string",
      "sensitive": true
    },
    "S2e": {
      "type": "list",
      "member": {}
    },
    "S2f": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "rowId",
          "cells"
        ],
        "members": {
          "rowId": {},
          "cells": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "formula": {
                  "shape": "St"
                },
                "format": {},
                "rawValue": {},
                "formattedValue": {},
                "formattedValues": {
                  "type": "list",
                  "member": {}
                }
              },
              "sensitive": true
            }
          }
        }
      }
    },
    "S2s": {
      "type": "map",
      "key": {},
      "value": {}
    }
  }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      