<template>
  <q-list class="text-primary">
    <q-item-label
      header
      class="text-grey-8"
    >
      منوی ادمین
    </q-item-label>
    <q-item
      clickable
      v-ripple
      @click="logout"
    >
      <q-item-section avatar>
        <q-icon name="logout" />
      </q-item-section>
      <q-item-section>خروج</q-item-section>
    </q-item>
    <q-separator spaced />
    <q-item
      v-for="item in menuItems"
      :key="item.title"
      tag="a"
      clickable
      v-ripple
      :active="$route.name === item.routeName"
      :to="{name: item.routeName}"
    >
      <q-item-section avatar>
        <q-icon :name="item.icon" />
      </q-item-section>
      <q-item-section>{{ item.title }}</q-item-section>
    </q-item>

  </q-list>
</template>

<script>
export default {
  name: 'MainMenu',
  data () {
    return {
      menuItems: [
        {
          title: 'کاربران',
          icon: 'delete',
          routeName: 'Admin.User.Index'
        },
        {
          title: 'محتوا',
          icon: 'local_library',
          routeName: 'Admin.Content.Index'
        },
        {
          title: 'محصولات',
          icon: 'local_library',
          routeName: 'Admin.Product.Index'
        },
        {
          title: 'سفارشات',
          icon: 'local_library',
          routeName: 'Admin.Order.Index'
        },
        {
          title: 'تراکنش ها',
          icon: 'local_library',
          routeName: 'Admin.Transaction.Index'
        },
        {
          title: 'کوپن ها',
          icon: 'local_library',
          routeName: 'Admin.Coupon.Index'
        },
        {
          title: 'محتوا',
          icon: 'local_library',
          routeName: 'Admin.Transaction.Index'
        },
        {
          title: 'دسته محتوا',
          icon: 'local_library',
          routeName: 'Admin.Transaction.Index'
        },
        {
          title: 'تنظیمات',
          icon: 'local_library',
          routeName: 'Admin.Settings'
        }
        // {
        //   title: 'بانک سوال',
        //   icon: 'storage',
        //   routeName: 'EntityIndex'
        // },
        // {
        //   title: 'نمونه نمایش',
        //   icon: 'storage',
        //   routeName: 'EntityShoew'
        // }
      ]
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('Auth/logout')
    }
  }
}
</script>

<style scoped>

</style>
