// Boot files, global components
// Imports
import { defineBoot } from '#q-app/wrappers'
import page from 'src/components/page/page.vue'
import pageBody from 'src/components/page/pageBody.vue'
import pageFooter from 'src/components/page/pageFooter.vue'
import pageHeader from 'src/components/page/pageHeader.vue'
import footerTabs from 'src/components/footer/footerTabs.vue'
import searchButton from 'src/components/buttons/searchButton.vue'

const globalComponents = {
  page,
  pageBody,
  pageHeader,
  pageFooter,
  footerTabs,
  searchButton
}

export default defineBoot(({ app }) => {
  // Logic
  for (const key in globalComponents) {
    app.component(key, globalComponents[key])
  }
})
