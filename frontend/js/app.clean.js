// Translation Dictionary
const translations = {
    vi: {
        tagline: "Hệ Thống Phân Nhóm & Phân Tích Chất Lượng Ảnh",
        source_label: "Đường dẫn thư mục ảnh gốc",
        source_placeholder: "Ví dụ: C:\\Users\\MSI\\Pictures\\Wedding_Shoot",
        source_tip: "Các định dạng RAW (CR2, CR3, NEF, ARW...) và JPEG sẽ được tự động phân tích.",
        export_folder_setup_label: "Thư mục lưu ảnh đã lọc",
        export_setup_placeholder: "Ví dụ: C:\\Users\\MSI\\Pictures\\Wedding_Shoot\\Selected",
        pipeline_params: "Tham số Phân Tích",
        burst_window: "Khoảng Chụp Liên Tiếp",
        burst_window_desc: "Khoảng thời gian tối đa giữa các ảnh trong một chuỗi chụp liên tục.",
        pose_limit: "Giới Hạn Khác Biệt Tư Thế",
        pose_limit_desc: "Độ sai biệt tư thế (Pose) để phân biệt góc máy. Mức thấp sẽ giữ lại nhiều biến thể.",
        begin_culling: "Bắt Đầu Lọc Ảnh Thông Minh",
        analyzing_title: "Đang Phân Tích Thư Viện Ảnh...",
        preparing_pipeline: "Đang khởi tạo các module xử lý...",
        live_scenes: "Nhóm ảnh",
        stat_total: "Tổng",
        stat_scenes: "Nhóm",
        stat_keep: "Giữ",
        stat_reject: "Loại",
        view_report_tooltip: "Xem báo cáo chi tiết",
        back_tooltip: "Quét thư mục khác",
        scene_groups_title: "Nhóm Khung Hình",
        select_group_desc: "Chọn một nhóm ảnh ở thanh bên để duyệt.",
        grid_large: "Lưới Lớn",
        grid_small: "Lưới Nhỏ",
        keep_all_btn: "Giữ Tất Cả",
        export_folder_label: "Thư mục xuất ảnh",
        export_placeholder: "Ví dụ: C:\\Users\\MSI\\Pictures\\Wedding_Shoot\\Selected",
        copy_selected_btn: "Sao Chép Ảnh Đã Chọn",
        report_title: "Báo Cáo Lọc Ảnh",
        rep_total_label: "Tổng số ảnh",
        rep_keep_label: "Giữ lại",
        rep_reject_label: "Loại bỏ",
        rep_ratio_label: "Tỷ lệ giữ",
        deduction_summary_title: "Chi tiết lý do loại bỏ ảnh",
        reason_blur: "Ảnh bị nhòe / Mất nét",
        reason_eyes: "Bị nhắm mắt",
        reason_exposure: "Lỗi phơi sáng (Cháy sáng / Quá tối)",
        reason_duplicate: "Ảnh trùng lặp trong nhóm (Burst)",
        close_btn: "Đóng",
        copying_title: "Đang Sao Chép Ảnh...",
        done_btn: "XONG",
        keep_pose_label: "Tự động chọn mỗi ảnh/pose dáng khác nhau 1 tấm",
        keep_rate_label: "Lọc Chi Tiết (Tỷ Lệ Giữ):",
        update_title: "Có phiên bản mới!",
        update_hero_badge: "MỚI",
        update_hero_sub: "Cập nhật để trải nghiệm những cải tiến mới nhất.",
        current_version_label: "Hiện tại",
        latest_version_label: "Mới nhất",
        changelog_title: "Có gì mới",
        later_btn: "Để sau",
        update_now_btn: "Cập nhật ngay",

        
        // Dynamic elements in JS
        alert_path: "Vui lòng nhập đường dẫn thư mục hợp lệ.",
        alert_export_path: "Vui lòng nhập đường dẫn thư mục xuất ảnh.",
        connecting_err: "Mất kết nối với máy chủ backend.",
        scan_err: "Lỗi khởi động quét ảnh",
        network_err: "Lỗi mạng",
        export_success: "Sao chép ảnh thành công!",
        export_fail: "Sao chép ảnh thất bại",
        copied: "Đã sao chép",
        copying: "Đang sao chép file...",
        copy_preparing: "Đang chuẩn bị...",
        copying_files_status: "Đang sao chép",
        scene_title: "Nhóm #",
        photos_count: "ảnh trong chuỗi này.",
        photo_count_single: "Ảnh đơn lẻ.",
        keep: "Giữ",
        reject: "Loại",
        ai_pick: "AI Chọn",
        sharpness: "Độ nét",
        eyes: "Mắt",
        exposure: "Phơi sáng",
        noise: "Nhiễu",
        sharp: "Nét",
        blurry: "Nhòe",
        open: "Mở",
        closed: "Nhắm",
        normal: "Bình thường",
        overexposed: "Cháy sáng",
        underexposed: "Quá tối",
        over_recoverable: "Cháy sáng (Cứu được)",
        under_recoverable: "Quá tối (Cứu được)",
        high: "Cao",
        low: "Thấp",
        n_a: "Không có",
        analyzing: "Đang phân tích",
        scene: "Nhóm",
        photos: "ảnh",
        large_grid_label: "Lưới Lớn",
        small_grid_label: "Lưới Nhỏ",

        // Auth & Admin UI
        auth_tagline: "Đăng Nhập & Kích Hoạt Thiết Bị",
        tab_login: "Đăng Nhập",
        tab_register: "Đăng Ký",
        login_username_label: "Tên đăng nhập",
        login_password_label: "Mật khẩu",
        btn_login: "ĐĂNG NHẬP",
        forgot_password_link: "Quên mật khẩu?",
        reg_fullname_label: "Tên người dùng (Họ và Tên)",
        reg_email_label: "Gmail",
        reg_username_label: "Tên đăng nhập",
        reg_password_label: "Mật khẩu",
        reg_referral_label: "Mã giới thiệu (Sale Code)",
        reg_referral_tip: "Nhập mã viết hoa tên của người làm sale để được giá tốt.",
        btn_register: "ĐĂNG KÝ",
        forgot_desc: "Nhập tên đăng nhập hoặc Gmail của bạn. Chúng tôi sẽ tự động cấp mật khẩu mới gửi về Gmail đăng ký của bạn.",
        forgot_identity_label: "Tên đăng nhập hoặc Gmail",
        btn_reset_password: "CẤP LẠI MẬT KHẨU",
        back_to_login_link: "Quay lại Đăng nhập",
        admin_panel_title: "Panel Admin - Quản lý Người dùng",
        total_users_lbl: "Tổng số tài khoản:",
        refresh_btn: "Làm mới",
        col_fullname: "Tên người dùng",
        col_username: "Username",
        col_password: "Mật khẩu",
        col_email: "Gmail",
        col_referral: "Mã giới thiệu",
        col_status: "Trạng thái",
        col_devices: "Thiết bị liên kết (CPU / RAM / IP / UUID)",
        col_action: "Hành động"
    },
    en: {
        tagline: "Scene Grouping & Quality Analysis System",
        source_label: "Source Folder Path",
        source_placeholder: "e.g., C:\\Users\\MSI\\Pictures\\Wedding_Shoot",
        source_tip: "RAW formats (CR2, CR3, NEF, ARW...) and JPEG will be automatically analyzed.",
        export_folder_setup_label: "Export destination folder",
        export_setup_placeholder: "e.g., C:\\Users\\MSI\\Pictures\\Wedding_Shoot\\Selected",
        pipeline_params: "Analysis Parameters",
        burst_window: "Burst Time Window",
        burst_window_desc: "Maximum time window between consecutive photos to group them.",
        pose_limit: "Pose Difference Limit",
        pose_limit_desc: "Pose difference limit to detect distinct camera setups. Lower keeps more variations.",
        begin_culling: "Begin Intelligent Culling",
        analyzing_title: "Analyzing Photo Library...",
        preparing_pipeline: "Preparing pipeline modules...",
        live_scenes: "Scenes",
        stat_total: "Total",
        stat_scenes: "Scenes",
        stat_keep: "Keep",
        stat_reject: "Reject",
        view_report_tooltip: "View detailed report",
        back_tooltip: "Scan another directory",
        scene_groups_title: "Scene Groups",
        select_group_desc: "Select a scene group on the left to review photos.",
        grid_large: "Large Grid",
        grid_small: "Small Grid",
        keep_all_btn: "Keep All",
        export_folder_label: "Export folder",
        export_placeholder: "e.g., C:\\Users\\MSI\\Pictures\\Wedding_Shoot\\Selected",
        copy_selected_btn: "Copy Selected Photos",
        report_title: "Photo Culling Report",
        rep_total_label: "Total audited",
        rep_keep_label: "Kept (Selected)",
        rep_reject_label: "Rejected",
        rep_ratio_label: "Keep ratio",
        deduction_summary_title: "Rejection Reason Details",
        reason_blur: "Out of focus / Blurry",
        reason_eyes: "Eyes closed",
        reason_exposure: "Exposure issues (Overexposed / Dark)",
        reason_duplicate: "Duplicate photo in group (Burst)",
        close_btn: "Close",
        copying_title: "Copying Selected Photos...",
        done_btn: "DONE",
        reject_bad_label: "Automatically reject bad photos (blurry, closed eyes, exposure errors)",
        keep_pose_label: "Automatically select 1 photo per distinct pose",
        keep_rate_label: "Fine Filter (Keep Rate):",
        update_title: "New version available!",
        update_hero_badge: "NEW",
        update_hero_sub: "Update to experience the latest improvements.",
        current_version_label: "Current",
        latest_version_label: "Latest",
        changelog_title: "What's new",
        later_btn: "Later",
        update_now_btn: "Update Now",

        
        // Dynamic elements in JS
        alert_path: "Please enter a valid directory path.",
        alert_export_path: "Please enter a target folder path.",
        connecting_err: "Lost connection to backend server.",
        scan_err: "Error starting scan",
        network_err: "Network error",
        export_success: "Successfully exported files!",
        export_fail: "Export failed",
        copied: "Copied",
        copying: "Copying files...",
        copy_preparing: "Preparing...",
        copying_files_status: "Copying",
        scene_title: "Scene #",
        photos_count: "photos captured in this sequence.",
        photo_count_single: "Single photo.",
        keep: "Keep",
        reject: "Reject",
        ai_pick: "AI Pick",
        sharpness: "Sharpness",
        eyes: "Eyes",
        exposure: "Exposure",
        noise: "Noise",
        sharp: "Sharp",
        blurry: "Blurry",
        open: "Open",
        closed: "Closed",
        normal: "Normal",
        overexposed: "Overexposed",
        underexposed: "Underexposed",
        over_recoverable: "Over (Recoverable)",
        under_recoverable: "Under (Recoverable)",
        high: "High",
        low: "Low",
        n_a: "N/A",
        analyzing: "Analyzing",
        scene: "Scene",
        photos: "photos",
        large_grid_label: "Large Grid",
        small_grid_label: "Small Grid",

        // Auth & Admin UI
        auth_tagline: "Login & Device Activation",
        tab_login: "Login",
        tab_register: "Register",
        login_username_label: "Username",
        login_password_label: "Password",
        btn_login: "LOG IN",
        forgot_password_link: "Forgot password?",
        reg_fullname_label: "User Full Name",
        reg_email_label: "Gmail",
        reg_username_label: "Username",
        reg_password_label: "Password",
        reg_referral_label: "Referral Code (Sale Code)",
        reg_referral_tip: "Enter the uppercase name of the sales rep to get a good deal.",
        btn_register: "REGISTER",
        forgot_desc: "Enter your username or Gmail. We will automatically generate a new password and send it to your registered Gmail.",
        forgot_identity_label: "Username or Gmail",
        btn_reset_password: "RESET PASSWORD",
        back_to_login_link: "Back to Login",
        admin_panel_title: "Admin Panel - User Management",
        total_users_lbl: "Total accounts:",
        refresh_btn: "Refresh",
        col_fullname: "Full Name",
        col_username: "Username",
        col_password: "Password",
        col_email: "Gmail",
        col_referral: "Referral Code",
        col_status: "Status",
        col_devices: "Linked Devices (CPU / RAM / IP / UUID)",
        col_action: "Action"
    }
};

