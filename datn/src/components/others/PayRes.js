import React from 'react'

const PayRes = () => {
  return (
    <div id="contents">
        <div className="root_width mobile_width">
          <div className="path">
            <span>Trang Hiện Tại</span>
            <ol>
              <li><a href="/">Trang Chủ</a></li>
              <li className="Current-Page">
                <strong>Đặt hàng/ Thanh toán</strong>
              </li>
            </ol>
          </div>
          <form id="frm_order_act" name="frm_order_act" action method="post" target="_self" encType="multipart/form-data">
            <input id="move_order_after" name="move_order_after" defaultValue="/order/order_result.html" type="hidden" />
            <input id="is_crowd_funding" name="is_crowd_funding" defaultValue="F" type="hidden" />
            <input id="member_group_price" name="member_group_price" defaultValue={0} type="hidden" />
            <input id="mileage_generate3" name="mileage_generate3" defaultValue={0} type="hidden" />
            <input id="total_group_dc" name="total_group_dc" defaultValue={0} type="hidden" />
            <input id="total_plusapp_mileage_price" name="total_plusapp_mileage_price" defaultValue type="hidden" />
            <input id="basket_type" name="basket_type" defaultValue="all_buy" type="hidden" />
            <input id="productPeriod" name="productPeriod" defaultValue type="hidden" />
            <input id="member_id" name="member_id" defaultValue="2326541481@g" type="hidden" />
            <input id="delvType" name="delvType" defaultValue="B" type="hidden" />
            <input id="isUpdateMemberEmailOrder" name="isUpdateMemberEmailOrder" defaultValue="F" type="hidden" />
            <input id="isSimplyOrderForm" name="isSimplyOrderForm" defaultValue="F" type="hidden" />
            <input id="__ocountry" name="__ocountry" defaultValue type="hidden" />
            <input id="__oaddr1" name="__oaddr1" defaultValue type="hidden" />
            <input id="__ocity" name="__ocity" defaultValue type="hidden" />
            <input id="__ostate" name="__ostate" defaultValue type="hidden" />
            <input id="sSinameZhAreaWord" name="sSinameZhAreaWord" defaultValue="省/市" type="hidden" />
            <input id="sSinameTwAreaWord" name="sSinameTwAreaWord" defaultValue="市/縣" type="hidden" />
            <input id="sGunameZhAreaWord" name="sGunameZhAreaWord" defaultValue="区" type="hidden" />
            <input id="sGunameTwAreaWord" name="sGunameTwAreaWord" defaultValue="區/市" type="hidden" />
            <input id="__addr1" name="__addr1" defaultValue="P. Phước Long B" type="hidden" />
            <input id="__city_name" name="__city_name" defaultValue="Thành Phố Thủ Đức" type="hidden" />
            <input id="__state_name" name="__state_name" defaultValue="TP. Hồ Chí Minh" type="hidden" />
            <input id="__isRuleBasedAddrForm" name="__isRuleBasedAddrForm" defaultValue="F" type="hidden" />
            <input id="message_autosave" name="message_autosave" defaultValue="F" type="hidden" />
            <input id="hope_date" name="hope_date" defaultValue type="hidden" />
            <input id="hope_ship_begin_time" name="hope_ship_begin_time" defaultValue type="hidden" />
            <input id="hope_ship_end_time" name="hope_ship_end_time" defaultValue type="hidden" />
            <input id="is_fast_shipping_time" name="is_fast_shipping_time" defaultValue type="hidden" />
            <input id="eguarantee_id" name="eguarantee_id" defaultValue="F" type="hidden" />
            <input id="is_hope_shipping" name="is_hope_shipping" defaultValue="F" type="hidden" />
            <input id="is_fast_shipping" name="is_fast_shipping" defaultValue type="hidden" />
            <input id="fCountryCd" name="fCountryCd" defaultValue="VN" type="hidden" />
            <input id="sCpnPrd" name="sCpnPrd" defaultValue={0} type="hidden" />
            <input id="sCpnOrd" name="sCpnOrd" defaultValue={0} type="hidden" />
            <input id="coupon_saving" name="coupon_saving" defaultValue={0} type="hidden" />
            <input id="coupon_discount" name="coupon_discount" defaultValue={0} type="hidden" />
            <input id="coupon_shipfee" name="coupon_shipfee" defaultValue={0} type="hidden" />
            <input id="is_used_with_mileage" name="is_used_with_mileage" defaultValue="F" type="hidden" />
            <input id="is_used_with_member_discount" name="is_used_with_member_discount" defaultValue="F" type="hidden" />
            <input id="is_used_with_coupon" name="is_used_with_coupon" defaultValue="F" type="hidden" />
            <input id="is_no_ozipcode" name="is_no_ozipcode" defaultValue="F" type="hidden" />
            <input id="is_no_rzipcode" name="is_no_rzipcode" defaultValue="F" type="hidden" />
            <input id="is_cashreceipt_displayed_on_screen" name="is_cashreceipt_displayed_on_screen" defaultValue="F" type="hidden" />
            <input id="is_taxrequest_displayed_on_screen" name="is_taxrequest_displayed_on_screen" defaultValue="F" type="hidden" />
            <input id="app_scheme" name="app_scheme" defaultValue type="hidden" />
            <input id="is_store" name="is_store" defaultValue type="hidden" />
            <input id="defer_commission" name="defer_commission" defaultValue={0} type="hidden" />
            <input id="order_form_simple_type" name="order_form_simple_type" defaultValue="T" type="hidden" />
            <input id="information_agreement_check_val" name="information_agreement_check_val" defaultValue="F" type="hidden" />
            <input id="consignment_agreement_check_val" name="consignment_agreement_check_val" defaultValue="F" type="hidden" />
            <input id="basket_sync_flag" name="basket_sync_flag" defaultValue="F" type="hidden" />
            <input id="gift_selected_item" name="gift_selected_item" defaultValue type="hidden" />
            <input id="app_discount_data" name="app_discount_data" defaultValue type="hidden" />
            <input id="is_shipping_address_readonly_by_app" name="is_shipping_address_readonly_by_app" defaultValue type="hidden" />
            <input id="is_app_delivery" name="is_app_delivery" defaultValue="F" type="hidden" />
            <input id="app_delivery_data" name="app_delivery_data" defaultValue type="hidden" />
            <input id="is_available_shipping_company_by_app" name="is_available_shipping_company_by_app" defaultValue type="hidden" />
            <input id="is_multi_delivery" name="is_multi_delivery" defaultValue="F" type="hidden" />
            <input id="is_no_shipping_required" name="is_no_shipping_required" defaultValue="F" type="hidden" />
            <input id="use_shipping_manager" name="use_shipping_manager" defaultValue="F" type="hidden" />
            <input id="shipping_manager_data" name="shipping_manager_data" defaultValue="{&quot;reason_for_not_calculating_shipping_fee&quot;:null,&quot;shipping_manager_shipping_fees&quot;:null,&quot;selected_shipping_manager_shipping_fees&quot;:null,&quot;shipping_manager_shipping_fees_response&quot;:null,&quot;shipping_manager_shipping_fee_detail&quot;:null}" type="hidden" />
            <input id="selected_shipping_manager_data" name="selected_shipping_manager_data" defaultValue="null" type="hidden" />
            <input id="pagetype" name="pagetype" defaultValue type="hidden" />
            <input id="is_direct_buy" name="is_direct_buy" defaultValue="F" type="hidden" />
            <input id="is_subscription_invoice" name="is_subscription_invoice" defaultValue="F" type="hidden" />
            <input id="order_enable" name="order_enable" defaultValue type="hidden" />
            <input id="use_tax_manager" name="use_tax_manager" defaultValue="F" type="hidden" />
            <input id="use_external_tax_app" name="use_external_tax_app" defaultValue="NA" type="hidden" />
            <input id="app_tax_data" name="app_tax_data" defaultValue type="hidden" />
            <input id="include_tax_in_prices" name="include_tax_in_prices" defaultValue="T" type="hidden" />
            <input id="total_tax_raw" name="total_tax_raw" defaultValue={0} type="hidden" />
            <input id="jwt" name="jwt" defaultValue type="hidden" />
            <input id="service_code" name="service_code" defaultValue type="hidden" />
            <input id="used_card" name="used_card" defaultValue type="hidden" />
            <input id="sEleID" name="sEleID" defaultValue="total_price||productPeriod||ophone1_1||ophone1_2||ophone1_3||ophone2_1||ophone2_2||ophone2_3||ophone1_ex1||ophone1_ex2||ophone2_ex1||ophone2_ex2||basket_type||oname||oname2||english_oname||english_name||english_name2||input_mile||input_deposit||hope_date||hope_ship_begin_time||hope_ship_end_time||is_fast_shipping_time||fname||fname2||paymethod||eguarantee_flag||eguarantee_ssn1||eguarantee_ssn2||eguarantee_year||eguarantee_month||eguarantee_day||eguarantee_user_gender||eguarantee_personal_agreement||question||question_passwd||delvType||f_country||fzipcode||faddress||fphone1_1||fphone1_2||fphone1_3||fphone1_4||fphone1_ex1||fphone1_ex2||fphone2_ex1||fphone2_ex2||fphone2||fmessage||fmessage_select||rname||rzipcode1||rzipcode2||raddr1||raddr2||rphone1_1||rphone1_2||rphone1_3||rphone2_1||rphone2_2||rphone2_3||omessage||omessage_select||ozipcode1||ozipcode2||oaddr1||oaddr2||oemail||oemail1||oemail2||ocity||ostate||ozipcode||eguarantee_id||coupon_discount||coupon_saving||order_password||is_fast_shipping||fCountryCd||message_autosave||oa_content||gift_use_flag||pname||bankaccount||regno1||regno2||escrow_agreement0||addr_paymethod||member_group_price||chk_purchase_agreement||total_plusapp_mileage_price||mileage_generate3||is_hope_shipping||sCpnPrd||sCpnOrd||coupon_shipfee||np_req_tx_id||np_save_rate||np_save_rate_add||np_use_amt||np_mileage_use_amount||np_cash_use_amount||np_total_use_amount||np_balance_amt||np_use||np_sig||flagEscrowUse||flagEscrowIcashUse||add_ship_fee||total_group_dc||pron_name||pron_name2||pron_oname||faddress2||si_gun_dosi||ju_do||is_set_product||basket_prd_no||move_order_after||is_no_ozipcode||is_no_rzipcode||__ocountry||__oaddr1||__ocity||__ostate||__addr1||__city_name||__state_name||__isRuleBasedAddrForm||sSinameZhAreaWord||sSinameTwAreaWord||sGunameZhAreaWord||sGunameTwAreaWord||delivcompany||is_store||cashreceipt_user_type||cashreceipt_user_type2||cashreceipt_regist||cashreceipt_user_mobile1||cashreceipt_user_mobile2||cashreceipt_user_mobile3||cashreceipt_reg_no||is_cashreceipt_displayed_on_screen||tax_request_regist||tax_request_name||tax_request_phone1||tax_request_phone2||tax_request_phone3||tax_request_email1||tax_request_email2||tax_request_company_type||tax_request_company_regno||tax_request_company_name||tax_request_president_name||tax_request_zipcode||tax_request_address1||tax_request_address2||tax_request_company_condition||tax_request_company_line||is_taxrequest_displayed_on_screen||isSimplyOrderForm||use_safe_phone||app_scheme||isUpdateMemberEmailOrder||defer_commission||defer_p_name||order_form_simple_type||gmo_order_id||gmo_transaction_id||receiver_id_card_key||receiver_id_card_type||simple_join_is_check||simple_join_agree_use_info||etc_subparam_member_id||etc_subparam_email1||etc_subparam_passwd||etc_subparam_user_passwd_confirm||etc_subparam_passwd_type||etc_subparam_is_sms||etc_subparam_is_news_mail||information_agreement_check_val||consignment_agreement_check_val||remind_id||remind_code||shipping_additional_fee_show||shipping_additional_fee_hide||shipping_additional_fee_name_show||save_paymethod||allat_account_nm||basket_sync_flag||member_id||input_pointfy||set_main_address0||app_discount_data||is_shipping_address_readonly_by_app||is_app_delivery||app_delivery_data||is_available_shipping_company_by_app||is_direct_buy||is_subscription_invoice||subscription_start_date||order_enable||is_crowd_funding||is_multi_delivery||is_no_shipping_required||use_tax_manager||use_external_tax_app||app_tax_data||include_tax_in_prices||total_tax_raw||pagetype||jwt||service_code||used_card||use_shipping_manager||shipping_manager_data||selected_shipping_manager_data||hope_shipping_date||nm_agreement||nm_agreement0||sPrdName||gift_selected_item||is_used_with_mileage||is_used_with_member_discount||is_used_with_coupon" type="hidden" />
            <div id="mCafe24Order" className="xans-element- xans-order xans-order-formglobal typeHeader xans-record-">
              <div className="beFore_confirm">
                <div id="ec-jigsaw-area-productdetail" />
                <div id="ec-jigsaw-area-orderProduct" className="ec-base-fold eToggle selected">
                  <div id="ec-jigsaw-title-orderProduct" className="title">
                    <h2>Sản phẩm đã chọn</h2>
                    <span id="ec-jigsaw-heading-orderProduct" className="txtStrong gRight" style={{display: 'none'}}>Tổng 2 sản phẩm</span>
                  </div>
                  <div className="contents">
                    {/* app tag */}
                    <div id="ec-orderform-orderProduct-head" />
                    <div className="orderArea">
                      <div className="xans-element- xans-order xans-order-oversealist">
                        <div className="ec-base-prdInfo xans-record-">
                          <div className="prdBox">
                            <div className="displaynone">
                              <input id="chk_order_cancel_list0" name="chk_order_cancel_list_oversea0" defaultValue="391:000A:F:114109" type="checkbox" disabled />
                            </div>
                            <div className="thumbnail">
                              <a href="/product/detail.html?product_no=391&cate_no=1"><img src="./assets/imgs/a719d1afa7582b41d123f62fce50897d.jpg" alt="" width={90} height={90} /></a>
                            </div>
                            <div className="description">
                              <strong className="prdName" title="Product">
                                <a href="/product/nồi-điện-đa-năng-locklock-ejp116blk-08-lít/391/category/1/" className="ec-product-name">Nồi điện đa năng Lock&amp;Lock EJP116BLK
                                  (0.8 Lít)</a></strong>
                              <ul className="info">
                                <li title="Expiration Date" className="displaynone">
                                  Ngày Hết Hạn
                                </li>
                                <li title="Option">
                                  <p className="option displaynone" />
                                </li>
                                <li>Số lượng: 1 sản phẩm</li>
                                <li>
                                  <span id>Giá sản phẩm: đ888,000 </span>
                                  <span className="displaynone">()</span>
                                </li>
                                <li id className>
                                  Giảm giá:
                                  <span className="txtWarn">-đ<span id>222,000</span>
                                  </span>
                                  <span className="txtWarn displaynone">()</span>
                                </li>
                                <li id="product_mileage0" className="mileage displaynone" title="Reward Points">
                                  -
                                </li>
                                <li className="displaynone">
                                  Khối lượng : 1.60kg * 1 = 1.60kg
                                </li>
                              </ul>
                            </div>
                            <button type="button" className="btnRemove" id="btn_product_one_delete_id0" prd="391:000A:F:114109" set_prd_type>
                              Xóa
                            </button>
                          </div>
                        </div>
                        <div className="ec-base-prdInfo xans-record-">
                          <div className="prdBox">
                            <div className="displaynone">
                              <input id="chk_order_cancel_list1" name="chk_order_cancel_list_oversea1" defaultValue="713:000A:F:114107" type="checkbox" disabled />
                            </div>
                            <div className="thumbnail">
                              <a href="/product/detail.html?product_no=713&cate_no=1"><img src="./assets/imgs/a719d1afa7582b41d123f62fce50897d.jpg" alt="" width={90} height={90} /></a>
                            </div>
                            <div className="description">
                              <strong className="prdName" title="Product">
                                <a href="/product/nồi-cơm-điện-locklock-compact-rice-cooker-12l-màu-đen-ejr346blk/713/category/1/" className="ec-product-name">Nồi cơm điện Lock&amp;Lock Compact Rice
                                  Cooker 1.2L màu đen EJR346BLK</a></strong>
                              <ul className="info">
                                <li title="Expiration Date" className="displaynone">
                                  Ngày Hết Hạn
                                </li>
                                <li title="Option">
                                  <p className="option displaynone" />
                                </li>
                                <li>Số lượng: 1 sản phẩm</li>
                                <li>
                                  <span id>Giá sản phẩm: đ1,970,000 </span>
                                  <span className="displaynone">()</span>
                                </li>
                                <li id className>
                                  Giảm giá:
                                  <span className="txtWarn">-đ<span id>493,000</span>
                                  </span>
                                  <span className="txtWarn displaynone">()</span>
                                </li>
                                <li id="product_mileage1" className="mileage displaynone" title="Reward Points">
                                  -
                                </li>
                                <li className="displaynone">
                                  Khối lượng : 5.50kg * 1 = 5.50kg
                                </li>
                              </ul>
                            </div>
                            <button type="button" className="btnRemove" id="btn_product_one_delete_id1" prd="713:000A:F:114107" set_prd_type>
                              Xóa
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="totalWeight displaynone">
                      Tổng khối lượng : <span>7.10kg</span>
                    </div>
                    {/* app tag */}
                    <div id="ec-orderform-orderProduct-tail" />
                  </div>
                  <div id="ec-shop-directbuy-order-product-info" className="displaynone" />
                </div>
                <div className="billingNshipping">
                  {/* 주문자정보 */}
                  <div id="ec-jigsaw-area-billingInfo" className="ec-base-fold eToggle selected displaynone">
                    <div id="ec-jigsaw-title-billingInfo" className="title">
                      <h2>Thông tin đơn hàng</h2>
                      <span id="ec-jigsaw-heading-billingInfo" className="txtEm gRight" />
                    </div>
                    <div className="contents ec-shop-ordererForm">
                      <div className="ec-base-table typeWrite">
                        <table border={1}>
                          <caption>
                            Nhập Thông tin đơn hàng
                          </caption>
                          <colgroup>
                            <col style={{width: '102px'}} />
                            <col style={{width: 'auto'}} />
                          </colgroup>
                          <tbody className="address_form">
                            <tr>
                              <th scope="row">
                                Người đặt hàng
                                <span className="icoRequired">Bắt buộc</span>
                              </th>
                              <td>
                                <span className="ec-base-divide"><input id="oname" name="oname" className="inputTypeText" placeholder size={15} defaultValue="Phan Minh Cảnh_0178" type="text" /></span>
                              </td>
                            </tr>
                            <tr className="ec-orderform-emailRow">
                              <th scope="row">
                                Email
                                <span className="icoRequired">Bắt buộc</span>
                              </th>
                              <td>
                                <div className="ec-base-mail">
                                  <input id="oemail1" name="oemail1" className="mailId" defaultValue="canh2057az" type="text" />@<input id="oemail2" name="oemail2" className="mailAddress" defaultValue="gmail.com" type="text" />
                                </div>
                                <p className="ec-base-help">
                                  Trạng thái xử lý đơn hàng sẽ được gửi qua
                                  email.<br />Vui lòng nhập địa chỉ email sẽ
                                  nhận tin.
                                </p>
                              </td>
                            </tr>
                            <tr className="displaynone">
                              <th scope="row">
                                Số điện thoại
                                <span className="displaynone"><span className="icoRequired">Bắt buộc</span></span>
                              </th>
                              <td />
                            </tr>
                            <tr className="displaynone">
                              <th scope="row">
                                Số ĐTDĐ
                                <span className="displaynone"><span className="icoRequired">Bắt buộc</span></span>
                              </th>
                              <td>
                                <select id="ophone2_ex1" name="ophone2_ex[]">
                                  <option value={93}>Afghanistan(+93)</option>
                                  <option value={355}>Albania(+355)</option>
                                  <option value={213}>Algeria(+213)</option>
                                  <option value={1684}>
                                    American Samoa(+1684)
                                  </option>
                                  <option value={376}>Andorra(+376)</option>
                                  <option value={244}>Angola(+244)</option>
                                  <option value={1264}>
                                    Anguilla(+1264)
                                  </option>
                                  <option value={1268}>
                                    Antigua and Barbuda(+1268)
                                  </option>
                                  <option value={54}>Argentina(+54)</option>
                                  <option value={374}>Armenia(+374)</option>
                                  <option value={297}>Aruba(+297)</option>
                                  <option value={61}>Australia(+61)</option>
                                  <option value={43}>Austria(+43)</option>
                                  <option value={994}>
                                    Azerbaijan(+994)
                                  </option>
                                  <option value={1242}>Bahamas(+1242)</option>
                                  <option value={973}>Bahrain(+973)</option>
                                  <option value={880}>
                                    Bangladesh(+880)
                                  </option>
                                  <option value={1246}>
                                    Barbados(+1246)
                                  </option>
                                  <option value={375}>Belarus(+375)</option>
                                  <option value={32}>Belgium(+32)</option>
                                  <option value={501}>Belize(+501)</option>
                                  <option value={229}>Benin(+229)</option>
                                  <option value={1441}>Bermuda(+1441)</option>
                                  <option value={975}>Bhutan(+975)</option>
                                  <option value={591}>
                                    Bolivia, Pluricountryal State of(+591)
                                  </option>
                                  <option value={387}>
                                    Bosnia and Herzegovina(+387)
                                  </option>
                                  <option value={267}>Botswana(+267)</option>
                                  <option value={55}>Brazil(+55)</option>
                                  <option value={673}>
                                    Brunei Darussalam(+673)
                                  </option>
                                  <option value={359}>Bulgaria(+359)</option>
                                  <option value={226}>
                                    Burkina Faso(+226)
                                  </option>
                                  <option value={257}>Burundi(+257)</option>
                                  <option value={855}>Cambodia(+855)</option>
                                  <option value={237}>Cameroon(+237)</option>
                                  <option value={1}>Canada(+1)</option>
                                  <option value={238}>
                                    Cape Verde(+238)
                                  </option>
                                  <option value={1345}>
                                    Cayman Islands(+1345)
                                  </option>
                                  <option value={236}>
                                    Central African Republic(+236)
                                  </option>
                                  <option value={235}>Chad(+235)</option>
                                  <option value={56}>Chile(+56)</option>
                                  <option value={86}>China(+86)</option>
                                  <option value={57}>Colombia(+57)</option>
                                  <option value={269}>Comoros(+269)</option>
                                  <option value={242}>Congo(+242)</option>
                                  <option value={243}>
                                    Congo, the Democratic Republic of
                                    the(+243)
                                  </option>
                                  <option value={682}>
                                    Cook Islands(+682)
                                  </option>
                                  <option value={506}>
                                    Costa Rica(+506)
                                  </option>
                                  <option value={225}>
                                    Cote d'Ivoire(+225)
                                  </option>
                                  <option value={385}>Croatia(+385)</option>
                                  <option value={53}>Cuba(+53)</option>
                                  <option value={357}>Cyprus(+357)</option>
                                  <option value={420}>
                                    Czech Republic(+420)
                                  </option>
                                  <option value={45}>Denmark(+45)</option>
                                  <option value={253}>Djibouti(+253)</option>
                                  <option value={1767}>
                                    Dominica(+1767)
                                  </option>
                                  <option value={1809}>
                                    Dominican Republic(+1809)
                                  </option>
                                  <option value={593}>Ecuador(+593)</option>
                                  <option value={20}>Egypt(+20)</option>
                                  <option value={503}>
                                    El Salvador(+503)
                                  </option>
                                  <option value={240}>
                                    Equatorial Guinea(+240)
                                  </option>
                                  <option value={291}>Eritrea(+291)</option>
                                  <option value={372}>Estonia(+372)</option>
                                  <option value={251}>Ethiopia(+251)</option>
                                  <option value={500}>
                                    Falkland Islands (Malvinas)(+500)
                                  </option>
                                  <option value={298}>
                                    Faroe Islands(+298)
                                  </option>
                                  <option value={679}>Fiji(+679)</option>
                                  <option value={358}>Finland(+358)</option>
                                  <option value={33}>France(+33)</option>
                                  <option value={594}>
                                    French Guiana(+594)
                                  </option>
                                  <option value={689}>
                                    French Polynesia(+689)
                                  </option>
                                  <option value={241}>Gabon(+241)</option>
                                  <option value={220}>Gambia(+220)</option>
                                  <option value={995}>Georgia(+995)</option>
                                  <option value={49}>Germany(+49)</option>
                                  <option value={233}>Ghana(+233)</option>
                                  <option value={350}>Gibraltar(+350)</option>
                                  <option value={30}>Greece(+30)</option>
                                  <option value={299}>Greenland(+299)</option>
                                  <option value={1473}>Grenada(+1473)</option>
                                  <option value={590}>
                                    Guadeloupe(+590)
                                  </option>
                                  <option value={1671}>Guam(+1671)</option>
                                  <option value={502}>Guatemala(+502)</option>
                                  <option value={224}>Guinea(+224)</option>
                                  <option value={245}>
                                    Guinea-Bissau(+245)
                                  </option>
                                  <option value={592}>Guyana(+592)</option>
                                  <option value={509}>Haiti(+509)</option>
                                  <option value={379}>
                                    Holy See (Vatican City State)(+379)
                                  </option>
                                  <option value={504}>Honduras(+504)</option>
                                  <option value={852}>Hong Kong(+852)</option>
                                  <option value={36}>Hungary(+36)</option>
                                  <option value={354}>Iceland(+354)</option>
                                  <option value={91}>India(+91)</option>
                                  <option value={62}>Indonesia(+62)</option>
                                  <option value={98}>
                                    Iran, Islamic Republic of(+98)
                                  </option>
                                  <option value={964}>Iraq(+964)</option>
                                  <option value={353}>Ireland(+353)</option>
                                  <option value={972}>Israel(+972)</option>
                                  <option value={39}>Italy(+39)</option>
                                  <option value={1876}>Jamaica(+1876)</option>
                                  <option value={81}>Japan(+81)</option>
                                  <option value={962}>Jordan(+962)</option>
                                  <option value={7}>Kazakhstan(+7)</option>
                                  <option value={254}>Kenya(+254)</option>
                                  <option value={686}>Kiribati(+686)</option>
                                  <option value={850}>
                                    Korea, Democratic People's Republic
                                    of(+850)
                                  </option>
                                  <option value={82}>
                                    Korea, Republic of(+82)
                                  </option>
                                  <option value={383}>Kosovo(+383)</option>
                                  <option value={965}>Kuwait(+965)</option>
                                  <option value={996}>
                                    Kyrgyzstan(+996)
                                  </option>
                                  <option value={856}>
                                    Lao People's Democratic Republic(+856)
                                  </option>
                                  <option value={371}>Latvia(+371)</option>
                                  <option value={961}>Lebanon(+961)</option>
                                  <option value={266}>Lesotho(+266)</option>
                                  <option value={231}>Liberia(+231)</option>
                                  <option value={218}>
                                    Libyan Arab Jamahiriya(+218)
                                  </option>
                                  <option value={423}>
                                    Liechtenstein(+423)
                                  </option>
                                  <option value={370}>Lithuania(+370)</option>
                                  <option value={352}>
                                    Luxembourg(+352)
                                  </option>
                                  <option value={853}>Macau(+853)</option>
                                  <option value={389}>
                                    Macedonia, the former Yugoslav Republic
                                    of(+389)
                                  </option>
                                  <option value={261}>
                                    Madagascar(+261)
                                  </option>
                                  <option value={265}>Malawi(+265)</option>
                                  <option value={60}>Malaysia(+60)</option>
                                  <option value={960}>Maldives(+960)</option>
                                  <option value={223}>Mali(+223)</option>
                                  <option value={356}>Malta(+356)</option>
                                  <option value={692}>
                                    Marshall Islands(+692)
                                  </option>
                                  <option value={596}>
                                    Martinique(+596)
                                  </option>
                                  <option value={222}>
                                    Mauritania(+222)
                                  </option>
                                  <option value={230}>Mauritius(+230)</option>
                                  <option value={262}>Mayotte(+262)</option>
                                  <option value={52}>Mexico(+52)</option>
                                  <option value={691}>
                                    Micronesia, Federated States of(+691)
                                  </option>
                                  <option value={373}>
                                    Moldova, Republic of(+373)
                                  </option>
                                  <option value={377}>Monaco(+377)</option>
                                  <option value={976}>Mongolia(+976)</option>
                                  <option value={382}>
                                    Montenegro(+382)
                                  </option>
                                  <option value={1664}>
                                    Montserrat(+1664)
                                  </option>
                                  <option value={212}>Morocco(+212)</option>
                                  <option value={258}>
                                    Mozambique(+258)
                                  </option>
                                  <option value={95}>Myanmar(+95)</option>
                                  <option value={264}>Namibia(+264)</option>
                                  <option value={674}>Nauru(+674)</option>
                                  <option value={977}>Nepal(+977)</option>
                                  <option value={31}>Netherlands(+31)</option>
                                  <option value={599}>
                                    Netherlands Antilles(+599)
                                  </option>
                                  <option value={687}>
                                    New Caledonia(+687)
                                  </option>
                                  <option value={64}>New Zealand(+64)</option>
                                  <option value={505}>Nicaragua(+505)</option>
                                  <option value={227}>Niger(+227)</option>
                                  <option value={234}>Nigeria(+234)</option>
                                  <option value={683}>Niue(+683)</option>
                                  <option value={672}>
                                    Norfolk Island(+672)
                                  </option>
                                  <option value={1670}>
                                    Northern Mariana Islands(+1670)
                                  </option>
                                  <option value={47}>Norway(+47)</option>
                                  <option value={968}>Oman(+968)</option>
                                  <option value={92}>Pakistan(+92)</option>
                                  <option value={680}>Palau(+680)</option>
                                  <option value={507}>Panama(+507)</option>
                                  <option value={675}>
                                    Papua New Guinea(+675)
                                  </option>
                                  <option value={595}>Paraguay(+595)</option>
                                  <option value={51}>Peru(+51)</option>
                                  <option value={63}>Philippines(+63)</option>
                                  <option value={870}>Pitcairn(+870)</option>
                                  <option value={48}>Poland(+48)</option>
                                  <option value={351}>Portugal(+351)</option>
                                  <option value={1}>Puerto Rico(+1)</option>
                                  <option value={974}>Qatar(+974)</option>
                                  <option value={262}>Reunion(+262)</option>
                                  <option value={40}>Romania(+40)</option>
                                  <option value={7}>
                                    Russian Federation(+7)
                                  </option>
                                  <option value={250}>Rwanda(+250)</option>
                                  <option value={290}>
                                    Saint Helena, Ascension and Tristan da
                                    Cunha(+290)
                                  </option>
                                  <option value={1869}>
                                    Saint Kitts and Nevis(+1869)
                                  </option>
                                  <option value={1758}>
                                    Saint Lucia(+1758)
                                  </option>
                                  <option value={508}>
                                    Saint Pierre and Miquelon(+508)
                                  </option>
                                  <option value={1784}>
                                    Saint Vincent and the Grenadines(+1784)
                                  </option>
                                  <option value={685}>Samoa(+685)</option>
                                  <option value={378}>
                                    San Marino(+378)
                                  </option>
                                  <option value={239}>
                                    Sao Tome and Principe(+239)
                                  </option>
                                  <option value={966}>
                                    Saudi Arabia(+966)
                                  </option>
                                  <option value={221}>Senegal(+221)</option>
                                  <option value={381}>Serbia(+381)</option>
                                  <option value={248}>
                                    Seychelles(+248)
                                  </option>
                                  <option value={232}>
                                    Sierra Leone(+232)
                                  </option>
                                  <option value={65}>Singapore(+65)</option>
                                  <option value={421}>Slovakia(+421)</option>
                                  <option value={386}>Slovenia(+386)</option>
                                  <option value={677}>
                                    Solomon Islands(+677)
                                  </option>
                                  <option value={252}>Somalia(+252)</option>
                                  <option value={27}>
                                    South Africa(+27)
                                  </option>
                                  <option value={34}>Spain(+34)</option>
                                  <option value={94}>Sri Lanka(+94)</option>
                                  <option value={249}>Sudan(+249)</option>
                                  <option value={597}>Suriname(+597)</option>
                                  <option value={268}>Swaziland(+268)</option>
                                  <option value={46}>Sweden(+46)</option>
                                  <option value={41}>Switzerland(+41)</option>
                                  <option value={963}>
                                    Syrian Arab Republic(+963)
                                  </option>
                                  <option value={886}>Taiwan(+886)</option>
                                  <option value={992}>
                                    Tajikistan(+992)
                                  </option>
                                  <option value={255}>
                                    Tanzania, United Republic of(+255)
                                  </option>
                                  <option value={66}>Thailand(+66)</option>
                                  <option value={670}>
                                    Timor-Leste(+670)
                                  </option>
                                  <option value={228}>Togo(+228)</option>
                                  <option value={690}>Tokelau(+690)</option>
                                  <option value={676}>Tonga(+676)</option>
                                  <option value={1868}>
                                    Trinidad and Tobago(+1868)
                                  </option>
                                  <option value={216}>Tunisia(+216)</option>
                                  <option value={90}>Turkey(+90)</option>
                                  <option value={993}>
                                    Turkmenistan(+993)
                                  </option>
                                  <option value={1649}>
                                    Turks and Caicos Islands(+1649)
                                  </option>
                                  <option value={688}>Tuvalu(+688)</option>
                                  <option value={256}>Uganda(+256)</option>
                                  <option value={380}>Ukraine(+380)</option>
                                  <option value={971}>
                                    United Arab Emirates(+971)
                                  </option>
                                  <option value={44}>
                                    United Kingdom(+44)
                                  </option>
                                  <option value={1}>United States(+1)</option>
                                  <option value={598}>Uruguay(+598)</option>
                                  <option value={998}>
                                    Uzbekistan(+998)
                                  </option>
                                  <option value={678}>Vanuatu(+678)</option>
                                  <option value={58}>
                                    Venezuela, Bolivarian Republic of(+58)
                                  </option>
                                  <option value={84} selected="selected">
                                    Viet Nam(+84)
                                  </option>
                                  <option value={1284}>
                                    Virgin Islands, British(+1284)
                                  </option>
                                  <option value={1340}>
                                    Virgin Islands, U.S.(+1340)
                                  </option>
                                  <option value={681}>
                                    Wallis and Futuna(+681)
                                  </option>
                                  <option value={967}>Yemen(+967)</option>
                                  <option value={260}>Zambia(+260)</option>
                                  <option value={263}>
                                    Zimbabwe(+263)
                                  </option></select>-<input id="ophone2_ex2" name="ophone2_ex[]" maxLength={15} size={20} defaultValue type="text" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div id="ec-jigsaw-area-shippingCompany" className="ec-area-shipping-companies ec-base-fold eToggle selected displaynone">
                    <div className="title">
                      <h2>Thông Tin Thanh Toán/Nhận Hàng</h2>
                    </div>
                    <div className="contents">
                      <div className="segment">
                        <p className="ec-base-help displaynone">
                          Chỉ có đơn vị vận chuyển thường là khả dụng vì một
                          số sản phẩm không thể nhận tại cửa hàng.
                        </p>
                        <span className="ec-base-label" id="delivery_app_list" />
                        <ul className="ec-base-help" id="deliv_info_view">
                          <li className="txtEm displaynone">
                            Đơn Vị Vận Chuyển :
                            <span id="deliv_company_price_custom_type">0</span>
                          </li>
                          <li className>
                            <div className="ec-shop-shipping_additional_fee_show displaynone">
                              <span className="txtEm">Phí Vận Chuyển : đ<span id="f_addr_total_ship_fee_id" /></span>
                            </div>
                            <div className="ec-shop-shipping_additional_fee_hide">
                              <span className="txtEm">Phí Vận Chuyển : đ<span id="f_addr_total_ship_fee_id" /></span>
                            </div>
                          </li>
                          <li className="ec-deliv-company-shipping-info">
                            Thời Gian Giao Hàng Dự Kiến :
                            <span id="deliv_company_shipping_info" />
                          </li>
                          <li>
                            Thời Gian Giao Hàng Dự Kiến :
                            <span id="deliv_company_period_custom_type" />
                          </li>
                          <li>
                            Thời gian giao hàng dự kiến :
                            <span id="deliv_company_period_custom_type" />
                          </li>
                          <li>
                            Địa Chỉ Website :
                            <span id="deliv_company_site_custom_type" />
                          </li>
                          <li />
                        </ul>
                        <ul className="ec-base-help displaynone" id="store_info_view">
                          <li className="txtEm">
                            <span id="store_receive_period" />
                          </li>
                          <li><span id="store_receive_addr" /></li>
                          <li><span id="store_main_phone" /></li>
                          <li>
                            Giờ Làm Việc :
                            <span id="store_office_hour" />
                          </li>
                          <li>
                            Chi Tiết Cửa Hàng:
                            <span id="store_receive_info" />
                          </li>
                          <li><span id="store_receive_map" /></li>
                          <li>
                            <div className="ec-base-button">
                              <button type="button" id="btnStoreListOpen" className="btnNormal mini">
                                Thông tin nơi nhận
                              </button>
                            </div>
                          </li>
                        </ul>
                        <ul className="ec-base-help" id="delivery_app_info">
                          <li className="txtEm" id="delivery_app_shipfee_div">
                            Phí Vận Chuyển :
                            <span id="delivery_app_shipfee" />
                          </li>
                          <li id="delivery_app_description_div">
                            Thời Gian Giao Hàng Dự Kiến :
                            <span id="delivery_app_description" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div id="ec-jigsaw-area-shippingInfo" className="ec-base-fold eToggle selected">
                    <div id="ec-jigsaw-title-shippingInfo" className="title">
                      <h2>Thông Tin Vận Chuyển</h2>
                    </div>
                    <div className="contents">
                      {/* app tag */}
                      <div id="ec-orderform-billingNshipping-head" />
                      <div className="shippingInfo">
                        <div id="ec-jigsaw-tab-shippingInfo" className="ec-base-tab">
                          <ul>
                            <li id="ec-jigsaw-tab-shippingInfo-recentAddress" className="selected">
                              <a href="#none">Địa chỉ gần đây</a>
                            </li>
                            <li id="ec-jigsaw-tab-shippingInfo-newAddress">
                              <a href="#none">Địa chỉ mới</a>
                            </li>
                          </ul>
                        </div>
                        <div id="ec-shippingInfo-recentAddress" className="tabCont recentShipArea">
                          <div id="ec-shippingInfo-recentAddressText" className="segment">
                            <div className="recent">
                              <strong className="name"><span className="txtEm" id="ec-shop-deliveryInfoMainLabel" /><span id="delivery_info_name">Trường học</span></strong>
                              <p className="address gBlank10">
                                <span id="delivery_info_pron_name" className="displaynone" />
                                <span id="delivery_english_name" className="displaynone" /><br /><span id="delivery_info_country">VIET NAM</span>
                                <span id="delivery_info_zipcode" /><br /><span id="delivery_info_address">Số 1</span><span id="delivery_info_address2" className="gIndent10">P. Phước Long B Thành Phố Thủ Đức TP. Hồ
                                  Chí Minh</span>
                              </p>
                              <dl className="contact">
                                <dt className>SĐT di động</dt>
                                <dd className>
                                  <span id="delivery_info_phone2_ex1">84</span>
                                  <span id="delivery_info_phone2_ex2">111111111</span>
                                </dd>
                                <dt className="displaynone">Điện thoại</dt>
                                <dd className="displaynone">
                                  <span id="delivery_info_phone1_ex1" />
                                  <span id="delivery_info_phone1_ex2" />
                                </dd>
                              </dl>
                            </div>
                            <span className="sideRight"><button type="button" id="ec-shippingInfo-showRecentAddressList" className="btnNormal mini">
                                Danh sách
                              </button></span>
                          </div>
                          {/* Shipping address */}
                          <div id="ec-shippingInfo-recentAddressList" className="segment" style={{display: 'none'}}>
                            <h3 className="heading">Chọn</h3>
                            <ul className="shippingList">
                              <li className="xans-element- xans-order xans-order-deliverylist xans-record-">
                                <strong className="name"><span id="ec-shippingInfo-recentAddressList-mainLabel-8581" className="txtEm" />
                                  Trường học
                                </strong>
                                <div className="description">
                                  <span className="choice"><input type="radio" id="ec-shippingInfo-recentAddressList-choice-select-8581" name="ec-shippingInfo-recentAddressList-choice" defaultValue={8581} className="fRadio" defaultChecked autoComplete="off" /></span>
                                  <p className="address gBlank10">
                                    <span className="displaynone"> </span>
                                    <span className="displaynone"> </span><br />
                                    VIET NAM
                                    <span className="ec-shippingInfo-recentAddressList-zipcode-8581" /><br /><span className="ec-shippingInfo-recentAddressList-addr1-8581">Số 1</span><span className="ec-shippingInfo-recentAddressList-addr2-8581 gIndent10">P. Phước Long B</span>
                                  </p>
                                  <dl className="contact">
                                    <dt>SĐT di động</dt>
                                    <dd>84-111111111</dd>
                                    <dt>Điện thoại</dt>
                                    <dd>84-</dd>
                                  </dl>
                                </div>
                                <span className="button">
                                  <button type="button" id="ec-shippingInfo-recentAddressList-choice-modify-8581" className="btnText">
                                    Chỉnh sửa
                                  </button>
                                </span>
                              </li>
                              <li className="xans-element- xans-order xans-order-deliverylist xans-record-">
                                <strong className="name"><span id="ec-shippingInfo-recentAddressList-mainLabel-8579" className="txtEm" />
                                  Trường học
                                </strong>
                                <div className="description">
                                  <span className="choice"><input type="radio" id="ec-shippingInfo-recentAddressList-choice-select-8579" name="ec-shippingInfo-recentAddressList-choice" defaultValue={8579} className="fRadio" autoComplete="off" /></span>
                                  <p className="address gBlank10">
                                    <span className="displaynone"> </span>
                                    <span className="displaynone"> </span><br />
                                    VIET NAM
                                    <span className="ec-shippingInfo-recentAddressList-zipcode-8579" /><br /><span className="ec-shippingInfo-recentAddressList-addr1-8579">Số 1</span><span className="ec-shippingInfo-recentAddressList-addr2-8579 gIndent10">P. Phước Long B</span>
                                  </p>
                                  <dl className="contact">
                                    <dt>SĐT di động</dt>
                                    <dd>84-0111111111</dd>
                                    <dt>Điện thoại</dt>
                                    <dd>84-</dd>
                                  </dl>
                                </div>
                                <span className="button">
                                  <button type="button" id="ec-shippingInfo-recentAddressList-choice-modify-8579" className="btnText">
                                    Chỉnh sửa
                                  </button>
                                </span>
                              </li>
                            </ul>
                            <span className="sideRight"><button type="button" id="ec-shippingInfo-closeRecentAddressList" className="btnBase mini">
                                Đóng
                              </button></span>
                          </div>
                        </div>
                        {/* New address */}
                      </div>
                      {/* App shipping address */}
                      <div id="ec-appshippingInfo" />
                      {/* Delivery instructions */}
                      <div className="ec-shippingInfo-shippingMessage segment unique">
                        <textarea id="fmessage" name="fmessage" fw-filter fw-label="Lời nhắn vận chuyển quốc tế" fw-msg maxLength={255} cols={70} placeholder="Vui lòng nhập ghi chú vận chuyển.(Lựa chọn)" defaultValue={""} />
                        <div className="gBlank10 displaynone">
                          <label><input id="fmessage_autosave0" name="fmessage_autosave[]" fw-filter fw-label="Lưu nhận xét về vận chuyển quốc tế" fw-msg defaultValue="T" type="checkbox" disabled /><label htmlFor="fmessage_autosave0" />[] Tự
                            Động Lưu</label>
                          <ul className="ec-base-help">
                            <li>
                              Trong mục "Nhận xét", bạn có thể để lại hướng
                              dẫn đặc biệt hoặc nhận xét về đơn hàng.
                            </li>
                            <li>
                              Nhận xét của bạn sẽ được lưu thành bài đăng
                              riêng tư. Mật khẩu tự động sẽ là 7 số cuối Mã Số
                              An Sinh Xã Hội của bạn.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="ec-jigsaw-area-subscriptionStartDate" className="ec-base-fold eToggle displaynone">
                    <div id="ec-jigsaw-title-subscriptionStartDate" className="title">
                      <h2>Ngày bắt đầu đăng ký</h2>
                      <span id="ec-jigsaw-heading-subscriptionStartDate" className="txtStrong gRight">
                        <span id="ec-subscriptionStartDate-date">
                          <span id="ec-subscriptionStartDate" />
                          <span id />Thứ
                        </span>
                      </span>
                    </div>
                    <div className="contents">
                      <div className="deliveryDate">
                        <strong className="heading">Ngày vận chuyển
                          <span className="txtEm">*</span></strong>
                        <p className="ec-base-help txtEm">
                          (Ngày thanh toán: 1 ngày trước ngày bắt đầu đăng ký
                          của từng chu kỳ)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="ec-jigsaw-area-hopeShippingDate" className="ec-base-fold eToggle displaynone">
                    <div id="ec-jigsaw-title-hopeShippingDate" className="title">
                      <h2>Chọn Ngày Vận Chuyển</h2>
                      <span id="ec-jigsaw-heading-hopeShippingDate" className="txtStrong gRight">
                        <span id="ec-hopeShippingDate-date">
                          <span id="ec-hopeShippingDate-Y" />.<span id="ec-hopeShippingDate-M" />.<span id="ec-hopeShippingDate-D" />
                          <span id="fhdateW_str" />
                        </span>
                        <span id="ec-hopeShippingDate-fast" />
                      </span>
                    </div>
                    <div className="contents">
                      <div className="segment">
                        <span className="gBlank10">//</span>
                        <p className="ec-base-help">
                          <span className="txtEm">
                            Ngày giao hàng sớm nhất có thể là ngày sau
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="ec-jigsaw-area-hopeShippingTime" className="ec-base-fold eToggle displaynone">
                    <div id="ec-jigsaw-title-hopeShippingTime" className="title">
                      <h2>Thời Gian Giao Hàng Ưu Tiên</h2>
                      <span id="ec-jigsaw-heading-hopeShippingTime" className="txtStrong gRight" />
                    </div>
                    <div className="contents">
                      <div className="segment">
                        <span className="gBlank10" />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="ec-jigsaw-area-additionalInput" className="ec-base-fold eToggle selected displaynone">
                  <div id="ec-jigsaw-title-additionalInput" className="title">
                    <h2>Thông Tin Thêm</h2>
                  </div>
                  <div className="contents">
                    {/* app tag */}
                    <div id="ec-orderform-additionalInput-head" />
                    <div className="addArea displaynone">
                      <div className="ec-base-table typeWrite">
                        <table border={1}>
                          <caption>
                            Thông Tin Thêm
                          </caption>
                          <colgroup>
                            <col style={{width: '115px'}} />
                            <col style={{width: 'auto'}} />
                          </colgroup>
                          <tbody className="xans-element- xans-order xans-order-ordadd">
                            <tr className>
                              <th scope="row"><span className /></th>
                              <td />
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="questionArea displaynone">
                      <div className="ec-base-table typeWrite">
                        <table border={1}>
                          <caption>
                            Thắc Mắc Khác
                          </caption>
                          <colgroup>
                            <col style={{width: '115px'}} />
                            <col style={{width: 'auto'}} />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th scope="row">Thắc Mắc<br />Khác<br /></th>
                              <td>
                                <textarea id="question" name="question" maxLength={255} cols={70} defaultValue={""} />
                                <p className="ec-base-help">
                                  <a href="/board/product/list.html?board_no=6" target="_blank">商品Q&amp;A</a>Tin nhắn của bạn sẽ được tự động đăng lên
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Mật Khẩu</th>
                              <td>
                                <input id="question_passwd" name="question_passwd" defaultValue type="password" />
                                <p className="ec-base-help displaynone">
                                  Bao gồm 10-16 kí tự có chứa ít nhất hai chữ
                                  cái in hoa và in thường/số/kí tự đặc biệt
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* app tag */}
                    <div id="ec-orderform-additionalInput-tail" />
                  </div>
                </div>
                <div className="wrap-mCafe clearBoth">
                  <div className="mCafe-left">
                    <div className="ec-jigsawWrapper">
                      {/* app tag */}
                      <div id="ec-orderform-discount-head" />
                      <div id="ec-jigsaw-area-discount" className="ec-base-fold eToggle selected">
                        <div id="ec-jigsaw-title-discount" className="title">
                          <h2>Nhập Thông Tin Giảm Giá/Điểm Thưởng</h2>
                          <span id="ec-jigsaw-heading-discount" className="txtStrong gRight">
                            -đ<span id="discount_total_sale_price_view">715,000</span>
                            <span className="displaynone"><span id="discount_total_sale_price_ref_view" /></span>
                          </span>
                        </div>
                        <div className="contents">
                          <div className="discountDetail" id="ec-shop-orderfom-total-benefit-view-id">
                            <strong className="heading">Giảm Giá</strong>
                            <span className="summary"><span id="total_only_mobile_sale_price_display_id" className="displaynone">(Giảm giá trên điện thoại
                                <span id="total_only_mobile_sale_price_id" className="txtEm">đ0</span>)</span><span id="mTotalOnlyMobileSaleTmp" className="displaynone">(Giảm giá trên điện thoại
                                <span className="txtEm">[TOTAL_ONLY_MOBILE_SALE]</span>)</span></span>
                            <div className="control">
                              <span className="txtEm">đ<span id="total_benefit_price_view">715,000</span></span><a href="#auto_discount_layer" className="btnNormal ec-jigsaw-eLayer">Giảm Giá Thêm</a>
                            </div>
                          </div>
                          <div className="discountDetail displaynone mCouponSelect">
                            <strong className="heading">Áp dụng mã Voucher giảm giá</strong>
                            <span className="summary">(Mã Giảm Giá
                              <span className="txtEm">0 mã giảm giá</span>)</span>
                            <div className="control">
                              <span className="txtEm">đ<span id>0</span></span><a href="#none" id="btn_coupon_select" className="btnNormal">Chọn</a>
                            </div>
                          </div>
                          <div id="mileage_use_area" className="discountDetail displaynone">
                            <strong className="heading">Điểm thưởng</strong>
                            <span className="summary">(Tiền tích lũy khả dụng
                              <span className="txtEm">0đ</span>)</span>
                            <div className="control">
                              <input type="hidden" name="ori_total_avail_mileage" id="ori_total_avail_mileage" defaultValue={0.00} />
                              <input id="input_mile" name="input_mile" className="inputTypeText" placeholder size={10} defaultValue type="text" /><button type="button" className="btnNormal" id="all_use_mileage">
                                Sử dụng tất cả
                              </button>
                            </div>
                            <ul className="ec-base-help ec-order-expandwrap">
                              <li className="ec-order-expand">
                                Số Điểm thưởng tối thiểu có thể sử dụng để
                                thanh toán là 0 đ.
                              </li>
                              <li id="mileage_max_unlimit" className>
                                Không có hạn mức tối đa khi sử dụng Điểm
                                thưởng để mua hàng.
                              </li>
                              <li id="mileage_max_limit" className="displaynone">
                                Số Điểm thưởng tối đa có thể sử dụng cho 1 lần
                                thanh toán là đ.
                              </li>
                              <li>
                                Khi bạn thanh toán chỉ với Điểm thưởng, tổng
                                giá trị đơn hàng của bạn sẽ hiện là 0. Bạn có
                                thể hoàn tất đặt hàng bằng cách nhấn vào đặt
                                hàng.
                              </li>
                              <li id="mileage_shipfee" className="displaynone">
                                Điểm thưởng không thể được dùng cho phí vận
                                chuyển.
                              </li>
                              <li id="mileage_exception" className="displaynone">
                                Bạn sẽ không nhận được Điểm thưởng khi thanh
                                toán bằng điểm thưởng.
                              </li>
                            </ul>
                          </div>
                          <div className="discountDetail displaynone">
                            <strong className="heading">Tiền tích lũy</strong>
                            <span className="summary">(Tiền tích lũy khả dụng
                              <span className="txtEm">đ</span>)</span>
                            <div className="control">
                              <input type="hidden" name="ori_total_deposit" id="ori_total_deposit" defaultValue />
                              <input id="input_deposit" name="input_deposit" className="inputTypeText" placeholder size={10} defaultValue type="text" /><button type="button" className="btnNormal" id="all_use_deposit">
                                Xem Tất Cả
                              </button>
                            </div>
                            <ul className="ec-base-help ec-order-expandwrap">
                              <li>
                                Tiền tích lũy có thể được dùng vào bất kì lúc
                                nào mà không bị hạn chế.
                              </li>
                              <li>
                                Khi bạn thanh toán chỉ với Tiền tích lũy, tổng
                                giá trị đơn hàng của bạn sẽ hiện là 0. Bạn có
                                thể hoàn tất đặt hàng bằng cách nhấn vào Thanh
                                toán.
                              </li>
                              <li>
                                Nếu bạn có yêu cầu hoàn tiền mặt Tiền tích
                                lũy, chỉ có khoản tiền khấu trừ Tiền tích lũy
                                sẽ trở nên khả dụng. Nhưng bạn có thể sử dụng
                                toàn bộ Tiền tích lũy nếu bạn hủy yêu cầu hoàn
                                tiền mặt.
                              </li>
                            </ul>
                          </div>
                          <div className="totalPay">
                            <h3 className="heading">Số tiền áp dụng</h3>
                            <strong className="txtEm">
                              -đ<span id="total_sale_price_view">715,000</span>
                              <span className="refer displaynone">(<span id="total_sale_price_ref_view" />)</span>
                            </strong>
                            <span className="displaynone" id="total_addpay_price_view">0</span>
                          </div>
                        </div>
                      </div>
                      <div id="auto_discount_layer" className="ec-base-layer typeWide theme1">
                        <h1>Tổng cộng</h1>
                        <div className="wrap">
                          <div className="title">
                            <h2>Nội dung giảm giá</h2>
                          </div>
                          <div className="contents">
                            <div className="segment">
                              <div className="ec-base-table gCellNarrow">
                                <table border={1}>
                                  <caption>
                                    Nội dung giảm giá
                                  </caption>
                                  <colgroup>
                                    <col style={{width: 'auto'}} />
                                    <col style={{width: '175px'}} />
                                  </colgroup>
                                  <tbody id="total_benefit_list">
                                    <tr className="displaynone">
                                      <th scope="row">Giảm giá dịch vụ</th>
                                      <td className="right">
                                        -<span id="mBenefitSubscriptionPayseqSale">đ0</span>
                                      </td>
                                    </tr>
                                    <tr className="ec-shop-mBenefitPeriodSale">
                                      <th scope="row">
                                        Giảm giá có thời hạn
                                      </th>
                                      <td className="right">
                                        -<span id="mBenefitPeriodSale">đ715,000</span>
                                      </td>
                                    </tr>
                                    <tr className="displaynone ec-shop-mBenefitMemberSale">
                                      <th scope="row">Giảm giá thành viên</th>
                                      <td className="right">
                                        -<span id="mBenefitMemberSale">đ0</span>
                                      </td>
                                    </tr>
                                    <tr className="displaynone ec-shop-mBenefitRebuySale">
                                      <th scope="row">
                                        Giảm giá tái đặt hàng
                                      </th>
                                      <td className="right">
                                        -<span id="mBenefitRebuySale">đ0</span>
                                      </td>
                                    </tr>
                                    <tr className="displaynone ec-shop-mBenefitBulkSale">
                                      <th scope="row">
                                        Giảm giá đặt hàng số lượng lớn
                                      </th>
                                      <td className="right">
                                        -<span id="mBenefitBulkSale">đ0</span>
                                      </td>
                                    </tr>
                                    <tr className="displaynone">
                                      <th scope="row">
                                        Về giảm giá PBP/th&gt;
                                      </th>
                                      <td className="right">
                                        -<span id="mBenefitPbpSale">đ0</span>
                                      </td>
                                    </tr>
                                    <tr className="displaynone ec-shop-mBenefitNewproductSale">
                                      <th scope="row">
                                        Giảm giá sản phẩm mới
                                      </th>
                                      <td className="right">
                                        -<span id="mBenefitNewproductSale">đ0</span>
                                      </td>
                                    </tr>
                                    <tr className="displaynone ec-shop-mBenefitSetproductSale">
                                      <th scope="row">
                                        Mức giảm cho Sản Phẩm Được Áp Dụng
                                      </th>
                                      <td className="right">
                                        -<span id="mBenefitSetproductSale">đ0</span>
                                      </td>
                                    </tr>
                                    <tr className="displaynone">
                                      <th scope="row">
                                        Giảm giá theo phương thức thanh toán
                                      </th>
                                      <td className="right">
                                        -<span id="mBenefitPaymentSale">đ</span>
                                      </td>
                                    </tr>
                                    <tr className="displaynone ec-shop-mBenefitMembergroupSale">
                                      <th scope="row">
                                        Giảm giá theo cấp bậc thành viên
                                      </th>
                                      <td className="right">
                                        -<span id="mBenefitMembergroupSale">đ0</span>
                                      </td>
                                    </tr>
                                    <tr className="displaynone ec-shop-mBenefitShipfeeSale">
                                      <th scope="row">
                                        Giảm giá phí vận chuyển
                                      </th>
                                      <td className="right">
                                        -<span id="mBenefitShipfeeSale">đ</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="totalPay gBlank10">
                                <h3 className="heading">Tổng cộng</h3>
                                <strong className="txtStrong">-đ<span id="total_benefit_price_view">715,000</span></strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button type="button" className="ec-button-offLayer btnClose">
                          Đóng
                        </button>
                      </div>
                      {/* app tag */}
                      <div id="ec-orderform-discount-tail" />
                    </div>
                    <div id="ec-jigsaw-area-paymethod" className="ec-base-fold eToggle selected">
                      <div id="ec-jigsaw-title-paymethod" className="title">
                        <h2>Lựa chọn phương thức thanh toán</h2>
                      </div>
                      <div className="contents">
                        {/* app tag */}
                        <div id="ec-orderform-paymethod-head" />
                        <div className="segment">
                          <ul className="payMethod">
                            <li className="ec-paymethod-recentArea displaynone">
                              <input type="radio" name="paymethod" id="paymethod-recent" className="fRadio" /><label htmlFor="paymethod-recent">Phương tiện thanh toán gần đây</label>
                              <div id="ec-payment-recentPaymethodText" className="inner" />
                            </li>
                            <li className="ec-paymethod-newArea selected">
                              <input type="radio" name="paymethod" id="paymethod-new" className="fRadio displaynone" defaultChecked autoComplete="off" /><label htmlFor="paymethod-new"><span className="displaynone" />Phương tiện
                                thanh toán khác</label>
                              <div className="inner">
                                <span className="ec-base-label"><input id="addr_paymethod0" name="addr_paymethod" fw-filter="isFill" fw-label="Phương thức thanh toán" fw-msg defaultValue="cod" type="radio" defaultChecked="checked" autoComplete="off" /><label htmlFor="addr_paymethod0"><img src="./assets/imgs/admin_cod_m.png" pay_name="Thanh toán khi giao hàng (COD)" pay_code="cod" pay_on_img="./assets/imgs/admin_cod_m.png" pay_off_img="./assets/imgs/admin_cod_m_disabled.png" pay_on_img_width pay_on_img_height={25} pay_off_img_width pay_off_img_height={25} style={{height: '25px'}} /></label></span>
                                <span className="ec-base-label"><input id="addr_paymethod1" name="addr_paymethod" fw-filter="isFill" fw-label="Phương thức thanh toán" fw-msg defaultValue="VNPT_CARD" type="radio" autoComplete="off" /><label htmlFor="addr_paymethod1"><img src="https://vn-pg.cafe24shop.com:6540/static/megapay/images/card.png" pay_name="Card Pay by VNPT EPAY" pay_code="VNPT_CARD" pay_on_img="https://vn-pg.cafe24shop.com:6540/static/megapay/images/card.png" pay_off_img="https://vn-pg.cafe24shop.com:6540/static/megapay/images/card.png" pay_on_img_width pay_on_img_height={22} pay_off_img_width pay_off_img_height={22} style={{height: '22px'}} /></label></span>
                                <span className="ec-base-label"><input id="addr_paymethod2" name="addr_paymethod" fw-filter="isFill" fw-label="Phương thức thanh toán" fw-msg defaultValue="VNPT_MOMO" type="radio" autoComplete="off" /><label htmlFor="addr_paymethod2"><img src="https://vn-pg.cafe24shop.com:6510/static/megapay/images/momo.png" pay_name="MomoPay by VNPT EPAY" pay_code="VNPT_MOMO" pay_on_img="https://vn-pg.cafe24shop.com:6510/static/megapay/images/momo.png" pay_off_img="https://vn-pg.cafe24shop.com:6510/static/megapay/images/momo.png" pay_on_img_width pay_on_img_height={22} pay_off_img_width pay_off_img_height={22} style={{height: '22px'}} /></label></span>
                                <span className="ec-base-label"><input id="addr_paymethod3" name="addr_paymethod" fw-filter="isFill" fw-label="Phương thức thanh toán" fw-msg defaultValue="VNPT_ATM" type="radio" autoComplete="off" /><label htmlFor="addr_paymethod3"><img src="https://vn-pg.cafe24shop.com:6530/static/megapay/images/atm.png" pay_name="ATM Pay by VNPT EPAY" pay_code="VNPT_ATM" pay_on_img="https://vn-pg.cafe24shop.com:6530/static/megapay/images/atm.png" pay_off_img="https://vn-pg.cafe24shop.com:6530/static/megapay/images/atm.png" pay_on_img_width pay_on_img_height={22} pay_off_img_width pay_off_img_height={22} style={{height: '22px'}} /></label></span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="saveArea segment unique">
                          <input type="checkbox" id="save_paymethod" name="save_paymethod" defaultValue /><label htmlFor="save_paymethod">Sử dụng phương tiện thanh toán và thông tin đã
                            nhập cho lần sau</label>
                        </div>
                        {/* app tag */}
                        <div id="ec-orderform-paymethod-tail" />
                      </div>
                    </div>
                  </div>
                  <div className="mCafe-right">
                    <div id="ec-jigsaw-area-benefit" className="ec-base-fold eToggle">
                      <div id="ec-jigsaw-title-benefit" className="title">
                        <h2>Ưu đãi điểm thưởng</h2>
                        <span id="ec-jigsaw-heading-benefit" className="txtStrong gRight"><span id="mAllMileageSum-title">0</span></span>
                      </div>
                      <div className="contents">
                        {/* app tag */}
                        <div id="ec-orderform-benefit-head" />
                        <div className="segment">
                          <div className="ec-base-table gCellNarrow">
                            <table border={1}>
                              <caption>
                                Ưu đãi điểm thưởng
                              </caption>
                              <colgroup>
                                <col style={{width: '160px'}} />
                                <col style={{width: 'auto'}} />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th scope="row">Điểm thưởng (sản phẩm)</th>
                                  <td className="right">
                                    <span id="mProductMileage" className="price">đ0đ</span>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                    Điểm thưởng (thành viên)
                                  </th>
                                  <td className="right">
                                    <span id="mMemberMileage" className="price">đ0đ</span>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Điểm thưởng (coupon)</th>
                                  <td className="right">
                                    <span id="mCouponMileage" className="price">đ0đ</span>
                                  </td>
                                </tr>
                                <tr className="displaynone">
                                  <th scope="row">
                                    Đặt hàng Plus App Điểm thưởng
                                  </th>
                                  <td className="right">
                                    <span id="mPlusappMileage" className="price">đđ</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="totalPay">
                          <h3 className="heading">Tổng (dự kiến)</h3>
                          <strong className="txtEm"><span id="mAllMileageSum">đ0đ</span></strong>
                        </div>
                        {/* app tag */}
                        <div id="ec-orderform-benefit-tail" />
                      </div>
                    </div>
                    <div id="ec-jigsaw-area-payment" className="ec-base-fold eToggle selected">
                      <div id="ec-jigsaw-title-payment" className="title">
                        <h2>Chi Tiết Đơn Hàng</h2>
                      </div>
                      <div className="contents">
                        {/* app tag */}
                        <div id="ec-orderform-payment-head" />
                        <div className="segment">
                          <div className="ec-base-table gCellNarrow">
                            <table border={1}>
                              <caption>
                                Chi Tiết Đơn Hàng
                              </caption>
                              <colgroup>
                                <col style={{width: '160px'}} />
                                <col style={{width: 'auto'}} />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th scope="row">Tổng</th>
                                  <td className="right">
                                    <span id="total_product_base_price_id">đ2,858,000</span>
                                  </td>
                                </tr>
                                <tr className="displaynone">
                                  <th scope="row">VAT</th>
                                  <td className="right">
                                    <span id="total_vat_price_id">+đ</span>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Giảm giá/Khác</th>
                                  <td className="right">
                                    -đ<span id="payment_total_sale_price_view">715,000</span>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Vận Chuyển</th>
                                  <td className="right">
                                    +<span id="total_ship_price_id">đ85,000</span>
                                  </td>
                                </tr>
                                <tr className="displaynone">
                                  <th scope="row">
                                    <span id="total_tax_name_id" />
                                  </th>
                                  <td className="right">
                                    +<span id="total_tax_id">đ0</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="totalPay gBlank10">
                            <h3 className="heading">Tổng tiền thanh toán</h3>
                            <strong className="txtStrong">
                              đ<span id="payment_total_order_sale_price_view">2,228,000</span>
                              <span className="refer displaynone">(<span id="payment_total_order_sale_price_ref_view" />)</span>
                            </strong>
                            <span className="displaynone"><input id="total_price" name="total_price" className="inputTypeText" placeholder style={{textAlign: 'right', imeMode: 'disabled', clear: 'none', border: '0px', float: 'none'}} size={10} readOnly={1} defaultValue={2228000} type="text" /></span>
                          </div>
                        </div>
                        {/* app tag */}
                        <div id="ec-orderform-payment-tail" />
                        <div className="payment-notice">
                          <p>
                            Xin lưu ý trả góp lãi suất 0% chỉ được áp dụng cho
                            một số sản phẩm nhất định. Vui lòng thanh toán các
                            sản phẩm lãi suất 0% riêng để có thể sử dụng thanh
                            toán trả góp 0%
                          </p>
                          <p>
                            Khoản thanh toán tối thiểu phải trả là tổng giá
                            trị đơn hàng chưa có phí vận chuyển.
                          </p>
                        </div>
                        <div className="ec-base-button gFull" id="orderFixItem">
                          <button type="button" className="btnSubmit" id="custom_submit">
                            Thanh toán
                          </button>
                          <button type="button" className="btnSubmit displaynone" id="btn_payment">
                            Thanh toán
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <style dangerouslySetInnerHTML={{__html: "\n                  #userStyle\n                    #mCafe24Order\n                    .ec-base-button.gFull\n                    [class*=\"btn\"] {\n                    font-size: 16px;\n                  }\n                " }} />
              <div id="ec-shop_orderConfirmLayer" className="orderConfirmLayer">
                <div className="ec-base-layer typeWide">
                  <h1>Xác Nhận Chi Tiết Đơn Hàng</h1>
                  <div className="wrap">
                    <p className="ec-base-help">
                      Vui lòng kiểm tra chi tiết đơn hàng của bạn và nhấn "ĐẶT
                      HÀNG".
                    </p>
                    {/* app tag */}
                    <div id="ec-orderform-confirm-head" />
                    {/* Customer information */}
                    <div className="pannelArea displaynone">
                      <div className="title">
                        <h2>Thông tin đơn hàng</h2>
                      </div>
                      <div className="contents">
                        <div className="segment">
                          <div className="ec-base-table typeView">
                            <table border={1}>
                              <caption>
                                Thông tin đơn hàng
                              </caption>
                              <tbody className="address_form">
                                <tr>
                                  <th scope="row">Người đặt hàng</th>
                                  <td>
                                    <span className="ec-shop-confirm_oname" />(<span className="ec-shop-confirm_oemail" />)
                                  </td>
                                </tr>
                                <tr className="ec-shop-confirm-billingInfo-phoneNumber">
                                  <th scope="row">Liên hệ</th>
                                  <td>
                                    <span className="displaynone"><span className="ec-shop-confirm_ophone" /></span>
                                    <span className="ec-shop-delimiter">/</span>
                                    <span className="displaynone"><span className="ec-shop-confirm_ocell" /></span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* App shipping address */}
                    <div className="pannelArea" id="ec-shop-confirm-appshippingInfo">
                      <div className="title">
                        <h2>Thông tin người đặt hàng</h2>
                      </div>
                      <div className="contents">
                        <div className="segment">
                          <div className="ec-base-table typeView">
                            <table border={1}>
                              <colgroup>
                                <col style={{width: '88px'}} />
                                <col style={{width: 'auto'}} />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th scope="row">Hộ và tên</th>
                                  <td>
                                    <span className="ec-shop-confirm_rname" />
                                    <span className="ec-shop-confirm_rname_english displaynone" />
                                    <span className="ec-shop-confirm_rpron_name displaynone" /><br />
                                    (<span className="ec-shop-confirm_oemail" />)
                                  </td>
                                </tr>
                                <tr className="ec-shop-confirm-shippingInfo-oversea-phoneNumber">
                                  <th scope="row">Số điện thoại</th>
                                  <td>
                                    <span className="displaynone"><span className="ec-shop-confirm_rphone" /></span>
                                    <span className="ec-shop-delimiter">/</span>
                                    <span className><span className="ec-shop-confirm_rcell" /></span>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Địa Chỉ Email</th>
                                  <td>
                                    <span className="ec-shop-confirm_oemail" />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div id="ec-shop-confirm-appshippingInfo-shippingInfo" />
                      </div>
                    </div>
                    {/* Shipping information */}
                    <div className="pannelArea" id="ec-shop-confirm-shippingInfo">
                      <div className="title">
                        <h2>Thông tin vận chuyển</h2>
                      </div>
                      <div className="contents">
                        <div className="segment">
                          {/* Shipping information */}
                          <div className="ec-base-table typeView">
                            <table border={1}>
                              <caption>
                                Địa chỉ nhận hàng
                              </caption>
                              <tbody>
                                <tr className="ec-shop-confirm-shippingAddressGlobal">
                                  <th scope="row">Địa chỉ</th>
                                  <td>
                                    <span className="ec-shop-confirm_jigsaw_full_addr" />
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Ghi chú vận chuyển</th>
                                  <td>
                                    <span className="displaynone ec-shop-confirm_shipcompany_area"><span className="ec-shop-confirm_shipcompany" /></span>
                                    <span className="displaynone gBlank5"><span className="ec-shop-confirm_hope_date" /></span>
                                    <span className="displaynone gBlank5"><span className="ec-shop-confirm_hope_time" /></span>
                                    <span className="gBlank5"><span className="ec-shop-confirm_delivery_msg" /></span>
                                  </td>
                                </tr>
                                <tr className="ec-shop-confirm-storePickup">
                                  <th scope="row">受取り店舗</th>
                                  <td>
                                    Nhận tại cửa hàng<span className="ec-shop-confirm-storePickupAddress" />
                                    <p className="ec-base-help">
                                      <span className="ec-shop-confirm-storePickupDate txtNormal" />
                                    </p>
                                  </td>
                                </tr>
                                <tr className="displaynone">
                                  <th scope="row">Phí vận chuyển</th>
                                  <td>
                                    <div className="ec-shop-shipping_additional_fee_show displaynone">
                                      <p className="gBreak5">
                                        <span className="txtEm">đ<span id="f_addr_total_ship_fee_id" /></span>
                                      </p>
                                    </div>
                                    <div className="ec-shop-shipping_additional_fee_hide">
                                      <p className="gBreak5">
                                        <span className="txtEm">đ<span id="f_addr_total_ship_fee_id" /></span>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* [Order items] */}
                    <div className="pannelArea">
                      <div className="title">
                        <h2>Lịch sử đơn hàng</h2>
                      </div>
                      <div className="contents">
                        {/* List of ordered items */}
                        <div className="orderArea">
                          <div className="xans-element- xans-order xans-order-oversealist">
                            {/* Notes: Product repetition */}
                            <div className="ec-base-prdInfo xans-record-">
                              <div className="prdBox">
                                <div className="thumbnail">
                                  <a href="/product/detail.html?product_no=391&cate_no=1"><img src="./assets/imgs/a719d1afa7582b41d123f62fce50897d.jpg" alt="" width={90} height={90} /></a>
                                </div>
                                <div className="description">
                                  <strong className="prdName" title="Product Name">
                                    <a href="/product/nồi-điện-đa-năng-locklock-ejp116blk-08-lít/391/category/1/" className="ec-product-name">Nồi điện đa năng Lock&amp;Lock EJP116BLK
                                      (0.8 Lít)</a></strong>
                                  <ul className="info">
                                    <li title="Expiration Date" className="displaynone">
                                      Ngày Hết Hạn
                                    </li>
                                    <li title="Option">
                                      <p className="option displaynone" />
                                    </li>
                                    <li>Số lượng: 1 sản phẩm</li>
                                    <li>
                                      <span id>Giá sản phẩm: đ888,000
                                      </span>
                                      <span className="displaynone">()</span>
                                    </li>
                                    <li id className>
                                      Giảm giá:
                                      <span className="txtWarn">-đ<span id>222,000</span>
                                      </span>
                                      <span className="txtWarn displaynone">()</span>
                                    </li>
                                    <li className="displaynone">
                                      Khối lượng : 1.60kg * 1 = 1.60kg
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Notes */}
                            {/* Notes: Product repetition */}
                            <div className="ec-base-prdInfo xans-record-">
                              <div className="prdBox">
                                <div className="thumbnail">
                                  <a href="/product/detail.html?product_no=713&cate_no=1"><img src="./assets/imgs/e44184d10cbfbc36e75a7fdd1cc73ad3.jpg" alt="" width={90} height={90} /></a>
                                </div>
                                <div className="description">
                                  <strong className="prdName" title="Product Name">
                                    <a href="/product/nồi-cơm-điện-locklock-compact-rice-cooker-12l-màu-đen-ejr346blk/713/category/1/" className="ec-product-name">Nồi cơm điện Lock&amp;Lock Compact Rice
                                      Cooker 1.2L màu đen EJR346BLK</a></strong>
                                  <ul className="Option">
                                    <li title="Expiration Date" className="displaynone">
                                      Ngày Hết Hạn
                                    </li>
                                    <li title="Option">
                                      <p className="option displaynone" />
                                    </li>
                                    <li>Số lượng: 1 sản phẩm</li>
                                    <li>
                                      <span id>Giá sản phẩm: đ1,970,000
                                      </span>
                                      <span className="displaynone">()</span>
                                    </li>
                                    <li id className>
                                      Giảm giá:
                                      <span className="txtWarn">-đ<span id>493,000</span>
                                      </span>
                                      <span className="txtWarn displaynone">()</span>
                                    </li>
                                    <li className="displaynone">
                                      Khối lượng : 5.50kg * 1 = 5.50kg
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Notes */}
                          </div>
                        </div>
                        {/* Buy Now checkout form */}
                        <div id="ec-shop-confirm-direct-buy-info" className="orderArea displaynone" />
                        <div id="ec-shop-confirm-direct-buy-template" className="displaynone">
                          <div className="ec-base-prdInfo">
                            <div className="prdBox">
                              <div className="thumbnail">
                                <a className="ec-shop-confirm-direct-buy-product-detail-url"><img className="ec-shop-confirm-direct-buy-product-image" src="./assets/imgs/img_product_big.gif" alt="" width={90} height={90} /></a>
                              </div>
                              <div className="description">
                                <strong className="prdName ec-shop-confirm-direct-buy-product-name-link" title="Product Name" />
                                <ul className="info">
                                  <li title="Expiration Date" className="displaynone ec-shop-confirm-direct-buy-expiration-date-display">
                                    <span className="ec-shop-confirm-direct-buy-expiration-date" />Sử dụng từ
                                  </li>
                                  <li title="Option">
                                    <p className="option displaynone ec-shop-confirm-direct-buy-option-str" />
                                  </li>
                                  <li>
                                    Số lượng:
                                    <span className="ec-shop-confirm_direct-buy-quantity" />
                                  </li>
                                  <li>
                                    Giá sản phẩm:
                                    <span><span className="ec-shop-confirm-direct-buy-product-purchase-price" />
                                    </span>
                                    <span className="displaynone ec-shop-confirm-direct-buy-product-purchase-price-ref" />
                                  </li>
                                  <li className="displaynone ec-shop-confirm-direct-buy-product-discount-price-display">
                                    Giảm gi:
                                    <span className="txtWarn">-<span className="ec-shop-confirm-direct-buy-product-discount-price" />
                                    </span>
                                    <span className="txtWarn displaynone ec-shop-confirm-direct-buy-product-discount-price-ref" />
                                  </li>
                                  <li className="displaynone">
                                    Khối lượng : kg * = kg
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="prdFoot" title="Subtotal">
                              <span className="gLeft">Tổng Phụ</span>
                              <span className="txtStrong gRight">
                                <span className="ec-shop-confirm-direct-buy-product-total-price" />
                                <span className="refer displaynone ec-shop-confirm-direct-buy-product-total-ref" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="totalWeight displaynone">
                          Tổng khối lượng : <span>7.10kg</span>
                        </div>
                      </div>
                    </div>
                    {/* [Gift] */}
                    <div className="pannelArea" id="ec-shop-confirm_gift_list_area_id">
                      <div className="title">
                        <h2>Quà Tặng Miễn Phí</h2>
                      </div>
                      <div className="contents">
                        <div className="giftArea" id="ec-shop-confirm_gift_list_id" />
                      </div>
                    </div>
                    {/* [Payment method] */}
                    <div className="pannelArea">
                      <div className="title">
                        <h2>Phương Thức Thanh Toán</h2>
                      </div>
                      <div className="contents">
                        <div className="segment">
                          <div className="ec-base-table typeView">
                            <table border={1}>
                              <caption>
                                Phương Thức Thanh Toán
                              </caption>
                              <colgroup>
                                <col style={{width: '105px'}} />
                                <col style={{width: 'auto'}} />
                              </colgroup>
                              <tbody id="ec-shop-confirm_paymethod" />
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* [Point incentives] */}
                    <div className="pannelArea" id="ec-shop-confirm_sum_mileage_area">
                      <div className="title">
                        <h2>Ưu đãi điểm thưởng</h2>
                      </div>
                      <div className="contents">
                        <div className="segment">
                          <div className="ec-base-table gCellNarrow">
                            <table border={1}>
                              <caption>
                                Ưu đãi điểm thưởng
                              </caption>
                              <colgroup>
                                <col style={{width: '160px'}} />
                                <col style={{width: 'auto'}} />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th scope="row">Điểm thưởng (sản phẩm)</th>
                                  <td className="right">
                                    <span id="ec-shop-confirm_product_mileage" />
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                    Điểm thưởng (thành viên)
                                  </th>
                                  <td className="right">
                                    <span id="ec-shop-confirm_member_mileage" />
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Điểm thưởng (coupon)</th>
                                  <td className="right">
                                    <span id="ec-shop-confirm_coupon_mileage" />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="totalPay">
                            <h3 className="heading">Tổng (dự kiến)</h3>
                            <strong className="txtEm"><span id="ec-shop-confirm_sum_mileage" /></strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* [Payment details] */}
                    <div className="pannelArea">
                      <div className="title">
                        <h2>Tổng Thanh Toán</h2>
                      </div>
                      <div className="contents">
                        <div className="segment">
                          <div className="ec-base-table gCellNarrow">
                            <table border={1}>
                              <caption>
                                Tổng Thanh Toán
                              </caption>
                              <colgroup>
                                <col style={{width: '160px'}} />
                                <col style={{width: 'auto'}} />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th scope="row">Thanh Toán</th>
                                  <td id="ec-shop-confirm_total_product_base_price_id" className="right">
                                    đ2,858,000
                                  </td>
                                </tr>
                                <tr className="displaynone">
                                  <th scope="row">VAT</th>
                                  <td id="ec-shop-confirm_total_vat_price_id" className="right">
                                    +đ
                                  </td>
                                </tr>
                                <tr className="ec-order-expandwrap" id="ec-shop-confirm_total_sale_area2">
                                  <th scope="row">
                                    <strong className="ec-order-expand">Giảm giá khác
                                    </strong>
                                  </th>
                                  <td className="right">
                                    -đ<span id="ec-shop-confirm_total_sale_price_view" />
                                  </td>
                                </tr>
                                <tr className="discountArea">
                                  <td colSpan={2}>
                                    <div id="ec-shop-confirm_total_sale_price_area" className="ec-base-box">
                                      <strong className="heading">Tổng cộng</strong>
                                      <div className="ec-base-table gCellNarrow">
                                        <table border={1}>
                                          <caption>
                                            Chi Tiết Giảm Giá
                                          </caption>
                                          <colgroup>
                                            <col style={{width: '150px'}} />
                                            <col style={{width: 'auto'}} />
                                          </colgroup>
                                          <tbody id="confirm_total_benefit_list">
                                            <tr id="ec-shop-total_periodsale_area">
                                              <th>Giảm giá có thời hạn</th>
                                              <td className="right">
                                                -<span id="ec-shop-mBenefitPeriodSale" />
                                              </td>
                                            </tr>
                                            <tr id="ec-shop-total_membersale_area">
                                              <th>Giảm giá thành viên</th>
                                              <td className="right">
                                                -<span id="ec-shop-mBenefitMemberSale" />
                                              </td>
                                            </tr>
                                            <tr id="ec-shop-total_rebuysale_area">
                                              <th>Giảm giá tái đặt hàng</th>
                                              <td className="right">
                                                -<span id="ec-shop-mBenefitRebuySale" />
                                              </td>
                                            </tr>
                                            <tr id="ec-shop-total_bulksale_area">
                                              <th>
                                                Giảm giá đặt hàng số lượng lớn
                                              </th>
                                              <td className="right">
                                                -<span id="ec-shop-mBenefitBulkSale" />
                                              </td>
                                            </tr>
                                            <tr id="ec-shop-total_pbpsale_area">
                                              <th>Về giảm giá PBP</th>
                                              <td className="right">
                                                -<span id="ec-shop-mBenefitPbpSale" />
                                              </td>
                                            </tr>
                                            <tr id="ec-shop-total_newproductsale_area">
                                              <th>Giảm giá sản phẩm mới</th>
                                              <td className="right">
                                                -<span id="ec-shop-mBenefitNewproductSale" />
                                              </td>
                                            </tr>
                                            <tr id="ec-shop-total_paymethodsale_area">
                                              <th>
                                                Giảm giá theo phương thức
                                                thanh toán
                                              </th>
                                              <td className="right">
                                                -<span id />
                                              </td>
                                            </tr>
                                            <tr id="ec-shop-total_setproductsale_area">
                                              <th>
                                                Mức giảm cho Sản Phẩm Được Áp
                                                Dụng
                                              </th>
                                              <td className="right">
                                                -<span id="ec-shop-mBenefitsetproductSale" />
                                              </td>
                                            </tr>
                                            <tr id="ec-shop-total_shipfeesale_area">
                                              <th>Giảm giá phí vận chuyển</th>
                                              <td className="right">
                                                -<span id="ec-shop-mBenefitShipfeeSale" />
                                              </td>
                                            </tr>
                                            <tr id="ec-shop-total_membergroupsale_area">
                                              <th>
                                                Giảm giá theo cấp bậc thành
                                                viên
                                              </th>
                                              <td className="right">
                                                -<span id="ec-shop-mBenefitMembergroupSale" />
                                              </td>
                                            </tr>
                                            <tr id="ec-shop-confirm_total_discountcode_price_area">
                                              <th>Áp dụng mã giảm giá</th>
                                              <td className="right">
                                                -<span id="ec-shop-confirm_total_discountcode_price_view" />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                    <div id="ec-shop-confirm_total_coupon_price_area" className="ec-base-box">
                                      <strong className="heading">Giảm giá coupon</strong>
                                      <div className="ec-base-table gCellNarrow">
                                        <table border={1}>
                                          <caption>
                                            Nội dung giảm giá
                                          </caption>
                                          <colgroup>
                                            <col style={{width: '150px'}} />
                                            <col style={{width: 'auto'}} />
                                          </colgroup>
                                          <tbody>
                                            <tr id="ec-shop-coupon_product_discount_area">
                                              <th>Mã Giảm Giá Sản Phẩm</th>
                                              <td className="right">
                                                -<span id="ec-shop-mProductCouponDiscount" />
                                              </td>
                                            </tr>
                                            <tr id="ec-shop-coupon_order_discount_area">
                                              <th>Mã Giảm Giá Mua Hàng</th>
                                              <td className="right">
                                                -<span id="ec-shop-txt_cpn_sale2" />
                                              </td>
                                            </tr>
                                            <tr id="ec-shop-coupon_delivery_discount_area">
                                              <th>Mã Giảm Giá Vận Chuyển</th>
                                              <td className="right">
                                                -<span id="ec-shop-mDeliveryCouponDiscount" />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                    <div id="ec-shop-confirm_total_addpay_summary_area" className="ec-base-box">
                                      <strong className="heading">Phương Thức Thanh Toán Khác</strong>
                                      <div className="ec-base-table gCellNarrow">
                                        <table border={1}>
                                          <caption>
                                            Phương Thức Thanh Toán Khác
                                          </caption>
                                          <colgroup>
                                            <col style={{width: '150px'}} />
                                            <col style={{width: 'auto'}} />
                                          </colgroup>
                                          <tbody>
                                            <tr id="ec-shop-confirm_used_mileage_area">
                                              <th scope="row">Điểm thưởng</th>
                                              <td className="right">
                                                -<span id="ec-shop-confirm_used_mileage" />
                                              </td>
                                            </tr>
                                            <tr id="ec-shop-confirm_used_deposit_area">
                                              <th scope="row">
                                                Tiền tích lũy
                                              </th>
                                              <td className="right">
                                                -<span id="ec-shop-confirm_used_deposit" />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Vận Chuyển</th>
                                  <td className="right">
                                    +<span id="ec-shop-total_ship_price_id" />
                                  </td>
                                </tr>
                                <tr id="ec-shop-total_local_ship_price_area">
                                  <th scope="row">Phụ Phí Vận Chuyển</th>
                                  <td className="right">
                                    +<span id="ec-shop-total_local_ship_price_id" />
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Phí thanh toán trả sau</th>
                                  <td className="right">
                                    +<span id="ec-shop-total_defer_commission">đ</span>
                                  </td>
                                </tr>
                                <tr className="displaynone">
                                  <th scope="row">
                                    <span id="confirm_total_tax_name_id" />
                                  </th>
                                  <td className="right">
                                    +<span id="confirm_total_tax_id" />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="totalPay gBlank10">
                            <h3 className="heading">Tổng cộng</h3>
                            <strong className="txtStrong">
                              đ<span id="ec-shop-confirm_payment_total_order_sale_price_view" />
                              <span className="refer displaynone">(<span id="ec-shop-confirm_payment_total_order_sale_price_ref_view" />)</span>
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pannelArea displaynone">
                      <div className="title">
                        <h2>Thắc Mắc Khác</h2>
                      </div>
                      <div className="contents">
                        <div className="segment">
                          <div className="ec-base-table typeView">
                            <table border={1}>
                              <caption>
                                Thắc Mắc Khác
                              </caption>
                              <colgroup>
                                <col style={{width: '105px'}} />
                                <col style={{width: 'auto'}} />
                              </colgroup>
                              <tbody id="ec-shop-confirm_ord_add" className="displaynone" />
                              <tbody id="ec-shop-confirm_question_area" className="questionArea displaynone">
                                <tr>
                                  <th scope="row">Thắc Mắc<br />Khác</th>
                                  <td id="ec-shop-confirm_question" />
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* app tag */}
                  <div id="ec-orderform-confirm-tail" />
                  <div className="ec-base-button gFull">
                    <button type="button" className="btnSubmit" id="ec-shop_btn_layer_payment">
                      Thanh toán
                    </button>
                  </div>
                  <button type="button" className="btnClose">ĐÓNG</button>
                </div>
              </div>
              <input type="hidden" id="sPrdName" name="sPrdName" defaultValue="Nồi điện đa năng Lock&Lock EJP116BLK (0.8 Lít)외 1개" />
            </div>
          </form>
          <div id="progressPaybar" style={{display: 'none'}}>
            <div id="progressPaybarBackground" className="layerProgress" />
            <div id="progressPaybarView">
              <p className="graph">Đang tiến hành thanh toán</p>
              <p className="txt">
                Cửa sổ này sẽ tự động đóng<br />
                khi thanh toán đã được xử lý.<br />
                Vui lòng không đóng cửa sổ cho tới khi <br />
                quá trình xử lý hoàn tất.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default PayRes