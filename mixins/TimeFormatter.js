import moment from 'moment'

export const timeFormatter = {
  methods: {
    howLongAgo: value => {
      return moment.utc(value).fromNow();
    }
  }
};
