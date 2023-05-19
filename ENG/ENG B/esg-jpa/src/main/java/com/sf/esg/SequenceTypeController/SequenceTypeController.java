package com.sf.esg.SequenceTypeController;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sf.esg.Bean.SequenceType;
import com.sf.esg.Service.SequenceTypeService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/admin")
public class SequenceTypeController {
	@Autowired
	private SequenceTypeService sqtyserv;
	
	@GetMapping("/sequenceType")
	public List<SequenceType> viewSequenceType(){
		return sqtyserv.viewSequenceType();
	}
	@GetMapping("/sequencetypebyid/{id}")
	public Optional<SequenceType> viewsequenceTypeById(@PathVariable(value="id") String sequencetype) {
		return sqtyserv.viewsequenceTypeById(sequencetype);
	}
	
}
