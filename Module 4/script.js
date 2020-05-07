(function () {
   var names = ["Larry", "John", "Kenneth", "Jason", "Jean", "Frank", "William", "Paula", "Clara", "Jameson"];
   for (var name in names) {
      var firstLetter = names[name].charAt(0).toLowerCase();
       if (firstLetter === 'j') {
          byeSpeaker.speak(names[name]);
  } else {
    helloSpeaker.speak(names[name]);
  }
}

})();