// State Management
let appState = {
    currentScreen: 'auth', // Default screen is auth
    results: [],
    scenes: {}, // Map of groupId -> array of items
    activeGroupId: null,
    gridSize: 'large', // 'large' or 'small'
    sourceDir: '',
    exportDir: '',
    language: 'vi', // Default language is Vietnamese
    user: null
};

// DOM Elements
const screens = {
    auth: document.getElementById('auth-screen'),
    setup: document.getElementById('setup-screen'),
    scanning: document.getElementById('scanning-screen'),
    dashboard: document.getElementById('dashboard-screen')
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    initSliders();
    initEventListeners();
    initKeybinds();
    startHeartbeat();
    
    // Apply default language
    changeLanguage(appState.language);
    
    // Verify auth status
    checkAuthStatus();
});

// Heartbeat Pings (Auto-shutdown backend when page is closed)
function startHeartbeat() {
    // Send first heartbeat immediately
    sendHeartbeat();
    // Repeat every 2 seconds
    setInterval(sendHeartbeat, 2000);

    // Immediately send heartbeat when user switches back to the tab
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            sendHeartbeat();
        }
    });

    // Also send when window receives focus
    window.addEventListener('focus', sendHeartbeat);
}

async function sendHeartbeat() {
    try {
        await fetch('/api/heartbeat', { method: 'POST' });
    } catch (err) {
        console.warn('Heartbeat backend server connection failed:', err);
    }
}

// Online Update Checker
async function checkAppUpdate() {
    try {
        const response = await fetch('/api/check_update');
        if (!response.ok) return;
        const data = await response.json();
        
        if (data.update_available) {
            // Update modal text fields
            document.getElementById('update-current-ver').textContent = data.current_version;
            document.getElementById('update-latest-ver').textContent = data.latest_version;
            
            // Render changelog list based on current active language
            const changelogList = document.getElementById('update-changelog-list');
            changelogList.innerHTML = '';
            
            const logItems = appState.language === 'vi' ? data.changelog_vi : data.changelog_en;
            if (logItems && logItems.length > 0) {
                logItems.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    changelogList.appendChild(li);
                });
            } else {
                const li = document.createElement('li');
                li.textContent = appState.language === 'vi' ? 'Sửa lỗi và tối ưu hiệu năng.' : 'Bug fixes and performance improvements.';
                changelogList.appendChild(li);
            }
            
            // Set download link
            const updateBtn = document.getElementById('update-now-btn');
            updateBtn.href = data.download_url || '#';
            
            // Show update modal
            document.getElementById('update-modal').classList.add('active');
        }
    } catch (err) {
        console.warn('Failed to check for updates:', err);
    }
}




// 1. Parameter Sliders Sync
function initSliders() {
    const timeInput = document.getElementById('time-threshold-input');
    const timeVal = document.getElementById('val-time-threshold');
    timeInput.addEventListener('input', (e) => {
        timeVal.textContent = `${e.target.value}s`;
    });

    const simInput = document.getElementById('sim-threshold-input');
    const simVal = document.getElementById('val-sim-threshold');
    simInput.addEventListener('input', (e) => {
        simVal.textContent = `${e.target.value}%`;
    });

    const keepRateInput = document.getElementById('keep-rate-input');
    const keepRateVal = document.getElementById('val-keep-rate');
    keepRateInput.addEventListener('input', (e) => {
        keepRateVal.textContent = `${e.target.value}%`;
    });
    keepRateInput.addEventListener('change', (e) => {
        adjustKeepRate(parseInt(e.target.value));
    });
}

// 2. Screen Routing
function showScreen(screenId) {
    Object.keys(screens).forEach(key => {
        if (key === screenId) {
            screens[key].classList.add('active');
        } else {
            screens[key].classList.remove('active');
        }
    });
    appState.currentScreen = screenId;
}

// 3. Event Handlers setup
function initEventListeners() {
    // Start Scan Button
    document.getElementById('start-scan-btn').addEventListener('click', startScan);
    
    // Language switchers
    document.getElementById('setup-lang-vi').addEventListener('click', () => changeLanguage('vi'));
    document.getElementById('setup-lang-en').addEventListener('click', () => changeLanguage('en'));
    document.getElementById('dashboard-lang-vi').addEventListener('click', () => changeLanguage('vi'));
    document.getElementById('dashboard-lang-en').addEventListener('click', () => changeLanguage('en'));

    // Directory Browser dialog triggers
    document.getElementById('browse-source-btn').addEventListener('click', () => openCustomFileBrowser('source-dir-input'));
    document.getElementById('browse-export-btn').addEventListener('click', () => openCustomFileBrowser('export-dir-setup-input', true));
    document.getElementById('browse-export-dash-btn').addEventListener('click', () => openCustomFileBrowser('export-dir-input', true));
    
    // Custom File Browser Modal actions
    document.getElementById('close-fs-btn').addEventListener('click', () => {
        document.getElementById('fs-browser-modal').classList.remove('active');
    });
    document.getElementById('fs-cancel-btn').addEventListener('click', () => {
        document.getElementById('fs-browser-modal').classList.remove('active');
    });
    document.getElementById('fs-ok-btn').addEventListener('click', () => {
        if (fsSelectedPath) {
            document.getElementById(fsTargetInputId).value = fsSelectedPath;
            
            if (fsSyncWithExportBar) {
                document.getElementById('export-dir-setup-input').value = fsSelectedPath;
                document.getElementById('export-dir-input').value = fsSelectedPath;
                appState.exportDir = fsSelectedPath;
            }
            
            // If picking source directory, auto-recommend export path if empty
            if (fsTargetInputId === 'source-dir-input') {
                const setupExport = document.getElementById('export-dir-setup-input');
                if (!setupExport.value.trim()) {
                    const suggestedExport = fsSelectedPath + (fsSelectedPath.includes('\\') ? '\\Selected' : '/Selected');
                    setupExport.value = suggestedExport;
                    document.getElementById('export-dir-input').value = suggestedExport;
                    appState.exportDir = suggestedExport;
                }
            }
        }
        document.getElementById('fs-browser-modal').classList.remove('active');
    });
    
    // Sync setup export folder input with dashboard export folder input
    const setupExportInput = document.getElementById('export-dir-setup-input');
    const dashExportInput = document.getElementById('export-dir-input');
    
    setupExportInput.addEventListener('input', (e) => {
        const val = e.target.value;
        dashExportInput.value = val;
        appState.exportDir = val;
    });
    
    dashExportInput.addEventListener('input', (e) => {
        const val = e.target.value;
        setupExportInput.value = val;
        appState.exportDir = val;
    });

    // Header Actions
    document.getElementById('back-to-setup-btn').addEventListener('click', () => {
        showScreen('setup');
    });
    
    // Done Button (Reset to initial state)
    document.getElementById('done-btn').addEventListener('click', resetAppToInitialState);
    
    // Layout Toggle
    document.getElementById('toggle-size-btn').addEventListener('click', () => {
        const grid = document.getElementById('images-grid');
        const btnText = document.getElementById('toggle-size-btn').querySelector('span');
        
        if (appState.gridSize === 'large') {
            appState.gridSize = 'small';
            grid.classList.remove('grid-large');
            grid.classList.add('grid-small');
            btnText.textContent = translations[appState.language].small_grid_label;
        } else {
            appState.gridSize = 'large';
            grid.classList.remove('grid-small');
            grid.classList.add('grid-large');
            btnText.textContent = translations[appState.language].large_grid_label;
        }
    });

    // Keep All in Scene Button
    document.getElementById('keep-all-scene-btn').addEventListener('click', keepAllInCurrentScene);

    // Export Button
    document.getElementById('copy-selected-btn').addEventListener('click', exportKeptPhotos);

    // Report Modal
    const modal = document.getElementById('report-modal');
    document.getElementById('show-report-btn').addEventListener('click', () => {
        generateReport();
        modal.classList.add('active');
    });
    document.getElementById('close-report-btn').addEventListener('click', () => {
        modal.classList.remove('active');
    });
    document.getElementById('modal-ok-btn').addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    // Close modal on outer click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Update Modal Event Listeners
    const updateModal = document.getElementById('update-modal');
    document.getElementById('close-update-btn').addEventListener('click', () => {
        updateModal.classList.remove('active');
    });
    document.getElementById('update-later-btn').addEventListener('click', () => {
        updateModal.classList.remove('active');
    });
    window.addEventListener('click', (e) => {
        if (e.target === updateModal) {
            updateModal.classList.remove('active');
        }
    });

    // Auth Screen Event Listeners
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const forgotForm = document.getElementById('forgot-form');
    
    tabLogin.addEventListener('click', () => {
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        forgotForm.classList.remove('active');
        clearAuthMessages();
    });
    
    tabRegister.addEventListener('click', () => {
        tabRegister.classList.add('active');
        tabLogin.classList.remove('active');
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
        forgotForm.classList.remove('active');
        clearAuthMessages();
    });
    
    document.getElementById('btn-forgot-password').addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.remove('active');
        registerForm.classList.remove('active');
        forgotForm.classList.add('active');
        clearAuthMessages();
    });
    
    document.getElementById('btn-back-to-login').addEventListener('click', (e) => {
        e.preventDefault();
        tabLogin.click();
    });
    
    // Auth Forms Submission
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);
    forgotForm.addEventListener('submit', handleForgotPassword);
    
    // Logout Button
    document.getElementById('logout-btn').addEventListener('click', handleLogout);
    
    // Admin buttons
    const adminModal = document.getElementById('admin-panel-modal');
    document.getElementById('admin-panel-btn').addEventListener('click', openAdminPanel);
    document.getElementById('dash-admin-btn').addEventListener('click', openAdminPanel);
    document.getElementById('close-admin-btn').addEventListener('click', () => adminModal.classList.remove('active'));
    document.getElementById('admin-close-btn').addEventListener('click', () => adminModal.classList.remove('active'));
    document.getElementById('admin-refresh-btn').addEventListener('click', loadAdminUsers);
    
    window.addEventListener('click', (e) => {
        if (e.target === adminModal) {
            adminModal.classList.remove('active');
        }
    });
}


