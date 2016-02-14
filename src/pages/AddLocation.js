import React, {
    Alert,
    Component,
    View,
    Text,
    ListView,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {connect} from 'react-redux';
import {addCity} from '../redux/modules/session'

import {styles} from './AddLocation.style';

import {areaIDs} from '../config/areaIDs';

import NavBar from '../components/NavBar';
import TextBox from '../components/TextBox';
import Button from '../components/Button';

import Router from '../utils/Router';

class AddLocation extends Component {
    constructor(props) {
        super(props);

        let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!==r2});

        this.state = {
            lastText: '',
            searchText: '',
            dataSource: dataSource.cloneWithRows([])
        };

        this.line = 0;
    }

    search() {
        const {searchText, lastText} = this.state;
        if (!searchText || searchText === "") {
            return;
        }
        let text = searchText.toLowerCase();
        if (text === lastText) {
            return;
        }

        let result = [];
        for (let i = 0; i < areaIDs.length; ++i) {
            if (areaIDs[i].nameCN.indexOf(text) > -1 ||
                areaIDs[i].nameEN.indexOf(text) > -1) {
                result.push({
                    id: areaIDs[i].id,
                    name: areaIDs[i].nameCN,
                    city: areaIDs[i].city,
                    prov: areaIDs[i].prov
                });
            }
        }

        this.setState({
            lastText: text,
            dataSource: this.state.dataSource.cloneWithRows(result)
        });
    }

    addCity(info) {
        this.props.addNewCity(info)
            .then(res => {
                Router.popToRoot();
                Router.replace(Router.pages.Index, {city: info});
            })
            .catch(err => {
                Alert.alert('提示', err.message, [{text: '哦'}]);
            });
    }

    renderRow(rowData) {
        return (
            <View style={styles.row} key={rowData.id}>
                <TouchableOpacity onPress={() => this.addCity(rowData)}>
                    <Text style={styles.rowText}>
                        {rowData.prov + ' ' + rowData.city + '市 ' + (rowData.name === rowData.city ? '' : rowData.name)}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderSeparator() {
        return <View key={this.line++} style={styles.line} />;
    }

    render() {
        return (
            <View style={styles.container}>
                <NavBar title="添加地区" renderBack={this.props.hadList}/>

                <View style={styles.searchBox}>
                    <TextBox placeholder="输入城市名（中文/拼音）"
                             style={styles.textBox}
                             onChangeText={(text) => {
                                this.setState({searchText: text});
                             }}
                             onSubmitEditing={()=>this.search()}
                    />
                    <Button text="搜索" style={styles.button} onPress={() => {this.search()}}/>
                </View>

                <ListView style={styles.container}
                          dataSource={this.state.dataSource}
                          renderRow={(rowData)=>this.renderRow(rowData)}
                          renderSeparator={()=>this.renderSeparator()}
                />
            </View>
        );
    }
}

export default connect(state => ({
    hadList: state.session.list && state.session.list.length > 0
}), dispatch => ({
    addNewCity: (info) => dispatch(addCity(info))
}))(AddLocation);
