import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout'
const ResponsiveReactLayout = WidthProvider(Responsive);

export default class M extends React.Component {

  render() {

    var layoutLG = [  
      {i: '1', x: 2, y: 3, w: 8, h: .5,resizing:false,static:true},
      {i: '2', x: 2, y: 6.3, w: 8, h: 3, minW: 2, maxW: 12},
      {i: '3', x: 2, y: 9.3, w: 8, h: 2.5, minW: 2, maxW: 12}
    ]

    var layoutMD = [
      {i: '1', x: 0, y: 0, w: 10, h: 5.18,resizing:false,static:true},
      {i: '2', x: 2, y: 3.3, w: 6, h: 2.2, minW: 2, maxW: 10},
      {i: '3', x: 2, y: 6.3, w: 6, h: 2.2, minW: 2, maxW: 10}
    ]

    var layoutSM = [
      {i: '1', x: 0, y: 0, w: 6, h: .5,resizing:false,static:true},
      {i: '2', x: 0, y: 3.3, w: 4, h: 2.2, minW: 2, maxW: 6},
      {i: '3', x: 0, y: 6.3, w: 4, h: 2.2, minW: 2, maxW: 6}
    ]

    var layoutXS = [
      {i: '1', x: 6, y: 3, w: 2, h: 1},
      {i: '2', x: 5, y: 6.3, w: 8, h: .5}
    ]

    const layouts = {
      lg: layoutLG,    //  more than 1200px
      md: layoutMD,    //  more than 996px less than 1200px
      sm: layoutSM,
      xs: layoutXS
    }
      
    return (

      <ResponsiveReactLayout 
        className="layout" 
        layouts={layouts}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>

      </ResponsiveReactLayout>
    );
  }
}
