<template>
     <aside>

<div class="menu-top">
  <ul class="menu-top-ul">
    <li class="menu-top-li"><img src="../assets/Vector.png" /></li>
    <li><img src="../assets/people.png" /></li>
    <li><img src="../assets/Group.png" /></li>
    <li><img src="../assets/toy.png" /></li>
    <li><img src="../assets/book.png" /></li>
    <router-link to="/"><img src="../assets/tools.png" /></router-link>


  </ul>
</div>

<div class="menu-logo"><img class="menu-logo-style" src="../assets/logo.png" /></div>

</aside>
</template>



<style scoped>
aside {
  background: #0091FF;
  display: flex;
  flex-direction: column;
  flex: 50px 100%;
  height: calc(100vh - 50px);
}
.menu-top {
  display: flex;
  flex: 2;

}
.menu-top-ul {

width: 100%;
margin: 30px 0 0 0;
padding: 0;

display: flex;
flex-direction: column;
align-items: center;
text-decoration: none;
gap: 35px;
list-style-type: none;



}
.menu-logo-style {
  height: 38px;
  padding: 4px;

}
.menu-logo {
  display: flex;
  flex: 1;
  align-items: end;
  padding-bottom: 10px;

}



</style>