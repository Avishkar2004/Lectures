connect backend to Frontend :- 

Backend :-

const db = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "pestokiller",
});

//Fetching data from backend
app.get("/getData", (req, res) => {
  // Perform a SQL query to fetch data from the database
  const query = "SELECT * FROM maincontact, contact";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error executing SQL query: ", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(results);
  });
});


Frontend :-

const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await Axios.get("http://localhost:5000/getData");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data from backend:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


Backend

// API endpoint to handle form submissions
app.post("/api/submit", (req, res) => {
  const { name, number, selectedService, address } = req.body;

  // Insert data into MySQL database
  const query =
    "INSERT INTO maincontact (name, number, service, address) VALUES (?,?,?,?)";
  db.query(
    query,
    [name, number, selectedService, address],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: "Error inserting data" });
      } else {
        console.log("Data inserted successfully:", req.body);
        res.json({ message: "Data inserted successfully" });
        var mobileNumber = number;
        sendSMS(mobileNumber, selectedService);
      }
    }
  );
});


Frontend :-

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      if (response.data.message === "Data inserted successfully") {
        console.log("Form data submitted:", formData);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        setSuccessMessage("Thank you! Your message has been submitted.");
      } else {
        setSuccessMessage("Error submitting the message.");
      }
    } catch (error) {
      console.error("Error submitting message:", error);
      setSuccessMessage("Error submitting the message.");
    }
  };



Backend :-

app.listen(5000, () => {
  console.log("App is running");
});