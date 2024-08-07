
interface IKisAuth {
    length: number;
    access_token: string,
    token_type: string,
    expires_in: number,
    acess_token_token_expired: string,
}

interface IOutput1 {
    bstp_nmix_hgpr: string,
    bstp_nmix_lwpr: string,
    bstp_nmix_prpr : string,
}

interface IKisSection {
    length: number;
    rt_cd: string,
    msg_cd: string,
    msg1: string,
    output1: IOutput1,
    output2: [],

    stck_bsop_date:string,
    mod_yn:string,
    bstp_nmix_prdy_vrss: string,
    prdy_vrss_sign: string,
    bstp_nmix_prdy_ctrt: string,
    prdy_nmix: string,
    acml_vol: string,
    acml_tr_pbmn: string,
    hts_kor_isnm: string,
    bstp_nmix_prpr: string,
    bstp_cls_code: string,
    prdy_vol: string,
    bstp_nmix_oprc: string,
    bstp_nmix_hgpr: string,
    bstp_nmix_lwpr: string,
    futs_prdy_oprc: string,
    futs_prdy_hgpr: string,
    futs_prdy_lwpr: string,
}

interface IKisAskPrice {
    rt_cd	성공 실패 여부	String	Y	1	0 : 성공
0 이외의 값 : 실패
msg_cd	응답코드	String	Y	8	응답코드
msg1	응답메세지	String	Y	80	응답메세지
output1	응답상세1	Array	Y		
-aspr_acpt_hour	호가 접수 시간	String	Y	6	
-askp1	매도호가1	String	Y	10	
-askp2	매도호가2	String	Y	10	
-askp3	매도호가3	String	Y	10	
-askp4	매도호가4	String	Y	10	
-askp5	매도호가5	String	Y	10	
-askp6	매도호가6	String	Y	10	
-askp7	매도호가7	String	Y	10	
-askp8	매도호가8	String	Y	10	
-askp9	매도호가9	String	Y	10	
-askp10	매도호가10	String	Y	10	
-bidp1	매수호가1	String	Y	10	
-bidp2	매수호가2	String	Y	10	
-bidp3	매수호가3	String	Y	10	
-bidp4	매수호가4	String	Y	10	
-bidp5	매수호가5	String	Y	10	
-bidp6	매수호가6	String	Y	10	
-bidp7	매수호가7	String	Y	10	
-bidp8	매수호가8	String	Y	10	
-bidp9	매수호가9	String	Y	10	
-bidp10	매수호가10	String	Y	10	
-askp_rsqn1	매도호가 잔량1	String	Y	12	
-askp_rsqn2	매도호가 잔량2	String	Y	12	
-askp_rsqn3	매도호가 잔량3	String	Y	12	
-askp_rsqn4	매도호가 잔량4	String	Y	12	
-askp_rsqn5	매도호가 잔량5	String	Y	12	
-askp_rsqn6	매도호가 잔량6	String	Y	12	
-askp_rsqn7	매도호가 잔량7	String	Y	12	
-askp_rsqn8	매도호가 잔량8	String	Y	12	
-askp_rsqn9	매도호가 잔량9	String	Y	12	
-askp_rsqn10	매도호가 잔량10	String	Y	12	
-bidp_rsqn1	매수호가 잔량1	String	Y	12	
-bidp_rsqn2	매수호가 잔량2	String	Y	12	
-bidp_rsqn3	매수호가 잔량3	String	Y	12	
-bidp_rsqn4	매수호가 잔량4	String	Y	12	
-bidp_rsqn5	매수호가 잔량5	String	Y	12	
-bidp_rsqn6	매수호가 잔량6	String	Y	12	
-bidp_rsqn7	매수호가 잔량7	String	Y	12	
-bidp_rsqn8	매수호가 잔량8	String	Y	12	
-bidp_rsqn9	매수호가 잔량9	String	Y	12	
-bidp_rsqn10	매수호가 잔량10	String	Y	12	
-askp_rsqn_icdc1	매도호가 잔량 증감1	String	Y	10	
-askp_rsqn_icdc2	매도호가 잔량 증감2	String	Y	10	
-askp_rsqn_icdc3	매도호가 잔량 증감3	String	Y	10	
-askp_rsqn_icdc4	매도호가 잔량 증감4	String	Y	10	
-askp_rsqn_icdc5	매도호가 잔량 증감5	String	Y	10	
-askp_rsqn_icdc6	매도호가 잔량 증감6	String	Y	10	
-askp_rsqn_icdc7	매도호가 잔량 증감7	String	Y	10	
-askp_rsqn_icdc8	매도호가 잔량 증감8	String	Y	10	
-askp_rsqn_icdc9	매도호가 잔량 증감9	String	Y	10	
-askp_rsqn_icdc10	매도호가 잔량 증감10	String	Y	10	
-bidp_rsqn_icdc1	매수호가 잔량 증감1	String	Y	10	
-bidp_rsqn_icdc2	매수호가 잔량 증감2	String	Y	10	
-bidp_rsqn_icdc3	매수호가 잔량 증감3	String	Y	10	
-bidp_rsqn_icdc4	매수호가 잔량 증감4	String	Y	10	
-bidp_rsqn_icdc5	매수호가 잔량 증감5	String	Y	10	
-bidp_rsqn_icdc6	매수호가 잔량 증감6	String	Y	10	
-bidp_rsqn_icdc7	매수호가 잔량 증감7	String	Y	10	
-bidp_rsqn_icdc8	매수호가 잔량 증감8	String	Y	10	
-bidp_rsqn_icdc9	매수호가 잔량 증감9	String	Y	10	
-bidp_rsqn_icdc10	매수호가 잔량 증감10	String	Y	10	
-total_askp_rsqn	총 매도호가 잔량	String	Y	12	
-total_bidp_rsqn	총 매수호가 잔량	String	Y	12	
-total_askp_rsqn_icdc	총 매도호가 잔량 증감	String	Y	10	
-total_bidp_rsqn_icdc	총 매수호가 잔량 증감	String	Y	10	
-ovtm_total_askp_icdc	시간외 총 매도호가 증감	String	Y	10	
-ovtm_total_bidp_icdc	시간외 총 매수호가 증감	String	Y	10	
-ovtm_total_askp_rsqn	시간외 총 매도호가 잔량	String	Y	12	
-ovtm_total_bidp_rsqn	시간외 총 매수호가 잔량	String	Y	12	
-ntby_aspr_rsqn	순매수 호가 잔량	String	Y	12	
-new_mkop_cls_code	신 장운영 구분 코드	String	Y	2	'00' : 장전 예상체결가와 장마감 동시호가
'49' : 장후 예상체결가

(1) 첫 번째 비트
1 : 장개시전
2 : 장중
3 : 장종료후
4 : 시간외단일가
7 : 일반Buy-in
8 : 당일Buy-in
(2) 두 번째 비트
0 : 보통
1 : 종가
2 : 대량
3 : 바스켓
7 : 정리매매
8 : Buy-in
output2	응답상세2	Array	Y		
-antc_mkop_cls_code	예상 장운영 구분 코드	String	Y	3	311 : 예상체결시작
112 : 예상체결종료
-stck_prpr	주식 현재가	String	Y	10	
-stck_oprc	주식 시가	String	Y	10	
-stck_hgpr	주식 최고가	String	Y	10	
-stck_lwpr	주식 최저가	String	Y	10	
-stck_sdpr	주식 기준가	String	Y	10	
-antc_cnpr	예상 체결가	String	Y	10	
-antc_cntg_vrss_sign	예상 체결 대비 부호	String	Y	1	1 : 상한
2 : 상승
3 : 보합
4 : 하한
5 : 하락
-antc_cntg_vrss	예상 체결 대비	String	Y	10	
-antc_cntg_prdy_ctrt	예상 체결 전일 대비율	String	Y	11	
-antc_vol	예상 거래량	String	Y	18	
-stck_shrn_iscd	주식 단축 종목코드	String	Y	9	
-vi_cls_code
}