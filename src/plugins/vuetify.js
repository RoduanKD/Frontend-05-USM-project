import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3c3b54',
        secondary: '#a3a0fb',
        accent: '#a5a4bf',
      },
      dark: {
        primary: '#3c3b54',
        background: 'colors.indigo.base',
        
      },
    },
  },
});