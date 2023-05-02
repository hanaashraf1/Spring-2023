<?php
    //server info and log-in details
    //keep servername the same and change to your username, password, and database name
    $host = "sql313.epizy.com";
    $username = "epiz_34079563";
    $password = "XIhe0G1AruS46";
    $dbname = "epiz_34079563_survey";
    
    //create connection
    $conn = mysqli_connect($host, $username, $password, $dbname);

    //check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "connected successfully<br>";

    //pull form data and store in variables
    if (isset($_POST['name'], $_POST['major'], $_POST['minor'], $_POST['quality'])) {
    $name = $_POST["name" ]:
    $hours=$_POST["hours"];
    $major = $_POST("major"]:
    $minor = $_POST( "minor"]:
    $favorite = $_POST["affect"]:
    $improve = $_POST["phone"]:
    $comments = $_POST ["quality"]:

    } else {
        echo 'You need to input all the details.';
    }
 
    $sql = "INSERT INTO responses (name, hours, major, minor, affect, phone, comments)
    VALUES ('$name', '$hours', "$major', '$minor','$affect', '$phone','$quality;

    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
      }

    //close connection//
    mysqli_close($conn);

    ?>