// Global variables
let currentUser = null;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    checkLoginStatus();
    setupPageSpecificFunctions();
}

function checkLoginStatus() {
    const savedUser = localStorage.getItem('nongkis_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateNavigationForLoggedInUser();
        
        if (window.location.pathname.includes('dashboard.html')) {
            updateDashboardInfo();
        }
        
        if (window.location.pathname.includes('admin_dashboard.html')) {
            loadAllBookings();
        }
    }
}

function setupPageSpecificFunctions() {
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'index.html':
        case '':
            setupHomePage();
            break;
        case 'login.html':
            setupLoginPage();
            break;
        case 'register.html':
            setupRegisterPage();
            break;
        case 'dashboard.html':
            setupDashboardPage();
            break;
        case 'admin_dashboard.html':
            setupAdminDashboardPage();
            break;
    }
}

// ==================== HOME PAGE ====================
function setupHomePage() {
    loadPlaces();
    setupFilterListeners();
}

function setupFilterListeners() {
    const categoryFilter = document.getElementById('categoryFilter');
    const searchInput = document.getElementById('searchInput');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            loadPlaces(this.value, searchInput?.value || '');
        });
    }
    
    if (searchInput) {
        let timeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                loadPlaces(categoryFilter?.value || '', this.value);
            }, 300);
        });
    }
}

function loadPlaces(category = '', search = '') {
    const placesList = document.getElementById('placesList');
    if (!placesList) return;
    
    try {
        placesList.innerHTML = '<div class="loading">🔄 Memuat tempat nongkrong...</div>';
        
        // Simulate loading
        setTimeout(() => {
            let filteredPlaces = placesData;
            
            if (category) {
                filteredPlaces = filteredPlaces.filter(place => place.kategori === category);
            }
            
            if (search) {
                const lowerSearch = search.toLowerCase();
                filteredPlaces = filteredPlaces.filter(place => 
                    place.nama_tempat.toLowerCase().includes(lowerSearch) ||
                    place.alamat.toLowerCase().includes(lowerSearch) ||
                    place.deskripsi.toLowerCase().includes(lowerSearch)
                );
            }
            
            displayPlaces(filteredPlaces, placesList);
        }, 500);
        
    } catch (error) {
        console.error('Error loading places:', error);
        placesList.innerHTML = '<div class="loading">❌ Error memuat data.</div>';
    }
}

function displayPlaces(places, container) {
    container.innerHTML = '';
    
    if (places.length === 0) {
        container.innerHTML = '<div class="loading">🔍 Tidak ada tempat yang ditemukan</div>';
        return;
    }
    
    places.forEach(place => {
        const placeCard = createPlaceCard(place);
        container.appendChild(placeCard);
    });
}

function createPlaceCard(place) {
    const card = document.createElement('div');
    card.className = 'place-card';
    
    const categoryClass = `category-${place.kategori}`;
    const categoryLabel = getCategoryLabel(place.kategori);
    
    const imageUrl = place.foto || 'images/places/placeholder.jpg';
    
    // Handle fasilitas
    let facilitiesArray = [];
    if (Array.isArray(place.fasilitas)) {
        facilitiesArray = place.fasilitas;
    } else if (typeof place.fasilitas === 'string') {
        facilitiesArray = place.fasilitas.split(',').map(f => f.trim());
    }
    
    const mapUrl = place.map_url || `https://maps.google.com/?q=${encodeURIComponent(place.nama_tempat + ' ' + place.alamat)}`;
    
    card.innerHTML = `
        <div class="place-image">
            <img src="${imageUrl}" alt="${place.nama_tempat}" 
                 onerror="this.src='images/places/placeholder.jpg'">
            <span class="category-badge ${categoryClass}">${categoryLabel}</span>
        </div>
        
        <div class="place-content">
            <h3>${place.nama_tempat}</h3>
            
            <div class="place-info">
                <p class="address">📍 ${place.alamat}</p>
                <p class="hours">🕒 ${place.jam_buka || 'Buka Setiap Hari'}</p>
            </div>
            
            ${facilitiesArray.length > 0 ? `
                <div class="facilities">
                    ${facilitiesArray.map(facility => 
                        `<span class="facility-tag">${facility}</span>`
                    ).join('')}
                </div>
            ` : ''}
            
            <p class="description">${place.deskripsi}</p>
            
            <!-- TOMBOL YANG SUDAH DIPERBAIKI -->
            <div class="place-actions">
                <a href="${mapUrl}" target="_blank" class="map-button">
                    📍 Lihat di Maps
                </a>
                
                ${currentUser ? `
                    <button onclick="bookPlace(${place.id})" class="book-button">
                        📅 Booking Tempat
                    </button>
                ` : `
                    <button onclick="showLoginAlert()" class="login-button">
                        🔐 Login untuk Booking
                    </button>
                `}
            </div>
        </div>
    `;
    
    return card;
}

