import {reactive,computed} from 'vue'
import {date} from 'quasar'

const state = reactive({
    leftDrawerOpen: false,
    showSwipeIcon:true,
    showBanner:true,
    showPartnerSection:true,
    searchBoxClicked:false,
    isNewPatient: false,
    isOldPatient:false,
    formEditing:false,
    dialogConfirm: false,
    isConfirm:false,
    date: {
        today: function () {
            return date.formatDate(Date.now(), 'DD-MM-YYYY')
        }
    }
})

 setTimeout(()=>{
      state.showSwipeIcon = false
    }, 2500)

export default {
    state
}
