/**
 * 메인 컨테이너 구조 정의
 * @class MainContainer
 * @author whfkdakf75@sbs.co.kr
 * @aIframe : iframe 사용시 fix parent id 정의
 */
class MainContainer extends Base {
    constructor(parentId, iframe) {
        super();

        this.target = $(`#${parentId}`);

        this.id = {
            self: 'cnbc-admin-main-self',
            top: 'cnbc-admin-main-top',
            content : {
                left : {
                    popular : 'cnbc-admin-main-content-left-popular',
                    ceo : 'cnbc-admin-main-content-left-ceo',
                    program : 'cnbc-admin-main-content-left-program',
                    premium : 'cnbc-admin-main-content-left-premium'
                },
                right : {
                    market : 'cnbc-admin-main-content-right-market',
                    promotion : 'cnbc-admin-main-content-right-promotion',
                    financial : 'cnbc-admin-main-content-right-financial',
                    ad : 'cnbc-admin-main-content-right-ad',
                    hotIssue : 'cnbc-admin-main-content-right-hotIssue',
                    contact : 'cnbc-admin-main-content-right-contact'
                }
            },
            ad :{
                left : {
                    middle : 'cnbc-admin-main-ad-left-middle',
                    bottom : 'cnbc-admin-main-ad-left-bottom'
                },
                right : {
                    top : 'cnbc-admin-main-ad-right-top',
                    middle : {
                        top : 'cnbc-admin-main-ad-right-middle-top',
                        middle : 'cnbc-admin-main-ad-right-middle-bottom'
                    },
                    bottom : 'cnbc-admin-main-ad-right-bottom'
                }
            },
            fix : {
                top : 'cnbc-admin-main-fix-top',
                popular : 'cnbc-admin-main-fix-popular',
                ceo : 'cnbc-admin-main-fix-ceo',
                program : 'cnbc-admin-main-fix-program',
                premium : 'cnbc-admin-main-fix-premium',
                financial : 'cnbc-admin-main-fix-financial',
                hotIssue : 'cnbc-admin-main-fix-hotIssue',
                iframe : iframe
            }
        };

        this.model = {};

        this.bind = () => {
            let getBaseTemplate = ()=> {
                let baseTemplate = `<div id="container">
                    <div id="${this.id.self}">
                        <div class="cnbc_main_quick">
                            <h2 class="cmq_tit">SBS FAMILY</h2>
                            <ul class="cmq_list">
                                <li><a href="${CNBC_ADMIN_GLOBAL.CONFIG.URL.SBS}" target="_top">SBS</a></li>
                                <li><a href="${CNBC_ADMIN_GLOBAL.CONFIG.URL.PLUS}" target="_top">PLUS</a></li>
                                <li><a href="${CNBC_ADMIN_GLOBAL.CONFIG.URL.SPORTS}" target="_top">SPORTS</a></li>
                                <li><a href="${CNBC_ADMIN_GLOBAL.CONFIG.URL.GOLF}" target="_top">GOLF</a></li>
                                <li><a href="${CNBC_ADMIN_GLOBAL.CONFIG.URL.CNBC}" target="_top">CNBC</a></li>
                                <li><a href="${CNBC_ADMIN_GLOBAL.CONFIG.URL.FUNE}" target="_top">funE</a></li>
                                <li><a href="${CNBC_ADMIN_GLOBAL.CONFIG.URL.MTV}" target="_top">MTV</a></li>
                                <li><a href="${CNBC_ADMIN_GLOBAL.CONFIG.URL.NICK}" target="_top">nick</a></li>
                            </ul>
                        </div>
                        <div class="content_top">
                            <div class="cnbc-admin-fix-top" id="${this.id.fix.top}">
                                <input type="image" class="cnbc-admin-fix" src="/images/icon-repairs.png">
                            </div>
                            <div id="${this.id.top}"></div>
                        </div>
                        <div id="content" class="main_content_w">
                            <div class="cont_left">
                                <div class="cl_top_cont">
                                    <div class="cnbc-admin-fix-popular" id="${this.id.fix.popular}">
                                        <input type="image" class="cnbc-admin-fix" src="/images/icon-repairs.png">
                                    </div>
                                    <div id="${this.id.content.left.popular}"></div>
                                    
                                    <div class="cnbc-admin-fix-ceo" id="${this.id.fix.ceo}">
                                        <input type="image" class="cnbc-admin-fix" src="/images/icon-repairs.png">
                                    </div>
                                    <div id="${this.id.content.left.ceo}"></div>    
                                </div>
                                <div class="top_news_bn">
                                    <div id="${this.id.ad.left.middle}"></div>
                                </div>
                                <div class="cl_bottom_cont">
                                    <div class="cnbc-admin-fix-program" id="${this.id.fix.program}">
                                        <input type="image" class="cnbc-admin-fix" src="/images/icon-repairs.png">
                                    </div>
                                    <div id="${this.id.content.left.program}"></div>
                                </div>
                                <div class="cl_center_cont">
                                    <div class="cnbc-admin-fix-premium" id="${this.id.fix.premium}">
                                        <input type="image" class="cnbc-admin-fix" src="/images/icon-repairs.png">
                                    </div>
                                    <div id="${this.id.content.left.premium}"></div>
                                </div>
                               <ul class="cl_bottom_ad">
                                    <div id="${this.id.ad.left.bottom}"></div>
                                </ul>
                            </div>
                            <div class="cont_right">
                                <div class="cr_market_data">
                                    <div id="${this.id.content.right.market}"></div>
                                </div>
                                <div class="cr_promotion_bnr">
                                    <div id="${this.id.ad.right.top}"></div>
                                </div>
                                <div class="cr_financial">
                                    <div id="${this.id.ad.right.middle.top}"></div>
                                </div>
                                <div class="cr_financial">
                                    <div class="cnbc-admin-fix-financial" id="${this.id.fix.financial}">
                                        <input type="image" class="cnbc-admin-fix" src="/images/icon-repairs.png">
                                    </div>
                                    <div id="${this.id.content.right.financial}"></div>
                                </div>
                                <div class="cr_ad_bnr">
                                    <div id="${this.id.ad.right.middle.bottom}"></div>
                                </div>
                                <div class="cr_hot_issue">
                                    <div class="cnbc-admin-fix-hotIssue" id="${this.id.fix.hotIssue}">
                                        <input type="image" class="cnbc-admin-fix" src="/images/icon-repairs.png">
                                    </div>
                                    <div id="${this.id.content.right.hotIssue}"></div>
                                </div>
                                <div class="cr_contact_cnbc">
                                    <h2 class="crcc_headtitle"><span class="icn"><i class="ir">SBSCNBC를 만나는 다양한 방법</i></span><i class="ht_topbar"></i></h2>
                                    <ul class="crcc_list">
                                        <li class="crcc_cont_facebook"><a href="https://www.facebook.com/SBSCNBC" class="crcc_link" target="_blank" title="SBSCNBC 페이스북으로 새창이동">페이스북<i class="icn"></i></a></li>
                                        <li class="crcc_cont_npost"><a href="http://m.post.naver.com/my.nhn?memberNo=7497529" class="crcc_link" target="_blank" title="SBSCNBC 네이버포스트로 새창이동">네이버포스트<i class="icn"></i></a></li>
                                        <li class="crcc_cont_mapp"><a href="https://itunes.apple.com/kr/app/sbs-cnbc/id425106890?mt=8" class="crcc_link" target="_blank" title="SBSCNBC 모바일앱 다운 페이지로 새창이동">네이버TV캐스트<i class="icn"></i></a></li>
                                        <li class="crcc_cont_naver"><a href="http://newsstand.naver.com/374" class="crcc_link" target="_blank" title="네이버 뉴스스탠드 SBSCNBC 페이지로 새창이동">네이버뉴스스텐드<i class="icn"></i></a></li>
                                    </ul>
                                </div>
                                <div id="${this.id.ad.right.bottom}" ></div>
                            </div>
                            <i class="cont_right_border"></i>
                        </div>
                    </div>
                </div>`;

                return baseTemplate;
            }

            this.target.html(`
                ${getBaseTemplate()}
            `);

            this.target.off();

            // top fix click event
            this.target.on('click', `#${this.id.fix.top}`, (event) => {
                parent.$(`#${this.id.fix.iframe.top}`).trigger('click');
            });
            // popular fix click event
            this.target.on('click', `#${this.id.fix.popular}`, (event) => {
                alert('popular');
            });
            // ceo fix click event
            this.target.on('click', `#${this.id.fix.ceo}`, (event) => {
                alert('ceo');
            });
            // program fix click event
            this.target.on('click', `#${this.id.fix.program}`, (event) => {
                alert('program');
            });
            // premium fix click event
            this.target.on('click', `#${this.id.fix.premium}`, (event) => {
                alert('premium');
            });
            // financial fix click event
            this.target.on('click', `#${this.id.fix.financial}`, (event) => {
                alert('financial');
            });
            // hotIssue fix click event
            this.target.on('click', `#${this.id.fix.hotIssue}`, (event) => {
                alert('hotIssue');
            });
        };
    }

