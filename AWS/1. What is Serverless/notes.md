what is serverless ?

backend engineer :- writing REST API(Representational State Transfer Application Programming Interface)

serverless kisi bhi cluod provider mai hota hai

aws => ec2(virtual machine) 2gb ram 400gb storage (code ko execute)

non - serverless architecute mai ye sab khayal rakhna padega :-

- ek non serverless architecute mai muje ek server lena padega
- usko configure krna padega
- us machine ke andr operating system mai hi install krunga
- jibrary bhi install krunga
- deployment ka mai hi khayal rakhunga
- usko scale up and scale down khayal mai hi rakhunga
- meri billing per hour ke basic pr hogi
- pricing per hour

serverless :-
tum sirf code likho underline infra structure ki tumhe worry nhi krana

benefits of serverless architecture :-

Cost :-

- depends on per invocation
- jab req aayegi tab server start hoga else server is sleeping

scaling :-
1000 user aaye to code ke copy bana dega
user chale jayenge to code kam hote jayenge

Disadvantage :-

- this is slow bcoz on demand vo sleep se start hota hai(cold start)
- this is stateless we can't make socket connection we can use redis for socket connection.

