package com.sf.esg.Bean;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="SA_ENTITY_SEQUENCE_NUMBER_GEN")
public class Sequence {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "SEQUENCE_KEY_ID")
	private int sequencekeyid ;
	
    @Column(name = "SEQUENCE_TYPE")
	private String sequencetype;
    
    @Column(name = "TOT_WIDTH")
	private int totalwidth;
    
    @Column(name = "CHARSET" )
	private String charset;
    
    @Column(name = "CHAR_DESC" )
	private String chardescription;
    
    @Column(name = "INCLUDE_CHARSET" ,columnDefinition = "BIT")
	private boolean includecharset;
    
    @Column(name = "ORG_LEVEL_NUMBER")
	private int orglevelnumber;
    
    @Column(name = "ORG_LEVEL_CODE" )
	private String orglevelcode;
    
    @Column(name = "START_DATE")
	private String startdate;
    
    @Column(name = "END_DATE")
	private String enddate;
    
    @Column(name = "START_NO")
   	private int startno;
    
    @Column(name = "END_NO")
	private int endno;
    
    @Column(name = "LAST_USED_NO")
	private int lastusedno;
    
    @Column(name = "OPEN_STATUS" ,columnDefinition = "BIT")
	private boolean openstatus;
    
    @Column(name = "AUTO_MANUEL_IND" )
	private String automanuelind;
    
    
    @Column(name = "EDIT_DOC_DATE" ,columnDefinition = "BIT")
	private boolean	 editdocdate;
    
    @Column(name = "APPLICABILITY" ,columnDefinition = "BIT")
	private boolean applicability;
    
    @Column(name = "TXN_ID")
	private int txnid;
    
    @Column(name = "BANK_BRANCH_KEY")
   	private int bankbranchkey;

	public int getSequencekeyid() {
		return sequencekeyid;
	}

	public void setSequencekeyid(int sequencekeyid) {
		this.sequencekeyid = sequencekeyid;
	}

	public String getSequencetype() {
		return sequencetype;
	}

	public void setSequencetype(String sequencetype) {
		this.sequencetype = sequencetype;
	}

	public int getTotalwidth() {
		return totalwidth;
	}

	public void setTotalwidth(int totalwidth) {
		this.totalwidth = totalwidth;
	}

	public String getCharset() {
		return charset;
	}

	public void setCharset(String charset) {
		this.charset = charset;
	}

	public String getChardescription() {
		return chardescription;
	}

	public void setChardescription(String chardescription) {
		this.chardescription = chardescription;
	}

	public boolean isIncludecharset() {
		return includecharset;
	}

	public void setIncludecharset(boolean includecharset) {
		this.includecharset = includecharset;
	}

	public int getOrglevelnumber() {
		return orglevelnumber;
	}

	public void setOrglevelnumber(int orglevelnumber) {
		this.orglevelnumber = orglevelnumber;
	}

	public String getOrglevelcode() {
		return orglevelcode;
	}

	public void setOrglevelcode(String orglevelcode) {
		this.orglevelcode = orglevelcode;
	}

	public String getStartdate() {
		return startdate;
	}

	public void setStartdate(String startdate) {
		this.startdate = startdate;
	}

	public String getEnddate() {
		return enddate;
	}

	public void setEnddate(String enddate) {
		this.enddate = enddate;
	}

	public int getStartno() {
		return startno;
	}

	public void setStartno(int startno) {
		this.startno = startno;
	}

	public int getEndno() {
		return endno;
	}

	public void setEndno(int endno) {
		this.endno = endno;
	}

	public int getLastusedno() {
		return lastusedno;
	}

	public void setLastusedno(int lastusedno) {
		this.lastusedno = lastusedno;
	}

	public boolean isOpenstatus() {
		return openstatus;
	}

	public void setOpenstatus(boolean openstatus) {
		this.openstatus = openstatus;
	}

	public String getAutomanuelind() {
		return automanuelind;
	}

	public void setAutomanuelind(String automanuelind) {
		this.automanuelind = automanuelind;
	}

	public boolean isEditdocdate() {
		return editdocdate;
	}

	public void setEditdocdate(boolean editdocdate) {
		this.editdocdate = editdocdate;
	}

	public boolean isApplicability() {
		return applicability;
	}

	public void setApplicability(boolean applicability) {
		this.applicability = applicability;
	}

	public int getTxnid() {
		return txnid;
	}

	public void setTxnid(int txnid) {
		this.txnid = txnid;
	}

	public int getBankbranchkey() {
		return bankbranchkey;
	}

	public void setBankbranchkey(int bankbranchkey) {
		this.bankbranchkey = bankbranchkey;
	}
  

}