// 4. Keyboard Shortcuts (K = Keep, R = Reject, 1-5 = Stars, 6-9 = Colors, Arrows = Move)
function initKeybinds() {
    document.addEventListener('keydown', (e) => {
        if (appState.currentScreen !== 'dashboard') return;
        if (document.activeElement.tagName === 'INPUT') return;
        
        const key = e.key.toLowerCase();
        
        // Navigation using Arrow Keys
        const cards = Array.from(document.querySelectorAll('.photo-card'));
        if (cards.length > 0) {
            let index = cards.findIndex(c => c === document.activeElement || c.contains(document.activeElement));
            
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                let nextIndex = index - 1;
                if (nextIndex >= 0) {
                    cards[nextIndex].focus();
                    cards.forEach(c => c.classList.remove('selected'));
                    cards[nextIndex].classList.add('selected');
                }
                return;
            }
            
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                let nextIndex = index + 1;
                if (nextIndex < cards.length) {
                    cards[nextIndex].focus();
                    cards.forEach(c => c.classList.remove('selected'));
                    cards[nextIndex].classList.add('selected');
                }
                return;
            }
            
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (index > 0) {
                    const currentCard = cards[index];
                    const currentRect = currentCard.getBoundingClientRect();
                    let bestMatchIndex = -1;
                    let minDiff = Infinity;
                    for (let i = index - 1; i >= 0; i--) {
                        const card = cards[i];
                        const rect = card.getBoundingClientRect();
                        if (card.offsetTop < currentCard.offsetTop) {
                            const diff = Math.abs(rect.left - currentRect.left);
                            if (diff < minDiff) {
                                minDiff = diff;
                                bestMatchIndex = i;
                            }
                        }
                    }
                    if (bestMatchIndex !== -1) {
                        cards[bestMatchIndex].focus();
                        cards.forEach(c => c.classList.remove('selected'));
                        cards[bestMatchIndex].classList.add('selected');
                    }
                }
                return;
            }
            
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (index < cards.length - 1 && index !== -1) {
                    const currentCard = cards[index];
                    const currentRect = currentCard.getBoundingClientRect();
                    let bestMatchIndex = -1;
                    let minDiff = Infinity;
                    for (let i = index + 1; i < cards.length; i++) {
                        const card = cards[i];
                        const rect = card.getBoundingClientRect();
                        if (card.offsetTop > currentCard.offsetTop) {
                            const diff = Math.abs(rect.left - currentRect.left);
                            if (diff < minDiff) {
                                minDiff = diff;
                                bestMatchIndex = i;
                            }
                        }
                    }
                    if (bestMatchIndex !== -1) {
                        cards[bestMatchIndex].focus();
                        cards.forEach(c => c.classList.remove('selected'));
                        cards[bestMatchIndex].classList.add('selected');
                    }
                } else if (index === -1) {
                    cards[0].focus();
                    cards.forEach(c => c.classList.remove('selected'));
                    cards[0].classList.add('selected');
                }
                return;
            }
            
            if (e.key === ' ') {
                e.preventDefault();
                const focusedCard = document.querySelector('.photo-card:focus-within') || document.querySelector('.photo-card.selected');
                if (focusedCard) {
                    const path = focusedCard.dataset.filePath;
                    openFullPreview(encodeURIComponent(path));
                }
                return;
            }
        }
        
        // Meta Shortcuts on Hovered or Focused Card
        const focusedCard = document.querySelector('.photo-card:focus-within') || document.querySelector('.photo-card.selected') || document.querySelector('.photo-card:hover');
        if (focusedCard) {
            const path = focusedCard.dataset.filePath;
            
            // K = Keep
            if (key === 'k') {
                updatePhotoDecision(path, 'Keep');
            }
            
            // R = Reject
            if (key === 'r') {
                updatePhotoDecision(path, 'Reject');
            }
            
            // Stars: 1-5
            if (key >= '1' && key <= '5') {
                const rating = parseInt(key);
                updatePhotoMetadata(path, rating, null);
            }
            
            // Colors: 6-9
            if (key === '6') updatePhotoMetadata(path, null, 'red');
            if (key === '7') updatePhotoMetadata(path, null, 'yellow');
            if (key === '8') updatePhotoMetadata(path, null, 'green');
            if (key === '9') updatePhotoMetadata(path, null, 'blue');
            
            // Clear: 0
            if (key === '0') {
                updatePhotoMetadata(path, 0, 'none');
            }
        }
    });
}

// Custom Folder Browser Variables and Functions
let fsCurrentPath = '';
let fsSelectedPath = '';
let fsTargetInputId = '';
let fsSyncWithExportBar = false;

function openCustomFileBrowser(inputId, syncWithExportBar = false) {
    fsTargetInputId = inputId;
    fsSyncWithExportBar = syncWithExportBar;
    
    // Get the initial path from the input field if it exists
    let initialPath = document.getElementById(inputId).value.trim();
    
    // Open the modal
    document.getElementById('fs-browser-modal').classList.add('active');
    
    // Fetch and display
    fetchDirectoryContents(initialPath);
}

async function fetchDirectoryContents(path) {
    try {
        let url = '/api/fs/list';
        if (path) {
            url += `?path=${encodeURIComponent(path)}`;
        }
        
        // Show loading or clear grid
        const grid = document.getElementById('fs-grid');
        grid.innerHTML = '<div class="loading-dirs" style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">Loading...</div>';
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to load directory');
        }
        
        const data = await response.json();
        
        fsCurrentPath = data.current_path;
        fsSelectedPath = data.current_path;
        document.getElementById('fs-selected-path').textContent = fsSelectedPath;
        
        renderBreadcrumbs(data.current_path);
        renderShortcuts(data.shortcuts);
        renderDrives(data.drives);
        renderGrid(data.folders, data.images);
        
        // Up button state
        const upBtn = document.getElementById('fs-up-btn');
        if (data.parent_path) {
            upBtn.style.opacity = '1';
            upBtn.style.pointerEvents = 'auto';
            upBtn.onclick = () => fetchDirectoryContents(data.parent_path);
        } else {
            upBtn.style.opacity = '0.5';
            upBtn.style.pointerEvents = 'none';
            upBtn.onclick = null;
        }
        
    } catch (err) {
        console.error('Error fetching directory:', err);
        // Fallback to home directory if path fails and we were trying a custom path
        if (path !== '') {
            fetchDirectoryContents('');
        }
    }
}

function renderBreadcrumbs(path) {
    const container = document.getElementById('fs-breadcrumbs');
    container.innerHTML = '';
    
    if (!path) return;
    
    let separator = '/';
    let isUnix = true;
    if (path.includes('\\')) {
        separator = '\\';
        isUnix = false;
    }
    
    if (isUnix) {
        // Prepend root segment
        const rootSeg = document.createElement('span');
        rootSeg.className = 'breadcrumb-segment';
        rootSeg.textContent = '/';
        rootSeg.addEventListener('click', () => fetchDirectoryContents('/'));
        container.appendChild(rootSeg);
        
        if (path === '/') return;
    }
    
    const parts = path.split(separator).filter(p => p !== '');
    let accumulated = '';
    
    parts.forEach((part, index) => {
        // Add separator between segments
        if (isUnix || index > 0) {
            const sepSpan = document.createElement('span');
            sepSpan.className = 'breadcrumb-separator';
            sepSpan.textContent = separator;
            container.appendChild(sepSpan);
        }
        
        if (index === 0) {
            accumulated = isUnix ? '/' + part : part;
            if (!isUnix && !accumulated.endsWith('\\')) {
                accumulated += '\\';
            }
        } else {
            accumulated = accumulated + (accumulated.endsWith(separator) ? '' : separator) + part;
        }
        
        const segment = document.createElement('span');
        segment.className = 'breadcrumb-segment';
        segment.textContent = part;
        const targetPath = accumulated;
        segment.addEventListener('click', () => fetchDirectoryContents(targetPath));
        container.appendChild(segment);
    });
}

