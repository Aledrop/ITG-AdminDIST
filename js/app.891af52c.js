   }
      }
    },
    "S6h": {
      "type": "structure",
      "required": [
        "SourceType",
        "SourceRegions"
      ],
      "members": {
        "SourceType": {},
        "AwsOrganizationsSource": {
          "shape": "S6j"
        },
        "SourceRegions": {
          "shape": "S6o"
        },
        "IncludeFutureRegions": {
          "type": "boolean"
        },
        "EnableAllOpsDataSources": {
          "type": "boolean"
        }
      }
    },
    "S6j": {
      "type": "structure",
      "required": [
        "OrganizationSourceType"
      ],
      "members": {
        "OrganizationSourceType": {},
        "OrganizationalUnits": {
          "type": "list",
          "member": {
            "type": "structure",
            "members": {
              "OrganizationalUnitId": {}
            }
          }
        }
      }
    },
    "S6o": {
      "type": "list",
      "member": {}
    },
    "S75": {
      "type": "structure",
      "members": {
        "TotalCount": {
          "type": "integer"
        },
        "RemainingCount": {
          "type": "integer"
        },
        "SummaryItems": {
          "type": "list",
          "member": {
            "type": "structure",
            "members": {
              "Version": {},
              "Count": {
                "type": "integer"
              },
              "RemainingCount": {
                "type": "integer"
              }
            }
          }
        }
      }
    },
    "S7k": {
      "type": "list",
      "member": {}
    },
    "S9k": {
      "type": "map",
      "key": {},
      "value": {
        "type": "list",
        "member": {}
      }
    },
    "S9p": {
      "type": "structure",
      "members": {
        "ParameterValues": {
          "type": "list",
          "member": {}
        },
        "Truncated": {
          "type": "boolean"
        }
      }
    },
    "S9t": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "DocumentName"
        ],
        "members": {
          "DocumentName": {},
          "DocumentVersion": {},
          "Parameters": {
            "shape": "S9k"
          },
          "TargetParameterName": {},
          "Targets": {
            "shape": "S18"
          },
          "TargetMaps": {
            "shape": "S25"
          },
          "MaxConcurrency": {},
          "MaxErrors": {},
          "TargetLocations": {
            "shape": "S1s"
          }
        }
      }
    },
    "Sa3": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "StepName": {},
          "Action": {},
          "TimeoutSeconds": {
            "type": "long"
          },
          "OnFailure": {},
          "MaxAttempts": {
            "type": "integer"
          },
          "ExecutionStartTime": {
            "type": "timestamp"
          },
          "ExecutionEndTime": {
            "type": "timestamp"
          },
          "StepStatus": {},
          "ResponseCode": {},
          "Inputs": {
            "type": "map",
            "key": {},
            "value": {}
          },
          "Outputs": {
            "shape": "S9k"
          },
          "Response": {},
          "FailureMessage": {},
          "FailureDetails": {
            "type": "structure",
            "members": {
              "FailureStage": {},
              "FailureType": {},
              "Details": {
                "shape": "S9k"
              }
            }
          },
          "StepExecutionId": {},
          "OverriddenParameters": {
            "shape": "S9k"
          },
          "IsEnd": {
            "type": "boolean"
          },
          "NextStep": {},
          "IsCritical": {
            "type": "boolean"
          },
          "ValidNextSteps": {
            "type": "list",
            "member": {}
          },
          "Targets": {
            "shape": "S18"
          },
          "TargetLocation": {
            "shape": "S1t"
          },
          "TriggeredAlarms": {
            "shape": "S2n"
          }
        }
      }
    },
    "Sad": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "Key": {},
          "Values": {
            "type": "list",
            "member": {}
          }
        }
      }
    },
    "Sal": {
      "type": "structure",
      "members": {
        "Id": {},
        "ReleaseDate": {
          "type": "timestamp"
        },
        "Title": {},
        "Description": {},
        "ContentUrl": {},
        "Vendor": {},
        "ProductFamily": {},
        "Product": {},
        "Classification": {},
        "MsrcSeverity": {},
        "KbNumber": {},
        "MsrcNumber": {},
        "Language": {},
        "AdvisoryIds": {
          "type": "list",
          "member": {}
        },
        "BugzillaIds": {
          "type": "list",
          "member": {}
        },
        "CVEIds": {
          "type": "list",
          "member": {}
        },
        "Name": {},
        "Epoch": {
          "type": "integer"
        },
        "Version": {},
        "Release": {},
        "Arch": {},
        "Severity": {},
        "Repository": {}
      }
    },
    "Sbg": {
      "type": "list",
      "member": {}
    },
    "Sc9": {
      "type": "list",
      "member": {}
    },
    "Scv": {
      "type": "structure",
      "required": [
        "InstanceId",
        "PatchGroup",
        "BaselineId",
        "OperationStartTime",
        "OperationEndTime",
        "Operation"
      ],
      "members": {
        "InstanceId": {},
        "PatchGroup": {},
        "BaselineId": {},
        "SnapshotId": {},
        "InstallOverrideList": {},
        "OwnerInformation": {
          "shape": "Scy"
        },
        "InstalledCount": {
          "type": "integer"
        },
        "InstalledOtherCount": {
          "type": "integer"
        },
        "InstalledPendingRebootCount": {
          "type": "integer"
        },
        "InstalledRejectedCount": {
          "type": "integer"
        },
        "MissingCount": {
          "type": "integer"
        },
        "FailedCount": {
          "type": "integer"
        },
        "UnreportedNotApplicableCount": {
          "type": "integer"
        },
        "NotApplicableCount": {
          "type": "integer"
        },
        "OperationStartTime": {
          "type": "timestamp"
        },
        "OperationEndTime": {
          "type": "timestamp"
        },
        "Operation": {},
        "LastNoRebootInstallOperationTime": {
          "type": "timestamp"
        },
        "RebootOption": {},
        "CriticalNonCompliantCount": {
          "type": "integer"
        },
        "SecurityNonCompliantCount": {
          "type": "integer"
        },
        "OtherNonCompliantCount": {
          "type": "integer"
        }
      }
    },
    "Scy": {
      "type": "string",
      "sensitive": true
    },
    "Se1": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "Key": {},
          "Values": {
            "type": "list",
            "member": {}
          }
        }
      }
    },
    "Sed": {
      "type": "string",
      "sensitive": true
    },
    "Sf4": {
      "type": "map",
      "key": {},
      "value": {
        "type": "structure",
        "members": {
          "Values": {
            "type": "list",
            "member": {
              "type": "string",
              "sensitive": true
            },
            "sensitive": true
          }
        },
        "sensitive": true
      },
      "sensitive": true
    },
    "Sfa": {
      "type": "structure",
      "required": [
        "S3BucketName",
        "S3Region"
      ],
      "members": {
        "S3BucketName": {},
        "S3KeyPrefix": {},
        "S3Region": {}
      }
    },
    "Sg4": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "Key"
        ],
        "members": {
          "Key": {},
          "Option": {},
          "Values": {
            "type": "list",
            "member": {}
          }
        }
      }
    },
    "Sgj": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "PolicyText": {},
          "PolicyType": {},
          "PolicyStatus": {}
        }
      }
    },
    "Sgp": {
      "type": "structure",
      "members": {
        "BaselineId": {},
        "BaselineName": {},
        "OperatingSystem": {},
        "BaselineDescription": {},
        "DefaultBaseline": {
          "type": "boolean"
        }
      }
    },
    "Sia": {
      "type": "structure",
      "members": {
        "CloudWatchLogGroupName": {},
        "CloudWatchOutputEnabled": {
          "type": "boolean"
        }
      }
    },
    "Siw": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "Key",
          "Values"
        ],
        "members": {
          "Key": {},
          "Values": {
            "type": "list",
            "member": {}
          },
          "Type": {}
        }
      }
    },
    "Sj2": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "Expression": {},
          "Aggregators": {
            "shape": "Sj2"
          },
          "Groups": {
            "type": "list",
            "member": {
              "type": "structure",
              "required": [
                "Name",
                "Filters"
              ],
              "members": {
                "Name": {},
                "Filters": {
                  "shape": "Siw"
                }
              }
            }
          }
        }
      }
    },
    "Sjj": {
      "type": "list",
      "member": {
        "type": "map",
        "key": {},
        "value": {}
      }
    },
    "Ska": {
      "type": "structure",
      "members": {
        "RunCommand": {
          "type": "structure",
          "members": {
            "Comment": {},
            "CloudWatchOutputConfig": {
              "shape": "Sia"
            },
            "DocumentHash": {},
            "DocumentHashType": {},
            "DocumentVersion": {},
            "NotificationConfig": {
              "shape": "Skc"
            },
            "OutputS3BucketName": {},
            "OutputS3KeyPrefix": {},
            "Parameters": {
              "shape": "S14"
            },
            "ServiceRoleArn": {},
            "TimeoutSeconds": {
              "type": "integer"
            }
          }
        },
        "Automation": {
          "type": "structure",
          "members": {
            "DocumentVersion": {},
            "Parameters": {
              "shape": "S9k"
            }
          }
        },
        "StepFunctions": {
          "type": "structure",
          "members": {
            "Input": {
              "type": "string",
              "sensitive": true
            },
            "Name": {}
          }
        },
        "Lambda": {
          "type": "structure",
          "members": {
            "ClientContext": {},
            "Qualifier": {},
            "Payload": {
              "type": "blob",
              "sensitive": true
            }
          }
        }
      }
    },
    "Skc": {
      "type": "structure",
      "members": {
        "NotificationArn": {},
        "NotificationEvents": {
          "type": "list",
          "member": {}
        },
        "NotificationType": {}
      }
    },
    "Skx": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "Key",
          "Values"
        ],
        "members": {
          "Key": {},
          "Values": {
            "type": "list",
            "member": {}
          },
          "Type": {}
        }
      }
    },
    "Sl3": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "AggregatorType": {},
          "TypeName": {},
          "AttributeName": {},
          "Values": {
            "type": "map",
            "key": {},
            "value": {}
          },
          "Filters": {
            "shape": "Skx"
          },
          "Aggregators": {
            "shape": "Sl3"
          }
        }
      }
    },
    "Slp": {
      "type": "structure",
      "members": {
        "Name": {},
        "Type": {},
        "Value": {
          "shape": "Slq"
        },
        "Version": {
          "type": "long"
        },
        "Selector": {},
        "SourceResult": {},
        "LastModifiedDate": {
          "type": "timestamp"
        },
        "ARN": {},
        "DataType": {}
      }
    },
    "Slq": {
      "type": "string",
      "sensitive": true
    },
    "Slw": {
      "type": "list",
      "member": {}
    },
    "Sm0": {
      "type": "list",
      "member": {
        "shape": "Slp"
      }
    },
    "Smi": {
      "type": "structure",
      "members": {
        "SettingId": {},
        "SettingValue": {},
        "LastModifiedDate": {
          "type": "timestamp"
        },
        "LastModifiedUser": {},
        "ARN": {},
        "Status": {}
      }
    },
    "Sn0": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "key",
          "value"
        ],
        "members": {
          "key": {},
          "value": {}
        }
      }
    },
    "Sng": {
      "type": "structure",
      "members": {
        "CommandId": {},
        "DocumentName": {},
        "DocumentVersion": {},
        "Comment": {},
        "ExpiresAfter": {
          "type": "timestamp"
        },
        "Parameters": {
          "shape": "S14"
        },
        "InstanceIds": {
          "shape": "Si"
        },
        "Targets": {
          "shape": "S18"
        },
        "RequestedDateTime": {
          "type": "timestamp"
        },
        "Status": {},
        "StatusDetails": {},
        "OutputS3Region": {},
        "OutputS3BucketName": {},
        "OutputS3KeyPrefix": {},
        "MaxConcurrency": {},
        "MaxErrors": {},
        "TargetCount": {
          "type": "integer"
        },
        "CompletedCount": {
          "type": "integer"
        },
        "ErrorCount": {
          "type": "integer"
        },
        "DeliveryTimedOutCount": {
          "type": "integer"
        },
        "ServiceRole": {},
        "NotificationConfig": {
          "shape": "Skc"
        },
        "CloudWatchOutputConfig": {
          "shape": "Sia"
        },
        "TimeoutSeconds": {
          "type": "integer"
        },
        "AlarmConfiguration": {
          "shape": "S1z"
        },
        "TriggeredAlarms": {
          "shape": "S2n"
        }
      }
    },
    "Snn": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "Key": {},
          "Values": {
            "type": "list",
            "member": {}
          },
          "Type": {}
        }
      }
    },
    "So5": {
      "type": "structure",
      "required": [
        "ExecutionTime"
      ],
      "members": {
        "ExecutionTime": {
          "type": "timestamp"
        },
        "ExecutionId": {},
        "ExecutionType": {}
      }
    },
    "So8": {
      "type": "map",
      "key": {},
      "value": {}
    },
    "Sod": {
      "type": "structure",
      "members": {
        "CompliantCount": {
          "type": "integer"
        },
        "SeveritySummary": {
          "shape": "Sof"
        }
      }
    },
    "Sof": {
      "type": "structure",
      "members": {
        "CriticalCount": {
          "type": "integer"
        },
        "HighCount": {
          "type": "integer"
        },
        "MediumCount": {
          "type": "integer"
        },
        "LowCount": {
          "type": "integer"
        },
        "InformationalCount": {
          "type": "integer"
        },
        "UnspecifiedCount": {
          "type": "integer"
        }
      }
    },
    "Sog": {
      "type": "structure",
      "members": {
        "NonCompliantCount": {
          "type": "integer"
        },
        "SeveritySummary": {
          "shape": "Sof"
        }
      }
    },
    "Son": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "Type": {},
          "Content": {}
        }
      }
    },
    "Spl": {
      "type": "structure",
      "members": {
        "Arn": {}
      }
    }
  }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             