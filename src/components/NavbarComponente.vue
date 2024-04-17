<template>
     <header>

<div class="buton-toggle">
  <img class="img-togle" src="../assets/menu-burgue.png"/>
</div>

<div class="route-menu">
  <div>
 
    <span class="settings-label" >{{ nomeItem }}</span>
  </div>
  <div>
    <span class="Manger">Manager</span>
  </div>
</div>

</header>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const currentRoute = router.currentRoute.value;
    const nomeItem = currentRoute.name;
    return {
      nomeItem
    };
  }
}
</script>




<style scoped>

header {
  background: #0077FF;
  height: 50px;
  display: flex;
  flex: 1;

}
.buton-toggle {
  display: flex;

  width: 56px;
  justify-content: start;
  align-items: center;

}
.img-togle {
  margin-left: 10px;
  height: 25px;
}
.route-menu {
  display: flex;
  flex: 1;
  align-items: center;

  justify-content: space-between;

}
.settings-label {
  /* margin-left: 50%; */
  font-size: 20px;
  color: #ffffff;
}

.Manger {
  color: #ffffff;
  margin-right: 20px;
  font-size: 20px;
}


</style>