package com.sf.esg.Bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="SEQUENCE_TYPE")
public class SequenceType {
	
	@Id
	private String sequencetype ;
	
	@Column
	private String name ;
	
	@Column
	private String level ;

	public String getSequencetype() {
		return sequencetype;
	}

	public void setSequencetype(String sequencetype) {
		this.sequencetype = sequencetype;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}
	
	
	

}
