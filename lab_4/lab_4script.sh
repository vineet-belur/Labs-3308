#!/bin/bash
# Authors : Your Name
# Date: 09/XX/2020

cd /var/log
sudo cp syslog $HOME
sudo sendmail vbelur@gmail.com < ~/syslog
