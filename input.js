
function checkage() {
 let age = document.getElementById("Year").value;
 let result = document.getElementById("result");



 if (age <= 13) {
    result.value = "You are a stupid small kid 😂"
    result.style.color = "white"
 } else if (age == 14) {
    result.value = "you are tired from learn programming !"
    result.style.color = "white"
 } else if (age == 15) {
   result.value = "we have the same age 😜"
   result.style.color = "white"
 } else if (age == 16) {
   result.value = "no comment ❤"
   result.style.color = "white"
 } else if (age == 17) {
   result.value = "you hungry ? you can make a sandwich 🌭"
   result.style.color = "white"
 } else if (age == 18) {
   result.value = "you go to for a grandmother age 😂"
   result.style.color = "white"
 } else if (age == 19) {
   result.value = "you can go to school becouse learn 😒"
   result.style.color = "white"
 } else if (age == 20) {
   result.value = "Hello my grandfather 😂😜"
   result.style.color = "white"
 } else if (age == 999) {
   result.value = "end of the world 🤯🤯🌍🌍"
   result.style.color = "white"
 } else {
   result.value = "your age is not working enter another age !"
   result.style.color = "white"
 }

}


