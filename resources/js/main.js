$(document).ready(function () {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let width, height, particles = [];

    function initCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        particles = [];
        const particleCount = Math.min(Math.floor(width * height / 8000), 100);
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                r: Math.random() * 2,
                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.15,
                alpha: Math.random(),
                da: (Math.random() - 0.5) * 0.01
            });
        }
    }

    function drawCanvas() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.alpha += p.da;
            if (p.alpha <= 0 || p.alpha >= 0.6) p.da *= -1;
            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(253, 224, 71, ${Math.max(0, p.alpha)})`;
            ctx.fill();
        });
        requestAnimationFrame(drawCanvas);
    }

    $(window).on('resize', initCanvas);
    initCanvas();
    drawCanvas();

    const urlParams = new URLSearchParams(window.location.search);
    const namaPenerima = urlParams.get('kepada') || urlParams.get('to');
    const namaPengirim = urlParams.get('dari') || urlParams.get('nama') || urlParams.get('from');

    if (namaPenerima) $('#recipientName').text(decodeURIComponent(namaPenerima));
    if (namaPengirim) $('#senderName').text(decodeURIComponent(namaPengirim));

    let isOpened = false;

    $('#openBtn').on('click', function () {
        var audio = document.getElementById("takbiran_sound");
        if (isOpened) return;
        isOpened = true;

        $(this).find('.ketupat-wrapper').addClass('ketupat-explode');

        setTimeout(() => {
            $('#whiteFlash').addClass('flash-active');
        }, 800);

        setTimeout(() => {
            $('#cover').hide();
            $('#content-wrapper').removeClass('opacity-0 pointer-events-none');
            $('#openModalBtn').removeClass('opacity-0 pointer-events-none');

            setTimeout(() => {
                $('#whiteFlash').removeClass('flash-active');
            }, 100);
        }, 1200);

        audio.currentTime = 0;
        audio.play();
    });

    $(document).on('mousemove', function (e) {
        if (!isOpened || $(window).width() < 768) return;
        const xAxis = ($(window).width() / 2 - e.pageX) / 40;
        const yAxis = ($(window).height() / 2 - e.pageY) / 40;
        $('#glass-card').css('transform', `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
    });

    if (window.DeviceOrientationEvent) {
        $(window).on('deviceorientation', function (e) {
            const oe = e.originalEvent;
            if (!isOpened || !oe.gamma || !oe.beta) return;
            let xAxis = oe.gamma / 3;
            let yAxis = (oe.beta - 45) / 3;

            xAxis = Math.max(-10, Math.min(10, xAxis));
            yAxis = Math.max(-10, Math.min(10, yAxis));

            $('#glass-card').css('transform', `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
        });
    }

    $('#glass-card').on('mouseleave', function () {
        $(this).css({
            'transform': 'rotateY(0deg) rotateX(0deg)',
            'transition': 'transform 0.5s ease'
        });
        setTimeout(() => {
            $(this).css('transition', 'transform 0.1s ease-out');
        }, 500);
    });

    $('#openModalBtn').on('click', function () {
        $('#createModal').removeClass('opacity-0 pointer-events-none');
        setTimeout(() => {
            $('#modalContent').removeClass('scale-90 opacity-0');
        }, 50);
    });

    $('#closeModalBtn').on('click', function () {
        $('#modalContent').addClass('scale-90 opacity-0');
        setTimeout(() => {
            $('#createModal').addClass('opacity-0 pointer-events-none');
        }, 300);
    });

    $('#generateBtn').on('click', function () {
        const dari = $('#inputDari').val().trim();
        const kepada = $('#inputKepada').val().trim();
        const url = new URL(window.location.href);

        ['nama', 'dari', 'from', 'kepada', 'to'].forEach(param => url.searchParams.delete(param));

        if (dari) url.searchParams.set('dari', dari);
        if (kepada) url.searchParams.set('kepada', kepada);

        const $tempInput = $('<input>');
        $('body').append($tempInput);
        $tempInput.val(url.toString()).select();
        document.execCommand('copy');
        $tempInput.remove();

        const $btn = $(this);
        $btn.html('Link Tersalin! ✨').removeClass('from-yellow-600 to-yellow-400').addClass('from-emerald-500 to-emerald-400 text-white');

        setTimeout(() => {
            $btn.html('Buat & Salin Link').removeClass('from-emerald-500 to-emerald-400 text-white').addClass('from-yellow-600 to-yellow-400');
            $('#closeModalBtn').click();
            if (dari || kepada) window.location.href = url.toString();
        }, 1500);
    });
});