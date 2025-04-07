<template>
  <div>
    <header>
      <slot name="header">Header fallback</slot>
    </header>
    <main>
      <slot>Main fallback</slot>
    </main>
    <footer>
      <slot name="footer">Footer fallback</slot>
    </footer>
  </div>
</template>


<style scoped>
header {
  color: red;
}

main {
  color: green;
}

footer {
  color: blue;
}
</style>
