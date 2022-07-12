const { BlockControls, BlockAlignmentToolbar,PanelColorSettings } = wp.editor;
const {InspectorControls} = wp.blockEditor;
const { registerBlockType } = wp.blocks;
const { RawHTML } = wp.element;

registerBlockType("swell/infographic", {
  title: "Inpho graphic",
  icon: "hammer",
  category: "widgets",

  attributes: {
    shortcode: {
      type: String,
      default: ''
    },
    textColor:{
        type: String,
        default:''
    }
  },

  edit(props) {
    const { shortcode, textColor } = props.attributes
    const {setAttributes} = props

    const onChangeTextColor = ( newTextColor ) => {
        setAttributes( { textColor: newTextColor } )
    }

    return (
    <>
    <InspectorControls>
				<PanelColorSettings 
					title={ 'Color settings' }
					initialOpen={ false }
					colorSettings={ [
						{
						  value: textColor,
						  onChange: onChangeTextColor,
						  label: 'Text color',
						},
						
					] }
				/>
			</InspectorControls>
    <div>Aggiunta info graphic</div>
    <div>
            <RawHTML></RawHTML>
        </div>
    </>
    );
  },

  save({attributes}) {
    const {textColor} = attributes 
    const shortcode = `[infographic colors='${textColor}']`
    return (
        <div>
            <RawHTML>{shortcode}</RawHTML>
        </div>
    );
  },
});
