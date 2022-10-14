<script setup>
// Prevent FOUC
useHead({
  script: [
    {
      children: `
(() => {
    const root = document.documentElement;
    const theme = localStorage.getItem("theme");
    if (
        theme === "dark" ||
        ((!theme || theme === "auto") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        root.classList.add("dark");
    } else {
        root.classList.remove("dark");
    }
})();
`,
      renderPriority: -1,
    },
  ],
});

useDark({
  storageKey: "theme",
});
</script>

<template><div /></template>
