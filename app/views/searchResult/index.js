import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../../actions';
import * as Progress from 'react-native-progress';
import Song from '../../components/song';
import * as Utils from '../../helpers/utils';

class SearchResults extends Component {
  onPress(song) {
    this.props.downloadMusic(song);
  }

  songClick(song, index) {
    Actions.play({searchedSongs: this.props.searchResults, songIndex: index, onMusicDownload: this.onPress.bind(this,song)})
  }

  render() {
    return (
      <ScrollView>
        {
          this.props.searchResults.map((song, index) => {
            return <Song
                    key={index}
                    onPress={this.songClick.bind(this, song, index)}
                    songName={song.name}
                    artistName={song.artist_name}
                    songImage={song.cover_url}
                    id={song.id}
                    progreses={this.props.progreses}
                    downloading={song.downloading}
                    downloadMusic={this.onPress.bind(this, song)}
                    search={true}
                    />
          })
        }
      </ScrollView>
    );
  }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
    return {
      searchResults: store.searchResults,
      progreses: store.progreses
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
