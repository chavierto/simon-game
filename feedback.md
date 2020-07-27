# Feedback

Congrats on satisfying the project requirements! Here's some feedback for you:

## Code Quality

Is the code well formatted? Are variable and function names semantic and sensible? Is the code easy to read and understand?

- Code is generally well-formatted, well-named, and contains few style / quality issues. Take a look at the way I've refactored some of your code, and feel free to reach out to me directly if anything does not make sense. Also, make sure to remove any unused code (e.g., `console.log`) from your HTML/JS/CSS files!

- In terms of code organization, I'd recommend first listing out all your selectors at the top of the script, followed by any `.addEventListener` calls, then the callback function definitions, and finally any function invocations that happen when the script is loaded. You did a great job of pseudocoding!

- I noticed a mix of `document.getElementById()` and `document.querySelector()` in the script. I'd recommend sticking with just one DOM API syntax for simplicity and consistency.

## Technical Requirements

How does the project stack up to the requirements for this project? Is the developer making use of the material we've covered in a way that makes sense?

- Your game renders in the browser with no major errors and separates concerns into distinct HTML, CSS, and JavaScript files.

## Creativity and Interface

Is the application easy to navigate? Does it work well in every major browser? Is it responsive? Does it incorporate modern UI Themes?

- The design is minimalist and clean.

- Consider adding a success message when the user successfully completes each round in the game.

- Also, consider adding sound effects on lighting each square with the [`Audio()` browser API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement).

- Display a modal to let the player know when they won/lost the game.

## Functionality

Does the application work without errors or bugs? Does it present a complete app, where every feature is fully implemented in a way that makes sense?

- The application works without errors or bugs.

## Presentation

Is there adequate documentation? Is the repository well organized and free of clutter?

- Your readme contains relevant information about the application. To make it even more informative, consider adding the live url for your game and other sections such as installation instructions. See these examples: https://github.com/esin87/travelogue or https://github.com/esin87/StarTrek_TNG_Trivia_Game

## Additional Feedback

- Take a look at some of my inline comments on your code. You can find my comments by searching for "Hou comment:".
