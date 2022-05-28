<template>
  <div id="main-wrapper">
    <Header />
    <Sidebar />
    <div class="page-wrapper">
      <div class="container-fluid">
        <Breadcrumbs />
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <router-view></router-view>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- footer -->
      <!-- ============================================================== -->
      <footer class="footer">© 2022 Admin Pro</footer>
      <!-- ============================================================== -->
      <!-- End footer -->
      <!-- ============================================================== -->
    </div>
  </div>
</template>

<script>
import Header from "../shared/Header.vue";
import Sidebar from "../shared/Sidebar.vue";
import Breadcrumbs from "../shared/Breadcrumbs.vue";

export default {
  name: "PagesComponent",
  components: { Header, Sidebar, Breadcrumbs },
};
</script>
