
1 Create project, please run the following command:
$ helm create shiftchart 

2 Test by dry run:
Modify the values.yaml and update the docker image of server and port ENV (we use ENV to figure out the URL/username/password for connecting to the database) etc, then run the following command: 

$ helm install --dry-run --debug ./shiftchart

3 helm install --dry-run --debug ./shiftchart --set service.internalPort=3000

4 Deploy your service on the Kubernetes:
$ helm install example ./shiftchart --set service.type=NodePort
