package com.sf.esg.SequenceTypeController;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sf.esg.Bean.Sequence;
import com.sf.esg.Bean.SequenceType;
import com.sf.esg.Service.SequenceService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/admin")
public class SequenceController {
	@Autowired
	private SequenceService sqserv;
	
	@GetMapping("/sequence")
	public List<Sequence> viewSequence()
	{
		return sqserv.viewSequence();
	}
	
	@PutMapping("/modifysequence")
	public String modifySequence(@RequestBody Sequence sequence) { 
		return sqserv.modifySequence(sequence);
	}
	@GetMapping("/sequencenysequencetype/{id}")
	public  List<Sequence>findBySequencetype(@PathVariable(value = "id") String sequencetype)
	{
		return sqserv.findBySequencetype(sequencetype);
			
	}
	@PostMapping("/addsequence")
	public String addSequence(@RequestBody Sequence sq)
	{
		return sqserv.addSequence(sq);
	
	}
	@GetMapping("/sequencebyid/{id}")
	public Optional<Sequence> viewsequenceById(@PathVariable(value = "id") int sequencekeyid) {
		return sqserv.viewsequenceById(sequencekeyid);
	}
	@GetMapping("allstr/{id1}/{id2}")
	public List<Sequence> vies(@PathVariable(value="id1") String sequencetype ,@PathVariable(value="id2") String charset){
		return sqserv.vies(sequencetype, charset);
	}
	@PostMapping("/addSequenceonly")
	public String addSequenceonly(@RequestBody Sequence sequence){
		return sqserv.addSequenceonly(sequence);
	}
}
