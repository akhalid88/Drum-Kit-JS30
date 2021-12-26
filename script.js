const keys = Array.from(document.querySelectorAll('.key'));

function playSound(e) {
	// Define variables for audio and keys
	const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	// Stop function if no key is pressed
	if (!sound) return

	// Reset audio and play audio
	sound.currentTime = 0;
	sound.play();

	// Set css highlighting class for key pressed
	key.classList.add('playing');
}

// Remove playing class from key
keys.forEach(key => key.addEventListener('transitionend', function () {
	key.classList.remove('playing');
}));

// Listen for keydown events and 
window.addEventListener('keydown', playSound);