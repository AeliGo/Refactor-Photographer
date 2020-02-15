import React, { createRef } from 'react';
import styles from './style.less';
import { AnimationWrapper } from '../../components/AnimationWrapper';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Link from 'umi/link';
import config from '../../config';

export interface IThumbnailsProps {}

export interface IThumbnailsState {
  urlList: ListItem[];
}

interface ListItem {
  parentId: string;
  url: string;
  numInAll: number;
}

export default class Thumbnails extends React.Component<IThumbnailsProps, IThumbnailsState> {
  private myRefs = createRef<HTMLDivElement>();

  constructor(props: IThumbnailsProps) {
    super(props);

    this.state = {
      urlList: [],
    };
  }

  componentDidMount() {
    this.fillList();
    document.addEventListener('keydown', this.keyUpFun); //绑定键盘事件
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyUpFun);
  }

  //键盘事件
  keyUpFun = (e: { keyCode: number }) => {
    switch (e.keyCode) {
      //UP
      case 38:
        this.handleScrollUp();
        break;
      //DOWN
      case 40:
        this.handleScrollDown();
        break;
      default:
        break;
    }
  };

  handleScrollUp() {
    const node = this.myRefs.current;
    if (node) {
      node.scrollTop = -80;
    }
  }

  handleScrollDown() {
    const node = this.myRefs.current;
    if (node) {
      node.scrollTop = 80;
    }
  }

  fillList() {
    let count = 0;
    config.data.forEach(parent => {
      if (parent && parent.children) {
        parent.children.forEach(child => {
          count++;
          this.state.urlList.push({
            parentId: parent.id,
            url: child.url,
            numInAll: count,
          });
        });
      }
    });
  }

  public render() {
    return (
      <AnimationWrapper>
        <div className={styles.wrapper}>
          <PerfectScrollbar ref={this.myRefs} speed={0.8} className={styles.wrapper_inside}>
            <div className={styles.container}>
              {this.state.urlList.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className={styles.item}
                    to={{
                      pathname: `/detail/${item.numInAll}`,
                    }}
                  >
                    item
                    <img src={item.url} alt="" />
                  </Link>
                );
              })}
            </div>
          </PerfectScrollbar>
        </div>
      </AnimationWrapper>
    );
  }
}
