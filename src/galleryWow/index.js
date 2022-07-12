const {
    BlockControls,
    BlockAlignmentToolbar,
  } = wp.editor;
  
const {registerBlockType} = wp.blocks;
const { RawHTML } = wp.element;

const el = wp.element.createElement
import Wrapper from './react/wrapper.jsx'; 

registerBlockType('swell/block-gallerywow', {
    title: 'Gallery Wow',
    icon: 'smiley',
    category: 'widgets',

    attributes: {
       Images: {
            type: Array,
            default: []
        }
    }, 

    edit(props) {
        const {setAttributes} = props;
        const {Images} = props.attributes;

        function changeImages(newImages) {
            setAttributes({
                Images: newImages,
            })
        }
        return (
            <div>
                <Wrapper Images={Images} changeImages={changeImages}/> 
                <div>
                <RawHTML></RawHTML>
                </div>
            </div>
);
    },

    save(props) {
        const {Images} = props.attributes;
        var myShortcode = `[gallerywow bgs="${Images}"]`;
        return (
            <div>
                <RawHTML>{ myShortcode }</RawHTML>
            </div>
        );
    },
}); 