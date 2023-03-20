import { defineComponent } from "vue";
import Heading from "../../components/atoms/Heading/Heading.vue";
import Paragraph from "../../components/atoms/Paragraph/Paragraph.vue";
import Gallery from "../../components/moleculars/Gallery/Gallery.vue";
// import Lightgallery from "lightgallery/vue";
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';
// import 'lightgallery/scss/lightgallery.scss';
import Form from "../../components/moleculars/Form/Form.vue";

export default defineComponent({
  name: "Home",
  components: {
    Heading,
    Paragraph,
    Gallery,
    // Lightgallery
    Form
  },
  data() {
    return {
      // plugins: [lgThumbnail, lgZoom],
      // items: [
      //   {
      //     size: '1400-800',
      //     src: 'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80',
      //     thumb: 'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80',
      //   },
      //   {
      //     size: '1400-800',
      //     src: 'https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80',
      //     thumb: 'https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80',
      //   },
      // ]
    }
  },
})