function getCategoryLabel(category) {
    const labels = {
        'nongkrong': '🏖️ Nongkrong',
        'tugas': '📚 Tugas', 
        'diskusi': '👥 Diskusi'
    };
    return labels[category] || category;
}

// ==================== AUTH PAGES ====================
function setupLoginPage() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}

function setupRegisterPage() {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
}

async function handleLogin(event) {
    event.preventDefault();
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    try {
        submitBtn.textContent = '🔄 Login...';
        submitBtn.disabled = true;
        
        const formData = new FormData(form);
        
        const response = await fetch('php/login.php', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            showNotification('✅ ' + result.message, 'success');
            localStorage.setItem('nongkis_user', JSON.stringify(result.data));
            currentUser = result.data;
            
            setTimeout(() => {
                if (result.data.role === 'admin') {
                    window.location.href = 'admin_dashboard.html';
                } else {
                    window.location.href = 'dashboard.html';
                }
            }, 1000);
        } else {
            showNotification('❌ ' + result.message, 'error');
        }
        
    } catch (error) {
        showNotification('❌ Error: ' + error.message, 'error');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

async function handleRegister(event) {
    event.preventDefault();
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    try {
        submitBtn.textContent = '🔄 Mendaftar...';
        submitBtn.disabled = true;
        
        const formData = new FormData(form);
        
        const response = await fetch('php/register.php', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            showNotification('✅ ' + result.message, 'success');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
        } else {
            showNotification('❌ ' + result.message, 'error');
        }
        
    } catch (error) {
        showNotification('❌ Error: ' + error.message, 'error');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// ==================== DASHBOARD ====================
function setupDashboardPage() {
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    
    // Jika admin, redirect ke admin dashboard
    if (currentUser.role === 'admin') {
        window.location.href = 'admin_dashboard.html';
        return;
    }
    
    updateDashboardInfo();
    loadUserBookings();
}

function setupAdminDashboardPage() {
    if (!currentUser || currentUser.role !== 'admin') {
        alert('❌ Akses ditolak! Hanya untuk admin.');
        window.location.href = 'login.html';
        return;
    }
    
    updateDashboardInfo();
    loadAllBookings();
}

function updateDashboardInfo() {
    if (document.getElementById('userName')) {
        document.getElementById('userName').textContent = currentUser.username;
    }
    if (document.getElementById('infoUsername')) {
        document.getElementById('infoUsername').textContent = currentUser.username;
    }
    if (document.getElementById('infoEmail')) {
        document.getElementById('infoEmail').textContent = currentUser.email;
    }
    if (document.getElementById('infoJoinDate')) {
        document.getElementById('infoJoinDate').textContent = currentUser.joinDate || 'Baru saja';
    }
}

// ==================== NAVIGATION ====================
function updateNavigationForLoggedInUser() {
    const navMenu = document.querySelector('.nav-menu');
    if (!navMenu) return;
    
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'dashboard.html' || currentPage === 'admin_dashboard.html') {
        navMenu.innerHTML = `
            <a href="index.html" class="nav-link">🏠 Beranda</a>
            <a href="#profile" class="nav-link">👤 Profil</a>
            <a href="#" class="nav-link" onclick="logout()">🚪 Logout</a>
        `;
    } else {
        navMenu.innerHTML = `
            <a href="index.html" class="nav-link active">🏠 Beranda</a>
            <a href="#tempat" class="nav-link">📌 Tempat</a>
            ${currentUser.role === 'admin' ? 
                '<a href="admin_dashboard.html" class="nav-link">👑 Admin</a>' : 
                '<a href="dashboard.html" class="nav-link">📊 Dashboard</a>'
            }
            <a href="#" class="nav-link" onclick="logout()">🚪 Logout (${currentUser.username})</a>
        `;
    }
}

function logout() {
    localStorage.removeItem('nongkis_user');
    currentUser = null;
    showNotification('👋 Logout berhasil!', 'success');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// ==================== BOOKING SYSTEM (DATABASE) ====================
async function bookPlace(placeId) {
    if (!currentUser) {
        showLoginAlert();
        return;
    }
    
    const place = placesData.find(p => p.id === placeId);
    if (!place) return;
    
    // Simple booking form
    const jumlahOrang = prompt(`Booking ${place.nama_tempat}\n\nJumlah orang:`, "1");
    
    if (!jumlahOrang) return;
    
    const catatan = prompt("Catatan (opsional):", "");
    
    try {
        const bookingData = {
            user_id: currentUser.id,
            user_name: currentUser.username,
            place_id: place.id,
            place_name: place.nama_tempat,
            place_address: place.alamat,
            booking_date: new Date().toISOString().split('T')[0], // Today
            booking_time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
            jumlah_orang: parseInt(jumlahOrang),
            catatan: catatan || ''
        };
        
        const response = await fetch('php/booking.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData)
        });
        
        const result = await response.json();
        
        if (result.success) {
            showNotification('✅ ' + result.message, 'success');
        } else {
            showNotification('❌ ' + result.message, 'error');
        }
        
    } catch (error) {
        console.error('Booking error:', error);
        showNotification('❌ Terjadi kesalahan saat booking', 'error');
    }
}

// Get user's bookings
async function getUserBookings() {
    if (!currentUser) {
        console.log('❌ No current user');
        return [];
    }
    
    try {
        console.log('🔍 Fetching bookings for user_id:', currentUser.id);
        const response = await fetch(`php/get_booking.php?user_id=${currentUser.id}`);
        
        console.log('📡 Response status:', response.status);
        console.log('📡 Response ok:', response.ok);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('📦 Bookings data:', data);
        console.log('📊 Data type:', typeof data);
        console.log('🔢 Data length:', Array.isArray(data) ? data.length : 'Not array');
        
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error('❌ Error getting bookings:', error);
        return [];
    }
}

// Load user bookings in dashboard
// Load user bookings in dashboard
async function loadUserBookings() {
    console.log('🔄 loadUserBookings() called');
    
    const bookings = await getUserBookings();
    const bookingsContainer = document.getElementById('userBookings');
    
    if (!bookingsContainer) {
        console.error('❌ userBookings container not found!');
        return;
    }
    
    console.log('📊 Number of bookings:', bookings.length);
    
    if (bookings.length === 0) {
        bookingsContainer.innerHTML = '<div class="no-data">Belum ada booking</div>';
        return;
    }
    
    bookingsContainer.innerHTML = bookings.map(booking => `
        <div class="booking-card booking-${booking.status}">
            <div class="booking-header">
                <h4>${booking.place_name}</h4>
                <span class="booking-status ${booking.status}">${booking.status}</span>
            </div>
            <div class="booking-info">
                <p><strong>Alamat:</strong> ${booking.place_address}</p>
                <p><strong>Tanggal:</strong> ${booking.booking_date} ${booking.booking_time}</p>
                <p><strong>Jumlah Orang:</strong> ${booking.jumlah_orang}</p>
                ${booking.catatan ? `<p><strong>Catatan:</strong> ${booking.catatan}</p>` : ''}
                <p><strong>Status:</strong> ${getStatusText(booking.status)}</p>
            </div>
        </div>
    `).join('');
    
    console.log('✅ Bookings displayed');
}

// Refresh stats after loading bookings
async function loadAllBookings() {
    try {
        const response = await fetch('php/get_bookings.php');
        const bookings = await response.json();
        
        const bookingsList = document.getElementById('bookingsList');
        if (!bookingsList) return;
        
        bookingsList.innerHTML = '';
        
        if (bookings.length === 0) {
            bookingsList.innerHTML = '<div class="no-data">Belum ada booking</div>';
            // Update stats to zero
            updateAdminStats(0, 0);
            return;
        }
        
        bookings.forEach(booking => {
            const bookingCard = document.createElement('div');
            bookingCard.className = `booking-card booking-${booking.status}`;
            
            bookingCard.innerHTML = `
                <div class="booking-header">
                    <h4>${booking.place_name}</h4>
                    <span class="booking-status ${booking.status}">${booking.status}</span>
                </div>
                <div class="booking-info">
                    <p><strong>User:</strong> ${booking.user_name} (${booking.user_email})</p>
                    <p><strong>Alamat:</strong> ${booking.place_address}</p>
                    <p><strong>Tanggal:</strong> ${booking.booking_date} ${booking.booking_time}</p>
                    <p><strong>Jumlah Orang:</strong> ${booking.jumlah_orang}</p>
                    ${booking.catatan ? `<p><strong>Catatan:</strong> ${booking.catatan}</p>` : ''}
                    <p><strong>Dibooking pada:</strong> ${new Date(booking.created_at).toLocaleString('id-ID')}</p>
                </div>
                <div class="booking-actions">
                    ${booking.status === 'pending' ? `
                        <button onclick="updateBooking(${booking.id}, 'confirmed')" class="btn-confirm">✅ Konfirmasi</button>
                        <button onclick="updateBooking(${booking.id}, 'cancelled')" class="btn-cancel">❌ Tolak</button>
                    ` : ''}
                    <button onclick="deleteBooking(${booking.id})" class="btn-delete">🗑️ Hapus</button>
                </div>
            `;
            
            bookingsList.appendChild(bookingCard);
        });
        
        // Update stats after loading bookings
        updateAdminStats(bookings.length, bookings.filter(b => b.status === 'pending').length);
        
    } catch (error) {
        console.error('Error loading bookings:', error);
    }
}

// Function to update admin stats
function updateAdminStats(totalBookings, pendingBookings) {
    if (document.getElementById('totalBookings')) {
        document.getElementById('totalBookings').textContent = totalBookings;
    }
    if (document.getElementById('pendingBookings')) {
        document.getElementById('pendingBookings').textContent = pendingBookings;
    }
    if (document.getElementById('totalPlaces') && window.placesData) {
        document.getElementById('totalPlaces').textContent = window.placesData.length;
    }
}

// Update booking status (Admin only)
async function updateBooking(bookingId, status) {
    try {
        const response = await fetch('php/update_booking.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                booking_id: bookingId,
                status: status,
                action: 'update'
            })
        });
        
        const result = await response.json();
        
        if (result.success) {
            showNotification('✅ ' + result.message, 'success');
            loadAllBookings(); // Refresh list
        } else {
            showNotification('❌ ' + result.message, 'error');
        }
        
    } catch (error) {
        console.error('Error updating booking:', error);
        showNotification('❌ Terjadi kesalahan', 'error');
    }
}

