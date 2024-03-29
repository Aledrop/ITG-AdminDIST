{
  "version": "2.0",
  "metadata": {
    "apiVersion": "2020-08-18",
    "endpointPrefix": "grafana",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceFullName": "Amazon Managed Grafana",
    "serviceId": "grafana",
    "signatureVersion": "v4",
    "signingName": "grafana",
    "uid": "grafana-2020-08-18"
  },
  "operations": {
    "AssociateLicense": {
      "http": {
        "requestUri": "/workspaces/{workspaceId}/licenses/{licenseType}",
        "responseCode": 202
      },
      "input": {
        "type": "structure",
        "required": [
          "licenseType",
          "workspaceId"
        ],
        "members": {
          "licenseType": {
            "location": "uri",
            "locationName": "licenseType"
          },
          "workspaceId": {
            "location": "uri",
            "locationName": "workspaceId"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "workspace"
        ],
        "members": {
          "workspace": {
            "shape": "S5"
          }
        }
      }
    },
    "CreateWorkspace": {
      "http": {
        "requestUri": "/workspaces",
        "responseCode": 202
      },
      "input": {
        "type": "structure",
        "required": [
          "accountAccessType",
          "authenticationProviders",
          "permissionType"
        ],
        "members": {
          "accountAccessType": {},
          "authenticationProviders": {
            "shape": "S8"
          },
          "clientToken": {
            "idempotencyToken": true
          },
          "configuration": {
            "jsonvalue": true
          },
          "networkAccessControl": {
            "shape": "Sj"
          },
          "organizationRoleName": {
            "shape": "Sq"
          },
          "permissionType": {},
          "stackSetName": {},
          "tags": {
            "shape": "Sw"
          },
          "vpcConfiguration": {
            "shape": "Sz"
          },
          "workspaceDataSources": {
            "shape": "Sc"
          },
          "workspaceDescription": {
            "shape": "Se"
          },
          "workspaceName": {
            "shape": "Si"
          },
          "workspaceNotificationDestinations": {
            "shape": "So"
          },
          "workspaceOrganizationalUnits": {
            "shape": "Sr"
          },
          "workspaceRoleArn": {
            "shape": "S14"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "workspace"
        ],
        "members": {
          "workspace": {
            "shape": "S5"
          }
        }
      },
      "idempotent": true
    },
    "CreateWorkspaceApiKey": {
      "http": {
        "requestUri": "/workspaces/{workspaceId}/apikeys",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "keyName",
          "keyRole",
          "secondsToLive",
          "workspaceId"
        ],
        "members": {
          "keyName": {},
          "keyRole": {},
          "secondsToLive": {
            "type": "integer"
          },
          "workspaceId": {
            "location": "uri",
            "locationName": "workspaceId"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "key",
          "keyName",
          "workspaceId"
        ],
        "members": {
          "key": {
            "type": "string",
            "sensitive": true
          },
          "keyName": {},
          "workspaceId": {}
        }
      }
    },
    "DeleteWorkspace": {
      "http": {
        "method": "DELETE",
        "requestUri": "/workspaces/{workspaceId}",
        "responseCode": 202
      },
      "input": {
        "type": "structure",
        "required": [
          "workspaceId"
        ],
        "members": {
          "workspaceId": {
            "location": "uri",
            "locationName": "workspaceId"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "workspace"
        ],
        "members": {
          "workspace": {
            "shape": "S5"
          }
        }
      },
      "idempotent": true
    },
    "DeleteWorkspaceApiKey": {
      "http": {
        "method": "DELETE",
        "requestUri": "/workspaces/{workspaceId}/apikeys/{keyName}",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "keyName",
          "workspaceId"
        ],
        "members": {
          "keyName": {
            "location": "uri",
            "locationName": "keyName"
          },
          "workspaceId": {
            "location": "uri",
            "locationName": "workspaceId"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "keyName",
          "workspaceId"
        ],
        "members": {
          "keyName": {},
          "workspaceId": {}
        }
      }
    },
    "DescribeWorkspace": {
      "http": {
        "method": "GET",
        "requestUri": "/workspaces/{workspaceId}",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "workspaceId"
        ],
        "members": {
          "workspaceId": {
            "location": "uri",
            "locationName": "workspaceId"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "workspace"
        ],
        "members": {
          "workspace": {
            "shape": "S5"
          }
        }
      }
    },
    "DescribeWorkspaceAuthentication": {
      "http": {
        "method": "GET",
        "requestUri": "/workspaces/{workspaceId}/authentication",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "workspaceId"
        ],
        "members": {
          "workspaceId": {
            "location": "uri",
            "locationName": "workspaceId"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "authentication"
        ],
        "members": {
          "authentication": {
            "shape": "S1n"
          }
        }
      }
    },
    "DescribeWorkspaceConfiguration": {
      "http": {
        "method": "GET",
        "requestUri": "/workspaces/{workspaceId}/configuration",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "workspaceId"
        ],
        "members": {
          "workspaceId": {
            "location": "uri",
            "locationName": "workspaceId"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "configuration"
        ],
        "members": {
          "configuration": {
            "jsonvalue": true
          }
        }
      }
    },
    "DisassociateLicense": {
      "http": {
        "method": "DELETE",
        "requestUri": "/workspaces/{workspaceId}/licenses/{licenseType}",
        "responseCode": 202
      },
      "input": {
        "type": "structure",
        "required": [
          "licenseType",
          "workspaceId"
        ],
        "members": {
          "licenseType": {
            "location": "uri",
            "locationName": "licenseType"
          },
          "workspaceId": {
            "location": "uri",
            "locationName": "workspaceId"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "workspace"
        ],
        "members": {
          "workspace": {
            "shape": "S5"
          }
        }
      }
    },
    "ListPermissions": {
      "http": {
        "method": "GET",
        "requestUri": "/workspaces/{workspaceId}/permissions",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "workspaceId"
        ],
        "members": {
          "groupId": {
            "location": "querystring",
            "locationName": "groupId"
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
          "userId": {
            "location": "querystring",
            "locationName": "userId"
          },
          "userType": {
            "location": "querystring",
            "locationName": "userType"
          },
          "workspaceId": {
            "location": "uri",
            "locationName": "workspaceId"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "permissions"
        ],
        "members": {
          "nextToken": {},
          "permissions": {
            "type": "list",
            "member": {
              "type": "structure",
              "required": [
                "role",
                "user"
              ],
              "members": {
                "role": {},
                "user": {
                  "shape": "S2f"
                }
              }
            }
          }
        }
      }
    },
    "ListTagsForResource": {
      "http": {
        "method": "GET",
        "requestUri": "/tags/{resourceArn}",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "resourceArn"
        ],
        "members": {
          "resourceArn": {
            "location": "uri",
            "locationName": "resourceArn"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "tags": {
            "shape": "Sw"
          }
        }
      }
    },
    "ListWorkspaces": {
      "http": {
        "method": "GET",
        "requestUri": "/workspaces",
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
        "required": [
          "workspaces"
        ],
        "members": {
          "nextToken": {},
          "workspaces": {
            "type": "list",
            "member": {
              "type": "structure",
              "required": [
                "authentication",
                "created",
                "endpoint",
                "grafanaVersion",
                "id",
                "modified",
                "status"
              ],
              "members": {
                "authentication": {
                  "shape": "S7"
                },
                "created": {
                  "type": "timestamp"
                },
                "description": {
                  "shape": "Se"
                },
                "endpoint": {},
                "grafanaVersion": {},
                "id": {},
                "modified": {
                  "type": "timestamp"
                },
                "name": {
                  "shape": "Si"
                },
                "notificationDestinations": {
                  "shape": "So"
                },
                "status": {},
                "tags": {
                  "shape": "Sw"
                }
              }
            }
          }
        }
      }
    },
    "TagResource": {
      "http": {
        "requestUri": "/tags/{resourceArn}",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "resourceArn",
          "tags"
        ],
        "members": {
          "resourceArn": {
            "location": "uri",
            "locationName": "resourceArn"
          },
          "tags": {
            "shape": "Sw"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "UntagResource": {
      "http": {
        "method": "DELETE",
        "requestUri": "/tags/{resourceArn}",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "resourceArn",
          "tagKeys"
        ],
        "members": {
          "resourceArn": {
            "location": "uri",
            "locationName": "resourceArn"
          },
          "tagKeys": {
            "location": "querystring",
            "locationName": "tagKeys",
            "type": "list",
            "member": {}
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      },
      "idempotent": true
    },
    "UpdatePermissions": {
      "http": {
        "method": "PATCH",
        "requestUri": "/workspaces/{workspaceId}/permissions",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "updateInstructionBatch",
          "workspaceId"
        ],
        "members": {
          "updateInstructionBatch": {
            "type": "list",
            "member": {
              "shape": "S2u"
            }
          },
          "workspaceId": {
            "location": "uri",
            "locationName": "workspaceId"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "errors"
        ],
        "members": {
          "errors": {
            "type": "list",
            "member": {
              "type": "structure",
              "required": [
                "causedBy",
                "code",
                "message"
              ],
              "members": {
                "causedBy": {
                  "shape": "S2u"
                },
                "code": {
                  "type": "integer"
                },
                "message": {}
              }
            }
          }
        }
      }
    },
    "UpdateWorkspace": {
      "http": {
        "method": "PUT",
        "requestUri": "/workspaces/{workspaceId}",
        "responseCode": 202
      },
      "input": {
        "type": "structure",
        "required": [
          "workspaceId"
        ],
        "members": {
          "accountAccessType": {},
          "networkAccessControl": {
            "shape": "Sj"
          },
          "organizationRoleName": {
            "shape": "Sq"
          },
          "permissionType": {},
          "removeNetworkAccessConfiguration": {
            "type": "boolean"
          },
          "removeVpcConfiguration": {
            "type": "boolean"
          },
          "stackSetName": {},
          "vpcConfiguration": {
            "shape": "Sz"
          },
          "workspaceDataSources": {
            "shape": "Sc"
          },
          "workspaceDescription": {
            "shape": "Se"
          },
          "workspaceId": {
            "location": "uri",
            "locationName": "workspaceId"
          },
          "workspaceName": {
            "shape": "Si"
          },
          "workspaceNotificationDestinations": {
            "shape": "So"
          },
          "workspaceOrganizationalUnits": {
            "shape": "Sr"
          },
          "workspaceRoleArn": {
            "shape": "S14"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "workspace"
        ],
        "members": {
          "workspace": {
            "shape": "S5"
          }
        }
      }
    },
    "UpdateWorkspaceAuthentication": {
      "http": {
        "requestUri": "/workspaces/{workspaceId}/authentication",
        "responseCode": 200
      },
      "input": {
        "type": "structure",
        "required": [
          "authenticationProviders",
          "workspaceId"
        ],
        "members": {
          "authenticationProviders": {
            "shape": "S8"
          },
          "samlConfiguration": {
            "shape": "S1r"
          },
          "workspaceId": {
            "location": "uri",
            "locationName": "workspaceId"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "authentication"
        ],
        "members": {
          "authentication": {
            "shape": "S1n"
          }
        }
      }
    },
    "UpdateWorkspaceConfiguration": {
      "http": {
        "method": "PUT",
        "requestUri": "/workspaces/{workspaceId}/configuration",
        "responseCode": 202
      },
      "input": {
        "type": "structure",
        "required": [
          "configuration",
          "workspaceId"
        ],
        "members": {
          "configuration": {
            "jsonvalue": true
          },
          "workspaceId": {
            "location": "uri",
            "locationName": "workspaceId"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    }
  },
  "shapes": {
    "S5": {
      "type": "structure",
      "required": [
        "authentication",
        "created",
        "dataSources",
        "endpoint",
        "grafanaVersion",
        "id",
        "modified",
        "status"
      ],
      "members": {
        "accountAccessType": {},
        "authentication": {
          "shape": "S7"
        },
        "created": {
          "type": "timestamp"
        },
        "dataSources": {
          "shape": "Sc"
        },
        "description": {
          "shape": "Se"
        },
        "endpoint": {},
        "freeTrialConsumed": {
          "type": "boolean"
        },
        "freeTrialExpiration": {
          "type": "timestamp"
        },
        "grafanaVersion": {},
        "id": {},
        "licenseExpiration": {
          "type": "timestamp"
        },
        "licenseType": {},
        "modified": {
          "type": "timestamp"
        },
        "name": {
          "shape": "Si"
        },
        "networkAccessControl": {
         