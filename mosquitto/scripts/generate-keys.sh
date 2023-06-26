#!/bin/bash

scriptDir=`dirname "${BASH_SOURCE[0]}"`
outDir="${scriptDir}/../secrets"
mkdir -p "${outDir}"

prv="${outDir}/jwtRS256.key"
prv_der="${outDir}/jwtRS256.der"
pub="${outDir}/jwtRS256.key.pub"
pub_der="${outDir}/jwtRS256.der.pub"

# generates private.pem
ssh-keygen -t rsa -b 2048 -m PEM -f "$prv" -N ''
# generates public.pem
openssl rsa -in "$prv" -pubout -outform PEM -out "$pub"
# convert private.pem (above) to private.der
openssl rsa -in "$prv" -outform DER -out "$prv_der"
# generate the public.der from private.der
openssl rsa -in "$prv_der" -inform DER -RSAPublicKey_out -outform DER -out "$pub_der"