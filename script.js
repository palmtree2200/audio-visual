let player;
let analyzer;

function preload() {
    // Load the audio file from GitHub using the direct raw link
    player = new Tone.Player("https://raw.githubusercontent.com/palmtree2200/audio-visual/main/1%20Animals.mp3").toDestination();
    analyzer = new Tone.Analyser("fft", 32);  // Adjust FFT size for visualization detail
    player.connect(analyzer);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    Tone.start();  // Start Tone.js audio context
    player.start();  // Start audio playback
}

function draw() {
    background(0);  // Black background

    // Get the frequency data from the analyzer
    let values = analyzer.getValue();

    // Example visual: Draw a waveform based on the audio data
    noFill();
    stroke(255);  // White line for the waveform
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < values.length; i++) {
        let x = map(i, 0, values.length, 0, width);  // Map index to canvas width
        let y = height / 2 + values[i] * 200;  // Scale values for visual effect
        vertex(x, y);
    }
    endShape();
}
