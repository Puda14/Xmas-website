document.addEventListener('DOMContentLoaded', function () {
    var giftContainer = document.getElementById('giftContainer');
    var showGiftButton = document.getElementById('showGiftButton');

    var gifts = [
        'Bạn sẽ nhận được một cơ hội nghề nghiệp lớn, giúp bạn phát triển sự nghiệp và đạt được những thành công đáng kể.',

        'Trong năm tới, bạn sẽ có thêm năng lượng và sự sáng tạo, giúp bạn tạo ra những ý tưởng mới và đổi mới trong công việc và cuộc sống.',

        'Một mối quan hệ gia đình hoàn hảo và hạnh phúc sẽ là món quà đặc biệt cho bạn trong năm mới.',

        'Bạn sẽ trải qua những phiêu lưu thú vị và khám phá những địa điểm mới, tạo ra những kí ức vô giá.',

        'Món quà cho bạn là sự may mắn và thành công trong mọi lĩnh vực của cuộc sống.',

        'Trong năm tới, bạn sẽ có cơ hội học hỏi và phát triển bản thân, mở rộng kiến thức và kỹ năng của mình.',

        'Bạn sẽ gặp gỡ những người mới, tạo ra mối quan hệ xã hội tích cực và hữu ích.',

        'Sức khỏe và hạnh phúc sẽ là điều bạn nhận được nhiều nhất trong năm mới.',

        'Món quà đặc biệt cho bạn là sự bình an và hòa bình trong tâm hồn.',

        'Bạn sẽ có cơ hội thể hiện bản thân và tỏa sáng, được người khác công nhận và đánh giá cao.',

        //(Trong năm mới, thành công và hạnh phúc đang chờ đợi bạn. Chúc bạn một năm tuyệt vời!)
        '新しい年に、成功と幸福があなたを待っています。素晴らしい一年になりますように！',

        //(Chúc bạn có một năm khỏe mạnh và hạnh phúc.)
        '健康で幸せな一年をお過ごしください。 ',

        //(Chúc bạn có một năm đầy ắp những khoảnh khắc tuyệt vời và những kí ức vui vẻ.)
        '素晴らしい瞬間と楽しい思い出がいっぱいの年になりますように。 ',


        'May the coming year bring you joy, love, and success in all your endeavors.',

        'Wishing you health, happiness, and prosperity in the new year.',

        'May your days be filled with laughter, and your nights be filled with peace.',

        'Here\'s to new beginnings and exciting adventures in the year ahead!',

        'Wishing you and your loved ones a Merry Christmas and a Happy New Year!',
    ];

    if (showGiftButton) {
        showGiftButton.addEventListener('click', function () {
            if (!showGiftButton.classList.contains('clicked')) {
                showGiftButton.classList.add('clicked');

                var customAlert = document.createElement('div');
                customAlert.className = 'custom-alert';

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

                function getRandomGift() {
                    var randomIndex = Math.floor(Math.random() * gifts.length);
                    return gifts[randomIndex];
                }
            }
        });
    }
});
