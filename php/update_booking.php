<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        sendResponse(false, "Invalid JSON data");
    }
    
    $booking_id = $input['booking_id'] ?? '';
    $status = $input['status'] ?? '';
    $action = $input['action'] ?? ''; // 'confirm' or 'cancel'
    
    if (empty($booking_id) || empty($action)) {
        sendResponse(false, "Data tidak lengkap");
    }
    
    $database = new Database();
    $db = $database->getConnection();
    
    if (!$db) {
        sendResponse(false, "Koneksi database gagal");
    }
    
    try {
        if ($action === 'delete') {
            $query = "DELETE FROM bookings WHERE id = ?";
            $stmt = $db->prepare($query);
            $result = $stmt->execute([$booking_id]);
            $message = "Booking berhasil dihapus";
        } else {
            $query = "UPDATE bookings SET status = ? WHERE id = ?";
            $stmt = $db->prepare($query);
            $result = $stmt->execute([$status, $booking_id]);
            $message = "Status booking berhasil diupdate";
        }
        
        if ($result) {
            sendResponse(true, $message);
        } else {
            sendResponse(false, "Gagal update booking");
        }
        
    } catch(PDOException $exception) {
        sendResponse(false, "Error: " . $exception->getMessage());
    }
} else {
    sendResponse(false, "Method tidak diizinkan");
}
?>