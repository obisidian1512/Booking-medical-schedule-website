import React, { Component } from 'react';
import './HomeHeader.scss'
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils/constant';
import { changeLanguageApp } from '../../store/actions/appActions';


class HomeHeader extends Component {

    changeLanguage = (langague) =>{
        this.props.changeLanguageAppRedux(langague);
    }
    //
    render() {

        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                    
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <div className="header-logo "></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id = "home-header.speciality"></FormattedMessage></b></div>
                                <div className='subs-title'><FormattedMessage id = "home-header.searchdoctor"></FormattedMessage></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id = "home-header.health-facility"></FormattedMessage></b></div>
                                <div className='subs-title'><FormattedMessage id ="home-header.select-room"></FormattedMessage></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.doctor"></FormattedMessage></b></div>
                                <div className='subs-title'><FormattedMessage id = "home-header.select-doctor"></FormattedMessage></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.fee"></FormattedMessage></b></div>
                                <div className='subs-title'><FormattedMessage id ="home-header.overall-check"></FormattedMessage></div>
                            </div>

                        </div>
                        <div className='right-content'>
                            <div className='support'><i class="fas fa-question"></i> <FormattedMessage id ="home-header.support"></FormattedMessage></div>
                            <div className={this.props.language === 'vi' ? "language-vi active" : "language-vi"}><span onClick ={() => this.changeLanguage(LANGUAGES.VI)} >VN</span></div>
                            <div className={this.props.language === 'en' ? 'language-en active' : 'language-en'}><span onClick ={() => this.changeLanguage(LANGUAGES.EN)} >EN</span></div>
                        </div>
                        </div>
                    <div className='home-header-banner'>
                        <div className='content-up'>
                            <div className='title1'><FormattedMessage id ="banner.title1"></FormattedMessage></div>
                            <div className='title2'><FormattedMessage id = "banner.title2"></FormattedMessage></div>
                            <div className='search'>
                                <i class="fas fa-search"></i>
                                <input placeholder='Tìm chuyên khoa khám bệnh'></input></div>
                            <div className='options'></div>
                        </div>
                        <div className='content-down'>
                            <div className = 'option-child'>
                                <div className ='icon-child'><i class="far fa-hospital"></i></div>
                                <div className='text-child'><FormattedMessage id = "banner.specialist-examination"></FormattedMessage></div>
                            </div>
                            <div className = 'option-child'>
                                <div className ='icon-child'><i class="fas fa-video"></i></div>
                                <div className='text-child'><FormattedMessage id = "banner.examination-online"></FormattedMessage></div>
                            </div>
                            <div className = 'option-child'>
                                <div className ='icon-child'><i class="fas fa-notes-medical"></i></div>
                                <div className='text-child'><FormattedMessage id ="banner.examination-overall"></FormattedMessage></div>
                            </div>
                            <div className = 'option-child'>
                                <div className ='icon-child'><i class="fas fa-x-ray"></i></div>
                                <div className='text-child'><FormattedMessage id ="banner.health-test"></FormattedMessage></div>
                            </div>
                            <div className = 'option-child'>
                                <div className ='icon-child'><i class="fas fa-user-md"></i></div>
                                <div className='text-child'><FormattedMessage id ="banner.health-psy"></FormattedMessage></div>
                            </div>
                            <div className = 'option-child'>
                                <div className ='icon-child'><i class="fas fa-plus-square"></i></div>
                                <div className='text-child'><FormattedMessage id ="banner.tooth-test"></FormattedMessage></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </React.Fragment>



        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language:state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux : (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
