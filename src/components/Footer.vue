<template>
      <v-footer padle>
        <v-card flat class="text-center">
          <v-card-text style="margin:10px;">
            <v-btn class="mx-4" rounded-circle icon color="primary">
              <v-icon size="24px"> mdi-facebook</v-icon>
            </v-btn>
            <v-btn class="mx-4" rounded-circle icon color="primary">
              <v-icon size="24px"> mdi-twitter</v-icon>
            </v-btn>
            <v-btn class="mx-4" rounded-circle icon color="primary">
              <v-icon size="24px"> mdi-linkedin</v-icon>
            </v-btn>
            <v-btn class="mx-4" rounded-circle icon color="primary">
              <v-icon size="24px"> mdi-instagram</v-icon>
            </v-btn>
            <!--<v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>-->
          </v-card-text>
          <v-card-text class="pt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text
          >
          <v-divider></v-divider>
          <v-row style="padding:10px; margin:10px">
            <v-col>
              <v-card>
                <v-card-title>
                  Contact
                </v-card-title>pl
                <v-card-text>
                  <v-list >
                    <v-list-item>
                      <v-icon color="primary">mdi-phone</v-icon>
                      +216 22 334 455
                    </v-list-item>
                    <v-list-item>
                      <v-icon color="primary">mdi-email</v-icon>
                      support@teamup.com
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <v-card style="height:176px;">
                <v-card-title>
                  Address
                </v-card-title>
                <v-card-text>
                  <v-list>
                    <v-list-item>
                      <v-icon color="primary">mdi-office-building</v-icon>
                      App 4, Rue Mounir Ben Salah, Tunis, Tunisia (à côté de la pâtisserie Salmen)
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>

            </v-col>
          </v-row>
        </v-card>
      </v-footer>
</template>

<script>
export default {
  name: 'social',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-google-plus',
      'mdi-linkedin',
      'mdi-instagram',
    ]
  }),
}
</script>

<style scoped>
</style>
