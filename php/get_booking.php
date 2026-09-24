<?php
include 'config.php';

$database = new Database();
$db = $database->getConnection();

if (!$db) {
    echo json_encode([]);
    exit;
}

try {
    // Get user_id from request
    $user_id = isset($_GET['user_id']) ? $_GET['user_id'] : null;
    
    if ($user_id) {
        // For user dashboard - only show their bookings
        $query = "SELECT * FROM bookings WHERE user_id = ? ORDER BY created_at DESC";
        $stmt = $db->prepare($query);
        $stmt->execute([$user_id]);
    } else {
        // For admin dashboard - show all bookings
        $query = "SELECT b.*, u.email as user_email 
                  FROM bookings b 
                  JOIN users u ON b.user_id = u.id 
                  ORDER BY b.created_at DESC";
        $stmt = $db->prepare($query);
        $stmt->execute();
    }
    
    $bookings = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    header('Content-Type: application/json');
    echo json_encode($bookings);
    
} catch(PDOException $exception) {
    echo json_encode([]);
}
?>