// Delete booking (Admin only)
async function deleteBooking(bookingId) {
    if (!confirm('Yakin ingin menghapus booking ini?')) return;
    
    try {
        const response = await fetch('php/update_booking.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                booking_id: bookingId,
                action: 'delete'
            })
        });
        
        const result = await response.json();
        
        if (result.success) {
            showNotification('✅ ' + result.message, 'success');
            loadAllBookings(); // Refresh list
        } else {
            showNotification('❌ ' + result.message, 'error');
        }
        
    } catch (error) {
        console.error('Error deleting booking:', error);
        showNotification('❌ Terjadi kesalahan', 'error');
    }
}

// ==================== ADMIN HELPER FUNCTIONS ====================

// Function to get total users count
async function getTotalUsers() {
    try {
        const response = await fetch('php/get_users.php');
        const users = await response.json();
        return users.length;
    } catch (error) {
        console.error('Error getting users count:', error);
        return 0;
    }
}

// Function to update admin stats
function updateAdminStats(totalBookings, pendingBookings, totalUsers) {
    if (document.getElementById('totalBookings')) {
        document.getElementById('totalBookings').textContent = totalBookings;
    }
    if (document.getElementById('pendingBookings')) {
        document.getElementById('pendingBookings').textContent = pendingBookings;
    }
    if (document.getElementById('totalUsers')) {
        document.getElementById('totalUsers').textContent = totalUsers || 0;
    }
    if (document.getElementById('totalPlaces') && window.placesData) {
        document.getElementById('totalPlaces').textContent = window.placesData.length;
    }
}