    initialize() {
        this.bind();
        super.initialize();
    }

    render() {
        let bindMedel = () => {
            this.model.top = new MainTop(this.id.top);
            this.model.top.initialize();
            this.model.top.render();

            this.model.popular = new MainPopular(this.id.content.left.popular);
            this.model.popular.initialize();
            this.model.popular.render();

            this.model.ceo = new MainCEO(this.id.content.left.ceo);
            this.model.ceo.initialize();
            this.model.ceo.render();

            this.model.program = new MainProgram(this.id.content.left.program);
            this.model.program.initialize();
            this.model.program.render();

            this.model.premium = new MainPremium(this.id.content.left.premium);
            this.model.premium.initialize();
            this.model.premium.render();

            this.model.ad = new MainAD(this.id.ad);
            this.model.ad.initialize();
            this.model.ad.render();

            this.model.market = new MainMarket(this.id.content.right.market);
            this.model.market.initialize();
            this.model.market.render();

            this.model.financial = new MainFinancial(this.id.content.right.financial);
            this.model.financial.initialize();
            this.model.financial.render();

            this.model.hotIssue = new MainHotIssue(this.id.content.right.hotIssue);
            this.model.hotIssue.initialize();
            this.model.hotIssue.render();

            super.render();
        }

        // 데이터 확인
        if(!_.isEmpty(parent.CNBC_ADMIN_GLOBAL.DATA.HTTP.MAIN)) {
            CNBC_ADMIN_GLOBAL.DATA.HTTP.MAIN = parent.CNBC_ADMIN_GLOBAL.DATA.HTTP.MAIN;
            bindMedel();
        }
        else {
            let httpService = new HttpService('/api/cnbc/home/index.json');
            httpService.callback.succeeded = (data) => {
                CNBC_ADMIN_GLOBAL.DATA.HTTP.MAIN = data;
                bindMedel();
            };

            httpService.callback.failed = (error) => {
                alert(`정보를 불러오는데 실패하였습니다.(${error})`);
            };
            httpService.getData();
        }


    }
}