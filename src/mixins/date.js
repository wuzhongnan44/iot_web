export default {
   data() {
      const self = this;
      return {
         datePickerOptions: {
            disabledDate(date) {
               return date && date.valueOf() > Date.now();
            }
         },
         datePickerOptions2: {
            disabledDate(date) {
               return date && date.valueOf() > Date.now() - 24 * 60 * 60 * 1000;
            }
         },
         datePickerOptionsLater: {
            disabledDate(date) {
               return date && date.valueOf() < Date.now() - 24 * 60 * 60 * 1000;
            }
         },
         monthPickerOptions: {
            disabledDate(date) {
               return date && date.valueOf() > self.moment(Date.now()).subtract(1, 'month');
            }
         },
         weekPickerOptions: {
            firstDayOfWeek: 1,
            disabledDate(date) {
               return date && date.valueOf() > Date.now();
            }
         },
         weekPickerOption2: {
            firstDayOfWeek: 1,
            disabledDate(date) {
               return date && date.valueOf() > self.moment().weekday(0);
            }
         }
      }
   }
}