function renderShortcuts(shortcuts) {
    const container = document.getElementById('fs-shortcuts-list');
    container.innerHTML = '';
    
    if (!shortcuts || shortcuts.length === 0) {
        container.innerHTML = '<div style="font-size:0.8rem; color:var(--text-dimmed); padding:0 10px;">None</div>';
        return;
    }
    
    shortcuts.forEach(s => {
        const btn = document.createElement('button');
        btn.className = 'fs-shortcut-item';
        btn.innerHTML = 
            '<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px;"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>' +
            '<span>' + s.name + '</span>';
        btn.addEventListener('click', () => fetchDirectoryContents(s.path));
        container.appendChild(btn);
    });
}

function renderDrives(drives) {
    const container = document.getElementById('fs-drives-list');
    container.innerHTML = '';
    
    if (!drives || drives.length === 0) {
        container.innerHTML = '<div style="font-size:0.8rem; color:var(--text-dimmed); padding:0 10px;">None</div>';
        return;
    }
    
    drives.forEach(d => {
        const btn = document.createElement('button');
        btn.className = 'fs-drive-item';
        btn.innerHTML = 
            '<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px;"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>' +
            '<span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1;" title="' + d.name + '">' + d.name + '</span>';
        btn.addEventListener('click', () => fetchDirectoryContents(d.path));
        container.appendChild(btn);
    });
}

function renderGrid(folders, images) {
    const grid = document.getElementById('fs-grid');
    grid.innerHTML = '';
    
    if ((!folders || folders.length === 0) && (!images || images.length === 0)) {
        grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; color:var(--text-dimmed); padding:20px; font-size:0.85rem;">Thư mục trống / Empty folder</div>`;
        return;
    }
    
    // Render folders
    if (folders) {
        folders.forEach(f => {
            const card = document.createElement('div');
            card.className = 'fs-item-card folder-card';
            card.dataset.path = f.path;
            card.innerHTML = 
                '<div class="fs-item-icon">' +
                '<svg viewBox="0 0 24 24" width="38" height="38" fill="currentColor"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>' +
                '</div>' +
                '<div class="fs-item-name" title="' + f.name + '">' + f.name + '</div>';
            
            card.addEventListener('click', () => {
                document.querySelectorAll('.fs-item-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                fsSelectedPath = f.path;
                document.getElementById('fs-selected-path').textContent = fsSelectedPath;
            });
            
            card.addEventListener('dblclick', () => {
                fetchDirectoryContents(f.path);
            });
            
            grid.appendChild(card);
        });
    }
    
    // Render images
    if (images) {
        images.forEach(img => {
            const card = document.createElement('div');
            card.className = 'fs-item-card image-card';
            card.dataset.path = img.path;
            
            const previewUrl = '/api/preview?path=' + encodeURIComponent(img.path);
            card.innerHTML = 
                '<div class="fs-item-thumbnail">' +
                '<img src="' + previewUrl + '" alt="' + img.name + '" loading="lazy">' +
                '</div>' +
                '<div class="fs-item-name" title="' + img.name + '">' + img.name + '</div>';
            
            card.addEventListener('click', () => {
                document.querySelectorAll('.fs-item-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                
                // When selecting an image, the chosen folder path is its containing directory
                fsSelectedPath = fsCurrentPath;
                document.getElementById('fs-selected-path').textContent = fsSelectedPath;
            });
            
            grid.appendChild(card);
        });
    }
}

// Language Switch Logic
function changeLanguage(lang) {
    appState.language = lang;
    
    // Update active state in switcher UI
    document.querySelectorAll('.lang-switcher').forEach(switcher => {
        switcher.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.id.endsWith(lang)) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    });
    
    // Update static HTML data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update titles (tooltips)
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.dataset.i18nTitle;
        if (translations[lang] && translations[lang][key]) {
            el.title = translations[lang][key];
        }
    });
    
    // Refresh elements with dynamic localizations
    if (appState.currentScreen === 'dashboard') {
        const btnText = document.getElementById('toggle-size-btn').querySelector('span');
        btnText.textContent = appState.gridSize === 'large' 
            ? translations[lang].large_grid_label 
            : translations[lang].small_grid_label;
            
        updateHeaderStats();
        renderSidebar();
        if (appState.activeGroupId) {
            selectGroup(appState.activeGroupId);
        }
    }
}

// 5. API calls: Start Scanning
async function startScan() {
    const sourceDirInput = document.getElementById('source-dir-input').value.trim();
    if (!sourceDirInput) {
        alert(translations[appState.language].alert_path);
        return;
    }
    
    let exportDirInput = document.getElementById('export-dir-setup-input').value.trim();
    if (!exportDirInput) {
        exportDirInput = sourceDirInput + '\\Selected';
        document.getElementById('export-dir-setup-input').value = exportDirInput;
        document.getElementById('export-dir-input').value = exportDirInput;
    }
    
    appState.sourceDir = sourceDirInput;
    appState.exportDir = exportDirInput;

    const timeThreshold = parseInt(document.getElementById('time-threshold-input').value);
    const similarityThreshold = parseFloat(document.getElementById('sim-threshold-input').value) / 100.0;
    const rejectBadPhotos = document.getElementById('reject-bad-photos-checkbox').checked;
    const keepPoseVariations = document.getElementById('keep-pose-variations-checkbox').checked;

    try {
        const response = await fetch('/api/scan', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                source_dir: sourceDirInput,
                time_threshold: timeThreshold,
                similarity_threshold: similarityThreshold,
                reject_bad_photos: rejectBadPhotos,
                keep_pose_variations: keepPoseVariations
            })
        });

        if (!response.ok) {
            const err = await response.json();
            alert(`${translations[appState.language].scan_err}: ${err.detail || 'Unknown error'}`);
            if (response.status === 401) {
                appState.user = null;
                showScreen('auth');
            }
            return;
        }

        // Switch to progress screen and start polling status
        showScreen('scanning');
        pollScanStatus();
    } catch (err) {
        alert(`${translations[appState.language].network_err}: ${err.message}`);
    }
}

// 6. Polling Scan Status
function pollScanStatus() {
    const timer = setInterval(async () => {
        try {
            const response = await fetch('/api/status');
            const data = await response.json();
            
            // Update UI
            document.getElementById('scan-progress-bar').style.width = `${data.progress}%`;
            document.getElementById('scan-progress-pct').textContent = `${data.progress}%`;
            document.getElementById('scan-progress-count').textContent = `${data.stats.raw_count + data.stats.jpg_count} / ${data.total_files} files`;
            
            const fileText = translations[appState.language].analyzing;
            document.getElementById('scanning-current-file').textContent = data.current_file ? `${fileText}: ${data.current_file}` : translations[appState.language].preparing_pipeline;
            
            document.getElementById('live-stat-raw').textContent = data.stats.raw_count;
            document.getElementById('live-stat-jpg').textContent = data.stats.jpg_count;
            document.getElementById('live-stat-groups').textContent = data.stats.group_count;

            if (!data.is_running && data.progress >= 100) {
                clearInterval(timer);
                await fetchAndRenderResults();
            }
        } catch (err) {
            console.error('Error polling status:', err);
            clearInterval(timer);
            alert(translations[appState.language].connecting_err);
            showScreen('setup');
        }
    }, 500);
}

// 7. Get Results & Render
async function fetchAndRenderResults() {
    try {
        const response = await fetch('/api/results');
        const results = await response.json();
        
        appState.results = results;
        
        // Group by Group ID
        appState.scenes = {};
        results.forEach(item => {
            const gid = item.group_id;
            if (!appState.scenes[gid]) {
                appState.scenes[gid] = [];
            }
            appState.scenes[gid].push(item);
        });

        // Update Stats Pills
        updateHeaderStats();

        // Render Sidebar Groups
        renderSidebar();

        // Auto-select first group
        const groupIds = Object.keys(appState.scenes);
        if (groupIds.length > 0) {
            selectGroup(groupIds[0]);
        }

        showScreen('dashboard');
    } catch (err) {
        alert(`${translations[appState.language].network_err}: ${err.message}`);
        showScreen('setup');
    }
}

// Update Header Statistics
function updateHeaderStats() {
    const results = appState.results;
    const rawCount = results.filter(i => i.metadata.file_type === 'RAW').length;
    const jpgCount = results.filter(i => i.metadata.file_type === 'JPEG').length;
    const keepCount = results.filter(i => i.decision === 'Keep').length;
    const rejectCount = results.filter(i => i.decision === 'Reject').length;
    
    document.getElementById('stat-total').textContent = results.length;
    document.getElementById('stat-ratio').textContent = `${rawCount} RAW / ${jpgCount} JPG`;
    document.getElementById('stat-groups').textContent = Object.keys(appState.scenes).length;
    document.getElementById('stat-keep').textContent = keepCount;
    document.getElementById('stat-reject').textContent = rejectCount;
}

