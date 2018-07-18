#!/bin/bash

# This script sets up the environment property for
# Mongo DB loopback connector. This property is used
# by REST server for connecting with the MongoDB
# instance in the cloud | local

#1. Set up the REST server to multi user mode    true | false
export COMPOSER_MULTIUSER=true

# PLEASE CHANGE THIS TO point to your DB instance
# ================================================
# HOST = DB Server host,   PORT = Server port#
# database = Name of the database
# Credentials =>    user/password
# connector   =>    We are using mongodb, it can be
#                   any nosql database

export COMPOSER_DATASOURCES='{
    "db": {
        "name": "db",

        "host": "ds241875.mlab.com",
        "port": 41875,

        "database": "hlf-rest-api",

        "user": "test",
        "password": "test123",

        "connector": "mongodb"
    }
}'

# Execute the script for enabling authentication
./rs-auth-github.sh
