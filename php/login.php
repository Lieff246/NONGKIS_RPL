<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    // Ambil data dari form
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    
    // Validasi
    if (empty($email) || empty($password)) {
        sendResponse(false, "Email dan password harus diisi");
    }
    
    $database = new Database();
    $db = $database->getConnection();
    
    if ($db) {
        try {
            // Cari user
            $query = "SELECT id, username, email, password, role FROM users WHERE email = ?";
            $stmt = $db->prepare($query);
            $stmt->execute([$email]);
            
            if ($stmt->rowCount() == 1) {
                $user = $stmt->fetch(PDO::FETCH_ASSOC);
                
                // Verify password
                if (password_verify($password, $user['password'])) {
                    // Hapus password dari response
                    unset($user['password']);
                    sendResponse(true, "Login berhasil!", $user);
                } else {
                    sendResponse(false, "Password salah");
                }
            } else {
                sendResponse(false, "Email tidak terdaftar");
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