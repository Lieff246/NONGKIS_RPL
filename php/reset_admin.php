<?php
include 'config.php';

$database = new Database();
$db = $database->getConnection();

if ($db) {
    try {
        // Hash password "admin123" yang benar
        $newPassword = password_hash("admin123", PASSWORD_DEFAULT);
        
        // Update password admin
        $query = "UPDATE users SET password = ? WHERE email = 'admin@nongkis.com'";
        $stmt = $db->prepare($query);
        
        if ($stmt->execute([$newPassword])) {
            echo "✅ Admin password BERHASIL direset!";
            echo "<br>Email: admin@nongkis.com";
            echo "<br>Password: admin123";
            echo "<br><br>Hash baru: " . $newPassword;
            
            // Verify the new password
            if (password_verify("admin123", $newPassword)) {
                echo "<br>✅ Password verification: SUCCESS";
            } else {
                echo "<br>❌ Password verification: FAILED";
            }
        } else {
            echo "❌ Gagal reset password";
        }
        
    } catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
} else {
    echo "Koneksi database gagal";
}
?>