go to the postman then send get req to post : id

where ?
 go to postman => http://localhost:8000/url =>
 makae a post req 
 send json data
 in body => row => then json => 
 {
        "url":"https://chat.openai.com"

}
=> u will get id =>

{
    "id": "wY9A0et7w"
}

=>

then write some for getting by id

go to postman then make post req to website by short url =>      =>
send req => then u can see website in respose in postman => in preview. 


=>http://localhost:8000/wY9A0et7w => go to chrome paste the this url then you will be render on chat gpt website


you can see history as well :-

[
  {
    _id: ObjectId('65c6edcf27a3758d55f57d32'),
    shortId: 'kPJw1atcg',
    redirectURl: 'https://www.google.com/maps',
    visitHistory: [],
    createdAt: ISODate('2024-02-10T03:30:23.517Z'),
    updatedAt: ISODate('2024-02-10T03:30:23.517Z'),
    __v: 0
  },
  {
    _id: ObjectId('65c6f2d3fbc78ab118ebefc0'),
    shortId: 'Srqckgd6R',
    redirectURl: 'https://www.google.com/maps',
    visitHistory: [],
    createdAt: ISODate('2024-02-10T03:51:47.394Z'),
    updatedAt: ISODate('2024-02-10T03:51:47.394Z'),
    __v: 0
  },
  {
    _id: ObjectId('65c6f2f7f858ac89a2fc2cc8'),
    shortId: 'ynWgmJtXU',
    redirectURl: 'https://www.google.com/maps',
    visitHistory: [],
    createdAt: ISODate('2024-02-10T03:52:23.990Z'),
    updatedAt: ISODate('2024-02-10T03:52:23.990Z'),
    __v: 0
  },
  {
    _id: ObjectId('65c6f35c9e0a1f16a6276300'),
    shortId: 'pIw-nwmP7',
    redirectURl: 'https://www.google.com/maps',
    visitHistory: [],
    createdAt: ISODate('2024-02-10T03:54:04.342Z'),
    updatedAt: ISODate('2024-02-10T03:54:04.342Z'),
    __v: 0
  },
  {
    _id: ObjectId('65c6f3c2c50a8489a47fb5cb'),
    shortId: 'J6uYb0HCo',
    redirectURl: 'https://www.google.com/maps',
    visitHistory: [],
    createdAt: ISODate('2024-02-10T03:55:47.007Z'),
    updatedAt: ISODate('2024-02-10T03:55:47.007Z'),
    __v: 0
  },
  {
    _id: ObjectId('65c6f845f6fdaabf3a036c31'),
    shortId: 'wY9A0et7w',
    redirectURL: 'https://chat.openai.com',
    visitHistory: [
      {
        timestamp: 1707538512862,
        _id: ObjectId('65c6f850f6fdaabf3a036c33')
      },
      {
        timestamp: 1707538934287,
        _id: ObjectId('65c6f9f6f6fdaabf3a036c35')
      },
      {
        timestamp: 1707538994031,
        _id: ObjectId('65c6fa32f6fdaabf3a036c38')
      }
    ],
    createdAt: ISODate('2024-02-10T04:15:01.766Z'),
    updatedAt: ISODate('2024-02-10T04:23:14.032Z'),
    __v: 0
  }
]


u can see how many clicks u have clicked on particular route

http://localhost:8000/url/analytics/wY9A0et7w

{
    "totalClicks": 3,
    "analytics": [
        {
            "timestamp": 1707538512862,
            "_id": "65c6f850f6fdaabf3a036c33"
        },
        {
            "timestamp": 1707538934287,
            "_id": "65c6f9f6f6fdaabf3a036c35"
        },
        {
            "timestamp": 1707538994031,
            "_id": "65c6fa32f6fdaabf3a036c38"
        }
    ]
}


Server Side Rendering with EJS :-

we have 3 templating engine
1.EJS  :- embeded java script
2.PUG
3.handlebars


Advantage of using ejs :-

we have a seprate file for each
i can write all code and my serve is clean

have to install ejs
tell you express you are using ejs


app.set("view engine", "ejs");
<!--! for this we have to use path module  -->
app.set("views", path.resolve("./views"));

if i get req in "/test" then show my urls :-

app.get("/test", async (req, res) => {
  //! one way to render on server side
  //! return res.end("<h1>Hello world</h1>");
  //! using ejs
  const allURLs = await URL.find({});
  //! we can pass variable as well
  //! how can i show ejs we can use forEach loop in ejs file
  return res.render("home", {
    urls: allURLs,
  });
});

:-
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home page</title>
  </head>
  <body>
    <h1>hey from server</h1>
    <% urls.forEach(url => { %>
    <li><%= url.shortId %></li>
    <% }) %>
  </body>
</html>



hey from server
kPJw1atcg
Srqckgd6R
ynWgmJtXU
pIw-nwmP7
J6uYb0HCo
wY9A0et7w

