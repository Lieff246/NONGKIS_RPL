<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        sendResponse(false, "Invalid JSON data");
    }
    
    $user_id = $input['user_id'] ?? '';
    $user_name = $input['user_name'] ?? '';
    $place_id = $input['place_id'] ?? '';
    $place_name = $input['place_name'] ?? '';
    $place_address = $input['place_address'] ?? '';
    $booking_date = $input['booking_date'] ?? '';
    $booking_time = $input['booking_time'] ?? '';
    $jumlah_orang = $input['jumlah_orang'] ?? 1;
    $catatan = $input['catatan'] ?? '';
    
    // Validasi
    if (empty($user_id) || empty($place_id) || empty($place_name)) {
        sendResponse(false, "Data booking tidak lengkap");
    }
    
    $database = new Database();
    $db = $database->getConnection();
    
    if (!$db) {
        sendResponse(false, "Koneksi database gagal");
    }
    
    try {
        $query = "INSERT INTO bookings (user_id, user_name, place_id, place_name, place_address, booking_date, booking_time, jumlah_orang, catatan) 
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        $stmt = $db->prepare($query);
        $result = $stmt->execute([
            $user_id, $user_name, $place_id, $place_name, $place_address,
            $booking_date, $booking_time, $jumlah_orang, $catatan
        ]);
        
        if ($result) {
            sendResponse(true, "Booking berhasil! Menunggu konfirmasi admin.");
        } else {
            sendResponse(false, "Gagal melakukan booking");
        }
        
    } catch(PDOException $exception) {
        sendResponse(false, "Error: " . $exception->getMessage());
    }
} else {
    sendResponse(false, "Method tidak diizinkan");
}
?>