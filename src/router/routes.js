function load(component) {
   return () => import(`views/${component}.vue`);
}

export default [
   {
      path: '/',
      component: load('layout/index'),
      children: [
         {
            path:'/productManagement',
            name:'productManagement',
            component: load('productManagement/index'),
            children: []
         }
      ]
   },

];
