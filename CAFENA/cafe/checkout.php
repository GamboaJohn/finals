<?php
$servername = "localhost";
$username = "root";
$password = "";
$database_name = "dbcafe";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database_name);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if form is submitted
if (isset($_POST['name'])) { // Check for any form field that is always present
    // Retrieve form data
    $Fullname = $_POST['name'];
    $EmailAddress = $_POST['address'];
    $PhoneNumber = $_POST['contact'];
    $Total = $_POST['total'];
    $Items = $_POST['items'];

    // SQL query to insert data into the table
    $sql_query = "INSERT INTO tblcafe (name, address, contact, total, items) VALUES ('$Fullname', '$EmailAddress', '$PhoneNumber', '$Total', '$Items')";

    // Execute query
    if (mysqli_query($conn, $sql_query)) {
        echo '<script>alert("Order placed successfully!"); window.location.href="index.html";</script>';
    } else {
        echo "Error: " . $sql_query . "<br>" . mysqli_error($conn);
    }

    // Close connection
    mysqli_close($conn);
}
?>
