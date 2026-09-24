<?php
include 'config.php';

$database = new Database();
$db = $database->getConnection();

if ($db) {
    try {
        // Count users
        $usersQuery = "SELECT COUNT(*) as total_users FROM users";
        $usersStmt = $db->query($usersQuery);
        $usersCount = $usersStmt->fetch(PDO::FETCH_ASSOC);
        
        // Count bookings
        $bookingsQuery = "SELECT COUNT(*) as total_bookings, 
                         SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending_bookings 
                         FROM bookings";
        $bookingsStmt = $db->query($bookingsQuery);
        $bookingsCount = $bookingsStmt->fetch(PDO::FETCH_ASSOC);
        
        echo "📊 STATISTICS:<br>";
        echo "Total Users: " . $usersCount['total_users'] . "<br>";
        echo "Total Bookings: " . $bookingsCount['total_bookings'] . "<br>";
        echo "Pending Bookings: " . $bookingsCount['pending_bookings'] . "<br>";
        
    } catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
} else {
    echo "Database connection failed";
}
?>