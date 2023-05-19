package com.sf.esg.Service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.sf.esg.Bean.SequenceType;
import com.sf.esg.Repository.SequenceTypeRepository;

@Service
public class SequenceTypeService {
	@Autowired
	private SequenceTypeRepository sqtyp ;
	
	public List<SequenceType> viewSequenceType()
	{		
		return sqtyp.findAll();
	}
	
	public Optional<SequenceType> viewsequenceTypeById(String sequencetype) {
		return sqtyp.findById(sequencetype);
	}
         
}
