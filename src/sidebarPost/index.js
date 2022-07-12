const{ __ } =wp.i18n;
const { registerPlugin } = wp.plugins
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost
const {ColorPicker,PanelBody,TextControl} = wp.components;
const {setState, withSelect, dispatch, useSelect, select, withDispatch} = wp.data
let PluginMetaFields = (props) => {
  return (
    <>
            <PanelBody
                title={__("Meta Fields Panel", "mds")}
                icon="admin-post"
                intialOpen={ true }
            >
                <TextControl 
                    value={props.text_metafield}
                    label={__("Text Meta", "mds")}
                    onChange={(value) => props.onMetaFieldChange(value)}
                />
                <ColorPicker
                    color={props.text_metafield}
                    label={__("Colour Meta", "mds")}
                    onChangeComplete={(colour) => props.onMetaFieldChange(colour.hex)}
                />
            </PanelBody>
        </>
  )
}
PluginMetaFields = withSelect(
  (select) => {
      return {
          text_metafield: select('core/editor').getEditedPostAttribute('meta')['swellweb_text_metafield']
      }
  }
)(PluginMetaFields);

PluginMetaFields = withDispatch(
  (dispatch) => {
      return {
          onMetaFieldChange: (value) => {
              dispatch('core/editor').editPost({meta:{swellweb_text_metafield: value}})
          }
      }
  }
)(PluginMetaFields);

registerPlugin( 'swellweb-sidebar', {
    icon: 'smiley',
    attributes:{
        colorHead:{
            type: String,
            default: ''
        }
    },

    
    render: () => {

        return (
            <>
                <PluginSidebarMoreMenuItem
                    target="swellweb-sidebar"
                >
                    {__('Meta Options', 'mds')}
                </PluginSidebarMoreMenuItem>
                <PluginSidebar
                    name="swellweb-sidebar"
                    title={__('Meta Options', 'mds')}
                >
                    <PluginMetaFields />
                </PluginSidebar>
            </>
        )
      }
    })