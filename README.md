# rws_ros_log

This is an [RWS](https://github.com/hcrlab/rws) application that displays logs from `/rosout` in the browser.

To build the application, check that you are using a [recent version of Polymer](https://www.polymer-project.org/2.0/start/install-2-0) (v1.1.0 or above) and run:
```
cd frontend
bower update
polymer build --present es6-bundled
```
