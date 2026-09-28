// Interactive 3D Liquid Mesh & Wave Canvas Animation
// Creates smooth, ambient fluid waves with subtle glow and mouse reaction

(function() {
  const canvas = document.createElement('canvas');
  canvas.id = 'bg-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.zIndex = '-1';
  canvas.style.pointerEvents = 'none';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouse = {
    x: width / 2,
    y: height / 2,
    targetX: width / 2,
    targetY: height / 2
  };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
  });

  let time = 0;

  // Wave configurations
  const waves = [
    { amp: 85, freq: 0.0018, speed: 0.015, color: 'rgba(243, 80, 15, 0.08)', offset: 0 },
    { amp: 120, freq: 0.0012, speed: 0.010, color: 'rgba(255, 115, 0, 0.06)', offset: 100 },
    { amp: 95, freq: 0.0022, speed: 0.018, color: 'rgba(155, 81, 224, 0.05)', offset: 200 },
    { amp: 140, freq: 0.0008, speed: 0.008, color: 'rgba(243, 80, 15, 0.04)', offset: 300 }
  ];

  // Ambient Floating Particles
  const particleCount = 45;
  const particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2
    });
  }

  function animate() {
    time += 1;

    // Smooth mouse interpolation
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    // Deep luxury dark background
    ctx.fillStyle = '#0a0b12';
    ctx.fillRect(0, 0, width, height);

    // Subtle radial light follows mouse
    const gradient = ctx.createRadialGradient(
      mouse.x,
      mouse.y,
      50,
      mouse.x,
      mouse.y,
      Math.max(width, height) * 0.65
    );
    gradient.addColorStop(0, 'rgba(243, 80, 15, 0.12)');
    gradient.addColorStop(0.35, 'rgba(120, 40, 180, 0.05)');
    gradient.addColorStop(0.7, 'rgba(10, 11, 18, 0.9)');
    gradient.addColorStop(1, '#0a0b12');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Draw wavy 3D liquid ribbons
    waves.forEach((w, index) => {
      ctx.beginPath();
      ctx.moveTo(0, height);

      const baseHeight = height * 0.65 + Math.sin(time * 0.005 + index) * 50;

      for (let x = 0; x <= width; x += 15) {
        // Distance effect from mouse
        const dx = x - mouse.x;
        const mouseEffect = Math.sin(dx * 0.005) * ((mouse.y / height) * 40);

        const y =
          baseHeight +
          Math.sin(x * w.freq + time * w.speed + w.offset) * w.amp +
          Math.cos(x * w.freq * 0.6 - time * w.speed * 0.8) * (w.amp * 0.5) +
          mouseEffect;

        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fillStyle = w.color;
      ctx.fill();
    });

    // Draw glowing particles
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(243, 110, 40, ${p.opacity * 0.6})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(243, 80, 15, 0.8)';
      ctx.fill();
      ctx.shadowBlur = 0; // reset
    });

    requestAnimationFrame(animate);
  }

  animate();
})();
