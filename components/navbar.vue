<script setup lang="ts">
const isDark = useDark({
  storageKey: "theme",
});
const toggleDark = useToggle(isDark);

const router = useRouter();
</script>

<template>
  <client-only>
    <b-navbar
      toggleable="lg"
      dark
      sticky="top"
      style="background-color: #57739a"
    >
      <b-navbar-brand to="/">
        <b-img src="/favicon.png" width="48" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="me-auto">
          <b-nav-item to="/about" :disabled="!router.hasRoute('about')"
            >About</b-nav-item
          >
          <b-nav-item to="/contact" :disabled="!router.hasRoute('contact')"
            >Contact</b-nav-item
          >
          <b-nav-item to="/gallery" :disabled="!router.hasRoute('gallery')"
            >Gallery</b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item
            href="https://github.com/xhayper/portfolio"
            target="_blank"
            rel="noopener"
          >
            <b-button
              class="bi bi-github"
              :variant="isDark ? 'secondary' : 'light'"
            />
          </b-nav-item>
          <b-nav-item>
            <b-button
              @click="toggleDark()"
              :variant="isDark ? 'secondary' : 'light'"
            >
              <i
                :class="{
                  'bi bi-moon-fill': isDark,
                  'bi bi-sun': !isDark,
                }"
              />
            </b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </client-only>
</template>
