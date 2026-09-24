<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    // Ambil data dari form
    $username = $_POST['username'] ?? '';
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    
    // Validasi
    if (empty($username) || empty($email) || empty($password)) {
        sendResponse(false, "Semua field harus diisi");
    }
    
    $database = new Database();
    $db = $database->getConnection();
    
    if ($db) {
        try {
            // Cek duplikat
            $checkQuery = "SELECT id FROM users WHERE email = ? OR username = ?";
            $checkStmt = $db->prepare($checkQuery);
            $checkStmt->execute([$email, $username]);
            
            if ($checkStmt->rowCount() > 0) {
                sendResponse(false, "Email atau username sudah terdaftar");
            }
            
            // Hash password
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            
            // Insert user
            $insertQuery = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
            $insertStmt = $db->prepare($insertQuery);
            
            if ($insertStmt->execute([$username, $email, $hashedPassword])) {
                sendResponse(true, "Registrasi berhasil! Silakan login.");
            } else {
                sendResponse(false, "Gagal registrasi");
            }
            
        } catch(PDOException $e) {
            sendResponse(false, "Error: " . $e->getMessage());
        }
    } else {
        sendResponse(false, "Koneksi database gagal");
    }
} else {
    sendResponse(false, "Method tidak diizinkan");
}
?>