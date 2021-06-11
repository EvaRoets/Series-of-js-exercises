const shows = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`,
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

const writeTitle = title => {
  const newTitle = uCFirst(title);
  document.write(wrapWithTag(newTitle, `li`));
};

const uCFirst = sentence => {
  const words = sentence.split(``);
  words = words.map(word => word.charAt(0).toUpperCase() + word.slice());
  return words.join();
};

document.write(`<ol>`);
shows.forEach(show => writeTitle(show));
document.write(`</ol>`);

/*

In this exercise we want every word in a title to start with a capital letter.
* Look at the error message in the dev tools and fix it.
* Look at the documentation of split().
* Look at the documentation of charAt().
* Look at the documentation of slice().
* Adjust the function to get the desired result
*/