// Refresh admin data
async function refreshAdminData() {
    try {
        const [bookingsResponse, usersResponse] = await Promise.all([
            fetch('php/get_bookings.php'),
            fetch('php/get_users.php')
        ]);
        
        const bookings = await bookingsResponse.json();
        const users = await usersResponse.json();
        
        updateAdminStats(bookings.length, 
                        bookings.filter(b => b.status === 'pending').length, 
                        users.length);
        
        showNotification('✅ Data diperbarui', 'success');
    } catch (error) {
        console.error('Error refreshing admin data:', error);
        showNotification('❌ Gagal memperbarui data', 'error');
    }
}

function getStatusText(status) {
    const statusText = {
        'pending': 'Menunggu Konfirmasi',
        'confirmed': 'Dikonfirmasi',
        'cancelled': 'Dibatalkan'
    };
    return statusText[status] || status;
}

// ==================== NOTIFICATION SYSTEM ====================
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        max-width: 300px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
    `;
    
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #dc3545, #e83e8c)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 3000);
}

function showLoginAlert() {
    showNotification('🔐 Silakan login terlebih dahulu untuk booking tempat', 'error');
}

function showBookingHistory() {
    showNotification('📅 Fitur riwayat booking tersedia di dashboard', 'info');
}

function showFavorites() {
    showNotification('❤️ Fitur favorit akan segera hadir!', 'info');
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Export functions untuk global access
window.bookPlace = bookPlace;
window.logout = logout;
window.showBookingHistory = showBookingHistory;
window.showFavorites = showFavorites;
window.showLoginAlert = showLoginAlert;
window.updateBooking = updateBooking;
window.deleteBooking = deleteBooking;