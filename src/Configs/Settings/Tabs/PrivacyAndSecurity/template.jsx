import React from 'react';
import { connect } from 'react-redux';
import { getPrivacySecurityInputs } from './functions';
import { DefautLabel, DefaultInput, DefaultSpan } from './StyledComponents';
import { PageHeading, PrimaryButton, Tab, TabHeading, TabBody } from '../../StyledComponets';
import { from } from 'rxjs';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { updateSettings } from '../../../../Store/Actions/asycFuctions';
import { bindActionCreators } from 'redux'
import passwordValidator from 'password-validator';
var schema = new passwordValidator();
schema.is().min(10)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase(1)                              // Must have uppercase letters
    .has().lowercase(1)                              // Must have lowercase letters
    .has().digits(1);                               // Must have digits




class PrivacyAndSecurity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            password: props.password,
            isError: false
        }
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {
        this.setState({ isLoading: false, password: nextProps.password });
    }
    onSubmit(e) {
        e.preventDefault();
        let formData = new FormData(e.target)
        var data = {};
        formData.forEach(function (value, key) {
            data[key] = value;
        });
        if (data.newPassword !== data.confirmPassword) {
            this.setState({isError: "Conformed password is not same as New password."})
            return;
        }
        if(!schema.validate(data.newPassword)){
            this.setState({isError: JSON.stringify(schema.validate(data.newPassword, { list: true }))})
            return;
        } else {
            this.setState({ isLoading: true, isError: false })
            this.props.updateSettings(data);
        }
    }
    render() {
        return <Tab>
            <TabHeading>Privacy & Security</TabHeading>
            {!this.state.isLoading && <TabBody>
                <PageHeading>Password</PageHeading>
            {this.state.isError && <DefaultSpan>{this.state.isError}</DefaultSpan>}
                <form style={{ display: "grid" }} onSubmit={this.onSubmit.bind(this)}>
                    {getPrivacySecurityInputs(this.props).map((item) =>
                        <>
                            <DefautLabel>{item.lable}</DefautLabel>
                            <DefaultInput name={item.name} type={item.type} value={item.value} />
                        </>
                    )}
                    <PrimaryButton style={{ marginTop: "2%" }}>Update</PrimaryButton>
                </form>

            </TabBody>}
            {this.state.isLoading && <TabBody>Updating....</TabBody>}
        </Tab>;
    }
}


const mapStateToProps = (state) => {
    return {
        password: state.password
    };
};
const mapDispachToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({ updateSettings }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispachToProps)(PrivacyAndSecurity);