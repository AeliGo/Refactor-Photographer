import React, { createRef } from 'react';
import styles from './style.less';
import { AnimationWrapper } from '../../components/AnimationWrapper';
import config from '../../config';

export interface IEnterIndexProps {
  history: string[];
}

export interface IEnterIndexState {
  curImgIndex: number;
  titlesArr: titleType[];
}

interface titleType {
  count: number;
  name: string;
  childPicUrl: string;
}

export default class EnterIndex extends React.Component<IEnterIndexProps, IEnterIndexState> {
  private myRef = createRef<HTMLDivElement>();

  constructor(props: IEnterIndexProps) {
    super(props);
    this.state = {
      curImgIndex: 1,
      titlesArr: [],
    };
  }

  UNSAFE_componentWillMount() {
    // this.props.changeColorFun(true);
    this.init();
  }

  init = () => {
    let count = 1,
      added = 0;
    let titlesArr: titleType[] = config.data.map(item => {
      count = count + added;
      added = item.children.length;

      return {
        id: item.id,
        name: item.name,
        count: count,
        childPicUrl: item.children.length > 0 ? item.children[0].url : '',
      };
    });

    this.setState({
      titlesArr,
    });
  };

  public render() {
    const { titlesArr } = this.state;
    let containerW = this.myRef.current && this.myRef.current.offsetWidth;
    let containerH = this.myRef.current && this.myRef.current.offsetHeight;
    let randomW = containerW ? containerW * (1 - 0.45) : 800;
    let randomH = containerH ? containerH * (1 - 0.75) : 100;

    return (
      <AnimationWrapper>
        <div className={styles.container} ref={this.myRef}>
          <div className={styles.titles}>
            {titlesArr.map((item, index) => {
              return (
                <p
                  key={index}
                  onMouseEnter={() => {
                    this.setState({ curImgIndex: index });
                  }}
                  onClick={() => {
                    this.props.history.push(`/detail/${item.count}`);
                  }}
                >
                  {item.name + ' / '}
                </p>
              );
            })}
          </div>
          <div
            className={styles.showPhotoRandom}
            style={{ left: Math.random() * randomW, top: Math.random() * randomH }}
            key={this.state.curImgIndex}
          >
            <img src={titlesArr[this.state.curImgIndex].childPicUrl} alt="" />
          </div>
        </div>
      </AnimationWrapper>
    );
  }
}