// Render Sidebar Scene Cards
function renderSidebar() {
    const list = document.getElementById('scenes-list');
    list.innerHTML = '';
    
    const lang = appState.language;
    const groupIds = Object.keys(appState.scenes).sort((a, b) => parseInt(a) - parseInt(b));
    document.getElementById('scenes-count-badge').textContent = groupIds.length;
    
    groupIds.forEach(gid => {
        const items = appState.scenes[gid];
        const rep = items.find(i => i.decision === 'Keep') || items[0];
        
        const card = document.createElement('div');
        card.className = 'scene-item ' + (appState.activeGroupId == gid ? 'active' : '');
        card.dataset.groupId = gid;
        
        const previewUrl = '/api/preview?path=' + encodeURIComponent(rep.file_path);
        
        card.innerHTML = 
            '<div class="scene-item-thumb">' +
            '<img src="' + previewUrl + '" alt="Scene preview" loading="lazy">' +
            '</div>' +
            '<div class="scene-item-info">' +
            '<h4>' + translations[lang].scene + ' #' + gid + '</h4>' +
            '<p>' + items.length + ' ' + translations[lang].photos + '</p>' +
            '<div class="scene-item-badges">' +
            '<span class="badge-small keep">' + items.filter(i => i.decision === 'Keep').length + ' ' + translations[lang].keep + '</span>' +
            '</div>' +
            '</div>';
        
        card.addEventListener('click', () => selectGroup(gid));
        list.appendChild(card);
    });
}

// Select a Scene Group
function selectGroup(groupId) {
    appState.activeGroupId = groupId;
    
    document.querySelectorAll('.scene-item').forEach(item => {
        if (item.dataset.groupId == groupId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    const items = appState.scenes[groupId];
    const lang = appState.language;
    
    // Update Scene Header
    document.getElementById('current-scene-title').textContent = `${translations[lang].scene_title}${groupId}`;
    document.getElementById('current-scene-desc').textContent = items.length === 1 
        ? translations[lang].photo_count_single 
        : `${items.length} ${translations[lang].photos_count}`;
    
    // Render Grid
    renderPhotoGrid(items);
}

// Render Photo Cards
function renderPhotoGrid(items) {
    const grid = document.getElementById('images-grid');
    grid.innerHTML = '';
    const lang = appState.language;
    
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.tabIndex = 0;
        card.dataset.filePath = item.file_path;
        
        const colorLabel = item.color_label || '';
        if (colorLabel) {
            card.classList.add(`label-${colorLabel.toLowerCase()}`);
        }
        
        const previewUrl = `/api/preview?path=${encodeURIComponent(item.file_path)}`;
        const analysis = item.analysis;
        
        let scoreClass = 'low';
        if (analysis.final_score >= 80) scoreClass = 'high';
        else if (analysis.final_score >= 60) scoreClass = 'medium';

        // Badges HTML
        const aiPick = item.is_best_in_group ? ('<span class="ai-pick-badge">' + translations[lang].ai_pick + '</span>') : '';
        const rawBadge = item.metadata.file_type === 'RAW' ? ('<span>RAW (' + item.metadata.manufacturer + ')</span>') : '<span>JPG</span>';
        
        // Detailed metrics text formatting
        const blurText = analysis.is_blurry 
            ? ('<span class="metric-bad">' + translations[lang].blurry + ' (' + analysis.sharpness + '%)</span>')
            : ('<span class="metric-good">' + translations[lang].sharp + ' (' + analysis.sharpness + '%)</span>');
            
        const eyesText = analysis.faces_detected > 0 
            ? (analysis.is_eyes_closed 
                ? ('<span class="metric-bad">' + translations[lang].closed + ' (' + Math.round(analysis.eyes_open_ratio*100) + '%)</span>')
                : ('<span class="metric-good">' + translations[lang].open + '</span>'))
            : ('<span>' + translations[lang].n_a + '</span>');
            
        let expText = '<span class="metric-good">' + translations[lang].normal + '</span>';
        if (analysis.exposure_status === 'Overexposed') {
            expText = analysis.raw_recoverable 
                ? ('<span class="metric-warn">' + translations[lang].over_recoverable + '</span>')
                : ('<span class="metric-bad">' + translations[lang].overexposed + '</span>');
        } else if (analysis.exposure_status === 'Underexposed') {
            expText = analysis.raw_recoverable 
                ? ('<span class="metric-warn">' + translations[lang].under_recoverable + '</span>')
                : ('<span class="metric-bad">' + translations[lang].underexposed + '</span>');
        }

        const noiseText = analysis.is_noisy 
            ? ('<span class="metric-bad">' + translations[lang].high + ' (' + analysis.noise + '%)</span>')
            : ('<span>' + translations[lang].low + ' (' + analysis.noise + '%)</span>');

        const rating = item.rating || 0;
        const activeColor = (item.color_label || '').toLowerCase();

        card.innerHTML = 
            aiPick +
            '<div class="score-badge ' + scoreClass + '">' + Math.round(analysis.final_score) + '</div>' +
            '<div class="photo-card-preview" onclick="openFullPreview(\'' + encodeURIComponent(item.file_path) + '\')">' +
            '<img src="' + previewUrl + '" alt="' + item.filename + '" loading="lazy">' +
            '</div>' +
            '<div class="photo-card-details">' +
            '<div class="photo-card-title">' +
            '<h4 title="' + item.filename + '">' + item.filename + '</h4>' +
            rawBadge +
            '</div>' +
            '<div class="quality-metrics-grid">' +
            '<div class="metric-item"><span>' + translations[lang].sharpness + ':</span> ' + blurText + '</div>' +
            '<div class="metric-item"><span>' + translations[lang].eyes + ':</span> ' + eyesText + '</div>' +
            '<div class="metric-item"><span>' + translations[lang].exposure + ':</span> ' + expText + '</div>' +
            '<div class="metric-item"><span>' + translations[lang].noise + ':</span> ' + noiseText + '</div>' +
            '</div>' +
            '<div class="card-meta-controls">' +
            '<div class="card-stars-row">' +
            '<span class="star-btn ' + (rating >= 1 ? 'filled' : '') + '" onclick="event.stopPropagation(); setPhotoRating(\'' + encodeURIComponent(item.file_path) + '\', 1)">\u2605</span>' +
            '<span class="star-btn ' + (rating >= 2 ? 'filled' : '') + '" onclick="event.stopPropagation(); setPhotoRating(\'' + encodeURIComponent(item.file_path) + '\', 2)">\u2605</span>' +
            '<span class="star-btn ' + (rating >= 3 ? 'filled' : '') + '" onclick="event.stopPropagation(); setPhotoRating(\'' + encodeURIComponent(item.file_path) + '\', 3)">\u2605</span>' +
            '<span class="star-btn ' + (rating >= 4 ? 'filled' : '') + '" onclick="event.stopPropagation(); setPhotoRating(\'' + encodeURIComponent(item.file_path) + '\', 4)">\u2605</span>' +
            '<span class="star-btn ' + (rating >= 5 ? 'filled' : '') + '" onclick="event.stopPropagation(); setPhotoRating(\'' + encodeURIComponent(item.file_path) + '\', 5)">\u2605</span>' +
            '</div>' +
            '<div class="card-colors-row">' +
            '<span class="color-dot red ' + (activeColor === 'red' ? 'active' : '') + '" style="color:#ef4444;" title="Red" onclick="event.stopPropagation(); setPhotoColor(\'' + encodeURIComponent(item.file_path) + '\', \'red\')"></span>' +
            '<span class="color-dot yellow ' + (activeColor === 'yellow' ? 'active' : '') + '" style="color:#f59e0b;" title="Yellow" onclick="event.stopPropagation(); setPhotoColor(\'' + encodeURIComponent(item.file_path) + '\', \'yellow\')"></span>' +
            '<span class="color-dot green ' + (activeColor === 'green' ? 'active' : '') + '" style="color:#10b981;" title="Green" onclick="event.stopPropagation(); setPhotoColor(\'' + encodeURIComponent(item.file_path) + '\', \'green\')"></span>' +
            '<span class="color-dot blue ' + (activeColor === 'blue' ? 'active' : '') + '" style="color:#3b82f6;" title="Blue" onclick="event.stopPropagation(); setPhotoColor(\'' + encodeURIComponent(item.file_path) + '\', \'blue\')"></span>' +
            '<span class="color-dot purple ' + (activeColor === 'purple' ? 'active' : '') + '" style="color:#8b5cf6;" title="Purple" onclick="event.stopPropagation(); setPhotoColor(\'' + encodeURIComponent(item.file_path) + '\', \'purple\')"></span>' +
            '<span class="color-dot none" title="Clear Color" onclick="event.stopPropagation(); setPhotoColor(\'' + encodeURIComponent(item.file_path) + '\', \'none\')">\u00d7</span>' +
            '</div>' +
            '</div>' +
            '<div class="card-decision-footer">' +
            '<button class="decision-btn keep-btn ' + (item.decision === 'Keep' ? 'active-keep' : '') + '">' + translations[lang].keep + '</button>' +
            '<button class="decision-btn reject-btn ' + (item.decision === 'Reject' ? 'active-reject' : '') + '">' + translations[lang].reject + '</button>' +
            '</div>' +
            '</div>';
        
        card.querySelector('.keep-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            updatePhotoDecision(item.file_path, 'Keep');
        });
        card.querySelector('.reject-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            updatePhotoDecision(item.file_path, 'Reject');
        });
        
        card.addEventListener('focus', () => {
            document.querySelectorAll('.photo-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
        });
        
        card.addEventListener('click', () => {
            card.focus();
        });
        
        grid.appendChild(card);
    });
}

// Open Full Preview image in new tab (simple popup fallback)
window.openFullPreview = function(path) {
    const url = `/api/preview?path=${path}`;
    const win = window.open();
    win.document.write(`<iframe src="${url}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`);
};

