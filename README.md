THE PLAN

1. BUILD COMPONENTS FOLDERS AND .JS FILES
    - MAIN, CONTROLS, CATCHPHRASE, DISPLAY, CHARACTER, HEADER, FOOTER
2. SET STATE IN MAIN, PASS INTO CONTROLS AS PROPS 
3. BUILD CONTROLS COMPONENT DROPDOWN TO UPDATE STATE
4. CONSOLE.LOG TO VERIFY STATE
5. GET PHOTOS FROM THE INTERNET
6. SET STATE TO DISPLAY CORRESPONDING PHOTO IN CHARACTER.JS
    - img src='process.env.publicurl/{head}.png
7. BUILD setCOUNTERS in controls.js, PASS HEADCOUNT, ETC INTO DISPLAY AS PROPS
    - use an anonymous click function and store the return in a variable const handleIncrement = () =>
8. BUILD CATCHPHRASE INPUT FORM - SETCATCHPHRASE
    - create catchphrase empty array in state (main.js)
    - capture the value of an input (in catchphrase.js)
    - add that value to an array of catchphrases (setCatchphrase)
    - map through the array and display -- in display.js
        - catchphrases.map(catchphrase)
9. PASS CATCHPHRASE VALUE INTO DISPLAY AS PROP
10. RENDER CATCPHRASE IN DISPLAY