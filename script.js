document.addEventListener('DOMContentLoaded', function () {
    var giftContainer = document.getElementById('giftContainer');
    var showGiftButton = document.getElementById('showGiftButton');

    // Danh sách các phần quà
    var gifts = [
        'Phần quà 1: Mô tả phần quà số 1',
        'Phần quà 2: Mô tả phần quà số 2',
        'Phần quà 3: Mô tả phần quà số 3',
        // Thêm các phần quà khác nếu cần
    ];

    if (showGiftButton) {
        showGiftButton.addEventListener('click', function () {
            if (!showGiftButton.classList.contains('clicked')) {
                showGiftButton.classList.add('clicked');

                // Tạo phần tử thông báo
                var customAlert = document.createElement('div');
                customAlert.className = 'custom-alert';

                // Chọn ngẫu nhiên một phần quà từ danh sách
                var randomGift = getRandomGift();
                updateAlertContent();

                giftContainer.appendChild(customAlert);

                customAlert.addEventListener('click', function (event) {
                    if (!customAlert.contains(event.target)) {
                        giftContainer.removeChild(customAlert);
                        showGiftButton.classList.remove('clicked');
                    }
                });

                var countdown = 10;
                var countdownInterval = setInterval(function () {
                    countdown--;
                    updateAlertContent();

                    if (countdown <= 0) {
                        giftContainer.removeChild(customAlert);
                        clearInterval(countdownInterval);
                        showGiftButton.classList.remove('clicked');
                    }
                }, 1000);

                function updateAlertContent() {
                    customAlert.innerHTML = '<span class="gift-text">Món quà của ông già Noel dành cho bạn: </span><br>' +
                        '<span class="gift-Content">' + randomGift + '</span><br>' +
                        '<span class="countdown">Closing in ' + countdown + ' seconds</span>';
                }

                // Hàm chọn ngẫu nhiên một phần quà từ danh sách
                function getRandomGift() {
                    var randomIndex = Math.floor(Math.random() * gifts.length);
                    return gifts[randomIndex];
                }
            }
        });
    }
});
