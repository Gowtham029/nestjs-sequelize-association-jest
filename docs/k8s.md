### Create Secret
```
kubectl apply -f secret.yaml
```

### Create a config map 
```
kubectl apply -f configmap.yaml
```

### create local database volume
```
kubectl apply -f app-db-pv.yaml
```
### create database
```
kubectl apply -f app-db.yaml
```

### create the application
```
kubectl apply -f app.yaml
```


### Check the running services
```
kubctl get svc
```

### Check the deployments
```
kubctl get deployments
```

### Check the pods
```
kubctl get pods
```
### Check the pod logs
```
kubctl logs <pod-name> -f
```
