<template>
  <header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid mx-2">
        <router-link class="navbar-brand open-sans-bold" to="/#"
          >All-Colours</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item text-white">
              <router-link class="nav-item text-white no-decor" to="/more"
                >Learn More</router-link
              >
            </li>
          </ul>

          <div class="ml-lg-auto">
            <img
              src="img\cmyk_lights1.svg"
              class="rounded-circle"
              width="45"
              height="45"
            />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header-top",
};
</script>
