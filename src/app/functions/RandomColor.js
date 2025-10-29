const randomColor = (str) => {
  if (str.length < 1) {
    return 1;
  } else {
    // Simple hash from string
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Generate light HSL color (H: 0-359, S: 60-80%, L: 85-94%)
    const h = Math.abs(hash) % 360;
    const s = 60 + (Math.abs(hash) % 20); // 60% - 79%
    const l = 85 + (Math.abs(hash) % 10); // 85% - 94%

    return `hsl(${h},${s}%,${l}%)`;
  }
};

export default randomColor;