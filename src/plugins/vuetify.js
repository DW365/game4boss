import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import Condition from '@/components/icons/Condition'
import Task from '@/components/icons/Task'
import Employee from '@/components/icons/Employee'
import DelegationLevel from '@/components/icons/DelegationLevel'
import ObjectIcon from '@/components/icons/ObjectIcon'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    values: {
      condition: { // name of our custom icon
        component: Condition // our custom component
      },
      task: { // name of our custom icon
        component: Task // our custom component
      },
      employee: { // name of our custom icon
        component: Employee // our custom component
      },
      object_icon: { // name of our custom icon
        component: ObjectIcon // our custom component
      },
      delegation_level: { // name of our custom icon
        component: DelegationLevel // our custom component
      }
    }
  }
})
