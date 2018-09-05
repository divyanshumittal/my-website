#!/bin/bash

# application details
version=1.0.0
app_name=my-website

# aws credentials
access_key=
access_secret=

# values
timestamp=$(date +%s)

# Log off current machine
eval $(docker-machine env -u)

# Create machine on aws
docker-machine create \
  --driver amazonec2 \
  --amazonec2-access-key $access_key \
  --amazonec2-secret-key $access_secret \
  --amazonec2-open-port 80 \
  --amazonec2-open-port 443 \
  $app_name-instance-$timestamp

# set context to aws machine, every subsequent docker action
# is run agains this daemon
eval $(docker-machine env $app_name-instance-$timestamp)

# Get the IP address of new EC2 instance
# Copy this IP and add an A record to the hosted zone
EC2IP=$(docker-machine ip $app_name-instance-$timestamp)

echo "EC2 instance public address: $EC2IP"

# Create image on EC2
docker build --rm -t $app_name:$version .

# Run new container
docker run -d -p 80:80 -p 443:443 $app_name:$version

# Cleanup

# Log off current machine once done
# eval $(docker-machine env -u)

# delete both local machine and terminate aws instance
# docker-machine rm -y $app_name-instance-$timestamp