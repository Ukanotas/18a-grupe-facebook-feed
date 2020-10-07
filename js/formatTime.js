function formatTime(time) {
    const now = Date.now();
    const s = Math.round((now - time) / 1000);
    console.log(s);

    //0...15s - Just now
    if (s <= 15) {
        return 'Just now';
    }
    //16...59s - [x]s ago
    if (s <= 59) {
        return s + 's ago';
    }
    //1...59min - [x]min ago
    const min = Math.floor(s / 60);
    if (min <= 59) {
        return min + 'min ago';
    }
    //1...23h - [x]h ago
    const h = Math.floor(min / 60);
    if (h <= 23) {
        return h + 'h ago';
    }
    //1...30d - [x]d ago
    const d = Math.floor(h / 365.25);
    if (d <= 30) {
        return d + 'd ago';
    }
    //1...11m - [x]m ago
    const m = Math.floor(d / 12);
    if (m <= 11) {
        return m + 'm ago';
    }
}

export default formatTime;