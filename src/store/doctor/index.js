// import router from 'src/router'
import { ref } from "vue";
import { useRoute } from "vue-router";
import { date } from "quasar";

const data = {
  detail: [
    {
      id: "001",
      name: "dr. Abdurrahman, Sp.P",
      specialist: "paru",
      date: "06-05-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "/img/abdurrahman.jpg",
    },
    {
      id: "002",
      name: "dr. Wulunggono, Sp.PD",
      specialist: "Internis",
      date: "05-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "003",
      name: "dr. Vincent",
      specialist: "Kulit",
      date: "05-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "004",
      name: "dr. Vincent",
      specialist: "Kulit",
      date: "05-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "005",
      name: "dr. Vincent",
      specialist: "Kulit",
      date: "05-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "006",
      name: "dr. Vincent",
      specialist: "Kulit",
      date: "05-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "8",
      name: "dr. Vincent",
      specialist: "Kulit",
      date: "06-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "9",
      name: "dr. Vincent",
      specialist: "Kulit",
      date: "05-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "10",
      name: "dr. Vincent",
      specialist: "Kulit",
      date: "05-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "11",
      name: "dr. Vincent",
      specialist: "Kulit",
      date: "05-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "12",
      name: "dr. Vincent",
      specialist: "Kulit",
      date: "05-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "13",
      name: "dr. Vincent",
      specialist: "Kulit",
      date: "07-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "14",
      name: "dr. Vincent",
      specialist: "Gigi",
      date: "07-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
    {
      id: "15",
      name: "dr. Indra",
      specialist: "Kandungan",
      date: "08-06-2021",
      time: {
        start: "07.50",
        end: "08.50",
      },
      url: "https://cdn.quasar.dev/img/avatar4.jpg",
    },
  ],
  searchText: ref(""),
  searchSpecialist: ref(""),
  searchDate: ref(""),
  filterBy: {
    any: function () {
      return data.detail.filter((filtered) => {
        const typedText = data.searchText.value.toLowerCase();
        const selectedDate = data.searchDate.value.toLowerCase();
        const selectedSpecialist = data.searchText.value.toLowerCase();

        const filteredByDate = filtered.date.split(' ')
        // FILTERED BY DATE THEN BY SPECIALIST
         if (selectedDate !== "" && selectedSpecialist !== "") {
          return (
            filteredByDate.filter(date => {
              console.log(date);
              return date.includes(selectedDate)
              
            })
          );
        }else if (selectedDate !== "") {
          return filtered.date.includes(selectedDate);
        } 
        // }
        // })
        // return filteredBySpecialist

        // if (data.searchSpecialist.value !== '') {
        //   return (
        //     filtered.name.toLowerCase().includes(typedText) ||
        //     filtered.specialist.toLowerCase().includes(typedText) ||
        //     filtered.date.includes(typedText)
        //     );
        //   }
      });
    },
    time: function () {
      return data.detail.filter((filtered) => {
        return filtered.date.includes(data.searchText.value);
      });
    },
    // selectedDate: ref(""),
    // today: function () {
    //   const today = date.formatDate(Date.now(), "DD-MM-YYYY");
    //   return this.filterByTime(today);
    // },
  },

  doctorId() {
    const route = useRoute();
    if (route.params.id) {
      return route.params.id;
    }
    return false;
  },
  selected() {
    return this.detail.find((item) => item.id == this.doctorId());
  },
  filterByTime: function () {
    return this.detail.filter((filtered) => {
      return filtered.date.includes(this.selectedDate.value);
    });
  },
  selectedDate: ref(""),
  today: function () {
    const today = date.formatDate(Date.now(), "DD-MM-YYYY");
    console.log(today);
    return this.filterByTime(today);
  },
};

export default data;
