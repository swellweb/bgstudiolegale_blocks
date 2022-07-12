<template>
    <div class="gallerywow">
        <div class="wrap-media-gallery">
        <button @click="addImage" class="components-button is-primary">Apri Media Gallery</button>
        </div>
        <div>
            <ul v-if="imageSelected">
                <li v-for="(slide, i) in imageSelected" :key="i">
                    <img :src="slide" style="width:300px;height:500;object-fit:cover; object-position:center;" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'swell-gallery-wow',
    props: {
        changeImages: {
            type: Function,
            default: false
        },
        Images: {
            type: Array,
            default: () => [],

        }
    },
    data() {
        return {
            imageSelected: this.Images,
            slides: [],
        }
    },
    watch: {
        imageSelected: {

            handler() {

                this.slides = this.imageSelected
            },
            immediate: true
        }
    },
    mounted(){
        console.log(this)
    },
    methods: {
        addImage() {
            this.media_upload()

        },
        media_upload(index = -1) {
            this.i = index
            let that = this;
            let pics = [];
            const file_frame = wp.media.frames.file_frame = wp.media({
                title: 'Select or upload image',
                library: { // remove these to show all
                    type: 'image' // specific mime
                },
                button: {
                    text: 'Select'
                },
                multiple: true // Set to true to allow multiple files to be selected
            });
            file_frame.on('select', function () {
                const selection = file_frame.state().get('selection')
                selection.map(function (attachment) {
                    attachment = attachment.toJSON();
                    pics.push(attachment.url)
                });
                that.imageSelected = pics
                that.changeImages(pics)
            });
            window.wpActiveEditor = null;

            file_frame.open();


        }
    }
}
</script>

<style>
.gallerywow{
    background:#f1f1f1;
    padding:15px;
}
.wrap-media-gallery{
    padding:15px 0;
    border-bottom: 1px solid lightblue;
}
.gallerywow ul{
    list-style: none;
    margin: 0;
    padding:0;
    display: grid;
    grid-template-columns: 33.3% 33.3% 1fr;
    justify-content: flex-start;
    width: 100%;
}


</style>