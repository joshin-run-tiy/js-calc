# __Notes__

## Rob Notes
* const equalbutton = function() {
  console.log("hell");
  input inputstring
}

### Flexbox

- put flexbox display in parent container/elment

# Steps
- button function

press button
assign variable

LINK: [example](https://www.codeproject.com/tips/631525/creating-calculator-using-html-css-and-javascript)
LINK: [example2](http://stackoverflow.com/questions/14496531/adding-two-numbers-concatenates-them-instead-of-calculating-the-sum)

//VARIABLE//
//scope, where using, where coming from, where going to

//FLEXBOX
constrain
set 33% of outer container

### Firefox $0
* shows what's going on???

### Equals
* named or id field becomes a variable
  * naming


__Notes__
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">

    <title>button data example</title>

  </head>
  <body>

    <input type="button" value="1">
    <input type="button" value="2">

    <script>
      function onLoad () {
        var buttons = document.querySelectorAll("input[type='button']");
        console.log(buttons);
        for (var i = 0; i < buttons.length; i++) {
          buttons.item(i).addEventListener("click", function () {
          console.log(buttons.item(i).value);
        });
      }
      window.onload = onLoad;
      console.log('script loaded');
    </script>

  </body>
</html>
<!-- <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">

    <title>button data example</title>

  </head>
  <body>

    <input type="button" value="1">

    <script>
      function onLoad () {
        var button = document.querySelector("input[type='button']");

        button.addEventListener("click", function () {
          console.log(button.value);
        });
      }
      window.onload = onLoad;
      console.log('script loaded');
    </script>

  </body>
</html> -->