// 8. Update Photo Decision (API call & UI sync)
async function updatePhotoDecision(filePath, decision) {
    try {
        const response = await fetch('/api/toggle', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ file_path: filePath, decision: decision })
        });
        
        if (!response.ok) {
            console.error('Failed to update decision in backend');
            return;
        }

        // Sync local memory state
        const item = appState.results.find(i => i.file_path === filePath);
        if (item) {
            const oldDecision = item.decision;
            item.decision = decision;
            
            // Map decision to rating (Keep = 5, Reject = 1)
            item.rating = decision === 'Keep' ? 5 : 1;
            
            const gid = item.group_id;
            const groupItem = appState.scenes[gid].find(i => i.file_path === filePath);
            if (groupItem) {
                groupItem.decision = decision;
                groupItem.rating = item.rating;
            }
            
            const card = document.querySelector(`.photo-card[data-file-path="${CSS.escape(filePath)}"]`);
            if (card) {
                const keepBtn = card.querySelector('.keep-btn');
                const rejectBtn = card.querySelector('.reject-btn');
                
                if (decision === 'Keep') {
                    keepBtn.classList.add('active-keep');
                    rejectBtn.classList.remove('active-reject');
                } else {
                    keepBtn.classList.remove('active-keep');
                    rejectBtn.classList.add('active-reject');
                }
                
                // Update star rating view
                const stars = card.querySelectorAll('.star-btn');
                stars.forEach((star, idx) => {
                    if (idx < item.rating) star.classList.add('filled');
                    else star.classList.remove('filled');
                });
            }
            
            // Notify backend about metadata mapping
            fetch('/api/metadata/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ file_path: filePath, rating: item.rating })
            }).catch(err => console.error('Error syncing rating on decision change:', err));
            
            updateHeaderStats();
            renderSidebar();
        }
    } catch (err) {
        console.error('Error toggling decision:', err);
    }
}

window.setPhotoRating = async function(filePath, rating) {
    filePath = decodeURIComponent(filePath);
    await updatePhotoMetadata(filePath, rating, null);
};

window.setPhotoColor = async function(filePath, colorLabel) {
    filePath = decodeURIComponent(filePath);
    await updatePhotoMetadata(filePath, null, colorLabel);
};

async function updatePhotoMetadata(filePath, rating, colorLabel) {
    const payload = { file_path: filePath };
    if (rating !== null) payload.rating = rating;
    if (colorLabel !== null) payload.color_label = colorLabel;
    
    try {
        const response = await fetch('/api/metadata/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
            console.error('Failed to update metadata in backend');
            return;
        }
        
        const data = await response.json();
        
        // Sync local memory state
        const item = appState.results.find(i => i.file_path === filePath);
        if (item) {
            const oldDecision = item.decision;
            item.rating = data.rating;
            item.color_label = data.color_label;
            item.decision = data.decision;
            
            const gid = item.group_id;
            const groupItem = appState.scenes[gid].find(i => i.file_path === filePath);
            if (groupItem) {
                groupItem.rating = data.rating;
                groupItem.color_label = data.color_label;
                groupItem.decision = data.decision;
            }
            
            const card = document.querySelector(`.photo-card[data-file-path="${CSS.escape(filePath)}"]`);
            if (card) {
                // Update decision classes
                const keepBtn = card.querySelector('.keep-btn');
                const rejectBtn = card.querySelector('.reject-btn');
                
                if (data.decision === 'Keep') {
                    keepBtn.classList.add('active-keep');
                    rejectBtn.classList.remove('active-reject');
                } else {
                    keepBtn.classList.remove('active-keep');
                    rejectBtn.classList.add('active-reject');
                }
                
                // Update star active styles
                const stars = card.querySelectorAll('.star-btn');
                stars.forEach((star, index) => {
                    if (index < data.rating) {
                        star.classList.add('filled');
                    } else {
                        star.classList.remove('filled');
                    }
                });
                
                // Update active color dot
                const dots = card.querySelectorAll('.color-dot');
                dots.forEach(dot => {
                    const titleColor = dot.title.toLowerCase();
                    if (titleColor === data.color_label.toLowerCase()) {
                        dot.classList.add('active');
                    } else if (data.color_label === '' && titleColor === 'clear color') {
                        // skip
                    } else {
                        dot.classList.remove('active');
                    }
                });
                
                // Update card color border class
                card.className = 'photo-card';
                if (card.classList.contains('selected') || document.activeElement === card) {
                    card.classList.add('selected');
                }
                if (data.color_label) {
                    card.classList.add(`label-${data.color_label.toLowerCase()}`);
                }
            }
            
            updateHeaderStats();
            renderSidebar();
        }
    } catch (err) {
        console.error('Error updating metadata:', err);
    }
}

// 9. Keep All in Current Scene
async function keepAllInCurrentScene() {
    if (!appState.activeGroupId) return;
    const items = appState.scenes[appState.activeGroupId];
    
    for (const item of items) {
        if (item.decision !== 'Keep') {
            await updatePhotoDecision(item.file_path, 'Keep');
        }
    }
    selectGroup(appState.activeGroupId);
}

// 10. Copy / Export Action
async function exportKeptPhotos() {
    const targetDirInput = document.getElementById('export-dir-input').value.trim();
    if (!targetDirInput) {
        alert(translations[appState.language].alert_export_path);
        return;
    }
    
    const copyOverlay = document.getElementById('copy-progress-overlay');
    copyOverlay.classList.add('active'); // Show copying progress overlay

    try {
        const response = await fetch('/api/copy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ target_dir: targetDirInput })
        });
        
        if (!response.ok) {
            copyOverlay.classList.remove('active');
            const err = await response.json();
            alert(`${translations[appState.language].export_fail}: ${err.detail || 'Unknown error'}`);
            return;
        }

        // Start polling copy status
        pollCopyStatus();
        
    } catch (err) {
        copyOverlay.classList.remove('active');
        alert(`${translations[appState.language].network_err}: ${err.message}`);
    }
}

// Polling Copy Status
function pollCopyStatus() {
    const timer = setInterval(async () => {
        try {
            const response = await fetch('/api/copy/status');
            const data = await response.json();
            
            // Update UI elements
            document.getElementById('copy-progress-bar').style.width = `${data.progress}%`;
            document.getElementById('copy-progress-pct').textContent = `${data.progress}%`;
            document.getElementById('copy-progress-count').textContent = `${data.copied_files} / ${data.total_files} file`;
            document.getElementById('copy-current-file').textContent = data.current_file 
                ? `${translations[appState.language].copying_files_status}: ${data.current_file}` 
                : translations[appState.language].copy_preparing;

            if (!data.is_running) {
                clearInterval(timer);
                
                // Hide overlay
                document.getElementById('copy-progress-overlay').classList.remove('active');
                
                if (data.status === 'Success') {
                    const msg = appState.language === 'vi'
                        ? `Đã sao chép ảnh thành công!\nTổng cộng: ${data.copied_files} file (${data.copied_raw} RAW, ${data.copied_jpg} JPG).`
                        : `Successfully copied photos!\nTotal: ${data.copied_files} files (${data.copied_raw} RAW, ${data.copied_jpg} JPG).`;
                    alert(msg);
                } else if (data.status === 'Error') {
                    alert(`${translations[appState.language].export_fail}: ${data.message}`);
                }
            }
        } catch (err) {
            console.error('Error polling copy status:', err);
            clearInterval(timer);
            document.getElementById('copy-progress-overlay').classList.remove('active');
            alert(translations[appState.language].connecting_err);
        }
    }, 300);
}

// Reset App to Initial Setup State
async function resetAppToInitialState() {
    try {
        // Call backend reset API
        const response = await fetch('/api/reset', { method: 'POST' });
        if (!response.ok) {
            console.warn('Backend reset call failed, resetting client anyway.');
        }
    } catch (err) {
        console.error('Error sending reset call to backend:', err);
    }
    
    // 1. Reset frontend memory state
    appState.results = [];
    appState.scenes = {};
    appState.activeGroupId = null;
    appState.sourceDir = '';
    appState.exportDir = '';
    
    // 2. Clear all input text fields
    document.getElementById('source-dir-input').value = '';
    document.getElementById('export-dir-setup-input').value = '';
    document.getElementById('export-dir-input').value = '';
    document.getElementById('keep-rate-input').value = 50;
    document.getElementById('val-keep-rate').textContent = '50%';
    
    // 3. Clear workspace containers
    document.getElementById('scenes-list').innerHTML = '';
    document.getElementById('images-grid').innerHTML = '';
    
    // 4. Reset progress display indicators
    document.getElementById('scan-progress-bar').style.width = '0%';
    document.getElementById('scan-progress-pct').textContent = '0%';
    document.getElementById('scan-progress-count').textContent = '0 / 0 file';
    document.getElementById('scanning-current-file').textContent = translations[appState.language].preparing_pipeline;
    
    // 5. Reset header statistics
    updateHeaderStats();
    
    // 6. Return to setup screen
    showScreen('setup');
}

// 11. Generate Modal Pipeline Report
function generateReport() {
    const results = appState.results;
    if (results.length === 0) return;
    
    const total = results.length;
    const keep = results.filter(i => i.decision === 'Keep').length;
    const reject = total - keep;
    const keepPct = Math.round((keep / total) * 100);
    
    document.getElementById('rep-total').textContent = total;
    document.getElementById('rep-keep').textContent = keep;
    document.getElementById('rep-reject').textContent = reject;
    document.getElementById('rep-pct').textContent = `${keepPct}%`;
    
    // Count reasons for rejections
    let blurCount = 0;
    let eyesClosedCount = 0;
    let exposureCount = 0;
    let duplicateCount = 0;
    
    results.forEach(item => {
        if (item.decision === 'Reject') {
            const analysis = item.analysis;
            
            if (!item.is_best_in_group) {
                duplicateCount++;
            } else {
                if (analysis.is_blurry) {
                    blurCount++;
                } else if (analysis.is_eyes_closed) {
                    eyesClosedCount++;
                } else if (analysis.exposure_status !== 'Normal' && !analysis.raw_recoverable) {
                    exposureCount++;
                } else {
                    duplicateCount;
                }
            }
        }
    });
    
    const countText = appState.language === 'vi' ? 'file' : 'files';
    document.getElementById('rep-reason-blur').textContent = `${blurCount} ${countText}`;
    document.getElementById('rep-reason-eyes').textContent = `${eyesClosedCount} ${countText}`;
    document.getElementById('rep-reason-exposure').textContent = `${exposureCount} ${countText}`;
    document.getElementById('rep-reason-duplicate').textContent = `${duplicateCount} ${countText}`;
}

