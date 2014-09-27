# [OpenShift](https://developers.openshift.com/en/getting-started-overview.html) [MEAN](http://blog.mongodb.org/post/49262866911/the-mean-stack-mongodb-expressjs-angularjs-and) seed

Quick and easy seed for an OpenShift app

### create new app
```
rhc app create nodews nodejs-0.10 mongodb-2.4 --from-code=https://github.com/openshift-quickstart/openshift-mongo-node-express-example.git
```

### troubleshooting
```
tail -f $OPENSHIFT_LOG_DIR/nodejs.log
tail -f $OPENSHIFT_LOG_DIR/mongodb.log
```

### administrating
```
ctl_app restart
```
