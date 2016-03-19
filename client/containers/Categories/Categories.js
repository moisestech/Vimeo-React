import React, {PropTypes} from 'react'
import Carousel from '../../components/Carousel/Carousel'
import CardList from '../../components/CardList/CardList'
// import CardBanner from '../../components/CardBanner/CardBanner'


class Categories extends React.Component {

  static displayName = 'Categories'

  static propTypes = {
    'data': PropTypes.array
  }

  render() {
      const {data} = this.props

      const cardList1 = {
        content: data,
        childrenlayout: {category: true}
      }

      const cardList2 = {
        content: data,
        layout: {mixgrid: true},
        childrenlayout: {
          mixgrid: true,
          right: true
        }
      }

      const cardList3 = {
        content: data,
        layout: {mixgrid: true},
        childrenlayout: {
          mixgrid: true,
          right: true
        }
      }

      const cardList4 = {
        content: data,
        layout: {mixgrid: true},
        childrenlayout: {
          mixgrid: true,
          right: true
        }
      }

      return (
        <div className="Categories">
          <Carousel content={data} layout={{'landscape': true}}/>
          <CardList content={cardList1.content} childrenlayout={cardList1.childrenlayout}/>
          <CardList content={cardList2.content} 
            childrenlayout={cardList2.childrenlayout} 
            layout={cardList2.layout}/>
          <CardList content={cardList3.content} 
            childrenlayout={cardList3.childrenlayout} 
            layout={cardList3.layout}/>
          <CardList content={cardList4.content} 
            childrenlayout={cardList4.childrenlayout} 
            layout={cardList4.layout}/>
        </div>
      )
    }
}

export default Categories