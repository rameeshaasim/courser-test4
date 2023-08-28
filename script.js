(function() {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (var i = 0; i < names.length; i++) {
	var firstLetter = names[i].charAt(0).toLowerCase();
	if (firstLetter === 'j') {
	byeSpeaker.speak(names[i]);
	} else {
	var helloSpeaker.speak(names[i]);
	}
	}
	})();


    (function(window) {
		var byeSpeaker = new Object();
		var speakWord = "Good Bye";
		byeSpeaker.speak = function speak(name) {
		console.log(speakWord + " " + name);
		};
		window.byeSpeaker = byeSpeaker;
		})(window);

		(function(window) {
		var helloSpeaker = new Object();
		var speakWord = "Hello";
		helloSpeaker.speak = function(name) {
		console.log(speakWord + " " + name);
		};
		window.helloSpeaker = helloSpeaker;
		})(window);
