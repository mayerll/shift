1 Create project, please run the following command:
$ helm create userchart

2 Test by dry run:
Modify the values.yaml and update the docker image of client and port and ENV (we use ENV to figure out the service URL and service port)etc, then run the following command:
$ helm install --dry-run --debug ./userchart

3 helm install --dry-run --debug ./userchart --set service.internalPort=3000

4 Deploy your service on the Kubernetes:
$ helm install example ./userchart --set service.type=NodePort

5 Then run command:
$ kubectl get svc

We can get the portmapping ,then we input <node-ip>:<mapped-port>, the webpage
well be shown in the brower.
