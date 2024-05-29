NGINX:-
-Nginx is a powerful web server and uses a non-threaded, event driven architecture.
- it can also do other important things, such as 1.load balancing, and 2. http chaching, or be used as a 3. reverse proxy

(vpn is proxy server)

Normal http connection :-


Forward Proxy :-

mltiple client ===> vpn ====> node js server


reverse proxy:-most reverse proxy server is Nginx
client ===> vpn(NGINX) ====>mltiple node js server
            reverse proxy
            load balance
            http cache

watch photo

Advantages:-
- can handle 10000 concurrent req
- cache http req
- ast as reverse proxy
- act as an load balancer
- act as an api gateway
- serve and cache statix files like images, video, etc
- handle ssl certificates





