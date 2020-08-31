// filters.js
import Vue from "vue";
import dayjs from "dayjs";

Vue.filter("decimals", (value, decimals=2) => {
    return value.toFixed(decimals).toLocaleString();
  });
  
  Vue.filter("currency", (value) => {
    return value + " $";
  });

Vue.filter("date", value => {
    return dayjs(value).format("DD/MM/YYYY");
  });
