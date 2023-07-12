<template>
  <header>
    <nav>
      <router-link to="/houses"
        ><img src="./../icons/img_logo_dtt@3x.png" alt="dtt-logo"
      /></router-link>
      <ul>
        <li><router-link to="/houses">Houses</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  background-color: var(--element-color-backgroun2);
  padding: calc((20 / 16) * 1rem);
  font-family: 'Montserrat', sans-serif;
  font-size: var(--r18);
  color: var(--element-color-tertiary);
  position: fixed;
}

header nav {
  max-width: var(--max-width);
  display: flex;
  align-items: center;
  gap: calc((50 / 16) * 1rem);
  margin: 0 auto;
}

img {
  width: calc((120 / 16) * 1rem);
  height: calc((40 / 16) * 1rem);
}

ul {
  display: flex;
  align-items: center;
  gap: calc((70 / 16) * 1rem);
}

ul li {
  width: calc((70 / 16) * 1rem);
}

a {
  display: inline-block;
  color: inherit;
  transition: all 0.3s;
}

a:active,
a:hover,
a.router-link-active {
  font-weight: 700;
  color: var(--text-color-primary);
}
</style>
