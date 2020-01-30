import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';

//TODO:
//点击图片跳转详情页
const onpressTest = () => {
  Alert.alert(
    '温馨提示',
    'TODO',
    [
      {text: '确定', onPress: () => console.log('Ask me later pressed')},
      {
        text: '取消',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: '其他', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  );
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      videolistData: [],
      // nowPage: 1,
      // totalPage: 0,
      // pageSize: 15,
    };
  }

  componentDidMount() {
    this.getVideosByPage();
  }

  getVideosByPage = () => {
    const url = 'http://api.bilibili.cn/recommend';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isloading: false,
          videolistData: data.list,
        });
      });
  };

  renderItem = item => {
    return (
      // 视频列表
      <View>
        {/* 列表块 */}
        <View style={styles.videoitem}>
          {/* 图片容器 */}
          <View style={styles.imgContainer}>
            <TouchableWithoutFeedback onPress={onpressTest}>
              <Image source={{uri: item.pic}} style={styles.disPic} />
            </TouchableWithoutFeedback>
            <View style={styles.videoinfo}>
              {/* 播放量 */}
              <View style={styles.playcount}>
                <Image
                  source={require('../../img/video-play.png')}
                  style={styles.biliIcon}
                />
                <Text style={styles.number}>{item.play}</Text>
              </View>
              {/* 评论量 */}
              <View style={styles.playcount}>
                <Image
                  source={require('../../img/comments.png')}
                  style={styles.biliIcon}
                />
                <Text style={styles.number}>{item.review}</Text>
              </View>
              {/* 时长 */}
              <View style={styles.playcount}>
                <Text style={styles.number}>{item.duration}</Text>
              </View>
            </View>
          </View>
          {/* 标题 */}
          <View style={styles.videoinfotitle}>
            <Text numberOfLines={2}>{item.title}</Text>
          </View>
          {/* 分类 */}
          <View style={styles.videoinfobottom}>
            <Text style={styles.videotype}>{item.typename}</Text>
            <Image
              source={require('../../img/more.png')}
              style={styles.biliIcon}
            />
          </View>
        </View>
      </View>
    );
  };

  renderVideoList = () => {
    if (this.state.isloading) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <View style={styles.container}>
        {this.state.videolistData.map(this.renderItem)}
      </View>
    );
  };

  render() {
    return this.renderVideoList();
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  videoitem: {
    width: 167,
    height: 190,
    borderRadius: 3,
    backgroundColor: 'white',
    marginBottom: 10,
    overflow: 'hidden',
  },
  imgContainer: {
    width: '100%',
    height: 100,
  },
  disPic: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  videoinfo: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playcount: {
    height: '100%',
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  biliIcon: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
  number: {
    color: 'white',
    fontSize: 11,
  },
  videoinfotitle: {
    width: '100%',
    padding: 7,
    marginBottom: 5,
  },
  videoinfobottom: {
    width: '100%',
    height: 30,
    // backgroundColor: 'red',
    padding: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  videotype: {
    color: '#cdcdcd',
  },
});
