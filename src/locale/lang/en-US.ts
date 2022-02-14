export default {
  name: 'Name',
  tel: 'Phone',
  save: 'Save',
  confirm: 'Confirm',
  cancel: 'Cancel',
  delete: 'Delete',
  complete: 'Complete',
  loading: 'Loading...',
  telEmpty: 'Please fill in the tel',
  nameEmpty: 'Please fill in the name',
  nameInvalid: 'Malformed name',
  confirmDelete: 'Are you sure you want to delete?',
  telInvalid: 'Malformed phone number',
  tomatoCalendar: {
    end: 'End',
    start: 'Start',
    title: 'Calendar',
    startEnd: 'Start/End',
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Choose no more than ${maxRange} days`,
  },
  tomatoCascader: {
    select: 'Select',
  },
  tomatoContactCard: {
    addText: 'Add contact info',
  },
  tomatoContactList: {
    addText: 'Add new contact',
  },
  tomatoPagination: {
    prev: 'Previous',
    next: 'Next',
  },
  tomatoPullRefresh: {
    pulling: 'Pull to refresh...',
    loosing: 'Loose to refresh...',
  },
  tomatoSubmitBar: {
    label: 'Total：',
  },
  tomatoCoupon: {
    unlimited: 'Unlimited',
    discount: (discount: number) => `${discount * 10}% off`,
    condition: (condition: number) => `At least ${condition}`,
  },
  tomatoCouponCell: {
    title: 'Coupon',
    tips: 'No coupons',
    count: (count: number) => `You have ${count} coupons`,
  },
  tomatoCouponList: {
    empty: 'No coupons',
    exchange: 'Exchange',
    close: 'Close',
    enable: 'Available',
    disabled: 'Unavailable',
    placeholder: 'Coupon code',
  },
  tomatoAddressEdit: {
    area: 'Area',
    postal: 'Postal',
    areaEmpty: 'Please select a receiving area',
    addressEmpty: 'Address can not be empty',
    postalEmpty: 'Wrong postal code',
    defaultAddress: 'Set as the default address',
    telPlaceholder: 'Phone',
    namePlaceholder: 'Name',
    areaPlaceholder: 'Area',
  },
  tomatoAddressEditDetail: {
    label: 'Address',
    placeholder: 'Address',
  },
  tomatoAddressList: {
    add: 'Add new address',
  },
};
