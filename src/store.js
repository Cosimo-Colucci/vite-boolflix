import {reactive} from 'vue';

const store = reactive({
    contentsList: [],
    searchedText : '',
});

export {store};