async function adjustKeepRate(keepRate) {
    if (appState.results.length === 0) return;
    try {
        const response = await fetch('/api/adjust_keep_rate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ keep_rate: keepRate })
        });
        if (!response.ok) {
            console.error('Failed to adjust keep rate in backend');
            return;
        }
        const results = await response.json();
        appState.results = results;
        
        appState.scenes = {};
        results.forEach(item => {
            const gid = item.group_id;
            if (!appState.scenes[gid]) {
                appState.scenes[gid] = [];
            }
            appState.scenes[gid].push(item);
        });

        updateHeaderStats();
        renderSidebar();
        if (appState.activeGroupId) {
            selectGroup(appState.activeGroupId);
        }
    } catch (err) {
        console.error('Error adjusting keep rate:', err);
    }
}

// --- CUSTOM USER AUTHENTICATION & ADMIN FUNCTIONS ---

function clearAuthMessages() {
    document.getElementById('auth-error-msg').textContent = '';
    document.getElementById('auth-success-msg').textContent = '';
}

async function checkAuthStatus() {
    try {
        const response = await fetch('/api/client/status');
        const data = await response.json();
        
        if (data.logged_in) {
            appState.user = data.user;
            
            // Show logout and admin elements if applicable
            document.getElementById('logout-btn').style.display = 'block';
            if (data.user.is_admin) {
                document.getElementById('admin-panel-btn').style.display = 'block';
                document.getElementById('dash-admin-btn').style.display = 'block';
            } else {
                document.getElementById('admin-panel-btn').style.display = 'none';
                document.getElementById('dash-admin-btn').style.display = 'none';
            }
            
            showScreen('setup');
            checkAppUpdate();
        } else {
            appState.user = null;
            document.getElementById('logout-btn').style.display = 'none';
            document.getElementById('admin-panel-btn').style.display = 'none';
            document.getElementById('dash-admin-btn').style.display = 'none';
            showScreen('auth');
            
            if (data.error) {
                document.getElementById('auth-error-msg').textContent = data.error;
            }
        }
    } catch (err) {
        console.error('Error checking authentication status:', err);
        showScreen('auth');
        document.getElementById('auth-error-msg').textContent = appState.language === 'vi' 
            ? 'Không thể kết nối đến máy chủ xác thực cục bộ.' 
            : 'Cannot connect to the local authentication server.';
    }
}

async function handleLogin(e) {
    e.preventDefault();
    clearAuthMessages();
    
    const usernameInput = document.getElementById('login-username').value.trim();
    const passwordInput = document.getElementById('login-password').value;
    
    const submitBtn = document.getElementById('btn-login-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = appState.language === 'vi' ? 'ĐANG ĐĂNG NHẬP...' : 'LOGGING IN...';
    
    try {
        const response = await fetch('/api/client/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: usernameInput, password: passwordInput })
        });
        
        const data = await response.json();
        
        if (response.ok && data.status === 'ok') {
            document.getElementById('login-username').value = '';
            document.getElementById('login-password').value = '';
            
            appState.user = data.user;
            document.getElementById('logout-btn').style.display = 'block';
            if (data.user.is_admin) {
                document.getElementById('admin-panel-btn').style.display = 'block';
                document.getElementById('dash-admin-btn').style.display = 'block';
            }
            
            showScreen('setup');
            checkAppUpdate();
        } else {
            document.getElementById('auth-error-msg').textContent = data.detail || (appState.language === 'vi' ? 'Đăng nhập thất bại.' : 'Login failed.');
        }
    } catch (err) {
        console.error('Login error:', err);
        document.getElementById('auth-error-msg').textContent = appState.language === 'vi' 
            ? 'Lỗi kết nối máy chủ xác thực.' 
            : 'Error connecting to the authentication server.';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = appState.language === 'vi' ? 'ĐĂNG NHẬP' : 'LOG IN';
    }
}

async function handleRegister(e) {
    e.preventDefault();
    clearAuthMessages();
    
    const fullname = document.getElementById('reg-fullname').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const username = document.getElementById('reg-username').value.trim();
    const password = document.getElementById('reg-password').value;
    const referral = document.getElementById('reg-referral').value.trim();
    
    if (password.length < 6) {
        document.getElementById('auth-error-msg').textContent = appState.language === 'vi'
            ? 'Mật khẩu phải chứa ít nhất 6 ký tự.'
            : 'Password must be at least 6 characters.';
        return;
    }
    
    // Referral code uppercase check
    if (referral !== referral.toUpperCase()) {
        document.getElementById('auth-error-msg').textContent = appState.language === 'vi'
            ? 'Mã giới thiệu phải viết hoa tên của người làm sale. Ví dụ: NGOCTHANG'
            : 'Referral code must be in uppercase. Example: NGOCTHANG';
        return;
    }
    
    const submitBtn = document.getElementById('btn-register-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = appState.language === 'vi' ? 'ĐANG ĐĂNG KÝ...' : 'REGISTERING...';
    
    try {
        const response = await fetch('/api/client/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: fullname,
                email: email,
                username: username,
                password: password,
                referral_code: referral
            })
        });
        
        const data = await response.json();
        
        if (response.ok && data.status === 'ok') {
            document.getElementById('reg-fullname').value = '';
            document.getElementById('reg-email').value = '';
            document.getElementById('reg-username').value = '';
            document.getElementById('reg-password').value = '';
            document.getElementById('reg-referral').value = '';
            
            document.getElementById('tab-login').click();
            document.getElementById('auth-success-msg').textContent = data.message || (appState.language === 'vi' ? 'Đăng ký thành công! Hãy đăng nhập.' : 'Registration successful! Please log in.');
        } else {
            document.getElementById('auth-error-msg').textContent = data.detail || (appState.language === 'vi' ? 'Đăng ký thất bại.' : 'Registration failed.');
        }
    } catch (err) {
        console.error('Registration error:', err);
        document.getElementById('auth-error-msg').textContent = appState.language === 'vi'
            ? 'Lỗi kết nối máy chủ.'
            : 'Error connecting to the server.';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = appState.language === 'vi' ? 'ĐĂNG KÝ' : 'REGISTER';
    }
}

async function handleForgotPassword(e) {
    e.preventDefault();
    clearAuthMessages();
    
    const identity = document.getElementById('forgot-identity').value.trim();
    
    const submitBtn = document.getElementById('btn-forgot-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = appState.language === 'vi' ? 'ĐANG XỬ LÝ...' : 'PROCESSING...';
    
    try {
        const response = await fetch('/api/client/forgot_password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ identity: identity })
        });
        
        const data = await response.json();
        
        if (response.ok && data.status === 'ok') {
            document.getElementById('forgot-identity').value = '';
            document.getElementById('auth-success-msg').textContent = data.message || (appState.language === 'vi' ? 'Mật khẩu mới đã được gửi về Gmail của bạn.' : 'New password sent to your Gmail.');
        } else {
            document.getElementById('auth-error-msg').textContent = data.detail || (appState.language === 'vi' ? 'Yêu cầu thất bại.' : 'Reset request failed.');
        }
    } catch (err) {
        console.error('Forgot password error:', err);
        document.getElementById('auth-error-msg').textContent = appState.language === 'vi'
            ? 'Lỗi kết nối máy chủ.'
            : 'Error connecting to the server.';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = appState.language === 'vi' ? 'CẤP LẠI MẬT KHẨU' : 'RESET PASSWORD';
    }
}

async function handleLogout() {
    try {
        await fetch('/api/client/logout', { method: 'POST' });
    } catch (err) {
        console.error('Error logging out:', err);
    }
    appState.user = null;
    document.getElementById('logout-btn').style.display = 'none';
    document.getElementById('admin-panel-btn').style.display = 'none';
    document.getElementById('dash-admin-btn').style.display = 'none';
    showScreen('auth');
    clearAuthMessages();
}

function openAdminPanel() {
    document.getElementById('admin-panel-modal').classList.add('active');
    loadAdminUsers();
}

