interface IKrxSectionResponse {
    OutBlock_1: IKisSection[];
}

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