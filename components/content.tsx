import "./content-stuff.scss"
import React from 'react'

interface IShow {
  show: {
    externals?: object;
    genres?: Array<string>
    id?: number
    image?: {medium?: string; original?: string} 
    language?: string
    name?: string
    network?: {id?: number; name?: string; country?: object}
    officialSite?: string
    premiered?: string
    rating?: {average?: number}
    runtime?: number
    schedule?: {time?: string; days?: Array<number>}
    status?: string
    summary?: string
    type?: string
    updated?: number
    url?: string
  }
}

interface IList {
  key: number;
  item: IShow['show'];
}

interface IProps {
  search_results?: Array<{show: object}>;
}

const ListItem:React.FunctionComponent<IList> = (props) => (
  <div className="column is-3">
    <div className="card">
      <div className="card-image">
          <figure className="image is-square">
            <img src={props.item.image && props.item.image.medium}></img>
          </figure>
      </div>
    </div>
  </div>
)


class Content extends React.Component<IProps, {}> {
  public render () {
    const search_results = this.props.search_results ?  this.props.search_results : [];
    // const { search_results } = this.props;
    return (
      <div className="container">
        <div className="content_container">
          <div className="columns is-mobile is-multiline is-2">
            {search_results.map((value: IShow, idx: number) => 
              <ListItem key={idx} item={value.show}/>)}
          </div>
        </div>
      </div>
    )
  }
}

export default Content;