async function loadAdminUsers() {
    const tbody = document.getElementById('admin-users-tbody');
    tbody.innerHTML = '<tr><td colspan="8" style="text-align:center; padding:30px;">Loading users data...</td></tr>';
    
    try {
        const response = await fetch('/api/client/admin/users');
        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.detail || 'Access denied');
        }
        
        const users = await response.json();
        document.getElementById('admin-total-users').textContent = users.length;
        tbody.innerHTML = '';
        
        users.forEach(u => {
            const tr = document.createElement('tr');
            
            // Format devices
            let devicesHtml = '<div class="device-list-container">';
            if (u.devices && u.devices.length > 0) {
                u.devices.forEach((d, idx) => {
                    const dateStr = d.last_login ? new Date(d.last_login * 1000).toLocaleString('vi-VN') : 'Unknown';
                    devicesHtml += 
                        '<div class="device-item-info">' +
                            '<strong>#' + (idx + 1) + ' (' + dateStr + '):</strong><br>' +
                            'CPU: ' + d.cpu + '<br>' +
                            'RAM: ' + d.ram + '<br>' +
                            'IP: ' + d.ip + '<br>' +
                            'UUID: <code style="font-size:0.7rem; color:var(--accent-purple);">' + d.uuid + '</code>' +
                        '</div>';
                });
            } else {
                devicesHtml += '<span style="font-size:0.8rem; color:var(--text-dimmed);">' + (appState.language === 'vi' ? 'Ch\u01b0a li\xean k\u1ebebt thi\u1ebft b\u1ecb' : 'No devices linked') + '</span>';
            }
            devicesHtml += '</div>';
            
            // Format Status
            const statusText = u.status === 'active' 
                ? (appState.language === 'vi' ? 'Đang hoạt động' : 'Active')
                : (appState.language === 'vi' ? 'Chờ kích hoạt' : 'Pending');
            const statusColor = u.status === 'active' ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)';
            const textColor = u.status === 'active' ? 'var(--color-success)' : 'var(--color-danger)';
            const statusHtml = '<span class="badge-small" style="background:' + statusColor + '; color:' + textColor + '; font-weight:600; display:inline-block; padding:3px 8px; border-radius:4px;">' + statusText + '</span>';
            
            // Admin user actions disabled
            const isTargetAdmin = u.is_admin || u.username === 'admin';
            
            // Format Expiry
            let expiryHtml = '';
            if (isTargetAdmin) {
                expiryHtml = '<td style="text-align:center;"><span style="font-size:0.8rem; color:var(--text-dimmed);">' + (appState.language === 'vi' ? 'V\xf4 h\u1ea1n' : 'Unlimited') + '</span></td>';
            } else {
                const nowSec = Date.now() / 1000;
                let dateText = appState.language === 'vi' ? 'Vô thời hạn' : 'Lifetime';
                let dateColor = 'var(--text-main)';
                let isExpired = false;
                
                let is1MonthSelected = false;
                let is6MonthsSelected = false;
                let is1YearSelected = false;
                let isUnlimitedSelected = !u.expiry_date;
                
                if (u.expiry_date) {
                    isExpired = nowSec > u.expiry_date;
                    const dateObj = new Date(u.expiry_date * 1000);
                    const formattedDate = dateObj.toLocaleDateString(appState.language === 'vi' ? 'vi-VN' : 'en-US');
                    dateText = isExpired 
                        ? (appState.language === 'vi' ? ('H\u1ebft h\u1ea1n (' + formattedDate + ')') : ('Expired (' + formattedDate + ')'))
                        : (appState.language === 'vi' ? ('H\u1ea1n: ' + formattedDate) : ('Exp: ' + formattedDate));
                    dateColor = isExpired ? 'var(--color-danger)' : 'var(--color-success)';
                    
                    const diffDays = Math.round((u.expiry_date - nowSec) / 86400);
                    if (!isExpired) {
                        if (diffDays > 0 && diffDays <= 32) {
                            is1MonthSelected = true;
                        } else if (diffDays > 150 && diffDays <= 190) {
                            is6MonthsSelected = true;
                        } else if (diffDays > 340 && diffDays <= 380) {
                            is1YearSelected = true;
                        }
                    }
                }
                
                expiryHtml = 
                    '<td>' +
                        '<div class="admin-expiry-cell" style="display: flex; flex-direction: column; gap: 6px; align-items: center; justify-content: center;">' +
                            '<span class="admin-expiry-date" style="color: ' + dateColor + '; font-weight: 600; font-size: 0.85rem;">' + dateText + '</span>' +
                            '<select class="admin-expiry-select" style="background: rgba(255,255,255,0.05); color: var(--text-main); border: 1px solid rgba(255,255,255,0.15); border-radius: 4px; padding: 4px 8px; font-family: var(--font-outfit); font-size: 0.8rem; outline: none; width: 130px; cursor: pointer;" onchange="changeUserExpiry(\'' + u.username + '\', this)">' +
                                '<option value="" disabled ' + (!u.expiry_date && !isExpired ? 'selected' : '') + ' hidden>' + (appState.language === 'vi' ? 'Ch\u1ecdn th\u1eddi h\u1ea1n...' : 'Choose duration...') + '</option>' +
                                '<option value="30" ' + (is1MonthSelected ? 'selected' : '') + '>' + (appState.language === 'vi' ? 'd\xf9ng th\u1eed 1 th\xe1ng' : '1 Month Trial') + '</option>' +
                                '<option value="180" ' + (is6MonthsSelected ? 'selected' : '') + '>' + (appState.language === 'vi' ? '6 th\xe1ng' : '6 Months') + '</option>' +
                                '<option value="365" ' + (is1YearSelected ? 'selected' : '') + '>' + (appState.language === 'vi' ? '1 n\u0103m' : '1 Year') + '</option>' +
                                '<option value="0" ' + (isUnlimitedSelected ? 'selected' : '') + '>' + (appState.language === 'vi' ? 'V\xf4 h\u1ea1n' : 'Unlimited') + '</option>' +
                            '</select>' +
                        '</div>' +
                    '</td>';
            }
            
            // Toggle Status Button
            const toggleStatusBtn = u.status === 'active'
                ? ('<button class="secondary-btn btn-sm" onclick="activateUserAccount(\'' + u.username + '\', \'pending\')">' + (appState.language === 'vi' ? 'Kh\xf3a' : 'Lock') + '</button>')
                : ('<button class="primary-btn btn-sm" style="color:#000; box-shadow:none; padding:4px 8px;" onclick="activateUserAccount(\'' + u.username + '\', \'active\')">' + (appState.language === 'vi' ? 'K\xedch ho\u1ea1t' : 'Activate') + '</button>');

            const actionButtons = isTargetAdmin 
                ? ('<span style="color:var(--text-dimmed); font-size:0.8rem;">SYSTEM ADMIN</span>')
                : ('<div class="admin-actions-cell">' +
                        toggleStatusBtn +
                        '<button class="secondary-btn btn-sm" onclick="resetUserDevices(\'' + u.username + '\')">' + (appState.language === 'vi' ? 'Reset thi\u1ebft b\u1ecb' : 'Reset Devices') + '</button>' +
                        '<button class="btn-danger-sm btn-sm" onclick="deleteUserAccount(\'' + u.username + '\')">' + (appState.language === 'vi' ? 'X\xf3a t\xe0i kho\u1ea3n' : 'Delete Account') + '</button>' +
                    '</div>');
                
            tr.innerHTML = 
                '<td style="font-weight:600; color:var(--text-main);">' + u.name + '</td>' +
                '<td style="font-family:monospace; font-weight:600;">' + u.username + '</td>' +
                '<td><code style="background:rgba(255,255,255,0.06); padding:2px 6px; border-radius:3px;">' + u.password + '</code></td>' +
                '<td>' + u.email + '</td>' +
                '<td style="font-family:monospace; font-weight:700; color:var(--accent-purple);">' + u.referral_code + '</td>' +
                '<td>' + statusHtml + '</td>' +
                expiryHtml +
                '<td>' + devicesHtml + '</td>' +
                '<td>' + actionButtons + '</td>';
            
            tbody.appendChild(tr);
        });
    } catch (err) {
        tbody.innerHTML = '<tr><td colspan="8" style="text-align:center; color:var(--color-danger); padding:30px;">Error: ' + err.message + '</td></tr>';
    }
}

window.resetUserDevices = async function(targetUsername) {
    if (!confirm(appState.language === 'vi' 
        ? `Bạn có chắc chắn muốn reset danh sách thiết bị của tài khoản '${targetUsername}'?` 
        : `Are you sure you want to reset the device list for account '${targetUsername}'?`)) {
        return;
    }
    
    try {
        const response = await fetch('/api/client/admin/reset_device', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ target_username: targetUsername })
        });
        
        const data = await response.json();
        if (!response.ok) {
            alert('Error: ' + (data.detail || 'Request failed'));
        } else {
            alert(data.message || 'Success');
            loadAdminUsers();
        }
    } catch (err) {
        alert('Error: ' + err.message);
    }
};

window.deleteUserAccount = async function(targetUsername) {
    if (!confirm(appState.language === 'vi' 
        ? `CẢNH BÁO: Bạn có chắc chắn muốn XÓA VĨNH VIỄN tài khoản '${targetUsername}'?` 
        : `WARNING: Are you sure you want to PERMANENTLY DELETE account '${targetUsername}'?`)) {
        return;
    }
    
    try {
        const response = await fetch('/api/client/admin/delete_user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ target_username: targetUsername })
        });
        
        const data = await response.json();
        if (!response.ok) {
            alert('Error: ' + (data.detail || 'Request failed'));
        } else {
            alert(data.message || 'Success');
            loadAdminUsers();
        }
    } catch (err) {
        alert('Error: ' + err.message);
    }
};

window.activateUserAccount = async function(targetUsername, newStatus) {
    const confirmMsg = newStatus === 'active'
        ? (appState.language === 'vi' 
            ? `Bạn có chắc chắn muốn KÍCH HOẠT tài khoản '${targetUsername}'?` 
            : `Are you sure you want to ACTIVATE account '${targetUsername}'?`)
        : (appState.language === 'vi' 
            ? `Bạn có chắc chắn muốn KHÓA tài khoản '${targetUsername}'?` 
            : `Are you sure you want to LOCK account '${targetUsername}'?`);
            
    if (!confirm(confirmMsg)) return;
    
    try {
        const response = await fetch('/api/client/admin/activate_user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ target_username: targetUsername, status: newStatus })
        });
        
        const data = await response.json();
        if (!response.ok) {
            alert('Error: ' + (data.detail || 'Request failed'));
        } else {
            alert(data.message || 'Success');
            loadAdminUsers();
        }
    } catch (err) {
        alert('Error: ' + err.message);
    }
};

window.changeUserExpiry = async function(targetUsername, selectElement) {
    const days = parseInt(selectElement.value);
    
    try {
        const response = await fetch('/api/client/admin/set_expiry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ target_username: targetUsername, duration_days: days })
        });
        
        const data = await response.json();
        if (!response.ok) {
            alert('Error: ' + (data.detail || 'Request failed'));
        } else {
            alert(data.message || 'Success');
            loadAdminUsers();
        }
    } catch (err) {
        alert('Error: ' + err.message);
    }
};

window.togglePasswordVisibility = function(inputId, buttonElement) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    if (input.type === 'password') {
        input.type = 'text';
        buttonElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-open-icon"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
    } else {
        input.type = 'password';
        buttonElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-closed-icon"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`;
    }
};


