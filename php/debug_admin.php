<?php
include 'config.php';

echo "<h2>🔧 DEBUG ADMIN DATA</h2>";

$database = new Database();
$db = $database->getConnection();

if (!$db) {
    echo "❌ Database connection FAILED<br>";
    exit;
}

echo "✅ Database connected<br>";

// Test users table
try {
    $usersQuery = "SELECT COUNT(*) as count FROM users";
    $usersStmt = $db->query($usersQuery);
    $usersCount = $usersStmt->fetch(PDO::FETCH_ASSOC);
    echo "✅ Users table: " . $usersCount['count'] . " users<br>";
} catch(Exception $e) {
    echo "❌ Users table error: " . $e->getMessage() . "<br>";
}

// Test bookings table
try {
    $bookingsQuery = "SELECT COUNT(*) as count FROM bookings";
    $bookingsStmt = $db->query($bookingsQuery);
    $bookingsCount = $bookingsStmt->fetch(PDO::FETCH_ASSOC);
    echo "✅ Bookings table: " . $bookingsCount['count'] . " bookings<br>";
    
    // Show booking details if any
    if ($bookingsCount['count'] > 0) {
        $detailsQuery = "SELECT id, user_name, place_name, status FROM bookings LIMIT 5";
        $detailsStmt = $db->query($detailsQuery);
        $bookings = $detailsStmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo "<h3>Recent Bookings:</h3>";
        foreach($bookings as $booking) {
            echo "ID: {$booking['id']} - {$booking['user_name']} - {$booking['place_name']} - {$booking['status']}<br>";
        }
    }
} catch(Exception $e) {
    echo "❌ Bookings table error: " . $e->getMessage() . "<br>";
}

// Test config
echo "<h3>Config Test:</h3>";
echo "Host: localhost<br>";
echo "Database: nongkis_db<br>";
echo "Username: root<br>";
?>