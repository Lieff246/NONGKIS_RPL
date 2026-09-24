<?php
include 'config.php';

$database = new Database();
$db = $database->getConnection();

if (!$db) {
    echo json_encode([]);
    exit;
}

try {
    $query = "SELECT id, username, email, role, created_at FROM users ORDER BY created_at DESC";
    $stmt = $db->prepare($query);
    $stmt->execute();
    
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    header('Content-Type: application/json');
    echo json_encode($users);
    
} catch(PDOException $exception) {
    echo json_encode([]);
}
?>